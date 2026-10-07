/* Aulas adicionais – lote constitucional-09. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('constitucional', [
    { id: 'co-partidos', titulo: 'Partidos políticos na Constituição', incidencia: 'media',
      aula: [
        'Em uma frase: criar partido é livre, mas todo partido tem de ser nacional, prestar contas, não receber dinheiro estrangeiro e não pode ter braço armado (art. 17).',
        'Conceito: partido político é uma associação de pessoas com ideias comuns que quer chegar ao poder pela via eleitoral. Ele é pessoa jurídica de direito privado, não é órgão do Estado (art. 17, §2º).',
        'Liberdade de criação: é livre criar, juntar (fusão), unir (incorporação) e extinguir partidos. O limite é respeitar a soberania nacional, o regime democrático, o pluripartidarismo (ou seja, a existência de vários partidos) e os direitos fundamentais (art. 17, caput).',
        'Preceitos obrigatórios: todo partido deve ter caráter nacional; não pode receber recursos de entidade ou governo estrangeiro; deve prestar contas à Justiça Eleitoral; e deve funcionar no Parlamento conforme a lei (art. 17, I a IV).',
        'Registro em dois passos: primeiro o partido ganha personalidade jurídica no cartório, como qualquer associação civil (na forma da lei civil). Depois registra o estatuto no Tribunal Superior Eleitoral, o TSE (art. 17, §2º). Só depois do registro no TSE ele disputa eleições e recebe recursos públicos.',
        'Autonomia: o partido decide sozinho sua estrutura interna, organização e funcionamento. Também define a duração dos mandatos dos seus órgãos (permanentes ou provisórios). O estatuto deve prever normas de disciplina e fidelidade partidária (art. 17, §1º).',
        'Coligações: desde a EC 97/17, coligação (aliança de partidos para uma eleição) só é permitida nas eleições majoritárias, isto é, para presidente, governador, prefeito e senador. Nas eleições proporcionais (deputados e vereadores) é proibida, regra aplicada desde 2020. E não há obrigação de repetir a mesma aliança nos níveis nacional, estadual e municipal: é o fim da "verticalização" (art. 17, §1º).',
        'Federação partidária: é diferente da coligação. Os partidos se unem e atuam como se fossem um só por no mínimo 4 anos, inclusive nas eleições proporcionais. Foi criada pela Lei 14.208/21 e o STF a considerou constitucional (ADI 7021).',
        'Cláusula de desempenho (ou de barreira): só recebe dinheiro do Fundo Partidário e tempo gratuito de rádio e TV o partido que alcança votação mínima para a Câmara dos Deputados. A regra final, a partir de 2030, é 3% dos votos válidos, em pelo menos 1/3 dos Estados, com mínimo de 2% em cada um; ou eleger pelo menos 15 deputados federais em 1/3 dos Estados. Até lá valem percentuais menores, crescentes (art. 17, §3º; EC 97/17, art. 3º).',
        'Saída de quem foi eleito por partido barrado: o deputado eleito por partido que não atingiu a cláusula pode mudar para outro partido sem perder o mandato. Essa troca não conta para a divisão de fundo e tempo de TV (art. 17, §5º).',
        'Fidelidade partidária: deputado federal, deputado estadual, deputado distrital e vereador que saem do partido pelo qual foram eleitos perdem o mandato. As exceções são a concordância do partido (anuência) ou justa causa prevista em lei (art. 17, §6º, EC 111/21). A Lei 9.096/95, art. 22-A, lista as justas causas, como a janela partidária de 30 dias antes do prazo de filiação.',
        'Cargos majoritários: a perda do mandato por troca de partido NÃO vale para prefeito, governador, senador e presidente. O STF entendeu que, nesses cargos, o voto é dado ao candidato e não ao partido; tirar o mandato violaria a soberania popular (ADI 5081).',
        'Proibição de força armada: o partido não pode usar organização paramilitar, isto é, grupo organizado como se fosse militar (art. 17, §4º).',
        'Participação das mulheres: o partido deve aplicar pelo menos 5% do Fundo Partidário em programas de incentivo à participação política feminina. E deve destinar no mínimo 30% do fundo eleitoral e do tempo de rádio e TV às candidaturas femininas (art. 17, §§7º e 8º, EC 117/22).',
        'Exemplo: João foi eleito vereador pelo Partido A e, sem justa causa, foi para o Partido B no meio do mandato. O Partido A pode pedir o mandato na Justiça Eleitoral e o suplente assume. Já Maria, eleita prefeita pelo Partido A, mudou de partido: ela continua prefeita.',
        'Cuidado (pegadinha): a FGV gosta de dizer que o partido adquire personalidade jurídica com o registro no TSE. Errado: a personalidade vem do registro civil; o TSE registra o estatuto. Outra: dizer que coligação em eleição de vereador é permitida. Desde 2020 não é.',
        'Como a FGV cobra: casos de troca de partido (proporcional x majoritário), coligação em eleição proporcional, dinheiro estrangeiro, natureza jurídica do partido e cláusula de desempenho.',
        'Resumo para revisar: partido é pessoa jurídica de direito privado, registro civil e depois TSE; caráter nacional, sem dinheiro estrangeiro e com prestação de contas; coligação só em eleição majoritária; infidelidade tira mandato só de deputado e vereador; partido barrado libera seus eleitos para trocar de legenda.'
      ],
      cai: [
        'Caso de vereador ou deputado que troca de partido sem justa causa (perde o mandato) versus prefeito ou senador que troca (não perde, ADI 5081).',
        'Afirmação de que é possível coligação para deputado ou vereador (falsa desde a EC 97/17).',
        'Natureza jurídica do partido: pessoa jurídica de direito privado, registrada no cartório e com estatuto no TSE.',
        'Vedação de recursos estrangeiros e proibição de organização paramilitar.',
        'Cláusula de desempenho como condição para Fundo Partidário e tempo de rádio e TV.'
      ],
      macetes: [
        'Fidelidade: "PROporcional PERDE; MAJoritário MANTÉM".',
        'Registro: "Cartório dá vida, TSE dá voto" (personalidade civil, estatuto no TSE).',
        'Preceitos do art. 17: "NA-CI-ON-AL sem dólar, com contas e no Parlamento" (caráter nacional, sem dinheiro estrangeiro, prestação de contas, funcionamento parlamentar).',
        'Coligação x federação: coligação vale só para a eleição majoritária; federação dura no mínimo 4 anos e vale também na proporcional.'
      ],
      video: 'partidos políticos art 17 constituição fidelidade partidária OAB' }
  ]);
})();
