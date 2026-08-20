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
  const [vis, setVis] = useState(8); // carrega aos poucos p/ não pesar
  const [salvos, setSalvos] = useState(() => JSON.parse(localStorage.getItem('feed_salvos') || '[]'));

  const carregar = () => { setItens(null); api.get('/feed').then(setItens).catch(() => setItens([])); };
  useEffect(() => { carregar(); }, []);
  useEffect(() => { setVis(8); }, [cat]); // ao trocar categoria, recomeça

  function toggleSalvo(titulo) {
    const novo = salvos.includes(titulo) ? salvos.filter((s) => s !== titulo) : [...salvos, titulo];
    setSalvos(novo); localStorage.setItem('feed_salvos', JSON.stringify(novo));
  }

  const lista = (itens || []).filter((i) => cat === 'Todas' || i.categoria === cat);

  return (
    <div>
      <PageHead crumb="Atualizações" title="Feed Jurídico"
        desc="Notícias e decisões direto de fontes oficiais — cada item com link para a origem."
        action={<button className="btn ghost" onClick={carregar}>↻ Atualizar</button>} />
      <div style={{ color: 'var(--muted-2)', fontSize: 12, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
        🛡️ Fontes: STF · STJ · CNJ · Senado · Conjur · Migalhas. Conteúdo informativo — confira sempre na fonte oficial.
      </div>
      <div className="tabs" style={{ marginTop: 0 }}>
        {CATS.map((c) => <button key={c} className={cat === c ? 'active' : ''} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      {!itens ? <div className="empty">Buscando atualizações nas fontes oficiais…</div> : itens.length === 0 ? (
        <div className="panel"><Empty>Não foi possível carregar as atualizações agora. Toque em ↻ Atualizar para tentar de novo.</Empty></div>
      ) : lista.length === 0 ? (
        <div className="panel"><Empty>Nenhum item nesta categoria no momento.</Empty></div>
      ) : (
        <div className="grid" style={{ gap: 14 }}>
          {lista.slice(0, vis).map((i, idx) => (
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
          {vis < lista.length && (
            <button className="btn ghost" style={{ margin: '4px auto', width: 220, justifyContent: 'center' }}
              onClick={() => setVis((v) => v + 8)}>Carregar mais ({lista.length - vis} restantes)</button>
          )}
        </div>
      )}
    </div>
  );
}
