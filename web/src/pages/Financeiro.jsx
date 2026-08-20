import React, { useEffect, useState } from 'react';
import { api, fmtMoney, fmtDate } from '../api.js';
import { PageHead, Modal, Field, Empty, Badge } from '../ui.jsx';

export default function Financeiro() {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const load = () => api.get('/financeiro').then(setList).catch(() => {});
  useEffect(() => { load(); }, []);

  const aReceber = list.filter((l) => l.tipo === 'entrada' && l.status !== 'pago').reduce((s, l) => s + l.valor, 0);
  const recebido = list.filter((l) => l.tipo === 'entrada' && l.status === 'pago').reduce((s, l) => s + l.valor, 0);
  const despesas = list.filter((l) => l.tipo === 'saida').reduce((s, l) => s + l.valor, 0);

  return (
    <div>
      <PageHead crumb="Gestão Financeira" title="Financeiro" desc="Contas, recebimentos e despesas do escritório."
        action={<button className="btn" onClick={() => setOpen(true)}>+ Novo lançamento</button>} />
      <div className="grid cards-3" style={{ marginBottom: 16 }}>
        <div className="card"><div className="label">A receber</div><div className="value money">{fmtMoney(aReceber)}</div></div>
        <div className="card"><div className="label">Recebido</div><div className="value money green">{fmtMoney(recebido)}</div></div>
        <div className="card"><div className="label">Despesas</div><div className="value money">{fmtMoney(despesas)}</div></div>
      </div>
      <div className="panel">
        {list.length === 0 ? <Empty>Nenhum lançamento financeiro.</Empty> : (
          <table>
            <thead><tr><th>Descrição</th><th>Origem</th><th>Tipo</th><th>Valor</th><th>Status</th></tr></thead>
            <tbody>{list.map((l) => (
              <tr key={l.id}><td style={{ fontWeight: 600 }}>{l.descricao}</td><td>{l.origem}</td>
                <td>{l.tipo}</td><td className="mono">{fmtMoney(l.valor)}</td><td><Badge>{l.status}</Badge></td></tr>
            ))}</tbody>
          </table>
        )}
      </div>
      {open && <Novo onClose={() => setOpen(false)} onSaved={() => { setOpen(false); load(); }} />}
    </div>
  );
}

function Novo({ onClose, onSaved }) {
  const [f, setF] = useState({ tipo: 'entrada', origem: 'honorario', descricao: '', valor: '', status: 'aberto' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  async function save() { if (!f.descricao.trim() || !f.valor) return; await api.post('/financeiro', f); onSaved(); }
  return (
    <Modal title="Novo lançamento" onClose={onClose}>
      <div className="row-2">
        <Field label="Tipo"><select className="input" value={f.tipo} onChange={set('tipo')}>
          <option value="entrada">entrada</option><option value="saida">saída</option></select></Field>
        <Field label="Origem"><select className="input" value={f.origem} onChange={set('origem')}>
          <option value="honorario">honorário</option><option value="despesa">despesa</option>
          <option value="custa">custa</option><option value="outro">outro</option></select></Field>
      </div>
      <Field label="Descrição"><input className="input" value={f.descricao} onChange={set('descricao')} /></Field>
      <div className="row-2">
        <Field label="Valor (R$)"><input className="input" type="number" value={f.valor} onChange={set('valor')} /></Field>
        <Field label="Status"><select className="input" value={f.status} onChange={set('status')}>
          <option value="aberto">aberto</option><option value="pago">pago</option><option value="atrasado">atrasado</option></select></Field>
      </div>
      <button className="btn" style={{ width: '100%', justifyContent: 'center' }} onClick={save}>Salvar lançamento</button>
    </Modal>
  );
}
