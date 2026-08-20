import React, { useEffect, useState } from 'react';
import { api } from '../api.js';
import { PageHead, Modal, Field, Empty } from '../ui.jsx';

// Categorias pensadas para a rotina do advogado
export const CATEGORIAS = {
  audiencia:        { label: 'Audiência',          cor: '#f87171', ico: '⚖' },
  prazo:            { label: 'Prazo processual',   cor: '#fbbf24', ico: '⏱' },
  reuniao_cliente:  { label: 'Reunião c/ cliente', cor: '#8b9cff', ico: '🤝' },
  novo_cliente:     { label: 'Novo cliente/empresa', cor: '#34d399', ico: '➕' },
  revisar_processo: { label: 'Revisar processo',   cor: '#38bdf8', ico: '🔍' },
  diligencia:       { label: 'Diligência',         cor: '#a78bfa', ico: '🚗' },
  tarefa:           { label: 'Tarefa',             cor: '#94a3b8', ico: '☑' },
  outro:            { label: 'Outro',              cor: '#64748b', ico: '•' },
};

export default function Agenda() {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [filtro, setFiltro] = useState('todas');
  const load = () => api.get('/eventos').then((r) =>
    setList(r.slice().sort((a, b) => new Date(a.inicio) - new Date(b.inicio)))).catch(() => {});
  useEffect(() => { load(); }, []);

  const filtrada = list.filter((e) => filtro === 'todas' || e.categoria === filtro);
  // agrupa por dia
  const grupos = {};
  for (const e of filtrada) {
    const k = new Date(e.inicio).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' });
    (grupos[k] ||= []).push(e);
  }

  return (
    <div>
      <PageHead crumb="Planejamento" title="Agenda" desc="Audiências, prazos, reuniões e compromissos — organizados por categoria."
        action={<button className="btn" onClick={() => setOpen(true)}>+ Novo compromisso</button>} />

      <div className="tabs" style={{ marginTop: 0, flexWrap: 'wrap' }}>
        <button className={filtro === 'todas' ? 'active' : ''} onClick={() => setFiltro('todas')}>Todas</button>
        {Object.entries(CATEGORIAS).map(([k, v]) => (
          <button key={k} className={filtro === k ? 'active' : ''} onClick={() => setFiltro(k)}>{v.ico} {v.label}</button>
        ))}
      </div>

      {Object.keys(grupos).length === 0 ? <div className="panel"><Empty>Nenhum compromisso na agenda.</Empty></div> : (
        Object.entries(grupos).map(([dia, evs]) => (
          <div key={dia} style={{ marginBottom: 22 }}>
            <div className="crumb" style={{ marginBottom: 10 }}>{dia}</div>
            <div className="panel">
              {evs.map((e) => {
                const cat = CATEGORIAS[e.categoria] || CATEGORIAS.outro;
                const hora = e.diaInteiro ? 'Dia inteiro'
                  : new Date(e.inicio).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                return (
                  <div key={e.id} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '14px 18px', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ width: 4, alignSelf: 'stretch', borderRadius: 4, background: cat.cor }} />
                    <span style={{ fontFamily: 'var(--mono)', color: 'var(--muted)', width: 90 }}>{hora}</span>
                    <span style={{ fontSize: 18 }}>{cat.ico}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>{e.titulo}</div>
                      <div style={{ color: 'var(--muted)', fontSize: 13 }}>
                        {cat.label}{e.cliente ? ` · ${e.cliente.nome}` : ''}{e.local ? ` · ${e.local}` : ''}
                      </div>
                    </div>
                    <span className="badge" style={{ background: cat.cor + '22', color: cat.cor }}>{cat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}
      {open && <Novo onClose={() => setOpen(false)} onSaved={() => { setOpen(false); load(); }} />}
    </div>
  );
}

function Novo({ onClose, onSaved }) {
  const [clientes, setClientes] = useState([]);
  const [processos, setProcessos] = useState([]);
  const [f, setF] = useState({
    titulo: '', categoria: 'audiencia', inicio: new Date().toISOString().slice(0, 16),
    diaInteiro: false, local: '', clienteId: '', processoId: '',
  });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  useEffect(() => {
    api.get('/clientes').then(setClientes).catch(() => {});
    api.get('/processos').then(setProcessos).catch(() => {});
  }, []);
  async function save() { if (!f.titulo.trim()) return; await api.post('/eventos', f); onSaved(); }

  return (
    <Modal title="Novo compromisso" onClose={onClose}>
      <Field label="Título"><input className="input" value={f.titulo} onChange={set('titulo')} /></Field>
      <div className="row-2">
        <Field label="Categoria">
          <select className="input" value={f.categoria} onChange={set('categoria')}>
            {Object.entries(CATEGORIAS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
        </Field>
        <Field label="Data e hora"><input className="input" type="datetime-local" value={f.inicio} onChange={set('inicio')} /></Field>
      </div>
      <div className="row-2">
        <Field label="Cliente (opcional)">
          <select className="input" value={f.clienteId} onChange={set('clienteId')}>
            <option value="">—</option>{clientes.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}
          </select>
        </Field>
        <Field label="Processo (opcional)">
          <select className="input" value={f.processoId} onChange={set('processoId')}>
            <option value="">—</option>{processos.map((p) => <option key={p.id} value={p.id}>{p.titulo}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Local (opcional)"><input className="input" value={f.local} onChange={set('local')} /></Field>
      <label style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16, color: 'var(--muted)' }}>
        <input type="checkbox" checked={f.diaInteiro} onChange={set('diaInteiro')} /> Dia inteiro
      </label>
      <button className="btn" style={{ width: '100%', justifyContent: 'center' }} onClick={save}>Salvar compromisso</button>
    </Modal>
  );
}
