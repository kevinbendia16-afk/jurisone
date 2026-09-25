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

// Navegador interno do Claude (Electron): o CAPTCHA Cloudflare trava a aba, então é dispensado
// só nesse contexto. Honeypot, rate-limit, slow-down e bloqueio por país continuam valendo.
function ehNavegadorClaude(req) {
  const ua = req.headers['user-agent'] || '';
  return /\bClaude\//.test(ua) && /\bElectron\//.test(ua);
}
app.post('/api/login', loginLimiter, loginSlowDown, async (req, res) => {
  const { email, senha, website, captcha } = req.body;
  // Honeypot: campo oculto que só robôs preenchem. Se vier preenchido, rejeita silenciosamente.
  if (website) return res.status(400).json({ error: 'requisição inválida' });
  // CAPTCHA "não sou robô" (se configurado) — dispensado no navegador interno do Claude.
  if (!ehNavegadorClaude(req) && !(await verificarTurnstile(captcha, req.ip))) {
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
// Modelos com "lixeira" (soft-delete): DELETE marca deletedAt; listagens escondem os excluídos.
const SOFT_MODELS = {
  lancamentoFinanceiro: { rotulo: (x) => x.descricao, tipo: 'Lançamento', pagina: '/financeiro' },
  prazo: { rotulo: (x) => x.titulo, tipo: 'Prazo', pagina: '/prazos' },
  tarefa: { rotulo: (x) => x.titulo, tipo: 'Tarefa', pagina: '/tarefas' },
  evento: { rotulo: (x) => x.titulo, tipo: 'Compromisso', pagina: '/agenda' },
  valorTerceiro: { rotulo: (x) => `${x.tipo} — ${fmtBRL(x.valorLiquido)}`, tipo: 'Valor de terceiro', pagina: '/valores-terceiros' },
  modelo: { rotulo: (x) => x.nome, tipo: 'Modelo', pagina: '/modelos' },
};

function crud(path, model, { include, transform, soft } = {}) {
  const r = express.Router();
  const baseWhere = soft ? { deletedAt: null } : {};
  r.get('/', async (req, res) => {
    const items = await prisma[model].findMany({ where: baseWhere, include, orderBy: { createdAt: 'desc' } });
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
    if (soft) await prisma[model].update({ where: { id: req.params.id }, data: { deletedAt: new Date() } });
    else await prisma[model].delete({ where: { id: req.params.id } });
    res.json({ ok: true });
  });
  app.use(path, auth, r);
}

// ---------- Lixeira (itens excluídos que podem ser restaurados) ----------
app.get('/api/lixeira', auth, async (req, res) => {
  const itens = [];
  for (const [model, cfg] of Object.entries(SOFT_MODELS)) {
    const excluidos = await prisma[model].findMany({ where: { deletedAt: { not: null } }, orderBy: { deletedAt: 'desc' } });
    for (const x of excluidos) itens.push({ model, id: x.id, tipo: cfg.tipo, rotulo: cfg.rotulo(x), pagina: cfg.pagina, deletedAt: x.deletedAt });
  }
  itens.sort((a, b) => new Date(b.deletedAt) - new Date(a.deletedAt));
  res.json(itens);
});
app.post('/api/lixeira/:model/:id/restaurar', auth, async (req, res) => {
  const { model, id } = req.params;
  if (!SOFT_MODELS[model]) return res.status(400).json({ error: 'tipo inválido' });
  await prisma[model].update({ where: { id }, data: { deletedAt: null } });
  res.json({ ok: true });
});
app.delete('/api/lixeira/:model/:id', auth, async (req, res) => {
  const { model, id } = req.params;
  if (!SOFT_MODELS[model]) return res.status(400).json({ error: 'tipo inválido' });
  await prisma[model].delete({ where: { id } }); // exclusão definitiva
  res.json({ ok: true });
});

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
    prisma.prazo.findMany({ where: { clienteId: id, deletedAt: null }, orderBy: { dataFatal: 'asc' } }),
    prisma.lancamentoFinanceiro.findMany({ where: { clienteId: id, deletedAt: null }, orderBy: { createdAt: 'desc' } }),
    prisma.valorTerceiro.findMany({ where: { clienteId: id, deletedAt: null }, orderBy: { createdAt: 'desc' } }),
    prisma.tarefa.findMany({ where: { clienteId: id, deletedAt: null }, orderBy: { createdAt: 'desc' } }),
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
    prisma.prazo.findMany({ where: { processoId: id, deletedAt: null }, orderBy: { dataFatal: 'asc' } }),
    prisma.lancamentoFinanceiro.findMany({ where: { processoId: id, deletedAt: null }, orderBy: { createdAt: 'desc' } }),
    prisma.valorTerceiro.findMany({ where: { processoId: id, deletedAt: null }, orderBy: { createdAt: 'desc' } }),
    prisma.tarefa.findMany({ where: { processoId: id, deletedAt: null }, orderBy: { createdAt: 'desc' } }),
  ]);
  res.json({ processo, movimentacoes, prazos, lancamentos, valoresTerceiro, tarefas });
});
// Puxa o histórico de UM processo do DataJud e grava movimentos novos (sem duplicar).
// Também completa órgão/classe no processo se estiverem vazios. Retorna resumo.
async function sincronizarUm(proc) {
  if (!proc.numeroCnj) return { encontrado: false, novas: 0, motivo: 'sem número CNJ' };
  const r = await consultarProcesso(proc.numeroCnj);
  if (!r.encontrado) return { encontrado: false, novas: 0 };
  const existentes = await prisma.movimentacao.findMany({ where: { processoId: proc.id } });
  const chave = (d, desc) => `${new Date(d).toISOString().slice(0, 10)}|${desc}`;
  const jaTem = new Set(existentes.map((m) => chave(m.data, m.descricao)));
  let novas = 0;
  for (const m of r.movimentos) {
    if (jaTem.has(chave(m.data, m.descricao))) continue;
    await prisma.movimentacao.create({ data: { processoId: proc.id, data: m.data, descricao: m.descricao } });
    novas++;
  }
  // Completa dados do processo vindos da base nacional, sem sobrescrever o que o advogado preencheu.
  const patch = {};
  if (!proc.orgao && r.orgaoJulgador) patch.orgao = r.orgaoJulgador;
  if (Object.keys(patch).length) await prisma.processo.update({ where: { id: proc.id }, data: patch });
  return { encontrado: true, novas, classe: r.classe, orgaoJulgador: r.orgaoJulgador };
}

// Sincroniza os andamentos de TODOS os processos com número CNJ. Retorna o resumo.
async function sincronizarTodos() {
  const procs = await prisma.processo.findMany({ where: { numeroCnj: { not: null } } });
  let novasMovimentacoes = 0, sincronizados = 0, erros = 0;
  for (const proc of procs) {
    try {
      const r = await sincronizarUm(proc);
      if (r.encontrado) { novasMovimentacoes += r.novas; sincronizados++; }
    } catch { erros++; }
    await new Promise((r) => setTimeout(r, 300)); // gentil com a API do CNJ
  }
  return { processos: procs.length, sincronizados, novasMovimentacoes, erros };
}

// Sincroniza andamentos do processo com o DataJud/CNJ (atualização automática).
app.post('/api/processos/:id/sincronizar', auth, async (req, res) => {
  const proc = await prisma.processo.findUnique({ where: { id: req.params.id } });
  if (!proc) return res.status(404).json({ error: 'processo não encontrado' });
  if (!proc.numeroCnj) return res.status(400).json({ error: 'processo sem número CNJ' });
  try {
    res.json(await sincronizarUm(proc));
  } catch (e) {
    console.error('DataJud erro:', e.message);
    res.status(502).json({ error: 'Não foi possível consultar o DataJud agora. Tente novamente mais tarde.' });
  }
});

// Sincroniza TODOS os processos que têm número CNJ (atualização em lote — botão manual).
app.post('/api/processos/sincronizar-todos', auth, async (req, res) => {
  res.json(await sincronizarTodos());
});

// ATUALIZAÇÃO AUTOMÁTICA: endpoint chamado por um cron externo (cron-job.org) para manter
// os processos atualizados sozinho ("tempo real"). Protegido por CRON_SECRET (sem login).
app.post('/api/cron/sincronizar', async (req, res) => {
  const secret = process.env.CRON_SECRET;
  const dado = req.query.key || req.headers['x-cron-key'];
  if (!secret || dado !== secret) return res.status(403).json({ error: 'não autorizado' });
  try { res.json({ ok: true, ...(await sincronizarTodos()) }); }
  catch (e) { res.status(502).json({ error: e.message }); }
});

// IMPORTAÇÃO EM MASSA: recebe uma lista de processos (número CNJ + nome do cliente) e, para cada um,
// cria/vincula o cliente, cria o processo e puxa TODO o histórico do DataJud. Ideal para onboarding.
app.post('/api/processos/importar', auth, async (req, res) => {
  const itens = Array.isArray(req.body?.itens) ? req.body.itens.slice(0, 300) : [];
  const clienteIdPadrao = req.body?.clienteId || null;
  if (!itens.length) return res.status(400).json({ error: 'lista vazia' });

  // cache de clientes por nome (case-insensitive), para reutilizar/criar uma vez só
  const cacheCliente = new Map();
  async function acharOuCriarCliente(nome) {
    const chave = nome.trim().toLowerCase();
    if (cacheCliente.has(chave)) return cacheCliente.get(chave);
    let c = await prisma.cliente.findFirst({ where: { nome: { equals: nome.trim() } } });
    if (!c) c = await prisma.cliente.create({ data: { nome: nome.trim(), tipo: 'PF', status: 'ativo' } });
    cacheCliente.set(chave, c.id);
    return c.id;
  }

  const resultados = [];
  for (const item of itens) {
    const numeroCnj = String(item.numeroCnj || '').trim();
    const digits = numeroCnj.replace(/\D/g, '');
    if (digits.length !== 20) { resultados.push({ numeroCnj, ok: false, erro: 'número CNJ inválido' }); continue; }
    try {
      // não duplica processo já cadastrado
      const existente = await prisma.processo.findFirst({ where: { numeroCnj: { in: [numeroCnj, digits] } } });
      if (existente) { resultados.push({ numeroCnj, ok: false, erro: 'já cadastrado' }); continue; }

      let clienteId = clienteIdPadrao;
      if (item.cliente && String(item.cliente).trim()) clienteId = await acharOuCriarCliente(String(item.cliente));
      if (!clienteId) clienteId = await acharOuCriarCliente('Cliente a identificar');

      // 1) O processo é SEMPRE criado (parte durável). 2) O histórico é puxado em seguida;
      //    se o DataJud falhar/estiver fora, marca pendente e enche na próxima sincronização.
      const proc = await prisma.processo.create({
        data: { clienteId, numeroCnj, titulo: (item.titulo || `Processo ${numeroCnj}`).slice(0, 200),
          area: item.area || 'Cível', status: 'ativo', prioridade: 'normal' },
      });
      let r = { encontrado: false, novas: 0, classe: null, pendente: false };
      try { r = await sincronizarUm(proc); }
      catch { r.pendente = true; }
      if (!item.titulo && r.classe) await prisma.processo.update({ where: { id: proc.id }, data: { titulo: r.classe.slice(0, 200) } });
      resultados.push({ numeroCnj, ok: true, processoId: proc.id, encontrado: r.encontrado, movimentos: r.novas, classe: r.classe || null, pendente: !!r.pendente });
      await new Promise((res2) => setTimeout(res2, 300)); // gentil com a API do CNJ
    } catch (e) {
      resultados.push({ numeroCnj, ok: false, erro: 'não foi possível cadastrar' });
    }
  }
  const criados = resultados.filter((r) => r.ok).length;
  const movimentos = resultados.reduce((s, r) => s + (r.movimentos || 0), 0);
  res.json({ total: itens.length, criados, movimentos, resultados });
});

// Remove um andamento (ex.: lançado manualmente por engano).
app.delete('/api/movimentacoes/:id', auth, async (req, res) => {
  await prisma.movimentacao.deleteMany({ where: { id: req.params.id } });
  res.json({ ok: true });
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
  soft: true,
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
  soft: true,
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
  soft: true,
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
  soft: true,
  transform: (b) => ({ nome: b.nome, tipo: b.tipo || 'peticao', conteudo: b.conteudo || '' }),
});

// ---------- Tarefas ----------
crud('/api/tarefas', 'tarefa', {
  soft: true,
  include: { cliente: true, processo: true },
  transform: (b) => ({
    titulo: b.titulo, descricao: b.descricao || null, status: b.status || 'pendente',
    prioridade: b.prioridade || 'normal', prazo: b.prazo ? new Date(b.prazo) : null,
    clienteId: b.clienteId || null, processoId: b.processoId || null,
  }),
});

// ---------- Agenda / Eventos ----------
crud('/api/eventos', 'evento', {
  soft: true,
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
    prisma.tarefa.count({ where: { status: { in: ['pendente', 'em_andamento'] }, deletedAt: null } }),
    prisma.prazo.findMany({ where: { status: 'pendente', deletedAt: null } }),
    prisma.lancamentoFinanceiro.findMany({ where: { deletedAt: null } }),
    prisma.valorTerceiro.findMany({ where: { deletedAt: null } }),
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
    prisma.prazo.findMany({ where: { status: 'pendente', deletedAt: null }, include: { cliente: true, processo: true } }),
    prisma.lancamentoFinanceiro.findMany({ where: { tipo: 'entrada', status: { not: 'pago' }, vencimento: { not: null }, deletedAt: null }, include: { cliente: true } }),
    prisma.evento.findMany({ where: { status: { not: 'concluido' }, deletedAt: null }, include: { cliente: true, processo: true } }),
    prisma.valorTerceiro.findMany({ where: { status: { not: 'repassado' }, dataPrevista: { not: null }, deletedAt: null }, include: { cliente: true } }),
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
    prisma.lancamentoFinanceiro.findMany({ where: { deletedAt: null } }),
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

const APP_VERSION = 'demo-2'; // marcador p/ confirmar deploy no ar (bump a cada deploy backend relevante)
app.get('/api/health', (req, res) => res.json({ ok: true, versao: APP_VERSION }));

// 404 para rotas de API desconhecidas (resposta JSON limpa, sem vazar detalhes)
app.use('/api', (req, res) => res.status(404).json({ error: 'não encontrado' }));

// ---------- Site de divulgação (/site) + leads + admin ----------
const siteDir = path.resolve(__dirname, '../../site');
const leadLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 8, standardHeaders: true, legacyHeaders: false,
  message: { error: 'Muitas tentativas. Tente de novo em alguns minutos.' } });
app.post('/site/api/lead', leadLimiter, async (req, res) => {
  const b = req.body || {};
  if (b.site) return res.json({ ok: true }); // armadilha anti-robô: finge sucesso
  const limpa = (v, n) => (typeof v === 'string' ? v.trim().slice(0, n) : '');
  const nome = limpa(b.nome, 120), email = limpa(b.email, 160), telefone = limpa(b.telefone, 40);
  if (nome.length < 2) return res.status(400).json({ error: 'Informe seu nome.' });
  if (!email && !telefone) return res.status(400).json({ error: 'Informe um e-mail ou telefone para contato.' });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'E-mail inválido.' });
  await prisma.lead.create({ data: { nome, email: email || null, telefone: telefone || null,
    escritorio: limpa(b.escritorio, 160) || null, mensagem: limpa(b.mensagem, 2000) || null, origem: limpa(b.origem, 200) || null } });
  res.json({ ok: true });
});
// Admin dos leads: HTTP Basic (usuário kevin; senha via env SITE_ADMIN_PASS).
function siteAdminAuth(req, res, next) {
  const senha = process.env.SITE_ADMIN_PASS || 'jurisone-leads';
  const [tipo, cred] = (req.headers.authorization || '').split(' ');
  if (tipo === 'Basic' && cred) {
    const [u, p] = Buffer.from(cred, 'base64').toString().split(':');
    if (u === 'kevin' && p === senha) return next();
  }
  res.set('WWW-Authenticate', 'Basic realm="JurisOne leads"').status(401).send('Acesso restrito.');
}
app.get('/site/api/leads', siteAdminAuth, async (req, res) => {
  res.json(await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } }));
});
app.delete('/site/api/leads/:id', siteAdminAuth, async (req, res) => {
  await prisma.lead.deleteMany({ where: { id: req.params.id } });
  res.json({ ok: true });
});
app.get('/site/admin', siteAdminAuth, (req, res) => {
  // com barra final os caminhos relativos (admin.css/admin.js) quebrariam: normaliza sem barra
  if (req.path.endsWith('/')) return res.redirect(301, '/site/admin');
  res.sendFile(path.join(siteDir, 'admin.html'));
});
if (fs.existsSync(siteDir)) app.use('/site', express.static(siteDir));

// ---------- Servir o frontend buildado (web/dist), se existir ----------
const distDir = path.resolve(__dirname, '../../web/dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  // SPA fallback: qualquer rota não-API devolve o index.html
  app.get(/^(?!\/api|\/site).*/, (req, res) => res.sendFile(path.join(distDir, 'index.html')));
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

// ---------- Atualizador do DEMO: mantém as datas "vivas" ----------
// Esta instância é a DEMONSTRAÇÃO (dados fictícios). Sem isto, os dados envelhecem: todos os prazos
// ficam vencidos e a agenda esvazia. A cada dia novo, TODAS as datas avançam o mesmo número de dias
// que se passaram, preservando a distribuição (uns vencidos, a maioria por vir). Desligar: DEMO_REFRESH=0.
const DEMO_CAMPOS = {
  prazo: ['dataInicio', 'dataFatal', 'createdAt'],
  evento: ['inicio', 'fim', 'createdAt'],
  tarefa: ['prazo', 'createdAt'],
  lancamentoFinanceiro: ['data', 'vencimento', 'createdAt'],
  valorTerceiro: ['dataPrevista', 'createdAt'],
  movimentacao: ['data'],
};
const diaSP = (d = new Date()) => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo' }).format(d);
async function atualizarDemo() {
  if (process.env.DEMO_REFRESH === '0') return;
  const hoje = diaSP();
  let est = await prisma.demoEstado.findUnique({ where: { id: 1 } });
  if (!est) {
    // 1ª vez: a base é o dia em que os dados de exemplo foram gerados (cadastro do 1º cliente)
    const primeiro = await prisma.cliente.findFirst({ orderBy: { createdAt: 'asc' } });
    est = await prisma.demoEstado.create({ data: { id: 1, ultimoDia: primeiro ? diaSP(primeiro.createdAt) : hoje } });
  }
  // Correção única (25/09/2026): a 1ª execução em produção avançou as datas mas abortou antes de gravar
  // o dia (um andamento foi apagado durante a execução). Marca como já aplicado p/ não avançar 2x.
  if (est.ultimoDia === '2026-08-20') est = await prisma.demoEstado.update({ where: { id: 1 }, data: { ultimoDia: '2026-09-25' } });
  const dias = Math.round((Date.parse(hoje) - Date.parse(est.ultimoDia)) / 86400000);
  if (dias <= 0) return;
  // Grava o dia ANTES de mexer: se algo falhar no meio, nunca avança duas vezes o mesmo período.
  const marcado = await prisma.demoEstado.updateMany({ where: { id: 1, ultimoDia: est.ultimoDia }, data: { ultimoDia: hoje } });
  if (!marcado.count) return; // outra execução já pegou este dia
  const ms = dias * 86400000;
  let n = 0;
  for (const [model, campos] of Object.entries(DEMO_CAMPOS)) {
    try {
      const itens = await prisma[model].findMany({ select: Object.fromEntries([['id', true], ...campos.map((c) => [c, true])]) });
      for (const it of itens) {
        const data = {};
        for (const c of campos) if (it[c]) data[c] = new Date(new Date(it[c]).getTime() + ms);
        // updateMany não quebra se o registro sumiu no meio do caminho
        if (Object.keys(data).length) n += (await prisma[model].updateMany({ where: { id: it.id }, data })).count;
      }
    } catch (e) { console.error(`[demo] ${model}:`, e.message); }
  }
  console.log(`[demo] datas avançadas ${dias} dia(s) em ${n} registros (${est.ultimoDia} → ${hoje})`);
}
setTimeout(() => atualizarDemo().catch((e) => console.error('[demo] falhou:', e.message)), 20 * 1000);
setInterval(() => atualizarDemo().catch((e) => console.error('[demo] falhou:', e.message)), 60 * 60 * 1000);

// ---------- Atualização automática interna (sem cron externo) ----------
// Enquanto o serviço está no ar (o pinger mantém acordado, e cada acesso também), sincroniza
// TODOS os processos com o DataJud 1x por dia. É idempotente (não duplica movimentos).
// Desligável com AUTO_SYNC=0. Também roda a cada acesso natural, sem depender de login/env externo.
if (process.env.AUTO_SYNC !== '0') {
  const UM_DIA = 24 * 60 * 60 * 1000;
  let rodando = false;
  const jobDiario = async () => {
    if (rodando) return; // evita sobreposição
    rodando = true;
    try { const r = await sincronizarTodos(); console.log('[auto-sync]', new Date().toISOString(), JSON.stringify(r)); }
    catch (e) { console.error('[auto-sync] falhou:', e.message); }
    finally { rodando = false; }
  };
  setTimeout(jobDiario, 15 * 60 * 1000); // 1ª execução ~15 min após subir (deixa o boot assentar)
  setInterval(jobDiario, UM_DIA);        // depois, 1x por dia
}
