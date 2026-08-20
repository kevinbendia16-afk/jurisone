// Cálculo de prazos processuais (CPC brasileiro) — AUXILIAR, não substitui conferência oficial.
// Regras: só dias úteis (art. 219), exclui o dia de início e conta a partir do 1º dia útil
// seguinte, inclui o vencimento (art. 224), pula fins de semana, feriados nacionais e o
// recesso forense de 20/12 a 20/01 (art. 220).

// Feriados nacionais fixos (MM-DD). Feriados móveis (Páscoa/Carnaval/Corpus Christi) e
// feriados forenses/estaduais/municipais NÃO estão aqui — ampliar na versão de produção.
const FERIADOS_FIXOS = new Set([
  '01-01', // Confraternização
  '04-21', // Tiradentes
  '05-01', // Dia do Trabalho
  '09-07', // Independência
  '10-12', // N. Sra. Aparecida
  '11-02', // Finados
  '11-15', // Proclamação da República
  '12-25', // Natal
]);

function pad(n) { return String(n).padStart(2, '0'); }

// Recesso forense: 20/12 a 20/01 (inclusive) — suspende a contagem.
function noRecesso(d) {
  const m = d.getMonth() + 1;
  const dia = d.getDate();
  return (m === 12 && dia >= 20) || (m === 1 && dia <= 20);
}

function ehDiaUtil(d) {
  const dow = d.getDay(); // 0 dom, 6 sáb
  if (dow === 0 || dow === 6) return false;
  const mmdd = `${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  if (FERIADOS_FIXOS.has(mmdd)) return false;
  if (noRecesso(d)) return false;
  return true;
}

function proximoDiaUtil(d) {
  const r = new Date(d);
  while (!ehDiaUtil(r)) r.setDate(r.getDate() + 1);
  return r;
}

/**
 * @param {string|Date} dataIntimacao  data da intimação/publicação
 * @param {number} dias                quantidade de dias do prazo
 * @param {'uteis'|'corridos'} tipo    forma de contagem
 * @returns {{ dataInicio: Date, dataFatal: Date }}
 */
export function calcularPrazo(dataIntimacao, dias, tipo = 'uteis') {
  const base = new Date(dataIntimacao);
  base.setHours(12, 0, 0, 0); // meio-dia evita problemas de fuso/DST
  // Começa a correr no 1º dia útil seguinte à intimação (exclui o dia do começo).
  let cursor = new Date(base);
  cursor.setDate(cursor.getDate() + 1);
  cursor = proximoDiaUtil(cursor);
  const dataInicio = new Date(cursor);

  let restantes = Number(dias);
  if (tipo === 'corridos') {
    cursor.setDate(cursor.getDate() + (restantes - 1));
    return { dataInicio, dataFatal: cursor };
  }
  // Dias úteis: o dataInicio conta como o 1º dia.
  let contados = 1;
  while (contados < restantes) {
    cursor.setDate(cursor.getDate() + 1);
    if (ehDiaUtil(cursor)) contados++;
  }
  return { dataInicio, dataFatal: cursor };
}
