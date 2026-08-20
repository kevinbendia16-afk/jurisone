import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { api, fmtMoney, fmtDate, fmtDateTime } from '../api.js';
import { Badge, Empty, Field } from '../ui.jsx';

const TABS = ['Visão geral', 'Movimentações', 'Prazos', 'Financeiro', 'Valores de terceiros', 'Tarefas'];

export default function ProcessoDetalhe() {
  const { id } = useParams();
  const nav = useNavigate();
  const [d, setD] = useState(null);
  const [tab, setTab] = useState('Visão geral');
  const [nova, setNova] = useState('');
  const [sinc, setSinc] = useState('');
  const load = () => api.get(`/processos/${id}/completo`).then(setD).catch(() => nav('/processos'));
  useEffect(() => { load(); }, [id]);
  if (!d) return <div className="empty">Carregando…</div>;
  const p = d.processo;

  async function sincronizar() {
    setSinc('Consultando o DataJud/CNJ…');
    try {
      const r = await api.post(`/processos/${id}/sincronizar`);
      if (!r.encontrado) setSinc('Processo não encontrado no DataJud (pode ainda não estar na base nacional).');
      else setSinc(`✓ Sincronizado. ${r.novas} nova(s) movimentação(ões).${r.classe ? ' Classe: ' + r.classe : ''}`);
      load();
    } catch (e) { setSinc('Falha ao sincronizar: ' + e.message); }
  }

  const receitas = d.lancamentos.filter((l) => l.tipo === 'entrada').reduce((s, l) => s + l.valor, 0);
  const despesas = d.lancamentos.filter((l) => l.tipo === 'saida').reduce((s, l) => s + l.valor, 0);

  async function addMov() {
    if (!nova.trim()) return;
    await api.post(`/processos/${id}/movimentacoes`, { descricao: nova });
    setNova(''); load();
  }

  return (
    <div>
      <div className="crumb" style={{ marginBottom: 12 }}><Link to="/processos">Processos</Link> &nbsp;›&nbsp; {p.titulo}</div>
      <div className="detail-head">
        <div className="big-avatar">⚖</div>
        <div style={{ flex: 1 }}>
          <h1>{p.titulo} <Badge>{p.status}</Badge></h1>
          <div className="kv">
            <div><div className="k">Número CNJ</div><div className="v">{p.numeroCnj || '—'}</div></div>
            <div><div className="k">Cliente</div><div className="v"><Link to={'/clientes/' + p.clienteId} style={{ color: 'var(--text)' }}>{p.cliente?.nome}</Link></div></div>
            <div><div className="k">Área</div><div className="v">{p.area}</div></div>
            <div><div className="k">Prioridade</div><div className="v">{p.prioridade}</div></div>
          </div>
        </div>
      </div>

      <div className="tabs">{TABS.map((t) => <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>{t}</button>)}</div>

      {tab === 'Visão geral' && (
        <div className="grid cards-3">
          <div className="card"><div className="label">Receitas do processo</div><div className="value money green">{fmtMoney(receitas)}</div></div>
          <div className="card"><div className="label">Despesas do processo</div><div className="value money">{fmtMoney(despesas)}</div></div>
          <div className="card"><div className="label">Saldo</div><div className="value money">{fmtMoney(receitas - despesas)}</div></div>
        </div>
      )}

      {tab === 'Movimentações' && (
        <>
          <div className="panel" style={{ padding: 18, marginBottom: 16 }}>
            <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
              <input className="input" placeholder="Registrar nova movimentação…" value={nova} onChange={(e) => setNova(e.target.value)} />
              <button className="btn" onClick={addMov}>Adicionar</button>
              <button className="btn ghost" onClick={sincronizar} title="Buscar andamentos na base nacional do CNJ">🔄 Sincronizar (DataJud)</button>
            </div>
            {sinc && <div className="warn">{sinc}</div>}
          </div>
          <div className="panel" style={{ padding: 22 }}>
            {d.movimentacoes.length === 0 ? <span style={{ color: 'var(--muted)' }}>Sem movimentações.</span> : (
              <div className="timeline">
                {d.movimentacoes.map((m) => (
                  <div className="item" key={m.id}><div className="dot" />
                    <div><div className="when">{fmtDateTime(m.data)}</div>{m.descricao}</div></div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {tab === 'Prazos' && <T rows={d.prazos} cols={[['titulo', 'Prazo'], ['dataFatal', 'Data fatal', 'date'], ['status', 'Status', 'badge']]} empty="Nenhum prazo." />}
      {tab === 'Financeiro' && <T rows={d.lancamentos} cols={[['descricao', 'Descrição'], ['tipo', 'Tipo'], ['valor', 'Valor', 'money'], ['status', 'Status', 'badge']]} empty="Nenhum lançamento." />}
      {tab === 'Valores de terceiros' && <T rows={d.valoresTerceiro} cols={[['tipo', 'Tipo'], ['valorBruto', 'Bruto', 'money'], ['valorLiquido', 'Líquido', 'money'], ['status', 'Status', 'badge']]} empty="Nenhum valor." />}
      {tab === 'Tarefas' && <T rows={d.tarefas} cols={[['titulo', 'Tarefa'], ['status', 'Status', 'badge']]} empty="Nenhuma tarefa." />}
    </div>
  );
}

function T({ rows, cols, empty }) {
  if (!rows || rows.length === 0) return <div className="panel"><Empty>{empty}</Empty></div>;
  const render = (r, k, kind) => kind === 'money' ? fmtMoney(r[k]) : kind === 'date' ? fmtDate(r[k]) : kind === 'badge' ? <Badge>{r[k]}</Badge> : (r[k] || '—');
  return (
    <div className="panel"><table>
      <thead><tr>{cols.map((c) => <th key={c[0]}>{c[1]}</th>)}</tr></thead>
      <tbody>{rows.map((r) => <tr key={r.id}>{cols.map((c) => <td key={c[0]}>{render(r, c[0], c[2])}</td>)}</tr>)}</tbody>
    </table></div>
  );
}
