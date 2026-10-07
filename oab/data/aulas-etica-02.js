/* Aulas adicionais – lote etica-02 (Inscrição na OAB: requisitos, estagiário, estrangeiro, inscrição principal e suplementar, licença e cancelamento, identidade profissional). */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);

  add('etica', [
    { id: 'et-requisitos', titulo: 'Requisitos da inscrição de advogado (art. 8º) e idoneidade moral', incidencia: 'alta',
      aula: [
        'Conceito: é a inscrição que transforma o bacharel em advogado. Só o inscrito na OAB pode praticar atos privativos de advocacia (art. 3º do Estatuto, Lei 8.906/94), e os atos praticados por quem não é inscrito são nulos (art. 4º). A inscrição de advogado é feita no Conselho Seccional do domicílio profissional (art. 10).',
        'Os 7 requisitos (art. 8º): I - capacidade civil; II - diploma ou certidão de graduação em Direito, de instituição oficialmente autorizada e credenciada; III - título de eleitor e quitação do serviço militar, se brasileiro; IV - aprovação no Exame de Ordem; V - não exercer atividade incompatível com a advocacia; VI - idoneidade moral; VII - prestar compromisso perante o Conselho. São cumulativos: faltou um, não há inscrição.',
        'Diploma (inciso II): quem ainda não tem o diploma registrado pode apresentar certidão de graduação acompanhada do histórico escolar (art. 23 do Regulamento Geral). O que se exige é ter concluído o curso: ser estudante, por mais adiantado que esteja, não basta para ser advogado.',
        'Título de eleitor e serviço militar (inciso III): a exigência vale só para brasileiro, porque estrangeiro não vota nem presta serviço militar no Brasil. É o único requisito ligado à nacionalidade.',
        'Exame de Ordem (inciso IV e §1º): é regulamentado por provimento do Conselho Federal (hoje, o Provimento 144/2011) e foi declarado constitucional pelo STF (RE 603.583). Podem prestá-lo estudantes do último ano ou do 9º e 10º semestres, mas a inscrição só vem depois da colação de grau. A aprovação não tem prazo de validade. Os postulantes oriundos da Magistratura e do Ministério Público são dispensados do Exame (Provimento 144/2011).',
        'Atividade incompatível (inciso V): quem ocupa cargo incompatível (art. 28: juiz, promotor, policial, servidor do Judiciário, militar da ativa, chefe do Executivo etc.) não obtém a inscrição enquanto estiver no cargo, mesmo aprovado no Exame. Impedimento (art. 30) não barra a inscrição: só limita a atuação.',
        'Idoneidade moral (inciso VI e §3º): a inidoneidade pode ser suscitada por QUALQUER pessoa, mas só é declarada por decisão de, no mínimo, 2/3 dos votos de TODOS os membros do conselho competente, em procedimento que observe as regras do processo disciplinar (contraditório e ampla defesa). Não basta maioria simples, nem 2/3 dos presentes.',
        'Crime infamante (§4º): não tem idoneidade moral quem foi condenado por crime infamante, salvo reabilitação judicial (arts. 93 a 95 do CP). A lei não lista os crimes infamantes: são os que revelam desonra e baixeza moral, avaliados caso a caso. A barreira não é perpétua: a reabilitação judicial a afasta.',
        'Súmulas do Conselho Federal (2019): a prática de violência contra a mulher (Súmula 09/2019/COP), contra crianças, adolescentes, idosos e pessoas com deficiência (Súmula 10/2019/COP) e contra pessoas LGBTI+ (Súmula 11/2019/COP) é fator apto a demonstrar a falta de idoneidade moral, INDEPENDENTEMENTE da instância criminal, cabendo ao Conselho Seccional analisar cada caso. Ou seja: não é preciso condenação criminal transitada em julgado.',
        'Compromisso (inciso VII): é prestado perante o Conselho Seccional, a Diretoria ou o Conselho da Subseção, com o texto do art. 20 do Regulamento Geral. É ato solene e personalíssimo, por isso indelegável (art. 20, §1º, do RG): não pode ser prestado por procurador, nem com poderes especiais.',
        'Exemplo: Júlia colou grau, foi aprovada no Exame e é técnica do Tribunal de Justiça. Ela tem diploma e aprovação, mas falta o inciso V: enquanto ocupar o cargo, a inscrição será indeferida. Já Renan, condenado anos atrás por crime infamante e judicialmente reabilitado, não está barrado pelo §4º.',
        'Como a FGV cobra: casos de bacharel com processo criminal em curso ou com histórico de violência doméstica (idoneidade x presunção de inocência), o quórum de 2/3 de todos os membros, a ressalva da reabilitação judicial e o compromisso feito por procuração.'
      ],
      cai: [
        'Quórum para declarar a inidoneidade: no mínimo 2/3 de TODOS os membros do conselho, em procedimento com as garantias do processo disciplinar (art. 8º, §3º)',
        'Inidoneidade por violência contra a mulher, criança, idoso, pessoa com deficiência ou LGBTI+ sem condenação criminal (Súmulas 09, 10 e 11/2019/COP)',
        'Crime infamante afasta a idoneidade, salvo reabilitação judicial (art. 8º, §4º)',
        'Título de eleitor e quitação militar só para brasileiro; compromisso indelegável (art. 20, §1º, do RG)'
      ],
      macetes: [
        'Os 7 incisos em ordem: o advogado é Capaz, Diplomado, Eleitor (e reservista), Examinado, Compatível, Idôneo e Compromissado.',
        'Inidoneidade = 2/3 de TODOS, não dos presentes. Quem pode levantar a questão? QUALQUER pessoa.',
        'Crime infamante tira a idoneidade só até a reabilitação judicial.',
        'Violência doméstica e contra vulneráveis: a OAB julga a idoneidade sem esperar o juiz criminal.',
        'Compromisso é juramento: sai da boca do próprio bacharel, nunca da do procurador.'
      ],
      video: 'OAB ética requisitos da inscrição art 8 estatuto idoneidade moral crime infamante súmula 9 2019' },

    { id: 'et-estagiario', titulo: 'Inscrição de estagiário: requisitos, prazos e atos permitidos', incidencia: 'alta',
      aula: [
        'Conceito: estagiário é o estudante (ou bacharel) inscrito no quadro de estagiários da OAB. Ele pratica atos de advocacia em conjunto com o advogado e sob a responsabilidade deste (art. 3º, §2º, do Estatuto). Não é um "advogado júnior": sozinho, faz muito pouco.',
        'Requisitos (art. 9º): os incisos I, III, V, VI e VII do art. 8º (capacidade civil, título de eleitor e quitação militar se brasileiro, não exercer atividade incompatível, idoneidade moral e compromisso) MAIS a admissão em estágio profissional de advocacia. Ficam de fora o inciso II (diploma) e o IV (Exame de Ordem), porque o estagiário ainda está se formando.',
        'Onde se inscreve (art. 9º, §2º): no Conselho Seccional em cujo território se localiza o curso jurídico. Não importa onde o aluno mora nem onde faz o estágio. Compare: o advogado se inscreve onde tem o domicílio profissional (art. 10).',
        'Duração e quem oferece (art. 9º, §1º): o estágio dura dois anos, realizado nos últimos anos do curso, e pode ser mantido pela própria instituição de ensino, pelos Conselhos da OAB ou por setores, órgãos jurídicos e escritórios de advocacia credenciados pela OAB. O estudo do Estatuto e do Código de Ética e Disciplina é obrigatório.',
        'Bacharel estagiário (art. 9º, §4º): o estágio também pode ser cumprido por bacharel em Direito que queira se inscrever na Ordem. Ex.: Caio colou grau, ainda não passou no Exame e pode se inscrever como estagiário.',
        'Aluno com atividade incompatível (art. 9º, §3º): pode frequentar o estágio ministrado pela instituição de ensino, para fins de aprendizagem, mas é VEDADA a sua inscrição na OAB. Ex.: Patrícia, técnica judiciária e aluna de Direito, faz o estágio no núcleo de prática da faculdade, mas não recebe carteira de estagiária.',
        'Atos em conjunto (art. 29 do Regulamento Geral): os atos de advocacia do art. 1º do Estatuto (petição inicial, contestação, recursos, consultoria) podem ser subscritos pelo estagiário inscrito, sempre em conjunto com o advogado (ou com o defensor público). Autorização escrita do advogado não permite que o estagiário assine sozinho.',
        'Atos isolados (art. 29, §1º, do RG): sob a responsabilidade do advogado, o estagiário pode sozinho: (I) retirar e devolver autos em cartório, assinando a carga; (II) obter certidões de peças ou autos de processos em curso ou findos; (III) assinar petições de juntada de documentos a processos judiciais ou administrativos. Para atos extrajudiciais, pode comparecer sozinho se receber autorização ou substabelecimento do advogado (art. 29, §2º).',
        'Identidade e prazos (art. 35 do RG): o cartão traz em destaque "Identidade de Estagiário" e o prazo de validade, que não pode ultrapassar três anos nem ser prorrogado. Ele perde a validade imediatamente após o compromisso como advogado.',
        'Responsabilidade disciplinar: o estagiário se submete ao Estatuto e ao Código de Ética. Praticar ato excedente de sua habilitação é infração (art. 34, XXIX), punida com censura (art. 36, I).',
        'Como a FGV cobra: o que o estagiário pode fazer sozinho (carga, certidões, juntada de documentos), em que Seccional se inscreve (a do curso), o aluno que exerce atividade incompatível e a validade do cartão.'
      ],
      cai: [
        'Requisitos do estagiário: sem diploma e sem Exame (art. 9º, I, remetendo aos incisos I, III, V, VI e VII do art. 8º)',
        'Inscrição no Conselho Seccional do curso jurídico, e não onde mora ou estagia (art. 9º, §2º)',
        'Aluno com atividade incompatível: estágio na faculdade sim, inscrição na OAB não (art. 9º, §3º)',
        'Atos isolados do art. 29, §1º, do Regulamento Geral e infração do art. 34, XXIX (censura)'
      ],
      macetes: [
        'Estagiário pula o 2 e o 4: não precisa de diploma (II) nem de Exame (IV).',
        'Estagiário se inscreve onde ESTUDA; advogado, onde TRABALHA.',
        'Sozinho, o estagiário faz "CCJ": Carga dos autos, Certidões e Juntada de documentos.',
        'Cartão de estagiário: no máximo 3 anos, sem prorrogação, e morre no compromisso de advogado.',
        'Aluno incompatível assiste à prática da faculdade, mas não ganha carteira.'
      ],
      video: 'OAB ética inscrição de estagiário art 9 estatuto atos do estagiário regulamento geral art 29' },

    { id: 'et-estrangeiro', titulo: 'Inscrição de estrangeiro e de diplomado no exterior', incidencia: 'media',
      aula: [
        'Conceito: a advocacia no Brasil não é privativa de brasileiros. Para a inscrição, o que pesa não é a nacionalidade, e sim ONDE a pessoa se formou em Direito.',
        'Estrangeiro graduado no Brasil: cumpre os mesmos requisitos do art. 8º, inclusive o Exame de Ordem, com uma única diferença: não apresenta título de eleitor nem quitação do serviço militar, exigidos só "se brasileiro" (art. 8º, III).',
        'Graduado no exterior (art. 8º, §2º): o estrangeiro ou o brasileiro que não se graduou em Direito no Brasil deve provar o título obtido em instituição estrangeira, devidamente REVALIDADO, além de atender aos demais requisitos do art. 8º. A revalidação é feita por universidade pública brasileira que tenha curso do mesmo nível e área (art. 48, §2º, da Lei 9.394/96).',
        'Brasileiro formado no exterior: soma tudo. Diploma revalidado, Exame de Ordem, título de eleitor e quitação militar, idoneidade, compatibilidade e compromisso. Ter estudado fora não dispensa nada.',
        'Advogado no país de origem: ser advogado habilitado em outro país NÃO dispensa a revalidação nem o Exame de Ordem. Ex.: Pablo, argentino, advogado em Buenos Aires, só advoga plenamente no Brasil se revalidar o diploma e for aprovado no Exame (mas sem título de eleitor nem quitação militar).',
        'Exceção do advogado português (art. 21 do Regulamento Geral): regra de reciprocidade. O advogado de nacionalidade portuguesa, em situação regular na Ordem dos Advogados Portugueses, pode inscrever-se na OAB provando só os incisos I, V, VI e VII do art. 8º (capacidade, não exercer atividade incompatível, idoneidade e compromisso). É regra específica para Portugal: não se estende a advogados de outros países.',
        'Consultor em direito estrangeiro (Provimento 91/2000): o profissional estrangeiro regularmente admitido a advogar em seu país pode, sem se inscrever como advogado, obter da OAB autorização para atuar como consultor em direito estrangeiro. A autorização é sempre concedida a título PRECÁRIO.',
        'Limites do consultor: ele atua EXCLUSIVAMENTE em consultoria sobre o direito do seu país ou estado de origem. São vedados, mesmo com o concurso de advogados ou sociedades de advogados brasileiros inscritos: (I) o procuratório judicial; (II) a consultoria ou assessoria em direito brasileiro.',
        'Exemplo: Emily, advogada inglesa autorizada pela OAB como consultora, pode orientar uma empresa paulista sobre um contrato regido pelo direito inglês. Não pode opinar sobre a CLT nem assinar, ao lado de um advogado brasileiro, uma petição em juízo.',
        'Como a FGV cobra: estrangeiro que pretende advogar sem revalidar o diploma ou sem fazer o Exame, dispensa do título de eleitor e da quitação militar para estrangeiro, e os limites do consultor em direito estrangeiro.'
      ],
      cai: [
        'Diploma estrangeiro exige revalidação e não dispensa o Exame de Ordem (art. 8º, §2º)',
        'Título de eleitor e quitação militar só se exigem de brasileiro (art. 8º, III)',
        'Consultor em direito estrangeiro: autorização precária, só direito do país de origem, sem atuação judicial nem consultoria em direito brasileiro (Provimento 91/2000)',
        'Advogado português: inscrição pelos incisos I, V, VI e VII (art. 21 do Regulamento Geral)'
      ],
      macetes: [
        'Diploma de fora? Revalida + Exame. Nacionalidade não pesa; pesa ONDE se formou.',
        'Título de eleitor e reservista: só se cobra de brasileiro.',
        'Consultor estrangeiro fala só do direito da sua terra e nunca vai ao fórum, nem acompanhado de advogado brasileiro.',
        'Português habilitado em Portugal: reciprocidade, e o pedido segue os incisos I, V, VI e VII.'
      ],
      video: 'OAB ética inscrição de estrangeiro diploma revalidado consultor em direito estrangeiro provimento 91 2000' },

    { id: 'et-suplementar', titulo: 'Inscrição principal, suplementar e transferência', incidencia: 'alta',
      aula: [
        'Conceito: o art. 10 do Estatuto organiza três figuras. A inscrição PRINCIPAL (a "casa" do advogado), a inscrição SUPLEMENTAR (para quem atua com habitualidade em outro Estado) e a TRANSFERÊNCIA (para quem muda de Estado de vez).',
        'Inscrição principal (art. 10, caput): é feita no Conselho Seccional em cujo território o advogado PRETENDE estabelecer o seu domicílio profissional. Não importa onde ele se formou, onde fez o Exame ou onde mora. Cada advogado tem uma única inscrição principal.',
        'Domicílio profissional (art. 10, §1º): é a sede principal da atividade de advocacia. Só na dúvida prevalece o domicílio da pessoa física do advogado.',
        'Atuação nacional: a inscrição principal já permite advogar em todo o território nacional (art. 7º, I). Atuar eventualmente em outro Estado não exige nada além dela.',
        'Inscrição suplementar (art. 10, §2º): é obrigatória nos Conselhos Seccionais em cujo território o advogado passar a exercer HABITUALMENTE a profissão. Habitualidade = intervenção JUDICIAL que EXCEDER cinco causas por ano. Com até cinco causas por ano naquele Estado, não precisa; a partir da sexta, precisa. Como a lei fala em intervenção judicial, consultoria e atos extrajudiciais não entram na conta. O advogado pode ter várias suplementares, ao lado da única principal.',
        'Transferência (art. 10, §3º): ocorre quando há mudança EFETIVA de domicílio profissional para outra unidade federativa. A principal muda de Seccional; não se faz nova inscrição nem novo Exame.',
        'Controle da regularidade (art. 10, §4º): se o Conselho Seccional, ao analisar pedido de transferência ou de inscrição suplementar, verificar vício ou ilegalidade na inscrição principal, deve SUSPENDER o pedido e REPRESENTAR ao Conselho Federal. Ele não cancela, por conta própria, a inscrição feita por outro Seccional.',
        'Filial de sociedade (art. 15, §5º): a filial de sociedade de advogados em outro Estado é averbada no registro da sociedade e arquivada no Conselho Seccional onde se instalar, e os sócios (inclusive o titular da sociedade unipessoal) ficam obrigados à inscrição suplementar.',
        'Poder disciplinar (art. 70): pune o Conselho Seccional em cuja base territorial ocorreu a infração, ainda que o advogado tenha inscrição principal em outro Estado (salvo falta cometida perante o Conselho Federal).',
        'Exemplo: Larissa, formada e aprovada no Exame em São Paulo, abre a sede do escritório em Niterói: inscrição principal no Rio de Janeiro. Se atuar em três processos por ano em Minas, nada muda; com sete, precisa de suplementar em Minas. Se fechar Niterói e mudar a sede para Belo Horizonte, pede transferência.',
        'Como a FGV cobra: contagem das causas (mais de cinco por ano), diferença entre suplementar e transferência, critério do domicílio profissional e a providência do §4º (suspender e representar ao Conselho Federal).'
      ],
      cai: [
        'Habitualidade: intervenção judicial que exceder cinco causas por ano exige suplementar (art. 10, §2º)',
        'Mudança efetiva de domicílio profissional para outra UF exige transferência, não suplementar (art. 10, §3º)',
        'Domicílio profissional = sede principal da atividade; na dúvida, domicílio da pessoa física (art. 10, §1º)',
        'Vício na principal: suspende-se o pedido e representa-se ao Conselho Federal (art. 10, §4º)',
        'Sócios de filial em outro Estado precisam de inscrição suplementar (art. 15, §5º)'
      ],
      macetes: [
        'Principal = onde fica o escritório-sede. Na dúvida, onde o advogado mora.',
        'Até 5 causas por ano no outro Estado, tudo bem; a 6ª pede suplementar.',
        'Mudou de vez? TRANSFERE. Só frequenta outro Estado com habitualidade? SUPLEMENTA.',
        'Vício na principal: o Seccional PARA (suspende) e AVISA Brasília (representa ao Conselho Federal).',
        'Infração em outro Estado: pune o Seccional do lugar da falta (art. 70).'
      ],
      video: 'OAB ética inscrição principal suplementar transferência art 10 estatuto cinco causas por ano' },

    { id: 'licenca', titulo: 'Licença e cancelamento da inscrição', incidencia: 'alta',
      aula: [
        'Conceito: LICENÇA é afastamento temporário, em que a inscrição continua existindo e o número é mantido. CANCELAMENTO é a extinção da inscrição: para voltar, só com novo pedido e novo número. A chave da prova é perguntar: a situação é temporária ou definitiva?',
        'Licença (art. 12): licencia-se o profissional que (I) assim o requerer, por motivo justificado; (II) passar a exercer, em caráter TEMPORÁRIO, atividade incompatível com a advocacia; (III) sofrer doença mental considerada CURÁVEL.',
        'Cancelamento (art. 11): cancela-se a inscrição do profissional que (I) assim o requerer; (II) sofrer penalidade de exclusão; (III) falecer; (IV) passar a exercer, em caráter DEFINITIVO, atividade incompatível; (V) perder qualquer dos requisitos necessários à inscrição.',
        'Temporário x definitivo: eleito prefeito ou nomeado secretário de Estado (mandato ou cargo em comissão) = licença. Tomou posse em cargo efetivo de juiz, promotor, delegado ou servidor do Judiciário = cancelamento.',
        'Requerimento: na licença a pedido, a lei exige motivo justificado; no cancelamento a pedido, não exige motivo nenhum.',
        'Cancelamento de ofício (art. 11, §1º): nas hipóteses de exclusão, falecimento e atividade incompatível definitiva, o cancelamento é promovido de ofício pelo conselho competente ou em virtude de comunicação feita por qualquer pessoa.',
        'Volta após o cancelamento (art. 11, §2º): o novo pedido de inscrição NÃO restaura o número anterior, e o interessado prova apenas os incisos I, V, VI e VII do art. 8º (capacidade civil, não exercer atividade incompatível, idoneidade moral e compromisso). Não precisa repetir o Exame de Ordem nem reapresentar o diploma.',
        'Volta após a exclusão (art. 11, §3º): além dos mesmos requisitos, o novo pedido deve vir acompanhado de provas de reabilitação. A reabilitação pode ser requerida um ano após o cumprimento da sanção, com provas efetivas de bom comportamento; se a sanção resultou de crime, depende também da reabilitação criminal (art. 41).',
        'Efeitos da licença: o licenciado continua inscrito, mas não pode advogar. Os atos que praticar são nulos (art. 4º, parágrafo único, que alcança o advogado impedido, suspenso, licenciado ou que passar a exercer atividade incompatível), sem prejuízo da responsabilidade disciplinar.',
        'Licença não é suspensão: a suspensão é sanção disciplinar aplicada por infração (art. 37); a licença não tem caráter punitivo. Doença, mandato eletivo ou cargo temporário nunca geram suspensão.',
        'Exemplo: Marina, advogada, tomou posse como juíza: inscrição cancelada (art. 11, IV). Aposentada anos depois, pode pedir nova inscrição, com número novo, provando os incisos I, V, VI e VII, sem novo Exame. Já Lucas, eleito prefeito, apenas se licencia e volta com o mesmo número ao fim do mandato.',
        'Como a FGV cobra: classificar a situação (licença ou cancelamento), doença mental curável, o número de inscrição após o cancelamento, os requisitos do novo pedido e a reabilitação do excluído.'
      ],
      cai: [
        'Atividade incompatível temporária = licença; definitiva = cancelamento (arts. 11, IV, e 12, II)',
        'Doença mental curável gera licença (art. 12, III)',
        'Novo pedido após cancelamento: número novo e prova só dos incisos I, V, VI e VII do art. 8º (art. 11, §2º)',
        'Excluído só volta com provas de reabilitação (art. 11, §3º, e art. 41)',
        'Cancelamento de ofício nos casos de exclusão, falecimento e incompatibilidade definitiva (art. 11, §1º)'
      ],
      macetes: [
        'Temporário = Licença; Definitivo = Cancelamento.',
        'Licença a pedido exige motivo; cancelamento a pedido, não.',
        'Doença mental CURÁVEL: Licença, porque Logo volta.',
        'Cancelou e voltou: número NOVO e só "Capaz, Compatível, Idôneo e Compromissado" (I, V, VI e VII). Nada de novo Exame.',
        'Excluído volta com reabilitação: 1 ano depois de cumprir a sanção.'
      ],
      video: 'OAB ética licença e cancelamento da inscrição art 11 art 12 estatuto da advocacia' },

    { id: 'et-identidade', titulo: 'Documento de identidade profissional e nome social', incidencia: 'media',
      aula: [
        'Conceito (art. 13): o documento de identidade profissional, na forma do Regulamento Geral, é de uso OBRIGATÓRIO no exercício da atividade de advogado ou de estagiário e constitui prova de identidade civil para TODOS os fins legais. Vale como documento de identidade em qualquer lugar, e não só no fórum.',
        'Espécies (art. 32 do Regulamento Geral): são documentos de identidade profissional a carteira e o cartão emitidos pela OAB. O uso do cartão dispensa o da carteira.',
        'Identidade do estagiário (art. 35 do RG): tem o mesmo modelo do cartão do advogado, com a indicação "Identidade de Estagiário" em destaque e o prazo de validade, que não pode passar de três anos nem ser prorrogado. Perde a validade imediatamente após o compromisso como advogado.',
        'Nome e número nos documentos (art. 14): é obrigatória a indicação do nome e do número de inscrição em todos os documentos assinados pelo advogado no exercício de sua atividade. Petição, parecer e contrato: nome + número da OAB.',
        'Publicidade (art. 14, parágrafo único): é vedado anunciar ou divulgar qualquer atividade ligada à advocacia, ou usar a expressão "escritório de advocacia", sem indicar expressamente o nome e o número de inscrição dos advogados que o integram ou o número de registro da sociedade de advogados na OAB.',
        'Nome social: em 2016, o Conselho Federal alterou o Regulamento Geral para admitir o nome social na identidade profissional. Nome social é a designação pela qual a pessoa travesti ou transexual se identifica e é socialmente reconhecida, e é incluído na identificação do advogado mediante requerimento.',
        'O que NÃO se exige para o nome social: alteração prévia do registro civil, cirurgia, laudo médico ou decisão judicial. Basta o requerimento à OAB.',
        'Nome social x retificação do registro: são coisas diferentes. O STF, na ADI 4275 (2018), reconheceu à pessoa transgênero o direito de alterar prenome e gênero diretamente no registro civil, sem cirurgia e sem ação judicial. Feita a retificação, o advogado atualiza seus dados na OAB e passa a usar o novo nome civil.',
        'Exemplo: Vitória, advogada transexual, ainda tem nome masculino no registro civil. Ela pode requerer à OAB a inclusão do nome social na identidade profissional, sem antes mudar o registro. Se depois retificar o registro em cartório, atualiza o cadastro com o novo nome civil.',
        'Como a FGV cobra: a identidade da OAB como prova de identidade civil para todos os fins, a obrigação de indicar nome e número de inscrição, a validade do cartão de estagiário e o nome social independente de alteração do registro civil.'
      ],
      cai: [
        'Identidade profissional: uso obrigatório e prova de identidade civil para todos os fins legais (art. 13)',
        'Nome e número de inscrição obrigatórios em todo documento assinado no exercício da advocacia (art. 14)',
        'Cartão de estagiário: validade máxima de três anos, sem prorrogação (art. 35 do Regulamento Geral)',
        'Nome social na identidade profissional mediante requerimento, sem alteração prévia do registro civil'
      ],
      macetes: [
        'Carteira da OAB = RG para todos os fins legais.',
        'Assinou como advogado? Nome + número da OAB, sempre.',
        'Cartão dispensa carteira.',
        'Nome social: basta requerer; não precisa mudar registro, nem cirurgia, nem juiz.'
      ],
      video: 'OAB ética documento de identidade profissional art 13 art 14 estatuto nome social advogado' }
  ]);
})();
