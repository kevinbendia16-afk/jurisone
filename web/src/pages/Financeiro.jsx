import React, { useEffect, useState } from 'react';
import { api, fmtMoney, fmtDate } from '../api.js';
import { PageHead, Modal, Field, Empty, Badge } from '../ui.jsx';

const ORIGENS = ['honorario', 'despesa', 'custa', 'reembolso', 'outro'];

export default function Financeiro() {
  const [list, setList] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [processos, setProcessos] = useState([]);
  const [edit, setEdit] = useState(null); // objeto em edição/criação
  const [q, setQ] = useState('');
  const [fTipo, setFTipo] = useState('todos');
  const [fStatus, setFStatus] = useState('todos');
  const [fMes, setFMes] = useState('');

  const load = () => api.get('/financeiro').then(setList).catch(() => {});
  useEffect(() => {
    load();
    api.get('/clientes').then(setClientes).catch(() => {});
    api.get('/processos').then(setProcessos).catch(() => {});
  }, []);

  const filtrada = list.filter((l) => {
    if (fTipo !== 'todos' && l.tipo !== fTipo) return false;
    if (fStatus !== 'todos' && l.status !== fStatus) return false;
    if (fMes && (l.data || '').slice(0, 7) !== fMes) return false;
    if (q) {
      const t = (l.descricao + ' ' + (l.cliente?.nome || '') + ' ' + l.origem).toLowerCase();
      if (!t.includes(q.toLowerCase())) return false;
    }
    return true;
  });

  const aReceber = filtrada.filter((l) => l.tipo === 'entrada' && l.status !== 'pago').reduce((s, l) => s + l.valor, 0);
  const recebido = filtrada.filter((l) => l.tipo === 'entrada' && l.status === 'pago').reduce((s, l) => s + l.valor, 0);
  const despesas = filtrada.filter((l) => l.tipo === 'saida').reduce((s, l) => s + l.valor, 0);

  async function marcarPago(l) {
    await api.put('/financeiro/' + l.id, { ...l, status: 'pago', data: new Date().toISOString().slice(0, 10) });
    load();
  }

  return (
    <div>
      <PageHead crumb="Gestão Financeira" title="Financeiro" desc="Contas, recebimentos e despesas — editável, com filtros e busca."
        action={<button className="btn" onClick={() => setEdit({ tipo: 'entrada', origem: 'honorario', descricao: '', valor: '', status: 'aberto', data: new Date().toISOString().slice(0, 10), vencimento: '', clienteId: '', processoId: '' })}>+ Novo lançamento</button>} />

      <div className="grid cards-3" style={{ marginBottom: 16 }}>
        <div className="card"><div className="label">A receber</div><div className="value money">{fmtMoney(aReceber)}</div></div>
        <div className="card"><div className="label">Recebido</div><div className="value money green">{fmtMoney(recebido)}</div></div>
        <div className="card"><div className="label">Despesas</div><div className="value money">{fmtMoney(despesas)}</div></div>
      </div>

      {/* Filtros e busca */}
      <div className="panel" style={{ padding: 14, marginBottom: 16, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <input className="input" style={{ flex: 1, minWidth: 180 }} placeholder="🔍 Buscar por descrição, cliente ou origem…" value={q} onChange={(e) => setQ(e.target.value)} />
        <select className="input" style={{ width: 150 }} value={fTipo} onChange={(e) => setFTipo(e.target.value)}>
          <option value="todos">Todos os tipos</option><option value="entrada">Entradas</option><option value="saida">Saídas</option></select>
        <select className="input" style={{ width: 150 }} value={fStatus} onChange={(e) => setFStatus(e.target.value)}>
          <option value="todos">Todos os status</option><option value="aberto">Aberto</option><option value="pago">Pago</option><option value="atrasado">Atrasado</option></select>
        <input className="input" style={{ width: 160 }} type="month" value={fMes} onChange={(e) => setFMes(e.target.value)} />
        {(q || fTipo !== 'todos' || fStatus !== 'todos' || fMes) &&
          <button className="btn ghost sm" onClick={() => { setQ(''); setFTipo('todos'); setFStatus('todos'); setFMes(''); }}>Limpar</button>}
      </div>

      <div className="panel">
        {filtrada.length === 0 ? <Empty>Nenhum lançamento encontrado.</Empty> : (
          <table>
            <thead><tr><th>Descrição</th><th>Cliente</th><th>Tipo</th><th>Valor</th><th>Vencimento</th><th>Status</th><th></th></tr></thead>
            <tbody>{filtrada.map((l) => (
              <tr key={l.id} className="clickable" onClick={() => setEdit({ ...l, data: (l.data || '').slice(0, 10), vencimento: (l.vencimento || '').slice(0, 10), clienteId: l.clienteId || '', processoId: l.processoId || '' })}>
                <td style={{ fontWeight: 600 }}>{l.descricao}<div style={{ color: 'var(--muted-2)', fontSize: 11 }}>{l.origem}</div></td>
                <td style={{ color: 'var(--muted)' }}>{l.cliente?.nome || '—'}</td>
                <td><span style={{ color: l.tipo === 'entrada' ? 'var(--green)' : 'var(--red)' }}>{l.tipo === 'entrada' ? '↑ entrada' : '↓ saída'}</span></td>
                <td className="mono">{fmtMoney(l.valor)}</td>
                <td className="mono" style={{ fontSize: 12 }}>{l.vencimento ? fmtDate(l.vencimento) : '—'}</td>
                <td><Badge>{l.status}</Badge></td>
                <td onClick={(e) => e.stopPropagation()}>
                  {l.tipo === 'entrada' && l.status !== 'pago' &&
                    <button className="btn sm" style={{ background: 'var(--green)', color: '#06281a' }} onClick={() => marcarPago(l)}>✓ Pago</button>}
                </td>
              </tr>
            ))}</tbody>
          </table>
        )}
      </div>

      {edit && <Editar item={edit} clientes={clientes} processos={processos}
        onClose={() => setEdit(null)} onSaved={() => { setEdit(null); load(); }} />}
    </div>
  );
}

function Editar({ item, clientes, processos, onClose, onSaved }) {
  const [f, setF] = useState(item);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const editando = !!f.id;
  async function salvar() {
    if (!f.descricao.trim() || f.valor === '' || f.valor == null) return;
    const body = { tipo: f.tipo, origem: f.origem, descricao: f.descricao, valor: f.valor, status: f.status,
      data: f.data || null, vencimento: f.vencimento || null, clienteId: f.clienteId || null, processoId: f.processoId || null };
    if (editando) await api.put('/financeiro/' + f.id, body);
    else await api.post('/financeiro', body);
    onSaved();
  }
  async function excluir() {
    if (!confirm('Excluir este lançamento?')) return;
    await api.del('/financeiro/' + f.id); onSaved();
  }
  return (
    <Modal title={editando ? 'Editar lançamento' : 'Novo lançamento'} onClose={onClose}>
      <div className="row-2">
        <Field label="Tipo"><select className="input" value={f.tipo} onChange={set('tipo')}>
          <option value="entrada">Entrada (receita)</option><option value="saida">Saída (despesa)</option></select></Field>
        <Field label="Origem"><select className="input" value={f.origem} onChange={set('origem')}>
          {ORIGENS.map((o) => <option key={o} value={o}>{o}</option>)}</select></Field>
      </div>
      <Field label="Descrição"><input className="input" value={f.descricao} onChange={set('descricao')} /></Field>
      <div className="row-2">
        <Field label="Valor (R$)"><input className="input" type="number" value={f.valor} onChange={set('valor')} /></Field>
        <Field label="Status"><select className="input" value={f.status} onChange={set('status')}>
          <option value="aberto">Aberto</option><option value="pago">Pago</option><option value="atrasado">Atrasado</option></select></Field>
      </div>
      <div className="row-2">
        <Field label="Data"><input className="input" type="date" value={f.data || ''} onChange={set('data')} /></Field>
        <Field label="Vencimento"><input className="input" type="date" value={f.vencimento || ''} onChange={set('vencimento')} /></Field>
      </div>
      <div className="row-2">
        <Field label="Cliente (opcional)"><select className="input" value={f.clienteId || ''} onChange={set('clienteId')}>
          <option value="">—</option>{clientes.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}</select></Field>
        <Field label="Processo (opcional)"><select className="input" value={f.processoId || ''} onChange={set('processoId')}>
          <option value="">—</option>{processos.filter((p) => !f.clienteId || p.clienteId === f.clienteId).map((p) => <option key={p.id} value={p.id}>{p.titulo}</option>)}</select></Field>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <button className="btn" style={{ flex: 1, justifyContent: 'center' }} onClick={salvar}>{editando ? 'Salvar alterações' : 'Criar lançamento'}</button>
        {editando && <button className="btn ghost" onClick={excluir} style={{ color: 'var(--red)' }}>Excluir</button>}
      </div>
    </Modal>
  );
}
