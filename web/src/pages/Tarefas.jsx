import React, { useEffect, useState } from 'react';
import { api } from '../api.js';
import { PageHead, Modal, Field, Empty, Badge } from '../ui.jsx';

export default function Tarefas() {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const load = () => api.get('/tarefas').then(setList).catch(() => {});
  useEffect(() => { load(); }, []);
  return (
    <div>
      <PageHead crumb="Produtividade" title="Tarefas" desc="O que precisa ser feito."
        action={<button className="btn" onClick={() => setOpen(true)}>+ Nova tarefa</button>} />
      <div className="panel">
        {list.length === 0 ? <Empty>Nenhuma tarefa.</Empty> : (
          <table>
            <thead><tr><th>Tarefa</th><th>Prioridade</th><th>Status</th></tr></thead>
            <tbody>{list.map((t) => (
              <tr key={t.id}><td style={{ fontWeight: 600 }}>{t.titulo}</td><td><Badge>{t.prioridade}</Badge></td><td><Badge>{t.status}</Badge></td></tr>
            ))}</tbody>
          </table>
        )}
      </div>
      {open && <Nova onClose={() => setOpen(false)} onSaved={() => { setOpen(false); load(); }} />}
    </div>
  );
}

function Nova({ onClose, onSaved }) {
  const [f, setF] = useState({ titulo: '', prioridade: 'normal', status: 'pendente' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  async function save() { if (!f.titulo.trim()) return; await api.post('/tarefas', f); onSaved(); }
  return (
    <Modal title="Nova tarefa" onClose={onClose}>
      <Field label="Título"><input className="input" value={f.titulo} onChange={set('titulo')} /></Field>
      <div className="row-2">
        <Field label="Prioridade"><select className="input" value={f.prioridade} onChange={set('prioridade')}>
          <option value="normal">normal</option><option value="alta">alta</option><option value="urgente">urgente</option></select></Field>
        <Field label="Status"><select className="input" value={f.status} onChange={set('status')}>
          <option value="pendente">pendente</option><option value="em_andamento">em andamento</option><option value="concluida">concluída</option></select></Field>
      </div>
      <button className="btn" style={{ width: '100%', justifyContent: 'center' }} onClick={save}>Salvar tarefa</button>
    </Modal>
  );
}
