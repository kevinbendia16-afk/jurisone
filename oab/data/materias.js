/* Conteúdo da 1ª fase (Exame de Ordem – FGV).
 * "qtd" = média aproximada de questões por prova (confira sempre o edital vigente).
 * Cada tópico: aula (explicação), cai (o que a FGV cobra), macetes, video (busca no YouTube)
 * e videoId opcional (ID de um vídeo do YouTube para tocar dentro do app). */
window.MATERIAS = [
{
  id: 'etica', nome: 'Ética Profissional', icone: '⚖️', qtd: 8, cor: '#f5b942',
  dica: 'A matéria que mais aprova: 8 questões, quase todas de letra de lei (Estatuto – Lei 8.906/94, Código de Ética e Regulamento Geral). Leia o Estatuto inteiro pelo menos 3 vezes.',
  topicos: [
    { id: 'inscricao', titulo: 'Inscrição, incompatibilidade e impedimento', incidencia: 'alta',
      aula: [
        'Para se inscrever como advogado (art. 8º do Estatuto) é preciso: capacidade civil, diploma de bacharel em Direito, título de eleitor e quitação militar (se brasileiro), aprovação no Exame de Ordem, não exercer atividade incompatível, idoneidade moral e prestar compromisso perante o Conselho.',
        'INCOMPATIBILIDADE (art. 28) = proibição TOTAL de advogar, mesmo em causa própria. Atinge, por exemplo: chefes do Executivo e membros das Mesas do Legislativo, magistrados, membros do MP, policiais de qualquer natureza, militares na ativa, ocupantes de cargos ligados à arrecadação de tributos e servidores do Judiciário.',
        'Outras incompatibilidades do art. 28 que a FGV cobra: cargos de direção na Administração direta ou indireta (III), titulares de serviços notariais e de registro (IV) e funções de direção e gerência em instituições financeiras, inclusive privadas (VIII). A incompatibilidade permanece mesmo com afastamento temporário do cargo (§1º); no inciso III, não atinge quem não tem poder de decisão relevante sobre interesses de terceiros nem a administração acadêmica ligada ao magistério jurídico (§2º). Já procuradores-gerais, advogados-gerais, defensores-gerais e dirigentes de órgãos jurídicos públicos só podem exercer a advocacia vinculada à função, durante a investidura (art. 29).',
        'IMPEDIMENTO (art. 30) = proibição PARCIAL. Servidores públicos não podem advogar contra a Fazenda que os remunera; membros do Poder Legislativo, em todos os níveis, não podem advogar contra ou a favor das pessoas jurídicas de direito público, empresas públicas, sociedades de economia mista, fundações públicas, entidades paraestatais ou concessionárias e permissionárias de serviço público. Docentes de cursos jurídicos NÃO são impedidos (art. 30, parágrafo único: a exceção vale só para o inciso I, o dos servidores).'
      ],
      cai: ['Diferenciar incompatibilidade (total) de impedimento (parcial)', 'Quem pode advogar em causa própria', 'Exceções: professores de Direito e cargos sem poder de decisão'],
      macetes: ['INcompatível = INteiramente proibido. IMpedido = IMpedido só em parte.', 'Policial e militar da ativa? Incompatibilidade, nem em causa própria.',
        'A Lei 14.365/22 incluiu os §§3º e 4º no art. 28 para deixar policial e militar advogar em causa própria, mas o STF os declarou inconstitucionais (ADI 7227): a incompatibilidade continua total.', 'Servidor comum? Só não pode advogar contra quem paga o salário dele.'],
      video: 'OAB ética incompatibilidade e impedimento estatuto art 28 art 30' },
    { id: 'honorarios', titulo: 'Honorários advocatícios', incidencia: 'alta',
      aula: [
        'Existem três espécies: CONTRATUAIS (combinados com o cliente), SUCUMBENCIAIS (pagos pela parte vencida) e ARBITRADOS judicialmente (quando não há contrato).',
        'Sem estipulação em contrário, 1/3 dos honorários é devido no início do serviço, 1/3 até a decisão de primeira instância e o restante ao final (art. 22, §3º). Se o contrato for juntado aos autos antes do mandado de levantamento ou do precatório, o juiz manda pagar os honorários direto ao advogado, deduzindo-os do que o cliente vai receber, salvo se o cliente provar que já os pagou (§4º). O advogado nomeado pelo juiz por impossibilidade da Defensoria Pública no local tem honorários fixados pelo juiz segundo a tabela da Seccional, pagos pelo Estado (§1º).',
        'Os honorários de sucumbência PERTENCEM AO ADVOGADO (art. 23), têm natureza alimentar (art. 85, §14, CPC; Súmula Vinculante 47) e o advogado tem direito autônomo de executá-los em nome próprio. A decisão judicial que fixa ou arbitra honorários e o contrato escrito são títulos executivos e constituem crédito privilegiado na falência e na insolvência (art. 24); o contrato escrito é título executivo extrajudicial.',
        'Prescreve em 5 ANOS a ação de cobrança de honorários (art. 25), contados do vencimento do contrato, do trânsito em julgado, da ultimação do serviço extrajudicial, da desistência/transação ou da renúncia/revogação do mandato.',
        'Quota litis (art. 50, CED): os honorários devem ser em dinheiro e, somados aos de sucumbência, não podem superar as vantagens obtidas pelo cliente; receber bens do cliente só excepcionalmente, se ele comprovadamente não tiver condições de pagar em dinheiro, e por contrato escrito. O crédito de honorários NÃO autoriza saque de duplicata nem de outro título de crédito mercantil: só se emite fatura, quando o cliente quiser, e ela não pode ser protestada; cheque ou nota promissória emitidos pelo cliente podem ser protestados depois de frustrada a cobrança amigável (art. 52, CED).',
        'O Código de Ética proíbe o aviltamento: o advogado deve observar o valor mínimo da Tabela de Honorários da Seccional onde o serviço for prestado, inclusive diligências (art. 48, §6º, CED), e fixar os honorários com moderação (art. 49, CED). Na advocacia pro bono não pode haver cobrança.'
      ],
      cai: ['Titularidade da sucumbência', 'Prazo prescricional de 5 anos e termo inicial', 'Cláusula quota litis (permitida, mas os honorários não podem superar as vantagens do cliente)'],
      macetes: ['Sucumbência é do ADVOGADO, nunca do cliente.', 'Honorários = 5 anos (pense: 5 dedos para contar o dinheiro).'],
      video: 'OAB ética honorários advocatícios sucumbência prescrição 5 anos' },
    { id: 'disciplina', titulo: 'Infrações, sanções e processo disciplinar', incidencia: 'alta',
      aula: [
        'Sanções (art. 35): CENSURA, SUSPENSÃO, EXCLUSÃO e MULTA. A censura pode ser convertida em advertência, em ofício reservado, se houver atenuante.',
        'Qual sanção para qual conduta: CENSURA para os incisos I a XVI e XXIX do art. 34 e para violação do Código de Ética (art. 36); SUSPENSÃO para os incisos XVII a XXV e XXX (assédio moral, assédio sexual ou discriminação, incluído pela Lei 14.612/23) e para a reincidência em infração disciplinar (art. 37); EXCLUSÃO para os incisos XXVI a XXVIII (falsa prova de requisito de inscrição, inidoneidade moral, crime infamante) ou após 3 suspensões (art. 38). MULTA: de 1 a 10 anuidades, sempre cumulada com censura ou suspensão, quando houver agravantes (art. 39).',
        'Suspensão: de 30 dias a 12 meses. Se o advogado se recusa injustificadamente a prestar contas ao cliente (art. 34, XXI), a suspensão perdura até a satisfação integral da dívida, com correção monetária; na inépcia profissional (XXIV), até a aprovação em novas provas de habilitação (art. 37, §§2º e 3º). A suspensão por falta de pagamento de anuidade (art. 34, XXIII) foi declarada inconstitucional pelo STF (RE 647.885, Tema 732).',
        'Exclusão: aplicada após 3 suspensões, ou em casos como falsa prova de requisito de inscrição, tornar-se moralmente inidôneo e crime infamante. Exige manifestação favorável de 2/3 dos membros do Conselho Seccional.',
        'O poder de punir prescreve em 5 ANOS a contar da data da constatação oficial do fato (art. 43). Processo paralisado por mais de 3 anos aguardando despacho gera prescrição intercorrente.',
        'Suspensão preventiva: o TED do Conselho onde o advogado tem inscrição principal pode suspendê-lo preventivamente, em caso de repercussão prejudicial à dignidade da advocacia, depois de ouvi-lo em sessão especial; o processo deve então terminar em até 90 dias (art. 70, §3º). Reabilitação: pode ser pedida 1 ano após o cumprimento da sanção, com provas efetivas de bom comportamento; se a falta resultou de crime, depende também da reabilitação criminal (art. 41).',
        'O processo disciplinar tramita em sigilo até o término (art. 72, §2º). O poder de punir é do Conselho Seccional em cuja base territorial ocorreu a infração, salvo falta cometida perante o Conselho Federal (art. 70); quem julga é o TED do Seccional (art. 70, §1º). Prazo de recursos: 15 dias.'
      ],
      cai: ['Qual sanção para qual conduta', 'Quórum de 2/3 para exclusão', 'Prescrição de 5 anos e intercorrente de 3 anos', 'Competência territorial do lugar da infração'],
      macetes: ['Ordem das sanções: "C-S-E" (Censura, Suspensão, Exclusão) + multa acessória.', '3 suspensões = exclusão. Exclusão = 2/3 do Conselho.', 'Na OAB quase todo prazo é 15 dias.'],
      video: 'OAB ética sanções disciplinares censura suspensão exclusão processo disciplinar' },
    { id: 'publicidade', titulo: 'Sigilo e publicidade', incidencia: 'media',
      aula: [
        'O sigilo profissional é dever e direito do advogado. É de ordem pública e independe de pedido de reserva do cliente; presumem-se confidenciais as comunicações entre advogado e cliente (art. 36, CED). Só cede em circunstâncias excepcionais que configurem justa causa, como grave ameaça ao direito à vida e à honra ou defesa própria, por exemplo quando o advogado é afrontado pelo próprio cliente (art. 37, CED); ainda assim, revela-se apenas o necessário.',
        'O advogado tem o direito de recusar-se a depor como testemunha em processo no qual funcionou ou deva funcionar, ou sobre fato relacionado a quem foi ou é seu cliente, mesmo quando autorizado ou solicitado por ele (art. 7º, XIX, do Estatuto); e não é obrigado a depor sobre fatos cobertos pelo sigilo (art. 38, CED).',
        'A publicidade é permitida com caráter meramente informativo, discrição e sobriedade (Provimento 205/2021). É proibido: mercantilização, captação de clientela, oferta de serviços em conjunto com outra atividade, informar valores de honorários e usar outdoors e meios de massa para captar clientes. Patrocinar postagens (impulsionamento) é permitido, com conteúdo informativo.',
        'Meios vedados (art. 40, CED): publicidade em rádio, cinema e televisão; outdoors, painéis luminosos e assemelhados; inscrições em muros, paredes, veículos, elevadores ou espaços públicos; mala direta e panfletos para captar clientela; divulgação conjunta com outra atividade; telefone ou endereço em artigos e entrevistas (só o e-mail é permitido). Na fachada do escritório, placas, painéis luminosos e inscrições são permitidos só para identificação. O Prov. 205/21 também veda prometer resultados, usar casos concretos para oferecer serviços e ostentar bens (art. 6º).'
      ],
      cai: ['Recusa a depor mesmo autorizado pelo cliente', 'O que é permitido nas redes sociais (Provimento 205/2021)'],
      macetes: ['Sigilo: o advogado se cala até quando o cliente libera.', 'Publicidade OK = informar. Proibido = vender (preço, promoção, captação).'],
      video: 'OAB ética publicidade provimento 205 2021 sigilo profissional' }
  ]
},
{
  id: 'constitucional', nome: 'Direito Constitucional', icone: '🏛️', qtd: 6, cor: '#5b8def',
  dica: 'Foco em direitos fundamentais (art. 5º), remédios constitucionais, controle de constitucionalidade e organização dos Poderes.',
  topicos: [
    { id: 'remedios', titulo: 'Remédios constitucionais', incidencia: 'alta',
      aula: [
        'HABEAS CORPUS: protege a liberdade de locomoção contra ilegalidade ou abuso de poder, inclusive de forma preventiva (art. 5º, LXVIII). Qualquer pessoa pode impetrar, sem advogado e gratuitamente (art. 5º, LXXVII). Não cabe HC quanto ao mérito de punições disciplinares militares (art. 142, §2º), só quanto à legalidade.',
        'MANDADO DE SEGURANÇA: protege direito líquido e certo não amparado por HC ou HD, contra ato de autoridade. Prazo decadencial de 120 dias da ciência do ato (Lei 12.016/09). Não cabe condenação em honorários.',
        'MS COLETIVO (art. 5º, LXX): partido político com representação no Congresso; organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos 1 ano (requisito que, para o STF, vale só para a associação). Não depende de autorização dos associados (Súmula 629 STF) e pode defender interesse de só parte da categoria (Súmula 630 STF). Súmulas clássicas: não cabe MS contra lei em tese (266), contra decisão judicial transitada em julgado (268) nem como substituto de ação de cobrança (269).',
        'HABEAS DATA: para conhecer ou retificar informações sobre a PRÓPRIA pessoa em bancos de dados públicos ou de caráter público. Exige prova da recusa administrativa ou do decurso do prazo sem decisão: mais de 10 dias para o acesso e mais de 15 para a retificação ou anotação (Súmula 2 do STJ; art. 8º, parágrafo único, da Lei 9.507/97). É gratuito (art. 5º, LXXVII).',
        'MANDADO DE INJUNÇÃO: quando a falta de norma regulamentadora torna inviável o exercício de direitos constitucionais (Lei 13.300/16).',
        'Reconhecida a mora, o tribunal fixa prazo razoável para o órgão omisso editar a norma e, se ela não vier, estabelece as condições para o exercício do direito (art. 8º, Lei 13.300/16). Em regra a decisão vale só entre as partes, mas pode ter eficácia ultra partes ou erga omnes (art. 9º). MI coletivo: MP, partido com representação no Congresso, organização sindical, entidade de classe ou associação há pelo menos 1 ano e Defensoria Pública (art. 12).',
        'AÇÃO POPULAR: proposta por qualquer CIDADÃO (eleitor) para anular ato lesivo ao patrimônio público, à moralidade, ao meio ambiente ou ao patrimônio histórico. O autor é isento de custas judiciais e do ônus da sucumbência, salvo comprovada má-fé (art. 5º, LXXIII). A cidadania se prova com o título de eleitor (art. 1º, §3º, Lei 4.717/65).'
      ],
      cai: ['Escolher o remédio correto a partir do caso concreto', 'Prazo de 120 dias do MS', 'Legitimidade da ação popular (só cidadão; pessoa jurídica não – Súmula 365 STF)'],
      macetes: ['Liberdade de ir e vir → HC. Informação sobre MIM → HD. Falta lei → MI. Resto (direito líquido e certo) → MS.', 'Ação POPULAR = povo = cidadão eleitor.'],
      video: 'remédios constitucionais OAB habeas corpus mandado de segurança habeas data injunção ação popular' },
    { id: 'controle', titulo: 'Controle de constitucionalidade', incidencia: 'alta',
      aula: [
        'Controle DIFUSO: qualquer juiz ou tribunal, no caso concreto, com efeitos entre as partes. Nos tribunais, observa a cláusula de reserva de plenário (art. 97 e Súmula Vinculante 10).',
        'Reserva de plenário (art. 97): nos tribunais, a inconstitucionalidade só é declarada pela maioria absoluta dos membros do tribunal ou do órgão especial. O órgão fracionário não precisa submeter a questão se já houver pronunciamento do plenário ou do órgão especial do próprio tribunal ou do plenário do STF sobre ela (art. 949, parágrafo único, CPC). A regra não vale para juiz singular nem para turma recursal. No difuso, o Senado pode suspender a execução de lei declarada inconstitucional pelo STF (art. 52, X).',
        'Controle CONCENTRADO: feito pelo STF via ADI, ADC, ADO e ADPF, com efeitos erga omnes e vinculantes.',
        'ADPF (Lei 9.882/99) é SUBSIDIÁRIA: só cabe se não houver outro meio eficaz de sanar a lesividade (art. 4º, §1º). Por isso é o caminho para lei MUNICIPAL em face da Constituição Federal e para norma ANTERIOR a 1988, que não podem ser objeto de ADI. Na ADI e na ADC, a modulação dos efeitos exige 2/3 dos ministros (art. 27, Lei 9.868/99). Nos Estados, o TJ julga a representação de inconstitucionalidade de lei estadual ou municipal em face da Constituição Estadual (art. 125, §2º).',
        'Legitimados (art. 103): Presidente da República; Mesas do Senado, da Câmara, das Assembleias e da Câmara Legislativa do DF; Governadores; PGR; Conselho Federal da OAB; partido político com representação no Congresso; confederação sindical ou entidade de classe de âmbito nacional.',
        'Legitimados ESPECIAIS (precisam demonstrar pertinência temática): Mesas das Assembleias, Governadores e confederações/entidades de classe. Os demais são universais.',
        'Partido político: basta ter um parlamentar no Congresso na data da propositura; a perda superveniente da representação não prejudica a ação. Partido e confederação sindical ou entidade de classe precisam de advogado; os demais legitimados têm capacidade postulatória própria. Sindicatos e federações NÃO são legitimados (só a confederação sindical). O Advogado-Geral da União é citado para defender a norma impugnada (art. 103, §3º), mas, segundo o STF, não é obrigado a defendê-la se o STF já a tiver julgado inconstitucional.'
      ],
      cai: ['Rol do art. 103 e pertinência temática', 'ADPF é subsidiária', 'Reserva de plenário'],
      macetes: ['Universais: "3 P + OAB + Mesas federais" (Presidente, PGR, Partido, Conselho Federal da OAB, Mesa da Câmara e do Senado).', 'Seccional da OAB NÃO é legitimada; só o Conselho FEDERAL.'],
      video: 'controle de constitucionalidade OAB legitimados art 103 pertinência temática ADI ADPF' },
    { id: 'emendas', titulo: 'Processo legislativo e emendas', incidencia: 'media',
      aula: [
        'A Constituição pode ser emendada por proposta de 1/3 da Câmara ou do Senado, do Presidente da República ou de mais da metade das Assembleias Legislativas (cada uma por maioria relativa).',
        'Aprovação: dois turnos em cada Casa, com 3/5 dos votos dos respectivos MEMBROS em ambos os turnos, ou seja, 308 deputados e 49 senadores (art. 60, §2º). Não há sanção ou veto: a promulgação é feita pelas Mesas da Câmara e do Senado, com o respectivo número de ordem (art. 60, §3º).',
        'Cláusulas pétreas (art. 60, §4º): forma federativa de Estado; voto direto, secreto, universal e periódico; separação dos Poderes; direitos e garantias individuais. Não pode haver emenda TENDENTE A ABOLIR.',
        'Direitos e garantias individuais pétreos não estão só no art. 5º: o STF reconheceu a anterioridade tributária como cláusula pétrea (ADI 939). O voto OBRIGATÓRIO não é cláusula pétrea (pétreo é o voto direto, secreto, universal e periódico). Há limites implícitos: não se pode emendar o próprio art. 60 para suprimir suas limitações. Emenda pode sofrer controle de constitucionalidade, e o parlamentar pode impetrar MS contra a tramitação de PEC tendente a abolir cláusula pétrea.',
        'Limites circunstanciais: não se emenda na vigência de intervenção federal, estado de defesa ou estado de sítio.',
        'Art. 60, §5º: a matéria de PEC rejeitada ou havida por prejudicada NÃO pode ser objeto de nova proposta na mesma sessão legislativa, sem exceção. Compare com o projeto de lei rejeitado, que pode ser reapresentado na mesma sessão por proposta da maioria absoluta dos membros de qualquer das Casas (art. 67).'
      ],
      cai: ['Quórum de 3/5 em 2 turnos', 'Cláusulas pétreas', 'Matéria rejeitada só pode ser reapresentada na sessão legislativa seguinte'],
      macetes: ['Pétreas: "FO-VO-SE-DI" (FOrma federativa, VOto, SEparação, DIreitos individuais).', 'Emenda: 3-2-3/5 → 3 iniciativas principais, 2 turnos, 3/5 dos votos.'],
      video: 'emenda constitucional cláusulas pétreas OAB art 60 processo legislativo' }
  ]
},
{
  id: 'civil', nome: 'Direito Civil', icone: '📜', qtd: 6, cor: '#3fbf8f',
  dica: 'Parte Geral, Obrigações, Contratos, Responsabilidade Civil, Família e Sucessões. Família e Sucessões caem quase sempre.',
  topicos: [
    { id: 'capacidade', titulo: 'Capacidade civil', incidencia: 'alta',
      aula: [
        'Após o Estatuto da Pessoa com Deficiência (Lei 13.146/15), são ABSOLUTAMENTE incapazes apenas os menores de 16 anos (art. 3º).',
        'RELATIVAMENTE incapazes (art. 4º): maiores de 16 e menores de 18; ébrios habituais e viciados em tóxico; quem, por causa transitória ou permanente, não puder exprimir sua vontade; e os pródigos.',
        'A deficiência, por si só, NÃO afeta a plena capacidade civil. A pessoa com deficiência pode adotar a tomada de decisão apoiada.',
        'Emancipação (art. 5º, parágrafo único): voluntária (pais, por instrumento público, a partir de 16 anos, sem homologação judicial), judicial (tutor, ouvido o tutor), ou legal (casamento, emprego público efetivo, colação de grau, estabelecimento com economia própria).'
      ],
      cai: ['Quem é absolutamente incapaz hoje', 'Formas de emancipação'],
      macetes: ['Absolutamente incapaz hoje = só o menor de 16. Ponto.', 'Emancipação voluntária: cartório, sem juiz.'],
      video: 'capacidade civil absolutamente incapaz estatuto pessoa com deficiência OAB' },
    { id: 'prescricao', titulo: 'Prescrição e decadência', incidencia: 'alta',
      aula: [
        'PRESCRIÇÃO extingue a PRETENSÃO (direito de exigir); DECADÊNCIA extingue o próprio DIREITO potestativo.',
        'Prazo geral de prescrição: 10 anos (art. 205). Principais prazos especiais (art. 206): reparação civil – 3 anos; cobrança de dívidas líquidas em instrumento público ou particular – 5 anos; aluguéis – 3 anos; enriquecimento sem causa – 3 anos.',
        'Não corre prescrição entre cônjuges na constância da sociedade conjugal, entre ascendentes e descendentes durante o poder familiar, e contra os absolutamente incapazes (art. 197 e 198).',
        'A interrupção da prescrição só pode ocorrer UMA vez (art. 202). O juiz pode reconhecer a prescrição de ofício.'
      ],
      cai: ['Prazo de 3 anos da reparação civil', 'Causas impeditivas/suspensivas', 'Interrupção uma única vez'],
      macetes: ['Prescrição → pretensão (P com P). Decadência → direito.', 'Reparação civil = 3 anos. Regra geral = 10 anos.'],
      video: 'prescrição e decadência código civil OAB prazos art 205 206' },
    { id: 'sucessoes', titulo: 'Sucessões', incidencia: 'alta',
      aula: [
        'Ordem de vocação hereditária (art. 1.829): 1º descendentes, em concorrência com o cônjuge (dependendo do regime); 2º ascendentes, em concorrência com o cônjuge; 3º cônjuge sobrevivente; 4º colaterais até o 4º grau.',
        'O cônjuge NÃO concorre com descendentes se casado na comunhão universal, na separação obrigatória ou na comunhão parcial sem bens particulares do falecido.',
        'O STF (RE 878.694) equiparou o companheiro ao cônjuge para fins sucessórios, declarando inconstitucional o art. 1.790.',
        'Herdeiros necessários: descendentes, ascendentes e cônjuge. Eles têm direito à legítima (metade da herança). O testador só pode dispor livremente da outra metade.'
      ],
      cai: ['Concorrência do cônjuge com descendentes conforme o regime', 'Equiparação do companheiro', 'Legítima de 50%'],
      macetes: ['Ordem: "DACC" – Descendentes, Ascendentes, Cônjuge, Colaterais.', 'Comunhão universal: o cônjuge já é meeiro, então não é herdeiro em concorrência com descendentes.'],
      video: 'direito das sucessões ordem de vocação hereditária concorrência cônjuge OAB' }
  ]
},
{
  id: 'processocivil', nome: 'Direito Processual Civil', icone: '📂', qtd: 6, cor: '#8e6cf0',
  dica: 'Prazos, recursos, tutelas provisórias e procedimento comum. A FGV adora prazos e o cabimento de agravo de instrumento.',
  topicos: [
    { id: 'prazos', titulo: 'Prazos processuais', incidencia: 'alta',
      aula: [
        'Os prazos processuais em dias são contados apenas em DIAS ÚTEIS (art. 219). Exclui-se o dia do começo e inclui-se o do vencimento.',
        'Prazo geral para recursos: 15 dias úteis (art. 1.003, §5º), exceto embargos de declaração, que têm 5 dias.',
        'Fazenda Pública, Ministério Público e Defensoria Pública têm prazo em DOBRO para todas as manifestações (arts. 180, 183 e 186). Litisconsortes com advogados diferentes, de escritórios distintos, em autos FÍSICOS, também têm prazo em dobro (art. 229).',
        'Contestação: 15 dias, contados da audiência de conciliação/mediação (ou do último ato previsto no art. 335).'
      ],
      cai: ['Dias úteis', 'Embargos de declaração em 5 dias', 'Prazo em dobro e exceção para autos eletrônicos'],
      macetes: ['CPC: tudo é 15, menos embargos de declaração (5).', 'Autos eletrônicos = sem prazo em dobro para litisconsortes.'],
      video: 'prazos processuais CPC dias úteis prazo em dobro OAB' },
    { id: 'recursos', titulo: 'Recursos', incidencia: 'alta',
      aula: [
        'Apelação: contra sentença. Em regra, tem efeito suspensivo (art. 1.012).',
        'Agravo de instrumento: contra decisões interlocutórias previstas no rol do art. 1.015 (ex.: tutelas provisórias, mérito do processo, rejeição da alegação de convenção de arbitragem, exclusão de litisconsorte, gratuidade de justiça). O STJ entende que o rol é de TAXATIVIDADE MITIGADA: cabe quando houver urgência decorrente da inutilidade do julgamento na apelação.',
        'Interlocutórias que não admitem agravo não precluem: devem ser impugnadas em preliminar de apelação ou nas contrarrazões (art. 1.009, §1º).',
        'Embargos de declaração: obscuridade, contradição, omissão ou erro material. Interrompem o prazo para outros recursos.'
      ],
      cai: ['Cabimento do agravo de instrumento', 'Taxatividade mitigada (Tema 988 STJ)', 'Efeitos da apelação'],
      macetes: ['Sentença → apelação. Interlocutória do rol → agravo. Fora do rol → preliminar de apelação.', 'Embargos de declaração INTERROMPEM (o prazo recomeça do zero).'],
      video: 'recursos CPC agravo de instrumento rol art 1015 taxatividade mitigada apelação OAB' },
    { id: 'tutelas', titulo: 'Tutelas provisórias', incidencia: 'media',
      aula: [
        'A tutela provisória pode ser de URGÊNCIA (cautelar ou antecipada) ou de EVIDÊNCIA (art. 294).',
        'Urgência exige probabilidade do direito e perigo de dano ou risco ao resultado útil do processo (art. 300).',
        'Evidência dispensa o perigo de dano (art. 311): abuso do direito de defesa, tese firmada em casos repetitivos ou súmula vinculante com prova documental, pedido reipersecutório com contrato de depósito, e petição inicial com prova documental suficiente a que o réu não oponha dúvida razoável.',
        'Tutela antecipada antecedente pode se ESTABILIZAR se o réu não interpuser recurso (art. 304). Ação para rever a decisão estabilizada: 2 anos.'
      ],
      cai: ['Requisitos de urgência x evidência', 'Estabilização da tutela antecipada'],
      macetes: ['Evidência = "o direito é tão óbvio que não precisa de pressa".', 'Estabilização: réu não recorreu → decisão fica valendo; 2 anos para rever.'],
      video: 'tutela provisória de urgência e evidência estabilização CPC OAB' }
  ]
},
{
  id: 'penal', nome: 'Direito Penal', icone: '🔒', qtd: 6, cor: '#e8615a',
  dica: 'Teoria do crime, penas, extinção da punibilidade e crimes em espécie (patrimônio, contra a pessoa e contra a Administração).',
  topicos: [
    { id: 'aplicacao', titulo: 'Aplicação da lei penal', incidencia: 'media',
      aula: [
        'Tempo do crime (art. 4º): considera-se praticado o crime no momento da AÇÃO ou OMISSÃO, ainda que outro seja o momento do resultado (teoria da atividade).',
        'Lugar do crime (art. 6º): onde ocorreu a ação/omissão, no todo ou em parte, bem como onde se produziu ou deveria produzir-se o resultado (teoria da ubiquidade).',
        'A lei penal mais benéfica retroage, inclusive após o trânsito em julgado (art. 2º). A lei mais grave não retroage.',
        'Nos crimes permanentes e continuados, aplica-se a lei mais grave se sua vigência for anterior à cessação da permanência ou da continuidade (Súmula 711 STF).'
      ],
      cai: ['LUTA (Lugar–Ubiquidade, Tempo–Atividade)', 'Retroatividade da lei benéfica', 'Súmula 711 do STF'],
      macetes: ['L-U-T-A: Lugar = Ubiquidade; Tempo = Atividade.'],
      video: 'tempo e lugar do crime teoria da atividade ubiquidade LUTA OAB direito penal' },
    { id: 'excludentes', titulo: 'Excludentes e tentativa', incidencia: 'alta',
      aula: [
        'Excludentes de ilicitude (art. 23): estado de necessidade, legítima defesa, estrito cumprimento do dever legal e exercício regular de direito. O excesso doloso ou culposo é punível.',
        'Legítima defesa (art. 25): repelir injusta agressão, atual ou iminente, a direito seu ou de outrem, usando moderadamente os meios necessários.',
        'Tentativa: pena do crime consumado diminuída de 1/3 a 2/3 (art. 14).',
        'Desistência voluntária e arrependimento eficaz (art. 15): o agente responde apenas pelos atos já praticados.',
        'Arrependimento posterior (art. 16): crime sem violência ou grave ameaça, reparado o dano ou restituída a coisa até o RECEBIMENTO da denúncia, por ato voluntário → redução de 1/3 a 2/3.'
      ],
      cai: ['Diferença entre desistência, arrependimento eficaz e arrependimento posterior', 'Requisitos da legítima defesa'],
      macetes: ['Desistência: parou no meio. Arrependimento eficaz: terminou, mas evitou o resultado. Arrependimento posterior: o crime aconteceu, ele reparou (até receber a denúncia).'],
      video: 'desistência voluntária arrependimento eficaz arrependimento posterior OAB penal' },
    { id: 'prescricaopenal', titulo: 'Extinção da punibilidade e prescrição', incidencia: 'alta',
      aula: [
        'Causas de extinção da punibilidade (art. 107): morte do agente, anistia, graça, indulto, abolitio criminis, prescrição, decadência, perempção, renúncia, perdão aceito (ação privada), retratação nos casos admitidos e perdão judicial.',
        'Os prazos de prescrição (art. 109) variam de 3 anos (pena inferior a 1 ano) a 20 anos (pena superior a 12 anos).',
        'Os prazos são reduzidos pela METADE quando o agente era menor de 21 anos na data do fato ou maior de 70 anos na data da sentença (art. 115).'
      ],
      cai: ['Redução pela metade (menor de 21 / maior de 70)', 'Rol do art. 107'],
      macetes: ['21 no fato, 70 na sentença → prescrição pela metade.'],
      video: 'prescrição penal art 109 art 115 extinção da punibilidade OAB' }
  ]
},
{
  id: 'processopenal', nome: 'Direito Processual Penal', icone: '🚔', qtd: 6, cor: '#f08a4b',
  dica: 'Inquérito, ação penal, prisões e medidas cautelares, procedimentos e recursos. Pacote Anticrime (Lei 13.964/19) é presença constante.',
  topicos: [
    { id: 'prisoes', titulo: 'Prisões e medidas cautelares', incidencia: 'alta',
      aula: [
        'Após o Pacote Anticrime, o juiz NÃO pode decretar prisão preventiva de ofício: depende de requerimento do MP, do querelante, do assistente ou de representação da autoridade policial (art. 311).',
        'Requisitos da preventiva (art. 312): prova da existência do crime, indício suficiente de autoria e perigo gerado pelo estado de liberdade do imputado, para garantia da ordem pública/econômica, conveniência da instrução ou aplicação da lei penal.',
        'Cabe preventiva, em regra, em crimes dolosos com pena máxima superior a 4 anos, reincidente em crime doloso, ou para garantir medidas protetivas da violência doméstica (art. 313).',
        'A necessidade da preventiva deve ser revisada a cada 90 dias (art. 316, parágrafo único). A audiência de custódia deve ocorrer em até 24 horas da prisão.'
      ],
      cai: ['Vedação da preventiva de ofício', 'Revisão a cada 90 dias', 'Hipóteses do art. 313'],
      macetes: ['Pacote Anticrime: juiz não prende de ofício.', 'Preventiva: revisão a cada 90 dias; custódia em 24h.'],
      video: 'prisão preventiva pacote anticrime art 311 312 313 OAB processo penal' },
    { id: 'acaopenal', titulo: 'Ação penal', incidencia: 'alta',
      aula: [
        'Ação penal PÚBLICA INCONDICIONADA: o MP age independentemente da vontade da vítima (regra).',
        'Ação penal PÚBLICA CONDICIONADA: depende de representação da vítima ou de requisição do Ministro da Justiça. A representação é retratável até o OFERECIMENTO da denúncia (art. 25 CPP).',
        'Ação penal PRIVADA: a vítima oferece queixa-crime por meio de advogado com poderes especiais, no prazo decadencial de 6 meses contados do conhecimento da autoria (art. 38).',
        'Princípios da ação privada: oportunidade, disponibilidade e indivisibilidade (a renúncia em favor de um dos autores se estende aos demais).'
      ],
      cai: ['Prazo decadencial de 6 meses', 'Retratação da representação até o oferecimento da denúncia', 'Indivisibilidade'],
      macetes: ['Retratação da representação: até OFERECER a denúncia (CPP). Na Lei Maria da Penha: só em audiência, até o RECEBIMENTO.', 'Queixa = 6 meses.'],
      video: 'ação penal pública condicionada privada representação queixa OAB' },
    { id: 'procedimento', titulo: 'Procedimento comum e recursos', incidencia: 'media',
      aula: [
        'Recebida a denúncia, o réu é citado para apresentar RESPOSTA À ACUSAÇÃO em 10 dias (art. 396). Ela é obrigatória: se não apresentada, o juiz nomeia defensor.',
        'Após a resposta, o juiz pode absolver sumariamente (art. 397): excludente de ilicitude, excludente de culpabilidade (salvo inimputabilidade), fato atípico ou extinção da punibilidade.',
        'Apelação: 5 dias para interpor e 8 dias para as razões (arts. 593 e 600). Recurso em sentido estrito: 5 dias (art. 586), cabível nas hipóteses do art. 581.',
        'No processo penal, os prazos são contínuos e peremptórios, contados em dias corridos (art. 798).'
      ],
      cai: ['Resposta à acusação em 10 dias', 'Hipóteses de absolvição sumária', 'Prazo da apelação 5 + 8'],
      macetes: ['CPP: apelação 5 dias + razões em 8. Prazos em dias CORRIDOS.', 'Absolvição sumária não cabe por inimputabilidade (precisa de instrução para aplicar medida de segurança).'],
      video: 'resposta à acusação absolvição sumária art 397 apelação RESE processo penal OAB' }
  ]
},
{
  id: 'trabalho', nome: 'Direito do Trabalho', icone: '👷', qtd: 5, cor: '#2bb3c0',
  dica: 'Reforma Trabalhista (Lei 13.467/17) é o coração da matéria: jornada, férias, verbas rescisórias e contrato de trabalho.',
  topicos: [
    { id: 'jornada', titulo: 'Jornada de trabalho', incidencia: 'alta',
      aula: [
        'Limite constitucional: 8 horas diárias e 44 semanais, com hora extra remunerada com adicional mínimo de 50%.',
        'Após a Reforma, as horas in itinere (tempo de deslocamento até o trabalho) NÃO são computadas na jornada (art. 58, §2º).',
        'Intervalo intrajornada não concedido gera o pagamento apenas do período SUPRIMIDO, com adicional de 50%, e tem natureza INDENIZATÓRIA (art. 71, §4º).',
        'Banco de horas: por acordo individual escrito, compensação em até 6 meses; por negociação coletiva, em até 1 ano. Jornada 12x36 pode ser ajustada por acordo individual escrito (art. 59-A).'
      ],
      cai: ['Fim das horas in itinere', 'Intervalo suprimido: só o tempo suprimido e natureza indenizatória', 'Banco de horas'],
      macetes: ['Reforma: deslocamento não é jornada; intervalo não dado = só o que faltou, indenizatório.'],
      video: 'jornada de trabalho reforma trabalhista horas in itinere intervalo intrajornada OAB' },
    { id: 'rescisao', titulo: 'Extinção do contrato e aviso prévio', incidencia: 'alta',
      aula: [
        'Aviso prévio proporcional (Lei 12.506/11): 30 dias + 3 dias por ano completo de serviço, até o máximo de 90 dias.',
        'Distrato (art. 484-A): por acordo entre as partes, o empregado recebe metade do aviso prévio indenizado e da multa do FGTS (20%), saca até 80% do FGTS e NÃO recebe seguro-desemprego.',
        'Justa causa (art. 482): o empregado perde aviso prévio, férias proporcionais e 13º proporcional, mas mantém saldo de salário e férias vencidas + 1/3.',
        'O pagamento das verbas rescisórias deve ocorrer em até 10 dias do término do contrato, sob pena da multa do art. 477, §8º.'
      ],
      cai: ['Cálculo do aviso prévio proporcional', 'Efeitos do distrato', 'Verbas na justa causa'],
      macetes: ['Aviso: 30 + 3/ano, teto 90.', 'Distrato: metade do aviso, metade da multa (20%), 80% do FGTS, zero seguro-desemprego.'],
      video: 'aviso prévio proporcional distrato art 484-A verbas rescisórias justa causa OAB' }
  ]
},
{
  id: 'processotrabalho', nome: 'Processo do Trabalho', icone: '🧾', qtd: 5, cor: '#1e9e8a',
  dica: 'Recursos trabalhistas, prazos de 8 dias, depósito recursal, honorários sucumbenciais e procedimento sumaríssimo.',
  topicos: [
    { id: 'recursostrab', titulo: 'Recursos trabalhistas', incidencia: 'alta',
      aula: [
        'Prazo uniforme de 8 dias para os recursos trabalhistas (recurso ordinário, recurso de revista, agravo de petição, agravo de instrumento, embargos no TST). Exceção: embargos de declaração = 5 dias.',
        'Os prazos são contados em dias ÚTEIS (art. 775 CLT).',
        'Depósito recursal: devido pelo empregador recorrente. É reduzido pela metade para entidades sem fins lucrativos, empregadores domésticos, microempreendedores individuais, microempresas e empresas de pequeno porte; e é dispensado aos beneficiários da justiça gratuita, entidades filantrópicas e empresas em recuperação judicial (art. 899, §§9º e 10).',
        'Decisões interlocutórias, em regra, não são recorríveis de imediato (art. 893, §1º).'
      ],
      cai: ['Prazo de 8 dias', 'Isenção e redução do depósito recursal', 'Irrecorribilidade imediata das interlocutórias'],
      macetes: ['Processo do trabalho: tudo é 8, menos embargos de declaração (5).', 'Recuperação judicial e justiça gratuita: sem depósito recursal. ME/EPP/doméstico: metade.'],
      video: 'recursos trabalhistas prazo 8 dias depósito recursal reforma OAB processo do trabalho' },
    { id: 'honorariostrab', titulo: 'Honorários e justiça gratuita', incidencia: 'media',
      aula: [
        'A Reforma instituiu honorários de sucumbência na Justiça do Trabalho, entre 5% e 15% (art. 791-A).',
        'O STF (ADI 5766) declarou inconstitucional a cobrança de honorários do beneficiário da justiça gratuita com créditos obtidos no próprio processo ou em outro. Os honorários ficam sob condição suspensiva por 2 anos.',
        'Justiça gratuita: concedida a quem recebe salário igual ou inferior a 40% do teto do RGPS, ou a quem comprovar insuficiência de recursos (art. 790, §§3º e 4º).'
      ],
      cai: ['Percentual de 5% a 15%', 'ADI 5766'],
      macetes: ['Trabalho: honorários 5 a 15% (no CPC é 10 a 20%).'],
      video: 'honorários sucumbenciais processo do trabalho ADI 5766 justiça gratuita OAB' }
  ]
},
{
  id: 'administrativo', nome: 'Direito Administrativo', icone: '🏢', qtd: 5, cor: '#c27adf',
  dica: 'Atos administrativos, licitações (Lei 14.133/21), improbidade (Lei 14.230/21), responsabilidade civil do Estado e agentes públicos.',
  topicos: [
    { id: 'atos', titulo: 'Atos administrativos', incidencia: 'alta',
      aula: [
        'Elementos (requisitos): COMPETÊNCIA, FINALIDADE, FORMA (vinculados), MOTIVO e OBJETO (podem ser discricionários).',
        'Atributos: presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade.',
        'ANULAÇÃO: por ilegalidade, efeitos ex tunc, pela Administração ou pelo Judiciário. A Administração tem prazo decadencial de 5 anos para anular atos favoráveis ao destinatário de boa-fé (Lei 9.784/99, art. 54).',
        'REVOGAÇÃO: por conveniência e oportunidade, efeitos ex nunc, somente pela própria Administração. Atos vinculados e que geraram direito adquirido não podem ser revogados.',
        'Teoria dos motivos determinantes: o motivo declarado vincula a validade do ato, mesmo que a motivação fosse dispensável.'
      ],
      cai: ['Anulação x revogação', 'Elementos vinculados', 'Motivos determinantes'],
      macetes: ['Elementos: "COM-FI-FOR-M-OB" (Competência, Finalidade, Forma, Motivo, Objeto).', 'Atributos: "PATI" (Presunção, Autoexecutoriedade, Tipicidade, Imperatividade).', 'Judiciário anula, não revoga (salvo os próprios atos administrativos).'],
      video: 'atos administrativos elementos atributos anulação revogação OAB' },
    { id: 'licitacoes', titulo: 'Licitações (Lei 14.133/21)', incidencia: 'alta',
      aula: [
        'Modalidades: PREGÃO, CONCORRÊNCIA, CONCURSO, LEILÃO e DIÁLOGO COMPETITIVO (art. 28). Tomada de preços e convite foram extintos.',
        'Diálogo competitivo: para contratações de objetos inovadores ou complexos, em que a Administração dialoga com licitantes previamente selecionados para desenvolver alternativas.',
        'Inexigibilidade (art. 74): inviabilidade de competição (ex.: fornecedor exclusivo, artista consagrado, serviços técnicos especializados de natureza predominantemente intelectual com profissional de notória especialização).',
        'Dispensa (art. 75): a competição é possível, mas a lei autoriza não licitar (ex.: baixo valor, emergência ou calamidade, licitação deserta).'
      ],
      cai: ['Modalidades da nova lei', 'Inexigibilidade x dispensa'],
      macetes: ['Modalidades: "PreCon-Con-Lei-Di" (Pregão, Concorrência, Concurso, Leilão, Diálogo).', 'INexigível = INviável competir. Dispensa = dava para competir, mas a lei libera.'],
      video: 'nova lei de licitações 14.133 modalidades diálogo competitivo dispensa inexigibilidade OAB' },
    { id: 'improbidade', titulo: 'Improbidade e responsabilidade do Estado', incidencia: 'alta',
      aula: [
        'Com a Lei 14.230/21, todo ato de improbidade exige DOLO. Não existe mais improbidade culposa.',
        'Espécies: enriquecimento ilícito (art. 9º), lesão ao erário (art. 10) e violação aos princípios (art. 11, rol taxativo).',
        'Responsabilidade civil do Estado (art. 37, §6º): OBJETIVA, baseada no risco administrativo. Admite excludentes: culpa exclusiva da vítima, caso fortuito/força maior e fato de terceiro.',
        'A vítima deve acionar o Estado (ou a prestadora de serviço público), que tem direito de regresso contra o agente em caso de dolo ou culpa (teoria da dupla garantia – STF, Tema 940).'
      ],
      cai: ['Exigência de dolo', 'Responsabilidade objetiva e regresso', 'Tema 940 do STF'],
      macetes: ['Improbidade hoje = só dolo.', 'Vítima processa o Estado; o Estado processa o servidor.'],
      video: 'improbidade administrativa lei 14.230 dolo responsabilidade civil do estado OAB' }
  ]
},
{
  id: 'tributario', nome: 'Direito Tributário', icone: '💰', qtd: 5, cor: '#d9a43b',
  dica: 'Princípios, imunidades, espécies tributárias, obrigação, crédito tributário (suspensão, extinção e exclusão) e prescrição/decadência.',
  topicos: [
    { id: 'principios', titulo: 'Princípios e imunidades', incidencia: 'alta',
      aula: [
        'Anterioridade ANUAL: o tributo só pode ser cobrado no exercício financeiro seguinte ao da lei que o instituiu ou aumentou. Anterioridade NONAGESIMAL: 90 dias da publicação da lei (art. 150, III, b e c).',
        'Exceções às duas anterioridades: II, IE, IOF, empréstimo compulsório de guerra/calamidade e imposto extraordinário de guerra.',
        'Exceções só à anual: IPI, contribuições sociais (sujeitas apenas à nonagesimal – art. 195, §6º), CIDE-combustíveis e ICMS-combustíveis (redução e restabelecimento).',
        'Exceções só à nonagesimal: IR e a alteração da base de cálculo de IPTU e IPVA.',
        'Imunidades (art. 150, VI): recíproca entre os entes; templos de qualquer culto; partidos, sindicatos de trabalhadores, entidades de educação e assistência sem fins lucrativos; livros, jornais, periódicos e o papel destinado à sua impressão. Imunidades alcançam apenas IMPOSTOS.'
      ],
      cai: ['Tabela das exceções às anterioridades', 'Imunidade só de impostos', 'Livro eletrônico é imune (Súmula Vinculante 57)'],
      macetes: ['Exceção total: "II-IE-IOF-guerra-calamidade".', 'IR: respeita a anual, mas não os 90 dias. IPI: respeita os 90 dias, mas não a anual.'],
      video: 'princípio da anterioridade exceções tabela imunidades tributárias OAB' },
    { id: 'credito', titulo: 'Crédito tributário', incidencia: 'alta',
      aula: [
        'SUSPENSÃO da exigibilidade (art. 151): moratória, depósito do montante integral, reclamações e recursos administrativos, liminar em MS, liminar/tutela em outras ações, parcelamento.',
        'EXTINÇÃO (art. 156): pagamento, compensação, transação, remissão, prescrição e decadência, conversão de depósito em renda, consignação em pagamento julgada procedente, decisão administrativa/judicial definitiva, dação em pagamento de bens imóveis, entre outras.',
        'EXCLUSÃO (art. 175): isenção e anistia.',
        'Decadência (prazo para constituir/lançar): 5 anos. Prescrição (prazo para cobrar): 5 anos da constituição definitiva (art. 174).'
      ],
      cai: ['Classificar a hipótese em suspensão, extinção ou exclusão'],
      macetes: ['Suspensão: "MO-DE-RE-CO-PA" (MOratória, DEpósito, REclamações/recursos, COncessão de liminar/tutela, PArcelamento).', 'Exclusão: só "IA" – Isenção e Anistia.'],
      video: 'suspensão extinção exclusão do crédito tributário art 151 156 175 OAB' }
  ]
},
{
  id: 'empresarial', nome: 'Direito Empresarial', icone: '🏭', qtd: 4, cor: '#7b8794',
  dica: 'Empresário e sociedades, títulos de crédito e Lei de Falências e Recuperação (Lei 11.101/05, alterada pela Lei 14.112/20).',
  topicos: [
    { id: 'sociedades', titulo: 'Empresário e sociedades', incidencia: 'alta',
      aula: [
        'Empresário é quem exerce profissionalmente atividade econômica organizada para a produção ou circulação de bens ou serviços (art. 966). Não é empresário quem exerce profissão intelectual, de natureza científica, literária ou artística, salvo se constituir elemento de empresa.',
        'A EIRELI foi extinta (Lei 14.195/21); hoje existe a sociedade limitada unipessoal (art. 1.052, §1º).',
        'Na sociedade limitada, a responsabilidade de cada sócio é restrita ao valor de suas quotas, mas todos respondem solidariamente pela integralização do capital social.',
        'A desconsideração da personalidade jurídica (art. 50) exige abuso, caracterizado por desvio de finalidade ou confusão patrimonial (teoria maior).'
      ],
      cai: ['Conceito de empresário', 'Responsabilidade na limitada', 'Requisitos da desconsideração'],
      macetes: ['Limitada: cada um pelo seu, mas todos pelo capital que falta integralizar.'],
      video: 'conceito de empresário sociedade limitada desconsideração personalidade jurídica OAB' },
    { id: 'titulos', titulo: 'Títulos de crédito e falência', incidencia: 'media',
      aula: [
        'Cheque: prazo de apresentação de 30 dias (mesma praça) ou 60 dias (praças diferentes). Prescrição da execução: 6 meses após o fim do prazo de apresentação.',
        'Aval garante o pagamento do título; fiança garante contrato. Na nota promissória, o emitente é o devedor principal.',
        'Recuperação judicial: o devedor deve exercer regularmente as atividades há mais de 2 anos. Deferido o processamento, as execuções ficam suspensas por 180 dias (stay period), prorrogável uma vez.',
        'Ordem na falência (art. 83): créditos trabalhistas até 150 salários mínimos por credor e de acidente de trabalho; créditos com garantia real até o valor do bem; créditos tributários; quirografários; multas; subordinados.'
      ],
      cai: ['Prazos do cheque', 'Requisitos e stay period da recuperação', 'Ordem de classificação dos créditos'],
      macetes: ['Cheque: 30/60 para apresentar + 6 meses para executar.', 'Stay period = 180 dias.'],
      video: 'cheque prazo apresentação prescrição recuperação judicial falência ordem dos créditos OAB' }
  ]
},
{
  id: 'eca', nome: 'Estatuto da Criança e do Adolescente', icone: '🧒', qtd: 2, cor: '#ff8fab',
  dica: 'Medidas socioeducativas, adoção e direitos fundamentais. Questões de leitura direta da lei.',
  topicos: [
    { id: 'medidas', titulo: 'Ato infracional e medidas socioeducativas', incidencia: 'alta',
      aula: [
        'Criança: até 12 anos incompletos. Adolescente: entre 12 e 18 anos (art. 2º). Criança que pratica ato infracional recebe apenas MEDIDAS DE PROTEÇÃO.',
        'Medidas socioeducativas (art. 112): advertência, obrigação de reparar o dano, prestação de serviços à comunidade (até 6 meses), liberdade assistida (mínimo 6 meses), semiliberdade e internação.',
        'Internação: excepcional e breve. Prazo máximo de 3 anos, com reavaliação no máximo a cada 6 meses; liberação compulsória aos 21 anos. Cabe por ato com violência ou grave ameaça, reiteração de infrações graves ou descumprimento reiterado de medida anterior (internação-sanção até 3 meses).',
        'A internação provisória, antes da sentença, tem prazo máximo de 45 dias.'
      ],
      cai: ['Idade de criança x adolescente', 'Prazos da internação', 'Hipóteses de cabimento'],
      macetes: ['Internação: 3 anos máx., reavalia em 6 meses, sai aos 21. Provisória: 45 dias.'],
      video: 'ECA medidas socioeducativas internação prazos OAB' }
  ]
},
{
  id: 'cdc', nome: 'Direito do Consumidor', icone: '🛒', qtd: 2, cor: '#4fc3f7',
  dica: 'Responsabilidade pelo fato e pelo vício, prazos e práticas abusivas.',
  topicos: [
    { id: 'respcdc', titulo: 'Fato x vício e prazos', incidencia: 'alta',
      aula: [
        'FATO do produto/serviço (acidente de consumo): o defeito causa dano à saúde ou à segurança do consumidor (arts. 12 a 14). O comerciante responde apenas subsidiariamente no fato do produto (art. 13).',
        'VÍCIO: o produto ou serviço não funciona adequadamente (arts. 18 a 20). Todos os fornecedores da cadeia respondem solidariamente.',
        'Prazo para reclamar de vícios (decadência – art. 26): 30 dias para produtos/serviços não duráveis e 90 dias para duráveis. Vício oculto: conta-se a partir de quando se evidencia.',
        'Prazo para reparação de danos por fato do produto (prescrição – art. 27): 5 anos a partir do conhecimento do dano e de sua autoria.',
        'Direito de arrependimento (art. 49): 7 dias, nas compras fora do estabelecimento comercial (internet, telefone).'
      ],
      cai: ['Distinguir fato x vício', 'Prazos de 30/90 dias e de 5 anos', 'Responsabilidade subsidiária do comerciante'],
      macetes: ['Fato = machucou (acidente). Vício = não funciona.', 'Vício: 30 não durável / 90 durável. Fato: 5 anos. Arrependimento: 7 dias.'],
      video: 'CDC fato do produto vício do produto prazo decadencial 30 90 dias prescrição 5 anos OAB' }
  ]
},
{
  id: 'ambiental', nome: 'Direito Ambiental', icone: '🌳', qtd: 2, cor: '#66bb6a',
  dica: 'Princípios, responsabilidade ambiental, licenciamento, SNUC e Código Florestal.',
  topicos: [
    { id: 'respamb', titulo: 'Responsabilidade ambiental', incidencia: 'alta',
      aula: [
        'A responsabilidade ambiental é tríplice: civil, administrativa e penal (art. 225, §3º), e as esferas são independentes.',
        'A responsabilidade CIVIL é objetiva e fundada no risco integral (STJ): não admite excludentes como caso fortuito ou força maior.',
        'As obrigações ambientais têm natureza PROPTER REM: podem ser exigidas do proprietário ou possuidor atual e/ou dos anteriores, à escolha do credor (Súmula 623 STJ).',
        'A pretensão de reparação civil do dano ambiental é imprescritível (STF, Tema 999). Pessoa jurídica pode responder penalmente por crime ambiental.'
      ],
      cai: ['Risco integral', 'Obrigação propter rem', 'Imprescritibilidade da reparação'],
      macetes: ['Ambiental: objetiva + risco integral + propter rem + imprescritível.'],
      video: 'responsabilidade civil ambiental risco integral propter rem súmula 623 OAB' }
  ]
},
{
  id: 'dh', nome: 'Direitos Humanos', icone: '🕊️', qtd: 2, cor: '#ab47bc',
  dica: 'Hierarquia dos tratados, sistema interamericano (Comissão e Corte IDH) e sistema global.',
  topicos: [
    { id: 'tratados', titulo: 'Tratados e sistema interamericano', incidencia: 'alta',
      aula: [
        'Tratados de direitos humanos aprovados em cada Casa do Congresso, em 2 turnos, por 3/5 dos votos, equivalem a EMENDAS CONSTITUCIONAIS (art. 5º, §3º).',
        'Os demais tratados de direitos humanos têm status SUPRALEGAL (acima das leis, abaixo da Constituição), conforme o STF no RE 466.343, que afastou a prisão civil do depositário infiel (Súmula Vinculante 25).',
        'Sistema interamericano: a Comissão Interamericana recebe petições individuais (qualquer pessoa ou ONG). Apenas os Estados e a Comissão podem submeter casos à Corte Interamericana.',
        'Requisito para petição à Comissão: esgotamento dos recursos internos e prazo de 6 meses da decisão definitiva, salvo exceções.'
      ],
      cai: ['Status constitucional x supralegal', 'Quem acessa a Corte IDH'],
      macetes: ['Indivíduo vai à COMISSÃO, nunca diretamente à CORTE.'],
      video: 'hierarquia dos tratados de direitos humanos supralegal corte interamericana comissão OAB' }
  ]
},
{
  id: 'internacional', nome: 'Direito Internacional', icone: '🌎', qtd: 2, cor: '#26a69a',
  dica: 'LINDB, homologação de sentença estrangeira, nacionalidade e cooperação jurídica internacional.',
  topicos: [
    { id: 'lindb', titulo: 'LINDB e homologação', incidencia: 'alta',
      aula: [
        'A lei do país em que domiciliada a pessoa determina as regras sobre o começo e o fim da personalidade, o nome, a capacidade e os direitos de família (art. 7º LINDB).',
        'Bens: aplica-se a lei do país em que estiverem situados (art. 8º). Obrigações: lei do país em que se constituírem (art. 9º). Sucessão: lei do domicílio do falecido, mas a sucessão de bens de estrangeiros situados no Brasil será regulada pela lei brasileira em benefício do cônjuge ou filhos brasileiros, sempre que não lhes seja mais favorável a lei pessoal do falecido.',
        'Homologação de sentença estrangeira e concessão de exequatur às cartas rogatórias: competência do STJ (art. 105, I, i). Divórcio consensual simples ou puro dispensa homologação (art. 961, §5º, CPC).'
      ],
      cai: ['Elementos de conexão da LINDB', 'Competência do STJ para homologação'],
      macetes: ['Pessoa → domicílio. Bens → onde estão. Obrigações → onde nasceram.', 'Sentença estrangeira → STJ.'],
      video: 'LINDB elementos de conexão art 7 homologação de sentença estrangeira STJ OAB' }
  ]
},
{
  id: 'financeiro', nome: 'Direito Financeiro', icone: '📊', qtd: 2, cor: '#8d6e63',
  dica: 'Leis orçamentárias, Lei de Responsabilidade Fiscal e precatórios.',
  topicos: [
    { id: 'orcamento', titulo: 'Orçamento, LRF e precatórios', incidencia: 'alta',
      aula: [
        'Leis orçamentárias (art. 165): PPA (plano plurianual – 4 anos), LDO (metas e prioridades) e LOA (orçamento anual). A iniciativa é privativa do chefe do Executivo.',
        'LRF – limites de despesa com pessoal sobre a receita corrente líquida: União 50%; Estados e Municípios 60%.',
        'LRF – controle da despesa com pessoal: ao atingir 95% do limite (limite prudencial), ficam vedados, entre outros, aumentos e reajustes (salvo revisão geral ou decisão judicial), criação de cargos e horas extras (art. 22, parágrafo único). Excedido o limite, o excesso deve ser eliminado nos dois quadrimestres seguintes, pelo menos 1/3 no primeiro (art. 23). É nulo o ato que aumente despesa com pessoal nos 180 dias anteriores ao fim do mandato (art. 21). Nos dois últimos quadrimestres do mandato, é vedado contrair obrigação que não possa ser paga integralmente no mandato ou que deixe parcelas para o exercício seguinte sem disponibilidade de caixa (art. 42).',
        'Precatórios (art. 100): pagos na ordem cronológica de apresentação. Os débitos de natureza alimentícia (salários, vencimentos, pensões, benefícios previdenciários, indenizações por morte ou invalidez – §1º) têm preferência sobre os demais. DENTRO dos alimentícios, os titulares com 60 anos ou mais, portadores de doença grave ou pessoas com deficiência têm superpreferência até o triplo do valor da RPV, admitido o fracionamento; o restante segue a ordem cronológica (§2º). Débitos de pequeno valor (RPV) não se submetem ao regime de precatórios (§3º).',
        'Princípio da exclusividade: a LOA não pode conter dispositivo estranho à previsão da receita e à fixação da despesa, salvo autorização para créditos suplementares e operações de crédito.',
        'Créditos adicionais (Lei 4.320/64, art. 41): suplementares (reforçam dotação existente), especiais (despesa sem dotação específica) e extraordinários (despesas imprevisíveis e urgentes, como guerra, comoção interna ou calamidade pública). Suplementares e especiais dependem de prévia autorização legislativa e de indicação dos recursos (art. 167, V, CF); só os extraordinários podem ser abertos por medida provisória (art. 167, §3º, e art. 62, §1º, I, d). Também é vedada a vinculação de receita de impostos a órgão, fundo ou despesa, salvo as exceções do art. 167, IV.'
      ],
      cai: ['PPA/LDO/LOA', 'Limites da LRF', 'Ordem de pagamento dos precatórios',
        'Créditos adicionais, vedações do art. 167, limite prudencial e LRF em fim de mandato (arts. 21 e 42)'],
      macetes: ['Pessoal (LRF): União 50, Estados e Municípios 60; 95% do limite = prudencial; excesso eliminado em 2 quadrimestres (1/3 no primeiro). Crédito extraordinário é o único que pode vir por MP.'],
      video: 'direito financeiro PPA LDO LOA lei de responsabilidade fiscal precatórios OAB' }
  ]
},
{
  id: 'eleitoral', nome: 'Direito Eleitoral', icone: '🗳️', qtd: 2, cor: '#5c6bc0',
  dica: 'Condições de elegibilidade, inelegibilidades (Lei da Ficha Limpa), partidos e propaganda.',
  topicos: [
    { id: 'elegibilidade', titulo: 'Elegibilidade e inelegibilidade', incidencia: 'alta',
      aula: [
        'Idade mínima (art. 14, §3º): 35 anos para Presidente, Vice e Senador; 30 para Governador e Vice; 21 para Deputado, Prefeito, Vice-Prefeito e Juiz de Paz; 18 para Vereador.',
        'A idade mínima é verificada na data da POSSE, exceto para vereador (18 anos), verificada na data-limite do pedido de registro (Lei 9.504/97, art. 11, §2º).',
        'Demais condições de elegibilidade (art. 14, §3º): nacionalidade brasileira, pleno exercício dos direitos políticos, alistamento eleitoral, domicílio eleitoral na circunscrição e filiação partidária (não há candidatura avulsa). Domicílio e filiação deferida devem existir pelo menos 6 meses antes da eleição (Lei 9.504/97, art. 9º). O militar alistável é elegível: com menos de 10 anos de serviço, afasta-se da atividade; com mais de 10, é agregado e, se eleito, passa à inatividade no ato da diplomação (art. 14, §8º).',
        'Inalistáveis (estrangeiros e, durante o serviço militar obrigatório, os conscritos) e analfabetos são inelegíveis (art. 14, §§2º e 4º); o analfabeto pode votar (voto facultativo), mas não pode ser votado. Outros casos de inelegibilidade só podem ser criados por lei complementar (art. 14, §9º): a LC 64/90, alterada pela Lei da Ficha Limpa (LC 135/10), fixa, em regra, o prazo de 8 anos, e em várias hipóteses basta decisão de órgão judicial colegiado, sem trânsito em julgado.',
        'Para concorrer a outros cargos, Presidente, Governadores e Prefeitos devem renunciar aos mandatos até 6 meses antes do pleito (desincompatibilização).',
        'Reeleição (art. 14, §5º): Presidente, Governadores e Prefeitos (e quem os suceder ou substituir) podem ser reeleitos para UM único período subsequente, sem renunciar. Inelegibilidade reflexa (art. 14, §7º): no território de jurisdição do titular, são inelegíveis o cônjuge e os parentes consanguíneos ou afins até o 2º grau ou por adoção do chefe do Executivo (ou de quem o substituiu nos 6 meses anteriores ao pleito), salvo se já titular de mandato eletivo e candidato à reeleição. A dissolução do vínculo conjugal no curso do mandato não afasta essa inelegibilidade (Súmula Vinculante 18), salvo se o vínculo se extinguir pela morte do titular (STF, Tema 678).'
      ],
      cai: ['Idades mínimas', 'Prazo de 8 anos da Ficha Limpa', 'Desincompatibilização em 6 meses; reeleição e inelegibilidade reflexa (art. 14, §§5º a 7º, e SV 18)'],
      macetes: ['Idades: 35-30-21-18 (P/Sen – Gov – Dep/Pref – Ver). Idade conferida na POSSE (salvo 18 anos: no registro). Reflexa: cônjuge e parentes até 2º grau, só no território do titular.'],
      video: 'condições de elegibilidade idade mínima ficha limpa inelegibilidade OAB eleitoral' }
  ]
},
{
  id: 'previdenciario', nome: 'Direito Previdenciário', icone: '🧓', qtd: 2, cor: '#78909c',
  dica: 'Benefícios do RGPS após a Reforma da Previdência (EC 103/19), carência e segurados.',
  topicos: [
    { id: 'beneficios', titulo: 'Benefícios e carência', incidencia: 'alta',
      aula: [
        'Aposentadoria programada (EC 103/19, arts. 18 e 19) no RGPS urbano: 65 anos (homem) e 62 anos (mulher). Tempo mínimo de contribuição: 20 anos (homem) e 15 anos (mulher) para quem se filiou após a EC 103/19; para quem já era filiado, 15 anos para ambos, pela regra de transição. Trabalhador rural e segurado especial: 60 anos (homem) e 55 anos (mulher) (art. 201, §7º, II, CF). Valor: 60% da média de todos os salários de contribuição desde julho de 1994 + 2% por ano que exceder 20 anos de contribuição (homem) ou 15 anos (mulher) (EC 103/19, art. 26).',
        'Carência: aposentadorias por idade e especial = 180 contribuições; auxílio por incapacidade temporária e aposentadoria por incapacidade permanente = 12 contribuições; auxílio-reclusão = 24 contribuições (art. 25, IV, incluído pela Lei 13.846/19). O art. 25, III, ainda prevê 10 contribuições para o salário-maternidade da contribuinte individual, facultativa e segurada especial, mas o STF declarou essa exigência inconstitucional (ADIs 2110 e 2111, julgadas em 2024): o salário-maternidade não exige mais carência. Perdida a qualidade de segurado, a nova filiação exige METADE da carência para os benefícios por incapacidade e para o auxílio-reclusão (art. 27-A).',
        'Independem de carência: pensão por morte, salário-família, auxílio-acidente (indenizatório, de 50% do salário de benefício, devido ao empregado, doméstico, avulso e segurado especial quando a sequela de acidente reduz a capacidade para o trabalho habitual – arts. 18, §1º, e 86), os benefícios por incapacidade decorrentes de acidente de qualquer natureza, de doença profissional ou do trabalho ou de doença grave da lista oficial surgida após a filiação (art. 26, Lei 8.213/91) e o salário-maternidade (art. 26, VI, e ADIs 2110 e 2111). ATENÇÃO: desde a Lei 13.846/19, o auxílio-reclusão SAIU dessa lista e exige 24 contribuições.',
        'Qualidade de segurado (art. 15, Lei 8.213/91): mantida, sem limite de prazo, por quem está em gozo de benefício (salvo auxílio-acidente). No período de graça, dura até 12 meses após cessarem as contribuições, prazo que passa a 24 meses se o segurado já pagou mais de 120 contribuições sem perder a qualidade e ganha mais 12 meses se ele comprovar desemprego (até 36 meses); o facultativo mantém a qualidade por 6 meses. A perda da qualidade não impede a aposentadoria de quem já cumpriu a carência (Lei 10.666/03, art. 3º).'
      ],
      cai: ['Carências', 'Idades e tempo de contribuição da EC 103/19; período de graça; auxílio-reclusão com carência de 24 contribuições'],
      macetes: ['Carência: 180 (aposentadoria) / 24 (auxílio-reclusão) / 12 (incapacidade, salvo acidente, doença do trabalho ou doença grave). Sem carência: pensão por morte, salário-família, auxílio-acidente e salário-maternidade (ADIs 2110 e 2111).'],
      video: 'direito previdenciário carência benefícios RGPS reforma EC 103 OAB' }
  ]
},
{
  id: 'filosofia', nome: 'Filosofia do Direito', icone: '🤔', qtd: 2, cor: '#a1887f',
  dica: 'Autores clássicos: Aristóteles, Kant, Kelsen, Hart, Bobbio, Dworkin, Rawls. A FGV cobra a ideia central de cada um.',
  topicos: [
    { id: 'autores', titulo: 'Principais autores', incidencia: 'alta',
      aula: [
        'ARISTÓTELES: justiça DISTRIBUTIVA (proporcional ao mérito, igualdade geométrica) e justiça CORRETIVA (igualdade aritmética nas relações entre particulares, voluntárias, como os contratos, ou involuntárias, como os delitos e danos; a tradição escolástica a chama de comutativa). A EQUIDADE corrige a lei onde ela falha por ser geral (a régua de Lesbos, que se molda à pedra).',
        'KELSEN (Teoria Pura do Direito): o Direito é um sistema escalonado de normas; a validade decorre da norma superior, até a NORMA FUNDAMENTAL (pressuposta). Separa Direito de moral.',
        'HART (O Conceito de Direito): regras primárias (de conduta) e secundárias (de reconhecimento, alteração e julgamento). A REGRA DE RECONHECIMENTO identifica o que é Direito.',
        'DWORKIN: o Direito é composto por regras E PRINCÍPIOS; nos casos difíceis, há uma resposta correta (juiz Hércules, Direito como integridade).',
        'BOBBIO (Teoria do Ordenamento Jurídico): o ordenamento tem unidade, coerência e completude. Antinomias aparentes resolvem-se pelos critérios hierárquico, cronológico e da especialidade. No conflito entre critérios (antinomia de segundo grau), o hierárquico e o da especialidade prevalecem sobre o cronológico; entre hierárquico e especialidade não há regra segura. Lacunas são supridas por autointegração (analogia, princípios gerais) ou heterointegração. Em A Era dos Direitos: o problema dos direitos humanos hoje não é fundamentá-los, mas protegê-los.',
        'RAWLS (Uma Teoria da Justiça): justiça como EQUIDADE. Na posição original, sob o véu da ignorância, as partes escolheriam dois princípios: 1º) iguais liberdades básicas para todos; 2º) desigualdades sociais e econômicas só são justas se ligadas a cargos abertos a todos em igualdade equitativa de oportunidades e se trouxerem o maior benefício aos menos favorecidos (princípio da diferença). O 1º princípio tem prioridade sobre o 2º.'
      ],
      cai: ['Associar autor ↔ conceito', 'Justiça distributiva x corretiva',
        'Critérios de Bobbio para antinomias (inclusive conflito entre critérios) e os dois princípios de justiça de Rawls'],
      macetes: ['Kelsen = norma fundamental. Hart = regra de reconhecimento. Dworkin = princípios/Hércules. Rawls = véu da ignorância. Bobbio = antinomias (hierarquia, cronologia, especialidade). Aristóteles = distributiva (geométrica) x corretiva (aritmética).'],
      video: 'filosofia do direito OAB Kelsen Hart Dworkin Aristóteles Rawls resumo' }
  ]
}
];
