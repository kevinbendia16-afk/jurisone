import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { clearToken } from './api.js';

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
];

export default function Layout({ children }) {
  const nav = useNavigate();
  const [quick, setQuick] = useState(false);
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
          Ambiente local · dados no seu PC<br />
          <a onClick={() => { clearToken(); nav('/login'); }} style={{ cursor: 'pointer', color: 'var(--muted)' }}>
            Sair
          </a>
        </div>
      </aside>
      <div className="main">
        <div className="topbar">
          <div className="search">
            🔍 <input placeholder="Buscar clientes, processos, tarefas…" />
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
