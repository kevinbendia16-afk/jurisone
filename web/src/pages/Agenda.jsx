import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
  const nav = useNavigate();
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [filtro, setFiltro] = useState('todas');
  const [vista, setVista] = useState('lista'); // lista | mes
  const [mesRef, setMesRef] = useState(new Date());
  const [detalhe, setDetalhe] = useState(null); // evento aberto no modal
  const abrir = (e) => { if (e.processoId) nav('/processos/' + e.processoId); else if (e.clienteId) nav('/clientes/' + e.clienteId); };
  const concluir = async (e) => { await api.put('/eventos/' + e.id, { ...e, status: 'concluido' }); setDetalhe(null); load(); };
  const excluir = async (e) => { if (confirm('Excluir este compromisso?')) { await api.del('/eventos/' + e.id); setDetalhe(null); load(); } };
  const [sp] = useSearchParams();
  const load = () => api.get('/eventos').then((r) =>
    setList(r.slice().sort((a, b) => new Date(a.inicio) - new Date(b.inicio)))).catch(() => {});
  useEffect(() => { load(); if (sp.get('novo')) setOpen(true); }, []);

  const filtrada = list.filter((e) => filtro === 'todas' || e.categoria === filtro);
  // agrupa por dia (visão lista)
  const grupos = {};
  for (const e of filtrada) {
    const k = new Date(e.inicio).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' });
    (grupos[k] ||= []).push(e);
  }

  return (
    <div>
      <PageHead crumb="Planejamento" title="Agenda" desc="Audiências, prazos, reuniões e compromissos — organizados por categoria."
        action={<div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div className="tabs" style={{ margin: 0 }}>
            <button className={vista === 'lista' ? 'active' : ''} onClick={() => setVista('lista')}>☰ Lista</button>
            <button className={vista === 'mes' ? 'active' : ''} onClick={() => setVista('mes')}>▦ Calendário</button>
          </div>
          <button className="btn" onClick={() => setOpen(true)}>+ Novo compromisso</button>
        </div>} />

      <div className="tabs" style={{ marginTop: 0, flexWrap: 'wrap' }}>
        <button className={filtro === 'todas' ? 'active' : ''} onClick={() => setFiltro('todas')}>Todas</button>
        {Object.entries(CATEGORIAS).map(([k, v]) => (
          <button key={k} className={filtro === k ? 'active' : ''} onClick={() => setFiltro(k)}>{v.ico} {v.label}</button>
        ))}
      </div>

      {vista === 'mes' ? (
        <Calendario eventos={filtrada} mesRef={mesRef} setMesRef={setMesRef} onEvento={setDetalhe} />
      ) : Object.keys(grupos).length === 0 ? <div className="panel"><Empty>Nenhum compromisso na agenda.</Empty></div> : (
        Object.entries(grupos).map(([dia, evs]) => (
          <div key={dia} style={{ marginBottom: 22 }}>
            <div className="crumb" style={{ marginBottom: 10 }}>{dia}</div>
            <div className="panel">
              {evs.map((e) => {
                const cat = CATEGORIAS[e.categoria] || CATEGORIAS.outro;
                const hora = e.diaInteiro ? 'Dia inteiro'
                  : new Date(e.inicio).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                const clicavel = !!(e.processoId || e.clienteId);
                return (
                  <div key={e.id} className={clicavel ? 'clickable' : ''} onClick={clicavel ? () => abrir(e) : undefined}
                    style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '14px 18px', borderBottom: '1px solid var(--border)', cursor: clicavel ? 'pointer' : 'default' }}>
                    <span style={{ width: 4, alignSelf: 'stretch', borderRadius: 4, background: cat.cor }} />
                    <span style={{ fontFamily: 'var(--mono)', color: 'var(--muted)', width: 90 }}>{hora}</span>
                    <span style={{ fontSize: 18 }}>{cat.ico}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>{e.titulo}</div>
                      <div style={{ color: 'var(--muted)', fontSize: 13 }}>
                        {cat.label}
                        {e.cliente ? <> · 👤 <b style={{ color: 'var(--text)' }}>{e.cliente.nome}</b></> : ''}
                        {e.processo?.numeroCnj ? ` · ${e.processo.numeroCnj}` : ''}
                        {e.local ? ` · ${e.local}` : ''}
                      </div>
                    </div>
                    <span className="badge" style={{ background: cat.cor + '22', color: cat.cor }}>{e.status === 'concluido' ? '✓ Concluído' : cat.label}</span>
                    <span onClick={(ev) => ev.stopPropagation()} style={{ whiteSpace: 'nowrap' }}>
                      {e.status !== 'concluido' && <button className="btn sm" style={{ marginRight: 6 }} onClick={() => concluir(e)}>✓</button>}
                      <button className="btn ghost sm" onClick={() => excluir(e)} style={{ color: 'var(--red)' }}>🗑</button>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}
      {open && <Novo onClose={() => setOpen(false)} onSaved={() => { setOpen(false); load(); }} />}
      {detalhe && <Detalhe evento={detalhe} onClose={() => setDetalhe(null)}
        onAbrir={abrir} onConcluir={concluir} onExcluir={excluir} />}
    </div>
  );
}

// ---------- Visão de calendário mensal ----------
const SEMANA = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
function Calendario({ eventos, mesRef, setMesRef, onEvento }) {
  const ano = mesRef.getFullYear(), mes = mesRef.getMonth();
  const inicioGrade = new Date(ano, mes, 1);
  inicioGrade.setDate(1 - inicioGrade.getDay()); // volta até domingo
  const dias = Array.from({ length: 42 }, (_, i) => {
    const d = new Date(inicioGrade); d.setDate(inicioGrade.getDate() + i); return d;
  });
  const hojeStr = new Date().toDateString();
  const porDia = {};
  eventos.forEach((e) => { (porDia[new Date(e.inicio).toDateString()] ||= []).push(e); });
  Object.values(porDia).forEach((arr) => arr.sort((a, b) => new Date(a.inicio) - new Date(b.inicio)));
  const mudarMes = (delta) => setMesRef(new Date(ano, mes + delta, 1));

  return (
    <div className="panel" style={{ padding: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button className="btn ghost sm" onClick={() => mudarMes(-1)}>‹</button>
          <button className="btn ghost sm" onClick={() => setMesRef(new Date())}>Hoje</button>
          <button className="btn ghost sm" onClick={() => mudarMes(1)}>›</button>
        </div>
        <div style={{ fontWeight: 700, fontSize: 17 }}>
          {(() => { const s = mesRef.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }); return s.charAt(0).toUpperCase() + s.slice(1); })()}
        </div>
        <div style={{ width: 120 }} />
      </div>

      <div className="cal-grid cal-head">
        {SEMANA.map((s) => <div key={s} className="cal-dow">{s}</div>)}
      </div>
      <div className="cal-grid">
        {dias.map((d, i) => {
          const evs = porDia[d.toDateString()] || [];
          const foraDoMes = d.getMonth() !== mes;
          const ehHoje = d.toDateString() === hojeStr;
          return (
            <div key={i} className={'cal-cell' + (foraDoMes ? ' fora' : '') + (ehHoje ? ' hoje' : '')}>
              <div className="cal-num">{d.getDate()}</div>
              <div className="cal-evs">
                {evs.slice(0, 4).map((e) => {
                  const cat = CATEGORIAS[e.categoria] || CATEGORIAS.outro;
                  const hora = e.diaInteiro ? '' : new Date(e.inicio).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) + ' ';
                  return (
                    <button key={e.id} className="cal-pill" title={e.titulo}
                      style={{ background: cat.cor + '26', color: cat.cor, borderLeft: `3px solid ${cat.cor}`, textDecoration: e.status === 'concluido' ? 'line-through' : 'none', opacity: e.status === 'concluido' ? 0.6 : 1 }}
                      onClick={() => onEvento(e)}>
                      <span className="mono" style={{ fontSize: 10 }}>{hora}</span>{e.titulo}
                    </button>
                  );
                })}
                {evs.length > 4 && <div className="cal-mais">+{evs.length - 4} mais</div>}
              </div>
            </div>
          );
        })}
      </div>

      {/* legenda de cores */}
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--border)' }}>
        {Object.values(CATEGORIAS).map((v) => (
          <span key={v.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--muted)', fontSize: 12 }}>
            <span style={{ width: 11, height: 11, borderRadius: 3, background: v.cor }} />{v.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------- Detalhe de um compromisso (tudo que o advogado precisa) ----------
function Detalhe({ evento: e, onClose, onAbrir, onConcluir, onExcluir }) {
  const cat = CATEGORIAS[e.categoria] || CATEGORIAS.outro;
  const dt = new Date(e.inicio);
  const data = dt.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  const hora = e.diaInteiro ? 'Dia inteiro' : dt.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const linha = (ico, label, val) => val ? (
    <div style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
      <span style={{ width: 20 }}>{ico}</span>
      <span style={{ color: 'var(--muted)', width: 90 }}>{label}</span>
      <span style={{ flex: 1, fontWeight: 500 }}>{val}</span>
    </div>
  ) : null;
  return (
    <Modal title={<span><span style={{ color: cat.cor }}>{cat.ico}</span> {e.titulo}</span>} onClose={onClose}>
      <div style={{ marginBottom: 14 }}>
        <span className="badge" style={{ background: cat.cor + '22', color: cat.cor }}>{cat.label}</span>
        {e.status === 'concluido' && <span className="badge" style={{ marginLeft: 8, background: 'var(--green)22', color: 'var(--green)' }}>✓ Concluído</span>}
      </div>
      {linha('📅', 'Data', <span style={{ textTransform: 'capitalize' }}>{data}</span>)}
      {linha('🕐', 'Horário', hora)}
      {linha('📍', 'Local', e.local)}
      {linha('👤', 'Cliente', e.cliente?.nome)}
      {linha('⚖', 'Processo', e.processo ? (e.processo.titulo || e.processo.numeroCnj) : null)}
      {linha('📝', 'Descrição', e.descricao)}
      <div style={{ display: 'flex', gap: 8, marginTop: 18, flexWrap: 'wrap' }}>
        {e.status !== 'concluido' && <button className="btn" onClick={() => onConcluir(e)}>✓ Concluir</button>}
        {(e.processoId || e.clienteId) && <button className="btn ghost" onClick={() => onAbrir(e)}>Abrir {e.processoId ? 'processo' : 'cliente'}</button>}
        <button className="btn ghost" onClick={() => onExcluir(e)} style={{ color: 'var(--red)', marginLeft: 'auto' }}>🗑 Excluir</button>
      </div>
    </Modal>
  );
}

function Novo({ onClose, onSaved }) {
  const [clientes, setClientes] = useState([]);
  const [processos, setProcessos] = useState([]);
  const [f, setF] = useState({
    titulo: '', categoria: 'audiencia', inicio: new Date().toISOString().slice(0, 16),
    diaInteiro: false, local: '', descricao: '', clienteId: '', processoId: '',
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
      <Field label="Local (opcional)"><input className="input" value={f.local} onChange={set('local')} placeholder="Ex.: Fórum Central, 3ª Vara, sala 12" /></Field>
      <Field label="Observações (opcional)"><textarea className="input" rows={2} value={f.descricao} onChange={set('descricao')} placeholder="Anotações do dia: o que levar, quem encontrar, lembretes…" /></Field>
      <label style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16, color: 'var(--muted)' }}>
        <input type="checkbox" checked={f.diaInteiro} onChange={set('diaInteiro')} /> Dia inteiro
      </label>
      <button className="btn" style={{ width: '100%', justifyContent: 'center' }} onClick={save}>Salvar compromisso</button>
    </Modal>
  );
}
