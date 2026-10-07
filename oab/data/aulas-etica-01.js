/* Aulas adicionais – lote etica-01 (Fundamentos da advocacia: atos privativos, postulação, consultoria, nulidade, procuração e função social). */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);

  add('etica', [
    { id: 'atividade', titulo: 'Atividade de advocacia: atos privativos e o advogado como indispensável à Justiça', incidencia: 'alta',
      aula: [
        'Em uma frase: existem tarefas que só o advogado inscrito na OAB pode fazer, e a Constituição coloca o advogado como peça necessária para a Justiça funcionar.',
        'Conceito: "ato privativo" é o ato reservado por lei a uma profissão. Ninguém mais pode praticá-lo. Para a advocacia, o Estatuto (Lei 8.906/94) lista esses atos no art. 1º.',
        'Os dois grandes grupos: são privativos (1) a postulação, ou seja, o pedido feito a órgão do Poder Judiciário e aos juizados especiais; e (2) as atividades de consultoria, assessoria e direção jurídicas (art. 1º, I e II).',
        'A palavra "qualquer" caiu: o texto original dizia "postulação a qualquer órgão do Judiciário". O STF declarou essa palavra inconstitucional. Por isso a lei pode criar casos em que a parte vai sozinha ao juiz, como no Juizado Especial (ADI 1127).',
        'Habeas corpus: o HC não é ato privativo. Qualquer pessoa pode impetrá-lo, em qualquer instância ou tribunal, a favor de si ou de outra pessoa (art. 1º, §1º, do Estatuto; art. 654 do CPP).',
        'Atos constitutivos: contrato social e estatuto de pessoa jurídica só podem ser registrados na Junta Comercial ou no cartório se tiverem o "visto" de advogado. A exceção é a microempresa e a empresa de pequeno porte, que estão dispensadas (art. 1º, §2º, do Estatuto; art. 9º, §2º, da LC 123/06).',
        'Proibição de mistura: é vedado divulgar a advocacia junto com outra atividade. Exemplo: placa "Advocacia e Imobiliária" no mesmo anúncio (art. 1º, §3º).',
        'Indispensável à Justiça: a Constituição diz que o advogado é indispensável à administração da Justiça e inviolável por seus atos e manifestações no exercício da profissão, nos limites da lei (art. 133 da CF; art. 2º do Estatuto).',
        'Serviço público e múnus: mesmo no escritório particular, o advogado presta serviço público e exerce função social. No processo judicial, seus atos são "múnus público", ou seja, um encargo de interesse de toda a sociedade (art. 2º, §§1º e 2º). No processo administrativo, ele também contribui para a decisão favorável ao cliente (art. 2º, §2º-A, incluído pela Lei 14.365/22).',
        'Quem mais exerce advocacia: além do advogado privado, exercem advocacia, e se sujeitam ao Estatuto, os integrantes da AGU, da Procuradoria da Fazenda Nacional, da Defensoria Pública e das procuradorias de Estados, DF, Municípios e entidades da administração indireta (art. 3º, §1º).',
        'Estagiário: o estagiário inscrito pode praticar os atos do art. 1º, mas só em conjunto com advogado e sob responsabilidade dele (art. 3º, §2º). Sozinho, pode apenas atos simples, como retirar e devolver autos, obter certidões e assinar petição de juntada (art. 29 do Regulamento Geral).',
        'Exemplo: Paula, contadora, abre a "Paula Consultoria" e passa a dar pareceres jurídicos sobre contratos. Ela pratica ato privativo de advogado sem ser inscrita. Os atos são nulos e ela pode responder por exercício ilegal da profissão (art. 4º do Estatuto; art. 47 da Lei de Contravenções Penais).',
        'Cuidado (pegadinha): a FGV diz que "toda postulação ao Judiciário exige advogado". Errado: o HC, o Juizado Especial em 1º grau e a Justiça do Trabalho (jus postulandi) são exceções. Outra pegadinha: dizer que o visto é exigido para todas as empresas, inclusive a microempresa.',
        'Resumo para revisar: privativos são postulação judicial e consultoria, assessoria e direção jurídicas; HC não é privativo; visto de advogado em atos constitutivos, salvo ME e EPP; advogado é indispensável e inviolável nos limites da lei; estagiário atua junto com advogado.'
      ],
      cai: [
        'Caso de não advogado que dá parecer jurídico ou assina petição: pergunta se o ato é privativo e qual a consequência (nulidade, art. 4º).',
        'Assertiva afirmando que o HC exige advogado: a resposta correta é que não exige (art. 1º, §1º).',
        'Registro de contrato social sem visto de advogado: a FGV cobra a exceção da microempresa e da empresa de pequeno porte.',
        'Divulgação conjunta da advocacia com outra profissão (art. 1º, §3º).',
        'Limites do estagiário: o que ele pode fazer sozinho e o que exige advogado ao lado.'
      ],
      macetes: [
        'Privativos = "PCAD": Postulação, Consultoria, Assessoria e Direção jurídicas.',
        'HC é "remédio de todo mundo": qualquer pessoa impetra, sem advogado.',
        'Visto: "empresa grande pede visto; ME e EPP passam livre".',
        'Estagiário: "junto pode tudo do art. 1º; sozinho, só papelada" (retirar autos, certidões, juntada).'
      ],
      video: 'OAB ética atividade de advocacia atos privativos art 1º Estatuto' },

    { id: 'et-postulacao', titulo: 'Postulação em juízo: onde o advogado é dispensável (HC, JEC, Justiça do Trabalho)', incidencia: 'alta',
      aula: [
        'Em uma frase: em regra, para pedir algo ao juiz é preciso advogado, mas a lei abre algumas portas para a própria parte entrar sozinha.',
        'Conceito: "capacidade postulatória" é a aptidão para fazer pedidos ao Judiciário. Em regra, só o advogado a tem (art. 1º, I, do Estatuto; art. 103 do CPC). Quando a lei dá essa capacidade à própria parte, o advogado é dispensável.',
        'Por que existem exceções: o STF entendeu que a lei pode dispensar o advogado em certos casos para facilitar o acesso à Justiça. Por isso declarou inconstitucional a palavra "qualquer" do art. 1º, I (ADI 1127).',
        'Habeas corpus: qualquer pessoa pode impetrar HC, para si ou para outra pessoa, mesmo sem ser advogado e sem procuração. Vale em qualquer instância, até no STF (art. 1º, §1º, do Estatuto; art. 654 do CPP).',
        'Juizado Especial Cível estadual: nas causas de até 20 salários mínimos, a parte pode ir sem advogado. Acima de 20 e até 40 salários mínimos, a assistência de advogado é obrigatória (art. 9º da Lei 9.099/95).',
        'Recurso no Juizado: para recorrer da sentença à Turma Recursal, o advogado é sempre obrigatório, não importa o valor da causa (art. 41, §2º, da Lei 9.099/95).',
        'Juizado Especial Federal: nas causas cíveis de até 60 salários mínimos, a parte pode atuar sem advogado (art. 10 da Lei 10.259/01). O STF validou essa regra só para as causas cíveis; no juizado criminal, a defesa técnica por advogado é obrigatória (ADI 3168).',
        'Justiça do Trabalho (jus postulandi, ou seja, "direito de postular" pessoalmente): empregado e empregador podem reclamar pessoalmente e acompanhar o processo até o fim (art. 791 da CLT).',
        'Limite do jus postulandi: ele vale só nas Varas do Trabalho e nos TRTs. Não alcança ação rescisória, ação cautelar, mandado de segurança e recursos de competência do TST. Nesses casos, advogado é obrigatório (Súmula 425 do TST).',
        'Acordo extrajudicial trabalhista: para o juiz homologar acordo feito fora do processo, as partes precisam de advogado, e cada uma deve ter o seu, sem advogado comum (arts. 855-B e 855-B, §1º, da CLT, incluídos pela Reforma Trabalhista, Lei 13.467/17).',
        'Exemplo: Joana teve o celular com defeito e quer R$ 3.000 da loja. Ela vai sozinha ao Juizado Cível e pede o valor. Perdeu a ação? Para recorrer à Turma Recursal, ela precisará contratar advogado ou pedir ajuda à Defensoria.',
        'Exemplo 2: Carlos, garçom, ajuíza reclamação trabalhista sozinho e perde no TRT. Para levar recurso de revista ao TST, ele precisa de advogado (Súmula 425 do TST).',
        'Cuidado (pegadinha): a FGV mistura os números. JEC estadual = até 20 salários mínimos sem advogado; JEF = até 60 salários mínimos. E o jus postulandi não chega ao TST nem ao mandado de segurança.',
        'Como a FGV cobra: caso concreto em que a parte atua sozinha e a pergunta é se o ato é válido. A banca troca o valor da causa, a fase (recurso) ou o tipo de ação (MS, rescisória).',
        'Resumo para revisar: HC sem advogado, em qualquer instância; JEC até 20 SM sem advogado, recurso sempre com advogado; JEF cível até 60 SM; jus postulandi só em Vara e TRT (Súmula 425); acordo extrajudicial trabalhista exige advogados distintos.'
      ],
      cai: [
        'Parte que recorre sozinha no Juizado Especial: a resposta é que o recurso exige advogado (art. 41, §2º, da Lei 9.099/95).',
        'Valor da causa no JEC: até 20 salários mínimos sem advogado; acima disso, assistência obrigatória.',
        'Jus postulandi no TST, em mandado de segurança ou ação rescisória: não cabe (Súmula 425 do TST).',
        'Habeas corpus impetrado por leigo em favor de terceiro: é válido.',
        'Homologação de acordo extrajudicial trabalhista: exige advogados diferentes para cada parte (art. 855-B da CLT).'
      ],
      macetes: [
        'Números dos juizados: "20 no Estado, 60 na União".',
        'Juizado: "1º grau pode sozinho; recurso precisa de advogado".',
        'Súmula 425: jus postulandi "mora no térreo e no 1º andar" (Vara e TRT); "não sobe ao TST, nem entra em MS, rescisória ou cautelar".',
        'Acordo extrajudicial trabalhista: "cada um com o seu advogado".'
      ],
      video: 'OAB ética capacidade postulatória jus postulandi juizado especial habeas corpus sem advogado' },

    { id: 'et-consultoria', titulo: 'Consultoria, assessoria e direção jurídica: atos privativos fora do processo', incidencia: 'media',
      aula: [
        'Em uma frase: advocacia não é só processo; orientar, dar parecer e chefiar o jurídico de uma empresa também são tarefas exclusivas do advogado.',
        'Conceito: consultoria é responder a dúvidas jurídicas, por exemplo com um parecer. Assessoria é acompanhar o cliente no dia a dia, como revisar contratos. Direção jurídica é chefiar o setor jurídico. As três são privativas de advogado (art. 1º, II, do Estatuto).',
        'Direção jurídica: cargo de diretor ou gerente jurídico em qualquer empresa, pública, privada ou paraestatal, inclusive banco, só pode ser ocupado por advogado inscrito na OAB (art. 7º do Regulamento Geral).',
        'Visto em atos constitutivos: contrato social e estatuto de pessoas jurídicas só são registrados com o visto de advogado (art. 1º, §2º). O visto mostra que um profissional conferiu se o documento respeita a lei.',
        'Exceção do visto: microempresa e empresa de pequeno porte estão dispensadas do visto de advogado no registro (art. 9º, §2º, da LC 123/06).',
        'Quem não pode dar o visto: o advogado que presta serviço a órgão ou entidade da administração pública ligada à Junta Comercial ou ao órgão de registro está impedido de dar o visto (art. 2º, parágrafo único, do Regulamento Geral).',
        'Fora do processo também vale o sigilo: o advogado consultor deve guardar segredo do que sabe pela profissão, como o advogado de processo (art. 7º, XIX, do Estatuto; arts. 35 e 36 do CED).',
        'Recusa legítima: o advogado pode recusar, no consultivo, dar opinião sobre direito que também se aplica a ele ou que contraria orientação que ele já deu antes (art. 4º, parágrafo único, do CED).',
        'Independência no emprego: o advogado que é empregado de uma empresa, como gerente jurídico, continua com isenção técnica e independência. O vínculo de emprego não o obriga a dar parecer contra sua consciência (art. 18 do Estatuto).',
        'Exemplo: a empresa Alfa contrata Renato, administrador sem inscrição na OAB, como "diretor jurídico". Ele assina pareceres sobre contratos. A conduta viola o art. 7º do Regulamento Geral e os pareceres são nulos (art. 4º do Estatuto).',
        'Cuidado (pegadinha): a FGV diz que "consultoria jurídica pode ser feita por qualquer bacharel em Direito". Errado: bacharel sem inscrição na OAB não é advogado. Outra: dizer que a ME precisa de visto. Não precisa.',
        'Como a FGV cobra: casos com contadores, administradores ou bacharéis não inscritos dando pareceres, e perguntas sobre o visto em contrato social.',
        'Resumo para revisar: consultoria, assessoria e direção jurídicas são privativas; diretor jurídico só advogado inscrito (art. 7º do RG); visto obrigatório nos atos constitutivos, salvo ME e EPP; advogado empregado mantém independência (art. 18).'
      ],
      cai: [
        'Não advogado em cargo de direção jurídica de empresa ou banco: conduta irregular (art. 7º do Regulamento Geral).',
        'Registro de contrato social sem visto: necessário em regra; dispensado para ME e EPP.',
        'Bacharel não inscrito emitindo parecer: ato privativo praticado por não inscrito, nulo.',
        'Advogado empregado pressionado a mudar parecer técnico: prevalece sua independência (art. 18 do Estatuto).'
      ],
      macetes: [
        'Consultoria = pergunta e resposta; Assessoria = acompanhamento; Direção = chefia. As três exigem OAB.',
        '"Bacharel não é advogado": sem inscrição, nada de parecer.',
        'Diretor jurídico até de banco: "chefe do jurídico, só com carteira da OAB".'
      ],
      video: 'OAB ética consultoria assessoria direção jurídica visto atos constitutivos' },

    { id: 'et-nulidade-atos', titulo: 'Atos praticados por não inscrito, impedido, suspenso ou licenciado: nulidade', incidencia: 'alta',
      aula: [
        'Em uma frase: quem não pode advogar naquele momento e mesmo assim pratica ato privativo produz um ato nulo, ou seja, sem validade.',
        'Regra geral: são nulos os atos privativos de advogado praticados por pessoa não inscrita na OAB. Além da nulidade, ela pode sofrer sanções civis, penais e administrativas (art. 4º, caput, do Estatuto).',
        'Quem mais gera ato nulo: também são nulos os atos praticados por advogado impedido (só no âmbito do impedimento), suspenso, licenciado ou que passou a exercer atividade incompatível (art. 4º, parágrafo único).',
        'Impedido: o impedimento é uma proibição parcial. Exemplo: o servidor público não pode advogar contra a Fazenda que o remunera (art. 30, I). Só o ato praticado dentro dessa proibição é nulo. Os demais atos são válidos.',
        'Suspenso: é o advogado punido com suspensão. Durante o prazo, ele não pode advogar em nenhum lugar do país (art. 37, §1º). Qualquer ato privativo praticado nesse período é nulo.',
        'Licenciado: é o advogado que pediu licença, por exemplo por doença ou por exercer temporariamente atividade incompatível (art. 12). Enquanto estiver licenciado, seus atos privativos são nulos.',
        'Incompatível: é quem passou a ocupar cargo que proíbe totalmente a advocacia, como juiz, promotor, policial ou militar da ativa (art. 28). A proibição vale até em causa própria. Os §§3º e 4º do art. 28, que tentaram liberar policiais e militares, foram declarados inconstitucionais (ADI 7227).',
        'Consequência disciplinar: advogado que advoga estando impedido, ou que facilita o exercício por não inscritos, comete infração (art. 34, I). A pena é de censura (art. 36, I). Advogado suspenso que continua advogando também responde.',
        'Consequência penal: quem exerce profissão sem preencher as condições legais pode responder pela contravenção de exercício ilegal de profissão (art. 47 da Lei de Contravenções Penais).',
        'Anuidade em atraso: o STF decidiu que é inconstitucional suspender o advogado só por falta de pagamento da anuidade (Tema 732). Então, atraso na anuidade, sozinho, não gera suspensão nem nulidade dos atos.',
        'Exemplo: Marcelo foi suspenso por 60 dias. No 20º dia, assina contestação para um cliente. A contestação é nula (art. 4º, parágrafo único) e Marcelo responde disciplinarmente.',
        'Exemplo 2: Lúcia, servidora do INSS e advogada, ajuíza ação contra o INSS. O ato é nulo, pois ela está impedida contra a Fazenda que a paga. Já a ação de divórcio que ela patrocina é válida.',
        'Cuidado (pegadinha): a FGV diz que o ato do impedido é nulo "em todos os processos". Errado: só no âmbito do impedimento. Outra: dizer que o licenciado pode advogar em causa própria. Não pode.',
        'Resumo para revisar: ato privativo de não inscrito é nulo; também é nulo o do suspenso, licenciado e incompatível; o do impedido só é nulo dentro do impedimento; anuidade atrasada não gera suspensão (Tema 732); exercício ilegal é contravenção (art. 47 da LCP).'
      ],
      cai: [
        'Caso de advogado suspenso que pratica ato no período da pena: nulidade do ato (art. 4º, parágrafo único).',
        'Advogado impedido: a FGV cobra que a nulidade se limita ao âmbito do impedimento.',
        'Pessoa não inscrita que assina petição: ato nulo, além de sanções civis, penais e administrativas.',
        'Anuidade em atraso como causa de suspensão: inconstitucional (Tema 732 do STF).'
      ],
      macetes: [
        'Lista do art. 4º: "NÃO ISIL" = Não inscrito, Impedido (no limite), Suspenso, Incompatível, Licenciado.',
        'Impedimento é "cerca parcial"; incompatibilidade é "muro total".',
        'Suspensão = "apagão nacional": vale em todo o país (art. 37, §1º).'
      ],
      video: 'OAB ética nulidade dos atos art 4º Estatuto advogado suspenso licenciado impedido' },

    { id: 'et-mandato-proc', titulo: 'Procuração: prova do mandato, urgência e substabelecimento', incidencia: 'alta',
      aula: [
        'Em uma frase: o advogado precisa mostrar, por procuração, que o cliente o autorizou a agir; em urgência, pode agir antes e juntar a procuração depois.',
        'Conceito: mandato é o contrato em que o cliente dá poderes ao advogado para agir em seu nome. A procuração é o documento que prova esse mandato (art. 5º do Estatuto; art. 653 do Código Civil).',
        'Regra: o advogado postula, em juízo ou fora dele, fazendo prova do mandato (art. 5º, caput). Sem procuração, em regra, não pode atuar (art. 104 do CPC).',
        'Urgência: em caso urgente, o advogado pode atuar sem procuração para evitar perda de prazo, prescrição ou decadência. Ele deve apresentar a procuração em 15 dias, prorrogáveis por igual período (art. 5º, §1º, do Estatuto; art. 104, §1º, do CPC).',
        'Se não juntar: o ato não ratificado (não confirmado) é ineficaz em relação ao cliente. O advogado responde pelas despesas e por perdas e danos (art. 104, §2º, do CPC).',
        'Procuração geral para o foro (ad judicia): habilita o advogado a praticar todos os atos do processo, em qualquer juízo ou instância. A exceção são os atos que exigem poderes especiais (art. 5º, §2º, do Estatuto; art. 105 do CPC).',
        'Poderes especiais: precisam estar escritos na procuração. São eles: receber citação, confessar, reconhecer a procedência do pedido, transigir (fazer acordo), desistir, renunciar ao direito, receber e dar quitação, firmar compromisso e assinar declaração de hipossuficiência econômica (art. 105 do CPC).',
        'Prazo do mandato: o mandato não acaba só porque o tempo passou, salvo se a procuração disser o contrário (art. 18 do CED).',
        'Substabelecimento com reserva: é quando o advogado passa poderes a um colega, mas continua na causa. É ato pessoal do advogado e não depende de aviso ao cliente. O substabelecido deve combinar antes seus honorários com quem substabeleceu (art. 26, caput e §2º, do CED).',
        'Substabelecimento sem reserva: o advogado sai da causa e passa tudo ao colega. Exige prévio e inequívoco conhecimento do cliente, ou seja, o cliente precisa saber antes, de forma clara (art. 26, §1º, do CED).',
        'Renúncia: o advogado pode renunciar ao mandato sem dizer o motivo (art. 16 do CED). Mas continua representando o cliente nos 10 dias seguintes à notificação, salvo se for substituído antes (art. 5º, §3º, do Estatuto; art. 112 do CPC).',
        'Cliente com outro advogado: o advogado não deve aceitar procuração de quem já tem advogado na causa sem avisar antes o colega, salvo motivo plenamente justificável ou medida urgente e inadiável (art. 14 do CED).',
        'Exemplo: Dona Rita procura a advogada Bianca no último dia do prazo para contestar, mas a procuração assinada está em outra cidade. Bianca protocola a contestação e tem 15 dias, prorrogáveis por mais 15, para juntar a procuração.',
        'Cuidado (pegadinha): a FGV troca os prazos (15 dias na urgência; 10 dias na renúncia). Também diz que substabelecimento com reserva exige aviso ao cliente. Errado: quem exige é o sem reserva.',
        'Resumo para revisar: urgência = 15 + 15 dias para juntar procuração; procuração geral não dá poderes especiais (art. 105 do CPC); com reserva é ato pessoal; sem reserva exige conhecimento prévio do cliente; renúncia = 10 dias de representação após notificar.'
      ],
      cai: [
        'Advogado atua sem procuração em caso urgente: prazo de 15 dias, prorrogável por igual período (art. 5º, §1º).',
        'Procuração "para o foro em geral" usada para fazer acordo ou dar quitação: faltam poderes especiais (art. 105 do CPC).',
        'Substabelecimento sem reserva sem ciência do cliente: viola o art. 26, §1º, do CED.',
        'Renúncia ao mandato: dever de continuar por 10 dias após a notificação, salvo substituição antes.'
      ],
      macetes: [
        '"15 urgente, 10 renuncia": 15 dias para juntar procuração; 10 dias depois da renúncia.',
        'Com reserva = "fico e chamo ajuda" (ato pessoal); sem reserva = "saio e passo a bola" (cliente precisa saber).',
        'Poderes especiais = os atos que "mexem no direito ou no dinheiro" do cliente: acordo, desistência, renúncia, confissão, quitação.'
      ],
      video: 'OAB ética procuração mandato urgência 15 dias substabelecimento com e sem reserva' },

    { id: 'et-funcao-social', titulo: 'Função social do advogado, independência e isenção técnica', incidencia: 'media',
      aula: [
        'Em uma frase: o advogado trabalha para o cliente, mas também para a sociedade, e por isso deve agir com independência, sem medo de autoridade e sem se curvar ao patrão.',
        'Função social: mesmo no escritório particular, o advogado presta serviço público e exerce função social (art. 2º, §1º, do Estatuto). Ele é defensor do Estado Democrático de Direito, da cidadania e da justiça (art. 2º do CED).',
        'Sem hierarquia: não há hierarquia nem subordinação entre advogados, juízes e membros do Ministério Público. Todos devem se tratar com respeito mútuo (art. 6º do Estatuto).',
        'Independência: o advogado deve manter a independência em qualquer circunstância (art. 31, §1º). Nenhum receio de desagradar juiz ou autoridade, nem de ficar impopular, deve impedi-lo de trabalhar (art. 31, §2º).',
        'Defesa criminal: o advogado tem o direito e o dever de defender o acusado sem levar em conta a própria opinião sobre a culpa dele (art. 23 do CED). Defender um acusado não é apoiar o crime.',
        'Advogado empregado: a relação de emprego não retira a isenção técnica nem reduz a independência profissional (art. 18 do Estatuto). Ele também não é obrigado a prestar serviços de interesse pessoal do patrão fora da relação de emprego (art. 18, parágrafo único).',
        'Vínculo permanente: mesmo o advogado de departamento jurídico ou de órgão público deve zelar pela sua liberdade e independência (art. 4º do CED).',
        'Recusa legítima: é legítimo o advogado recusar causa ou parecer sobre direito que também se aplica a ele, ou que contraria orientação que ele mesmo já deu (art. 4º, parágrafo único, do CED).',
        'Inviolabilidade: o advogado é inviolável por seus atos e manifestações no exercício da profissão, nos limites da lei (art. 133 da CF; art. 2º, §3º, do Estatuto). Isso não é carta branca: abusos podem gerar punição.',
        'Responsabilidade: o advogado responde pelos atos que, por dolo ou culpa, praticar na profissão. Na lide temerária (ação claramente infundada e de má-fé), responde junto com o cliente, se houver conluio para prejudicar a parte contrária, apurado em ação própria (art. 32 e parágrafo único).',
        'Exemplo: Rafael é advogado empregado de um banco. O diretor pede que ele faça um parecer dizendo que uma cláusula abusiva é legal. Rafael pode manter sua opinião técnica, pois o emprego não reduz sua independência (art. 18).',
        'Cuidado (pegadinha): a FGV diz que o advogado empregado "deve seguir as orientações técnicas do empregador". Errado: deve seguir a ordem administrativa, mas mantém isenção técnica. Outra: dizer que o juiz é "superior hierárquico" do advogado. Não há hierarquia (art. 6º).',
        'Como a FGV cobra: casos de pressão do empregador, de juiz que trata advogado como subordinado e de advogado que hesita em defender acusado de crime grave.',
        'Resumo para revisar: advogado presta serviço público e exerce função social; não há hierarquia com juiz e MP; independência em qualquer circunstância; emprego não retira isenção técnica; responde por dolo ou culpa e, na lide temerária, junto com o cliente se houver conluio.'
      ],
      cai: [
        'Advogado empregado pressionado a mudar entendimento técnico: prevalece a independência (art. 18 do Estatuto).',
        'Afirmação de que existe hierarquia entre juiz e advogado: falsa (art. 6º).',
        'Advogado que recusa defesa por achar o réu culpado: o CED diz que ele tem o direito e o dever de defender independentemente da opinião sobre a culpa (art. 23).',
        'Lide temerária: responsabilidade solidária com o cliente, se coligado para lesar a parte contrária, apurada em ação própria (art. 32, parágrafo único).'
      ],
      macetes: [
        '"Emprego dá patrão, não dá dono da opinião": isenção técnica preservada (art. 18).',
        'Art. 6º: "juiz, promotor e advogado, cada um no seu lugar, ninguém acima de ninguém".',
        'Art. 31: "sem medo de juiz e sem medo da opinião pública".'
      ],
      video: 'OAB ética independência do advogado isenção técnica advogado empregado função social' }
  ]);
})();
