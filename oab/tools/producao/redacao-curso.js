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
ESTILO DAS AULAS (pedido do dono do app: "dez vezes mais conteúdo; como uma faculdade; como um professor explicando de forma simples; bem rica em conteúdo"):
- Cada aula é uma AULA DE FACULDADE COMPLETA sobre o tópico, escrita como um professor conversando com o aluno: "Imagine que...", "Repare que...", "Por que a lei faz isso? Porque...". Detalhada no conteúdo, simples na forma.
- TAMANHO: 30 a 45 parágrafos por aula (cada um com 2 a 5 frases). Uma aula curta é um erro. Cubra TUDO do tópico: conceito, origem e finalidade da regra, cada requisito separadamente, cada inciso/hipótese relevante explicado um por um, prazos, quóruns, exceções, súmulas e teses do STF/STJ/TST explicadas (o que decidiram e por quê), doutrina majoritária quando a FGV cobra, diferenças com institutos parecidos, pegadinhas, e vários exemplos.
- SIMPLICIDADE: frases curtas, voz ativa, nada de juridiquês; todo termo técnico é explicado na primeira vez que aparece; latim sempre traduzido; o fundamento (artigo, súmula, tema) vem no fim, entre parênteses.
- ESTRUTURA (cada parágrafo começa com um título curto seguido de dois-pontos):
  'Em uma frase: ...'; 'Por que isso existe: ...'; 'Conceito: ...';
  vários parágrafos de explicação, um assunto por parágrafo (ex.: 'Requisito 1 – ...', 'Inciso XI – casa: ...', 'Exceção: ...', 'O que o STF decidiu: ...');
  'Comparando: ...' (quadro em texto entre institutos parecidos);
  pelo menos 3 parágrafos 'Exemplo: ...' com personagens e situações do dia a dia, resolvidos passo a passo;
  'Cuidado (pegadinha): ...' (pelo menos 2);
  'Como a FGV cobra: ...' (como o tema aparece nas provas e como raciocinar);
  'Resumo para revisar: ...' (5 a 10 pontos separados por ponto e vírgula).
- 'cai': 5 a 8 itens. 'macetes': 4 a 6 macetes úteis de verdade.
- A unidade já tem uma aula-panorama: não repita; aprofunde.`
const OK = { type: 'object', properties: { lote: { type: 'string' }, aulas: { type: 'number' }, questoes: { type: 'number' }, observacoes: { type: 'string' } }, required: ['lote', 'aulas', 'questoes', 'observacoes'] }
function redigir(lote) {
  return agent(`Você escreve o curso completo da 1ª fase do Exame de Ordem (FGV) no app "Aprova OAB" (${BASE}). Hoje é outubro de 2026.
Seu lote é '${lote}'. Abra ${BASE}/tools/producao/jobs.json e pegue o objeto com lote '${lote}': ele traz a matéria (id e nome), o prefixo das questões, a unidade, a lista de aulas [id, título] e o número base.
1. Leia ${BASE}/data/materias2.js (formato) e as aulas já existentes da matéria (procure add('<materia>' em ${BASE}/data/*.js), em especial a aula-panorama da unidade, para não repetir.
2. Escreva TODAS as aulas do lote, com exatamente os ids e títulos da lista, em ${BASE}/data/aulas-${lote}.js (formato add('<materia>', [...]) dentro de (function () { ... })()). Se o arquivo já existir (versão antiga, curta), REESCREVA cada aula no novo tamanho e estilo abaixo, aproveitando o que estiver certo; idem para as questões (passe a 3 por aula, mantendo os ids existentes e acrescentando os novos em sequência).
3. Escreva 3 questões inéditas por aula em ${BASE}/data/questoes-${lote}.js (window.QUESTOES.push(...)), topico = id da aula, ids = prefixo + (base+1), (base+2), ...
4. Rode node ${BASE}/tools/validar.js e corrija problemas nos SEUS dois arquivos (ignore os dos outros). Escreva só nos seus dois arquivos.
Não transcreva trechos longos de leis ou de livros: explique com suas palavras, citando o número do artigo.
${ESTILO}
${REGRAS_JURIDICAS}
${REGRAS_FORMATO}
${args.extra || ""}
Devolva o resumo pedido.`, { label: `redigir:${lote}`, phase: 'Redigir', schema: OK })
}
async function tentar(lote) {
  for (let t = 1; t <= 3; t++) { const r = await redigir(lote); if (r) return r; log(`${lote}: tentativa ${t} falhou`) }
  return { lote, falhou: true }
}
log(`${args.lotes.length} lotes`)
return await pipeline(args.lotes, tentar)
