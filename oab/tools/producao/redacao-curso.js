export const meta = {
  name: 'redacao-curso-oab',
  description: 'Escreve todas as aulas da grade do Aprova OAB, lote a lote (a revisão vem depois, em etapa própria)',
  phases: [{ title: 'Redigir', detail: 'escreve as aulas e 2 questões por aula' }],
}
const BASE = '/home/user/jurisone/oab'
const REGRAS_JURIDICAS = `
PRECISÃO JURÍDICA (o mais importante — um gabarito errado prejudica o aluno):
- Use a legislação, as súmulas e a jurisprudência vigentes em outubro de 2026. Pelo edital do 48º Exame, só é cobrada a legislação em vigor até 21/09/2026 (data de publicação do edital). Cite artigo, súmula ou tema nas explicações.
- Atenção às reformas que a FGV cobra: Lei 14.365/22 (alterou o Estatuto da Advocacia), Provimento 205/21 (publicidade), Lei 13.964/19 (Pacote Anticrime; inclusive as decisões do STF nas ADIs 6298/6299/6300/6305 sobre juiz das garantias e arquivamento do inquérito), Lei 13.467/17 (Reforma Trabalhista) e ADI 5766, EC 103/19, Lei 14.133/21, Lei 14.230/21 (e o Tema 1199 do STF), Lei 14.195/21, Lei 14.112/20, Lei 13.146/15.
- Reforma Tributária (EC 132/23, LC 214/25): só faça questão sobre ela se a resposta for certa e não depender de regra de transição; prefira os temas clássicos do CTN e da CF que continuam válidos.
- Ética, pontos que já derrubaram redatores: o STF declarou inconstitucionais os §§3º e 4º do art. 28 do Estatuto, incluídos pela Lei 14.365/22 (ADI 7227, 2023): policial e militar da ativa continuam totalmente incompatíveis, nem em causa própria. Tema 732 do STF: é inconstitucional suspender advogado por anuidade em atraso. Art. 20 do Estatuto (Lei 14.365/22): jornada do advogado empregado de até 8h diárias e 40h semanais. A ressalva "salvo motivo plenamente justificável" no aviltamento de honorários é do CED de 1995, não do CED de 2015 (art. 48, §6º).
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
const ESTILO = `
ESTILO DAS AULAS (pedido do dono do app: "bem detalhado, mas bem explicado; nada complicado; de um jeito que a pessoa entenda bem fácil"):
- Público: quem estuda para a OAB e pode nunca ter visto o tema. Explique como um bom professor explicaria a um amigo: DETALHADO no conteúdo, SIMPLES na forma.
- DETALHE: cubra o tópico inteiro (conceito, requisitos, regras, prazos, exceções, súmulas e entendimentos atuais, pegadinhas da FGV). Nada que cai na prova pode ficar de fora.
- SIMPLICIDADE:
  - Frases curtas (de preferência até 25 palavras), uma ideia por frase, voz ativa. Nada de juridiquês: troque "estado gravídico" por "gravidez", "ínsito" por "próprio", e assim por diante. Latim só com tradução.
  - Todo termo técnico é explicado com palavras simples na primeira vez que aparece (ex.: "lactante, ou seja, a advogada que está amamentando").
  - Primeiro a regra em palavras simples; o fundamento (artigo, súmula, tema) vem no fim, entre parênteses.
  - Use exemplos concretos do dia a dia, com personagens, e comparações que ajudem a guardar.
- ESTRUTURA: 10 a 14 parágrafos curtos, cada um começando com um título curto seguido de dois-pontos, nesta linha:
  'Em uma frase: ...' (a ideia central em linguagem do dia a dia);
  'Conceito: ...' ou 'Para que serve: ...';
  um parágrafo para cada regra, requisito, prazo ou exceção (um assunto por parágrafo);
  'Exemplo: ...' (pelo menos um, com personagem);
  'Cuidado (pegadinha): ...';
  'Como a FGV cobra: ...';
  'Resumo para revisar: ...' (3 a 5 pontos separados por ponto e vírgula).
- 'cai': 3 a 5 itens dizendo exatamente como a FGV cobra o tema. 'macetes': 3 a 5 macetes ou atalhos de memória úteis de verdade.
- A unidade já tem uma aula-panorama: não repita o panorama; aprofunde o tópico desta aula.`
const OK = { type: 'object', properties: { lote: { type: 'string' }, aulas: { type: 'number' }, questoes: { type: 'number' }, observacoes: { type: 'string' } }, required: ['lote', 'aulas', 'questoes', 'observacoes'] }
function redigir(lote) {
  return agent(`Você escreve o curso completo da 1ª fase do Exame de Ordem (FGV) no app "Aprova OAB" (${BASE}). Hoje é outubro de 2026.
Seu lote é '${lote}'. Abra ${BASE}/tools/producao/jobs.json e pegue o objeto com lote '${lote}': ele traz a matéria (id e nome), o prefixo das questões, a unidade, a lista de aulas [id, título] e o número base.
1. Leia ${BASE}/data/materias2.js (formato) e as aulas já existentes da matéria (procure add('<materia>' em ${BASE}/data/*.js), em especial a aula-panorama da unidade, para não repetir.
2. Escreva TODAS as aulas do lote, com exatamente os ids e títulos da lista, em ${BASE}/data/aulas-${lote}.js (formato add('<materia>', [...]) dentro de (function () { ... })()). Se o arquivo já existir com conteúdo de uma tentativa anterior, complete o que faltar em vez de recomeçar.
3. Escreva 2 questões inéditas por aula em ${BASE}/data/questoes-${lote}.js (window.QUESTOES.push(...)), topico = id da aula, ids = prefixo + (base+1), (base+2), ...
4. Rode node ${BASE}/tools/validar.js e corrija problemas nos SEUS dois arquivos (ignore os dos outros). Escreva só nos seus dois arquivos.
Não transcreva trechos longos de leis ou de livros: explique com suas palavras, citando o número do artigo.
${ESTILO}
${REGRAS_JURIDICAS}
${REGRAS_FORMATO}
Devolva o resumo pedido.`, { label: `redigir:${lote}`, phase: 'Redigir', schema: OK })
}
async function tentar(lote) {
  for (let t = 1; t <= 3; t++) { const r = await redigir(lote); if (r) return r; log(`${lote}: tentativa ${t} falhou`) }
  return { lote, falhou: true }
}
log(`${args.lotes.length} lotes`)
return await pipeline(args.lotes, tentar)
