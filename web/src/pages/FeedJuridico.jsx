import React, { useEffect, useState } from 'react';
import { api, fmtDate } from '../api.js';
import { PageHead, Empty } from '../ui.jsx';

const CORES = { 'Decisão': '#34d399', 'Notícia': '#8b9cff', 'Nova Lei': '#fbbf24', 'Artigo': '#f472b6' };
const CATS = ['Todas', 'Decisão', 'Notícia', 'Nova Lei', 'Artigo'];

function linkSeguro(url) {
  try { const u = new URL(url, window.location.origin); return (u.protocol === 'http:' || u.protocol === 'https:') ? u.href : null; }
  catch { return null; }
}

export default function FeedJuridico() {
  const [itens, setItens] = useState(null);
  const [cat, setCat] = useState('Todas');
  const [vis, setVis] = useState(6);
  const [salvos, setSalvos] = useState(() => JSON.parse(localStorage.getItem('feed_salvos') || '[]'));
  const [lidos, setLidos] = useState(() => JSON.parse(localStorage.getItem('feed_lidos') || '[]'));
  const [q, setQ] = useState('');
  const [soSalvos, setSoSalvos] = useState(false);

  const carregar = () => { setItens(null); api.get('/feed').then(setItens).catch(() => setItens([])); };
  useEffect(() => { carregar(); }, []);
  useEffect(() => { setVis(6); }, [cat, q, soSalvos]);

  function toggleSalvo(titulo) {
    const novo = salvos.includes(titulo) ? salvos.filter((s) => s !== titulo) : [...salvos, titulo];
    setSalvos(novo); localStorage.setItem('feed_salvos', JSON.stringify(novo));
  }
  function marcarLido(titulo) {
    if (lidos.includes(titulo)) return;
    const novo = [...lidos, titulo];
    setLidos(novo); localStorage.setItem('feed_lidos', JSON.stringify(novo));
  }

  const termo = q.trim().toLowerCase();
  const lista = (itens || []).filter((i) => (cat === 'Todas' || i.categoria === cat)
    && (!soSalvos || salvos.includes(i.titulo))
    && (!termo || (i.titulo + ' ' + (i.resumo || '') + ' ' + (i.fonte || '')).toLowerCase().includes(termo)));

  return (
    <div>
      <PageHead crumb="Atualizações" title="Feed Jurídico"
        desc="As últimas notícias, decisões, leis e artigos do Direito — em ordem cronológica, de fontes oficiais."
        action={<button className="btn ghost" onClick={carregar}>↻ Atualizar</button>} />
      <div style={{ color: 'var(--muted-2)', fontSize: 12, marginBottom: 14 }}>
        🛡️ Fontes: STF · STJ · CNJ · Senado · Conjur · Migalhas. Conteúdo informativo — confira sempre na fonte oficial.
      </div>
      <div className="tabs" style={{ marginTop: 0 }}>
        {CATS.map((c) => <button key={c} className={cat === c ? 'active' : ''} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <div className="panel" style={{ padding: 12, marginBottom: 16, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <input className="input" style={{ flex: 1, minWidth: 200 }} placeholder="🔍 Buscar no feed…" value={q} onChange={(e) => setQ(e.target.value)} />
        <button className={'btn ' + (soSalvos ? '' : 'ghost')} onClick={() => setSoSalvos((v) => !v)}>★ Só salvos {salvos.length ? `(${salvos.length})` : ''}</button>
      </div>

      {!itens ? <div className="empty">Buscando atualizações nas fontes oficiais…</div> : itens.length === 0 ? (
        <div className="panel"><Empty>Não foi possível carregar as atualizações agora. Toque em ↻ Atualizar para tentar de novo.</Empty></div>
      ) : lista.length === 0 ? (
        <div className="panel"><Empty>Nenhum item nesta categoria no momento.</Empty></div>
      ) : (
        <>
          <div className="feed-grid">
            {lista.slice(0, vis).map((i, idx) => {
              const href = linkSeguro(i.link);
              const cor = CORES[i.categoria] || '#8b9cff';
              const lido = lidos.includes(i.titulo);
              return (
                <article className="feed-card" key={idx} style={{ opacity: lido ? 0.6 : 1 }}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="feed-capa" style={{ background: `linear-gradient(135deg, ${cor}22, ${cor}08)` }}>
                    {i.imagem
                      ? <img src={i.imagem} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                      : <span className="feed-capa-ph" style={{ color: cor }}>{i.categoria}</span>}
                    <span className="feed-cat" style={{ background: cor }}>{i.categoria}</span>
                  </a>
                  <div className="feed-corpo">
                    <div className="feed-meta">{i.fonte} · {fmtDate(i.data)}</div>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="feed-titulo">{i.titulo}</a>
                    {i.resumo && <p className="feed-resumo">{i.resumo}</p>}
                    <div className="feed-rodape">
                      {href && <a href={href} target="_blank" rel="noopener noreferrer" className="feed-ler" onClick={() => marcarLido(i.titulo)}>Ler na fonte →</a>}
                      <button className="btn ghost sm" onClick={() => marcarLido(i.titulo)} title="Marcar como lido">{lido ? '✓ Lido' : 'Marcar lido'}</button>
                      <button className="btn ghost sm" onClick={() => toggleSalvo(i.titulo)}>
                        {salvos.includes(i.titulo) ? '★ Salvo' : '☆ Salvar'}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          {vis < lista.length && (
            <div style={{ textAlign: 'center', marginTop: 18 }}>
              <button className="btn ghost" style={{ width: 240, justifyContent: 'center' }}
                onClick={() => setVis((v) => v + 6)}>Carregar mais ({lista.length - vis} restantes)</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
