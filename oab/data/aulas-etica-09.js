/* Aulas adicionais – lote etica-09 (Ética: sigilo e publicidade). */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);

  add('etica', [
    { id: 'et-sigilo', titulo: 'Sigilo profissional: alcance, exceções e recusa a depor', incidencia: 'alta',
      aula: [
        'Em uma frase: o que o cliente conta ao advogado fica guardado com o advogado, mesmo que ninguém peça segredo e mesmo depois que o caso acaba.',
        'Conceito: sigilo profissional é o dever de não revelar fatos que o advogado conheceu por causa da profissão. Ao mesmo tempo, é um direito: ninguém pode obrigar o advogado a contar esses fatos (arts. 35 e 38 do CED).',
        'É de ordem pública: "ordem pública" quer dizer que a regra protege a sociedade, não só o cliente. Por isso o sigilo vale mesmo sem pedido do cliente. Toda conversa entre advogado e cliente, por qualquer meio (WhatsApp, e-mail, reunião), presume-se confidencial (art. 36, caput e §1º, do CED).',
        'Alcance ampliado: o sigilo também cobre o que o advogado soube no exercício de função na OAB, como conselheiro ou membro do Tribunal de Ética (art. 35, parágrafo único, do CED). E vale quando ele atua como mediador, conciliador ou árbitro (art. 36, §2º, do CED).',
        'Exceção (justa causa): o sigilo só cede em situação excepcional que configure justa causa. O CED dá exemplos: grave ameaça ao direito à vida ou à honra, ou defesa própria, como quando o próprio cliente ataca o advogado (art. 37 do CED).',
        'Limite da exceção: mesmo com justa causa, o advogado revela só o estritamente necessário para se defender ou proteger a vida. Não pode expor toda a vida do cliente (art. 37 do CED).',
        'Recusa a depor: o advogado pode se recusar a depor como testemunha em processo em que atuou ou deva atuar, ou sobre fato de quem foi ou é seu cliente. Vale MESMO que o cliente autorize ou peça o depoimento (art. 7º, XIX, do Estatuto). Isso vale em processo judicial, administrativo ou arbitral (art. 38 do CED).',
        'Proteção do escritório: o escritório, os arquivos e as comunicações do advogado são invioláveis, ligados ao exercício da advocacia (art. 7º, II, do Estatuto). A busca e apreensão só pode ocorrer por ordem judicial fundamentada, com indícios de crime do próprio advogado, e na presença de representante da OAB (art. 7º, §6º).',
        'Infração: violar o sigilo sem justa causa é infração disciplinar punida com censura (art. 34, VII, e art. 36 do Estatuto).',
        'Exemplo: a advogada Paula defendeu Renato em um divórcio. Anos depois, a ex-esposa arrola Paula como testemunha. Renato diz: "pode falar, eu deixo". Paula pode recusar-se a depor, porque o sigilo não depende da vontade do cliente.',
        'Exemplo 2: o ex-cliente Jorge processa o advogado Caio dizendo que ele sumiu com o dinheiro do acordo. Caio pode juntar o recibo e as mensagens em que Jorge confirma o recebimento. É defesa própria, revelando só o necessário.',
        'Cuidado (pegadinha): a FGV diz que, "autorizado pelo cliente, o advogado é obrigado a depor". Errado: é faculdade de recusar, não obrigação. Outra: "o sigilo depende de pedido expresso". Errado: é de ordem pública.',
        'Como a FGV cobra: casos com testemunha autorizada pelo cliente, advogado acusado pelo ex-cliente, conselheiro da OAB que soube de algo no processo ético e mediador que quer contar o que ouviu.',
        'Resumo para revisar: sigilo é dever e direito, de ordem pública; comunicações presumem-se confidenciais; cede só com justa causa (vida, honra, defesa própria) e no limite do necessário; pode recusar depor mesmo autorizado; violar sem justa causa gera censura.'
      ],
      cai: ['Recusa a depor mesmo com autorização do cliente (art. 7º, XIX, EAOAB; art. 38, CED)', 'Hipóteses de justa causa para quebra: vida, honra e defesa própria (art. 37, CED)', 'Sigilo de quem atua como mediador, conciliador, árbitro ou em função na OAB', 'Sanção de censura por violar sigilo sem justa causa (art. 34, VII)'],
      macetes: ['Sigilo não tem dono: nem o cliente pode liberar o advogado da obrigação de calar em juízo.', 'Justa causa = "V-H-D": Vida, Honra, Defesa própria.', 'Quebrou o sigilo? Fale só o mínimo necessário.', 'Violou sem justa causa = Censura.'],
      video: 'OAB ética sigilo profissional recusa a depor justa causa art 37 CED' },

    { id: 'et-pub-regras', titulo: 'Publicidade profissional: regras gerais do Código de Ética', incidencia: 'alta',
      aula: [
        'Em uma frase: o advogado pode se mostrar ao público, mas para informar, nunca para vender serviço como se fosse produto de loja.',
        'Conceito: publicidade profissional é a divulgação da atividade do advogado ou da sociedade. É permitida, desde que tenha caráter meramente informativo, com discrição e sobriedade, sem captar clientela nem mercantilizar a profissão (art. 39 do CED).',
        'Mercantilização: é tratar a advocacia como comércio, com promoções, preços e apelos de venda. O CED diz que a advocacia é incompatível com qualquer procedimento de mercantilização (art. 5º do CED).',
        'Meios proibidos: rádio, cinema e televisão; outdoors e painéis luminosos; inscrições em muros, paredes, veículos, elevadores e espaços públicos; divulgação junto com outra atividade; mala direta e panfletos para captar clientes (art. 40 do CED).',
        'Fachada do escritório: placas, painéis luminosos e inscrições NA FACHADA são permitidos, só para identificar o escritório, respeitando a sobriedade (art. 40, parágrafo único, do CED). Painel luminoso proibido é o de propaganda na rua, não a placa da própria sede.',
        'Cartões e material do escritório: podem trazer nome, número de inscrição na OAB, títulos acadêmicos, especialidades, endereço, e-mail, site, QR code, logotipo, horário e idiomas (art. 44 do CED).',
        'O que não pode no cartão: fotografias pessoais ou de terceiros, cargos ou funções públicas exercidos (atuais ou passados), valores dos serviços, gratuidade ou forma de pagamento, e expressões que iludam o público (art. 44, §1º, do CED).',
        'Comunicações permitidas: avisar clientes por carta ou e-mail sobre mudança de endereço ou de equipe é permitido (art. 44, §2º, do CED). Patrocinar eventos e publicações científicas ou culturais também é permitido, sem fim de captação (art. 45 do CED).',
        'Internet e telefone: podem ser usados como veículo de publicidade, inclusive mensagens a pessoas certas, desde que não ofereçam serviços nem captem clientes (art. 46 do CED). Os detalhes vêm no Provimento 205/2021.',
        'Exemplo: a advogada Lívia instala na fachada uma placa luminosa discreta com "Lívia Souza Advocacia". Pode. Já se ela alugar um painel luminoso na avenida com "Divórcio rápido", é vedado.',
        'Cuidado (pegadinha): ex-juiz ou ex-delegado não pode colocar o cargo antigo no cartão, nem "ex-promotor". Título acadêmico (mestre, doutor) pode.',
        'Como a FGV cobra: lista de iniciativas do advogado para o aluno marcar a única permitida; cartão de visita com informações proibidas; placa na fachada versus outdoor.',
        'Resumo para revisar: informar sim, vender não; discrição e sobriedade; rádio, TV, outdoor e muro proibidos; fachada só identifica; cartão sem foto, cargo público e preço.'
      ],
      cai: ['Distinguir meio permitido (fachada, site, cartão) de meio vedado (TV, outdoor, muro, veículo)', 'Conteúdo vedado no cartão: cargo público, foto, preço', 'Caráter informativo, discreto e sóbrio (art. 39, CED)'],
      macetes: ['Publicidade OK = informar; proibida = vender.', 'Placa luminosa na FACHADA pode; painel na RUA não.', 'Cartão: diploma sim, cargo público não, preço nunca.', 'Rádio, TV e cinema: os três "R-T-C" são proibidos.'],
      video: 'OAB ética publicidade do advogado art 39 40 44 código de ética' },

    { id: 'et-prov205', titulo: 'Provimento 205/2021: marketing jurídico e redes sociais', incidencia: 'alta',
      aula: [
        'Em uma frase: o advogado pode usar Instagram, YouTube e anúncio pago para ensinar Direito e mostrar seu trabalho, mas sem oferecer serviço, sem prometer resultado e sem ostentar.',
        'Para que serve: o Provimento 205/2021 do Conselho Federal atualizou as regras de publicidade para o mundo digital. Ele permite o marketing jurídico, desde que respeite o CED e não vire captação ou mercantilização (Prov. 205/21, art. 1º).',
        'Marketing de conteúdo: é produzir conteúdo jurídico útil (vídeos, artigos, posts explicando direitos). É a forma estimulada pelo Provimento, porque informa a sociedade.',
        'Publicidade ativa e passiva: ativa é a que chega a pessoas que não procuraram o advogado (ex.: anúncio no feed). Passiva é a que só alcança quem foi atrás (ex.: site do escritório). As restrições são mais fortes na ativa.',
        'Impulsionamento: é pagar para a rede social mostrar o post a mais pessoas. É permitido, desde que o conteúdo seja informativo e não ofereça serviço de forma mercantil (Prov. 205/21, art. 4º).',
        'Lives, vídeos e podcasts: são permitidos, com conteúdo jurídico e informativo. O advogado pode aparecer em vídeo na internet; a proibição de TV do CED mira a publicidade nesse meio, não a aula na internet.',
        'Vedações de conteúdo: é proibido prometer resultado, usar casos concretos para oferecer atuação e informar dimensões ou estrutura física do escritório na publicidade ativa (Prov. 205/21, art. 6º).',
        'Ostentação: é proibido, em qualquer publicidade, ostentar bens, como carros, viagens, hospedagens e bens de consumo (Prov. 205/21, art. 6º, parágrafo único). A ideia é não atrair cliente pela imagem de riqueza.',
        'Preço e rankings: continuam proibidos valores, promoções, gratuidade e forma de pagamento. Também é vedado pagar para aparecer em rankings, prêmios ou listas de "melhores advogados" (Prov. 205/21).',
        'Exemplo: o advogado Tiago grava reels explicando "o que fazer quando o voo atrasa" e paga para impulsionar. Pode. Se ele postar "Ganhei R$ 50 mil para meu cliente, ganho o seu também!", usa caso concreto e promete resultado: vedado.',
        'Cuidado (pegadinha): impulsionar post NÃO é proibido. O que torna a conduta ilícita é o conteúdo (preço, promessa, ostentação), não o fato de pagar a plataforma.',
        'Como a FGV cobra: casos com Instagram, anúncios pagos, foto em carro de luxo, post de vitória em processo, consultoria com "primeira consulta grátis" e pagamento para ranking.',
        'Resumo para revisar: marketing jurídico permitido; impulsionar conteúdo informativo pode; nada de preço, gratuidade ou promoção; nada de promessa de resultado ou caso concreto para captar; nada de ostentação nem ranking pago.'
      ],
      cai: ['Impulsionamento de conteúdo informativo é permitido', 'Ostentação de bens e promessa de resultado são vedadas', 'Uso de casos concretos para oferecer serviços', 'Pagamento para rankings ou premiações'],
      macetes: ['Pode pagar a rede, não pode vender o serviço.', 'Os 3 "Ps" proibidos: Preço, Promessa, Patrimônio (ostentação).', 'Conteúdo que ensina = permitido; conteúdo que vende = vedado.'],
      video: 'Provimento 205 2021 OAB marketing jurídico redes sociais impulsionamento' },

    { id: 'et-pub-vedacoes', titulo: 'Vedações na publicidade: captação, mercantilização e meios proibidos', incidencia: 'media',
      aula: [
        'Em uma frase: o advogado não pode ir atrás do cliente para "pescar" causas, nem usar intermediários pagos para isso.',
        'Conceito: captação de clientela é angariar causas de forma ativa e indevida, com ou sem ajuda de terceiros. É infração disciplinar (art. 34, IV, do Estatuto) e é vedada pelo CED (art. 7º do CED).',
        'Agenciador: valer-se de agenciador de causas, pagando a ele parte dos honorários, é infração própria (art. 34, III, do Estatuto). Ex.: pagar comissão a funcionário de hospital para indicar vítimas de acidente.',
        'Sanção: as duas condutas (captar causas e usar agenciador) são punidas com censura (art. 36, I, do Estatuto).',
        'Mala direta e panfletos: enviar cartas em massa ou distribuir panfletos para captar clientes é vedado (art. 40, VI, do CED). Já avisar os próprios clientes sobre mudança de endereço é permitido.',
        'Atividade conjunta: o advogado não pode divulgar a advocacia junto com outra atividade, como "Advocacia e Corretora de Imóveis" no mesmo anúncio (art. 40, IV, do CED).',
        'Espaços públicos: inscrições em muros, paredes, veículos, elevadores e qualquer espaço público são vedadas (art. 40, III, do CED). Adesivo do escritório no carro com telefone é exemplo clássico.',
        'Mercantilização: a advocacia não é comércio (art. 5º do CED). Por isso não cabe oferecer serviço com brinde, desconto, "combo" ou preço em anúncio.',
        'Listas de clientes: é vedado divulgar, ou deixar que divulguem, listas de clientes e de causas (art. 42, IV, do CED).',
        'Exemplo: o advogado Marcos combina com um despachante que este indicará clientes de multa de trânsito, recebendo 10% dos honorários. Marcos comete a infração do art. 34, III, do Estatuto, punida com censura.',
        'Cuidado (pegadinha): a vedação vale também para sociedades de advogados. E a falta existe "com ou sem intervenção de terceiros": não precisa de agenciador para haver captação.',
        'Como a FGV cobra: casos com panfletos na porta do fórum, comissão a terceiros, anúncio junto com outra profissão e adesivo em veículo, pedindo a infração e a sanção.',
        'Resumo para revisar: captar causas = art. 34, IV; agenciador com parte dos honorários = art. 34, III; ambas censura; mala direta e panfletos vedados; nada de divulgação conjunta com outra atividade.'
      ],
      cai: ['Identificar captação de clientela e sua sanção (censura)', 'Agenciador de causas com participação nos honorários', 'Meios vedados do art. 40 do CED', 'Divulgação conjunta com outra atividade'],
      macetes: ['Captou ou agenciou = Censura.', 'Advogado não "pesca" cliente: espera ser procurado.', 'Comunicar mudança de endereço aos próprios clientes pode; panfletar estranhos não.'],
      video: 'OAB ética captação de clientela agenciador de causas mala direta' },

    { id: 'et-imprensa', titulo: 'Manifestações na imprensa e debates públicos', incidencia: 'media',
      aula: [
        'Em uma frase: o advogado pode dar entrevista e escrever na imprensa para informar e educar, mas não pode usar isso para se autopromover nem para atacar o trabalho de colegas.',
        'Para que serve: as regras dos arts. 41 a 43 do CED evitam que a mídia vire vitrine de captação e que causas sejam julgadas na televisão.',
        'Colunas e artigos: o advogado pode escrever colunas e artigos. Mas não pode induzir o leitor a entrar com ação nem captar clientes com isso (art. 41 do CED).',
        'Dados de contato: em artigo, coluna, entrevista no rádio ou na TV, ou matéria na internet, não pode informar endereço nem telefone. Só pode indicar o e-mail (art. 40, V, do CED).',
        'Consultas habituais: é vedado responder com habitualidade a consultas jurídicas em meios de comunicação (art. 42, I, do CED). Uma entrevista explicando um tema é permitida; um "consultório jurídico" fixo não.',
        'Causa de colega: é vedado debater, em qualquer meio de comunicação, causa sob o patrocínio de outro advogado (art. 42, II, do CED).',
        'Outras vedações: abordar tema de modo que comprometa a dignidade da profissão; divulgar listas de clientes e demandas; e insinuar-se para reportagens e declarações públicas (art. 42, III a V, do CED).',
        'Finalidade da participação: em programas de rádio, TV ou internet, o objetivo deve ser ilustrativo, educativo e instrutivo, sem promoção pessoal ou profissional. É vedado falar sobre métodos de trabalho usados por colegas (art. 43 do CED).',
        'Sensacionalismo: convidado a se manifestar, o advogado deve evitar insinuações de promoção pessoal e sensacionalismo (art. 43, parágrafo único, do CED).',
        'Exemplo: o advogado Fábio é convidado por um telejornal para explicar o que é prisão preventiva. Pode ir. Mas não pode comentar a estratégia do advogado de um réu famoso, nem dizer seu telefone no ar.',
        'Cuidado (pegadinha): a vedação de TV do art. 40, I, é para publicidade (anúncio). Participar de programa como entrevistado, com fim educativo, é permitido (art. 43).',
        'Como a FGV cobra: entrevista com telefone na tela, coluna semanal de perguntas dos leitores, comentário sobre processo de outro advogado e participação educativa permitida.',
        'Resumo para revisar: entrevista educativa pode; só e-mail como contato; nada de consultas habituais na mídia; não debater causa de colega; nada de autopromoção ou sensacionalismo.'
      ],
      cai: ['Contato em artigo ou entrevista: só e-mail (art. 40, V, CED)', 'Vedação de debater causa de outro advogado (art. 42, II)', 'Respostas habituais a consultas na mídia', 'Finalidade educativa das participações (art. 43)'],
      macetes: ['Na imprensa, o advogado deixa só o "@": e-mail sim, telefone e endereço não.', 'Explicar a lei pode; comentar a causa do colega não.', 'Entrevista eventual sim; consultório fixo na mídia não.'],
      video: 'OAB ética advogado na imprensa entrevista art 41 42 43 código de ética' }
  ]);
})();
