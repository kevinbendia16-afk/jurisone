// Feed Jurídico — tenta buscar RSS de fontes públicas; se falhar (offline/bloqueio),
// cai para itens de exemplo. Roda na máquina do usuário, sem conta.

const FONTES = [
  { fonte: 'Conjur', url: 'https://www.conjur.com.br/rss.xml', categoria: 'Notícia' },
  { fonte: 'STF', url: 'https://portal.stf.jus.br/rss/noticias.asp', categoria: 'Decisão' },
];

const EXEMPLOS = [
  { categoria: 'Decisão', titulo: 'STF fixa tese sobre modulação de efeitos em matéria tributária',
    resumo: 'Plenário definiu critérios para aplicação temporal de decisões que alteram entendimento consolidado.',
    fonte: 'STF', data: new Date().toISOString(), link: 'https://portal.stf.jus.br' },
  { categoria: 'Decisão', titulo: 'STJ decide sobre prazo prescricional em ações de cobrança',
    resumo: 'Terceira Turma uniformiza contagem de prazo em contratos de prestação de serviços.',
    fonte: 'STJ', data: new Date(Date.now() - 864e5).toISOString(), link: 'https://www.stj.jus.br' },
  { categoria: 'Nova Lei', titulo: 'Publicada lei que altera regras de honorários sucumbenciais',
    resumo: 'Norma ajusta percentuais e critérios de arbitramento em execuções fiscais.',
    fonte: 'Planalto', data: new Date(Date.now() - 2 * 864e5).toISOString(), link: 'https://www.planalto.gov.br' },
  { categoria: 'Notícia', titulo: 'CNJ amplia integração do DataJud com tribunais estaduais',
    resumo: 'Movimentações processuais passam a ser atualizadas com maior frequência na base nacional.',
    fonte: 'CNJ', data: new Date(Date.now() - 3 * 864e5).toISOString(), link: 'https://www.cnj.jus.br' },
  { categoria: 'Artigo', titulo: 'Precatórios: o que muda na ordem de pagamento em 2026',
    resumo: 'Análise das alterações no regime de pagamento e impactos para o crédito do cliente.',
    fonte: 'Conjur', data: new Date(Date.now() - 4 * 864e5).toISOString(), link: 'https://www.conjur.com.br' },
  { categoria: 'Notícia', titulo: 'TJSP regulamenta uso de assinatura eletrônica em petições',
    resumo: 'Provimento detalha requisitos técnicos e hipóteses de dispensa de reconhecimento de firma.',
    fonte: 'TJSP', data: new Date(Date.now() - 5 * 864e5).toISOString(), link: 'https://www.tjsp.jus.br' },
];

function stripTags(s = '') {
  return s.replace(/<!\[CDATA\[/g, '').replace(/\]\]>/g, '')
    .replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();
}

function parseRss(xml, fonte, categoria) {
  const items = [];
  const blocks = xml.split(/<item[\s>]/i).slice(1);
  for (const b of blocks.slice(0, 8)) {
    const g = (tag) => {
      const m = b.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'));
      return m ? stripTags(m[1]) : '';
    };
    const titulo = g('title');
    if (!titulo) continue;
    items.push({
      categoria, fonte, titulo,
      resumo: g('description').slice(0, 220),
      link: g('link'), data: g('pubDate') || new Date().toISOString(),
    });
  }
  return items;
}

let cache = { at: 0, items: null };

export async function getFeed() {
  // cache de 15 min
  if (cache.items && Date.now() - cache.at < 15 * 60 * 1000) return cache.items;
  const coletado = [];
  await Promise.all(FONTES.map(async (f) => {
    try {
      const ctrl = new AbortController();
      const to = setTimeout(() => ctrl.abort(), 6000);
      const res = await fetch(f.url, { signal: ctrl.signal, headers: { 'User-Agent': 'JurisOne/0.1' } });
      clearTimeout(to);
      if (res.ok) coletado.push(...parseRss(await res.text(), f.fonte, f.categoria));
    } catch { /* offline/bloqueado: ignora */ }
  }));
  const items = coletado.length >= 3 ? coletado : [...coletado, ...EXEMPLOS];
  // ordena por data desc
  items.sort((a, b) => new Date(b.data) - new Date(a.data));
  cache = { at: Date.now(), items };
  return items;
}
