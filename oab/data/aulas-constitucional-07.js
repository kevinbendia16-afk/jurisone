/* Aulas adicionais – lote constitucional-07. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('constitucional', [
    { id: 'co-acp', titulo: 'Ação civil pública e direito de petição', incidencia: 'media',
      aula: [
        'Em uma frase: a ação civil pública é o processo judicial que protege interesses de muita gente ao mesmo tempo; o direito de petição é o direito de qualquer pessoa pedir algo ao Poder Público, sem advogado e sem pagar nada.',
        'Conceito da ação civil pública: é uma ação coletiva. Ela defende o meio ambiente, o consumidor, o patrimônio público e social, bens de valor histórico e cultural e outros interesses difusos e coletivos (art. 129, III, da CF; art. 1º da Lei 7.347/85).',
        'Interesses protegidos: difusos são os de pessoas indeterminadas, ligadas por uma situação de fato (ex.: o ar puro de uma cidade). Coletivos são os de um grupo ligado por uma relação jurídica (ex.: alunos de uma escola). Individuais homogêneos são direitos de cada um, mas com origem comum (ex.: compradores de um carro com defeito) (art. 81 do CDC).',
        'Quem pode propor (legitimidade): Ministério Público, Defensoria Pública, União, Estados, DF, Municípios, autarquias, empresas públicas, fundações, sociedades de economia mista e associações (art. 5º da Lei 7.347/85). O cidadão, sozinho, NÃO pode propor ação civil pública; para ele existe a ação popular.',
        'Requisitos da associação: estar constituída há pelo menos 1 ano e ter, entre suas finalidades, a proteção do interesse discutido. O juiz pode dispensar o prazo de 1 ano quando houver manifesto interesse social (art. 5º, V e §4º, da Lei 7.347/85).',
        'Legitimidade do MP não é exclusiva: a CF diz que a função do MP de propor ação civil pública não impede que outros também proponham (art. 129, §1º). Se o MP não for autor, ele atua obrigatoriamente como fiscal da lei (art. 5º, §1º, da Lei 7.347/85).',
        'Defensoria Pública: o STF reconheceu que a Defensoria pode propor ação civil pública (ADI 3943). Ela pode defender interesses difusos e coletivos, desde que a causa possa beneficiar pessoas necessitadas.',
        'Inquérito civil e TAC: o inquérito civil é uma investigação feita só pelo MP para reunir provas antes da ação (art. 129, III, da CF; art. 8º, §1º, da Lei 7.347/85). O termo de ajustamento de conduta (TAC) é um acordo em que o responsável se compromete a corrigir a conduta; os órgãos públicos legitimados podem firmá-lo (art. 5º, §6º).',
        'Matérias proibidas: não cabe ação civil pública para discutir tributos, contribuições previdenciárias e FGTS, quando os beneficiários podem ser identificados individualmente (art. 1º, parágrafo único, da Lei 7.347/85).',
        'Direito de petição: qualquer pessoa, física ou jurídica, brasileira ou estrangeira, pode pedir algo aos Poderes Públicos para defender direitos ou contra ilegalidade ou abuso de poder. Não precisa de advogado e é gratuito (art. 5º, XXXIV, "a", da CF).',
        'Direito de certidão: todos podem obter certidões em repartições públicas, de graça, para defender direitos e esclarecer situações de interesse pessoal (art. 5º, XXXIV, "b"). Se a certidão for negada, o remédio é o mandado de segurança, e não o habeas data, que serve para informações sobre a própria pessoa.',
        'Exemplo: a Associação Rio Limpo, criada há 3 anos para proteger o meio ambiente, processa uma fábrica que polui o rio. Isso é ação civil pública. Já Dona Marta, que quer apenas reclamar à prefeitura de um buraco na rua, usa o direito de petição, por escrito, sem advogado e sem taxa.',
        'Cuidado (pegadinha): direito de petição não é direito de ação. Petição é pedido administrativo, sem custas; ação judicial exige, em regra, advogado. Outra pegadinha: a FGV troca ação civil pública (cidadão não pode) com ação popular (só o cidadão pode).',
        'Como a FGV cobra: casos em que alguém quer proteger interesse coletivo e a questão pergunta qual ação cabe e quem pode propor; ou casos de certidão negada perguntando o remédio correto.',
        'Resumo para revisar: ação civil pública protege interesses difusos, coletivos e individuais homogêneos; cidadão não tem legitimidade, associação precisa de 1 ano de existência; MP não é o único legitimado e o inquérito civil é exclusivo dele; petição e certidão são gratuitas e independem de advogado; certidão negada se combate com mandado de segurança.'
      ],
      cai: [
        'Pergunta quem tem legitimidade para a ação civil pública, colocando o cidadão como alternativa errada.',
        'Cobra o requisito de 1 ano de constituição da associação e a possibilidade de o juiz dispensá-lo.',
        'Confunde direito de petição com direito de ação, dizendo que exige advogado ou taxa.',
        'Pergunta o remédio contra negativa de certidão (mandado de segurança, não habeas data).'
      ],
      macetes: [
        'Cidadão = ação POPULAR; instituições e associações = ação CIVIL PÚBLICA.',
        'Associação na ACP: "1 ano + finalidade", e o juiz pode dispensar o ano.',
        'Inquérito civil é só do MP; TAC é dos órgãos públicos.',
        'Petição e certidão: "PGS" = Pessoa qualquer, Grátis, Sem advogado.'
      ],
      video: 'ação civil pública direito de petição OAB constitucional' }
  ]);
})();
