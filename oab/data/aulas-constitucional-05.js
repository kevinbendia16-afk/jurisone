/* Aulas adicionais – lote constitucional-05 (Direitos e garantias fundamentais: garantias penais, prisão e tratados). */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);

  add('constitucional', [
    { id: 'co-garantias-penais', titulo: 'Garantias penais: legalidade, irretroatividade, individualização e penas proibidas', incidencia: 'alta',
      aula: [
        'Em uma frase: a Constituição protege a pessoa contra o poder de punir do Estado; só é crime o que a lei diz antes, a pena é pessoal e algumas penas são proibidas em qualquer caso.',
        'Conceito: garantias penais são regras do art. 5º que limitam o Estado na hora de criar crimes e aplicar penas. Elas são cláusulas pétreas, ou seja, nem emenda constitucional pode aboli-las (art. 60, §4º, IV).',
        'Legalidade (reserva legal): não existe crime nem pena sem lei anterior que os defina. A lei tem que ser formal, feita pelo Congresso. Por isso medida provisória não pode tratar de Direito Penal (art. 5º, XXXIX; art. 62, §1º, I, b).',
        'Anterioridade: a lei penal precisa existir antes do fato. Quem praticou a conduta quando ela ainda não era crime não pode ser punido por lei posterior (art. 5º, XXXIX).',
        'Irretroatividade e retroatividade benéfica: a lei penal mais severa não volta ao passado. A lei mais benéfica volta, mesmo com sentença já transitada em julgado, ou seja, sem mais recurso (art. 5º, XL). Exemplo de lei benéfica: a que deixa de considerar a conduta crime (abolitio criminis).',
        'Personalidade da pena (intranscendência): a pena não passa da pessoa do condenado. Os herdeiros não cumprem pena. Mas a obrigação de reparar o dano e o perdimento de bens podem alcançar os sucessores até o limite da herança (art. 5º, XLV).',
        'Individualização da pena: cada condenado recebe a pena adequada ao seu caso. Por isso o STF derrubou o regime integralmente fechado para crimes hediondos (HC 82.959) e a imposição automática de regime inicial fechado (HC 111.840). A CF lista penas possíveis: privação ou restrição da liberdade, perda de bens, multa, prestação social alternativa e suspensão ou interdição de direitos (art. 5º, XLVI).',
        'Penas proibidas: não haverá pena de morte (salvo guerra declarada, art. 84, XIX), de caráter perpétuo, de trabalhos forçados, de banimento (expulsar o brasileiro do país) nem cruéis (art. 5º, XLVII). A exceção da guerra declarada vale só para a pena de morte.',
        'Crimes inafiançáveis e imprescritíveis: racismo e ação de grupos armados contra a ordem constitucional são inafiançáveis e imprescritíveis. Tortura, tráfico, terrorismo e hediondos são inafiançáveis e insuscetíveis de graça ou anistia, mas prescrevem (art. 5º, XLII, XLIII e XLIV). O STF equiparou a injúria racial ao racismo, e a homotransfobia também foi enquadrada como racismo (ADO 26).',
        'Outras garantias: a pena é cumprida em estabelecimento conforme a natureza do crime, a idade e o sexo (art. 5º, XLVIII); presidiárias podem ficar com os filhos durante a amamentação (art. 5º, L); e ninguém é privado da liberdade ou dos bens sem devido processo legal (art. 5º, LIV).',
        'Exemplo: Carla vendeu um produto em 2020. Em 2023 uma lei tornou crime essa venda. Carla não pode ser processada, porque a lei não existia na data do fato. Se depois outra lei reduzir a pena de um crime que ela cometeu, a redução a beneficia, mesmo já condenada.',
        'Cuidado (pegadinha): o mandado de criminalização da tortura não a torna imprescritível. Imprescritíveis são só racismo e ação de grupos armados. Repita: "racismo e grupos armados nunca prescrevem".',
        'Como a FGV cobra: com caso de lei penal nova aplicada a fato antigo, herdeiro cobrado por multa ou por reparação, emenda que cria prisão perpétua e listas de crimes inafiançáveis e imprescritíveis.',
        'Resumo para revisar: sem lei anterior não há crime; lei penal só retroage para beneficiar; a pena não passa do condenado, mas a reparação alcança a herança; morte só em guerra declarada e nunca perpétua, forçados, banimento ou cruéis; imprescritíveis são só racismo e grupos armados.'
      ],
      cai: [
        'Lei penal mais grave aplicada a fato anterior: é vedado; a mais benéfica retroage até após o trânsito em julgado (art. 5º, XL).',
        'Herdeiro do condenado: não cumpre pena, mas responde pela reparação do dano até o limite da herança (art. 5º, XLV).',
        'Quais crimes são imprescritíveis: só racismo e ação de grupos armados (art. 5º, XLII e XLIV).',
        'Medida provisória que cria crime: inconstitucional (art. 62, §1º, I, b).',
        'Emenda que institui prisão perpétua ou pena de morte fora da guerra declarada: viola cláusula pétrea.'
      ],
      macetes: [
        'Imprescritíveis: "RAÇA e AÇÃO" = RAcismo e AÇÃO de grupos armados.',
        'Inafiançáveis sem graça nem anistia: "3TH" = Tortura, Tráfico, Terrorismo e Hediondos.',
        'Penas proibidas: "MOR-PER-TRA-BAN-CRU" (morte, perpétua, trabalhos forçados, banimento, cruéis); só a morte tem exceção, na guerra declarada.',
        'Lei penal no tempo: "piorou, não volta; melhorou, volta sempre".'
      ],
      video: 'garantias penais art 5 CF legalidade irretroatividade penas proibidas OAB' },

    { id: 'co-prisao', titulo: 'Prisão, presunção de inocência e direitos do preso', incidencia: 'alta',
      aula: [
        'Em uma frase: ninguém é considerado culpado antes da condenação definitiva, e só se prende alguém em flagrante ou por ordem escrita e fundamentada de um juiz.',
        'Para que serve: estas regras protegem a liberdade, que é a regra. A prisão antes da condenação é exceção e precisa de motivo concreto.',
        'Quem pode mandar prender: só em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente. A exceção são as transgressões e crimes propriamente militares, definidos em lei (art. 5º, LXI). Delegado não decreta prisão; ele lavra o flagrante e representa ao juiz.',
        'Comunicação da prisão: a prisão e o local onde a pessoa está devem ser comunicados imediatamente ao juiz e à família do preso ou a quem ele indicar (art. 5º, LXII). Em até 24 horas o preso deve ser levado à audiência de custódia (art. 310 do CPP).',
        'Direitos do preso: ele deve ser informado dos seus direitos, entre eles o de ficar calado, e tem direito à assistência da família e de advogado (art. 5º, LXIII). Também tem direito de saber quem o prendeu e quem o interrogou (art. 5º, LXIV). Ficar calado não pode ser usado contra ele.',
        'Prisão ilegal e liberdade provisória: a prisão ilegal deve ser relaxada imediatamente pelo juiz (art. 5º, LXV). E ninguém fica preso quando a lei admite liberdade provisória, com ou sem fiança (art. 5º, LXVI).',
        'Presunção de inocência: ninguém é considerado culpado até o trânsito em julgado da sentença penal condenatória, ou seja, até não caber mais recurso (art. 5º, LVII). Nas ADCs 43, 44 e 54 (2019), o STF proibiu a execução provisória da pena após a condenação em segunda instância.',
        'Exceção do júri: no Tema 1068 (2024), o STF decidiu que a condenação pelo Tribunal do Júri pode ser executada imediatamente, por causa da soberania dos veredictos (art. 5º, XXXVIII, c). Fora do júri, vale a regra das ADCs.',
        'Prisão cautelar continua possível: a presunção de inocência não impede prisão preventiva ou temporária. Elas não são pena; servem para proteger o processo e exigem fundamentação concreta.',
        'Prisão civil por dívida: é proibida. A CF permite só duas: devedor de pensão alimentícia que deixa de pagar de forma voluntária e inescusável, e depositário infiel (art. 5º, LXVII). Mas o STF considera ilícita a prisão do depositário infiel, qualquer que seja a modalidade (Súmula Vinculante 25), por causa do Pacto de São José da Costa Rica.',
        'Identificação criminal: quem já tem identificação civil, como RG, não será submetido à identificação criminal (fotos e digitais), salvo nas hipóteses da lei (art. 5º, LVIII; Lei 12.037/09).',
        'Uso de algemas: só em caso de resistência, fundado receio de fuga ou perigo, com justificativa escrita (Súmula Vinculante 11). Sem isso, há nulidade e responsabilidade de quem algemou.',
        'Exemplo: Diego foi condenado por furto em primeira instância e o Tribunal confirmou. Ainda cabe recurso especial. Ele não pode começar a cumprir a pena só por isso. Só pode ser preso agora se houver preventiva fundamentada.',
        'Cuidado (pegadinha): a CF ainda menciona o depositário infiel, mas a prisão dele é proibida (SV 25). Já a do devedor de alimentos continua válida. E a execução imediata vale só para condenação do júri.',
        'Como a FGV cobra: com prisão decretada por delegado, condenado em segunda instância mandado prender, prisão de depositário judicial, preso algemado sem justificativa e preso não avisado do direito ao silêncio.',
        'Resumo para revisar: prisão só em flagrante ou por ordem judicial escrita e fundamentada; preso tem direito ao silêncio, a advogado e à família; culpa só após trânsito em julgado, salvo condenação do júri (Tema 1068); prisão civil só do devedor de alimentos (SV 25); algemas só com justificativa escrita (SV 11).'
      ],
      cai: [
        'Prisão do depositário infiel: ilícita em qualquer modalidade (SV 25); a do devedor de alimentos é válida.',
        'Execução da pena após condenação em segunda instância: vedada (ADCs 43, 44 e 54); exceção do júri (Tema 1068).',
        'Prisão decretada por autoridade que não é juiz fora do flagrante: ilegal e deve ser relaxada (art. 5º, LXI e LXV).',
        'Uso de algemas sem justificativa escrita: viola a SV 11.'
      ],
      macetes: [
        'Prisão civil: "pensão prende, depósito não" (SV 25).',
        'Quem prende: "flagrante ou juiz" (exceção: militar).',
        'Presunção de inocência: "culpado só no fim da fila de recursos", com a exceção do júri.',
        'Ilegal é RELAXADA; legal sem necessidade vira LIBERDADE PROVISÓRIA.'
      ],
      video: 'prisão presunção de inocência direitos do preso SV 25 SV 11 OAB constitucional' },

    { id: 'co-tratados-df', titulo: 'Tratados de direitos humanos e o §3º do art. 5º', incidencia: 'media',
      aula: [
        'Em uma frase: o tratado internacional de direitos humanos aprovado como emenda vale como Constituição; aprovado do jeito comum, fica acima das leis e abaixo da Constituição.',
        'Conceito: tratado é um acordo escrito entre países. No Brasil, o Presidente celebra o tratado e o Congresso o aprova por decreto legislativo (art. 84, VIII; art. 49, I). Depois vem a ratificação e o decreto presidencial de promulgação.',
        'Cláusula de abertura: os direitos da CF não excluem outros vindos dos princípios dela ou de tratados de que o Brasil seja parte (art. 5º, §2º). Ou seja, a lista do art. 5º não é fechada.',
        'O rito do §3º: tratados e convenções sobre direitos humanos aprovados em cada Casa do Congresso, em dois turnos, por três quintos dos votos dos membros, equivalem a emendas constitucionais (art. 5º, §3º, incluído pela EC 45/04). É o mesmo quórum da emenda.',
        'Status supralegal: o tratado de direitos humanos aprovado sem esse rito especial tem status supralegal. Fica abaixo da Constituição, mas acima das leis comuns (RE 466.343). Por isso a lei que contrariar o tratado deixa de ter aplicação.',
        'Exemplo do Pacto de São José: a Convenção Americana só permite prisão civil do devedor de alimentos. Como ela é supralegal, paralisou as leis que regulavam a prisão do depositário infiel. Daí a Súmula Vinculante 25.',
        'Tratados comuns: tratados que não são de direitos humanos (por exemplo, comerciais) entram com status de lei ordinária. Em matéria tributária há regra própria no art. 98 do CTN.',
        'Quais já têm status de emenda: a Convenção sobre os Direitos das Pessoas com Deficiência e seu Protocolo (Decreto 6.949/09); o Tratado de Marraqueche, sobre acesso a obras por pessoas cegas (Decreto 9.522/18); e a Convenção Interamericana contra o Racismo (Decreto 10.932/22).',
        'Controle de convencionalidade: é checar se uma lei respeita os tratados de direitos humanos. Juízes podem fazer isso no caso concreto. Se o tratado tem status de emenda, ele também serve de parâmetro para o controle de constitucionalidade no STF.',
        'Tribunal Penal Internacional: o Brasil se submete à jurisdição do TPI, a cuja criação manifestou adesão (art. 5º, §4º). Atenção: a CF proíbe extraditar brasileiro nato, mas a entrega ao TPI é tratada como coisa diferente da extradição.',
        'Exemplo: Renata, advogada, defende um cliente cuja prisão civil por dívida de contrato de depósito foi decretada. Ela alega que o Pacto de São José, com status supralegal, impede essa prisão, e cita a SV 25. O argumento está correto.',
        'Cuidado (pegadinha): o tratado de direitos humanos aprovado antes da EC 45/04 não virou emenda automaticamente. O Pacto de São José, por exemplo, é supralegal, não constitucional. E tratado do rito comum não está acima da Constituição.',
        'Como a FGV cobra: perguntando a hierarquia de um tratado conforme o rito de aprovação, o quórum do §3º, o caso do depositário infiel e quais convenções têm status de emenda.',
        'Resumo para revisar: direitos humanos com rito de emenda (2 turnos, 3/5, nas duas Casas) = emenda; direitos humanos sem esse rito = supralegal; tratado comum = lei ordinária; Pacto de São José é supralegal e afastou a prisão do depositário (SV 25); o Brasil aceita o TPI (art. 5º, §4º).'
      ],
      cai: [
        'Hierarquia do tratado de direitos humanos aprovado por maioria simples: supralegal (RE 466.343).',
        'Quórum e turnos do §3º do art. 5º: dois turnos, 3/5 dos membros, em cada Casa.',
        'Convenção sobre os Direitos das Pessoas com Deficiência: tem status de emenda constitucional.',
        'Prisão do depositário infiel diante do Pacto de São José: ilícita (SV 25).'
      ],
      macetes: [
        'Escada da hierarquia: "CF e tratados-emenda > supralegais > leis e tratados comuns".',
        'Para virar emenda: "2-3/5-2" (duas Casas, 3/5, dois turnos).',
        'Status de emenda hoje: "DEF-MARRA-RAÇA" (Deficiência, Marraqueche, Racismo).',
        'Supralegal = "acima da lei, abaixo da CF", como um sanduíche.'
      ],
      video: 'tratados internacionais direitos humanos art 5 §3 supralegalidade OAB' }
  ]);
})();
