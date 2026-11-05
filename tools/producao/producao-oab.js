export const meta = {
  name: 'producao-aulas-oab',
  description: 'Escreve um lote de aulas da grade do Aprova OAB (com 2 questões por aula) e revisa lei, didática e questões',
  phases: [
    { title: 'Redigir', detail: 'escreve as aulas do lote, tópico por tópico' },
    { title: 'Revisar', detail: 'revisão jurídica rigorosa e resolução das questões às cegas' },
  ],
}

const BASE = '/home/user/jurisone/oab'
const REGRAS_JURIDICAS = `
PRECISÃO JURÍDICA (o mais importante — um gabarito errado prejudica o aluno):
- Use a legislação, as súmulas e a jurisprudência vigentes em outubro de 2026. Pelo edital do 48º Exame, só é cobrada a legislação em vigor até 21/09/2026 (data de publicação do edital). Cite artigo, súmula ou tema nas explicações.
- Atenção às reformas que a FGV cobra: Lei 14.365/22 (alterou o Estatuto da Advocacia), Provimento 205/21 (publicidade), Lei 13.964/19 (Pacote Anticrime; inclusive as decisões do STF nas ADIs 6298/6299/6300/6305 sobre juiz das garantias e arquivamento do inquérito), Lei 13.467/17 (Reforma Trabalhista) e ADI 5766, EC 103/19, Lei 14.133/21, Lei 14.230/21 (e o Tema 1199 do STF), Lei 14.195/21, Lei 14.112/20, Lei 13.146/15.
- Reforma Tributária (EC 132/23, LC 214/25): só faça questão sobre ela se a resposta for certa e não depender de regra de transição; prefira os temas clássicos do CTN e da CF que continuam válidos.
- Nunca trate projeto de lei como lei (ex.: a reforma do Código Civil, PL 4/2025, NÃO está em vigor).
- Se você não tiver certeza absoluta de um ponto (número de artigo, prazo, quórum, entendimento atual), NÃO faça a questão sobre ele.`
const REGRAS_FORMATO = `
FORMATO DAS QUESTÕES (siga exatamente o padrão de ${BASE}/data/questoes.js):
- Questões inéditas, de autoria própria, no estilo da FGV: caso concreto curto com personagens fictícios e comando claro. Não copie questões reais nem material de cursinhos.
- Exatamente 4 alternativas, exatamente 1 correta. Varie a posição da correta (o app embaralha, mas mantenha variedade).
- No máximo 10% das questões no formato "EXCETO"/"assinale a incorreta"; nesse caso a explicação da alternativa certa começa com "Correta (é a exceção)." e as demais com "Errada como resposta:".
- A explicação de CADA alternativa começa com "Correta." ou "Errada." e explica o porquê com base legal. Nas erradas, diga qual seria a regra certa ou de onde vem a confusão (é aí que o aluno aprende).
- Strings em aspas simples ('...'). Não use apóstrofo dentro do texto (se precisar, use aspas duplas "assim").
- Português do Brasil com acentuação correta. Linguagem clara e didática.
- Não repita questões já existentes: leia as questões atuais da matéria antes de escrever e cubra outros pontos do edital.

Formato do arquivo de questões:
/* Questões – lote X. */
window.QUESTOES.push(
{ id: 'et101', materia: 'etica', topico: 'honorarios',
  enunciado: '...',
  alt: [
    ['texto da alternativa', false, 'Errada. ... (art. ...)'],
    ['texto da alternativa', true, 'Correta. ... (art. ...)'],
    ['...', false, 'Errada. ...'],
    ['...', false, 'Errada. ...']
  ] },
...
);

FORMATO DAS AULAS NOVAS (padrão de ${BASE}/data/materias2.js):
/* Aulas adicionais – lote X. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('etica', [
    { id: 'idnovo', titulo: '...', incidencia: 'alta', // ou 'media'
      aula: ['parágrafo 1', 'parágrafo 2', ...],      // 4 a 6 parágrafos didáticos, diretos, só o que cai na prova
      cai: ['como a FGV cobra 1', ...],               // 2 a 4 itens
      macetes: ['macete/mnemônico 1', ...],           // 2 a 4 itens
      video: 'termo de busca no YouTube sobre o tema OAB' }
  ]);
})();`
const RESUMO = {
  type: 'object',
  properties: {
    lote: { type: 'string' },
    arquivos: { type: 'array', items: { type: 'string' } },
    aulas_novas: { type: 'array', items: { type: 'object', properties: { materia: { type: 'string' }, id: { type: 'string' }, titulo: { type: 'string' } }, required: ['materia', 'id', 'titulo'] } },
    questoes_escritas: { type: 'number' },
    observacoes: { type: 'string' },
  },
  required: ['lote', 'arquivos', 'questoes_escritas', 'observacoes'],
}
const RELATORIO = {
  type: 'object',
  properties: {
    lote: { type: 'string' },
    itens_revisados: { type: 'number' },
    questoes_finais: { type: 'number' },
    corrigidas: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, problema: { type: 'string' }, correcao: { type: 'string' } }, required: ['id', 'problema', 'correcao'] } },
    removidas: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, motivo: { type: 'string' } }, required: ['id', 'motivo'] } },
    adicionadas: { type: 'array', items: { type: 'string' } },
    validador_ok: { type: 'boolean' },
    observacoes: { type: 'string' },
  },
  required: ['lote', 'itens_revisados', 'corrigidas', 'removidas', 'validador_ok', 'observacoes'],
}

// args: { materia, nome, prefixo, lote, unidade, aulas: [[id, titulo], ...], base }
const L = args
const arqA = `${BASE}/data/aulas-${L.lote}.js`
const arqQ = `${BASE}/data/questoes-${L.lote}.js`
const lista = L.aulas.map(([id, t]) => `- '${id}': ${t}`).join('\n')

const ESTILO = `
ESTILO DAS AULAS (pedido do dono do app: "tudo destrinchado, explicado de um jeito que não se esquece, bem explicado em poucas palavras"):
- É uma aula de curso completo sobre UM tópico específico da grade: cubra o tópico por inteiro (conceito, requisitos, regras, prazos, exceções, súmulas e entendimentos atuais, pegadinhas da FGV), sem enrolação.
- 8 a 12 parágrafos curtos, cada um com uma ideia clara e começando com um título curto seguido de dois-pontos ('Conceito: ...', 'Requisitos (art. X): ...', 'Exceção: ...', 'Exemplo: ...', 'Como a FGV cobra: ...'). Use exemplos concretos com personagens quando ajudarem a fixar.
- 'cai': 3 a 5 itens dizendo exatamente como a FGV cobra o tema. 'macetes': 3 a 5 mnemônicos ou atalhos de memória úteis de verdade.
- A unidade já tem uma aula-panorama: não repita o panorama; aprofunde o tópico desta aula.`

const red = await agent(`Você escreve o curso completo da 1ª fase do Exame de Ordem (FGV) no app "Aprova OAB" (${BASE}). Hoje é outubro de 2026.
Matéria: ${L.nome} (id '${L.materia}'). Unidade: ${L.unidade}.

Escreva as aulas deste lote, usando EXATAMENTE estes ids e títulos (são da grade oficial do curso, em ${BASE}/data/ementa*.js):
${lista}

1. Leia antes, para o formato e para não repetir: ${BASE}/data/materias2.js (formato das aulas, função add) e as aulas já existentes desta matéria (procure add('${L.materia}' nos ${BASE}/data/*.js carregados pelo ${BASE}/index.html), especialmente a aula-panorama da unidade.
2. Escreva as aulas em ${arqA}, no formato add('${L.materia}', [...]) dentro de (function () { ... })(), com as aulas exatamente com os ids acima.
3. Escreva 2 questões inéditas por aula em ${arqQ} (window.QUESTOES.push(...)), com materia '${L.materia}' e topico igual ao id da aula. IDs das questões: '${L.prefixo}${L.base + 1}', '${L.prefixo}${L.base + 2}', ... (em sequência).
4. Rode node ${BASE}/tools/validar.js e corrija até não haver problemas nos SEUS dois arquivos (outros redatores escrevem outros arquivos ao mesmo tempo: ignore os problemas deles e não os edite).
Escreva somente nos seus dois arquivos.
${ESTILO}
${REGRAS_JURIDICAS}
${REGRAS_FORMATO}

Devolva o resumo pedido.`, { label: `redigir:${L.lote}`, phase: 'Redigir', schema: RESUMO })

const rev = await agent(`Você é professor de cursinho para a OAB, especialista em ${L.nome}, e revisor de provas da FGV. Revise com rigor máximo o lote ${L.lote} (unidade "${L.unidade}") ANTES de ele chegar aos alunos. Hoje é outubro de 2026. Parta do princípio de que há erros.
Arquivos: ${arqA} (aulas) e ${arqQ} (questões). Resumo do redator: ${JSON.stringify(red || {})}

1. AULAS: cada afirmação está correta e atualizada (lei, número do artigo, prazo, quórum, súmula, tema)? Falta algum ponto importante do tópico que a FGV cobra? Está claro, didático e "explicado em poucas palavras"? Corrija, complete e melhore diretamente no arquivo.
2. QUESTÕES: resolva cada uma às cegas (sem olhar o booleano nem as explicações) e só depois compare. Se o gabarito estiver errado, se duas alternativas forem defensáveis, se houver pista involuntária (a correta sempre a mais longa) ou explicação errada, reescreva — ou apague se não houver conserto seguro e escreva outra no lugar (mesmo tópico, próximo ID livre do prefixo '${L.prefixo}').
3. Cada aula precisa terminar com pelo menos 2 questões.
${REGRAS_JURIDICAS}
${REGRAS_FORMATO}

Edite somente esses dois arquivos. Ao final rode node ${BASE}/tools/validar.js, corrija problemas nos seus arquivos (ignore os de outros) e devolva o relatório.`, { label: `revisar:${L.lote}`, phase: 'Revisar', schema: RELATORIO, effort: 'high' })

return { lote: L.lote, materia: L.materia, aulas: L.aulas.map(a => a[0]), red, rev }
