// Feed Jurídico — NOTICIÁRIO REAL. Puxa apenas de fontes oficiais/confiáveis via RSS,
// sempre com link para a fonte (verificação: sem link oficial válido, o item não entra).
// NÃO inventa conteúdo. Se as fontes falharem, retorna lista vazia (o frontend avisa).

// Fontes oficiais e imprensa jurídica de referência. categoria = classificação padrão da fonte.
const FONTES = [
  { fonte: 'STF',      categoria: 'Decisão', urls: [
      'https://portal.stf.jus.br/RSS/', 'https://noticias.stf.jus.br/postsnoticias/feed/' ] },
  { fonte: 'STJ',      categoria: 'Decisão', urls: [
      'https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/rss.aspx',
      'https://www.stj.jus.br/publicacaoinstitucional/index.php/Rss' ] },
  { fonte: 'CNJ',      categoria: 'Notícia', urls: [ 'https://www.cnj.jus.br/feed/' ] },
  { fonte: 'Conjur',   categoria: 'Notícia', urls: [ 'https://www.conjur.com.br/rss.xml' ] },
  { fonte: 'Migalhas', categoria: 'Notícia', urls: [
      'https://www.migalhas.com.br/rss/quentes', 'https://www.migalhas.com.br/rss' ] },
  { fonte: 'Senado',   categoria: 'Nova Lei', urls: [
      'https://www12.senado.leg.br/noticias/rss/feed/materias' ] },
];
const DOMINIOS_OFICIAIS = ['stf.jus.br','stj.jus.br','cnj.jus.br','conjur.com.br','migalhas.com.br','senado.leg.br','camara.leg.br','planalto.gov.br','gov.br','jus.br'];

function stripTags(s = '') {
  return s.replace(/<!\[CDATA\[/g, '').replace(/\]\]>/g, '')
    .replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ').trim();
}

function linkOficial(link) {
  try {
    const u = new URL(link);
    if (u.protocol !== 'https:' && u.protocol !== 'http:') return null;
    const host = u.hostname.replace(/^www\./, '');
    return DOMINIOS_OFICIAIS.some((d) => host === d || host.endsWith('.' + d)) ? u.href : null;
  } catch { return null; }
}

// Refina a categoria pelo título (melhora a distribuição entre as abas)
function categorizar(titulo, padrao) {
  const t = (titulo || '').toLowerCase();
  if (/sancion|nova lei|projeto de lei|\bpl\b|promulg|publicada a lei|medida provis|decreto/.test(t)) return 'Nova Lei';
  if (/julg|decis|súmula|sumula|tese|repercuss|acórdão|acordao|mantém|mantem|condena|absolv|nega|concede|reconhece/.test(t)) return 'Decisão';
  if (/artigo|opini|parecer|análise|analise|coluna|entenda|por que|como /.test(t)) return 'Artigo';
  return padrao;
}

function parseRss(xml, fonte, categoriaPadrao) {
  const itens = [];
  const blocos = xml.split(/<item[\s>]/i).slice(1);
  for (const b of blocos.slice(0, 12)) {
    const g = (tag) => {
      const m = b.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'));
      return m ? m[1] : '';
    };
    const titulo = stripTags(g('title'));
    let link = stripTags(g('link')) || stripTags(g('guid'));
    link = linkOficial(link);
    if (!titulo || !link) continue; // sem título ou sem fonte oficial válida => descarta
    itens.push({
      fonte, categoria: categorizar(titulo, categoriaPadrao), titulo,
      resumo: stripTags(g('description')).slice(0, 260),
      link, data: (g('pubDate') || g('dc:date') || new Date().toISOString()).trim(),
    });
  }
  return itens;
}

async function buscarFonte(f) {
  for (const url of f.urls) {
    try {
      const ctrl = new AbortController();
      const to = setTimeout(() => ctrl.abort(), 8000);
      const res = await fetch(url, { signal: ctrl.signal, redirect: 'follow',
        headers: { 'User-Agent': 'Mozilla/5.0 JurisOne/1.0', 'Accept': 'application/rss+xml, application/xml, text/xml, */*' } });
      clearTimeout(to);
      if (!res.ok) continue;
      const itens = parseRss(await res.text(), f.fonte, f.categoria);
      if (itens.length) return itens; // primeira URL que funcionar
    } catch { /* tenta próxima url */ }
  }
  return [];
}

let cache = { at: 0, items: [] };

export async function getFeed() {
  if (cache.items.length && Date.now() - cache.at < 30 * 60 * 1000) return cache.items;
  const resultados = await Promise.all(FONTES.map(buscarFonte));
  let itens = resultados.flat();
  // dedup por título
  const vistos = new Set();
  itens = itens.filter((i) => { const k = i.titulo.toLowerCase(); if (vistos.has(k)) return false; vistos.add(k); return true; });
  // ordena por data desc (datas inválidas vão para o fim)
  itens.sort((a, b) => (new Date(b.data) || 0) - (new Date(a.data) || 0));
  itens = itens.slice(0, 48);
  if (itens.length) cache = { at: Date.now(), items: itens }; // só cacheia se veio conteúdo real
  return itens;
}
