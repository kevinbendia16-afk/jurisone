/* Aulas adicionais – lote constitucional-13. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('constitucional', [
    { id: 'executivo', titulo: 'Poder Executivo: Presidente, Vice e Ministros', incidencia: 'alta',
      aula: [
        'Em uma frase: no Brasil, o Presidente da República manda sozinho no Executivo, com a ajuda dos Ministros, que ele escolhe e demite quando quiser (art. 76).',
        'Conceito: o Brasil adota o presidencialismo. Nele, o Presidente acumula duas funções: chefe de Estado (representa o país lá fora) e chefe de Governo (administra o país aqui dentro). Por isso se diz que o Executivo é monocrático, ou seja, exercido por uma pessoa só (art. 76).',
        'Requisitos para ser candidato: ser brasileiro nato, ter no mínimo 35 anos, estar em dia com os direitos políticos, ter domicílio eleitoral no país e filiação partidária (arts. 12, §3º, I, e 14, §3º). Os 35 anos são conferidos na data da posse.',
        'Eleição: é direta, em dois turnos. O primeiro turno é no primeiro domingo de outubro e o segundo, no último domingo de outubro. Vence no primeiro turno quem tiver a maioria absoluta dos votos válidos; votos brancos e nulos não contam (art. 77, §§1º a 3º).',
        'Segundo turno: disputam os dois mais votados. Se um deles morrer, desistir ou ficar impedido antes do segundo turno, entra o próximo mais votado. Havendo empate no segundo lugar, fica o mais idoso (art. 77, §§4º e 5º).',
        'Posse e mandato: o mandato é de 4 anos, com uma reeleição seguida permitida (arts. 82 e 14, §5º). A EC 111/21 mudou a data da posse para 5 de janeiro, regra que vale a partir dos eleitos em 2026. Se o eleito não assumir em 10 dias da data marcada, sem motivo de força maior, o cargo é declarado vago (art. 78, parágrafo único).',
        'Vice-Presidente: é eleito junto, na mesma chapa. Ele substitui o Presidente nos impedimentos temporários (férias, doença) e o sucede na vaga definitiva (morte, renúncia, cassação). Além disso, cumpre missões especiais e funções dadas por lei complementar (art. 79).',
        'Linha de substituição: se faltarem Presidente e Vice, assumem, nesta ordem, o Presidente da Câmara, o do Senado e o do STF (art. 80). Eles só ocupam o cargo de forma temporária, não viram Presidentes definitivos.',
        'Dupla vacância: se os dois cargos ficarem vagos de vez, há nova eleição. Nos dois primeiros anos do mandato, a eleição é direta, pelo povo, em 90 dias. Nos dois últimos anos, é indireta, feita pelo Congresso, em 30 dias. Em ambos os casos, o eleito só completa o mandato restante, o chamado mandato-tampão (art. 81).',
        'Saída do país: o Presidente e o Vice precisam de licença do Congresso para sair do Brasil por mais de 15 dias, sob pena de perder o cargo (arts. 83 e 49, III).',
        'Atribuições privativas: estão no art. 84 (sancionar e vetar leis, nomear Ministros, celebrar tratados, decretar estado de defesa e de sítio, comandar as Forças Armadas, editar medidas provisórias etc.). Algumas podem ser delegadas a Ministros, ao Procurador-Geral da República e ao Advogado-Geral da União: o decreto autônomo (organizar a administração sem aumentar despesa e extinguir cargo vago), conceder indulto e prover cargos públicos (art. 84, parágrafo único, com incisos VI, XII e XXV).',
        'Ministros de Estado: basta ser brasileiro (nato ou naturalizado), maior de 21 anos e no gozo dos direitos políticos. A exceção é o Ministro da Defesa, que precisa ser nato (arts. 87 e 12, §3º, VII). O Ministro assina junto os atos do Presidente na sua área, a chamada referenda (art. 87, parágrafo único, I).',
        'Órgãos de consulta: o Conselho da República e o Conselho de Defesa Nacional só dão opinião; o Presidente não é obrigado a seguir (arts. 89 a 91). Ambos são ouvidos antes de estado de defesa e de sítio.',
        'Exemplo: Ana, eleita Presidente, e Bruno, seu Vice, morrem num acidente no terceiro ano do mandato. O Presidente da Câmara assume temporariamente. O Congresso faz eleição indireta em 30 dias, e o eleito governa só até o fim do mandato de Ana.',
        'Cuidado (pegadinha): a FGV troca 90 por 30 dias e direta por indireta. Lembre: começo do mandato = povo vota (90 dias); fim do mandato = Congresso vota (30 dias). Outra pegadinha: Ministro pode ser naturalizado, salvo o da Defesa.',
        'Como a FGV cobra: casos de dupla vacância, ordem de substituição, requisitos de Ministro e quais atribuições do art. 84 podem ser delegadas.',
        'Resumo para revisar: Presidente nato, 35 anos, maioria absoluta dos votos válidos; linha: Vice, Câmara, Senado, STF; dupla vacância: 90 dias direta ou, nos 2 últimos anos, 30 dias indireta; delegáveis: decreto autônomo, indulto e prover cargos; Ministro: 21 anos, nato só na Defesa.'
      ],
      cai: ['Dupla vacância: prazos de 90 e 30 dias e eleição direta ou indireta (art. 81)', 'Ordem de substituição do art. 80', 'Atribuições delegáveis do art. 84, parágrafo único', 'Requisitos de Ministro de Estado (art. 87) e Ministro da Defesa nato'],
      macetes: ['Linha sucessória: "Vi-Câ-Se-S" = Vice, Câmara, Senado, STF.', 'Dupla vacância: 2 primeiros anos = 90 dias, povo; 2 últimos = 30 dias, Congresso.', 'Delegação do art. 84: "DIP" = Decreto autônomo, Indulto, Prover cargos.', 'Ministro: 21 anos; Presidente: 35 anos.'],
      video: 'OAB constitucional Poder Executivo presidente vice dupla vacância art 81 art 84' },

    { id: 'co-crime-resp', titulo: 'Crimes de responsabilidade e impeachment', incidencia: 'alta',
      aula: [
        'Em uma frase: crime de responsabilidade é uma infração política do Presidente; a Câmara autoriza, o Senado julga e a punição é perder o cargo e ficar 8 anos fora da função pública.',
        'Conceito: apesar do nome, crime de responsabilidade não é crime comum. É uma infração político-administrativa, ou seja, um ato grave contra a Constituição que leva ao impeachment (afastamento definitivo do cargo).',
        'Quais atos: os que atentam contra a Constituição e, em especial, contra a existência da União, o livre funcionamento dos Poderes, os direitos políticos e sociais, a segurança interna, a probidade na administração, a lei orçamentária e o cumprimento das leis e decisões judiciais (art. 85, I a VII).',
        'Quem define: uma lei especial define os crimes e o processo (art. 85, parágrafo único). Hoje é a Lei 1.079/50. Só a União pode legislar sobre isso; estados e municípios não podem criar crimes de responsabilidade nem regras de processo (Súmula Vinculante 46).',
        'Primeira fase, na Câmara: qualquer cidadão pode apresentar a denúncia. A Câmara decide se autoriza o processo, por 2/3 dos seus membros (arts. 51, I, e 86). A Câmara não julga; ela funciona como um filtro.',
        'Segunda fase, no Senado: o Senado processa e julga (art. 52, I). Segundo o STF, o Senado não é obrigado a abrir o processo só porque a Câmara autorizou; ele faz um juízo próprio de instauração, por maioria simples (ADPF 378).',
        'Afastamento: o Presidente fica suspenso das funções quando o Senado instaura o processo. Se o julgamento não terminar em 180 dias, ele volta ao cargo, e o processo continua (art. 86, §§1º, II, e 2º).',
        'Julgamento: a sessão é presidida pelo Presidente do STF. A condenação exige 2/3 dos votos do Senado (art. 52, parágrafo único).',
        'Penas: perda do cargo e inabilitação por 8 anos para exercer função pública, sem prejuízo de outras sanções judiciais (art. 52, parágrafo único). No caso Dilma (2016), o Senado votou as duas penas em separado; esse fatiamento é polêmico e foi questionado, mas o texto da CF fala nas duas penas juntas.',
        'Crime comum é diferente: se o Presidente comete crime comum ligado ao mandato, a Câmara também autoriza por 2/3, mas quem julga é o STF. Ele fica suspenso se o STF receber a denúncia ou queixa (arts. 86, caput e §1º, I, e 102, I, b).',
        'Renúncia: segundo a Lei 1.079/50, o processo só pode ser iniciado enquanto a autoridade estiver no cargo. Mesmo assim, no caso Collor, o Senado seguiu e aplicou a inabilitação depois da renúncia feita durante o julgamento, e o STF manteve (MS 21.689).',
        'Exemplo: Carla, Presidente, atrasa de propósito repasses e descumpre a lei orçamentária. Um cidadão, Diego, denuncia na Câmara. Com 342 votos (2/3 de 513), a Câmara autoriza. O Senado instaura, Carla é afastada e, com 54 votos (2/3 de 81), é condenada.',
        'Cuidado (pegadinha): no crime de responsabilidade quem julga é o Senado; no crime comum é o STF. Nos dois casos a Câmara autoriza por 2/3. O afastamento começa na instauração pelo Senado ou no recebimento da denúncia pelo STF, e não na autorização da Câmara.',
        'Como a FGV cobra: competência de cada Casa, quóruns de 2/3, prazo de 180 dias, penas e a Súmula Vinculante 46 em leis estaduais sobre impeachment.',
        'Resumo para revisar: infração política, não crime comum; Lei 1.079/50 e competência da União (SV 46); Câmara autoriza por 2/3, Senado julga com presidência do STF e condena por 2/3; afastamento de até 180 dias; penas: perda do cargo e 8 anos de inabilitação.'
      ],
      cai: ['Quem autoriza, quem julga e quóruns no impeachment (arts. 51, I, 52, I, e 86)', 'Diferença entre crime comum (STF) e crime de responsabilidade (Senado)', 'Prazo de 180 dias de afastamento e penas do art. 52, parágrafo único', 'Lei estadual sobre crime de responsabilidade e a SV 46'],
      macetes: ['Câmara Carimba (autoriza); Senado Sentencia (julga).', 'Responsabilidade = Senado; Comum = Corte (STF).', '2/3 na entrada (Câmara) e 2/3 na saída (Senado).', '180 dias de afastamento; 8 anos de inabilitação.'],
      video: 'OAB constitucional impeachment crime de responsabilidade presidente art 85 86 52' },

    { id: 'co-imunidades-presidente', titulo: 'Imunidades e prerrogativas do Presidente da República', incidencia: 'media',
      aula: [
        'Em uma frase: enquanto está no cargo, o Presidente só pode ser preso depois de condenado e não responde por crimes que nada têm a ver com a função.',
        'Para que serve: essas regras protegem o cargo, e não a pessoa. A ideia é evitar que o chefe da nação seja tirado do posto por perseguições ou processos sem ligação com o governo.',
        'Imunidade à prisão: nas infrações comuns, o Presidente não pode ser preso enquanto não houver sentença condenatória (art. 86, §3º). Não cabe, portanto, prisão em flagrante, preventiva ou temporária contra ele.',
        'Irresponsabilidade penal relativa: durante o mandato, o Presidente não pode ser responsabilizado por atos estranhos ao exercício das funções (art. 86, §4º). Ou seja, crime sem ligação com o cargo, ou praticado antes do mandato, fica aguardando o fim do mandato.',
        'Alcance: essa proteção é só penal. O Presidente pode responder normalmente a ações civis, trabalhistas, tributárias e de família, mesmo durante o mandato. A proteção também é temporária: acabou o mandato, o processo pode seguir.',
        'Crimes ligados à função: se o crime comum tem relação com o mandato, ele pode ser processado já. Antes, porém, a Câmara precisa autorizar por 2/3, e quem julga é o STF (arts. 86, caput, e 102, I, b).',
        'Foro por prerrogativa de função: o Presidente é julgado pelo STF nas infrações comuns e pelo Senado nos crimes de responsabilidade (arts. 102, I, b, e 52, I).',
        'Não vale para Governador nem Prefeito: segundo o STF, as imunidades do art. 86, §§3º e 4º, são exclusivas do Presidente, como chefe de Estado. A constituição estadual não pode copiá-las para o Governador. Também é inconstitucional exigir autorização da Assembleia para o STJ processar o Governador; o próprio STJ decide se o afasta (ADIs 4764, 4797 e 4798).',
        'Vice-Presidente: as imunidades do art. 86, §§3º e 4º, não estão previstas para ele. O Vice tem foro no STF nas infrações comuns (art. 102, I, b), e o impeachment também o alcança (art. 52, I).',
        'Exemplo: Eduardo, Presidente, é acusado de ter dado um soco num vizinho dois anos antes de tomar posse. Ele não pode ser processado por isso durante o mandato. Mas a ação de cobrança de aluguel que o locador move contra ele corre normalmente.',
        'Cuidado (pegadinha): a FGV costuma estender as imunidades do Presidente ao Governador, dizendo que a constituição estadual pode prevê-las por simetria. Isso está errado. Outra pegadinha: dizer que o Presidente não responde a ação cível durante o mandato.',
        'Como a FGV cobra: casos de Presidente acusado de crime anterior ao mandato, pedido de prisão preventiva contra ele e constituição estadual que dá imunidade ao Governador.',
        'Resumo para revisar: prisão só após sentença condenatória (art. 86, §3º); atos estranhos à função não são processados durante o mandato (art. 86, §4º); proteção só penal e temporária; foro no STF com autorização de 2/3 da Câmara; nada disso se estende a Governador.'
      ],
      cai: ['Prisão do Presidente só após sentença condenatória (art. 86, §3º)', 'Crime estranho à função ou anterior ao mandato: processo só depois do mandato (art. 86, §4º)', 'Proteção apenas penal: ações civis seguem normalmente', 'Impossibilidade de estender as imunidades ao Governador'],
      macetes: ['Presidente: "sem prisão sem sentença".', 'Estranho à função? Espera o fim do mandato.', 'Imunidade é penal: cível corre solto.', 'Imunidade presidencial é exclusiva: Governador não copia.'],
      video: 'OAB constitucional imunidades do presidente da república art 86 parágrafos 3 e 4' }
  ]);
})();
