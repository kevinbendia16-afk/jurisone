import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { api, fmtMoney, fmtDate, fmtDateTime } from '../api.js';
import { Badge, Empty } from '../ui.jsx';

const TABS = ['Visão geral', 'Processos', 'Financeiro', 'Prazos', 'Valores de terceiros', 'Tarefas', 'WhatsApp'];

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
  useEffect(() => { api.get(`/clientes/${id}/completo`).then(setD).catch(() => nav('/clientes')); }, [id]);
  if (!d) return <div className="empty">Carregando…</div>;
  const c = d.cliente;
  const aReceber = d.lancamentos.filter((l) => l.tipo === 'entrada' && l.status !== 'pago').reduce((s, l) => s + l.valor, 0);

  return (
    <div>
      <div className="crumb" style={{ marginBottom: 12 }}><Link to="/clientes">Clientes</Link> &nbsp;›&nbsp; {c.nome}</div>
      <div className="detail-head">
        <div className="big-avatar">👤</div>
        <div style={{ flex: 1 }}>
          <h1>{c.nome} <Badge>{c.status}</Badge> <span className="badge gray">{c.tipo}</span></h1>
          <div className="kv">
            <div><div className="k">Documento</div><div className="v">{c.cpfCnpj || '—'}</div></div>
            <div><div className="k">Telefone</div><div className="v">{c.telefone || '—'}</div></div>
            <div><div className="k">E-mail</div><div className="v">{c.email || '—'}</div></div>
            <div><div className="k">Responsável</div><div className="v">{c.responsavel || 'Não atribuído'}</div></div>
          </div>
        </div>
      </div>

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
