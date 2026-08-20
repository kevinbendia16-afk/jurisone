import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api, fmtDateTime, fmtRelativo } from '../api.js';
import { PageHead, Modal, Field, Empty, Badge } from '../ui.jsx';

const PROXIMO = { pendente: 'em_andamento', em_andamento: 'concluida', concluida: 'pendente' };
const ROTULO = { pendente: 'Iniciar', em_andamento: 'Concluir', concluida: 'Reabrir' };
const COLUNAS = [['pendente', 'A fazer'], ['em_andamento', 'Em andamento'], ['concluida', 'Concluídas']];

export default function Tarefas() {
  const nav = useNavigate();
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(null); // null | {} novo | tarefa existente
  const [vista, setVista] = useState('lista'); // lista | kanban
  const [sp] = useSearchParams();
  const load = () => api.get('/tarefas').then((r) =>
    setList(r.slice().sort((a, b) => (a.prazo ? new Date(a.prazo) : 8e15) - (b.prazo ? new Date(b.prazo) : 8e15)))).catch(() => {});
  useEffect(() => { load(); if (sp.get('novo')) setEdit({}); }, []);
  const avancar = async (t) => { await api.put('/tarefas/' + t.id, { ...t, status: PROXIMO[t.status] || 'pendente' }); load(); };
  const mover = async (t, status) => { await api.put('/tarefas/' + t.id, { ...t, status }); load(); };
  const excluir = async (t) => { if (confirm('Excluir esta tarefa?')) { await api.del('/tarefas/' + t.id); load(); } };
  const abrir = (t) => { if (t.processoId) nav('/processos/' + t.processoId); else if (t.clienteId) nav('/clientes/' + t.clienteId); };

  return (
    <div>
      <PageHead crumb="Produtividade" title="Tarefas" desc="O que precisa ser feito — de quem é, quando e para qual processo."
        action={<div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div className="tabs" style={{ margin: 0 }}>
            <button className={vista === 'lista' ? 'active' : ''} onClick={() => setVista('lista')}>☰ Lista</button>
            <button className={vista === 'kanban' ? 'active' : ''} onClick={() => setVista('kanban')}>▥ Kanban</button>
          </div>
          <button className="btn" onClick={() => setEdit({})}>+ Nova tarefa</button>
        </div>} />

      {vista === 'kanban' ? (
        <div className="kanban">
          {COLUNAS.map(([st, titulo]) => {
            const tarefas = list.filter((t) => t.status === st);
            return (
              <div className="kanban-col" key={st}>
                <div className="kanban-head">{titulo} <span className="kanban-count">{tarefas.length}</span></div>
                {tarefas.length === 0 ? <div className="kanban-vazio">—</div> : tarefas.map((t) => (
                  <div className="kanban-card" key={t.id} onClick={() => setEdit(t)}>
                    <div style={{ fontWeight: 600, textDecoration: st === 'concluida' ? 'line-through' : 'none' }}>{t.titulo}</div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', margin: '6px 0', alignItems: 'center' }}>
                      <Badge>{t.prioridade}</Badge>
                      {t.prazo && <span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>⏰ {fmtRelativo(t.prazo)}</span>}
                    </div>
                    {t.cliente && <div style={{ color: 'var(--muted)', fontSize: 12 }}>👤 {t.cliente.nome}</div>}
                    <div style={{ display: 'flex', gap: 6, marginTop: 8 }} onClick={(e) => e.stopPropagation()}>
                      {st !== 'pendente' && <button className="btn ghost sm" onClick={() => mover(t, st === 'concluida' ? 'em_andamento' : 'pendente')}>‹</button>}
                      {st !== 'concluida' && <button className="btn sm" onClick={() => mover(t, PROXIMO[st])}>{ROTULO[st]} ›</button>}
                      <button className="btn ghost sm" onClick={() => excluir(t)} style={{ color: 'var(--red)', marginLeft: 'auto' }}>🗑</button>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="panel">
          {list.length === 0 ? <Empty>Nenhuma tarefa.</Empty> : (
            <table>
              <thead><tr><th>Tarefa</th><th>Cliente / Processo</th><th>Quando</th><th>Prioridade</th><th>Status</th><th></th></tr></thead>
              <tbody>{list.map((t) => (
                <tr key={t.id} className="clickable" onClick={() => setEdit(t)}>
                  <td style={{ fontWeight: 600, textDecoration: t.status === 'concluida' ? 'line-through' : 'none', opacity: t.status === 'concluida' ? 0.6 : 1 }}>
                    {t.titulo}
                    {t.descricao && <div style={{ color: 'var(--muted-2)', fontSize: 12, fontWeight: 400 }}>{t.descricao}</div>}
                  </td>
                  <td style={{ color: 'var(--muted)' }} onClick={(e) => { if (t.clienteId || t.processoId) { e.stopPropagation(); abrir(t); } }}>
                    {t.cliente ? <span className="clickable-link">👤 {t.cliente.nome}</span> : <span style={{ color: 'var(--muted-2)' }}>sem cliente</span>}
                    {t.processo?.numeroCnj && <div style={{ fontSize: 11 }} className="mono">{t.processo.numeroCnj}</div>}
                  </td>
                  <td className="mono" style={{ fontSize: 12, color: t.prazo ? 'var(--text)' : 'var(--muted-2)' }}>
                    {t.prazo ? <>{fmtDateTime(t.prazo)}<div style={{ fontSize: 11, color: 'var(--muted)' }}>{fmtRelativo(t.prazo)}</div></> : '—'}
                  </td>
                  <td><Badge>{t.prioridade}</Badge></td><td><Badge>{t.status}</Badge></td>
                  <td onClick={(e) => e.stopPropagation()} style={{ whiteSpace: 'nowrap' }}>
                    <button className="btn sm" style={{ marginRight: 6 }} onClick={() => avancar(t)}>{ROTULO[t.status] || 'Avançar'}</button>
                    <button className="btn ghost sm" onClick={() => excluir(t)} style={{ color: 'var(--red)' }}>🗑</button>
                  </td>
                </tr>
              ))}</tbody>
            </table>
          )}
        </div>
      )}
      {edit && <Editar item={edit} onClose={() => setEdit(null)} onSaved={() => { setEdit(null); load(); }} />}
    </div>
  );
}

function Editar({ item, onClose, onSaved }) {
  const [clientes, setClientes] = useState([]);
  const [processos, setProcessos] = useState([]);
  const editando = !!item.id;
  const [f, setF] = useState({
    titulo: item.titulo || '', descricao: item.descricao || '', prioridade: item.prioridade || 'normal',
    status: item.status || 'pendente', prazo: item.prazo ? String(item.prazo).slice(0, 16) : '',
    clienteId: item.clienteId || '', processoId: item.processoId || '',
  });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  useEffect(() => {
    api.get('/clientes').then(setClientes).catch(() => {});
    api.get('/processos').then(setProcessos).catch(() => {});
  }, []);
  async function save() {
    if (!f.titulo.trim()) return;
    const body = { ...f, prazo: f.prazo || null, clienteId: f.clienteId || null, processoId: f.processoId || null };
    if (editando) await api.put('/tarefas/' + item.id, body);
    else await api.post('/tarefas', body);
    onSaved();
  }
  async function excluir() { if (confirm('Excluir esta tarefa?')) { await api.del('/tarefas/' + item.id); onSaved(); } }
  return (
    <Modal title={editando ? 'Editar tarefa' : 'Nova tarefa'} onClose={onClose}>
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
      {editando && <Field label="Status"><select className="input" value={f.status} onChange={set('status')}>
        <option value="pendente">A fazer</option><option value="em_andamento">Em andamento</option><option value="concluida">Concluída</option></select></Field>}
      <div style={{ display: 'flex', gap: 10 }}>
        <button className="btn" style={{ flex: 1, justifyContent: 'center' }} onClick={save}>{editando ? 'Salvar alterações' : 'Salvar tarefa'}</button>
        {editando && <button className="btn ghost" onClick={excluir} style={{ color: 'var(--red)' }}>Excluir</button>}
      </div>
    </Modal>
  );
}
