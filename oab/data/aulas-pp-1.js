/* Processo Penal – parte 1: fundamentos, investigação, ação, competência e provas. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('processopenal', [
    { id: 'principiospp', titulo: 'Princípios e sistema acusatório; juiz das garantias', incidencia: 'alta',
      aula: [
        'Sistema acusatório (art. 3º-A do CPP): as funções de acusar, defender e julgar ficam com pessoas diferentes. É vedada a iniciativa do juiz na fase de investigação e a substituição da atuação probatória do órgão de acusação.',
        'Presunção de inocência (art. 5º, LVII, da CF): ninguém será considerado culpado até o trânsito em julgado da sentença penal condenatória. Por isso não há execução provisória automática da pena após a 2ª instância (STF, ADCs 43, 44 e 54). Exceção: no júri, o STF admite a execução imediata da pena imposta pelos jurados, pela soberania dos veredictos (Tema 1068).',
        'Contraditório, ampla defesa e não autoincriminação: o acusado tem direito de conhecer a acusação e reagir a ela, com defesa técnica obrigatória e autodefesa. Ninguém é obrigado a produzir prova contra si mesmo, e o silêncio não pode ser interpretado em prejuízo da defesa (art. 186).',
        'Outros princípios: juiz natural, publicidade, duração razoável do processo, motivação das decisões, vedação das provas ilícitas e favor rei (na dúvida, decide-se a favor do réu).',
        'Juiz das garantias (arts. 3º-B a 3º-F): responsável pelo controle da legalidade da investigação e pela salvaguarda dos direitos do investigado. O STF declarou a figura constitucional (ADIs 6298, 6299, 6300 e 6305) e fixou que sua competência cessa com o oferecimento da denúncia.',
        'Onde não há juiz das garantias (STF): processos de competência originária dos tribunais, Tribunal do Júri, violência doméstica e familiar e infrações de menor potencial ofensivo.'
      ],
      cai: ['Sistema acusatório e os poderes do juiz', 'Presunção de inocência e execução da pena', 'Juiz das garantias: até quando atua e onde não se aplica'],
      macetes: ['Juiz das garantias: atua até o OFERECIMENTO da denúncia.', 'Sem juiz das garantias: "TJVM" – Tribunais, Júri, Violência doméstica, Menor potencial ofensivo.'],
      video: 'princípios processo penal sistema acusatório juiz das garantias ADI 6298 OAB' },

    { id: 'leiprocessual', titulo: 'Lei processual penal no tempo e no espaço', incidencia: 'media',
      aula: [
        'Aplicação imediata (art. 2º do CPP): a lei processual penal aplica-se desde logo, sem prejuízo da validade dos atos realizados sob a lei anterior (tempus regit actum). Não importa se é mais benéfica ou mais gravosa ao réu.',
        'Normas mistas: quando a norma tem conteúdo penal e processual ao mesmo tempo (por exemplo, a que cria ou extingue uma condição de procedibilidade, como a representação), prevalece a regra penal: retroage se for mais benéfica.',
        'Territorialidade (art. 1º): o processo penal em todo o território brasileiro é regido pelo CPP, ressalvados os tratados e convenções internacionais, as prerrogativas constitucionais nos crimes de responsabilidade e os processos da competência da Justiça Militar.',
        'Interpretação (art. 3º): a lei processual penal admite interpretação extensiva e aplicação analógica, bem como o suplemento dos princípios gerais de direito.'
      ],
      cai: ['Tempus regit actum', 'Normas mistas retroagem se benéficas', 'Analogia admitida no processo penal'],
      macetes: ['Lei processual pura: vale já, não retroage nem ultra-age. Mista: segue a regra penal.'],
      video: 'lei processual penal no tempo tempus regit actum normas mistas OAB' },

    { id: 'inquerito', titulo: 'Inquérito policial e arquivamento', incidencia: 'alta',
      aula: [
        'Natureza: procedimento administrativo, inquisitivo, escrito, sigiloso e dispensável (a denúncia pode se basear em outras peças de informação). Serve para apurar a materialidade e a autoria.',
        'Sigilo e advogado: o defensor tem direito de acesso amplo aos elementos de prova já documentados que digam respeito ao exercício do direito de defesa (Súmula Vinculante 14 e art. 7º, XIV, do Estatuto da Advocacia).',
        'Instauração: de ofício, por requisição do MP, ou a requerimento do ofendido nos crimes de ação pública incondicionada. Na ação pública condicionada, depende de representação; na ação privada, de requerimento de quem pode oferecer a queixa (art. 5º, §§4º e 5º).',
        'Prazos (art. 10): 10 dias com o indiciado preso e 30 dias se solto. Leis especiais: Justiça Federal, 15 dias (prorrogáveis por mais 15) para o preso; Lei de Drogas, 30 dias para o preso e 90 para o solto, que podem ser duplicados.',
        'A autoridade policial não pode mandar arquivar o inquérito (art. 17). O indiciamento é ato privativo do delegado, fundamentado (Lei 12.830/13).',
        'Arquivamento (art. 28, conforme o STF): o MP decide pelo arquivamento e comunica ao juiz, à vítima, ao investigado e à autoridade policial. A vítima pode pedir a revisão à instância superior do MP, e o juiz, se considerar o arquivamento ilegal ou teratológico, também pode submetê-lo a essa revisão.',
        'Desarquivamento: o arquivamento por falta de provas permite reabrir as investigações com provas novas (Súmula 524 do STF). Já o arquivamento por atipicidade do fato faz coisa julgada material e não pode ser revisto.'
      ],
      cai: ['Súmula Vinculante 14', 'Prazos do inquérito', 'Novo procedimento de arquivamento', 'Súmula 524 do STF'],
      macetes: ['Inquérito: preso 10, solto 30.', 'Delegado nunca arquiva.', 'Falta de prova = reabre com prova nova. Atipicidade = não reabre.'],
      video: 'inquérito policial arquivamento art 28 súmula vinculante 14 súmula 524 OAB processo penal' },

    { id: 'anpp', titulo: 'Acordo de não persecução penal e justiça negociada', incidencia: 'alta',
      aula: [
        'Requisitos do ANPP (art. 28-A): não ser caso de arquivamento, confissão formal e circunstanciada, infração sem violência ou grave ameaça, pena mínima inferior a 4 anos (consideradas as causas de aumento e diminuição) e ser o acordo necessário e suficiente para reprovação e prevenção do crime.',
        'Vedações (art. 28-A, §2º): quando cabível a transação penal; investigado reincidente ou com conduta criminal habitual, reiterada ou profissional; quem foi beneficiado nos 5 anos anteriores por ANPP, transação penal ou suspensão condicional do processo; e crimes praticados no âmbito de violência doméstica ou familiar, ou contra a mulher por razões da condição do sexo feminino.',
        'Condições: reparar o dano, renunciar a bens instrumentos ou produto do crime, prestar serviços à comunidade, pagar prestação pecuniária, entre outras ajustadas.',
        'Homologação: o juiz verifica a voluntariedade em audiência, ouvindo o investigado na presença do defensor. Cumprido o acordo, extingue-se a punibilidade, e o ANPP não gera reincidência nem maus antecedentes. Descumprido, o MP oferece denúncia.',
        'Recusa do MP (§14): se o MP se recusar a propor o acordo, o investigado pode requerer a remessa dos autos ao órgão superior do Ministério Público.',
        'Outros institutos negociais: transação penal (Lei 9.099/95, art. 76) para infrações de menor potencial ofensivo; suspensão condicional do processo (art. 89) para crimes com pena mínima de até 1 ano; e colaboração premiada (Lei 12.850/13).'
      ],
      cai: ['Requisitos e vedações do ANPP', 'Recusa do MP e remessa ao órgão superior', 'Efeitos do cumprimento'],
      macetes: ['ANPP: "CONFESSA, SEM VIOLÊNCIA, MÍNIMA < 4".', 'Violência doméstica: nada de ANPP.'],
      video: 'acordo de não persecução penal art 28-A requisitos vedações OAB processo penal' },

    { id: 'acaocivil', titulo: 'Ação civil ex delicto', incidencia: 'media',
      aula: [
        'Título executivo: a sentença penal condenatória transitada em julgado é título executivo judicial no cível (art. 63 do CPP e art. 515, VI, do CPC). A vítima não precisa provar de novo a culpa, só liquidar o dano.',
        'Valor mínimo (art. 387, IV): o juiz criminal fixa valor mínimo para a reparação dos danos, considerando os prejuízos sofridos. O STJ exige pedido expresso da acusação ou da vítima e oportunidade de contraditório.',
        'Absolvição que impede a ação civil: quando reconhece a inexistência material do fato ou que o réu não foi o autor (art. 386, I e IV). A sentença que reconhece excludente de ilicitude também faz coisa julgada no cível (art. 65), mas o terceiro inocente prejudicado em estado de necessidade pode ser indenizado, com regresso contra quem criou o perigo.',
        'Não impedem a ação civil (art. 67): o arquivamento do inquérito, a decisão que julga extinta a punibilidade e a sentença absolutória que decide que o fato não constitui crime. A absolvição por falta de provas também não impede.',
        'Ação civil paralela (art. 64): a vítima pode propor a ação civil antes ou durante o processo penal; o juiz cível pode suspender o curso da ação até o julgamento definitivo da criminal.'
      ],
      cai: ['Hipóteses de absolvição que vinculam o cível', 'Valor mínimo de indenização na sentença penal', 'O que não impede a ação civil'],
      macetes: ['Vincula o cível: "não houve o fato", "não foi ele", "agiu em legítima defesa".', 'Falta de prova ou fato atípico: a vítima ainda pode cobrar no cível.'],
      video: 'ação civil ex delicto art 63 a 67 CPP efeitos da sentença penal no cível OAB' },

    { id: 'competencia', titulo: 'Jurisdição e competência', incidencia: 'alta',
      aula: [
        'Critérios (art. 69): lugar da infração, domicílio ou residência do réu, natureza da infração, distribuição, conexão ou continência, prevenção e prerrogativa de função.',
        'Lugar da infração (art. 70): em regra, o lugar em que se consumou o crime; na tentativa, o lugar do último ato de execução. No estelionato praticado por depósito, transferência ou cheque sem fundos, a competência é do domicílio da vítima (art. 70, §4º).',
        'Domicílio do réu (arts. 72 e 73): critério subsidiário, quando desconhecido o lugar da infração. Na ação penal privada exclusiva, o querelante pode preferir o foro do domicílio do réu, mesmo conhecido o lugar da infração.',
        'Justiça Federal (art. 109 da CF): crimes contra bens, serviços ou interesses da União, suas autarquias e empresas públicas (não das sociedades de economia mista, Súmula 42 do STJ); crimes previstos em tratado, quando iniciada a execução no Brasil e o resultado no exterior, ou vice-versa (como o tráfico internacional); crimes a bordo de navios e aeronaves; e crimes contra a organização do trabalho, quando atingem trabalhadores coletivamente. Contravenções são sempre da Justiça Estadual (Súmula 38 do STJ).',
        'Conexão e continência: geram a reunião dos processos. Havendo conexão entre crime federal e estadual, a Justiça Federal julga os dois (Súmula 122 do STJ). Entre júri e jurisdição comum, prevalece o júri (art. 78, I).',
        'Tribunal do Júri: julga os crimes dolosos contra a vida, tentados ou consumados, e os conexos. O latrocínio, por ser crime contra o patrimônio, é julgado pelo juiz singular (Súmula 603 do STF).',
        'Foro por prerrogativa de função: vale para crimes praticados no exercício do cargo e em razão dele (STF, AP 937). Em 2025, o STF passou a entender que esse foro se mantém mesmo depois que a autoridade deixa o cargo, para esses crimes.'
      ],
      cai: ['Teoria do resultado (art. 70) e a regra do estelionato', 'Súmulas 38, 42 e 122 do STJ', 'Competência do júri e Súmula 603 do STF', 'Foro por prerrogativa de função'],
      macetes: ['Sociedade de economia mista (Banco do Brasil, Petrobras) = Justiça Estadual. Empresa pública (Caixa, Correios) = Justiça Federal.', 'Conexão federal + estadual = tudo na Federal.'],
      video: 'competência processo penal art 69 70 justiça federal súmula 122 júri foro por prerrogativa OAB' },

    { id: 'questoes', titulo: 'Questões e processos incidentes', incidencia: 'media',
      aula: [
        'Questões prejudiciais: questões cuja solução é antecedente lógico do mérito penal. Se a controvérsia for sobre o estado civil das pessoas e for séria e fundada, o curso da ação penal fica suspenso até a decisão no cível (prejudicial obrigatória, art. 92). Nas demais questões cíveis, a suspensão é facultativa (art. 93).',
        'Exceções (art. 95): suspeição, incompetência de juízo, litispendência, ilegitimidade de parte e coisa julgada. A suspeição precede as demais (art. 96).',
        'Restituição de coisas apreendidas (arts. 118 a 124): as coisas apreendidas não podem ser restituídas enquanto interessarem ao processo. Instrumentos e produto do crime cujo uso ou porte seja ilícito não são restituídos.',
        'Medidas assecuratórias: sequestro de bens adquiridos com os proventos da infração (arts. 125 a 133), hipoteca legal dos imóveis do acusado (art. 134) e arresto de bens (arts. 136 e 137), para garantir a reparação do dano e as despesas processuais.',
        'Incidente de falsidade (art. 145) e incidente de insanidade mental (art. 149): este é instaurado quando houver dúvida sobre a integridade mental do acusado, e o processo fica suspenso enquanto se faz o exame.'
      ],
      cai: ['Prejudicial obrigatória x facultativa', 'Rol de exceções', 'Sequestro, arresto e hipoteca legal'],
      macetes: ['Estado civil = suspensão obrigatória.', 'Sequestro = bens comprados com dinheiro do crime. Arresto/hipoteca = bens lícitos do réu para garantir a indenização.'],
      video: 'questões prejudiciais exceções medidas assecuratórias sequestro arresto processo penal OAB' },

    { id: 'provaspp', titulo: 'Provas no processo penal', incidencia: 'alta',
      aula: [
        'Provas ilícitas (art. 157 e art. 5º, LVI, da CF): são inadmissíveis e devem ser desentranhadas. As derivadas também são ilícitas (frutos da árvore envenenada), salvo quando não houver nexo de causalidade ou puderem ser obtidas por fonte independente.',
        'Prova ilícita: detalhes. A prova ilícita é admitida em favor do réu (pro reo), pela proporcionalidade, por exemplo para provar a inocência. Fonte independente é aquela que, seguindo os trâmites típicos da investigação, seria capaz de conduzir ao fato (art. 157, §2º). Preclusa a decisão de desentranhamento, a prova é inutilizada por decisão judicial, facultado às partes acompanhar o incidente (art. 157, §3º). O §5º do art. 157 (o juiz que conhecer a prova inadmissível não poderia sentenciar) foi declarado inconstitucional pelo STF (ADIs 6298, 6299, 6300 e 6305).',
        'Elementos do inquérito (art. 155): o juiz não pode fundamentar a condenação exclusivamente nos elementos colhidos na investigação, ressalvadas as provas cautelares, não repetíveis e antecipadas. O sistema é o do livre convencimento motivado.',
        'Exame de corpo de delito (art. 158): é indispensável quando a infração deixa vestígios, e a confissão não supre a sua falta. Se os vestígios desapareceram, a prova testemunhal pode suprir (art. 167). A cadeia de custódia (arts. 158-A a 158-F) documenta a história cronológica do vestígio. A perícia é feita por um perito oficial com diploma de curso superior; na falta dele, por duas pessoas idôneas com diploma superior, de preferência na área específica (art. 159, caput e §1º). As partes podem formular quesitos e indicar assistente técnico (art. 159, §3º).',
        'Interrogatório: tem natureza mista (meio de prova e de defesa), com predominância de meio de defesa, e é o último ato da instrução (art. 400), regra que o STF aplica também aos procedimentos especiais (HC 127.900). O acusado é informado do direito de permanecer calado, e o silêncio não importa confissão nem pode prejudicá-lo (art. 186). A confissão é divisível e retratável (art. 200).',
        'Testemunhas: toda pessoa pode ser testemunha. Ascendente, descendente, afim em linha reta, cônjuge (ainda que separado), irmão, pai, mãe ou filho adotivo do acusado podem se recusar a depor, salvo quando não for possível, por outro modo, obter ou integrar a prova do fato (art. 206); se depuserem, não prestam compromisso, assim como os doentes e deficientes mentais e os menores de 14 anos (art. 208). São proibidas de depor as pessoas que devam guardar segredo em razão de função, ministério, ofício ou profissão, salvo se, desobrigadas pela parte interessada, quiserem dar o seu testemunho (art. 207).',
        'Reconhecimento de pessoas (art. 226): deve seguir o procedimento legal (descrição prévia, colocação ao lado de pessoas parecidas). Para o STJ, o reconhecimento feito sem essas formalidades é inválido e não pode servir de base para a condenação, ainda que confirmado em juízo; a condenação só se mantém se houver outras provas independentes (STJ, HC 598.886/SC). O entendimento vale também para o reconhecimento fotográfico.',
        'Interceptação telefônica (Lei 9.296/96): depende de ordem do juiz competente, de indícios razoáveis de autoria, de que a prova não possa ser feita por outros meios e de que o crime seja punido com reclusão. Prazo de 15 dias, renovável enquanto for indispensável.',
        'Prorrogação e gravação: o prazo de 15 dias da interceptação é renovável por igual período, sucessivamente, desde que cada decisão seja fundamentada e demonstre a indispensabilidade da medida (art. 5º da Lei 9.296/96; STF, Tema 661). Interceptar é captar a conversa por terceiro, sem o conhecimento dos interlocutores, e exige ordem judicial. Já a gravação feita por um dos interlocutores sem o conhecimento do outro é, em regra, lícita (STF, Tema 237), e a captação ambiental feita por um dos interlocutores pode ser usada pela defesa se demonstrada a integridade da gravação (art. 8º-A, §4º, da Lei 9.296/96). A prova de outro crime ou de outro autor descoberta por acaso numa interceptação legal, sem desvio de finalidade, é válida (encontro fortuito ou serendipidade).'
      ],
      cai: ['Prova ilícita e derivada', 'Art. 155: proibição de condenar só com base no inquérito', 'Corpo de delito e confissão', 'Requisitos da interceptação'],
      macetes: ['Interceptação: "JIRO" – Juiz, Indícios, Reclusão, Outro meio impossível.', 'Confissão não supre o corpo de delito; testemunha supre se o vestígio sumiu.'],
      video: 'provas no processo penal prova ilícita art 155 158 interceptação telefônica reconhecimento de pessoas OAB' }
  ]);
})();
