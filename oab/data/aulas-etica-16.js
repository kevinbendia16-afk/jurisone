/* Aulas adicionais – lote etica-16. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('etica', [
    { id: 'et-ced-principios', titulo: 'Código de Ética: princípios e deveres do advogado', incidencia: 'alta',
      aula: [
        'Em uma frase: o Código de Ética e Disciplina (CED) diz como o advogado deve se comportar com o cliente, com o colega, com o juiz e com a sociedade.',
        'Conceito: o CED atual foi aprovado pelo Conselho Federal em 2015 (Resolução 02/2015). Ele detalha os deveres do Estatuto (Lei 8.906/94). Quem viola o CED comete infração disciplinar (art. 36, II, do Estatuto).',
        'Deveres gerais: o advogado deve agir com honestidade, decoro (postura respeitosa), veracidade, lealdade, dignidade e boa-fé. Deve atuar com destemor e independência, preservar a honra da profissão e zelar pela própria reputação (art. 2º, parágrafo único, I e II, do CED).',
        'Evitar conflitos: é dever estimular a conciliação e a mediação, prevenindo processos sempre que possível. Também é dever desaconselhar lides temerárias, ou seja, ações sem chance real e que só causam prejuízo (art. 2º, parágrafo único, VI e VII, do CED).',
        'Independência: mesmo o advogado empregado mantém sua independência técnica. Ele pode recusar uma causa que contrarie orientação que ele mesmo já deu ao cliente ou empregador (art. 4º do CED; art. 18 do Estatuto).',
        'Não é comércio: a advocacia é incompatível com a mercantilização, isto é, com ser tratada como um negócio qualquer. Por isso é proibido captar clientes de forma agressiva ou oferecer serviços como produto (arts. 5º e 7º do CED).',
        'Dever de informar: o advogado deve informar o cliente, com clareza, sobre os riscos da causa e as consequências possíveis. Ele não pode prometer resultado (art. 9º do CED).',
        'Procuração com outro advogado: o advogado não deve aceitar causa que já tem patrono sem que este saiba antes. As exceções são motivo justo ou medidas urgentes e inadiáveis (art. 14 do CED).',
        'Renúncia: o advogado pode renunciar ao mandato sem dizer o motivo. Ele continua responsável pela causa por 10 dias depois de notificar o cliente, salvo se for substituído antes (art. 16 do CED; art. 5º, §3º, do Estatuto).',
        'Defesa criminal: é direito e dever do advogado defender o acusado, qualquer que seja sua opinião sobre a culpa dele (art. 23 do CED). Todos têm direito a defesa.',
        'Sigilo: o sigilo profissional é de ordem pública, ou seja, vale mesmo que o cliente não peça. Ele só cede em casos extremos, como grave ameaça à vida ou à honra, ou para o advogado se defender quando atacado pelo próprio cliente (arts. 35 a 37 do CED).',
        'Exemplo: Marina descobre que seu cliente, réu por furto, provavelmente é culpado. Ela pode e deve continuar a defesa. Mas não pode mentir nos autos sobre fatos (art. 6º do CED).',
        'Cuidado (pegadinha): renúncia não exige motivo; o que existe é o prazo de 10 dias de responsabilidade. E o sigilo não depende de pedido do cliente.',
        'Como a FGV cobra: casos curtos com advogado em dúvida sobre aceitar causa, renunciar, revelar segredo ou defender réu confesso.',
        'Resumo para revisar: deveres do art. 2º do CED; independência mesmo do empregado; renúncia sem motivo e 10 dias; defesa criminal sempre possível; sigilo de ordem pública.'
      ],
      cai: ['Renúncia sem motivo e responsabilidade por 10 dias.', 'Aceitar causa que já tem advogado: só com ciência dele, salvo urgência ou motivo justo.', 'Dever de defender o acusado independentemente da culpa.', 'Sigilo profissional e suas exceções.'],
      macetes: ['Renúncia: "sai calado, fica 10 dias".', 'Sigilo é de ordem pública: não precisa pedido.', 'Defesa criminal: opinião pessoal não importa.'],
      video: 'OAB ética Código de Ética e Disciplina deveres do advogado' },
    { id: 'et-ced-mediacao', titulo: 'O advogado na mediação, conciliação e arbitragem', incidencia: 'media',
      aula: [
        'Em uma frase: o advogado deve incentivar acordos e pode atuar como mediador, conciliador ou árbitro, mas isso gera impedimentos.',
        'Conceito: na conciliação e na mediação, um terceiro ajuda as partes a chegarem a um acordo. Na arbitragem, o árbitro decide o conflito no lugar do juiz.',
        'Dever ético: estimular a conciliação e a mediação, prevenindo litígios, é dever do advogado (art. 2º, parágrafo único, VI, do CED).',
        'Advogado das partes na mediação: as partes podem ter advogado na mediação extrajudicial. Se só uma estiver com advogado, o mediador suspende o procedimento até a outra também estar (art. 10 da Lei 13.140/15).',
        'Mediação judicial: nela, as partes devem ser assistidas por advogado ou defensor público, salvo nos Juizados Especiais (art. 26 da Lei 13.140/15).',
        'Impedimento no juízo: o conciliador ou mediador que for advogado fica impedido de advogar nos juízos em que atua como conciliador ou mediador (art. 167, §5º, do CPC).',
        'Quarentena de 1 ano: depois do fim da mediação, o mediador fica impedido, por 1 ano, de assessorar, representar ou patrocinar qualquer das partes (art. 6º da Lei 13.140/15; art. 172 do CPC).',
        'Mediador não é árbitro nem testemunha: ele não pode atuar como árbitro nem depor como testemunha sobre o conflito que mediou (art. 7º da Lei 13.140/15).',
        'Arbitragem: árbitro pode ser qualquer pessoa capaz da confiança das partes (art. 13 da Lei 9.307/96). A sentença arbitral não depende de homologação judicial e não cabe recurso (art. 18).',
        'Exemplo: Paulo, advogado, atuou como mediador no CEJUSC da Vara de Família. Por 1 ano, não pode patrocinar nenhuma das partes daquela mediação. E não pode advogar naquela vara enquanto for mediador ali.',
        'Cuidado (pegadinha): o impedimento de 1 ano vale para qualquer das partes, e não só para a parte contrária. E o mediador não pode ser testemunha do caso.',
        'Como a FGV cobra: advogado ex-mediador procurado por uma das partes; conciliador que quer advogar no mesmo juízo.',
        'Resumo para revisar: dever de estimular acordo; impedimento no juízo onde atua (CPC 167, §5º); quarentena de 1 ano; mediador não é árbitro nem testemunha; sentença arbitral sem recurso.'
      ],
      cai: ['Quarentena de 1 ano do mediador.', 'Impedimento de advogar no juízo em que é conciliador.', 'Mediador não pode ser testemunha nem árbitro.', 'Dever do CED de estimular a conciliação.'],
      macetes: ['Mediou? "1 ano longe" das duas partes.', 'Onde concilia, não advoga.'],
      video: 'OAB ética advogado mediador impedimento um ano' },
    { id: 'et-rg-temas', titulo: 'Regulamento Geral: temas mais cobrados', incidencia: 'media',
      aula: [
        'Em uma frase: o Regulamento Geral (RG) detalha o Estatuto em pontos práticos como estágio, efetivo exercício e documentos do advogado.',
        'Conceito: o RG é norma do Conselho Federal que regulamenta a Lei 8.906/94. Ele não pode contrariar o Estatuto.',
        'Efetivo exercício: considera-se efetivo exercício da advocacia a participação anual mínima em 5 atos privativos, em causas ou questões distintas (art. 5º do RG). Isso importa, por exemplo, para concorrer a cargos na OAB.',
        'Estagiário sozinho: o estagiário inscrito pode praticar sozinho, sob responsabilidade do advogado, atos como retirar e devolver autos, obter certidões e assinar petição de juntada de documentos (art. 29, §1º, do RG).',
        'Estagiário com advogado: os demais atos de advocacia, o estagiário só pratica em conjunto com o advogado (art. 3º, §2º, do Estatuto; art. 29 do RG).',
        'Documento de identidade: a carteira e o cartão da OAB valem como documento de identidade em todo o país (art. 13 do Estatuto; arts. 32 e 33 do RG).',
        'Inscrição suplementar: quem advoga com habitualidade fora do seu Conselho Seccional precisa de inscrição suplementar. Habitualidade é mais de 5 causas por ano naquela seccional (art. 10, §2º, do Estatuto).',
        'Exemplo: a estagiária Lia retira os autos e junta documentos sozinha. Tudo certo. Mas ela não pode assinar sozinha a contestação.',
        'Cuidado (pegadinha): a FGV troca "5 atos privativos por ano" (efetivo exercício) com "mais de 5 causas por ano" (inscrição suplementar). São regras diferentes.',
        'Como a FGV cobra: estagiário praticando ato sozinho; advogado atuando em vários estados; documentos de identificação.',
        'Resumo para revisar: 5 atos privativos por ano = efetivo exercício; estagiário sozinho só nos atos do art. 29, §1º, do RG; carteira é identidade; mais de 5 causas por ano em outra seccional = suplementar.'
      ],
      cai: ['Atos que o estagiário pratica sozinho.', 'Conceito de efetivo exercício (5 atos).', 'Inscrição suplementar.'],
      macetes: ['Estagiário sozinho: "retira, devolve, certidão e juntada".', 'Mais de 5 causas fora: suplementar.'],
      video: 'OAB Regulamento Geral estagiário atos isolados' },
    { id: 'et-provimentos', titulo: 'Provimentos do Conselho Federal mais cobrados', incidencia: 'media',
      aula: [
        'Em uma frase: provimentos são normas do Conselho Federal que detalham temas específicos, e a FGV cobra principalmente o de publicidade.',
        'Conceito: provimento é ato normativo do Conselho Federal da OAB (art. 54, V, do Estatuto). Ele regula assuntos pontuais da profissão.',
        'Provimento 205/2021 (publicidade): permite o marketing jurídico de conteúdo informativo, inclusive nas redes sociais e com impulsionamento pago. A publicidade deve ser discreta e sem captação de clientela.',
        'O que é proibido no 205: prometer resultados, ostentar bens ou riqueza, divulgar valores ou gratuidade como forma de atrair cliente e usar linguagem mercantil. Vale também para lives e vídeos.',
        'Provimento 91/2000 (consultor em direito estrangeiro): o estrangeiro pode atuar no Brasil, com autorização da OAB, só como consultor no direito do seu país. Ele não pode advogar nem dar consultoria sobre direito brasileiro.',
        'Exame de Ordem: é regulado por provimento do Conselho Federal, como prevê o art. 8º, §1º, do Estatuto.',
        'Exemplo: a advogada Bia faz vídeos explicando direitos do consumidor e paga para impulsionar. Isso é permitido. Se postar foto com carro de luxo dizendo "ganho todas", viola o Provimento 205.',
        'Cuidado (pegadinha): impulsionamento pago não é proibido; o problema é o conteúdo mercantil ou de captação.',
        'Como a FGV cobra: posts de advogados nas redes; advogado estrangeiro querendo atuar no Brasil.',
        'Resumo para revisar: provimento vem do Conselho Federal; 205 permite conteúdo informativo e impulsionamento; veda ostentação e promessa; estrangeiro só consulta direito do seu país.'
      ],
      cai: ['Postagens permitidas e proibidas pelo Provimento 205.', 'Consultor em direito estrangeiro.', 'Competência do Conselho Federal para editar provimentos.'],
      macetes: ['205: informar sim, vender não.', 'Estrangeiro: só o direito da sua terra.'],
      video: 'OAB Provimento 205 2021 publicidade advocacia' }
  ]);
})();
