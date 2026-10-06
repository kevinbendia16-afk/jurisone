export const meta = {
  name: 'questoes-oficiais-oab',
  description: 'Revisa questões oficiais da OAB: valida se continuam corretas em 2027, explica as alternativas e contesta as aprovadas',
  phases: [
    { title: 'Analisar', detail: 'decide se o gabarito oficial vale em 2027 e explica cada alternativa' },
    { title: 'Contestar', detail: 'revisor tenta provar que cada questão aprovada está desatualizada' },
  ],
}

const SP = '/tmp/claude-0/-home-user-jurisone/612c0b6f-a0dc-5d33-b37a-abe57fe72a8f/scratchpad/oficiais'

const CONTEXTO = `
CONTEXTO: o app "Aprova OAB" vai usar questões OFICIAIS de provas anteriores do Exame de Ordem (FGV) nos simulados de quem fará o 48º Exame (1ª fase em 10/01/2027). Só podem entrar questões cujo gabarito oficial CONTINUA correto pela lei, súmulas e jurisprudência vigentes em outubro de 2026 (e previstas para janeiro de 2027). Uma questão desatualizada com gabarito errado ensina o aluno a errar: na dúvida, ela fica de fora.

MUDANÇAS QUE MAIS DESATUALIZAM QUESTÕES ANTIGAS (verifique a data da prova de cada questão):
- CPC/2015 (vigente desde 18/03/2016) substituiu o CPC/1973; Lei 13.256/16.
- Novo Código de Ética e Disciplina da OAB (2015, vigente desde 2016); Lei 14.365/22 (alterou o Estatuto); Provimento 205/21 (publicidade, revogou o 94/2000).
- Reforma Trabalhista (Lei 13.467/17, vigente desde 11/11/2017), ADI 5766 e decisões posteriores do STF/TST; Lei 13.429/17 (terceirização).
- Pacote Anticrime (Lei 13.964/19) e as ADIs 6298/6299/6300/6305; Lei 14.155/21; Lei 14.994/24 (feminicídio como crime autônomo); Lei 13.718/18 e outras reformas penais; Lei 14.245/21.
- Lei 14.133/21 (licitações; a Lei 8.666/93 deixou de valer em 30/12/2023); Lei 14.230/21 (improbidade) e Tema 1199 do STF.
- EC 103/19 (Reforma da Previdência); Lei 13.846/19.
- Lei 13.146/15 (Estatuto da Pessoa com Deficiência: capacidade civil); Lei 14.195/21 (fim da EIRELI); Lei 14.112/20 (falência e recuperação); Lei 14.010/20.
- EC 132/23 e LC 214/25 (Reforma Tributária: não invalida o CTN, mas desatualiza questões sobre ICMS/ISS/IPI se a resposta depender de regra alterada); LC 157/16 (ISS).
- Lei 13.105/15 e Lei 13.140/15 (mediação); Lei 13.874/19 (Liberdade Econômica); Lei 14.181/21 (superendividamento no CDC).
- ECA: Lei 13.509/17 (adoção), Lei 13.431/17, Lei 14.344/22; Lei 12.594/12 (SINASE).
- Código Florestal (Lei 12.651/12); Lei 14.119/21; Lei 13.445/17 (Lei de Migração substituiu o Estatuto do Estrangeiro); EC 131/23 (nacionalidade).
- Eleitoral: EC 97/17 (fim das coligações proporcionais, cláusula de barreira), EC 111/21, Lei 14.208/21 (federações), LC 219/25 (se tiver certeza do conteúdo).
- Ética: Tema 732 do STF (RE 647.885, 2020): é inconstitucional suspender o advogado por anuidade em atraso (afasta a suspensão do art. 34, XXIII, c/c art. 37, §2º, do EAOAB); Lei 14.365/22: art. 28, §§3º e 4º (policial e militar da ativa podem advogar em causa própria com inscrição especial), art. 20 (jornada do advogado empregado de 8h diárias/40h semanais), art. 7º-B (crime de violação de prerrogativas), sociedade unipessoal e advogado associado (arts. 15 e 17-A/17-B).
- Penal: Lei 14.994/24 (feminicídio crime autônomo, art. 121-A; aumento de penas na violência contra a mulher); Lei 14.811/24 (crimes contra criança e adolescente, bullying); Lei 14.132/21 (perseguição, art. 147-A); Lei 14.188/21 (violência psicológica, art. 147-B).
- Civil: Lei 14.905/24 (juros e correção: IPCA e taxa legal, arts. 389 e 406 do CC); Lei 14.382/22 (registros públicos, mudança de nome); Lei 14.620/23.
- Trabalho: Lei 14.611/23 (igualdade salarial); Lei 14.442/22 (teletrabalho por produção ou tarefa).
- Mudanças de jurisprudência do STF/STJ/TST e súmulas canceladas.
Não trate projeto de lei como lei (ex.: reforma do Código Civil, PL 4/2025, NÃO está em vigor).`

const FORMATO = `
ARQUIVO DE SAÍDA: um array JSON com UM objeto por questão do lote, na mesma ordem:
[
  { "id": "47-8", "status": "valida",
    "explicacoes": [
      "Errada. ... (art. X da Lei Y)",
      "Correta. ... (art. ...)",
      "Errada. ...",
      "Errada. ..."
    ] },
  { "id": "12-3", "status": "desatualizada", "motivo": "A questão aplica o art. 475-J do CPC/1973; hoje o cumprimento de sentença segue o art. 523 do CPC/2015, e a multa e o prazo mudaram." },
  { "id": "09-5", "status": "duvidosa", "motivo": "..." }
]
- status "valida": o gabarito oficial continua sendo a ÚNICA resposta correta hoje. Escreva 4 explicações (uma por alternativa, na ordem A, B, C, D): a da alternativa do gabarito oficial começa com "Correta.", as outras com "Errada.". Cada explicação tem 1 a 3 frases curtas, diz o porquê com o fundamento ATUAL (artigo, súmula, tema) e, nas erradas, qual seria a regra certa. Português do Brasil com acentuação correta.
- status "desatualizada": a lei ou a jurisprudência mudou e o gabarito não vale mais (ou a questão perdeu o objeto). "motivo" diz o que mudou.
- status "duvidosa": você não tem certeza de que o gabarito continua correto, a questão depende de texto/anexo ausente, ou o enunciado ficou incompleto na digitação. "motivo" explica.
- Nunca troque o gabarito oficial: se outra alternativa passou a ser a correta, a questão é "desatualizada".`

function promptAnalisar(lote) {
  return `Você é professor de cursinho para a OAB, especialista em todas as matérias da 1ª fase e em atualização legislativa. Hoje é outubro de 2026.
${CONTEXTO}

TAREFA: leia o lote ${SP}/chunks/${lote}.json (questões oficiais com exame, número, tema, enunciado, alternativas e gabarito oficial). Para CADA questão, decida o status e, se for válida, escreva as explicações. Considere a data da prova (o número do exame indica a época: exames I–XIX ≈ 2010–2016, XX–XXX ≈ 2016–2019, 31º–39º ≈ 2020–2023, 40º–47º ≈ 2024–2026).

Grave o resultado em ${SP}/out/${lote}.json (use a ferramenta Write). Depois rode: python3 ${SP}/checar.py ${lote} — e corrija até aparecer OK.
${FORMATO}

Devolva o resumo pedido.`
}

function promptContestar(lote) {
  return `Você é um revisor cético e muito experiente em atualização legislativa para a OAB. Hoje é outubro de 2026. Seu trabalho é proteger o aluno de questões desatualizadas.
${CONTEXTO}

Arquivos: ${SP}/chunks/${lote}.json (questões oficiais e gabaritos) e ${SP}/out/${lote}.json (análise de outro professor).

Para CADA questão marcada "valida" em out/${lote}.json, tente PROVAR que ela está desatualizada: houve lei nova, revogação, mudança de numeração, súmula cancelada/editada ou virada de jurisprudência depois da data da prova que torna o gabarito oficial incorreto, faz outra alternativa ficar correta ou deixa a questão sem objeto? Confira também se as 4 explicações estão corretas e citam o fundamento atual (corrija as que estiverem erradas ou imprecisas).
- Se conseguir demonstrar a desatualização, mude para "desatualizada" com "motivo".
- Se ficar em dúvida razoável, mude para "duvidosa" com "motivo".
- Questões "duvidosa" do outro professor só podem virar "valida" se você tiver certeza absoluta (escreva então as 4 explicações).
- Não mexa no gabarito oficial.

Edite ${SP}/out/${lote}.json (Read e Edit, ou Write com o arquivo inteiro). Depois rode python3 ${SP}/checar.py ${lote} e corrija até aparecer OK.
${FORMATO}

Devolva o relatório pedido.`
}

const RESUMO = {
  type: 'object',
  properties: {
    lote: { type: 'string' },
    validas: { type: 'number' },
    desatualizadas: { type: 'number' },
    duvidosas: { type: 'number' },
    alteracoes: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, de: { type: 'string' }, para: { type: 'string' }, motivo: { type: 'string' } }, required: ['id', 'motivo'] } },
    checagem_ok: { type: 'boolean' },
    observacoes: { type: 'string' },
  },
  required: ['lote', 'validas', 'desatualizadas', 'duvidosas', 'checagem_ok'],
}

const lotes = args.lotes
log(`${lotes.length} lotes: ${lotes.join(', ')}`)
// args.soContestar: a análise já foi feita (out/<lote>.json existe); roda só a contestação
const res = await pipeline(
  lotes,
  lote => args.soContestar ? Promise.resolve({ lote, observacoes: 'análise anterior' }) : agent(promptAnalisar(lote), { label: `analisar:${lote}`, phase: 'Analisar', schema: RESUMO }),
  (r, lote) => agent(promptContestar(lote), { label: `contestar:${lote}`, phase: 'Contestar', schema: RESUMO, effort: 'high' })
    .then(c => ({ lote, analise: r, contestacao: c })),
)
return res
