import React, { useEffect, useMemo, useState } from 'react';
import { api, fmtDate } from '../api.js';
import { PageHead, Modal, Field, Empty, Badge } from '../ui.jsx';

const TIPOS = { peticao: 'Petição', contrato: 'Contrato', procuracao: 'Procuração', notificacao: 'Notificação', outro: 'Outro' };

// Variáveis disponíveis (chave → como extrair do cliente/processo/hoje).
const VARS = {
  'cliente.nome': (ctx) => ctx.cliente?.nome,
  'cliente.cpfCnpj': (ctx) => ctx.cliente?.cpfCnpj,
  'cliente.rg': (ctx) => ctx.cliente?.rg,
  'cliente.endereco': (ctx) => ctx.cliente?.endereco,
  'cliente.cidade': (ctx) => ctx.cliente?.cidade,
  'cliente.uf': (ctx) => ctx.cliente?.uf,
  'cliente.profissao': (ctx) => ctx.cliente?.profissao,
  'cliente.estadoCivil': (ctx) => ctx.cliente?.estadoCivil,
  'cliente.email': (ctx) => ctx.cliente?.email,
  'cliente.telefone': (ctx) => ctx.cliente?.telefone,
  'processo.numeroCnj': (ctx) => ctx.processo?.numeroCnj,
  'processo.titulo': (ctx) => ctx.processo?.titulo,
  'processo.vara': (ctx) => ctx.processo?.vara,
  'processo.comarca': (ctx) => ctx.processo?.comarca,
  'processo.orgao': (ctx) => ctx.processo?.orgao,
  'processo.valorCausa': (ctx) => ctx.processo?.valorCausa != null ? Number(ctx.processo.valorCausa).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '',
  'data': () => new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
};

// Preenche {{var}} com o contexto; variáveis desconhecidas viram [[var]] p/ o advogado completar.
function preencher(texto, ctx) {
  return String(texto || '').replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, chave) => {
    const fn = VARS[chave];
    const v = fn ? fn(ctx) : undefined;
    return (v == null || v === '') ? `[[${chave}]]` : v;
  });
}

export default function Modelos() {
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(null);
  const [usar, setUsar] = useState(null);
  const load = () => api.get('/modelos').then(setList).catch(() => {});
  useEffect(() => { load(); }, []);
  return (
    <div>
      <PageHead crumb="Documentos" title="Modelos de peças" desc="Modelos de petição, contrato e procuração com variáveis que se preenchem sozinhas."
        action={<button className="btn" onClick={() => setEdit({ nome: '', tipo: 'peticao', conteudo: '' })}>+ Novo modelo</button>} />
      <div className="panel">
        {list.length === 0 ? <Empty>Nenhum modelo ainda. Crie um com variáveis como {'{{cliente.nome}}'} e {'{{processo.numeroCnj}}'}.</Empty> : (
          <table>
            <thead><tr><th>Modelo</th><th>Tipo</th><th>Criado</th><th></th></tr></thead>
            <tbody>{list.map((m) => (
              <tr key={m.id} className="clickable" onClick={() => setEdit(m)}>
                <td style={{ fontWeight: 600 }}>{m.nome}</td>
                <td><Badge>{TIPOS[m.tipo] || m.tipo}</Badge></td>
                <td className="mono" style={{ fontSize: 12 }}>{fmtDate(m.createdAt)}</td>
                <td onClick={(e) => e.stopPropagation()}>
                  <button className="btn sm" onClick={() => setUsar(m)}>Usar modelo</button>
                </td>
              </tr>
            ))}</tbody>
          </table>
        )}
      </div>
      {edit && <Editar item={edit} onClose={() => setEdit(null)} onSaved={() => { setEdit(null); load(); }} />}
      {usar && <Usar modelo={usar} onClose={() => setUsar(null)} />}
    </div>
  );
}

function Editar({ item, onClose, onSaved }) {
  const [f, setF] = useState(item);
  const editando = !!f.id;
  async function salvar() {
    if (!f.nome.trim()) return;
    const body = { nome: f.nome, tipo: f.tipo, conteudo: f.conteudo };
    if (editando) await api.put('/modelos/' + f.id, body); else await api.post('/modelos', body);
    onSaved();
  }
  async function excluir() { if (confirm('Excluir este modelo?')) { await api.del('/modelos/' + f.id); onSaved(); } }
  return (
    <Modal title={editando ? 'Editar modelo' : 'Novo modelo'} onClose={onClose}>
      <div className="row-2">
        <Field label="Nome"><input className="input" value={f.nome} onChange={(e) => setF({ ...f, nome: e.target.value })} placeholder="Ex.: Petição inicial de cobrança" /></Field>
        <Field label="Tipo"><select className="input" value={f.tipo} onChange={(e) => setF({ ...f, tipo: e.target.value })}>
          {Object.entries(TIPOS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></Field>
      </div>
      <Field label="Conteúdo (use variáveis entre chaves duplas)">
        <textarea className="input" rows={12} value={f.conteudo} onChange={(e) => setF({ ...f, conteudo: e.target.value })}
          style={{ resize: 'vertical', fontFamily: 'var(--mono)', fontSize: 13 }}
          placeholder={'EXCELENTÍSSIMO...\n\n{{cliente.nome}}, {{cliente.estadoCivil}}, {{cliente.profissao}}, inscrito no CPF {{cliente.cpfCnpj}}, residente em {{cliente.endereco}}, {{cliente.cidade}}/{{cliente.uf}}...\n\nProcesso nº {{processo.numeroCnj}} — {{processo.vara}}, {{processo.comarca}}.\n\n{{cliente.cidade}}, {{data}}.'} />
      </Field>
      <div className="panel" style={{ padding: 12, marginBottom: 14, color: 'var(--muted)', fontSize: 12 }}>
        <b>Variáveis:</b> {Object.keys(VARS).map((k) => `{{${k}}}`).join(' · ')}. Você também pode criar as suas — elas aparecem como campos a preencher.
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <button className="btn" style={{ flex: 1, justifyContent: 'center' }} onClick={salvar}>{editando ? 'Salvar alterações' : 'Criar modelo'}</button>
        {editando && <button className="btn ghost" onClick={excluir} style={{ color: 'var(--red)' }}>Excluir</button>}
      </div>
    </Modal>
  );
}

function Usar({ modelo, onClose }) {
  const [clientes, setClientes] = useState([]);
  const [processos, setProcessos] = useState([]);
  const [clienteId, setClienteId] = useState('');
  const [processoId, setProcessoId] = useState('');
  const [extras, setExtras] = useState({}); // variáveis desconhecidas preenchidas à mão
  const [copiado, setCopiado] = useState(false);
  useEffect(() => {
    api.get('/clientes').then(setClientes).catch(() => {});
    api.get('/processos').then(setProcessos).catch(() => {});
  }, []);
  const cliente = clientes.find((c) => c.id === clienteId);
  const processo = processos.find((p) => p.id === processoId);

  // variáveis do texto que NÃO são padrão → viram campos manuais
  const custom = useMemo(() => {
    const achadas = [...String(modelo.conteudo).matchAll(/\{\{\s*([\w.]+)\s*\}\}/g)].map((m) => m[1]);
    return [...new Set(achadas)].filter((k) => !VARS[k]);
  }, [modelo]);

  const texto = useMemo(() => {
    let t = preencher(modelo.conteudo, { cliente, processo });
    for (const k of custom) if (extras[k]) t = t.split(`[[${k}]]`).join(extras[k]);
    return t;
  }, [modelo, cliente, processo, extras, custom]);

  async function copiar() {
    try { await navigator.clipboard.writeText(texto); setCopiado(true); setTimeout(() => setCopiado(false), 2000); }
    catch { /* ignore */ }
  }
  function baixar() {
    const blob = new Blob([texto], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${modelo.nome}.txt`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  return (
    <Modal title={`Gerar: ${modelo.nome}`} onClose={onClose}>
      <div className="row-2">
        <Field label="Cliente"><select className="input" value={clienteId} onChange={(e) => setClienteId(e.target.value)}>
          <option value="">— selecione —</option>{clientes.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}</select></Field>
        <Field label="Processo (opcional)"><select className="input" value={processoId} onChange={(e) => setProcessoId(e.target.value)}>
          <option value="">—</option>{processos.filter((p) => !clienteId || p.clienteId === clienteId).map((p) => <option key={p.id} value={p.id}>{p.titulo}</option>)}</select></Field>
      </div>
      {custom.length > 0 && <div className="panel" style={{ padding: 14, marginBottom: 14 }}>
        <div className="label" style={{ marginBottom: 10, color: 'var(--muted)' }}>Campos a preencher</div>
        {custom.map((k) => (
          <Field key={k} label={k}><input className="input" value={extras[k] || ''} onChange={(e) => setExtras({ ...extras, [k]: e.target.value })} /></Field>
        ))}
      </div>}
      <Field label="Prévia (o que faltar aparece como [[campo]])">
        <textarea className="input" rows={12} value={texto} readOnly style={{ resize: 'vertical', fontFamily: 'var(--mono)', fontSize: 13 }} />
      </Field>
      <div style={{ display: 'flex', gap: 10 }}>
        <button className="btn" style={{ flex: 1, justifyContent: 'center' }} onClick={copiar}>{copiado ? '✓ Copiado!' : '📋 Copiar texto'}</button>
        <button className="btn ghost" onClick={baixar}>⬇ Baixar .txt</button>
      </div>
    </Modal>
  );
}
