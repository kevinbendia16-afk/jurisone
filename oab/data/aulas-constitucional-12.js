/* Aulas adicionais – lote constitucional-12. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('constitucional', [
    { id: 'co-congresso', titulo: 'Congresso Nacional, Câmara e Senado: composição e competências', incidencia: 'alta',
      aula: [
        'Em uma frase: o Congresso Nacional é a soma de duas Casas, a Câmara (que representa o povo) e o Senado (que representa os Estados e o DF).',
        'Conceito: o Brasil adota o bicameralismo federativo, ou seja, um Legislativo federal com duas Casas. Uma representa as pessoas; a outra, os entes da Federação (arts. 44 a 46). Nos Estados, no DF e nos Municípios o Legislativo tem uma Casa só.',
        'Câmara dos Deputados: os deputados são eleitos pelo sistema proporcional, em que as vagas são divididas conforme os votos de cada partido. Cada Estado e o DF têm no mínimo 8 e no máximo 70 deputados. Cada Território Federal elege 4 (art. 45, §§1º e 2º).',
        'Senado Federal: cada Estado e o DF elegem 3 senadores pelo princípio majoritário, ou seja, vence quem tem mais votos. O mandato é de 8 anos. A renovação ocorre de 4 em 4 anos, alternando um terço e dois terços. Cada senador tem 2 suplentes. Território não tem senador (art. 46).',
        'Idade mínima: deputado federal precisa ter 21 anos; senador precisa ter 35 anos (art. 14, §3º, VI). O mandato do deputado é de 4 anos, igual a uma legislatura (art. 44, parágrafo único).',
        'Quórum geral: salvo regra especial, as deliberações das Casas exigem maioria simples dos votos, presente a maioria absoluta dos membros (art. 47). Maioria absoluta é mais da metade do total de membros; maioria simples é mais da metade dos presentes.',
        'Competências do Congresso com sanção (art. 48): são matérias tratadas por lei, que passam pelo Presidente da República para sancionar ou vetar. Exemplos: tributos, orçamento, efetivo das Forças Armadas, criação de Ministérios.',
        'Competências exclusivas do Congresso (art. 49): são tratadas por decreto legislativo, sem sanção. Exemplos: resolver sobre tratados que gerem encargos ao patrimônio nacional, autorizar o Presidente a sair do país por mais de 15 dias, sustar atos do Executivo que passem do poder de regulamentar e julgar as contas do Presidente.',
        'Competências privativas da Câmara (art. 51): autorizar, por dois terços dos membros, a abertura de processo contra o Presidente, o Vice e os Ministros de Estado; tomar as contas do Presidente quando ele não as apresentar em 60 dias após a abertura da sessão legislativa. São tratadas por resolução, sem sanção.',
        'Competências privativas do Senado (art. 52): processar e julgar o Presidente nos crimes de responsabilidade; aprovar, após arguição, ministros de tribunais superiores, PGR e presidente do Banco Central; fixar limites da dívida consolidada; suspender lei declarada inconstitucional pelo STF em controle difuso (art. 52, X).',
        'Sessões conjuntas: as duas Casas se reúnem juntas para inaugurar a sessão legislativa, elaborar o regimento comum, receber o compromisso do Presidente e do Vice e conhecer do veto e sobre ele deliberar (art. 57, §3º). A sessão legislativa ordinária vai de 2 de fevereiro a 17 de julho e de 1º de agosto a 22 de dezembro (art. 57).',
        'Exemplo: o Presidente edita um decreto que cria uma obrigação não prevista em lei. O Congresso, por decreto legislativo, pode sustar esse ato (art. 49, V). Não precisa de lei, nem de sanção do próprio Presidente.',
        'Cuidado (pegadinha): a FGV troca Senado por Câmara. Lembre: a Câmara AUTORIZA o processo contra o Presidente; o Senado JULGA nos crimes de responsabilidade. Outra pegadinha: o mandato do senador é de 8 anos, mas a eleição para o Senado ocorre a cada 4 anos.',
        'Como a FGV cobra: pede para identificar qual Casa tem certa competência, qual o número de deputados ou senadores e qual espécie normativa trata do assunto (lei, decreto legislativo ou resolução).',
        'Resumo para revisar: Câmara representa o povo, sistema proporcional, 8 a 70 por Estado; Senado representa os Estados, 3 por Estado, 8 anos de mandato; art. 49 = decreto legislativo sem sanção; arts. 51 e 52 = resolução sem sanção; Câmara autoriza, Senado julga.'
      ],
      cai: [
        'Distinguir competência do art. 48 (com sanção) da do art. 49 (exclusiva, por decreto legislativo, sem sanção).',
        'Atribuir corretamente à Câmara (art. 51) ou ao Senado (art. 52) uma competência privativa.',
        'Composição: mínimo de 8 e máximo de 70 deputados por Estado, 4 por Território, 3 senadores por Estado e DF.',
        'Sustação de atos normativos do Executivo que exorbitem o poder regulamentar (art. 49, V).'
      ],
      macetes: [
        'Câmara Autoriza, Senado Sentencia: a Câmara abre a porta, o Senado julga.',
        'Senado = 3 senadores, 8 anos, 35 anos de idade: "3-8-35".',
        'Art. 49 sem sanção: o Congresso não precisa pedir licença ao Presidente para decidir sobre ele mesmo.',
        'Território: 4 deputados e zero senadores, porque Território não é ente federativo.'
      ],
      video: 'Congresso Nacional Câmara Senado competências arts. 48 49 51 52 OAB' },

    { id: 'co-imunidades', titulo: 'Imunidades parlamentares e incompatibilidades', incidencia: 'alta',
      aula: [
        'Em uma frase: o parlamentar tem proteções especiais para falar e votar com liberdade, mas também tem proibições para não misturar mandato com negócios.',
        'Para que serve: as imunidades protegem o mandato, não a pessoa. Por isso o parlamentar não pode renunciar a elas. Elas existem para que o deputado ou senador fiscalize sem medo de perseguição (art. 53).',
        'Imunidade material: deputados e senadores não respondem, civil nem penalmente, por suas opiniões, palavras e votos (art. 53, caput). Dentro da Casa legislativa a proteção é ampla. Fora dela, só vale se a fala tiver ligação com o mandato, segundo o STF.',
        'Foro por prerrogativa de função: desde a expedição do diploma, deputados e senadores são julgados pelo STF (art. 53, §1º). Após a AP 937 (2018), o foro vale para crimes cometidos durante o mandato e relacionados às funções. Em 2025, o STF decidiu que o foro continua mesmo após a saída do cargo, para crimes praticados no exercício e em razão da função (HC 232.627).',
        'Prisão: desde a expedição do diploma, o parlamentar só pode ser preso em flagrante de crime inafiançável. Nesse caso, os autos vão em 24 horas para a Casa, que decide pela maioria de seus membros (maioria absoluta) se mantém a prisão (art. 53, §2º).',
        'Sustação do processo: recebida a denúncia contra parlamentar por crime ocorrido após a diplomação, o STF avisa a Casa. Por iniciativa de partido nela representado e pelo voto da maioria absoluta, a Casa pode sustar o andamento da ação até o fim do mandato. O pedido deve ser apreciado em 45 dias, e a prescrição fica suspensa (art. 53, §§3º a 5º).',
        'Testemunho e estado de sítio: o parlamentar não é obrigado a testemunhar sobre informações recebidas no mandato (art. 53, §6º). As imunidades continuam no estado de sítio e só podem ser suspensas por dois terços da Casa, por atos praticados fora do recinto (art. 53, §8º).',
        'Incompatibilidades desde a diplomação: o parlamentar não pode firmar contrato com pessoa jurídica de direito público, autarquia, empresa pública, sociedade de economia mista ou concessionária, salvo contrato de cláusulas uniformes (como conta de luz). Também não pode aceitar cargo remunerado nessas entidades (art. 54, I).',
        'Incompatibilidades desde a posse: não pode ser dono ou diretor de empresa que receba favor de contrato com o poder público, ocupar cargo demissível "ad nutum" (ou seja, de livre exoneração) nessas entidades, patrocinar causa delas nem ter mais de um mandato eletivo (art. 54, II).',
        'Quando não perde o mandato: o parlamentar investido como Ministro de Estado, Governador de Território, Secretário de Estado, do DF, de Território ou de capital, ou chefe de missão diplomática temporária, não perde o mandato. Ele pode optar pela remuneração do mandato, e o suplente assume (art. 56).',
        'Perda do mandato: em caso de quebra de decoro ou violação do art. 54, a Casa decide por maioria absoluta. Em caso de faltas a um terço das sessões, perda dos direitos políticos ou decisão da Justiça Eleitoral, a Mesa apenas declara (art. 55, §§2º e 3º).',
        'Exemplo: a Deputada Clara, em entrevista na TV sobre uma CPI de que participa, chama um empresário investigado de "desonesto". A fala tem ligação com o mandato, então ela está protegida pela imunidade material e não pode ser processada por isso.',
        'Cuidado (pegadinha): vereador tem imunidade material, mas não tem imunidade formal nem foro no STF. A imunidade dele vale apenas na circunscrição do Município e quando ligada ao mandato (art. 29, VIII). Deputado estadual tem as mesmas imunidades do federal (art. 27, §1º).',
        'Como a FGV cobra: casos de prisão de parlamentar, sustação de processo, fala fora da Casa, nomeação de deputado para Ministro e contratos com o poder público.',
        'Resumo para revisar: imunidade material = opiniões, palavras e votos; prisão só em flagrante de crime inafiançável, com decisão da Casa em 24h; sustação só para crime após a diplomação; nomeado Ministro não perde o mandato; vereador só tem imunidade material no Município.'
      ],
      cai: [
        'Prisão em flagrante de crime inafiançável e deliberação da Casa por maioria absoluta (art. 53, §2º).',
        'Sustação da ação penal: só crime cometido após a diplomação, por iniciativa de partido (art. 53, §3º).',
        'Incompatibilidades do art. 54: diferença entre as que valem desde a diplomação e as que valem desde a posse.',
        'Parlamentar nomeado Ministro ou Secretário de Estado mantém o mandato (art. 56).',
        'Comparação das imunidades de deputado estadual e de vereador.'
      ],
      macetes: [
        'Diploma proíbe CONTRATAR; posse proíbe SER DONO e ACUMULAR.',
        'Flagrante + inafiançável + 24h + maioria absoluta: os quatro passos da prisão do parlamentar.',
        'Vereador: "fala livre, mas só na cidade e sobre o mandato".',
        'Cassação (decisão da Casa) para decoro e art. 54; declaração (da Mesa) para faltas, direitos políticos e Justiça Eleitoral.'
      ],
      video: 'imunidades parlamentares art. 53 incompatibilidades art. 54 OAB' },

    { id: 'fiscalizacao', titulo: 'Fiscalização: Tribunais de Contas e CPIs', incidencia: 'alta',
      aula: [
        'Em uma frase: o Legislativo fiscaliza o dinheiro público com a ajuda do Tribunal de Contas e investiga fatos graves por meio das CPIs.',
        'Conceito: o controle externo das contas da União é feito pelo Congresso, com o auxílio do Tribunal de Contas da União (TCU). O TCU não é subordinado ao Congresso: ele é um órgão técnico e independente (arts. 70 e 71).',
        'Contas do Presidente: o TCU apenas dá um parecer prévio em 60 dias. Quem julga as contas do Presidente é o Congresso (art. 71, I, e art. 49, IX). Já as contas dos demais administradores, o TCU julga ele mesmo (art. 71, II).',
        'Poderes do TCU: aplica multas e sanções, dá prazo para corrigir ilegalidades e susta ato administrativo se não for atendido (art. 71, VIII a X). Suas decisões que geram débito ou multa têm eficácia de título executivo (art. 71, §3º).',
        'Contrato: se o problema for um contrato, quem susta é o Congresso. Se o Congresso ou o Executivo não agirem em 90 dias, o TCU decide (art. 71, §§1º e 2º).',
        'Contraditório no TCU: quando o processo puder anular ou revogar ato que beneficie alguém, a pessoa tem direito de se defender. A exceção é a análise da legalidade da concessão inicial de aposentadoria, reforma e pensão (Súmula Vinculante 3). Mas o TCU tem 5 anos, contados da chegada do processo, para julgar esse registro (Tema 445 do STF).',
        'Composição do TCU: 9 ministros. Um terço é escolhido pelo Presidente, com aprovação do Senado; dois terços, pelo Congresso (art. 73, §2º). Nos Estados, os Tribunais de Contas têm 7 conselheiros (art. 75, parágrafo único). É proibido criar novos Tribunais de Contas municipais (art. 31, §4º).',
        'Contas do Prefeito: quem julga é a Câmara Municipal. O parecer do Tribunal de Contas só deixa de valer por decisão de dois terços da Câmara (art. 31, §2º). Para fins de inelegibilidade, vale o julgamento da Câmara (Tema 835 do STF).',
        'CPI, requisitos: é criada a pedido de um terço dos membros da Casa, para apurar fato determinado, por prazo certo (art. 58, §3º). É um direito da minoria: preenchidos os requisitos, o Presidente da Casa não pode barrar a instalação por conveniência política.',
        'CPI, o que pode: tem poderes de investigação próprios de juiz. Pode quebrar sigilo bancário, fiscal e de dados telefônicos (a lista de ligações), convocar testemunhas e determinar diligências, sempre com decisão fundamentada.',
        'CPI, o que não pode: há reserva de jurisdição, ou seja, coisas que só o juiz faz. A CPI não pode fazer interceptação telefônica (escuta), decretar prisão (salvo em flagrante), mandar fazer busca em domicílio nem decretar indisponibilidade de bens. Também não condena ninguém: envia suas conclusões ao Ministério Público.',
        'Exemplo: 171 deputados pedem uma CPI para investigar fraude em um contrato específico, por 120 dias. O Presidente da Câmara se recusa a criá-la porque o tema "desgasta o governo". A recusa é ilegítima: a CPI é direito da minoria, e o requerimento cumpre os requisitos.',
        'Cuidado (pegadinha): o investigado tem direito ao silêncio e a ser acompanhado por advogado na CPI. E o TCU, segundo a jurisprudência atual do STF, não deve fazer controle abstrato de constitucionalidade (a antiga Súmula 347 foi relativizada).',
        'Como a FGV cobra: casos sobre quem julga as contas do Presidente e do Prefeito, Súmula Vinculante 3 e o que a CPI pode ou não pode fazer.',
        'Resumo para revisar: TCU dá parecer, Congresso julga contas do Presidente; Câmara Municipal derruba parecer só por dois terços; SV 3 tem exceção para aposentadoria inicial; CPI = um terço, fato determinado, prazo certo; CPI não faz escuta, busca domiciliar nem prisão.'
      ],
      cai: [
        'Quem julga as contas do Presidente (Congresso) e dos demais gestores (TCU).',
        'Súmula Vinculante 3 e sua exceção para a concessão inicial de aposentadoria.',
        'Requisitos da CPI e o direito da minoria à sua instalação.',
        'Limites da CPI: reserva de jurisdição (escuta, busca domiciliar, prisão).'
      ],
      macetes: [
        'CPI = "1/3, fato, prazo".',
        'Sigilo de DADOS a CPI quebra; ESCUTA só o juiz autoriza.',
        'TCU: 9 ministros; TCE: 7 conselheiros.',
        'Contas do Prefeito: o parecer do Tribunal "cai" só com 2/3 da Câmara.'
      ],
      video: 'Tribunal de Contas da União CPI poderes e limites OAB constitucional' },

    { id: 'co-especies-normativas', titulo: 'Espécies normativas: lei complementar, ordinária, delegada, decretos legislativos e resoluções', incidencia: 'media',
      aula: [
        'Em uma frase: cada tipo de norma tem sua função, seu quórum e seu caminho; a prova quer saber qual usar em cada caso.',
        'Conceito: o art. 59 lista as espécies normativas: emendas à Constituição, leis complementares, leis ordinárias, leis delegadas, medidas provisórias, decretos legislativos e resoluções. Fora as emendas, elas não têm hierarquia entre si: cada uma tem seu campo próprio.',
        'Lei complementar: só é exigida quando a Constituição diz expressamente "lei complementar". É aprovada por maioria absoluta (art. 69). Exemplos: normas gerais tributárias (art. 146) e criação de novos impostos pela competência residual (art. 154, I).',
        'Lei ordinária: é a regra geral. Quando a Constituição diz só "lei", é lei ordinária. É aprovada por maioria simples, presente a maioria absoluta (art. 47).',
        'Relação entre as duas: se uma lei ordinária trata de assunto reservado à lei complementar, ela é inconstitucional. Mas se uma lei complementar trata de assunto de lei ordinária, ela vale como lei ordinária e pode ser mudada por outra lei ordinária (entendimento do STF).',
        'Lei delegada: é feita pelo Presidente, que pede a delegação ao Congresso. A delegação é dada por resolução do Congresso, que fixa o conteúdo e os termos (art. 68, caput e §2º). Se a resolução exigir que o projeto volte ao Congresso, este vota em votação única, sem poder fazer emendas (art. 68, §3º).',
        'O que não pode ser delegado: atos de competência exclusiva do Congresso, privativa da Câmara ou do Senado, matéria de lei complementar, organização do Judiciário e do Ministério Público, nacionalidade, cidadania, direitos individuais, políticos e eleitorais, e planos e orçamentos (art. 68, §1º).',
        'Controle da lei delegada: se o Presidente for além dos limites da delegação, o Congresso pode sustar o ato por decreto legislativo (art. 49, V).',
        'Decreto legislativo: trata das matérias exclusivas do Congresso (art. 49), como aprovar tratados e sustar atos do Executivo. Não tem sanção nem veto. Também regula as relações jurídicas de medida provisória rejeitada (art. 62, §3º).',
        'Resolução: trata das matérias privativas da Câmara (art. 51) ou do Senado (art. 52) e de assuntos internos. Também não tem sanção. Exemplo: o Senado fixa alíquotas do ICMS em operações interestaduais por resolução (art. 155, §2º, IV).',
        'Exemplo: a Constituição exige lei complementar para normas gerais de tributação. O Congresso aprova uma lei ordinária sobre prescrição tributária. Essa lei é inconstitucional, pois invadiu campo da lei complementar (Súmula Vinculante 8 trata de caso parecido).',
        'Cuidado (pegadinha): a FGV diz que lei complementar é "hierarquicamente superior" à ordinária. Para o STF, não há hierarquia: há campos diferentes. Outra pegadinha: dizer que o Congresso pode emendar a lei delegada na apreciação. Não pode.',
        'Como a FGV cobra: pede o quórum da lei complementar, o que não pode ser delegado e qual espécie trata de cada assunto (decreto legislativo ou resolução).',
        'Resumo para revisar: LC só quando a CF manda, maioria absoluta; LO é a regra, maioria simples; LC sobre tema de LO vale como LO; lei delegada vem por resolução do Congresso e não alcança LC nem direitos individuais; decreto legislativo e resolução não têm sanção.'
      ],
      cai: [
        'Quórum de aprovação da lei complementar (maioria absoluta, art. 69).',
        'Lei complementar que trata de matéria de lei ordinária pode ser revogada por lei ordinária.',
        'Matérias proibidas de delegação (art. 68, §1º) e votação única sem emendas (art. 68, §3º).',
        'Diferença entre decreto legislativo (art. 49) e resolução (arts. 51 e 52).'
      ],
      macetes: [
        'LC = "Lei Chata": só quando a CF pede e com maioria absoluta.',
        'Lei delegada: o Congresso dá a delegação por RESOLUÇÃO e corta o excesso por DECRETO LEGISLATIVO.',
        'Não se delega o que é do próprio Legislativo, do Judiciário, do MP, da LC e dos direitos das pessoas.',
        'Decreto legislativo e resolução: nenhum dos dois vai para o Presidente.'
      ],
      video: 'espécies normativas lei complementar ordinária delegada decreto legislativo resolução OAB' },

    { id: 'co-medidas-provisorias', titulo: 'Medidas provisórias', incidencia: 'alta',
      aula: [
        'Em uma frase: a medida provisória é uma norma que o Presidente edita sozinho em casos urgentes e que vale como lei até o Congresso decidir.',
        'Conceito: em caso de relevância e urgência, o Presidente pode adotar medida provisória com força de lei e deve enviá-la logo ao Congresso (art. 62, caput). Ela começa a valer na publicação.',
        'Prazo: a MP vale por 60 dias, prorrogáveis uma vez por mais 60. O prazo não corre no recesso parlamentar (art. 62, §§3º, 4º e 7º). Se não for convertida em lei nesse tempo, perde a eficácia desde a edição.',
        'Trancamento de pauta: se a MP não for votada em 45 dias, entra em regime de urgência e tranca as demais deliberações da Casa (art. 62, §6º). Para o STF, o trancamento só alcança projetos de lei ordinária sobre temas que podem ser tratados por MP (MS 27.931).',
        'Caminho: a votação começa na Câmara (art. 62, §8º). Antes, uma comissão mista de deputados e senadores deve dar parecer; o STF considera essa etapa obrigatória (ADI 4029, §9º).',
        'Matérias proibidas: MP não pode tratar de nacionalidade, cidadania, direitos políticos, partidos e direito eleitoral; direito penal, processual penal e processual civil; organização do Judiciário e do MP; planos e orçamentos (salvo crédito extraordinário); confisco de poupança; matéria de lei complementar; e assunto já aprovado pelo Congresso que espera sanção ou veto (art. 62, §1º).',
        'MP e impostos: MP que cria ou aumenta imposto só produz efeitos no exercício seguinte se for convertida em lei até o último dia do ano em que foi editada. Não se aplica a II, IE, IPI, IOF e imposto extraordinário de guerra (art. 62, §2º).',
        'Reedição: é proibido reeditar, na mesma sessão legislativa, MP rejeitada ou que perdeu a eficácia por decurso de prazo (art. 62, §10). A sessão legislativa é o ano de trabalho do Congresso.',
        'Efeitos da rejeição: o Congresso deve editar decreto legislativo para regular o que aconteceu enquanto a MP valia. Se não editar em 60 dias, as relações formadas nesse período continuam regidas pela MP (art. 62, §§3º e 11).',
        'Lei de conversão: se o Congresso mudar o texto, ele vai para sanção ou veto, e a MP continua valendo até a decisão (art. 62, §12). O STF proíbe emendas sem relação com o tema da MP, os chamados "jabutis" (ADI 5127).',
        'Estados e Municípios: Governadores podem editar MP se a Constituição Estadual permitir, seguindo o modelo federal (STF, ADI 425). Mas o Estado não pode usar MP para regular o gás canalizado (art. 25, §2º).',
        'Exemplo: em novembro de 2025, o Presidente edita MP que aumenta o Imposto de Renda. A MP é convertida em lei só em fevereiro de 2026. O aumento só pode ser cobrado a partir de 1º de janeiro de 2027, pois a conversão não ocorreu até 31/12/2025.',
        'Cuidado (pegadinha): MP pode tratar de direito civil e de direito tributário; o que é proibido é processo civil e penal. Outra: relevância e urgência podem ser controladas pelo Judiciário, mas só em casos excepcionais de abuso evidente.',
        'Como a FGV cobra: prazos (60 + 60, trancamento em 45), matérias proibidas, reedição na mesma sessão legislativa e MP sobre impostos.',
        'Resumo para revisar: relevância e urgência; 60 dias + 60, sem contar o recesso; tranca a pauta no 45º dia; não pode penal, processo, eleitoral, LC; rejeitada não volta na mesma sessão legislativa; imposto via MP precisa de conversão até o fim do ano.'
      ],
      cai: [
        'Matérias vedadas à MP (art. 62, §1º), sobretudo penal, processo e lei complementar.',
        'Prazo de 60 + 60 dias, suspensão no recesso e trancamento de pauta.',
        'Proibição de reedição na mesma sessão legislativa (art. 62, §10).',
        'MP que institui ou majora imposto e a regra da conversão até o fim do exercício (art. 62, §2º).'
      ],
      macetes: [
        '"60 + 60, tranca no 45": a conta da MP.',
        'Câmara começa; comissão mista opina antes; os dois plenários votam separados.',
        'MP pode civil, não pode PROCESSO civil.',
        'Imposto por MP: "converteu até o Réveillon, cobra no ano seguinte" (exceto II, IE, IPI, IOF e guerra).'
      ],
      video: 'medidas provisórias art. 62 prazos vedações OAB constitucional' }
  ]);
})();
