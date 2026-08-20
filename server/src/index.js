import 'dotenv/config';
import 'express-async-errors'; // captura erros de rotas async e envia ao error handler
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import crypto from 'node:crypto';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { calcularPrazo } from './prazos.js';
import { getFeed } from './feed.js';
import { consultarProcesso } from './datajud.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// JWT_SECRET obrigatório: sem fallback inseguro. Em produção deve vir do ambiente.
// Se faltar, gera um segredo aleatório por boot (tokens não sobrevivem a restart, mas nunca é forjável).
const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(48).toString('hex');
if (!process.env.JWT_SECRET) {
  console.warn('[AVISO] JWT_SECRET não definido — usando segredo aleatório temporário. Defina JWT_SECRET no ambiente.');
}

const prisma = new PrismaClient();
const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 1); // atrás do proxy do Render (necessário p/ rate-limit por IP)

// Cabeçalhos de segurança (CSP permite estilos inline usados pelo app e imagens data:)
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'https://challenges.cloudflare.com'],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', 'https:'],
      connectSrc: ["'self'", 'https://challenges.cloudflare.com'],
      frameSrc: ["'self'", 'https://challenges.cloudflare.com'],
      objectSrc: ["'none'"],
      frameAncestors: ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// CORS restrito: por padrão desabilitado (app é servido na mesma origem).
// Para liberar origens específicas, defina CORS_ORIGIN=https://a.com,https://b.com
app.use(cors({ origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : false }));

// ---------- Bloqueio geográfico (só países permitidos, padrão: Brasil) ----------
// Desative com GEO_ENFORCE=0. Ajuste países com GEO_ALLOW=BR,PT (etc).
const GEO_ALLOW = (process.env.GEO_ALLOW || 'BR').split(',').map((s) => s.trim().toUpperCase());
const GEO_ENFORCE = process.env.GEO_ENFORCE !== '0';
function ehIpLocal(ip) {
  if (!ip) return true;
  return ip === '::1' || ip.startsWith('127.') || ip.startsWith('10.') ||
    ip.startsWith('192.168.') || /^172\.(1[6-9]|2\d|3[01])\./.test(ip);
}
// geoip-lite é carregado de forma preguiçosa (só na 1ª requisição) para o boot ser leve/rápido.
let _geoip = null;
async function geoLookup(ip) {
  try { if (!_geoip) _geoip = (await import('geoip-lite')).default; return _geoip.lookup(ip); }
  catch { return null; }
}
app.use(async (req, res, next) => {
  if (!GEO_ENFORCE) return next();
  if (req.path === '/api/health') return next(); // health check do Render
  const ip = (req.ip || '').replace('::ffff:', '');
  if (ehIpLocal(ip)) return next();
  const geo = await geoLookup(ip);
  if (!geo || GEO_ALLOW.includes(geo.country)) return next(); // desconhecido: libera (evita falso bloqueio)
  return res.status(403).json({ error: 'Acesso permitido apenas do Brasil.' });
});

app.use(express.json({ limit: '1mb' }));

// Rate limiting global (protege contra abuso/DoS leve)
app.use('/api', rateLimit({ windowMs: 60 * 1000, max: 200, standardHeaders: true, legacyHeaders: false }));
// Rate limiting estrito no login (anti força-bruta)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, max: 10, standardHeaders: true, legacyHeaders: false,
  message: { error: 'Muitas tentativas de login. Tente novamente em alguns minutos.' },
});
// Atraso progressivo anti-robô: cada tentativa após a 3ª fica mais lenta (frustra bots automatizados)
const loginSlowDown = slowDown({
  windowMs: 15 * 60 * 1000, delayAfter: 3, delayMs: (hits) => hits * 500, maxDelayMs: 10000,
});

// ---------- Auth ----------
function auth(req, res, next) {
  const h = req.headers.authorization || '';
  const token = h.startsWith('Bearer ') ? h.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'não autenticado' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'token inválido' });
  }
}

// Config pública do frontend (ex.: chave do CAPTCHA). Não expõe segredos.
app.get('/api/config', (req, res) => {
  res.json({ turnstileSiteKey: process.env.TURNSTILE_SITE_KEY || null });
});

// Verifica o token do Cloudflare Turnstile (CAPTCHA "não sou robô"). Só ativa se TURNSTILE_SECRET existir.
async function verificarTurnstile(token, ip) {
  if (!process.env.TURNSTILE_SECRET) return true; // CAPTCHA desativado
  if (!token) return false;
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: process.env.TURNSTILE_SECRET, response: token, remoteip: ip }),
    });
    const j = await r.json();
    return !!j.success;
  } catch { return false; }
}

app.post('/api/login', loginLimiter, loginSlowDown, async (req, res) => {
  const { email, senha, website, captcha } = req.body;
  // Honeypot: campo oculto que só robôs preenchem. Se vier preenchido, rejeita silenciosamente.
  if (website) return res.status(400).json({ error: 'requisição inválida' });
  // CAPTCHA "não sou robô" (se configurado)
  if (!(await verificarTurnstile(captcha, req.ip))) {
    return res.status(400).json({ error: 'Confirme que você não é um robô.' });
  }
  if (typeof email !== 'string' || typeof senha !== 'string') {
    return res.status(400).json({ error: 'dados inválidos' });
  }
  const u = await prisma.usuario.findUnique({ where: { email: email.toLowerCase() } });
  if (!u || !bcrypt.compareSync(senha, u.senhaHash)) {
    return res.status(401).json({ error: 'e-mail ou senha inválidos' });
  }
  const token = jwt.sign({ id: u.id, nome: u.nome }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, usuario: { id: u.id, nome: u.nome, email: u.email } });
});

// Troca de senha (autenticado): exige a senha atual + nova senha forte.
app.post('/api/change-password', auth, async (req, res) => {
  const { senhaAtual, novaSenha } = req.body || {};
  if (typeof senhaAtual !== 'string' || typeof novaSenha !== 'string') {
    return res.status(400).json({ error: 'dados inválidos' });
  }
  if (novaSenha.length < 8) {
    return res.status(400).json({ error: 'A nova senha deve ter pelo menos 8 caracteres.' });
  }
  const u = await prisma.usuario.findUnique({ where: { id: req.user.id } });
  if (!u || !bcrypt.compareSync(senhaAtual, u.senhaHash)) {
    return res.status(401).json({ error: 'Senha atual incorreta.' });
  }
  await prisma.usuario.update({ where: { id: u.id }, data: { senhaHash: bcrypt.hashSync(novaSenha, 10) } });
  res.json({ ok: true });
});

// helper CRUD genérico simplificado
function crud(path, model, { include, transform } = {}) {
  const r = express.Router();
  r.get('/', async (req, res) => {
    const items = await prisma[model].findMany({ include, orderBy: { createdAt: 'desc' } });
    res.json(items);
  });
  r.get('/:id', async (req, res) => {
    const item = await prisma[model].findUnique({ where: { id: req.params.id }, include });
    if (!item) return res.status(404).json({ error: 'não encontrado' });
    res.json(item);
  });
  r.post('/', async (req, res) => {
    const data = transform ? transform(req.body) : req.body;
    const item = await prisma[model].create({ data });
    res.status(201).json(item);
  });
  r.put('/:id', async (req, res) => {
    const data = transform ? transform(req.body) : req.body;
    const item = await prisma[model].update({ where: { id: req.params.id }, data });
    res.json(item);
  });
  r.delete('/:id', async (req, res) => {
    await prisma[model].delete({ where: { id: req.params.id } });
    res.json({ ok: true });
  });
  app.use(path, auth, r);
}

// ---------- Clientes ----------
crud('/api/clientes', 'cliente', {
  transform: (b) => ({
    tipo: b.tipo || 'PF', nome: b.nome, cpfCnpj: b.cpfCnpj || null,
    telefone: b.telefone || null, email: b.email || null,
    status: b.status || 'ativo', responsavel: b.responsavel || null,
    observacoes: b.observacoes || null,
    rg: b.rg || null, nascimento: b.nascimento ? new Date(b.nascimento) : null,
    profissao: b.profissao || null, estadoCivil: b.estadoCivil || null,
    endereco: b.endereco || null, cidade: b.cidade || null, uf: b.uf || null, cep: b.cep || null,
    tags: b.tags || null, origem: b.origem || null,
  }),
});
// visão 360º do cliente
app.get('/api/clientes/:id/completo', auth, async (req, res) => {
  const id = req.params.id;
  const cliente = await prisma.cliente.findUnique({ where: { id } });
  if (!cliente) return res.status(404).json({ error: 'não encontrado' });
  const [processos, prazos, lancamentos, valoresTerceiro, tarefas] = await Promise.all([
    prisma.processo.findMany({ where: { clienteId: id }, orderBy: { createdAt: 'desc' } }),
    prisma.prazo.findMany({ where: { clienteId: id }, orderBy: { dataFatal: 'asc' } }),
    prisma.lancamentoFinanceiro.findMany({ where: { clienteId: id }, orderBy: { createdAt: 'desc' } }),
    prisma.valorTerceiro.findMany({ where: { clienteId: id }, orderBy: { createdAt: 'desc' } }),
    prisma.tarefa.findMany({ where: { clienteId: id }, orderBy: { createdAt: 'desc' } }),
  ]);
  res.json({ cliente, processos, prazos, lancamentos, valoresTerceiro, tarefas });
});

// Importação em massa de clientes (de outro sistema, via CSV)
app.post('/api/clientes/import', auth, async (req, res) => {
  const linhas = Array.isArray(req.body?.clientes) ? req.body.clientes : [];
  if (linhas.length > 2000) {
    return res.status(413).json({ error: 'Importação limitada a 2000 clientes por vez.' });
  }
  let criados = 0;
  for (const l of linhas) {
    const nome = (l.nome || l.Nome || '').trim();
    if (!nome) continue;
    await prisma.cliente.create({
      data: {
        nome, tipo: (l.tipo || 'PF').toUpperCase() === 'PJ' ? 'PJ' : 'PF',
        cpfCnpj: l.cpfCnpj || l.documento || null,
        telefone: l.telefone || null, email: l.email || null,
        status: l.status || 'ativo', responsavel: l.responsavel || null,
      },
    });
    criados++;
  }
  res.json({ criados });
});

// ---------- Processos ----------
crud('/api/processos', 'processo', {
  include: { cliente: true },
  transform: (b) => ({
    clienteId: b.clienteId, numeroCnj: b.numeroCnj || null, titulo: b.titulo,
    area: b.area || 'Cível', status: b.status || 'ativo',
    prioridade: b.prioridade || 'normal',
    valorCausa: b.valorCausa != null && b.valorCausa !== '' ? Number(b.valorCausa) : null,
    poloAtivo: b.poloAtivo || null, poloPassivo: b.poloPassivo || null, advContrario: b.advContrario || null,
    vara: b.vara || null, comarca: b.comarca || null, orgao: b.orgao || null,
  }),
});
app.get('/api/processos/:id/completo', auth, async (req, res) => {
  const id = req.params.id;
  const processo = await prisma.processo.findUnique({ where: { id }, include: { cliente: true } });
  if (!processo) return res.status(404).json({ error: 'não encontrado' });
  const [movimentacoes, prazos, lancamentos, valoresTerceiro, tarefas] = await Promise.all([
    prisma.movimentacao.findMany({ where: { processoId: id }, orderBy: { data: 'desc' } }),
    prisma.prazo.findMany({ where: { processoId: id }, orderBy: { dataFatal: 'asc' } }),
    prisma.lancamentoFinanceiro.findMany({ where: { processoId: id }, orderBy: { createdAt: 'desc' } }),
    prisma.valorTerceiro.findMany({ where: { processoId: id }, orderBy: { createdAt: 'desc' } }),
    prisma.tarefa.findMany({ where: { processoId: id }, orderBy: { createdAt: 'desc' } }),
  ]);
  res.json({ processo, movimentacoes, prazos, lancamentos, valoresTerceiro, tarefas });
});
// Sincroniza andamentos do processo com o DataJud/CNJ (atualização automática).
app.post('/api/processos/:id/sincronizar', auth, async (req, res) => {
  const proc = await prisma.processo.findUnique({ where: { id: req.params.id } });
  if (!proc) return res.status(404).json({ error: 'processo não encontrado' });
  if (!proc.numeroCnj) return res.status(400).json({ error: 'processo sem número CNJ' });
  try {
    const r = await consultarProcesso(proc.numeroCnj);
    if (!r.encontrado) return res.json({ encontrado: false, novas: 0 });
    const existentes = await prisma.movimentacao.findMany({ where: { processoId: proc.id } });
    const chave = (d, desc) => `${new Date(d).toISOString().slice(0, 10)}|${desc}`;
    const jaTem = new Set(existentes.map((m) => chave(m.data, m.descricao)));
    let novas = 0;
    for (const m of r.movimentos) {
      if (jaTem.has(chave(m.data, m.descricao))) continue;
      await prisma.movimentacao.create({ data: { processoId: proc.id, data: m.data, descricao: m.descricao } });
      novas++;
    }
    res.json({ encontrado: true, novas, classe: r.classe, orgaoJulgador: r.orgaoJulgador });
  } catch (e) {
    console.error('DataJud erro:', e.message);
    res.status(502).json({ error: 'Não foi possível consultar o DataJud agora. Tente novamente mais tarde.' });
  }
});

// Sincroniza TODOS os processos que têm número CNJ (atualização em lote).
app.post('/api/processos/sincronizar-todos', auth, async (req, res) => {
  const procs = await prisma.processo.findMany({ where: { numeroCnj: { not: null } } });
  let totalNovas = 0, sincronizados = 0, erros = 0;
  for (const proc of procs) {
    try {
      const r = await consultarProcesso(proc.numeroCnj);
      if (!r.encontrado) continue;
      const existentes = await prisma.movimentacao.findMany({ where: { processoId: proc.id } });
      const chave = (d, desc) => `${new Date(d).toISOString().slice(0, 10)}|${desc}`;
      const jaTem = new Set(existentes.map((m) => chave(m.data, m.descricao)));
      for (const m of r.movimentos) {
        if (jaTem.has(chave(m.data, m.descricao))) continue;
        await prisma.movimentacao.create({ data: { processoId: proc.id, data: m.data, descricao: m.descricao } });
        totalNovas++;
      }
      sincronizados++;
    } catch { erros++; }
    await new Promise((r) => setTimeout(r, 300)); // gentil com a API do CNJ
  }
  res.json({ processos: procs.length, sincronizados, novasMovimentacoes: totalNovas, erros });
});

app.post('/api/processos/:id/movimentacoes', auth, async (req, res) => {
  const m = await prisma.movimentacao.create({
    data: { processoId: req.params.id, descricao: req.body.descricao,
      data: req.body.data ? new Date(req.body.data) : new Date() },
  });
  res.status(201).json(m);
});

// ---------- Prazos ----------
crud('/api/prazos', 'prazo', {
  include: { processo: true, cliente: true },
  transform: (b) => ({
    titulo: b.titulo, processoId: b.processoId || null, clienteId: b.clienteId || null,
    dataInicio: new Date(b.dataInicio), dataFatal: new Date(b.dataFatal),
    dias: b.dias != null ? Number(b.dias) : null, tipoContagem: b.tipoContagem || 'uteis',
    prioridade: b.prioridade || 'normal', status: b.status || 'pendente',
  }),
});
// Calculadora (não grava): recebe data + dias + tipo, devolve data fatal
app.post('/api/prazos/calcular', auth, (req, res) => {
  const { dataIntimacao, dias, tipo } = req.body;
  if (!dataIntimacao || !dias) return res.status(400).json({ error: 'dados incompletos' });
  const { dataInicio, dataFatal } = calcularPrazo(dataIntimacao, dias, tipo || 'uteis');
  res.json({ dataInicio, dataFatal, aviso: 'Cálculo auxiliar. Confira o prazo oficial no tribunal.' });
});

// ---------- Financeiro ----------
crud('/api/financeiro', 'lancamentoFinanceiro', {
  include: { cliente: true, processo: true },
  transform: (b) => ({
    tipo: b.tipo, origem: b.origem || 'outro', descricao: b.descricao,
    valor: Number(b.valor), valorPago: Number(b.valorPago) || 0,
    status: b.status || 'aberto',
    data: b.data ? new Date(b.data) : new Date(),
    vencimento: b.vencimento ? new Date(b.vencimento) : null,
    parcelaNum: b.parcelaNum != null ? Number(b.parcelaNum) : null,
    parcelaTotal: b.parcelaTotal != null ? Number(b.parcelaTotal) : null,
    grupoParcela: b.grupoParcela || null,
    clienteId: b.clienteId || null, processoId: b.processoId || null,
  }),
});

// Baixa parcial: registra um valor recebido; ajusta status (parcial/pago) automaticamente.
app.post('/api/financeiro/:id/receber', auth, async (req, res) => {
  const l = await prisma.lancamentoFinanceiro.findUnique({ where: { id: req.params.id } });
  if (!l) return res.status(404).json({ error: 'lançamento não encontrado' });
  const add = Number(req.body.valor);
  if (!(add > 0)) return res.status(400).json({ error: 'valor inválido' });
  const pago = Math.min(l.valor, (l.valorPago || 0) + add); // não deixa passar do total
  const status = pago >= l.valor ? 'pago' : 'parcial';
  const upd = await prisma.lancamentoFinanceiro.update({
    where: { id: l.id },
    data: { valorPago: pago, status, ...(status === 'pago' && !l.data ? { data: new Date() } : {}) },
  });
  res.json(upd);
});

// Parcelamento: gera N lançamentos com vencimentos mensais a partir de uma base.
app.post('/api/financeiro/parcelar', auth, async (req, res) => {
  const b = req.body;
  const n = Number(b.parcelas);
  const total = Number(b.valorTotal);
  if (!(n >= 1) || !(total > 0)) return res.status(400).json({ error: 'parcelas e valorTotal obrigatórios' });
  const grupo = crypto.randomUUID();
  const base = b.primeiroVencimento ? new Date(b.primeiroVencimento) : new Date();
  // divide em centavos p/ a soma bater exatamente com o total
  const centTotal = Math.round(total * 100);
  const centBase = Math.floor(centTotal / n);
  const resto = centTotal - centBase * n;
  const criados = [];
  for (let i = 0; i < n; i++) {
    const cent = centBase + (i < resto ? 1 : 0); // sobra vai nas primeiras parcelas
    const venc = new Date(base);
    venc.setMonth(venc.getMonth() + i);
    const item = await prisma.lancamentoFinanceiro.create({
      data: {
        tipo: b.tipo || 'entrada', origem: b.origem || 'honorario',
        descricao: `${b.descricao} (${i + 1}/${n})`,
        valor: cent / 100, valorPago: 0, status: 'aberto',
        data: new Date(), vencimento: venc,
        parcelaNum: i + 1, parcelaTotal: n, grupoParcela: grupo,
        clienteId: b.clienteId || null, processoId: b.processoId || null,
      },
    });
    criados.push(item);
  }
  res.status(201).json({ grupo, parcelas: criados });
});

// Recorrência: repete o MESMO valor por N meses (ex.: aluguel, software) — diferente do parcelamento.
app.post('/api/financeiro/recorrente', auth, async (req, res) => {
  const b = req.body;
  const n = Number(b.meses);
  const valor = Number(b.valor);
  if (!(n >= 1) || !(valor > 0)) return res.status(400).json({ error: 'meses e valor obrigatórios' });
  const grupo = crypto.randomUUID();
  const base = b.primeiroVencimento ? new Date(b.primeiroVencimento) : new Date();
  const criados = [];
  for (let i = 0; i < n; i++) {
    const venc = new Date(base);
    venc.setMonth(venc.getMonth() + i);
    const item = await prisma.lancamentoFinanceiro.create({
      data: {
        tipo: b.tipo || 'saida', origem: b.origem || 'despesa',
        descricao: `${b.descricao} (${venc.toLocaleDateString('pt-BR', { month: '2-digit', year: 'numeric' })})`,
        valor, valorPago: 0, status: 'aberto', data: new Date(), vencimento: venc,
        parcelaNum: i + 1, parcelaTotal: n, grupoParcela: grupo,
        clienteId: b.clienteId || null, processoId: b.processoId || null,
      },
    });
    criados.push(item);
  }
  res.status(201).json({ grupo, lancamentos: criados });
});

// ---------- Valores de terceiros (precatórios) ----------
function calcTerceiro(b) {
  const valorBruto = Number(b.valorBruto) || 0;
  const honorarioPct = Number(b.honorarioPct) || 0;
  const custas = Number(b.custas) || 0;
  const irRetido = Number(b.irRetido) || 0;
  const honorarioValor = valorBruto * (honorarioPct / 100);
  const valorLiquido = valorBruto - honorarioValor - custas - irRetido;
  return { valorBruto, honorarioPct, custas, irRetido, honorarioValor, valorLiquido };
}
crud('/api/valores-terceiro', 'valorTerceiro', {
  include: { cliente: true, processo: true },
  transform: (b) => ({
    clienteId: b.clienteId, processoId: b.processoId || null, tipo: b.tipo || 'precatorio',
    ...calcTerceiro(b),
    tribunal: b.tribunal || null, enteDevedor: b.enteDevedor || null,
    dataPrevista: b.dataPrevista ? new Date(b.dataPrevista) : null,
    status: b.status || 'aguardando',
  }),
});

// ---------- Modelos de petição/contrato ----------
crud('/api/modelos', 'modelo', {
  transform: (b) => ({ nome: b.nome, tipo: b.tipo || 'peticao', conteudo: b.conteudo || '' }),
});

// ---------- Tarefas ----------
crud('/api/tarefas', 'tarefa', {
  include: { cliente: true, processo: true },
  transform: (b) => ({
    titulo: b.titulo, descricao: b.descricao || null, status: b.status || 'pendente',
    prioridade: b.prioridade || 'normal', prazo: b.prazo ? new Date(b.prazo) : null,
    clienteId: b.clienteId || null, processoId: b.processoId || null,
  }),
});

// ---------- Agenda / Eventos ----------
crud('/api/eventos', 'evento', {
  include: { cliente: true, processo: true },
  transform: (b) => ({
    titulo: b.titulo, categoria: b.categoria || 'outro',
    inicio: new Date(b.inicio), fim: b.fim ? new Date(b.fim) : null,
    diaInteiro: !!b.diaInteiro, local: b.local || null, descricao: b.descricao || null,
    status: b.status || 'agendado',
    clienteId: b.clienteId || null, processoId: b.processoId || null,
  }),
});

// ---------- Documentos / GED ----------
const DOC_MAX = 8 * 1024 * 1024; // 8MB por arquivo
const jsonGrande = express.json({ limit: '12mb' }); // upload de documento precisa de body maior
// Lista metadados (SEM o conteúdo base64, p/ ficar leve) filtrando por cliente/processo.
app.get('/api/documentos', auth, async (req, res) => {
  const where = {};
  if (req.query.clienteId) where.clienteId = req.query.clienteId;
  if (req.query.processoId) where.processoId = req.query.processoId;
  const docs = await prisma.documento.findMany({
    where, orderBy: { createdAt: 'desc' },
    select: { id: true, nome: true, categoria: true, mime: true, tamanho: true, createdAt: true, clienteId: true, processoId: true },
  });
  res.json(docs);
});
// Baixa 1 documento (com o conteúdo) — o front monta o download.
app.get('/api/documentos/:id', auth, async (req, res) => {
  const doc = await prisma.documento.findUnique({ where: { id: req.params.id } });
  if (!doc) return res.status(404).json({ error: 'documento não encontrado' });
  res.json(doc);
});
app.post('/api/documentos', auth, jsonGrande, async (req, res) => {
  const b = req.body;
  if (!b.nome || !b.conteudo) return res.status(400).json({ error: 'nome e conteúdo obrigatórios' });
  const tamanho = Number(b.tamanho) || Math.round((b.conteudo.length * 3) / 4);
  if (tamanho > DOC_MAX) return res.status(413).json({ error: 'arquivo acima de 8MB' });
  const doc = await prisma.documento.create({
    data: {
      nome: String(b.nome).slice(0, 255), categoria: b.categoria || 'outro',
      mime: b.mime || null, tamanho, conteudo: b.conteudo,
      clienteId: b.clienteId || null, processoId: b.processoId || null,
    },
    select: { id: true, nome: true, categoria: true, mime: true, tamanho: true, createdAt: true, clienteId: true, processoId: true },
  });
  res.status(201).json(doc);
});
app.delete('/api/documentos/:id', auth, async (req, res) => {
  await prisma.documento.delete({ where: { id: req.params.id } });
  res.json({ ok: true });
});

// ---------- Dashboard ----------
app.get('/api/dashboard', auth, async (req, res) => {
  const [clientes, processos, tarefas, prazos, lancamentos, terceiros] = await Promise.all([
    prisma.cliente.count(),
    prisma.processo.count(),
    prisma.tarefa.count({ where: { status: { in: ['pendente', 'em_andamento'] } } }),
    prisma.prazo.findMany({ where: { status: 'pendente' } }),
    prisma.lancamentoFinanceiro.findMany(),
    prisma.valorTerceiro.findMany(),
  ]);
  const aReceber = lancamentos
    .filter((l) => l.tipo === 'entrada' && l.status !== 'pago')
    .reduce((s, l) => s + l.valor, 0);
  // Receita do escritório realizada = honorário deduzido de terceiros já recebidos/repassados
  const receitaEscritorio = terceiros
    .filter((t) => t.status === 'recebido' || t.status === 'repassado')
    .reduce((s, t) => s + t.honorarioValor, 0);
  // Em custódia = líquido ainda não repassado
  const emCustodia = terceiros
    .filter((t) => t.status !== 'repassado')
    .reduce((s, t) => s + t.valorLiquido, 0);
  res.json({
    clientes, processos, tarefasPendentes: tarefas,
    prazosPendentes: prazos.length, aReceber, receitaEscritorio, emCustodia,
  });
});

const fmtBRL = (n) => (Number(n) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
// ---------- Central de notificações ----------
// Calcula alertas na hora (sem tabela própria): prazos, pagamentos e compromissos próximos/vencidos.
app.get('/api/notificacoes', auth, async (req, res) => {
  const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
  const diasEntre = (d) => Math.round((new Date(d).setHours(0, 0, 0, 0) - hoje) / 86400000);
  const [prazos, lancamentos, eventos, terceiros] = await Promise.all([
    prisma.prazo.findMany({ where: { status: 'pendente' }, include: { cliente: true, processo: true } }),
    prisma.lancamentoFinanceiro.findMany({ where: { tipo: 'entrada', status: { not: 'pago' }, vencimento: { not: null } }, include: { cliente: true } }),
    prisma.evento.findMany({ where: { status: { not: 'concluido' } }, include: { cliente: true, processo: true } }),
    prisma.valorTerceiro.findMany({ where: { status: { not: 'repassado' }, dataPrevista: { not: null } }, include: { cliente: true } }),
  ]);
  const itens = [];
  const urg = (dias) => dias < 0 ? 'vencido' : dias <= 2 ? 'alta' : 'media';
  const quando = (dias) => dias < 0 ? `há ${-dias} dia(s)` : dias === 0 ? 'hoje' : dias === 1 ? 'amanhã' : `em ${dias} dias`;

  for (const p of prazos) {
    const d = diasEntre(p.dataFatal);
    if (d <= 7) itens.push({ id: 'prazo-' + p.id, tipo: 'prazo', icone: '⏱',
      titulo: `Prazo: ${p.titulo}`, sub: [p.cliente?.nome, p.processo?.numeroCnj].filter(Boolean).join(' · '),
      data: p.dataFatal, dias: d, quando: quando(d), urgencia: urg(d),
      link: p.processoId ? '/processos/' + p.processoId : '/prazos' });
  }
  for (const l of lancamentos) {
    const d = diasEntre(l.vencimento);
    if (d <= 7) itens.push({ id: 'fin-' + l.id, tipo: 'financeiro', icone: '💰',
      titulo: `Recebimento: ${l.descricao}`, sub: [l.cliente?.nome, fmtBRL(l.valor - (l.valorPago || 0))].filter(Boolean).join(' · '),
      data: l.vencimento, dias: d, quando: quando(d), urgencia: urg(d), link: '/financeiro' });
  }
  for (const e of eventos) {
    const d = diasEntre(e.inicio);
    if (d >= 0 && d <= 3) itens.push({ id: 'evt-' + e.id, tipo: 'agenda', icone: '📅',
      titulo: e.titulo, sub: [e.cliente?.nome, e.local].filter(Boolean).join(' · '),
      data: e.inicio, dias: d, quando: quando(d), urgencia: urg(d),
      link: e.processoId ? '/processos/' + e.processoId : '/agenda' });
  }
  for (const t of terceiros) {
    const d = diasEntre(t.dataPrevista);
    if (d <= 15) itens.push({ id: 'ter-' + t.id, tipo: 'precatorio', icone: '⚖',
      titulo: `Valor a receber: ${t.tipo}`, sub: [t.cliente?.nome, fmtBRL(t.valorLiquido) + ' líquido'].filter(Boolean).join(' · '),
      data: t.dataPrevista, dias: d, quando: quando(d), urgencia: urg(d), link: '/valores-terceiros' });
  }
  const rank = { vencido: 0, alta: 1, media: 2 };
  itens.sort((a, b) => (rank[a.urgencia] - rank[b.urgencia]) || (a.dias - b.dias));
  res.json(itens);
});

// ---------- Feed Jurídico ----------
app.get('/api/feed', auth, async (req, res) => {
  try { res.json(await getFeed()); }
  catch { res.json([]); }
});

// ---------- Dashboard: dados dos gráficos ----------
app.get('/api/dashboard/charts', auth, async (req, res) => {
  const [lancamentos, processos] = await Promise.all([
    prisma.lancamentoFinanceiro.findMany(),
    prisma.processo.findMany(),
  ]);
  // Receitas x Despesas nos últimos 6 meses
  const meses = [];
  const now = new Date();
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    meses.push({ ano: d.getFullYear(), mes: d.getMonth(),
      label: d.toLocaleDateString('pt-BR', { month: 'short' }), receitas: 0, despesas: 0 });
  }
  for (const l of lancamentos) {
    const d = new Date(l.data);
    const m = meses.find((x) => x.ano === d.getFullYear() && x.mes === d.getMonth());
    if (m) { if (l.tipo === 'entrada') m.receitas += l.valor; else m.despesas += l.valor; }
  }
  const porGrupo = (arr, key) => {
    const map = {};
    for (const p of arr) { const k = p[key] || '—'; map[k] = (map[k] || 0) + 1; }
    return Object.entries(map).map(([label, valor]) => ({ label, valor }));
  };
  res.json({
    receitasDespesas: meses.map(({ label, receitas, despesas }) => ({ label, receitas, despesas })),
    processosPorArea: porGrupo(processos, 'area'),
    processosPorStatus: porGrupo(processos, 'status'),
  });
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

// 404 para rotas de API desconhecidas (resposta JSON limpa, sem vazar detalhes)
app.use('/api', (req, res) => res.status(404).json({ error: 'não encontrado' }));

// ---------- Servir o frontend buildado (web/dist), se existir ----------
const distDir = path.resolve(__dirname, '../../web/dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  // SPA fallback: qualquer rota não-API devolve o index.html
  app.get(/^(?!\/api).*/, (req, res) => res.sendFile(path.join(distDir, 'index.html')));
}

// Error handler global: registra o erro no servidor, devolve mensagem genérica ao cliente.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('Erro:', err?.message || err);
  if (res.headersSent) return;
  res.status(err?.status || 500).json({ error: 'Erro interno. Tente novamente.' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`JurisOne API rodando em http://localhost:${PORT}`));
