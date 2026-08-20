import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { api, clearToken } from './api.js';

const QUICK = [
  ['/clientes?novo=1', '👥 Novo cliente'],
  ['/processos?novo=1', '⚖ Novo processo'],
  ['/agenda?novo=1', '📅 Novo compromisso'],
  ['/tarefas?novo=1', '☑ Nova tarefa'],
  ['/financeiro?novo=1', '🏛 Novo lançamento'],
  ['/valores-terceiros?novo=1', '⊠ Novo precatório'],
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
  ['/relatorios', '📊', 'Relatórios'],
  ['/feed', '📰', 'Feed Jurídico'],
  ['/configuracoes', '⚙', 'Configurações'],
];

export default function Layout({ children }) {
  const nav = useNavigate();
  const [quick, setQuick] = useState(false);
  const [fab, setFab] = useState(false);
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || 'dark');
  const [q, setQ] = useState('');
  const [res, setRes] = useState([]);
  const cache = useRef(null);
  const [notifs, setNotifs] = useState([]);
  const [showNotif, setShowNotif] = useState(false);
  const [lidas, setLidas] = useState(() => new Set(JSON.parse(localStorage.getItem('notif_lidas') || '[]')));

  useEffect(() => {
    const carregar = () => api.get('/notificacoes').then(setNotifs).catch(() => {});
    carregar();
    const t = setInterval(carregar, 120000); // atualiza a cada 2 min
    return () => clearInterval(t);
  }, []);
  const naoLidas = notifs.filter((n) => !lidas.has(n.id));
  function marcarTodasLidas() {
    const nova = new Set([...lidas, ...notifs.map((n) => n.id)]);
    setLidas(nova);
    localStorage.setItem('notif_lidas', JSON.stringify([...nova]));
  }
  function abrirNotif(n) {
    const nova = new Set([...lidas, n.id]);
    setLidas(nova);
    localStorage.setItem('notif_lidas', JSON.stringify([...nova]));
    setShowNotif(false);
    nav(n.link);
  }

  function toggleTheme() {
    const novo = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = novo;
    localStorage.setItem('theme', novo);
    setTheme(novo);
  }

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
          <div className="notif-wrap">
            <button className="theme-btn" onClick={() => setShowNotif((v) => !v)} title="Notificações" style={{ position: 'relative' }}>
              🔔{naoLidas.length > 0 && <span className="notif-badge">{naoLidas.length > 9 ? '9+' : naoLidas.length}</span>}
            </button>
            {showNotif && (
              <div className="notif-menu" onMouseLeave={() => setShowNotif(false)}>
                <div className="notif-head">
                  <b>Notificações</b>
                  {naoLidas.length > 0 && <a onClick={marcarTodasLidas} style={{ cursor: 'pointer', fontSize: 12, color: 'var(--muted)' }}>Marcar todas como lidas</a>}
                </div>
                {notifs.length === 0 ? (
                  <div className="notif-empty">Nada pendente por aqui. ✓</div>
                ) : notifs.map((n) => (
                  <div key={n.id} className={'notif-item ' + n.urgencia + (lidas.has(n.id) ? ' lida' : '')} onClick={() => abrirNotif(n)}>
                    <span className={'notif-dot ' + n.urgencia} />
                    <span style={{ fontSize: 18 }}>{n.icone}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="notif-titulo">{n.titulo}</div>
                      {n.sub && <div className="notif-sub">{n.sub}</div>}
                    </div>
                    <span className={'notif-quando ' + n.urgencia}>{n.quando}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="theme-btn" onClick={toggleTheme} title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <div className="avatar">K</div>
        </div>
        <div className="content">{children}</div>
      </div>

      {/* Botão flutuante (FAB) com ações rápidas */}
      {fab && (
        <div className="fab-menu" onMouseLeave={() => setFab(false)}>
          {QUICK.map(([to, label]) => (
            <a key={to} onClick={() => { setFab(false); nav(to); }}>{label}</a>
          ))}
        </div>
      )}
      <button className={'fab' + (fab ? ' rot' : '')} onClick={() => setFab((v) => !v)} title="Ação rápida">+</button>
    </div>
  );
}
