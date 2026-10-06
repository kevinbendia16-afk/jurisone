/* Processo Penal – parte 2: liberdade, comunicação dos atos, júri, JECRIM, sentença, nulidades e recursos. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('processopenal', [
    { id: 'liberdade', titulo: 'Liberdade provisória, fiança e medidas cautelares diversas', incidencia: 'alta',
      aula: [
        'Três caminhos diferentes: o relaxamento é para a prisão ILEGAL (art. 5º, LXV, da CF); a liberdade provisória é para a prisão em flagrante legal, mas desnecessária; a revogação é para a preventiva cujos motivos deixaram de existir.',
        'Audiência de custódia (art. 310): em até 24 horas da prisão, o juiz relaxa a prisão ilegal, converte o flagrante em preventiva (se presentes os requisitos e insuficientes outras cautelares) ou concede liberdade provisória, com ou sem fiança.',
        'Medidas cautelares diversas da prisão (art. 319): comparecimento periódico em juízo, proibição de frequentar lugares, proibição de contato com pessoa determinada, proibição de ausentar-se da comarca, recolhimento domiciliar noturno, suspensão do exercício de função pública ou atividade econômica, internação provisória, fiança e monitoração eletrônica. A prisão preventiva só cabe quando elas não forem suficientes (art. 282, §6º).',
        'Fiança: a autoridade policial pode concedê-la nas infrações com pena máxima de até 4 anos (art. 322); nas demais, o juiz decide em 48 horas.',
        'Crimes inafiançáveis (art. 5º, XLII a XLIV, da CF e art. 323 do CPP): racismo, tortura, tráfico de drogas, terrorismo, crimes hediondos e ação de grupos armados contra a ordem constitucional. Inafiançável não significa sem liberdade provisória: ela pode ser concedida sem fiança.',
        'Prisão domiciliar no lugar da preventiva (art. 318): maior de 80 anos, extremamente debilitado por doença grave, imprescindível aos cuidados de menor de 6 anos ou de pessoa com deficiência, gestante, mulher com filho de até 12 anos incompletos e homem que seja o único responsável por filho nessa idade. Para gestante e mãe ou responsável por criança ou pessoa com deficiência, a substituição é a regra, salvo crime com violência ou grave ameaça ou contra o próprio filho ou dependente (art. 318-A).'
      ],
      cai: ['Relaxamento x liberdade provisória x revogação', 'Fiança concedida pelo delegado (até 4 anos)', 'Inafiançável x liberdade provisória sem fiança', 'Domiciliar dos arts. 318 e 318-A'],
      macetes: ['Ilegal = RELAXA. Legal mas desnecessária = LIBERDADE PROVISÓRIA. Motivos acabaram = REVOGA.', 'Delegado arbitra fiança se a pena máxima for de até 4 anos.'],
      video: 'liberdade provisória fiança relaxamento medidas cautelares art 319 prisão domiciliar OAB processo penal' },

    { id: 'comunicacao', titulo: 'Citação, intimação e sujeitos do processo', incidencia: 'media',
      aula: [
        'Citação pessoal: em regra, por mandado (art. 351). O réu preso é citado pessoalmente (art. 360). Admite-se citação por hora certa quando o réu se oculta para não ser citado (art. 362).',
        'Citação por edital (art. 361): quando o réu não é encontrado. Se ele não comparecer nem constituir advogado, ficam suspensos o processo e o curso da prescrição (art. 366), podendo o juiz produzir provas urgentes e decretar a preventiva. A prescrição fica suspensa pelo prazo máximo da pena cominada, e depois volta a correr (Súmula 415 do STJ).',
        'Revelia (art. 367): o réu citado ou intimado pessoalmente que deixa de comparecer sem motivo justificado, ou que muda de endereço sem comunicar, segue sendo processado sem ser intimado dos atos seguintes.',
        'Intimações: os prazos correm da data da intimação, e não da juntada aos autos do mandado ou da carta precatória (Súmula 710 do STF).',
        'Defesa técnica: é indispensável. A falta de defesa constitui nulidade absoluta, mas a sua deficiência só anula o processo se houver prova de prejuízo para o réu (Súmula 523 do STF).',
        'Assistente de acusação: a vítima ou seu representante pode intervir na ação penal pública, depois do recebimento da denúncia e enquanto não passar em julgado a sentença (art. 268). Pode recorrer supletivamente quando o MP não recorrer.'
      ],
      cai: ['Art. 366 e Súmula 415 do STJ', 'Súmula 710 do STF', 'Súmula 523 do STF'],
      macetes: ['Edital + réu sumido = suspende processo E prescrição (art. 366).', 'Prazo conta da INTIMAÇÃO, não da juntada (Súmula 710).'],
      video: 'citação por edital art 366 súmula 415 súmula 710 súmula 523 processo penal OAB' },

    { id: 'juri', titulo: 'Tribunal do Júri', incidencia: 'alta',
      aula: [
        'Princípios (art. 5º, XXXVIII, da CF): plenitude de defesa, sigilo das votações, soberania dos veredictos e competência para julgar os crimes dolosos contra a vida.',
        'Procedimento bifásico: a 1ª fase (judicium accusationis) vai da denúncia até a decisão de pronúncia; a 2ª fase (judicium causae) vai da preparação do plenário até o julgamento pelos jurados.',
        'Fim da 1ª fase: pronúncia (prova da materialidade e indícios suficientes de autoria, art. 413), impronúncia (art. 414), desclassificação (art. 419) ou absolvição sumária (art. 415). Contra a pronúncia e a desclassificação cabe recurso em sentido estrito; contra a impronúncia e a absolvição sumária, apelação (art. 416).',
        'Plenário: são sorteados 25 jurados; a sessão se instala com no mínimo 15 presentes; o Conselho de Sentença tem 7 jurados. Cada parte pode recusar até 3 jurados sem motivação (art. 468). Os debates têm 1h30 para cada parte, mais 1h de réplica e 1h de tréplica.',
        'Quesitos (art. 483): materialidade do fato, autoria ou participação, se o acusado deve ser absolvido (quesito genérico), causas de diminuição alegadas pela defesa e qualificadoras ou causas de aumento.',
        'Apelação contra decisão do júri (art. 593, III): nulidade posterior à pronúncia; sentença do juiz-presidente contrária à lei ou à decisão dos jurados; erro ou injustiça na aplicação da pena; ou decisão dos jurados manifestamente contrária à prova dos autos. Por este último motivo, só se admite uma apelação, e o tribunal manda o réu a novo júri (não pode absolver ou condenar diretamente).',
        'Execução imediata: o STF decidiu que a soberania dos veredictos autoriza a execução imediata da condenação imposta pelo júri, independentemente do total da pena (Tema 1068).',
        'Desaforamento (art. 427): transferência do julgamento para outra comarca por interesse da ordem pública, dúvida sobre a imparcialidade do júri ou risco à segurança do réu. É nula a decisão que determina o desaforamento sem ouvir a defesa (Súmula 712 do STF).'
      ],
      cai: ['Recursos cabíveis no fim da 1ª fase', 'Números do plenário (25, 15, 7, 3 recusas)', 'Apelação por decisão manifestamente contrária à prova', 'Execução imediata da pena (Tema 1068)'],
      macetes: ['Pronúncia e desclassificação = RESE. Impronúncia e absolvição sumária = APELAÇÃO.', 'Júri: 25 sorteados, 15 para instalar, 7 julgam, 3 recusas.'],
      video: 'tribunal do júri pronúncia impronúncia quesitos apelação art 593 III tema 1068 OAB processo penal' },

    { id: 'jecrim', titulo: 'Juizados Especiais Criminais (Lei 9.099/95)', incidencia: 'alta',
      aula: [
        'Competência: infrações penais de menor potencial ofensivo, isto é, contravenções e crimes com pena máxima não superior a 2 anos, cumulada ou não com multa (art. 61).',
        'Termo circunstanciado (art. 69): no lugar do inquérito e da prisão em flagrante, a autoridade lavra termo circunstanciado e encaminha as partes ao Juizado. Não se impõe prisão em flagrante nem fiança a quem assume o compromisso de comparecer.',
        'Composição civil (art. 74): o acordo homologado sobre os danos, na ação penal privada ou pública condicionada, acarreta a renúncia ao direito de queixa ou de representação.',
        'Transação penal (art. 76): o MP propõe pena restritiva de direitos ou multa. Não cabe se o autor já foi condenado definitivamente a pena privativa de liberdade, se foi beneficiado por transação nos últimos 5 anos ou se os antecedentes e circunstâncias não a recomendarem. Não gera reincidência nem antecedentes.',
        'Suspensão condicional do processo (art. 89): cabe nos crimes com pena mínima igual ou inferior a 1 ano, dentro ou fora do Juizado, se o acusado não estiver sendo processado nem tiver sido condenado por outro crime. Período de prova de 2 a 4 anos. Em concurso de crimes, considera-se a soma das penas mínimas ou o aumento mínimo da continuidade (Súmula 243 do STJ e Súmula 723 do STF).',
        'Procedimento sumaríssimo: oral, com defesa prévia à aceitação da denúncia. Se o réu não for encontrado para citação pessoal, o caso vai para o juízo comum (não há citação por edital no Juizado, art. 66, parágrafo único).',
        'Recursos: apelação em 10 dias, já com as razões (art. 82), julgada pela Turma Recursal; embargos de declaração em 5 dias (art. 83).',
        'Não se aplica a Lei 9.099/95 aos crimes de violência doméstica e familiar contra a mulher (art. 41 da Lei Maria da Penha) nem aos crimes militares.'
      ],
      cai: ['Conceito de menor potencial ofensivo (pena máxima até 2 anos)', 'Requisitos da transação e do sursis processual', 'Súmula 243 do STJ', 'Apelação em 10 dias'],
      macetes: ['JECRIM: máxima até 2 anos. Sursis processual: MÍNIMA até 1 ano.', 'No Juizado não existe citação por edital.'],
      video: 'juizado especial criminal lei 9099 transação penal suspensão condicional do processo súmula 243 OAB' },

    { id: 'sentencapp', titulo: 'Sentença penal, emendatio e mutatio libelli', incidencia: 'alta',
      aula: [
        'Princípio da correlação: a sentença deve guardar correspondência com os fatos narrados na denúncia. O réu se defende dos fatos, e não da capitulação jurídica.',
        'Emendatio libelli (art. 383): o juiz, sem modificar a descrição do fato contida na denúncia, pode atribuir-lhe definição jurídica diversa, ainda que resulte em pena mais grave. Não precisa ouvir a defesa nem aditar a denúncia. Pode ser feita também pelo tribunal.',
        'Mutatio libelli (art. 384): surge na instrução prova de elemento ou circunstância da infração não contida na denúncia. O MP deve aditar a denúncia em 5 dias, a defesa se manifesta e pode arrolar até 3 testemunhas. Não pode ser feita em 2º grau (Súmula 453 do STF).',
        'Hipóteses de absolvição (art. 386): estar provada a inexistência do fato; não haver prova da existência do fato; não constituir o fato infração penal; estar provado que o réu não concorreu para a infração; não existir prova de ter o réu concorrido para a infração; existirem circunstâncias que excluam o crime ou isentem de pena, ou fundada dúvida sobre elas; e não existir prova suficiente para a condenação.',
        'Sentença condenatória (art. 387): o juiz aplica a pena com a dosimetria, fixa o regime inicial (já considerando a detração), decide fundamentadamente sobre a manutenção ou imposição de prisão preventiva e fixa o valor mínimo para reparação dos danos.',
        'Embargos de declaração da sentença (art. 382): em 2 dias, para obscuridade, ambiguidade, contradição ou omissão.'
      ],
      cai: ['Emendatio x mutatio libelli', 'Súmula 453 do STF', 'Incisos do art. 386'],
      macetes: ['Emendatio: muda o NOME do crime (o fato é o mesmo). Mutatio: muda o FATO (precisa aditar).', 'Mutatio não existe no tribunal (Súmula 453).'],
      video: 'emendatio libelli mutatio libelli art 383 384 súmula 453 sentença penal OAB' },

    { id: 'nulidades', titulo: 'Nulidades', incidencia: 'media',
      aula: [
        'Sem prejuízo não há nulidade (art. 563): nenhum ato será declarado nulo se não resultar prejuízo para a acusação ou para a defesa (pas de nullité sans grief).',
        'Ninguém pode arguir nulidade a que deu causa ou para que tenha concorrido, nem referente a formalidade cuja observância só interesse à parte contrária (art. 565).',
        'Nulidade absoluta x relativa: a absoluta viola norma de ordem pública (como a incompetência em razão da matéria ou a falta de defesa) e pode ser reconhecida a qualquer tempo. A relativa precisa ser arguida no momento oportuno (art. 571), sob pena de preclusão, e exige demonstração de prejuízo.',
        'Súmulas importantes do STF: 523 (falta de defesa é nulidade absoluta; deficiência só anula com prejuízo), 707 (é nula a falta de intimação do denunciado para oferecer contrarrazões ao recurso contra a rejeição da denúncia, não suprida pela nomeação de defensor dativo), 708 (é nulo o julgamento da apelação se, após a renúncia do único defensor, o réu não foi intimado para constituir outro) e 712 (nulidade do desaforamento sem audiência da defesa).',
        'Vedação da reformatio in pejus indireta: anulada a sentença por recurso exclusivo da defesa, a nova sentença não pode impor pena mais grave que a anterior. E o tribunal não pode reconhecer contra o réu nulidade não arguida no recurso da acusação (Súmula 160 do STF).'
      ],
      cai: ['Princípio do prejuízo', 'Momento de arguir nulidade relativa', 'Súmulas 523, 707, 708 e 160 do STF'],
      macetes: ['Sem prejuízo, sem nulidade.', 'Quem causou a nulidade não pode alegá-la.'],
      video: 'nulidades processo penal art 563 565 súmula 523 707 708 160 OAB' },

    { id: 'recursospp', titulo: 'Recursos em espécie: apelação, RESE, embargos e agravo em execução', incidencia: 'alta',
      aula: [
        'Apelação (art. 593): cabe contra sentenças definitivas de condenação ou absolvição do juiz singular, decisões definitivas ou com força de definitiva não atacáveis por RESE e decisões do júri (art. 593, III). Prazo de 5 dias para interpor e 8 dias para as razões (art. 600). No JECRIM, 10 dias com as razões.',
        'Recurso em sentido estrito (art. 581): cabe nas hipóteses do rol taxativo, como rejeição da denúncia, pronúncia, decisão sobre fiança e prisão, concessão ou negação de habeas corpus pelo juiz e extinção da punibilidade. Prazo de 5 dias (art. 586) e 2 dias para as razões (art. 588). Tem efeito regressivo: o juiz pode se retratar.',
        'Embargos de declaração: 2 dias, contra sentença (art. 382) ou acórdão (art. 619), para ambiguidade, obscuridade, contradição ou omissão.',
        'Embargos infringentes e de nulidade (art. 609, parágrafo único): exclusivos da defesa, contra acórdão NÃO unânime de 2ª instância desfavorável ao réu em apelação ou RESE. Prazo de 10 dias. Ficam limitados à matéria objeto da divergência.',
        'Agravo em execução (art. 197 da LEP): contra decisões do juiz da execução penal, no prazo de 5 dias (Súmula 700 do STF), seguindo o rito do RESE.',
        'Carta testemunhável (art. 639): contra a decisão que denega o recurso ou que, admitido, obsta o seu seguimento. Prazo de 48 horas.',
        'Efeitos e limites: proibição da reformatio in pejus no recurso exclusivo da defesa (art. 617) e efeito extensivo, pelo qual a decisão do recurso de um réu aproveita aos corréus, se fundada em motivos que não sejam de caráter pessoal (art. 580).'
      ],
      cai: ['Apelação x RESE: qual cabe em cada decisão', 'Prazos (5+8; 5+2; 2; 10; 5; 48h)', 'Embargos infringentes só da defesa'],
      macetes: ['Prazos: apelação 5 + 8; RESE 5 + 2; embargos de declaração 2; infringentes 10; agravo em execução 5; carta testemunhável 48h.', 'Rejeitou a denúncia = RESE. Absolveu ou condenou = APELAÇÃO.'],
      video: 'recursos processo penal apelação RESE art 581 embargos infringentes agravo em execução prazos OAB' },

    { id: 'hcrevisao', titulo: 'Habeas corpus, revisão criminal e execução penal', incidencia: 'alta',
      aula: [
        'Habeas corpus (art. 647): cabe sempre que alguém sofrer ou se achar na iminência de sofrer violência ou coação ilegal na sua liberdade de ir e vir. Hipóteses de coação ilegal no art. 648: falta de justa causa, prisão além do tempo legal, ordem de autoridade incompetente, cessação do motivo da coação, não admissão de fiança quando a lei a autoriza, processo manifestamente nulo e punibilidade extinta.',
        'Limites do HC: não cabe contra condenação a pena de multa ou processo por infração punida só com multa (Súmula 693 do STF), nem quando já extinta a pena privativa de liberdade (Súmula 695 do STF). Não cabe HC contra decisão do relator que indefere liminar em tribunal superior (Súmula 691 do STF), salvo flagrante ilegalidade.',
        'Revisão criminal (art. 621): cabe só em favor do réu, contra sentença condenatória transitada em julgado, quando ela for contrária a texto expresso da lei ou à evidência dos autos, se fundar em depoimentos, exames ou documentos comprovadamente falsos, ou quando surgirem novas provas de inocência ou de circunstância que autorize diminuição da pena.',
        'Prazo e legitimidade da revisão: pode ser requerida a qualquer tempo, antes ou depois de extinta a pena (art. 622), pelo próprio réu, por procurador ou, no caso de morte, pelo cônjuge, ascendente, descendente ou irmão (art. 623). Não se exige o recolhimento do réu à prisão (Súmula 393 do STF).',
        'Execução penal: compete ao juízo da execução aplicar a lei mais benigna depois do trânsito em julgado (Súmula 611 do STF). A falta de estabelecimento adequado não autoriza manter o condenado em regime mais gravoso (Súmula Vinculante 56).',
        'Remição (art. 126 da LEP): 1 dia de pena a cada 3 dias de trabalho, e 1 dia a cada 12 horas de frequência escolar. A falta grave pode levar à perda de até 1/3 dos dias remidos.',
        'Falta grave e prazos: interrompe o prazo para a progressão de regime (Súmula 534 do STJ), mas não interrompe o prazo para o livramento condicional (Súmula 441 do STJ) nem para indulto e comutação, salvo se o decreto dispuser em contrário (Súmula 535 do STJ).'
      ],
      cai: ['Hipóteses do art. 648', 'Súmulas 691, 693 e 695 do STF', 'Revisão criminal só pro reo e a qualquer tempo', 'Remição e falta grave (Súmulas 534, 441 e 535 do STJ)'],
      macetes: ['Remição: 3 dias de trabalho ou 12 horas de estudo = 1 dia a menos.', 'Falta grave: zera a progressão, não mexe no livramento nem no indulto.'],
      video: 'habeas corpus art 648 revisão criminal art 621 execução penal remição súmula 534 OAB processo penal' }
  ]);
})();
