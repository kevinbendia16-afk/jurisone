import React, { useEffect, useState } from 'react';
import { api, fmtDate } from '../api.js';
import { PageHead, Empty } from '../ui.jsx';

const CORES = { 'Decisão': 'green', 'Notícia': 'gray', 'Nova Lei': 'amber', 'Artigo': 'gray' };
const CATS = ['Todas', 'Decisão', 'Notícia', 'Nova Lei', 'Artigo'];

// Só aceita links http/https (evita javascript: e outros esquemas perigosos)
function linkSeguro(url) {
  try {
    const u = new URL(url, window.location.origin);
    return (u.protocol === 'http:' || u.protocol === 'https:') ? u.href : null;
  } catch { return null; }
}

export default function FeedJuridico() {
  const [itens, setItens] = useState(null);
  const [cat, setCat] = useState('Todas');
  const [salvos, setSalvos] = useState(() => JSON.parse(localStorage.getItem('feed_salvos') || '[]'));

  useEffect(() => { api.get('/feed').then(setItens).catch(() => setItens([])); }, []);

  function toggleSalvo(titulo) {
    const novo = salvos.includes(titulo) ? salvos.filter((s) => s !== titulo) : [...salvos, titulo];
    setSalvos(novo); localStorage.setItem('feed_salvos', JSON.stringify(novo));
  }

  const lista = (itens || []).filter((i) => cat === 'Todas' || i.categoria === cat);

  return (
    <div>
      <PageHead crumb="Atualizações" title="Feed Jurídico"
        desc="Decisões, notícias e novidades do mundo jurídico. Conteúdo informativo — não substitui a pesquisa oficial." />
      <div className="tabs" style={{ marginTop: 0 }}>
        {CATS.map((c) => <button key={c} className={cat === c ? 'active' : ''} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      {!itens ? <div className="empty">Carregando…</div> : lista.length === 0 ? (
        <div className="panel"><Empty>Nada por aqui ainda.</Empty></div>
      ) : (
        <div className="grid" style={{ gap: 14 }}>
          {lista.map((i, idx) => (
            <div className="card feed-item" key={idx}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 10 }}>
                <span className={'badge ' + (CORES[i.categoria] || 'gray')}>{i.categoria}</span>
                <span style={{ color: 'var(--muted)', fontSize: 13 }}>{i.fonte} · {fmtDate(i.data)}</span>
                <button className="btn ghost sm" style={{ marginLeft: 'auto' }} onClick={() => toggleSalvo(i.titulo)}>
                  {salvos.includes(i.titulo) ? '★ Salvo' : '☆ Salvar'}
                </button>
              </div>
              <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 6 }}>{i.titulo}</div>
              {i.resumo && <div style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{i.resumo}</div>}
              {linkSeguro(i.link) && <a href={linkSeguro(i.link)} target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--green)', fontSize: 13, display: 'inline-block', marginTop: 10 }}>Ler na fonte →</a>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
