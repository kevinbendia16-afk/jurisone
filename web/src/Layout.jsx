import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { api, clearToken } from './api.js';

const QUICK = [
  ['/clientes', '👥 Novo cliente'],
  ['/processos', '⚖ Novo processo'],
  ['/agenda', '📅 Novo compromisso'],
  ['/prazos', '⏱ Novo prazo'],
  ['/tarefas', '☑ Nova tarefa'],
  ['/financeiro', '🏛 Novo lançamento'],
];

const NAV = [
  ['/', '▦', 'Visão geral', true],
  ['/agenda', '📅', 'Agenda'],
  ['/clientes', '👥', 'Clientes'],
  ['/processos', '⚖', 'Processos'],
  ['/prazos', '⏱', 'Prazos'],
  ['/tarefas', '☑', 'Tarefas'],
  ['/financeiro', '🏛', 'Financeiro'],
  ['/valores-terceiros', '⊠', 'Valores de terceiros'],
  ['/feed', '📰', 'Feed Jurídico'],
  ['/configuracoes', '⚙', 'Configurações'],
];

export default function Layout({ children }) {
  const nav = useNavigate();
  const [quick, setQuick] = useState(false);
  const [q, setQ] = useState('');
  const [res, setRes] = useState([]);
  const cache = useRef(null);

  async function garantirCache() {
    if (cache.current) return cache.current;
    const [cli, proc] = await Promise.all([
      api.get('/clientes').catch(() => []), api.get('/processos').catch(() => []),
    ]);
    cache.current = {
      cli: cli.map((c) => ({ tipo: 'cliente', id: c.id, titulo: c.nome, sub: c.cpfCnpj || c.email || '', to: '/clientes/' + c.id, busca: (c.nome + ' ' + (c.cpfCnpj || '') + ' ' + (c.email || '')).toLowerCase() })),
      proc: proc.map((p) => ({ tipo: 'processo', id: p.id, titulo: p.titulo, sub: (p.numeroCnj || '') + ' · ' + (p.cliente?.nome || ''), to: '/processos/' + p.id, busca: (p.titulo + ' ' + (p.numeroCnj || '') + ' ' + (p.cliente?.nome || '')).toLowerCase() })),
    };
    return cache.current;
  }

  async function buscar(v) {
    setQ(v);
    if (v.trim().length < 2) { setRes([]); return; }
    const c = await garantirCache();
    const termo = v.toLowerCase();
    const todos = [...c.cli, ...c.proc].filter((x) => x.busca.includes(termo));
    setRes(todos.slice(0, 8));
  }
  function irPara(to) { setQ(''); setRes([]); nav(to); }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">⚖</div>
          <div>
            <div className="name">JurisOne</div>
            <div className="sub">Gestão Jurídica</div>
          </div>
        </div>
        <nav className="nav">
          {NAV.map(([to, ico, label, end]) => (
            <NavLink key={to} to={to} end={!!end}>
              <span className="ico">{ico}</span>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="foot">
          Ambiente seguro · acesso protegido<br />
          <a onClick={() => { clearToken(); nav('/login'); }} style={{ cursor: 'pointer', color: 'var(--muted)' }}>
            Sair
          </a>
        </div>
      </aside>
      <div className="main">
        <div className="topbar">
          <div className="search" style={{ position: 'relative' }}>
            🔍 <input placeholder="Buscar cliente, processo, CNJ, CPF…" value={q}
              onChange={(e) => buscar(e.target.value)} onFocus={garantirCache} />
            {res.length > 0 && (
              <div className="quick-menu" style={{ left: 0, right: 0, top: 46 }} onMouseLeave={() => setRes([])}>
                {res.map((r) => (
                  <a key={r.tipo + r.id} onClick={() => irPara(r.to)} style={{ cursor: 'pointer' }}>
                    <span style={{ marginRight: 8 }}>{r.tipo === 'cliente' ? '👤' : '⚖'}</span>
                    <b>{r.titulo}</b>
                    {r.sub && <div style={{ color: 'var(--muted-2)', fontSize: 12, marginLeft: 26 }}>{r.sub}</div>}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="spacer" />
          <div className="quick">
            <button className="btn" onClick={() => setQuick((v) => !v)}>+ Ação rápida ▾</button>
            {quick && (
              <div className="quick-menu" onMouseLeave={() => setQuick(false)}>
                {QUICK.map(([to, label]) => (
                  <a key={to} onClick={() => { setQuick(false); nav(to); }} style={{ cursor: 'pointer' }}>{label}</a>
                ))}
              </div>
            )}
          </div>
          <div className="avatar">K</div>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
