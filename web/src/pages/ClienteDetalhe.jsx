import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { api, fmtMoney, fmtDate, fmtDateTime, maskCPFCNPJ, maskTelefone } from '../api.js';
import { Badge, Empty, Modal, Field } from '../ui.jsx';
import Documentos from '../Documentos.jsx';

const TABS = ['Visão geral', 'Processos', 'Financeiro', 'Prazos', 'Valores de terceiros', 'Documentos', 'Tarefas', 'WhatsApp'];

function waLink(telefone, texto) {
  let d = (telefone || '').replace(/\D/g, '');
  if (!d) return null;
  if (d.length <= 11) d = '55' + d; // adiciona DDI Brasil se veio só DDD+número
  return `https://wa.me/${d}${texto ? '?text=' + encodeURIComponent(texto) : ''}`;
}

export default function ClienteDetalhe() {
  const { id } = useParams();
  const nav = useNavigate();
  const [d, setD] = useState(null);
  const [tab, setTab] = useState('Visão geral');
  const [editando, setEditando] = useState(false);
  const carregar = () => api.get(`/clientes/${id}/completo`).then(setD).catch(() => nav('/clientes'));
  useEffect(() => { carregar(); }, [id]);
  if (!d) return <div className="empty">Carregando…</div>;
  const c = d.cliente;
  const aReceber = d.lancamentos.filter((l) => l.tipo === 'entrada' && l.status !== 'pago').reduce((s, l) => s + l.valor, 0);
  async function excluir() {
    if (!confirm('Excluir este cliente? Isso remove também os processos e dados vinculados.')) return;
    await api.del('/clientes/' + id); nav('/clientes');
  }

  return (
    <div>
      <div className="crumb" style={{ marginBottom: 12, display: 'flex', justifyContent: 'space-between' }}>
        <span><Link to="/clientes">Clientes</Link> &nbsp;›&nbsp; {c.nome}</span>
        <span style={{ whiteSpace: 'nowrap' }}>
          <button className="btn ghost sm" onClick={() => setEditando(true)} style={{ marginRight: 8 }}>✎ Editar</button>
          <button className="btn ghost sm" onClick={excluir} style={{ color: 'var(--red)' }}>🗑 Excluir</button>
        </span>
      </div>
      <div className="detail-head">
        <div className="big-avatar">👤</div>
        <div style={{ flex: 1 }}>
          <h1>{c.nome} <Badge>{c.status}</Badge> <span className="badge gray">{c.tipo}</span></h1>
          <div className="kv">
            <div><div className="k">Documento</div><div className="v">{c.cpfCnpj || '—'}</div></div>
            <div><div className="k">Telefone</div><div className="v">{c.telefone ? <a href={'tel:' + c.telefone.replace(/\D/g, '')} className="clickable-link">{c.telefone}</a> : '—'}</div></div>
            <div><div className="k">E-mail</div><div className="v">{c.email ? <a href={'mailto:' + c.email} className="clickable-link">{c.email}</a> : '—'}</div></div>
            <div><div className="k">Responsável</div><div className="v">{c.responsavel || 'Não atribuído'}</div></div>
          </div>
        </div>
      </div>
      {editando && <EditarCliente cliente={c} onClose={() => setEditando(false)} onSaved={() => { setEditando(false); carregar(); }} />}

      <div className="tabs">
        {TABS.map((t) => <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>{t}</button>)}
      </div>

      {tab === 'Visão geral' && (
        <>
          <div className="grid cards-3" style={{ marginBottom: 16 }}>
            <div className="card"><div className="label">Processos</div><div className="value">{d.processos.length}</div></div>
            <div className="card"><div className="label">A receber</div><div className="value money">{fmtMoney(aReceber)}</div></div>
            <div className="card"><div className="label">Próximos prazos</div><div className="value">{d.prazos.length}</div></div>
          </div>
          {(c.tags || c.rg || c.nascimento || c.profissao || c.estadoCivil || c.endereco || c.cidade || c.origem) && (
            <div className="panel" style={{ padding: 22, marginBottom: 16 }}>
              <div className="label" style={{ color: 'var(--muted)', marginBottom: 16 }}>Dados cadastrais</div>
              {c.tags && <div style={{ marginBottom: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {c.tags.split(',').map((t) => t.trim()).filter(Boolean).map((t) => <span key={t} className="badge gray">🏷 {t}</span>)}</div>}
              <div className="kv">
                {c.rg && <div><div className="k">RG</div><div className="v">{c.rg}</div></div>}
                {c.nascimento && <div><div className="k">Nascimento</div><div className="v">{fmtDate(c.nascimento)}</div></div>}
                {c.profissao && <div><div className="k">Profissão</div><div className="v" style={{ fontFamily: 'inherit' }}>{c.profissao}</div></div>}
                {c.estadoCivil && <div><div className="k">Estado civil</div><div className="v" style={{ fontFamily: 'inherit' }}>{c.estadoCivil}</div></div>}
                {(c.endereco || c.cidade) && <div><div className="k">Endereço</div><div className="v" style={{ fontFamily: 'inherit' }}>{[c.endereco, c.cidade && `${c.cidade}${c.uf ? '/' + c.uf : ''}`, c.cep].filter(Boolean).join(' · ')}</div></div>}
                {c.origem && <div><div className="k">Origem</div><div className="v" style={{ fontFamily: 'inherit' }}>{c.origem}</div></div>}
              </div>
            </div>
          )}
          <div className="panel" style={{ padding: 22 }}>
            <div className="label" style={{ color: 'var(--muted)', marginBottom: 16 }}>Timeline do relacionamento</div>
            <div className="timeline">
              {d.processos.length === 0 && d.prazos.length === 0 && <span style={{ color: 'var(--muted)' }}>Sem atividade ainda.</span>}
              {d.processos.map((p) => (
                <div className="item" key={p.id}><div className="dot" />
                  <div><div className="when">{fmtDateTime(p.createdAt)}</div>Processo {p.numeroCnj || p.titulo}</div></div>
              ))}
            </div>
          </div>
        </>
      )}

      {tab === 'Processos' && <SimpleTable rows={d.processos} cols={[['titulo', 'Processo'], ['numeroCnj', 'CNJ', 'mono'], ['area', 'Área'], ['status', 'Status', 'badge']]}
        onRow={(r) => nav('/processos/' + r.id)} empty="Nenhum processo." />}
      {tab === 'Financeiro' && <SimpleTable rows={d.lancamentos} cols={[['descricao', 'Descrição'], ['tipo', 'Tipo'], ['valor', 'Valor', 'money'], ['status', 'Status', 'badge']]} empty="Nenhum lançamento." />}
      {tab === 'Prazos' && <SimpleTable rows={d.prazos} cols={[['titulo', 'Prazo'], ['dataFatal', 'Data fatal', 'date'], ['status', 'Status', 'badge']]} empty="Nenhum prazo." />}
      {tab === 'Valores de terceiros' && <SimpleTable rows={d.valoresTerceiro} cols={[['tipo', 'Tipo'], ['valorBruto', 'Bruto', 'money'], ['valorLiquido', 'Líquido a repassar', 'money'], ['status', 'Status', 'badge']]} empty="Nenhum valor de terceiro." />}
      {tab === 'Documentos' && <Documentos clienteId={c.id} />}
      {tab === 'Tarefas' && <SimpleTable rows={d.tarefas} cols={[['titulo', 'Tarefa'], ['prioridade', 'Prioridade'], ['status', 'Status', 'badge']]} empty="Nenhuma tarefa." />}
      {tab === 'WhatsApp' && <WhatsApp cliente={c} />}
    </div>
  );
}

function WhatsApp({ cliente }) {
  const modelos = [
    `Olá, ${cliente.nome.split(' ')[0]}! Aqui é do escritório. Tudo bem?`,
    `Olá, ${cliente.nome.split(' ')[0]}! Passando para atualizar sobre o seu processo.`,
    `Olá, ${cliente.nome.split(' ')[0]}! Lembrete: temos um compromisso agendado.`,
  ];
  const [msg, setMsg] = useState(modelos[0]);
  const link = waLink(cliente.telefone, msg);
  if (!cliente.telefone) return <div className="panel"><div className="empty">Este cliente não tem telefone cadastrado.</div></div>;
  return (
    <div className="panel" style={{ padding: 22, maxWidth: 640 }}>
      <div className="label" style={{ marginBottom: 14 }}>Enviar WhatsApp para <b style={{ color: 'var(--text)' }}>{cliente.telefone}</b></div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
        {modelos.map((m, i) => <button key={i} className="btn ghost sm" onClick={() => setMsg(m)}>Modelo {i + 1}</button>)}
      </div>
      <textarea className="input" rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} style={{ resize: 'vertical', marginBottom: 14 }} />
      <a className="btn" href={link} target="_blank" rel="noreferrer" style={{ background: '#25D366', color: '#0b2e1a' }}>
        💬 Abrir no WhatsApp
      </a>
      <div className="warn" style={{ marginTop: 14 }}>Abre o WhatsApp Web/app com a mensagem pronta. O envio é feito por você (não automático).</div>
    </div>
  );
}

function EditarCliente({ cliente, onClose, onSaved }) {
  const [f, setF] = useState({
    tipo: cliente.tipo || 'PF', status: cliente.status || 'ativo', nome: cliente.nome || '',
    cpfCnpj: cliente.cpfCnpj || '', telefone: cliente.telefone || '', email: cliente.email || '',
    responsavel: cliente.responsavel || '', observacoes: cliente.observacoes || '',
    rg: cliente.rg || '', nascimento: cliente.nascimento ? String(cliente.nascimento).slice(0, 10) : '',
    profissao: cliente.profissao || '', estadoCivil: cliente.estadoCivil || '', endereco: cliente.endereco || '',
    cidade: cliente.cidade || '', uf: cliente.uf || '', cep: cliente.cep || '', tags: cliente.tags || '', origem: cliente.origem || '',
  });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  async function salvar() { if (!f.nome.trim()) return; await api.put('/clientes/' + cliente.id, f); onSaved(); }
  return (
    <Modal title="Editar cliente" onClose={onClose}>
      <div className="row-2">
        <Field label="Tipo"><select className="input" value={f.tipo} onChange={set('tipo')}><option>PF</option><option>PJ</option></select></Field>
        <Field label="Status"><select className="input" value={f.status} onChange={set('status')}>
          <option value="potencial">potencial</option><option value="ativo">ativo</option>
          <option value="inativo">inativo</option><option value="inadimplente">inadimplente</option><option value="arquivado">arquivado</option></select></Field>
      </div>
      <Field label="Nome / Razão social"><input className="input" value={f.nome} onChange={set('nome')} /></Field>
      <div className="row-2">
        <Field label="CPF / CNPJ"><input className="input" value={f.cpfCnpj} onChange={(e) => setF({ ...f, cpfCnpj: maskCPFCNPJ(e.target.value) })} /></Field>
        <Field label="Telefone"><input className="input" value={f.telefone} onChange={(e) => setF({ ...f, telefone: maskTelefone(e.target.value) })} /></Field>
      </div>
      <Field label="E-mail"><input className="input" value={f.email} onChange={set('email')} /></Field>
      <Field label="Responsável"><input className="input" value={f.responsavel} onChange={set('responsavel')} /></Field>
      <div className="row-2">
        <Field label="RG"><input className="input" value={f.rg} onChange={set('rg')} /></Field>
        <Field label="Nascimento"><input className="input" type="date" value={f.nascimento} onChange={set('nascimento')} /></Field>
      </div>
      <div className="row-2">
        <Field label="Profissão"><input className="input" value={f.profissao} onChange={set('profissao')} /></Field>
        <Field label="Estado civil"><select className="input" value={f.estadoCivil} onChange={set('estadoCivil')}>
          <option value="">—</option><option>Solteiro(a)</option><option>Casado(a)</option><option>Divorciado(a)</option>
          <option>Viúvo(a)</option><option>União estável</option></select></Field>
      </div>
      <Field label="Endereço"><input className="input" value={f.endereco} onChange={set('endereco')} placeholder="Rua, nº, complemento, bairro" /></Field>
      <div className="row-2">
        <Field label="Cidade"><input className="input" value={f.cidade} onChange={set('cidade')} /></Field>
        <div className="row-2">
          <Field label="UF"><input className="input" maxLength={2} value={f.uf} onChange={(e) => setF({ ...f, uf: e.target.value.toUpperCase() })} /></Field>
          <Field label="CEP"><input className="input" value={f.cep} onChange={set('cep')} /></Field>
        </div>
      </div>
      <div className="row-2">
        <Field label="Tags (vírgula)"><input className="input" value={f.tags} onChange={set('tags')} placeholder="VIP, trabalhista" /></Field>
        <Field label="Origem"><input className="input" value={f.origem} onChange={set('origem')} placeholder="Indicação, site…" /></Field>
      </div>
      <Field label="Observações"><textarea className="input" rows={3} value={f.observacoes} onChange={set('observacoes')} style={{ resize: 'vertical' }} /></Field>
      <button className="btn" style={{ width: '100%', justifyContent: 'center' }} onClick={salvar}>Salvar alterações</button>
    </Modal>
  );
}

function SimpleTable({ rows, cols, empty, onRow }) {
  if (!rows || rows.length === 0) return <div className="panel"><Empty>{empty}</Empty></div>;
  const render = (r, key, kind) => {
    const v = r[key];
    if (kind === 'money') return fmtMoney(v);
    if (kind === 'date') return fmtDate(v);
    if (kind === 'badge') return <Badge>{v}</Badge>;
    return v || '—';
  };
  return (
    <div className="panel">
      <table>
        <thead><tr>{cols.map((c) => <th key={c[0]}>{c[1]}</th>)}</tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className={onRow ? 'clickable' : ''} onClick={onRow ? () => onRow(r) : undefined}>
              {cols.map((c) => <td key={c[0]} className={c[2] === 'mono' ? 'mono' : ''}>{render(r, c[0], c[2])}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
