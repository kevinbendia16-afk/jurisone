// Integração com a API Pública do DataJud (CNJ) — consulta andamentos de processos.
// Base nacional, gratuita. Requer a API key pública do CNJ (fixa, documentada publicamente).
// Doc: https://datajud-wiki.cnj.jus.br/api-publica/

const BASE = 'https://api-publica.datajud.cnj.jus.br';
// Chave pública do DataJud (CNJ). Pode ser sobrescrita via env DATAJUD_APIKEY.
const APIKEY = process.env.DATAJUD_APIKEY ||
  'cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==';

// Mapa TR (código do tribunal na numeração CNJ) -> UF, para Justiça Estadual (J=8) e Eleitoral (J=6).
const UF = {
  '01': 'ac', '02': 'al', '03': 'ap', '04': 'am', '05': 'ba', '06': 'ce', '07': 'df',
  '08': 'es', '09': 'go', '10': 'ma', '11': 'mt', '12': 'ms', '13': 'mg', '14': 'pa',
  '15': 'pb', '16': 'pr', '17': 'pe', '18': 'pi', '19': 'rj', '20': 'rn', '21': 'rs',
  '22': 'ro', '23': 'rr', '24': 'sc', '25': 'se', '26': 'sp', '27': 'to',
};

// Descobre o "alias" do tribunal no DataJud a partir do número CNJ.
// CNJ: NNNNNNN-DD.AAAA.J.TR.OOOO  ->  digits: 20 dígitos.
export function aliasFromCnj(numero) {
  const d = (numero || '').replace(/\D/g, '');
  if (d.length !== 20) return null;
  const J = d[13];               // 14º dígito = segmento do judiciário
  const TR = d.slice(14, 16);    // TR = tribunal
  switch (J) {
    case '8': return UF[TR] ? `api_publica_tj${UF[TR]}` : null;      // Justiça Estadual
    case '4': return `api_publica_trf${Number(TR)}`;                  // Justiça Federal
    case '5': return `api_publica_trt${Number(TR)}`;                  // Justiça do Trabalho
    case '6': return UF[TR] ? `api_publica_tre${UF[TR]}` : null;      // Justiça Eleitoral
    case '3': return 'api_publica_stj';                               // STJ
    default: return null;
  }
}

// Consulta o processo e devolve dados + movimentos normalizados.
export async function consultarProcesso(numeroCnj) {
  const alias = aliasFromCnj(numeroCnj);
  if (!alias) throw new Error('Número CNJ inválido ou tribunal não suportado.');
  const digits = numeroCnj.replace(/\D/g, '');

  const ctrl = new AbortController();
  const to = setTimeout(() => ctrl.abort(), 15000);
  let res;
  try {
    res = await fetch(`${BASE}/${alias}/_search`, {
      method: 'POST',
      signal: ctrl.signal,
      headers: { 'Content-Type': 'application/json', Authorization: `APIKey ${APIKEY}` },
      body: JSON.stringify({ query: { match: { numeroProcesso: digits } }, size: 1 }),
    });
  } finally { clearTimeout(to); }

  if (!res.ok) throw new Error(`DataJud respondeu ${res.status}`);
  const json = await res.json();
  const hit = json?.hits?.hits?.[0]?._source;
  if (!hit) return { encontrado: false, movimentos: [] };

  const movimentos = (hit.movimentos || [])
    .map((m) => ({
      data: m.dataHora ? new Date(m.dataHora) : null,
      descricao: m.nome || (m.complementosTabelados?.[0]?.nome) || 'Movimento',
      codigo: m.codigo != null ? String(m.codigo) : null,
    }))
    .filter((m) => m.data)
    .sort((a, b) => a.data - b.data);

  return {
    encontrado: true,
    classe: hit.classe?.nome || null,
    orgaoJulgador: hit.orgaoJulgador?.nome || null,
    dataAjuizamento: hit.dataAjuizamento || null,
    movimentos,
  };
}
