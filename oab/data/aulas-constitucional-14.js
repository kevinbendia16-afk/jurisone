/* Aulas adicionais – lote constitucional-14 (Poder Judiciário e funções essenciais). */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('constitucional', [
    { id: 'co-garantias-juizes', titulo: 'Garantias e vedações da magistratura', incidencia: 'alta',
      aula: [
        'Em uma frase: o juiz recebe proteções especiais para julgar sem medo de ninguém e, em troca, aceita proibições para não se misturar com política, dinheiro ou advocacia.',
        'Para que serve: as garantias não são privilégio pessoal do juiz. Elas protegem o cidadão, que precisa de um julgador independente. As vedações protegem a imparcialidade, ou seja, a neutralidade do juiz diante das partes (art. 95).',
        'Ingresso na carreira: o juiz substituto entra por concurso público de provas e títulos, com participação da OAB em todas as fases. O candidato precisa ser bacharel em Direito com no mínimo três anos de atividade jurídica (art. 93, I).',
        'Vitaliciedade: é a garantia de só perder o cargo por sentença judicial transitada em julgado, isto é, da qual não cabe mais recurso. No primeiro grau, ela só é adquirida após dois anos de exercício. Antes disso, a perda depende de deliberação do tribunal ao qual o juiz está vinculado (art. 95, I).',
        'Vitaliciedade imediata: quem entra direto em tribunal, como o advogado nomeado pelo quinto constitucional ou o ministro do STF, já é vitalício desde a posse. Não existe estágio de dois anos para eles.',
        'Inamovibilidade: o juiz não pode ser transferido contra a vontade dele. A exceção é o interesse público, decidido por voto da maioria absoluta do tribunal ou do CNJ, com ampla defesa (arts. 95, II, e 93, VIII). Isso impede que alguém tire o juiz do caso para mudar o resultado.',
        'Irredutibilidade de subsídio: o valor que o juiz recebe não pode ser reduzido. Mas ele continua pagando imposto de renda e respeitando o teto remuneratório (art. 95, III). A proteção é contra redução nominal, não contra a inflação.',
        'Vedações (proibições): o juiz não pode exercer outro cargo ou função, salvo um de magistério (professor); receber custas ou participação em processo; dedicar-se a atividade político-partidária; receber auxílios ou contribuições de pessoas ou entidades, salvo exceções da lei (art. 95, parágrafo único, I a IV).',
        'Quarentena de saída: o juiz que se aposentou ou foi exonerado não pode advogar no juízo ou tribunal do qual se afastou antes de três anos (art. 95, parágrafo único, V). A proibição é só naquele juízo ou tribunal, não em todo o país.',
        'Exemplo: a juíza Beatriz, vitaliciada, dá aulas em uma faculdade particular à noite. Isso é permitido. Se ela aceitasse ser também diretora de uma empresa pública, violaria a vedação. Quando se aposentar, poderá advogar em outra comarca, mas na vara de onde saiu só depois de três anos.',
        'Cuidado (pegadinha): a FGV troca "um cargo de magistério" por "dois cargos" ou fala em "qualquer atividade remunerada". Também troca "três anos de quarentena" por dois, ou "dois anos de vitaliciamento" por três (que é o prazo da estabilidade do servidor comum).',
        'Como a FGV cobra: em casos de juiz que quer dar aula, se candidatar, advogar após se aposentar ou ser removido de vara. A pergunta exige saber a garantia certa, o prazo e quem decide a remoção.',
        'Resumo para revisar: vitaliciedade após 2 anos no primeiro grau e imediata nos tribunais; remoção só por interesse público, maioria absoluta do tribunal ou CNJ; subsídio irredutível, mas sujeito a imposto e teto; só um cargo de magistério; quarentena de 3 anos no juízo ou tribunal de onde saiu.'
      ],
      cai: [
        'Caso de juiz em estágio probatório (menos de dois anos) e a forma de perda do cargo.',
        'Juiz que quer acumular magistério ou outra função pública.',
        'Quarentena de três anos para advogar após aposentadoria ou exoneração.',
        'Remoção compulsória por interesse público: quórum de maioria absoluta do tribunal ou do CNJ.'
      ],
      macetes: [
        'Juiz é "VIP": Vitaliciedade, Inamovibilidade, irredutibilidade de Pagamento (subsídio).',
        'Números da toga: 3 anos de atividade jurídica para entrar, 2 anos para vitaliciar, 3 anos de quarentena para advogar.',
        'Magistério é a única porta aberta: UM cargo de professor, e nada mais.',
        'Quarentena é local: vale só para o juízo ou tribunal de onde o juiz saiu.'
      ],
      video: 'garantias e vedações da magistratura art 95 CF OAB' },

    { id: 'co-stf', titulo: 'STF: composição e competências', incidencia: 'alta',
      aula: [
        'Em uma frase: o STF é o guardião da Constituição; ele julga as grandes ações de controle, as autoridades mais altas do país e dá a palavra final nos recursos extraordinários.',
        'Composição: são 11 ministros, escolhidos entre brasileiros natos com mais de 35 e menos de 70 anos, notável saber jurídico e reputação ilibada, ou seja, sem manchas na vida pública (art. 101). O limite de 70 anos veio da EC 122/22.',
        'Nomeação: o Presidente da República indica e o Senado aprova por maioria absoluta (art. 101, parágrafo único). Não há exigência de ser juiz de carreira nem de ser formado em Direito no texto, embora na prática seja. Ministro do STF é cargo privativo de brasileiro nato (art. 12, §3º, IV).',
        'Competência originária (o processo já começa no STF): ADI, ADC e ADPF; crimes comuns do Presidente, do Vice, de deputados federais, senadores, ministros do próprio STF e do Procurador-Geral da República (art. 102, I, a e b).',
        'Crimes comuns e de responsabilidade no STF: ministros de Estado, comandantes das Forças Armadas, membros dos tribunais superiores, do TCU e chefes de missão diplomática permanente (art. 102, I, c). Atenção: crime de responsabilidade do Presidente é julgado pelo Senado, não pelo STF (art. 52, I).',
        'Outras competências originárias: litígio entre Estado estrangeiro e a União, Estado ou DF; conflitos entre a União e os Estados ou entre Estados; extradição pedida por Estado estrangeiro; ações contra o CNJ e o CNMP; mandado de injunção quando a norma faltante cabe ao Presidente, ao Congresso e a outras autoridades da alínea q (art. 102, I, e, f, g, q, r).',
        'Recurso ordinário: o STF julga habeas corpus, mandado de segurança, habeas data e mandado de injunção decididos em única instância pelos tribunais superiores, quando a decisão for denegatória, isto é, negar o pedido. Também julga crime político (art. 102, II).',
        'Recurso extraordinário: cabe contra causas decididas em única ou última instância que contrariem a Constituição, declarem inconstitucional tratado ou lei federal, ou validem lei ou ato local contestado diante da Constituição ou de lei federal (art. 102, III). Cabe até contra decisão de turma recursal de juizado (Súmula 640 do STF).',
        'Repercussão geral: o recorrente precisa mostrar que a questão constitucional importa para além do caso concreto. O STF só pode recusar o recurso por esse motivo com voto de dois terços dos ministros, ou seja, oito (art. 102, §3º).',
        'Exemplo: o deputado federal Rui comete crime comum ligado ao mandato. Ele será julgado pelo STF. Já o Governador Paulo, acusado de crime comum, vai ao STJ. E a prefeita Joana, ao Tribunal de Justiça.',
        'Cuidado (pegadinha): homologação de sentença estrangeira e concessão de exequatur a cartas rogatórias são do STJ desde a EC 45/04, e não mais do STF (art. 105, I, i). A FGV adora colocar essa competência no STF.',
        'Como a FGV cobra: dá uma autoridade e um tipo de crime e pergunta quem julga; ou traz uma decisão de turma recursal e pergunta se cabe RE ou REsp; ou pergunta o quórum para recusar repercussão geral.',
        'Resumo para revisar: 11 ministros natos, 35 a 70 anos, Senado aprova por maioria absoluta; crimes comuns do Presidente e de congressistas no STF; crime de responsabilidade do Presidente no Senado; recurso ordinário só contra decisão denegatória de tribunal superior; repercussão geral recusada por 2/3.'
      ],
      cai: [
        'Quem julga determinada autoridade por crime comum ou de responsabilidade.',
        'Cabimento de recurso extraordinário contra decisão de turma recursal (Súmula 640).',
        'Diferença entre recurso ordinário no STF e no STJ.',
        'Quórum de dois terços para recusar repercussão geral.'
      ],
      macetes: [
        'STF = 11 = time de futebol; idade 35 a 70.',
        'Recurso ordinário só sobe se o tribunal superior disse NÃO (decisão denegatória).',
        'Sentença estrangeira foi para o STJ: "estrangeira é com o J".',
        'RE cabe de turma recursal; REsp não, porque turma recursal não é tribunal (Súmula 203 do STJ).'
      ],
      video: 'competências do STF art 102 CF OAB' },

    { id: 'co-stj', titulo: 'STJ, Justiça Federal e Justiça do Trabalho', incidencia: 'alta',
      aula: [
        'Em uma frase: o STJ uniformiza a interpretação da lei federal; a Justiça Federal julga as causas da União e de seus entes; a Justiça do Trabalho julga as relações de trabalho.',
        'Composição do STJ: no mínimo 33 ministros, brasileiros (natos ou naturalizados) com mais de 35 e menos de 70 anos. Um terço vem dos juízes dos TRFs, um terço dos desembargadores dos TJs e um terço de advogados e membros do MP, em partes iguais e alternadas. O Senado aprova por maioria absoluta (art. 104).',
        'Competência originária do STJ: crimes comuns dos governadores; crimes comuns e de responsabilidade de desembargadores, membros dos tribunais de contas dos Estados, dos TRFs, TREs, TRTs e do MPU que atuem em tribunais (art. 105, I, a). Também julga conflitos de competência entre tribunais e homologa sentença estrangeira (art. 105, I, d e i).',
        'Recurso especial: cabe contra causas decididas em única ou última instância por TRF ou TJ, quando a decisão contrariar lei federal, julgar válido ato de governo local contestado diante de lei federal ou divergir de outro tribunal sobre a lei federal (art. 105, III). A EC 125/22 criou o filtro da relevância da questão federal (art. 105, §2º).',
        'Justiça Federal, regra geral: julga causas em que a União, entidade autárquica ou empresa pública federal for parte, como autora, ré, assistente ou oponente (art. 109, I). Ficam de fora falência, acidente de trabalho e causas eleitorais e trabalhistas.',
        'Sociedade de economia mista federal: não atrai a Justiça Federal. Uma ação contra o Banco do Brasil, por exemplo, corre na Justiça Estadual (Súmula 556 do STF e Súmula 42 do STJ). Já a Caixa Econômica Federal, que é empresa pública, vai à Justiça Federal.',
        'Outras competências federais: crimes políticos e crimes contra bens, serviços ou interesses da União; crimes contra a organização do trabalho; disputa sobre direitos indígenas; causas fundadas em tratado com Estado estrangeiro (art. 109, IV, VI, XI e III).',
        'Incidente de deslocamento de competência (IDC): em grave violação de direitos humanos prevista em tratado, o Procurador-Geral da República pode pedir ao STJ que o caso passe para a Justiça Federal, em qualquer fase (art. 109, §5º).',
        'Justiça do Trabalho: julga as ações oriundas da relação de trabalho, as que envolvem greve, representação sindical, danos morais da relação de trabalho e multas da fiscalização do trabalho (art. 114, EC 45/04). Servidor estatutário, ou seja, regido por estatuto e não pela CLT, fica fora: vai à Justiça comum (ADI 3395).',
        'Justiça do Trabalho não julga crime: o STF decidiu que o art. 114 não dá competência criminal à Justiça do Trabalho (ADI 3684). O TST tem 27 ministros, com aprovação do Senado por maioria absoluta (art. 111-A).',
        'Exemplo: Carla, empregada da Caixa, sofre assédio e pede indenização. Vai à Justiça do Trabalho, porque a relação é de emprego. Se Carla fosse cliente e processasse a Caixa por cobrança indevida, iria à Justiça Federal.',
        'Cuidado (pegadinha): a FGV coloca o Banco do Brasil ou a Petrobras na Justiça Federal. Errado: são sociedades de economia mista. Outra pegadinha é dizer que o IDC é pedido pela vítima ou julgado pelo STF. Quem pede é o PGR e quem julga é o STJ.',
        'Como a FGV cobra: casos práticos de "qual Justiça é competente", envolvendo empresa pública versus sociedade de economia mista, servidor celetista versus estatutário e autoridades com foro no STJ.',
        'Resumo para revisar: STJ tem no mínimo 33 ministros, julga governadores e desembargadores; REsp só contra TRF ou TJ; empresa pública federal vai à Justiça Federal e sociedade de economia mista não; IDC pedido pelo PGR ao STJ; estatutário fora da Justiça do Trabalho.'
      ],
      cai: [
        'Foro do governador e de desembargadores no STJ.',
        'Empresa pública federal x sociedade de economia mista na definição da Justiça competente.',
        'Incidente de deslocamento de competência: legitimado e tribunal.',
        'Servidor estatutário e competência da Justiça do Trabalho (ADI 3395).'
      ],
      macetes: [
        'STJ "33 ou mais": 1/3 TRF, 1/3 TJ, 1/3 advogados e MP.',
        'Governador = STJ; Prefeito = TJ; Presidente = STF.',
        'Federal é "CAE": Caixa, Autarquia, Empresa pública. Banco do Brasil e Petrobras ficam na estadual.',
        'IDC: PGR pede, STJ decide, Justiça Federal recebe.'
      ],
      video: 'competência STJ Justiça Federal art 109 Justiça do Trabalho art 114 OAB' },

    { id: 'co-cnj', titulo: 'CNJ, súmula vinculante e reclamação', incidencia: 'alta',
      aula: [
        'Em uma frase: o CNJ fiscaliza a parte administrativa e financeira do Judiciário; a súmula vinculante obriga juízes e administração a seguir o STF; a reclamação é o instrumento para fazer valer essa obrigação.',
        'CNJ, composição: 15 membros, com mandato de 2 anos e uma recondução. É presidido pelo Presidente do STF. Inclui magistrados, membros do MP, dois advogados indicados pelo Conselho Federal da OAB e dois cidadãos de notável saber jurídico, um indicado pela Câmara e outro pelo Senado (art. 103-B).',
        'Nomeação dos conselheiros: o Presidente da República nomeia depois da aprovação do Senado por maioria absoluta. A exceção é o Presidente do STF, que já integra o conselho por força do cargo (art. 103-B, §2º).',
        'O que o CNJ faz: controla a atuação administrativa e financeira do Judiciário e o cumprimento dos deveres dos juízes. Pode receber reclamações, avocar processos disciplinares e aplicar sanções como remoção e disponibilidade (art. 103-B, §4º).',
        'O que o CNJ não faz: ele não tem função jurisdicional, ou seja, não julga processos nem revê sentenças. Também não tem poder sobre o STF, que está acima dele (ADI 3367). Sua competência disciplinar é concorrente, isto é, ele pode agir mesmo sem esperar a corregedoria do tribunal (ADI 4638).',
        'Quem julga ações contra o CNJ: o STF (art. 102, I, r). O STF entende que isso vale para ações contra atos do CNJ praticados no exercício de suas funções constitucionais.',
        'Súmula vinculante, requisitos: aprovação por dois terços dos ministros do STF (oito votos), após reiteradas decisões sobre matéria constitucional. Deve existir controvérsia atual que cause grave insegurança jurídica e multiplicação de processos iguais (art. 103-A).',
        'Quem fica vinculado: os demais órgãos do Judiciário e a administração pública direta e indireta, em todas as esferas. Não ficam vinculados o Poder Legislativo na função de fazer leis nem o próprio STF, que pode revisar ou cancelar a súmula.',
        'Quem pode propor edição, revisão ou cancelamento: os mesmos legitimados da ADI, além de outros previstos na Lei 11.417/06, como tribunais superiores e o Defensor Público-Geral da União. O município pode propor de forma incidental, em processo de que seja parte (art. 103-A, §2º; art. 3º da Lei 11.417/06).',
        'Reclamação: se ato administrativo ou decisão judicial contraria a súmula vinculante ou a aplica mal, cabe reclamação ao STF. Se procedente, o STF anula o ato ou cassa a decisão e manda outra ser proferida (art. 103-A, §3º).',
        'Reclamação contra ato administrativo: só depois de esgotadas as vias administrativas (art. 7º, §1º, da Lei 11.417/06). Contra decisão judicial não há essa exigência. A reclamação não substitui recurso e não serve para revisar o mérito de toda a causa.',
        'Exemplo: o servidor Jonas é algemado sem justificativa por escrito, contrariando a SV 11. O juiz mantém o ato. O advogado de Jonas pode ajuizar reclamação direto no STF contra a decisão judicial.',
        'Cuidado (pegadinha): a FGV diz que a súmula vinculante vincula o Legislativo ou que é aprovada por maioria absoluta. Errado: o quórum é de dois terços e o Legislativo, ao legislar, não fica preso a ela. Também afirma que o CNJ pode anular sentença, o que é falso.',
        'Como a FGV cobra: casos de lei nova contrária a súmula vinculante, de reclamação contra ato administrativo sem esgotar a via administrativa e de atuação do CNJ sobre juízes ou sobre o STF.',
        'Resumo para revisar: CNJ tem 15 membros, presidido pelo Presidente do STF, mandato de 2 anos com uma recondução; CNJ não julga processos nem controla o STF; súmula vinculante exige 2/3 do STF; não vincula o Legislativo na função de legislar; reclamação contra ato administrativo exige esgotar a via administrativa.'
      ],
      cai: [
        'Limites do CNJ: sem função jurisdicional e sem controle sobre o STF.',
        'Quórum de dois terços e destinatários da súmula vinculante.',
        'Reclamação contra ato administrativo e exigência de esgotar a via administrativa.',
        'Composição do CNJ, com os dois advogados indicados pela OAB.'
      ],
      macetes: [
        'CNJ é "gerente", não "juiz": cuida de gestão e disciplina, nunca de sentença.',
        'SV = 2/3 = 8 votos, igual ao quórum da repercussão geral e da modulação de efeitos.',
        'Legislativo legislando é livre: pode fazer lei contrária à súmula vinculante.',
        'Reclamação de ato administrativo: primeiro "bate na porta" da administração, depois no STF.'
      ],
      video: 'CNJ súmula vinculante reclamação OAB constitucional' },

    { id: 'funcoesessenciais', titulo: 'Funções essenciais à Justiça', incidencia: 'media',
      aula: [
        'Em uma frase: o juiz não age sozinho; a Constituição cria instituições que provocam e defendem perante a Justiça: Ministério Público, Advocacia Pública, Advocacia e Defensoria Pública (arts. 127 a 135).',
        'Para que serve: o Judiciário é inerte, ou seja, só age quando alguém pede. Essas instituições levam os casos ao juiz e garantem que todos, inclusive o Estado e os pobres, tenham quem os represente.',
        'Advocacia-Geral da União (AGU): representa a União judicial e extrajudicialmente e dá consultoria e assessoramento jurídico ao Poder Executivo (art. 131). Suas regras de organização vêm de lei complementar.',
        'Chefe da AGU: o Advogado-Geral da União é de livre nomeação do Presidente da República, entre cidadãos com mais de 35 anos, notável saber jurídico e reputação ilibada (art. 131, §1º). Não precisa de aprovação do Senado e pode ser exonerado livremente.',
        'Dívida ativa tributária da União: a cobrança judicial é feita pela Procuradoria-Geral da Fazenda Nacional, que integra a estrutura da AGU (art. 131, §3º).',
        'Procuradores dos Estados e do DF: entram por concurso de provas e títulos, com participação da OAB em todas as fases. Fazem a representação judicial e a consultoria jurídica do ente (art. 132). Têm estabilidade após três anos de efetivo exercício, com avaliação de desempenho (art. 132, parágrafo único).',
        'Advocacia: o advogado é indispensável à administração da Justiça e é inviolável por seus atos e manifestações no exercício da profissão, nos limites da lei (art. 133). A inviolabilidade não é absoluta: ela vale nos limites do Estatuto da OAB.',
        'Dispensa de advogado: a indispensabilidade não impede que a lei permita postular sem advogado em certos casos. Exemplos: habeas corpus, juizados especiais em causas menores e reclamação trabalhista. O STF já validou essas exceções.',
        'Defensoria Pública: presta orientação jurídica e defende, em todos os graus, os necessitados, de forma integral e gratuita, inclusive em ações coletivas (art. 134). Tem autonomia funcional e administrativa e iniciativa de sua proposta orçamentária (art. 134, §§2º e 3º).',
        'Defensor e advocacia privada: o defensor público é proibido de advogar fora das atribuições institucionais (art. 134, §1º). Ele tem garantia de inamovibilidade.',
        'Exemplo: o Estado Alfa é processado por um fornecedor. Quem defende o Estado é a Procuradoria-Geral do Estado. Se o réu fosse a União, seria a AGU. E Maria, que não pode pagar advogado, procura a Defensoria Pública.',
        'Cuidado (pegadinha): a FGV diz que o Advogado-Geral da União precisa ser membro da carreira ou passar pelo Senado. Errado: é livre escolha do Presidente. Também diz que a inviolabilidade do advogado é absoluta, o que não é verdade.',
        'Como a FGV cobra: pergunta quem representa cada ente, os requisitos do chefe da AGU, a estabilidade do procurador estadual após três anos e o alcance da inviolabilidade do advogado.',
        'Resumo para revisar: AGU representa a União e assessora o Executivo; Advogado-Geral é de livre nomeação, maior de 35 anos; PGFN cobra a dívida ativa tributária da União; procurador estadual entra por concurso com OAB e é estável após 3 anos; advogado é inviolável nos limites da lei.'
      ],
      cai: [
        'Requisitos e forma de nomeação do Advogado-Geral da União.',
        'Quem executa a dívida ativa tributária da União (PGFN).',
        'Concurso e estabilidade dos procuradores estaduais.',
        'Inviolabilidade do advogado nos limites da lei.'
      ],
      macetes: [
        'Funções essenciais = "MAAD": Ministério Público, Advocacia Pública, Advocacia, Defensoria.',
        'AGU: "Presidente escolhe e Presidente tira", sem Senado.',
        'Dívida tributária da União = Fazenda Nacional (PGFN).',
        'Inviolável não é intocável: vale "nos limites da lei".'
      ],
      video: 'funções essenciais à justiça AGU advocacia pública OAB constitucional' },

    { id: 'co-mp', titulo: 'Ministério Público: princípios, garantias e funções', incidencia: 'alta',
      aula: [
        'Em uma frase: o Ministério Público é o fiscal da lei e defensor da sociedade; ele acusa nos crimes, protege interesses coletivos e não pertence a nenhum dos três Poderes.',
        'Conceito: é instituição permanente, essencial à função jurisdicional do Estado. Defende a ordem jurídica, o regime democrático e os interesses sociais e individuais indisponíveis, ou seja, aqueles direitos de que a pessoa não pode abrir mão, como a vida (art. 127).',
        'Princípios institucionais: unidade (os membros formam um só órgão sob uma chefia); indivisibilidade (um membro pode substituir o outro sem prejuízo do processo); independência funcional (o membro atua conforme sua convicção, sem receber ordens sobre como agir no caso) (art. 127, §1º).',
        'Promotor natural: ninguém será processado senão pela autoridade competente (art. 5º, LIII). Isso impede a escolha de um promotor "de encomenda" para um caso específico.',
        'Estrutura: o MP abrange o Ministério Público da União (MPF, MPT, MPM e MPDFT) e os Ministérios Públicos dos Estados (art. 128). O MP junto ao Tribunal de Contas é especial e não integra essa estrutura (art. 130).',
        'Procurador-Geral da República: chefe do MPU, nomeado pelo Presidente entre integrantes da carreira com mais de 35 anos, após aprovação do Senado por maioria absoluta. Mandato de 2 anos, permitida a recondução. A destituição pelo Presidente depende de autorização da maioria absoluta do Senado (art. 128, §§1º e 2º).',
        'Procurador-Geral de Justiça: chefe do MP estadual. A carreira forma lista tríplice e o Governador escolhe um nome. Mandato de 2 anos, permitida uma recondução. A destituição exige deliberação da maioria absoluta da Assembleia Legislativa (art. 128, §§3º e 4º).',
        'Garantias dos membros: vitaliciedade após dois anos de exercício; inamovibilidade, salvo interesse público por decisão do órgão colegiado competente, por maioria absoluta; irredutibilidade de subsídio (art. 128, §5º, I).',
        'Vedações: receber honorários ou custas; exercer advocacia; participar de sociedade empresária, na forma da lei; exercer outra função pública, salvo uma de magistério; atividade político-partidária; receber auxílios de pessoas ou entidades. Há também quarentena de três anos para advogar no juízo ou tribunal de onde saiu (art. 128, §§5º, II, e 6º).',
        'Funções: promover, de forma privativa, a ação penal pública; instaurar inquérito civil e propor ação civil pública; exercer o controle externo da atividade policial; requisitar diligências e a instauração de inquérito policial (art. 129). O MP pode investigar crimes por conta própria, respeitados os direitos do investigado (Tema 184 do STF).',
        'Representação judicial: o MP não pode representar judicialmente nem dar consultoria a entidades públicas (art. 129, IX). Isso é tarefa da advocacia pública.',
        'CNMP: o Conselho Nacional do Ministério Público tem 14 membros, é presidido pelo Procurador-Geral da República e controla a atuação administrativa e financeira do MP e os deveres de seus membros (art. 130-A).',
        'Exemplo: a promotora Lívia pede o arquivamento de um inquérito. O Procurador-Geral de Justiça não pode ordenar que ela denuncie contra sua convicção, por causa da independência funcional. Se for necessário, outro membro pode atuar no caso.',
        'Cuidado (pegadinha): PGR tem reconduções sem limite no texto; PGJ só tem uma recondução. O PGR não sai de lista tríplice obrigatória, mas o PGJ sai. E o MP não pode advogar para o Município, mesmo sem procurador.',
        'Como a FGV cobra: traz casos de substituição de promotores, de troca de chefia do MP e de promotor que quer advogar ou se candidatar, e pergunta qual regra se aplica.',
        'Resumo para revisar: princípios da unidade, indivisibilidade e independência funcional; PGR nomeado com aprovação do Senado e reconduções permitidas; PGJ escolhido em lista tríplice com uma recondução; ação penal pública é privativa do MP; MP pode investigar crimes (Tema 184).'
      ],
      cai: [
        'Diferenças entre a escolha e a destituição do PGR e do PGJ.',
        'Princípios institucionais aplicados a casos de substituição de promotores.',
        'Vedações do membro do MP, como advogar e ter atividade político-partidária.',
        'Poder de investigação criminal do MP e controle externo da polícia.'
      ],
      macetes: [
        'Princípios do MP = "UNI": UNidade, Indivisibilidade, Independência funcional.',
        'PGR: Presidente + Senado, sem limite de reconduções. PGJ: lista tríplice + Governador, só uma recondução.',
        'Quem tira o PGR é o Presidente com o Senado; quem tira o PGJ é a Assembleia.',
        'MP acusa e fiscaliza, mas não advoga para o Estado.'
      ],
      video: 'Ministério Público art 127 128 129 CF princípios garantias OAB' }
  ]);
})();
