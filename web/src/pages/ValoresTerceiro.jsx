import React, { useEffect, useState } from 'react';
import { api, fmtMoney } from '../api.js';
import { PageHead, Modal, Field, Empty, Badge } from '../ui.jsx';

export default function ValoresTerceiro() {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);
  const load = () => api.get('/valores-terceiro').then(setList).catch(() => {});
  useEffect(() => { load(); }, []);
  const mudarStatus = async (t, status) => { await api.put('/valores-terceiro/' + t.id, { ...t, status }); load(); };

  // Regra de ouro: receita = honorário só quando recebido/repassado; custódia = líquido não repassado.
  const receita = list.filter((t) => t.status === 'recebido' || t.status === 'repassado').reduce((s, t) => s + t.honorarioValor, 0);
  const custodia = list.filter((t) => t.status !== 'repassado').reduce((s, t) => s + t.valorLiquido, 0);

  return (
    <div>
      <PageHead crumb="Custódia" title="Valores de terceiros" desc="Dinheiro do cliente: bruto, deduções e repasse. Não é receita do escritório."
        action={<button className="btn" onClick={() => setOpen(true)}>+ Novo valor de terceiro</button>} />
      <div className="grid cards-2" style={{ marginBottom: 16 }}>
        <div className="card"><div className="label">Receita do escritório (honorário realizado)</div><div className="value money green">{fmtMoney(receita)}</div></div>
        <div className="card"><div className="label">Em custódia (a repassar ao cliente)</div><div className="value money">{fmtMoney(custodia)}</div></div>
      </div>
      <div className="panel">
        {list.length === 0 ? <Empty>Nenhum valor de terceiro.</Empty> : (
          <table>
            <thead><tr><th>Cliente</th><th>Tipo</th><th>Bruto</th><th>Honorário deduzido</th><th>Líquido a repassar</th><th>Status</th><th></th></tr></thead>
            <tbody>{list.map((t) => (
              <tr key={t.id} className="clickable" onClick={() => setEdit(t)}>
                <td style={{ fontWeight: 600 }}>{t.cliente?.nome}</td>
                <td style={{ textTransform: 'capitalize' }}>{t.tipo}</td>
                <td className="mono">{fmtMoney(t.valorBruto)}</td>
                <td className="mono" style={{ color: 'var(--green)' }}>{fmtMoney(t.honorarioValor)}</td>
                <td className="mono">{fmtMoney(t.valorLiquido)}</td>
                <td><Badge>{t.status}</Badge></td>
                <td onClick={(e) => e.stopPropagation()} style={{ whiteSpace: 'nowrap' }}>
                  {t.status === 'aguardando' && <button className="btn sm" style={{ marginRight: 6 }} onClick={() => mudarStatus(t, 'recebido')}>Recebido</button>}
                  {t.status === 'recebido' && <button className="btn sm" style={{ background: 'var(--green)', color: '#06281a', marginRight: 6 }} onClick={() => mudarStatus(t, 'repassado')}>Repassado</button>}
                </td>
              </tr>
            ))}</tbody>
          </table>
        )}
      </div>
      {open && <Novo onClose={() => setOpen(false)} onSaved={() => { setOpen(false); load(); }} />}
      {edit && <Novo item={edit} onClose={() => setEdit(null)} onSaved={() => { setEdit(null); load(); }} />}
    </div>
  );
}

function Novo({ item, onClose, onSaved }) {
  const [clientes, setClientes] = useState([]);
  const editando = !!item;
  const [f, setF] = useState(item
    ? { clienteId: item.clienteId || '', tipo: item.tipo, valorBruto: item.valorBruto, honorarioPct: item.honorarioPct, custas: item.custas, irRetido: item.irRetido, tribunal: item.tribunal || '', enteDevedor: item.enteDevedor || '', status: item.status }
    : { clienteId: '', tipo: 'precatorio', valorBruto: '', honorarioPct: '', custas: '', irRetido: '', tribunal: '', enteDevedor: '', status: 'aguardando' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  useEffect(() => { api.get('/clientes').then(setClientes).catch(() => {}); }, []);

  const bruto = Number(f.valorBruto) || 0;
  const honor = bruto * (Number(f.honorarioPct) || 0) / 100;
  const liquido = bruto - honor - (Number(f.custas) || 0) - (Number(f.irRetido) || 0);

  async function save() {
    if (!f.clienteId) return;
    if (editando) await api.put('/valores-terceiro/' + item.id, f);
    else await api.post('/valores-terceiro', f);
    onSaved();
  }
  async function excluir() { if (confirm('Excluir este valor de terceiro?')) { await api.del('/valores-terceiro/' + item.id); onSaved(); } }
  return (
    <Modal title={editando ? 'Editar valor de terceiro' : 'Novo valor de terceiro'} onClose={onClose}>
      <Field label="Cliente"><select className="input" value={f.clienteId} onChange={set('clienteId')}>
        <option value="">Selecione</option>{clientes.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}</select></Field>
      <div className="row-2">
        <Field label="Tipo"><select className="input" value={f.tipo} onChange={set('tipo')}>
          <option value="precatorio">Precatório</option><option value="rpv">RPV</option><option value="acordo">Acordo</option>
          <option value="alvara">Alvará</option><option value="deposito_judicial">Depósito judicial</option></select></Field>
        <Field label="Valor bruto (R$)"><input className="input" type="number" value={f.valorBruto} onChange={set('valorBruto')} /></Field>
      </div>
      <div className="row-2">
        <Field label="Honorário contratual %"><input className="input" type="number" value={f.honorarioPct} onChange={set('honorarioPct')} /></Field>
        <Field label="Custas a reembolsar (R$)"><input className="input" type="number" value={f.custas} onChange={set('custas')} /></Field>
      </div>
      <div className="row-2">
        <Field label="IR retido (R$)"><input className="input" type="number" value={f.irRetido} onChange={set('irRetido')} /></Field>
        <Field label="Tribunal"><input className="input" value={f.tribunal} onChange={set('tribunal')} /></Field>
      </div>
      <div className="row-2">
        <Field label="Ente devedor"><input className="input" value={f.enteDevedor} onChange={set('enteDevedor')} /></Field>
        <Field label="Status"><select className="input" value={f.status} onChange={set('status')}>
          <option value="aguardando">Aguardando</option><option value="recebido">Recebido</option><option value="repassado">Repassado</option></select></Field>
      </div>
      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <span className="label" style={{ margin: 0 }}>Valor líquido de repasse (calculado)</span>
        <span className="value money">{fmtMoney(liquido)}</span>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <button className="btn" style={{ flex: 1, justifyContent: 'center' }} onClick={save}>{editando ? 'Salvar alterações' : 'Salvar'}</button>
        {editando && <button className="btn ghost" onClick={excluir} style={{ color: 'var(--red)' }}>Excluir</button>}
      </div>
    </Modal>
  );
}
