import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api.js';
import { PageHead, Modal, Field, Empty, Badge } from '../ui.jsx';

export default function Processos() {
  const nav = useNavigate();
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const load = () => api.get('/processos').then(setList).catch(() => {});
  useEffect(() => { load(); }, []);

  return (
    <div>
      <PageHead crumb="Gestão Processual" title="Processos" desc="Controle processual centralizado e vinculado aos clientes."
        action={<button className="btn" onClick={() => setOpen(true)}>+ Novo processo</button>} />
      <div className="panel">
        {list.length === 0 ? <Empty>Nenhum processo cadastrado.</Empty> : (
          <table>
            <thead><tr><th>Processo</th><th>Cliente</th><th>Área</th><th>Status</th><th>Prioridade</th></tr></thead>
            <tbody>
              {list.map((p) => (
                <tr key={p.id} className="clickable" onClick={() => nav('/processos/' + p.id)}>
                  <td style={{ fontWeight: 600 }}>{p.titulo}<br /><span className="mono">{p.numeroCnj || ''}</span></td>
                  <td style={{ color: 'var(--muted)' }}>{p.cliente?.nome}</td>
                  <td>{p.area}</td>
                  <td><Badge>{p.status}</Badge></td>
                  <td><Badge>{p.prioridade}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {open && <NovoProcesso onClose={() => setOpen(false)} onSaved={() => { setOpen(false); load(); }} />}
    </div>
  );
}

function NovoProcesso({ onClose, onSaved }) {
  const [clientes, setClientes] = useState([]);
  const [f, setF] = useState({ clienteId: '', numeroCnj: '', area: 'Cível', titulo: '', status: 'ativo', prioridade: 'normal' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  useEffect(() => { api.get('/clientes').then(setClientes).catch(() => {}); }, []);
  async function save() {
    if (!f.clienteId || !f.titulo.trim()) return;
    await api.post('/processos', f);
    onSaved();
  }
  return (
    <Modal title="Novo processo" onClose={onClose}>
      <Field label="Cliente">
        <select className="input" value={f.clienteId} onChange={set('clienteId')}>
          <option value="">Selecione</option>
          {clientes.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}
        </select>
      </Field>
      <div className="row-2">
        <Field label="Número CNJ"><input className="input" value={f.numeroCnj} onChange={set('numeroCnj')} /></Field>
        <Field label="Área jurídica"><input className="input" value={f.area} onChange={set('area')} /></Field>
      </div>
      <Field label="Título / assunto"><input className="input" value={f.titulo} onChange={set('titulo')} /></Field>
      <div className="row-2">
        <Field label="Status"><select className="input" value={f.status} onChange={set('status')}>
          <option value="consulta">consulta</option><option value="ativo">ativo</option>
          <option value="recurso">recurso</option><option value="encerrado">encerrado</option></select></Field>
        <Field label="Prioridade"><select className="input" value={f.prioridade} onChange={set('prioridade')}>
          <option value="normal">normal</option><option value="alta">alta</option><option value="urgente">urgente</option></select></Field>
      </div>
      <div className="actions"><button className="btn" style={{ width: '100%', justifyContent: 'center' }} onClick={save}>Salvar processo</button></div>
    </Modal>
  );
}
