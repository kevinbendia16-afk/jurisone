import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, fmtDateTime } from '../api.js';
import { PageHead, Modal, Field, Empty, Badge } from '../ui.jsx';

const PROXIMO = { pendente: 'em_andamento', em_andamento: 'concluida', concluida: 'pendente' };
const ROTULO = { pendente: 'Iniciar', em_andamento: 'Concluir', concluida: 'Reabrir' };

export default function Tarefas() {
  const nav = useNavigate();
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const load = () => api.get('/tarefas').then((r) =>
    setList(r.slice().sort((a, b) => (a.prazo ? new Date(a.prazo) : 8e15) - (b.prazo ? new Date(b.prazo) : 8e15)))).catch(() => {});
  useEffect(() => { load(); }, []);
  const avancar = async (t) => { await api.put('/tarefas/' + t.id, { ...t, status: PROXIMO[t.status] || 'pendente' }); load(); };
  const excluir = async (t) => { if (confirm('Excluir esta tarefa?')) { await api.del('/tarefas/' + t.id); load(); } };
  const abrir = (t) => { if (t.processoId) nav('/processos/' + t.processoId); else if (t.clienteId) nav('/clientes/' + t.clienteId); };
  return (
    <div>
      <PageHead crumb="Produtividade" title="Tarefas" desc="O que precisa ser feito — de quem é, quando e para qual processo."
        action={<button className="btn" onClick={() => setOpen(true)}>+ Nova tarefa</button>} />
      <div className="panel">
        {list.length === 0 ? <Empty>Nenhuma tarefa.</Empty> : (
          <table>
            <thead><tr><th>Tarefa</th><th>Cliente / Processo</th><th>Quando</th><th>Prioridade</th><th>Status</th><th></th></tr></thead>
            <tbody>{list.map((t) => {
              const clicavel = !!(t.clienteId || t.processoId);
              return (
                <tr key={t.id} className={clicavel ? 'clickable' : ''} onClick={clicavel ? () => abrir(t) : undefined}>
                  <td style={{ fontWeight: 600, textDecoration: t.status === 'concluida' ? 'line-through' : 'none', opacity: t.status === 'concluida' ? 0.6 : 1 }}>
                    {t.titulo}
                    {t.descricao && <div style={{ color: 'var(--muted-2)', fontSize: 12, fontWeight: 400 }}>{t.descricao}</div>}
                  </td>
                  <td style={{ color: 'var(--muted)' }}>
                    {t.cliente ? <>👤 {t.cliente.nome}</> : <span style={{ color: 'var(--muted-2)' }}>sem cliente</span>}
                    {t.processo?.numeroCnj && <div style={{ fontSize: 11 }} className="mono">{t.processo.numeroCnj}</div>}
                  </td>
                  <td className="mono" style={{ fontSize: 12, color: t.prazo ? 'var(--text)' : 'var(--muted-2)' }}>{t.prazo ? fmtDateTime(t.prazo) : '—'}</td>
                  <td><Badge>{t.prioridade}</Badge></td><td><Badge>{t.status}</Badge></td>
                  <td onClick={(e) => e.stopPropagation()} style={{ whiteSpace: 'nowrap' }}>
                    <button className="btn sm" style={{ marginRight: 6 }} onClick={() => avancar(t)}>{ROTULO[t.status] || 'Avançar'}</button>
                    <button className="btn ghost sm" onClick={() => excluir(t)} style={{ color: 'var(--red)' }}>🗑</button>
                  </td>
                </tr>
              );
            })}</tbody>
          </table>
        )}
      </div>
      {open && <Nova onClose={() => setOpen(false)} onSaved={() => { setOpen(false); load(); }} />}
    </div>
  );
}

function Nova({ onClose, onSaved }) {
  const [clientes, setClientes] = useState([]);
  const [processos, setProcessos] = useState([]);
  const [f, setF] = useState({ titulo: '', descricao: '', prioridade: 'normal', status: 'pendente', prazo: '', clienteId: '', processoId: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  useEffect(() => {
    api.get('/clientes').then(setClientes).catch(() => {});
    api.get('/processos').then(setProcessos).catch(() => {});
  }, []);
  async function save() {
    if (!f.titulo.trim()) return;
    await api.post('/tarefas', { ...f, prazo: f.prazo || null, clienteId: f.clienteId || null, processoId: f.processoId || null });
    onSaved();
  }
  return (
    <Modal title="Nova tarefa" onClose={onClose}>
      <Field label="O que fazer"><input className="input" placeholder="Ex.: Ligar para o cliente sobre a audiência" value={f.titulo} onChange={set('titulo')} /></Field>
      <Field label="Detalhes (opcional)"><textarea className="input" rows={2} placeholder="Assunto, o que precisa, número para ligar…" value={f.descricao} onChange={set('descricao')} style={{ resize: 'vertical' }} /></Field>
      <div className="row-2">
        <Field label="Cliente (de quem é)"><select className="input" value={f.clienteId} onChange={set('clienteId')}>
          <option value="">— nenhum —</option>{clientes.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}</select></Field>
        <Field label="Processo (opcional)"><select className="input" value={f.processoId} onChange={set('processoId')}>
          <option value="">— nenhum —</option>{processos.filter((p) => !f.clienteId || p.clienteId === f.clienteId).map((p) => <option key={p.id} value={p.id}>{p.titulo}</option>)}</select></Field>
      </div>
      <div className="row-2">
        <Field label="Prazo (data e hora)"><input className="input" type="datetime-local" value={f.prazo} onChange={set('prazo')} /></Field>
        <Field label="Prioridade"><select className="input" value={f.prioridade} onChange={set('prioridade')}>
          <option value="normal">normal</option><option value="alta">alta</option><option value="urgente">urgente</option></select></Field>
      </div>
      <button className="btn" style={{ width: '100%', justifyContent: 'center' }} onClick={save}>Salvar tarefa</button>
    </Modal>
  );
}
