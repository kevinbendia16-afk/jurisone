import React, { useEffect, useMemo, useState } from 'react';
import { api, fmtMoney, fmtDate, exportCSV, exportPDF } from '../api.js';
import { PageHead, Empty, Badge } from '../ui.jsx';

const TIPOS = [
  ['financeiro', '🏛 Financeiro'],
  ['processos', '⚖ Processos'],
  ['prazos', '⏱ Prazos'],
];

export default function Relatorios() {
  const [tipo, setTipo] = useState('financeiro');
  const [fin, setFin] = useState([]);
  const [procs, setProcs] = useState([]);
  const [prazos, setPrazos] = useState([]);
  const [de, setDe] = useState('');
  const [ate, setAte] = useState('');
  const [status, setStatus] = useState('todos');

  useEffect(() => {
    api.get('/financeiro').then(setFin).catch(() => {});
    api.get('/processos').then(setProcs).catch(() => {});
    api.get('/prazos').then(setPrazos).catch(() => {});
  }, []);

  const dentroPeriodo = (dataISO) => {
    if (!dataISO) return !de && !ate;
    const d = (dataISO || '').slice(0, 10);
    if (de && d < de) return false;
    if (ate && d > ate) return false;
    return true;
  };

  // ---- Configuração de cada relatório: colunas + linhas + resumo ----
  const cfg = useMemo(() => {
    if (tipo === 'financeiro') {
      const rows = fin.filter((l) => dentroPeriodo(l.vencimento || l.data))
        .filter((l) => status === 'todos' || l.status === status);
      const entradas = rows.filter((r) => r.tipo === 'entrada');
      const recebido = entradas.reduce((s, r) => s + (r.status === 'pago' ? r.valor : (r.valorPago || 0)), 0);
      const aReceber = entradas.filter((r) => r.status !== 'pago').reduce((s, r) => s + (r.valor - (r.valorPago || 0)), 0);
      const despesas = rows.filter((r) => r.tipo === 'saida').reduce((s, r) => s + r.valor, 0);
      return {
        rows,
        resumo: [
          ['Recebido', fmtMoney(recebido), 'green'],
          ['A receber', fmtMoney(aReceber), ''],
          ['Despesas', fmtMoney(despesas), 'red'],
          ['Resultado', fmtMoney(recebido - despesas), recebido - despesas >= 0 ? 'green' : 'red'],
        ],
        colunas: [
          { label: 'Descrição', get: (r) => r.descricao },
          { label: 'Cliente', get: (r) => r.cliente?.nome || '' },
          { label: 'Tipo', get: (r) => r.tipo },
          { label: 'Origem', get: (r) => r.origem },
          { label: 'Valor', get: (r) => (Number(r.valor) || 0).toFixed(2).replace('.', ',') },
          { label: 'Recebido', get: (r) => (Number(r.valorPago) || 0).toFixed(2).replace('.', ',') },
          { label: 'Vencimento', get: (r) => r.vencimento ? fmtDate(r.vencimento) : '' },
          { label: 'Status', get: (r) => r.status },
        ],
        statusOpts: ['aberto', 'parcial', 'pago', 'atrasado'],
      };
    }
    if (tipo === 'processos') {
      const rows = procs.filter((p) => status === 'todos' || p.status === status);
      const porStatus = {};
      rows.forEach((p) => { porStatus[p.status || '—'] = (porStatus[p.status || '—'] || 0) + 1; });
      return {
        rows,
        resumo: [['Total de processos', String(rows.length), ''],
          ...Object.entries(porStatus).map(([k, v]) => [k, String(v), ''])],
        colunas: [
          { label: 'Título', get: (r) => r.titulo },
          { label: 'Nº CNJ', get: (r) => r.numeroCnj || '' },
          { label: 'Cliente', get: (r) => r.cliente?.nome || '' },
          { label: 'Área', get: (r) => r.area || '' },
          { label: 'Status', get: (r) => r.status || '' },
        ],
        statusOpts: [...new Set(procs.map((p) => p.status).filter(Boolean))],
      };
    }
    // prazos
    const rows = prazos.filter((p) => dentroPeriodo(p.dataFatal))
      .filter((p) => status === 'todos' || p.status === status);
    const pend = rows.filter((p) => p.status === 'pendente').length;
    return {
      rows,
      resumo: [['Total', String(rows.length), ''], ['Pendentes', String(pend), 'red']],
      colunas: [
        { label: 'Título', get: (r) => r.titulo },
        { label: 'Cliente', get: (r) => r.cliente?.nome || '' },
        { label: 'Processo', get: (r) => r.processo?.titulo || '' },
        { label: 'Início', get: (r) => r.dataInicio ? fmtDate(r.dataInicio) : '' },
        { label: 'Prazo fatal', get: (r) => r.dataFatal ? fmtDate(r.dataFatal) : '' },
        { label: 'Prioridade', get: (r) => r.prioridade || '' },
        { label: 'Status', get: (r) => r.status || '' },
      ],
      statusOpts: ['pendente', 'cumprido'],
    };
  }, [tipo, fin, procs, prazos, de, ate, status]);

  const titulo = TIPOS.find((t) => t[0] === tipo)[1].replace(/^[^ ]+ /, '');

  function baixarCSV() {
    exportCSV(`relatorio-${tipo}-jurisone.csv`, cfg.colunas, cfg.rows);
  }

  return (
    <div>
      <PageHead crumb="Relatórios" title="Relatórios e exportação" desc="Gere relatórios de financeiro, processos e prazos — exporte em CSV (Excel) ou PDF."
        action={<div className="no-print" style={{ display: 'flex', gap: 8 }}>
          <button className="btn ghost" onClick={baixarCSV}>⬇ CSV (Excel)</button>
          <button className="btn" onClick={exportPDF}>🖨 PDF</button>
        </div>} />

      {/* Controles */}
      <div className="panel no-print" style={{ padding: 14, marginBottom: 16, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <select className="input" style={{ width: 190 }} value={tipo} onChange={(e) => { setTipo(e.target.value); setStatus('todos'); }}>
          {TIPOS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
        {tipo !== 'processos' && <>
          <label style={{ color: 'var(--muted)', fontSize: 13 }}>De</label>
          <input className="input" style={{ width: 150 }} type="date" value={de} onChange={(e) => setDe(e.target.value)} />
          <label style={{ color: 'var(--muted)', fontSize: 13 }}>Até</label>
          <input className="input" style={{ width: 150 }} type="date" value={ate} onChange={(e) => setAte(e.target.value)} />
        </>}
        <select className="input" style={{ width: 160 }} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="todos">Todos os status</option>
          {cfg.statusOpts.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {(de || ate || status !== 'todos') &&
          <button className="btn ghost sm" onClick={() => { setDe(''); setAte(''); setStatus('todos'); }}>Limpar</button>}
      </div>

      {/* Área imprimível */}
      <div id="relatorio-print">
        <div className="print-only report-header">
          <h2>Relatório de {titulo} — JurisOne</h2>
          <p>{de || ate ? `Período: ${de ? fmtDate(de) : '…'} a ${ate ? fmtDate(ate) : '…'}` : 'Período: completo'} · Gerado em {fmtDate(new Date())}</p>
        </div>

        <div className="grid cards-3" style={{ marginBottom: 16, gridTemplateColumns: `repeat(${Math.min(cfg.resumo.length, 4)}, 1fr)` }}>
          {cfg.resumo.map(([label, val, cor], i) => (
            <div className="card" key={i}><div className="label">{label}</div>
              <div className={'value ' + (cor === 'green' ? 'green' : cor === 'red' ? 'red' : '')}>{val}</div></div>
          ))}
        </div>

        <div className="panel">
          {cfg.rows.length === 0 ? <Empty>Nenhum registro para os filtros escolhidos.</Empty> : (
            <table>
              <thead><tr>{cfg.colunas.map((c) => <th key={c.label}>{c.label}</th>)}</tr></thead>
              <tbody>{cfg.rows.map((r, i) => (
                <tr key={r.id || i}>{cfg.colunas.map((c) => {
                  const v = c.get(r);
                  return <td key={c.label}>{c.label === 'Status' ? <Badge>{v}</Badge> : (v || '—')}</td>;
                })}</tr>
              ))}</tbody>
            </table>
          )}
          <div style={{ padding: '10px 14px', color: 'var(--muted)', fontSize: 12 }}>{cfg.rows.length} registro(s).</div>
        </div>
      </div>
    </div>
  );
}
