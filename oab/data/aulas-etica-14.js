/* Aulas adicionais – lote etica-14 (Ética: processo disciplinar). */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);

  add('etica', [
    { id: 'processodisc', titulo: 'Processo disciplinar: competência, prazos, recursos e revisão', incidencia: 'alta',
      aula: [
        'Em uma frase: quando um advogado pisa na bola, quem julga é a própria OAB, num processo com regras, prazos e recursos parecidos com os de um processo comum.',
        'Para que serve: o processo disciplinar apura se o advogado cometeu uma infração ética, ou seja, uma falta prevista no Estatuto ou no Código de Ética. Ele garante ao advogado o direito de se defender antes de qualquer punição (art. 73, §1º, do Estatuto).',
        'Competência pelo lugar do fato: quem tem poder para punir é o Conselho Seccional do estado onde a infração aconteceu. Não importa onde o advogado tem inscrição. A exceção é a falta cometida perante o Conselho Federal, que julga a si mesmo (art. 70, caput).',
        'Quem julga de fato: dentro do Conselho Seccional, o órgão que julga em primeira instância é o Tribunal de Ética e Disciplina, o TED. A instrução, ou seja, a coleta de provas, pode ser feita pela Subseção ou por relatores do próprio Conselho (art. 70, §1º).',
        'Comunicação da condenação: quando a condenação fica definitiva, ela deve ser comunicada logo ao Conselho Seccional onde o advogado tem a inscrição principal. É lá que fica a ficha dele (art. 70, §2º).',
        'Prazo padrão de 15 dias: todos os prazos para advogados, estagiários e terceiros nos processos da OAB são de 15 dias, inclusive para recorrer. O prazo começa no primeiro dia útil depois da notificação (art. 69, caput e §1º).',
        'Lei de apoio: o que o Estatuto não regula no processo disciplinar é completado, primeiro, pelas regras do processo penal comum. Nos demais processos da OAB, usam-se as regras do processo administrativo e, depois, as do processo civil (art. 68).',
        'Recursos: das decisões do TED, do Presidente do Seccional e da diretoria da Subseção ou da Caixa cabe recurso ao Conselho Seccional (art. 76). Das decisões definitivas do Seccional cabe recurso ao Conselho Federal, nos casos do art. 75.',
        'Revisão: mesmo depois de terminado, o processo pode ser revisto em dois casos: erro de julgamento ou condenação baseada em prova falsa (art. 73, §5º). Pense nela como uma "ação rescisória" da OAB.',
        'Esfera independente: a punição da OAB não depende do juiz, e a do juiz não depende da OAB. A jurisdição disciplinar não exclui a comum (art. 71). O advogado pode ser punido nas duas esferas pelo mesmo fato.',
        'Exemplo: Bruno, inscrito em Minas, faz uma audiência em Vitória e ofende o juiz com palavras de baixo calão. Quem o processa é a OAB do Espírito Santo, onde ocorreu o fato. Se ele for condenado de forma definitiva, a OAB/ES comunica a OAB/MG.',
        'Cuidado (pegadinha): a FGV troca "lugar da infração" por "lugar da inscrição principal". A competência para PUNIR é do lugar do fato. Já a suspensão PREVENTIVA é decidida pelo TED da inscrição principal (art. 70, §3º).',
        'Como a FGV cobra: casos com advogado de um estado atuando em outro, perguntas sobre o prazo de 15 dias e sobre quais motivos permitem a revisão.',
        'Resumo para revisar: pune o Seccional do lugar do fato; julga o TED; prazos de 15 dias; processo penal é a lei de apoio; revisão por erro de julgamento ou prova falsa.'
      ],
      cai: [
        'Advogado inscrito em um estado que comete infração em outro: competência do Seccional do lugar da infração (art. 70).',
        'Prazo de 15 dias para defesa e para todos os recursos (art. 69).',
        'Hipóteses de revisão: erro de julgamento ou condenação baseada em falsa prova (art. 73, §5º).',
        'Aplicação subsidiária do processo penal ao processo disciplinar (art. 68).'
      ],
      macetes: [
        'Puniu? Onde PECOU. Suspendeu preventivamente? Onde MORA (inscrição principal).',
        'Na OAB tudo é 15: defesa, razões e recurso.',
        'Revisão = "erro ou mentira": erro de julgamento ou prova falsa.',
        'Lei de apoio do disciplinar: Penal primeiro (P de Punição).'
      ],
      video: 'OAB ética processo disciplinar competência prazos recursos revisão' },

    { id: 'et-ted', titulo: 'Tribunal de Ética e Disciplina: competência e procedimento', incidencia: 'media',
      aula: [
        'Em uma frase: o TED é o "tribunal" interno de cada OAB estadual, que julga os advogados e tira dúvidas sobre ética.',
        'Conceito: o Tribunal de Ética e Disciplina é um órgão do Conselho Seccional. Cada Seccional tem o seu. Ele é a primeira instância dos processos ético-disciplinares (art. 70, §1º, do Estatuto; art. 71, I, do CED).',
        'Julgar processos: a tarefa principal do TED é julgar, em primeira instância, os processos disciplinares. A instrução pode vir pronta da Subseção ou de um relator, e o TED decide (art. 70, §1º, e art. 61, parágrafo único, "c", do Estatuto).',
        'Responder consultas em tese: o TED responde dúvidas sobre ética feitas "em tese", ou seja, em abstrato, sem tratar de um caso concreto já em discussão (art. 71, II, do CED). Exemplo: "o advogado pode anunciar em rede social?".',
        'Suspender preventivamente: o TED da inscrição principal pode afastar o advogado antes do fim do processo, em caso grave que prejudique a imagem da advocacia (art. 70, §3º, do Estatuto; art. 71, IV, do CED).',
        'Mediar conflitos: o TED pode atuar como mediador ou conciliador em brigas entre advogados, na divisão de honorários contratados em conjunto ou por substabelecimento, e na dissolução de sociedade de advogados (art. 71, VI, do CED).',
        'Ensinar: o TED também organiza cursos, palestras e seminários sobre ética profissional, de forma preventiva (art. 71, V, do CED).',
        'Defesa oral: no julgamento perante o TED, o advogado acusado tem direito de fazer defesa oral, ou seja, falar na sessão (art. 73, §1º, do Estatuto).',
        'Recurso: a decisão do TED não é a última palavra. Dela cabe recurso ao Conselho Seccional, em 15 dias (arts. 69 e 76 do Estatuto).',
        'Exemplo: as advogadas Ana e Clara trabalharam juntas numa causa e brigaram pela divisão dos honorários. Em vez de ir ao Judiciário, podem pedir ao TED que atue como mediador.',
        'Cuidado (pegadinha): o TED não é órgão do Conselho Federal nem da Subseção. Ele pertence ao Conselho Seccional. A Subseção pode instruir o processo, mas quem julga é o TED.',
        'Como a FGV cobra: pergunta qual das atribuições NÃO é do TED, ou coloca a Subseção julgando o processo, o que está errado.',
        'Resumo para revisar: TED é órgão do Seccional; julga em primeira instância; responde consultas em tese; suspende preventivamente; media conflitos entre advogados.'
      ],
      cai: [
        'Lista de competências do TED (art. 71 do CED): julgar, consultas em tese, suspensão preventiva, mediação, cursos.',
        'Subseção instrui, TED julga (art. 61, parágrafo único, "c", e art. 70, §1º).',
        'Recurso da decisão do TED vai ao Conselho Seccional (art. 76).'
      ],
      macetes: [
        'TED faz "J.C.S.M.E.": Julga, Consulta, Suspende, Media, Ensina.',
        'Subseção prepara o prato; TED serve o veredito.',
        'Consulta ao TED é sempre "em tese": nada de caso concreto.'
      ],
      video: 'Tribunal de Ética e Disciplina OAB competência art 71 Código de Ética' },

    { id: 'et-instauracao', titulo: 'Instauração, defesa prévia, instrução e julgamento', incidencia: 'alta',
      aula: [
        'Em uma frase: o processo começa por iniciativa da OAB ou por reclamação de alguém, passa pela defesa, pelas provas e termina num julgamento no TED.',
        'Como começa: o processo disciplinar pode ser aberto de ofício, ou seja, pela própria OAB, ou por representação de qualquer autoridade ou pessoa interessada (art. 72 do Estatuto; art. 55 do CED).',
        'Denúncia anônima: a representação não pode ser anônima. O CED não aceita denúncia anônima como fonte idônea para abrir processo (art. 55, §2º, do CED). Mas a OAB pode agir de ofício se souber do fato por outros meios.',
        'Forma da representação: é dirigida ao Presidente do Conselho Seccional ou da Subseção. Pode ser escrita ou verbal; se for verbal, é reduzida a termo, ou seja, passada para o papel (art. 56 do CED).',
        'Relator: recebida a representação, o Presidente designa um relator. Ele conduz a instrução e dá um parecer preliminar ao TED (art. 73, caput, do Estatuto).',
        'Defesa prévia: o advogado é notificado e tem 15 dias para apresentar defesa prévia, podendo indicar testemunhas. O relator pode prorrogar esse prazo por motivo relevante (art. 73, §§1º e 3º; art. 69).',
        'Arquivamento liminar: se, depois da defesa prévia, o relator achar que a representação não deve seguir, quem decide o arquivamento é o Presidente do Conselho Seccional (art. 73, §2º, do Estatuto).',
        'Defensor dativo: se o advogado não for encontrado ou for revel, ou seja, não se defender, o Presidente do Conselho ou da Subseção nomeia um defensor dativo, um advogado para defendê-lo (art. 73, §4º).',
        'Razões finais e defesa oral: terminadas as provas, o acusado apresenta razões finais. No julgamento pelo TED, pode fazer defesa oral (art. 73, §1º).',
        'Notificação: as notificações são feitas por ofício reservado, com aviso de recebimento, ou por edital se o advogado não for localizado. O sigilo protege o acusado (art. 69, §1º, e art. 72, §2º).',
        'Exemplo: Dona Lúcia acha que a advogada Paula sumiu com seu processo. Ela vai à Subseção e reclama verbalmente. O funcionário reduz a termo, o Presidente nomeia relator e Paula é notificada para a defesa prévia em 15 dias.',
        'Cuidado (pegadinha): a FGV diz que só o cliente pode representar. Errado: qualquer autoridade ou pessoa interessada pode, e a OAB pode agir sozinha (art. 72).',
        'Como a FGV cobra: quem pode iniciar o processo, quem decide o arquivamento liminar, o que acontece com o revel e qual o prazo da defesa prévia.',
        'Resumo para revisar: começa de ofício ou por representação; nada de anônimo; defesa prévia em 15 dias; arquivamento liminar pelo Presidente do Seccional; revel ganha defensor dativo.'
      ],
      cai: [
        'Legitimidade para representar: qualquer autoridade ou pessoa interessada, além da instauração de ofício (art. 72).',
        'Revel ou não encontrado: nomeação de defensor dativo (art. 73, §4º).',
        'Indeferimento liminar decidido pelo Presidente do Conselho Seccional (art. 73, §2º).',
        'Direitos de defesa: defesa prévia, razões finais e defesa oral (art. 73, §1º).'
      ],
      macetes: [
        'Ordem do rito: Representação, Relator, Defesa prévia, Provas, Razões finais, TED (R-R-D-P-R-T).',
        'Revel na OAB não fica sozinho: ganha dativo.',
        'Anônimo não abre processo; a OAB de ofício abre.'
      ],
      video: 'processo disciplinar OAB instauração defesa prévia defensor dativo art 73' },

    { id: 'et-suspensao-preventiva', titulo: 'Suspensão preventiva e sigilo do processo', incidencia: 'media',
      aula: [
        'Em uma frase: em casos muito graves, a OAB pode afastar o advogado antes de terminar o processo, mas tudo corre em segredo até o fim.',
        'Conceito: a suspensão preventiva é um afastamento provisório do advogado. Ela não é a pena final. Serve para proteger a imagem da advocacia enquanto o processo corre (art. 70, §3º, do Estatuto).',
        'Quem decide: o TED do Conselho Seccional onde o advogado tem inscrição PRINCIPAL. Não é o TED do lugar do fato (art. 70, §3º).',
        'Requisito: o caso precisa ter repercussão prejudicial à dignidade da advocacia. Em palavras simples: um escândalo que mancha a imagem de toda a classe.',
        'Sessão especial: antes de suspender, o TED deve ouvir o advogado em sessão especial, para a qual ele é notificado. Só se ele não comparecer é que a decisão pode sair sem ouvi-lo (art. 70, §3º).',
        'Prazo de 90 dias: aplicada a suspensão preventiva, o processo disciplinar deve ser concluído em no máximo 90 dias (art. 70, §3º). O advogado não pode ficar afastado indefinidamente.',
        'Recurso sem efeito suspensivo: em regra, os recursos na OAB suspendem a decisão. Mas o recurso contra a suspensão preventiva NÃO tem efeito suspensivo. O advogado continua afastado enquanto recorre (art. 77).',
        'Sigilo: o processo disciplinar corre em sigilo até o fim. Só têm acesso as partes, seus defensores e a autoridade judiciária competente (art. 72, §2º).',
        'Publicidade da pena: depois do trânsito em julgado, a sanção é anotada na ficha do advogado. A censura não pode ser divulgada (art. 35, parágrafo único). Já a suspensão e a exclusão são divulgadas, porque o público precisa saber que ele não pode advogar.',
        'Exemplo: o advogado Rogério aparece no jornal nacional acusado de fraudar centenas de aposentados. Ele é inscrito em Goiás. O TED de Goiás o notifica, ouve em sessão especial e o suspende preventivamente. A OAB tem 90 dias para concluir o processo.',
        'Cuidado (pegadinha): a FGV diz que a suspensão preventiva pode ser decretada sem ouvir o advogado. Errado: ele deve ser notificado para a sessão especial; só se não comparecer se decide sem ele.',
        'Como a FGV cobra: competência (inscrição principal), requisito da repercussão, prazo de 90 dias, ausência de efeito suspensivo e quem acessa o processo sigiloso.',
        'Resumo para revisar: decide o TED da inscrição principal; exige repercussão prejudicial à dignidade da advocacia; ouvir em sessão especial; concluir em 90 dias; recurso sem efeito suspensivo.'
      ],
      cai: [
        'TED competente para a suspensão preventiva: o da inscrição principal (art. 70, §3º).',
        'Prazo máximo de 90 dias para concluir o processo após a suspensão preventiva.',
        'Recurso contra suspensão preventiva não tem efeito suspensivo (art. 77).',
        'Sigilo: acesso só às partes, defensores e autoridade judiciária (art. 72, §2º).'
      ],
      macetes: [
        'Preventiva: "Principal, Prejuízo, Presença, Prazo de 90" (4 P).',
        'Sigilo até o fim: Partes, Procuradores e o Juiz.',
        'Recurso na OAB suspende tudo, menos "E.S.C.": Eleição, Suspensão preventiva, Cancelamento por falsa prova.'
      ],
      video: 'suspensão preventiva OAB art 70 §3 sigilo processo disciplinar' },

    { id: 'et-recursos-oab', titulo: 'Recursos no sistema da OAB: prazos e efeitos', incidencia: 'alta',
      aula: [
        'Em uma frase: quem perde na OAB pode recorrer em 15 dias, e quase sempre o recurso congela a decisão até o novo julgamento.',
        'Para que serve: o recurso leva a decisão a um órgão superior da OAB, que pode mantê-la ou mudá-la. É a garantia do duplo grau, ou seja, de um segundo julgamento.',
        'Recurso ao Conselho Seccional: cabe contra todas as decisões do Presidente do Conselho Seccional, do TED e da diretoria da Subseção ou da Caixa de Assistência dos Advogados (art. 76 do Estatuto).',
        'Recurso ao Conselho Federal: cabe contra decisões definitivas do Conselho Seccional em duas situações. Primeira: quando a decisão não foi unânime. Segunda: quando, mesmo unânime, contrariar o Estatuto, decisão do Conselho Federal ou de outro Seccional, o Regulamento Geral, o Código de Ética ou os Provimentos (art. 75).',
        'Quem pode recorrer ao Conselho Federal: as partes interessadas e também o Presidente do Conselho Seccional (art. 75, parágrafo único).',
        'Prazo: 15 dias para qualquer recurso, contados do primeiro dia útil após a notificação (art. 69). Publicada no Diário Eletrônico da OAB, conta-se do primeiro dia útil seguinte à publicação (art. 69, §2º).',
        'Efeito suspensivo como regra: todos os recursos têm efeito suspensivo, ou seja, a decisão não produz efeitos enquanto o recurso não é julgado (art. 77).',
        'Exceções ao efeito suspensivo: não suspendem a decisão os recursos sobre eleições, sobre suspensão preventiva decidida pelo TED e sobre cancelamento de inscrição obtida com prova falsa (art. 77).',
        'Embargos de declaração: o Regulamento Geral admite embargos de declaração para corrigir omissão, contradição ou obscuridade nas decisões da OAB (art. 138 do Regulamento Geral).',
        'Exemplo: Marina foi condenada à suspensão por 30 dias pelo TED de Pernambuco. Ela recorre ao Conselho Seccional no 10º dia. Enquanto o recurso não é julgado, ela continua advogando, porque o recurso tem efeito suspensivo.',
        'Cuidado (pegadinha): decisão UNÂNIME do Seccional também pode ir ao Conselho Federal, se contrariar a lei ou decisões da OAB. A unanimidade não fecha a porta sozinha.',
        'Como a FGV cobra: casos para saber se o recurso suspende a decisão, para onde vai o recurso e se decisão unânime pode ir ao Conselho Federal.',
        'Resumo para revisar: TED, Presidente e Subseção recorrem ao Seccional; Seccional recorre ao Federal (não unânime ou contrária a normas); prazo de 15 dias; efeito suspensivo é a regra; exceções: eleição, suspensão preventiva e inscrição com prova falsa.'
      ],
      cai: [
        'Hipóteses de recurso ao Conselho Federal (art. 75), inclusive decisão unânime contrária a normas.',
        'Efeito suspensivo e suas três exceções (art. 77).',
        'Prazo de 15 dias para recorrer (art. 69).',
        'Legitimidade do Presidente do Seccional para recorrer ao Conselho Federal (art. 75, parágrafo único).'
      ],
      macetes: [
        'Escada: TED, Seccional, Federal.',
        'Ao Federal sobe o "dividido" ou o "desobediente": não unânime ou contrário às normas.',
        'Exceções ao efeito suspensivo: E.S.C. (Eleição, Suspensão preventiva, Cancelamento por prova falsa).'
      ],
      video: 'recursos OAB art 75 76 77 efeito suspensivo Estatuto' },

    { id: 'et-prescricao-disc', titulo: 'Prescrição da pretensão disciplinar e intercorrente', incidencia: 'alta',
      aula: [
        'Em uma frase: a OAB tem 5 anos para punir, contados de quando soube oficialmente do fato; e se o processo ficar parado mais de 3 anos, ele morre.',
        'Conceito: prescrição é a perda do poder de punir pelo passar do tempo. Ela dá segurança: ninguém fica para sempre sob ameaça de punição.',
        'Prazo de 5 anos: a pretensão à punibilidade das infrações disciplinares prescreve em 5 anos (art. 43, caput, do Estatuto).',
        'Início do prazo: os 5 anos contam da constatação oficial do fato, ou seja, de quando a OAB toma conhecimento formal dele. Não contam da data em que a infração foi praticada (art. 43, caput).',
        'Prescrição intercorrente: é a que acontece durante o processo. Se o processo ficar parado por mais de 3 anos, esperando despacho ou julgamento, ele é arquivado (art. 43, §1º).',
        'Como se arquiva: o arquivamento pela intercorrente é feito de ofício ou a pedido do interessado. E quem deixou o processo parado pode responder por isso (art. 43, §1º).',
        'Interrupção pela instauração: a prescrição se interrompe, ou seja, o prazo volta a zero, com a instauração do processo disciplinar ou com a notificação válida feita diretamente ao representado (art. 43, §2º, I).',
        'Interrupção pela condenação: a decisão condenatória recorrível de qualquer órgão julgador da OAB também interrompe a prescrição (art. 43, §2º, II).',
        'Prescrição de honorários não se confunde: a cobrança de honorários pelo advogado prescreve em 5 anos (art. 25). É outro assunto, sobre dinheiro, e não sobre punição.',
        'Exemplo: em 2018, o advogado Davi reteve documentos de um cliente. A OAB só soube oficialmente do fato em 2022. O prazo de 5 anos conta de 2022, não de 2018. Instaurado o processo em 2023, o prazo recomeça do zero.',
        'Cuidado (pegadinha): a FGV troca os números. Intercorrente é 3 anos; prescrição geral é 5 anos. E a FGV costuma dizer que o prazo conta "da data do fato": errado, conta da constatação oficial.',
        'Como a FGV cobra: casos com datas para o aluno contar o prazo, dizer se houve interrupção ou se o processo parado por mais de 3 anos deve ser arquivado.',
        'Resumo para revisar: 5 anos da constatação oficial; intercorrente de 3 anos parado; arquivamento de ofício ou a pedido; interrompem: instauração ou notificação válida e decisão condenatória recorrível.'
      ],
      cai: [
        'Termo inicial: constatação oficial do fato, não a data da infração (art. 43).',
        'Intercorrente: processo paralisado por mais de 3 anos pendente de despacho ou julgamento (art. 43, §1º).',
        'Causas de interrupção (art. 43, §2º): instauração ou notificação válida; decisão condenatória recorrível.',
        'Confusão proposital com a prescrição de honorários (art. 25).'
      ],
      macetes: [
        '5 para punir, 3 parado: "5 de fora, 3 de dentro" (fora do processo e dentro dele).',
        'O relógio começa quando a OAB VÊ, não quando o advogado FAZ.',
        'Zera o relógio: "Abriu ou Condenou".'
      ],
      video: 'prescrição disciplinar OAB art 43 intercorrente 3 anos' }
  ]);
})();
