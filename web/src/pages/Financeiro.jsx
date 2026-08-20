import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [parcelar, setParcelar] = useState(null);

  const [sp] = useSearchParams();
  const load = () => api.get('/financeiro').then(setList).catch(() => {});
  useEffect(() => {
    load();
    api.get('/clientes').then(setClientes).catch(() => {});
    api.get('/processos').then(setProcessos).catch(() => {});
    if (sp.get('novo')) setEdit({ tipo: 'entrada', origem: 'honorario', descricao: '', valor: '', status: 'aberto', data: new Date().toISOString().slice(0, 10), vencimento: '', clienteId: '', processoId: '' });
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

  const aReceber = filtrada.filter((l) => l.tipo === 'entrada' && l.status !== 'pago').reduce((s, l) => s + (l.valor - (l.valorPago || 0)), 0);
  const recebido = filtrada.filter((l) => l.tipo === 'entrada').reduce((s, l) => s + (l.status === 'pago' ? l.valor : (l.valorPago || 0)), 0);
  const despesas = filtrada.filter((l) => l.tipo === 'saida').reduce((s, l) => s + l.valor, 0);

  async function marcarPago(l) {
    await api.put('/financeiro/' + l.id, { ...l, status: 'pago', valorPago: l.valor, data: new Date().toISOString().slice(0, 10) });
    load();
  }

  async function receberParcial(l) {
    const falta = l.valor - (l.valorPago || 0);
    const txt = prompt(`Valor recebido agora (falta ${fmtMoney(falta)}):`, String(falta.toFixed(2)));
    if (txt == null) return;
    const v = Number(String(txt).replace(',', '.'));
    if (!(v > 0)) return;
    await api.post('/financeiro/' + l.id + '/receber', { valor: v });
    load();
  }

  return (
    <div>
      <PageHead crumb="Gestão Financeira" title="Financeiro" desc="Contas, recebimentos e despesas — editável, com filtros e busca."
        action={<div style={{ display: 'flex', gap: 8 }}>
          <button className="btn ghost" onClick={() => setParcelar({ descricao: '', valorTotal: '', parcelas: 12, origem: 'honorario', primeiroVencimento: new Date().toISOString().slice(0, 10), clienteId: '', processoId: '' })}>≡ Parcelar</button>
          <button className="btn" onClick={() => setEdit({ tipo: 'entrada', origem: 'honorario', descricao: '', valor: '', status: 'aberto', data: new Date().toISOString().slice(0, 10), vencimento: '', clienteId: '', processoId: '' })}>+ Novo lançamento</button>
        </div>} />

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
                <td className="mono">{fmtMoney(l.valor)}
                  {l.valorPago > 0 && l.valorPago < l.valor &&
                    <div style={{ color: 'var(--green)', fontSize: 11 }}>recebido {fmtMoney(l.valorPago)}</div>}
                </td>
                <td className="mono" style={{ fontSize: 12 }}>{l.vencimento ? fmtDate(l.vencimento) : '—'}</td>
                <td><Badge>{(l.tipo === 'entrada' && l.status !== 'pago' && l.vencimento && new Date(l.vencimento) < new Date().setHours(0, 0, 0, 0)) ? 'atrasado' : l.status}</Badge>{l.parcelaTotal ? <div style={{ color: 'var(--muted-2)', fontSize: 11 }}>parcela {l.parcelaNum}/{l.parcelaTotal}</div> : null}</td>
                <td onClick={(e) => e.stopPropagation()}>
                  {l.tipo === 'entrada' && l.status !== 'pago' && <div style={{ display: 'flex', gap: 6 }}>
                    <button className="btn ghost sm" onClick={() => receberParcial(l)}>Receber</button>
                    <button className="btn sm" style={{ background: 'var(--green)', color: '#06281a' }} onClick={() => marcarPago(l)}>✓ Quitar</button>
                  </div>}
                </td>
              </tr>
            ))}</tbody>
          </table>
        )}
      </div>

      {edit && <Editar item={edit} clientes={clientes} processos={processos}
        onClose={() => setEdit(null)} onSaved={() => { setEdit(null); load(); }} />}
      {parcelar && <Parcelar item={parcelar} clientes={clientes} processos={processos}
        onClose={() => setParcelar(null)} onSaved={() => { setParcelar(null); load(); }} />}
    </div>
  );
}

function Parcelar({ item, clientes, processos, onClose, onSaved }) {
  const [f, setF] = useState(item);
  const [modo, setModo] = useState('parcelar'); // parcelar (dividir total, entrada) | recorrente (repetir valor, saída)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const n = Number(f.parcelas) || 0;
  const valorDigitado = Number(String(f.valorTotal).replace(',', '.')) || 0;
  const recorrente = modo === 'recorrente';
  const porMes = recorrente ? valorDigitado : (n > 0 ? valorDigitado / n : 0);
  async function salvar() {
    if (!f.descricao.trim() || !(valorDigitado > 0) || !(n >= 1)) return;
    if (recorrente) {
      await api.post('/financeiro/recorrente', {
        descricao: f.descricao, valor: valorDigitado, meses: n, tipo: 'saida', origem: f.origem,
        primeiroVencimento: f.primeiroVencimento || null, clienteId: f.clienteId || null, processoId: f.processoId || null,
      });
    } else {
      await api.post('/financeiro/parcelar', {
        descricao: f.descricao, valorTotal: valorDigitado, parcelas: n, tipo: 'entrada', origem: f.origem,
        primeiroVencimento: f.primeiroVencimento || null, clienteId: f.clienteId || null, processoId: f.processoId || null,
      });
    }
    onSaved();
  }
  return (
    <Modal title="Parcelar / Repetir lançamento" onClose={onClose}>
      <div className="tabs" style={{ marginTop: 0 }}>
        <button className={modo === 'parcelar' ? 'active' : ''} onClick={() => { setModo('parcelar'); setF({ ...f, origem: 'honorario' }); }}>Parcelar receita (dividir total)</button>
        <button className={modo === 'recorrente' ? 'active' : ''} onClick={() => { setModo('recorrente'); setF({ ...f, origem: 'despesa' }); }}>Despesa recorrente (repetir)</button>
      </div>
      <Field label="Descrição"><input className="input" value={f.descricao} onChange={set('descricao')} placeholder={recorrente ? 'Ex.: Aluguel do escritório' : 'Ex.: Honorários contratuais'} /></Field>
      <div className="row-2">
        <Field label={recorrente ? 'Valor por mês (R$)' : 'Valor total (R$)'}><input className="input" type="number" value={f.valorTotal} onChange={set('valorTotal')} /></Field>
        <Field label={recorrente ? 'Nº de meses' : 'Nº de parcelas'}><input className="input" type="number" min="1" value={f.parcelas} onChange={set('parcelas')} /></Field>
      </div>
      <div className="row-2">
        <Field label="Origem"><select className="input" value={f.origem} onChange={set('origem')}>
          {ORIGENS.map((o) => <option key={o} value={o}>{o}</option>)}</select></Field>
        <Field label="1º vencimento"><input className="input" type="date" value={f.primeiroVencimento || ''} onChange={set('primeiroVencimento')} /></Field>
      </div>
      <div className="row-2">
        <Field label="Cliente (opcional)"><select className="input" value={f.clienteId || ''} onChange={set('clienteId')}>
          <option value="">—</option>{clientes.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}</select></Field>
        <Field label="Processo (opcional)"><select className="input" value={f.processoId || ''} onChange={set('processoId')}>
          <option value="">—</option>{processos.filter((p) => !f.clienteId || p.clienteId === f.clienteId).map((p) => <option key={p.id} value={p.id}>{p.titulo}</option>)}</select></Field>
      </div>
      {n > 0 && valorDigitado > 0 &&
        <div className="panel" style={{ padding: 12, marginBottom: 12, color: 'var(--muted)' }}>
          {recorrente
            ? <>{n} lançamentos de <b>{fmtMoney(porMes)}</b> (total {fmtMoney(porMes * n)}) — todo mês a partir de {f.primeiroVencimento ? fmtDate(f.primeiroVencimento) : 'hoje'}.</>
            : <>{n}× de <b>{fmtMoney(porMes)}</b> — vencimentos mensais a partir de {f.primeiroVencimento ? fmtDate(f.primeiroVencimento) : 'hoje'}.</>}
        </div>}
      <button className="btn" style={{ width: '100%', justifyContent: 'center' }} onClick={salvar}>Gerar {n || ''} {recorrente ? 'lançamentos' : 'parcelas'}</button>
    </Modal>
  );
}

function Editar({ item, clientes, processos, onClose, onSaved }) {
  const [f, setF] = useState(item);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const editando = !!f.id;
  async function salvar() {
    if (!f.descricao.trim() || f.valor === '' || f.valor == null) return;
    const body = { tipo: f.tipo, origem: f.origem, descricao: f.descricao, valor: f.valor, status: f.status,
      valorPago: f.valorPago || 0, parcelaNum: f.parcelaNum ?? null, parcelaTotal: f.parcelaTotal ?? null, grupoParcela: f.grupoParcela || null,
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
