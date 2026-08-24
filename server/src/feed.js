// Feed Jurídico — NOTICIÁRIO REAL. Puxa apenas de fontes oficiais/confiáveis via RSS,
// sempre com link para a fonte (verificação: sem link oficial válido, o item não entra).
// NÃO inventa conteúdo. Se as fontes falharem, retorna lista vazia (o frontend avisa).

// Fontes reais e estáveis. Google News agrega os tribunais e a imprensa jurídica
// (com link para o veículo de origem); JOTA tem RSS próprio confiável. categoria = padrão da fonte,
// refinada depois por palavras-chave. google:true => extrai o veículo real do título ("... - Fonte").
const GN = (q) => `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=pt-BR&gl=BR&ceid=BR:pt-419`;
const FONTES = [
  { fonte: 'Tribunais',  categoria: 'Decisão', google: true, urls: [ GN('STF OR STJ OR CNJ OR TST decisão OR julgamento') ] },
  { fonte: 'Jurídico',   categoria: 'Notícia', google: true, urls: [ GN('direito OR jurídico OR advocacia OR OAB OR jurisprudência') ] },
  { fonte: 'Legislação', categoria: 'Nova Lei', google: true, urls: [ GN('"projeto de lei" OR "nova lei" OR "reforma tributária" OR Congresso lei') ] },
  { fonte: 'JOTA',       categoria: 'Notícia', urls: [ 'https://www.jota.info/feed' ] },
];
// Só entram links destes domínios (evita link injetado). Inclui o agregador Google News e a imprensa.
const DOMINIOS_OFICIAIS = ['news.google.com','jota.info','stf.jus.br','stj.jus.br','cnj.jus.br','tst.jus.br',
  'conjur.com.br','migalhas.com.br','senado.leg.br','camara.leg.br','planalto.gov.br','gov.br','jus.br'];

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

// Refina a categoria pelo título/resumo (melhora a distribuição entre as abas)
function categorizar(texto, padrao) {
  const t = (texto || '').toLowerCase();
  if (/sancion|nova lei|projeto de lei|\bpl\b|\bpec\b|emenda constitucional|emenda à|promulg|publicada a lei|medida provis|\bmp \b|decreto|regulamenta|aprova(?:da|do) (?:a )?lei/.test(t)) return 'Nova Lei';
  if (/julg|decis|decid|súmula|sumula|\btese\b|repercuss|acórdão|acordao|mant[eé]m|condena|absolv|nega provimento|concede|reconhece|determina|liminar|habeas|recurso/.test(t)) return 'Decisão';
  if (/artigo|opini|parecer|an[aá]lise|coluna|reflex|ensaio|\bpor que\b|entenda|o papel|os limites|não é|deve ser/.test(t)) return 'Artigo';
  return padrao;
}

// Extrai a URL de uma imagem de capa (media:content, enclosure, ou <img> no conteúdo)
function extrairImagem(bloco) {
  let m = bloco.match(/<media:(?:content|thumbnail)[^>]+url=["']([^"']+)["']/i);
  if (m) return m[1];
  m = bloco.match(/<enclosure[^>]+url=["']([^"']+\.(?:jpg|jpeg|png|webp)[^"']*)["'][^>]*type=["']image/i)
    || bloco.match(/<enclosure[^>]+type=["']image[^>]+url=["']([^"']+)["']/i);
  if (m) return m[1];
  m = bloco.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (m) return m[1];
  return null;
}

function parseRss(xml, fonte, categoriaPadrao, google) {
  const itens = [];
  const blocos = xml.split(/<item[\s>]/i).slice(1);
  for (const b of blocos.slice(0, 20)) {
    const g = (tag) => {
      const m = b.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'));
      return m ? m[1] : '';
    };
    let titulo = stripTags(g('title'));
    let fonteReal = fonte;
    if (google) {
      // Google News: título vem "Manchete - Veículo"; separa o veículo real.
      const i = titulo.lastIndexOf(' - ');
      if (i > 10 && titulo.length - i < 45) { fonteReal = titulo.slice(i + 3).trim(); titulo = titulo.slice(0, i).trim(); }
      else fonteReal = stripTags(g('source')) || fonte;
    }
    let link = stripTags(g('link')) || stripTags(g('guid'));
    link = linkOficial(link);
    if (!titulo || !link) continue; // sem título ou sem fonte válida => descarta
    const conteudo = g('content:encoded') || g('description');
    const resumo = stripTags(conteudo).slice(0, 300);
    let imagem = extrairImagem(b);
    if (imagem && imagem.startsWith('http:')) imagem = imagem.replace('http:', 'https:');
    itens.push({
      fonte: fonteReal, categoria: categorizar(titulo + ' ' + resumo, categoriaPadrao), titulo,
      resumo, imagem, link, data: (g('pubDate') || g('dc:date') || new Date().toISOString()).trim(),
    });
  }
  return itens;
}

async function buscarFonte(f) {
  for (const url of f.urls) {
    try {
      const ctrl = new AbortController();
      const to = setTimeout(() => ctrl.abort(), 9000);
      const res = await fetch(url, { signal: ctrl.signal, redirect: 'follow',
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
          'Accept': 'application/rss+xml, application/xml, text/xml, */*' } });
      clearTimeout(to);
      if (!res.ok) continue;
      const itens = parseRss(await res.text(), f.fonte, f.categoria, f.google);
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
