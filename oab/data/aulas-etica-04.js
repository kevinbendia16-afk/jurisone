/* Aulas adicionais – lote etica-04: direitos e prerrogativas. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);

  add('etica', [
    { id: 'et-inviolabilidade', titulo: 'Inviolabilidade do escritório e das comunicações; busca e apreensão', incidencia: 'alta',
      aula: [
        'Em uma frase: o escritório do advogado é um lugar protegido, e a polícia só entra lá com ordem de juiz, por crime do próprio advogado e com a OAB acompanhando.',
        'Para que serve: a proteção não é um privilégio pessoal do advogado. Ela protege o segredo do cliente. Quem procura um advogado precisa contar tudo sem medo de que isso vire prova contra si.',
        'O que é protegido: o escritório ou local de trabalho, os instrumentos de trabalho (computador, celular, arquivos), a correspondência escrita, eletrônica, telefônica e telemática, desde que ligadas ao exercício da advocacia (art. 7º, II, do Estatuto).',
        'Quando a proteção pode ser quebrada: só quando houver indícios de autoria e de materialidade de crime praticado pelo PRÓPRIO advogado. Ou seja, sinais concretos de que o crime existiu e de que o advogado participou (art. 7º, §6º).',
        'Requisitos da busca e apreensão: decisão de autoridade JUDICIÁRIA, motivada (com as razões explicadas); mandado de busca específico e detalhado; cumprimento na presença de representante da OAB (art. 7º, §6º). Delegado ou promotor não podem decretar a busca sozinhos.',
        'Documentos dos clientes: é proibido usar documentos, mídias e objetos que pertençam a clientes do advogado investigado. Exceção: o cliente que também esteja sendo investigado como participante do mesmo crime (art. 7º, §7º).',
        'Reforço da Lei 14.365/22: a lei incluiu novos parágrafos no art. 7º. O representante da OAB pode acompanhar e impedir que se analisem materiais sem relação com a investigação. E a medida cautelar contra o escritório não pode se apoiar apenas em delação premiada sem outras provas que a confirmem.',
        'Delação contra cliente: a mesma lei proibiu o advogado de fazer colaboração premiada contra quem é ou foi seu cliente. Quem descumpre responde disciplinar e criminalmente (art. 7º, parágrafos incluídos pela Lei 14.365/22).',
        'Exemplo: o delegado Paulo suspeita que o cliente de Dra. Lúcia lavou dinheiro. Ele não pode revistar o escritório dela para buscar provas contra o cliente. Mas, se houver indícios de que Lúcia ajudou na lavagem, o juiz pode autorizar a busca, com mandado específico e um representante da OAB presente.',
        'Cuidado (pegadinha): a FGV costuma dizer que basta a "suspeita contra o cliente" ou que o Ministério Público pode determinar a busca. Errado: o crime tem de ser do advogado, e a ordem tem de ser do juiz.',
        'Como a FGV cobra: casos de busca no escritório em que falta um requisito (sem OAB, mandado genérico, crime só do cliente), perguntando se a diligência é válida, e o uso de documentos de outros clientes.',
        'Resumo para revisar: inviolabilidade protege o cliente; quebra só por crime do próprio advogado; juiz, decisão motivada, mandado específico e OAB presente; documentos de clientes não podem ser usados, salvo cliente coautor; advogado não pode delatar cliente.'
      ],
      cai: ['Busca e apreensão no escritório: requisitos do art. 7º, §6º (juiz, decisão motivada, mandado específico, representante da OAB).', 'Crime do cliente não autoriza busca no escritório; precisa haver indícios contra o advogado.', 'Proibição de usar documentos de clientes, com exceção do cliente coautor (art. 7º, §7º).', 'Novidades da Lei 14.365/22: limites à delação e proibição de o advogado delatar cliente.'],
      macetes: ['Busca no escritório = JMEO: Juiz, Motivação, mandado Específico, OAB presente.', 'O crime tem de ser DO advogado, não do cliente.', 'Documento de cliente: intocável, salvo se o cliente for parceiro no crime.'],
      video: 'OAB ética inviolabilidade escritório advogado busca e apreensão art 7 §6' },

    { id: 'et-preso', titulo: 'Comunicação com cliente preso e prisão do advogado (sala de Estado-Maior)', incidencia: 'alta',
      aula: [
        'Em uma frase: o advogado conversa com o cliente preso a sós, mesmo sem procuração; e, se o próprio advogado for preso, há regras especiais para isso.',
        'Conceito: são duas prerrogativas diferentes. Uma garante a defesa do cliente preso (art. 7º, III). A outra protege o advogado contra prisões usadas para intimidar a profissão (art. 7º, IV e V, e §3º).',
        'Entrevista com o preso: o advogado pode falar com o cliente pessoal e reservadamente, ou seja, cara a cara e sem ninguém ouvindo. Vale mesmo sem procuração e mesmo que o preso esteja incomunicável. Vale em presídio, delegacia ou qualquer estabelecimento civil ou militar (art. 7º, III).',
        'Gravação proibida: monitorar ou gravar a conversa entre advogado e cliente viola a prerrogativa. Impedir a entrevista pode ser crime de abuso de autoridade (art. 20 da Lei 13.869/19) e também o crime do art. 7º-B do Estatuto.',
        'Prisão em flagrante ligada à profissão: se o fato tem relação com o exercício da advocacia, o advogado só pode ser preso em flagrante por crime INAFIANÇÁVEL (art. 7º, §3º). Inafiançável é o crime em que a lei não permite fiança, como racismo, tortura, tráfico, terrorismo e crimes hediondos.',
        'Presença da OAB: na prisão em flagrante por motivo ligado à advocacia, um representante da OAB deve estar presente na lavratura do auto, sob pena de nulidade. Nos demais casos de prisão, basta comunicar expressamente a Seccional (art. 7º, IV).',
        'Sala de Estado-Maior: antes do trânsito em julgado (ou seja, antes da condenação definitiva), o advogado preso só pode ficar em sala de Estado-Maior, com instalações e comodidades condignas. Se ela não existir, vai para prisão domiciliar (art. 7º, V).',
        'O que é sala de Estado-Maior: é um cômodo em unidade das Forças Armadas ou de quartel, sem grades, de uso de oficiais. Para o STF, cela comum, mesmo separada, não serve. O STF também derrubou a parte que exigia que a sala fosse "reconhecida pela OAB" (ADI 1127).',
        'Depois do trânsito em julgado: a prerrogativa acaba. O advogado condenado definitivamente cumpre pena como qualquer pessoa.',
        'Exemplo: Dr. Marcos é preso preventivamente por suposta fraude sem relação com a advocacia. A Seccional deve ser comunicada. Como ainda não há condenação definitiva, ele fica em sala de Estado-Maior. Se a cidade não tiver uma, vai para casa em prisão domiciliar.',
        'Cuidado (pegadinha): a FGV troca "inafiançável" por "afiançável", ou diz que a sala de Estado-Maior vale também após o trânsito em julgado. Outra pegadinha: dizer que o advogado precisa de procuração para visitar o preso.',
        'Como a FGV cobra: casos de delegado que exige procuração ou quer acompanhar a conversa; prisão em flagrante de advogado durante audiência; advogado preso preventivamente em cela comum.',
        'Resumo para revisar: entrevista pessoal e reservada, sem procuração, mesmo com incomunicabilidade; flagrante por ato profissional só em crime inafiançável e com OAB presente; outras prisões, só comunicação à Seccional; sala de Estado-Maior até o trânsito em julgado, e na falta, domiciliar.'
      ],
      cai: ['Direito de entrevista reservada com cliente preso, sem procuração e mesmo incomunicável (art. 7º, III).', 'Prisão em flagrante por motivo ligado à profissão: só crime inafiançável e com representante da OAB, sob pena de nulidade (art. 7º, IV e §3º).', 'Sala de Estado-Maior antes do trânsito em julgado; na falta, prisão domiciliar (art. 7º, V).', 'Diferença entre presença da OAB (ato profissional) e simples comunicação (demais casos).'],
      macetes: ['Preso + advogado = conversa a sós, sem papel (procuração).', 'Flagrante por ato profissional: só INAFIANÇÁVEL e com OAB na sala.', 'Estado-Maior é ANTES do trânsito; depois, regra comum.', 'Sem sala de Estado-Maior? Vai para casa.'],
      video: 'OAB ética advogado preso sala de estado maior comunicação com cliente preso art 7' },

    { id: 'et-acesso-autos', titulo: 'Acesso a autos, inquéritos e repartições públicas', incidencia: 'alta',
      aula: [
        'Em uma frase: o advogado pode ver processos e investigações mesmo sem procuração; só precisa dela quando houver sigilo.',
        'Para que serve: sem acesso às provas não existe defesa. Por isso o Estatuto garante ao advogado entrar em repartições e examinar autos com liberdade.',
        'Livre ingresso: o advogado pode entrar em salas de sessões, secretarias, cartórios, delegacias e prisões, mesmo fora do horário de expediente, desde que haja servidor presente. Pode também dirigir-se diretamente aos juízes, sem marcar horário, respeitada a ordem de chegada (art. 7º, VI e VIII).',
        'Processos judiciais e administrativos: o advogado pode examinar autos findos ou em andamento, mesmo sem procuração, quando não houver sigilo. Pode copiar peças e tomar notas (art. 7º, XIII).',
        'Investigações: o advogado pode examinar, em qualquer instituição, autos de flagrante e de investigações de qualquer natureza, findos ou em andamento, mesmo sem procuração. Vale para meio físico ou digital (art. 7º, XIV, com redação da Lei 13.245/16).',
        'Sigilo: se os autos estiverem em sigilo, o advogado precisa apresentar procuração (art. 7º, §10). Ou seja, sigilo não impede o acesso do defensor; apenas exige que ele prove que representa o investigado.',
        'Diligências em andamento: a autoridade pode limitar o acesso a elementos ligados a diligências ainda não concluídas, quando houver risco de atrapalhar a investigação (art. 7º, §11). Exemplo: uma interceptação telefônica que ainda está rodando.',
        'Súmula Vinculante 14: o defensor tem direito de acesso amplo às provas JÁ documentadas no procedimento investigatório, desde que digam respeito ao direito de defesa. O que ainda não foi documentado pode ser reservado.',
        'Assistência no interrogatório: o advogado pode assistir o cliente investigado durante a apuração, sob pena de nulidade absoluta do interrogatório e dos depoimentos, podendo apresentar razões e quesitos (art. 7º, XXI).',
        'Retirar autos (meio físico): o advogado pode ter vista dos processos em cartório ou retirá-los pelos prazos legais (art. 7º, XV) e retirar autos findos, mesmo sem procuração, por até 10 dias (art. 7º, XVI). Não pode retirar quando houver segredo de justiça, documentos originais de difícil restauração ou motivo relevante reconhecido pelo juiz, nem o advogado que já deixou de devolver autos no prazo (art. 7º, §1º).',
        'Exemplo: Dr. Rafael quer ver o inquérito em que seu futuro cliente é investigado. Se não houver sigilo, entra e examina sem procuração. Se houver sigilo, junta a procuração e vê tudo o que já está documentado, mas não as escutas que ainda estão em curso.',
        'Cuidado (pegadinha): a FGV diz que "inquérito sigiloso não pode ser examinado pelo advogado". Errado: com procuração, pode, nos limites da Súmula Vinculante 14. Negar acesso indevidamente pode configurar abuso de autoridade (art. 7º, §12, e art. 32 da Lei 13.869/19).',
        'Como a FGV cobra: delegado que nega vista do inquérito, servidor que exige procuração para processo público e alcance da Súmula Vinculante 14.',
        'Resumo para revisar: sem sigilo, acesso sem procuração; com sigilo, acesso com procuração; diligência em curso pode ser reservada; Súmula Vinculante 14 garante o que já está documentado; autos findos podem ser retirados por 10 dias sem procuração.'
      ],
      cai: ['Acesso a inquérito e investigações sem procuração, salvo sigilo (art. 7º, XIV e §10).', 'Limite das diligências em andamento (art. 7º, §11) e Súmula Vinculante 14.', 'Retirada de autos findos por 10 dias sem procuração e as exceções do §1º.', 'Nulidade do interrogatório sem permitir a assistência do advogado (art. 7º, XXI).'],
      macetes: ['Sigilo não fecha a porta: só pede a procuração.', 'SV 14: o que já está no papel, a defesa vê; o que está acontecendo, pode esperar.', 'Autos findos: 10 dias, sem procuração.'],
      video: 'OAB ética acesso aos autos inquérito sem procuração súmula vinculante 14 advogado' },

    { id: 'et-imunidade', titulo: 'Imunidade profissional: manifestações no exercício da advocacia', incidencia: 'media',
      aula: [
        'Em uma frase: o advogado pode falar com firmeza na defesa do cliente sem responder por injúria ou difamação, mas responde por calúnia e pelos excessos perante a OAB.',
        'Conceito: imunidade profissional é a proteção que impede que manifestações feitas no exercício da advocacia, em juízo ou fora dele, sejam punidas como injúria ou difamação (art. 7º, §2º).',
        'Os crimes contra a honra, em palavras simples: calúnia é acusar alguém falsamente de um crime; difamação é contar um fato que mancha a reputação; injúria é xingar ou ofender a dignidade. A imunidade cobre só difamação e injúria.',
        'Calúnia fica fora: se o advogado acusa falsamente o juiz ou a parte contrária de um crime, ele pode responder criminalmente. A imunidade não alcança a calúnia.',
        'Desacato fica fora: o Estatuto também mencionava desacato, mas o STF declarou essa parte inconstitucional (ADI 1127). Portanto, o advogado pode responder por desacato.',
        'Requisito: a manifestação tem de ter relação com o exercício da advocacia. Ofensa pessoal, sem ligação com a causa, não é protegida. O Código Penal traz regra parecida para a ofensa feita em juízo na discussão da causa (art. 142, I, do Código Penal).',
        'Excessos: mesmo quando não há crime, o advogado pode sofrer sanção disciplinar na OAB pelos excessos que cometer (art. 7º, §2º). O Código de Ética exige urbanidade, ou seja, trato educado com juízes, colegas e partes (CED, art. 27).',
        'Quem pune o excesso: a OAB, por meio do Tribunal de Ética e Disciplina. O juiz não pode aplicar sanção disciplinar ao advogado; pode, no máximo, oficiar à OAB.',
        'Exemplo: em alegações finais, Dra. Carla escreve que a testemunha "mentiu de forma descarada e vergonhosa". Isso está coberto pela imunidade quanto à difamação e à injúria. Mas, se ela afirmar sem base que o juiz "recebeu propina", pode responder por calúnia.',
        'Cuidado (pegadinha): a FGV diz que a imunidade é "absoluta" ou que cobre "todos os crimes contra a honra". Errado: não cobre calúnia nem desacato, e não impede o processo disciplinar.',
        'Como a FGV cobra: casos de petições com termos duros, perguntando se há crime, se cabe processo na OAB e qual crime fica fora da imunidade.',
        'Resumo para revisar: imunidade cobre injúria e difamação; não cobre calúnia; desacato saiu por decisão do STF (ADI 1127); só no exercício da advocacia; excessos geram sanção disciplinar na OAB.'
      ],
      cai: ['Quais crimes contra a honra a imunidade cobre (injúria e difamação) e quais não cobre (calúnia).', 'Exclusão do desacato pelo STF (ADI 1127).', 'Possibilidade de sanção disciplinar pelos excessos, mesmo sem crime.'],
      macetes: ['Imunidade = I e D (Injúria e Difamação). Calúnia Continua Crime.', 'Desacato: o STF tirou da imunidade.', 'Sem crime não quer dizer sem processo na OAB.'],
      video: 'OAB ética imunidade profissional advogado injúria difamação calúnia art 7 §2' },

    { id: 'et-desagravo', titulo: 'Desagravo público e defesa das prerrogativas', incidencia: 'media',
      aula: [
        'Em uma frase: quando um advogado é ofendido por causa da profissão, a OAB faz uma sessão pública para defendê-lo e repudiar a ofensa.',
        'Conceito: desagravo público é a resposta oficial da OAB a uma ofensa sofrida pelo advogado no exercício da profissão ou em razão dela. É um direito do advogado (art. 7º, XVII) e um instrumento de defesa da classe.',
        'Quem promove: o Conselho competente da OAB, ou seja, em regra o Conselho Seccional (art. 7º, §5º). O Conselho Federal promove quando o ofendido é conselheiro federal ou presidente de Conselho Seccional, ou quando a ofensa tem relevância e grave violação às prerrogativas com repercussão nacional (Regulamento Geral, art. 19).',
        'Como começa: de ofício (por iniciativa da própria OAB) ou a pedido do ofendido ou de qualquer pessoa (Regulamento Geral, art. 18).',
        'Não depende do ofendido: o desagravo não precisa da concordância do advogado ofendido. Ele interessa a toda a classe, e não só a quem foi atingido (Regulamento Geral, art. 18).',
        'Quando é negado: o relator pode propor o arquivamento se a ofensa for pessoal, se não tiver relação com o exercício da profissão ou com as prerrogativas, ou se for crítica de caráter doutrinário, político ou religioso (Regulamento Geral, art. 18).',
        'Como termina: acolhido o pedido, faz-se uma sessão pública, com ampla divulgação, em que se lê a nota de desagravo. Ela pode ser enviada ao ofensor, às autoridades e à imprensa.',
        'Desagravo não é punição do ofensor: a OAB não aplica pena ao juiz ou ao delegado. Se houver crime ou falta funcional, a OAB pode representar aos órgãos competentes, por exemplo, à corregedoria ou ao Ministério Público.',
        'Outras defesas das prerrogativas: a OAB mantém procuradorias e comissões de prerrogativas e pode atuar como assistente do advogado em processos por fatos ligados à profissão (art. 49 do Estatuto).',
        'Exemplo: o juiz Henrique chama a advogada Bianca de "despreparada e chicaneira" em audiência por ela ter insistido em uma pergunta. Um colega que assistiu pede o desagravo. A Seccional pode promovê-lo, mesmo que Bianca prefira esquecer o caso.',
        'Cuidado (pegadinha): a FGV afirma que o desagravo "depende de requerimento do ofendido" ou "de sua concordância". Errado nos dois casos. Outra pegadinha é dizer que todo desagravo é feito pelo Conselho Federal.',
        'Como a FGV cobra: quem tem legitimidade para pedir, qual Conselho promove e se a vontade do ofendido importa.',
        'Resumo para revisar: desagravo é sessão pública de repúdio à ofensa; em regra, Conselho Seccional; Conselho Federal para conselheiro federal, presidente de Seccional ou caso nacional; de ofício ou a pedido de qualquer pessoa; não depende da concordância do ofendido.'
      ],
      cai: ['Legitimidade para pedir o desagravo (qualquer pessoa) e a atuação de ofício.', 'Desnecessidade de concordância do ofendido.', 'Competência do Seccional e hipóteses do Conselho Federal.', 'Hipóteses de arquivamento (ofensa pessoal ou crítica doutrinária, política ou religiosa).'],
      macetes: ['Desagravo é da CLASSE, não só do ofendido: não precisa do "sim" dele.', 'Qualquer pessoa pede; a OAB pode agir sozinha.', 'Presidente de Seccional ou conselheiro federal ofendido? Conselho Federal.'],
      video: 'OAB ética desagravo público advogado regulamento geral art 18 19' },

    { id: 'et-crime-prerrog', titulo: 'Crime de violação de prerrogativas (art. 7º-B) e Lei de Abuso de Autoridade', incidencia: 'media',
      aula: [
        'Em uma frase: violar certas prerrogativas do advogado deixou de ser só uma falta: virou crime.',
        'Para que serve: antes, quem desrespeitava o advogado raramente sofria consequências. O crime dá força real às prerrogativas mais importantes.',
        'Origem: o art. 7º-B foi incluído no Estatuto pela Lei de Abuso de Autoridade (Lei 13.869/19, art. 43). Depois, a Lei 14.365/22 endureceu a pena.',
        'Quais prerrogativas: o crime do art. 7º-B protege apenas os incisos II, III, IV e V do art. 7º. Em palavras simples: inviolabilidade do escritório e das comunicações; entrevista com o cliente preso; presença da OAB na prisão em flagrante por ato profissional; e sala de Estado-Maior.',
        'O que fica fora do art. 7º-B: as outras prerrogativas, como o acesso aos autos ou falar com o juiz, não estão no art. 7º-B. Mas a violação pode ser crime da Lei de Abuso de Autoridade ou gerar outras consequências.',
        'Lei de Abuso de Autoridade, pontos ligados à advocacia: é crime impedir, sem justa causa, a entrevista pessoal e reservada do preso com seu advogado (art. 20 da Lei 13.869/19); e negar ao interessado, ao defensor ou ao advogado acesso aos autos de investigação, salvo as diligências em curso cujo sigilo seja imprescindível (art. 32 da Lei 13.869/19).',
        'Elemento subjetivo: na Lei de Abuso de Autoridade, só há crime se o agente agir com a finalidade específica de prejudicar alguém, beneficiar a si ou a outro, ou por capricho ou satisfação pessoal (art. 1º, §1º). Divergência na interpretação da lei ou das provas não é crime (art. 1º, §2º).',
        'Quem pode ser autor: em regra, o agente público (juiz, delegado, promotor, policial, servidor). A ação penal é pública incondicionada, ou seja, o Ministério Público age sem depender de pedido da vítima.',
        'Papel da OAB: a OAB pode requisitar providências, representar ao Ministério Público e atuar como assistente. O §12 do art. 7º diz que negar acesso aos autos sujeita o responsável à responsabilização criminal e funcional por abuso de autoridade.',
        'Exemplo: o diretor de presídio Jorge proíbe o advogado Túlio de conversar a sós com o cliente e manda um agente ficar na sala ouvindo. Ele viola o art. 7º, III. Isso pode configurar o crime do art. 7º-B do Estatuto e também o do art. 20 da Lei de Abuso de Autoridade.',
        'Cuidado (pegadinha): a FGV inclui no art. 7º-B prerrogativas que não estão lá, como a retirada de autos ou o uso da palavra em sessão. Guarde: só incisos II, III, IV e V.',
        'Como a FGV cobra: identificar se a conduta é crime do art. 7º-B, quais incisos ele protege e a ligação com a Lei 13.869/19.',
        'Resumo para revisar: art. 7º-B veio da Lei 13.869/19; protege só os incisos II, III, IV e V do art. 7º; impedir entrevista com preso também é crime do art. 20 da Lei 13.869/19; negar acesso aos autos é crime do art. 32; abuso exige finalidade específica.'
      ],
      cai: ['Quais incisos do art. 7º são protegidos pelo crime do art. 7º-B (II, III, IV e V).', 'Relação com os arts. 20 e 32 da Lei 13.869/19.', 'Exigência de finalidade específica para o crime de abuso de autoridade.'],
      macetes: ['7º-B protege "2 a 5": incisos II, III, IV e V.', 'Escritório, preso, flagrante com OAB e Estado-Maior: os quatro do crime.', 'Abuso de autoridade sem "intenção ruim" específica não é crime.'],
      video: 'OAB ética crime violação de prerrogativas art 7-B lei abuso de autoridade advogado' }
  ]);
})();
