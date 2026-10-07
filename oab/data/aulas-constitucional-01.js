/* Aulas adicionais – lote constitucional-01 (Teoria da Constituição: conceito, constitucionalismo, poder constituinte e eficácia das normas). */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);

  add('constitucional', [
    { id: 'teoria', titulo: 'Panorama: Constituição, poder constituinte e eficácia das normas', incidencia: 'alta',
      aula: [
        'Em uma frase: a Constituição é a lei mais importante do país; ela nasce de um poder especial (o poder constituinte) e suas normas produzem efeitos em graus diferentes.',
        'Para que serve esta unidade: ela é a base de todo o Direito Constitucional. Quem entende de onde vem a Constituição entende por que uma lei pode ser derrubada por ser contrária a ela.',
        'Supremacia da Constituição: toda lei, decreto ou ato precisa respeitar a Constituição. Se não respeitar, é inconstitucional. É por isso que existe o controle de constitucionalidade.',
        'Rigidez: a CF/88 é rígida, ou seja, é mais difícil mudá-la do que mudar uma lei comum. Uma emenda exige dois turnos de votação em cada Casa e 3/5 dos votos (art. 60, §2º).',
        'Poder constituinte originário: é o poder que cria uma Constituição nova do zero. Ele não deve obediência à Constituição anterior. Na prática, foi exercido pela Assembleia Nacional Constituinte que fez a CF/88.',
        'Poder constituinte derivado: é o poder criado pela própria Constituição e limitado por ela. Ele se divide em reformador (emendas), decorrente (constituições dos Estados) e revisor (revisão de 1993/1994, art. 3º do ADCT).',
        'Recepção: quando chega uma Constituição nova, as leis antigas que combinam com ela continuam valendo. As que não combinam são revogadas. O STF não fala em "inconstitucionalidade superveniente" nesse caso, e sim em não recepção.',
        'Eficácia das normas: algumas normas funcionam sozinhas (plena), outras funcionam sozinhas mas podem ser restringidas por lei (contida) e outras dependem de lei para funcionar por completo (limitada). A classificação mais cobrada é a de José Afonso da Silva.',
        'Direitos fundamentais: as normas que definem direitos e garantias fundamentais têm aplicação imediata (art. 5º, §1º). Isso não impede que algumas dependam de lei, mas o ponto de partida é a aplicação direta.',
        'Exemplo: Bruno lê no art. 5º, XIII, que "é livre o exercício de qualquer trabalho, atendidas as qualificações que a lei estabelecer". A liberdade vale desde já, mas a lei pode exigir requisitos, como o Exame de Ordem. É norma de eficácia contida.',
        'Cuidado (pegadinha): a FGV gosta de dizer que norma constitucional originária pode ser inconstitucional. No Brasil, o STF não aceita essa tese: não há hierarquia entre normas originárias da própria Constituição (ADI 815).',
        'Como a FGV cobra: com casos de lei antiga diante de Constituição nova (recepção), propostas de emenda durante intervenção federal (limite circunstancial) e artigos da CF para você classificar a eficácia.',
        'Resumo para revisar: Constituição é suprema e rígida; originário cria, derivado modifica dentro dos limites; lei anterior compatível é recepcionada, a incompatível é revogada; eficácia plena, contida ou limitada; direitos fundamentais têm aplicação imediata.'
      ],
      cai: [
        'Lei anterior à CF/88 contrária a ela: a resposta é revogação (não recepção), e não inconstitucionalidade.',
        'Emenda proposta durante estado de sítio ou intervenção federal: a Constituição não pode ser emendada nesse período (art. 60, §1º).',
        'Classificação de um artigo da CF quanto à eficácia (art. 5º, XIII, como contida; art. 196 como limitada programática).',
        'Assertiva sobre norma constitucional originária inconstitucional: o STF rejeita a tese (ADI 815).'
      ],
      macetes: [
        'ORIGINÁRIO = "cria do zero"; DERIVADO = "mexe no que existe, com regras".',
        'Derivado tem 3 filhos: REformador, DEcorrente, REvisor (RE-DE-RE).',
        'Lei velha + Constituição nova: combinou, fica (recepção); brigou, sai (revogação).',
        'Eficácia: Plena "pronta", Contida "pronta, mas pode encolher", Limitada "precisa de lei para crescer".'
      ],
      video: 'teoria da constituição poder constituinte eficácia das normas OAB' },

    { id: 'co-conceito', titulo: 'Conceito, objeto e classificações das constituições', incidencia: 'media',
      aula: [
        'Em uma frase: Constituição é o conjunto de normas que organiza o Estado, limita o poder e garante direitos; e cada Constituição pode ser "rotulada" de vários jeitos.',
        'Objeto: em geral, a Constituição trata de três grandes temas. Organiza o Estado (quem manda e como), limita o poder dos governantes e lista os direitos fundamentais das pessoas.',
        'Concepção sociológica (Lassalle): a Constituição real é a soma dos fatores reais de poder da sociedade. Se o texto escrito não refletir essa realidade, vira uma "folha de papel".',
        'Concepção política (Carl Schmitt): Constituição é a decisão política fundamental do povo, como a forma de Estado e de governo. Schmitt separa a "Constituição" (decisões essenciais) das "leis constitucionais" (o resto do texto).',
        'Concepção jurídica (Kelsen): Constituição é norma pura, o topo da pirâmide do ordenamento. Em sentido lógico-jurídico, é a norma fundamental hipotética; em sentido jurídico-positivo, é o texto que está no topo.',
        'Força normativa (Konrad Hesse): o texto constitucional tem força própria e pode transformar a realidade. É a resposta a Lassalle: a Constituição não é só papel, ela obriga.',
        'Quanto à origem: outorgada é imposta pelo governante, sem participação popular (como 1824, 1937 e 1967); promulgada (democrática ou popular) é feita por representantes eleitos (como 1891, 1934, 1946 e 1988). Cesarista é feita pelo governante e depois submetida a plebiscito ou referendo.',
        'Quanto à estabilidade: rígida exige processo mais difícil que o da lei comum; flexível muda como lei comum; semirrígida tem uma parte rígida e outra flexível (a de 1824, art. 178). Alexandre de Moraes chama a CF/88 de super-rígida por causa das cláusulas pétreas.',
        'Quanto ao conteúdo: material é tudo que trata de matéria tipicamente constitucional, esteja onde estiver; formal é tudo que está no texto da Constituição, qualquer que seja o assunto. Exemplo: o art. 242, §2º, que fala do Colégio Pedro II, é formalmente constitucional.',
        'Outras classificações: escrita x não escrita (costumeira, como a inglesa); analítica (longa, detalhada) x sintética (curta, como a dos EUA); dogmática (feita de uma vez, por uma assembleia) x histórica (formada aos poucos pelos costumes); dirigente (traça metas e programas para o futuro).',
        'Classificação ontológica (Loewenstein): normativa é a que realmente limita o poder; nominal existe, mas não consegue se impor à realidade; semântica só serve para manter quem está no poder.',
        'A CF/88 é: escrita, promulgada, rígida, formal, analítica, dogmática, eclética (mistura ideologias) e dirigente. Além disso, tratados de direitos humanos aprovados em dois turnos, por 3/5 dos votos, em cada Casa, valem como emenda (art. 5º, §3º).',
        'Exemplo: Carla lê que o país X teve uma Constituição escrita pelo ditador e depois aprovada em plebiscito. É uma Constituição cesarista, e não promulgada, porque o povo só confirmou um texto pronto.',
        'Cuidado (pegadinha): "flexível" e "rígida" falam do processo de mudança, e não de quantas vezes a Constituição foi emendada. A CF/88 tem muitas emendas e continua rígida. Outra: costumeira não quer dizer sem nenhum texto escrito.',
        'Como a FGV cobra: dá a descrição de um autor e pede a concepção (Lassalle, Schmitt, Kelsen, Hesse), ou descreve uma Constituição e pede a classificação correta.',
        'Resumo para revisar: Lassalle = fatores reais de poder; Schmitt = decisão política; Kelsen = norma pura; Hesse = força normativa; CF/88 é escrita, promulgada, rígida, formal, analítica e dirigente.'
      ],
      cai: [
        'Associação entre autor e concepção: "folha de papel" (Lassalle), "decisão política fundamental" (Schmitt), "norma fundamental hipotética" (Kelsen).',
        'Classificação da CF/88 em uma alternativa com vários adjetivos, um deles trocado (ex.: "outorgada" ou "flexível").',
        'Diferença entre Constituição material e formal com exemplo de norma do texto que não trata de matéria constitucional.',
        'Status de tratado de direitos humanos aprovado pelo rito do art. 5º, §3º (equivale a emenda).'
      ],
      macetes: [
        'Lassalle "Leva o papel"; Schmitt "Seleciona a decisão"; Kelsen "Kúpula da pirâmide"; Hesse "Hora da força normativa".',
        'Origem: OUTorgada = vem de fora do povo; PROmulgada = PROvém do povo.',
        'CF/88 "EPRAFD": Escrita, Promulgada, Rígida, Analítica, Formal, Dogmática.',
        'Rígida fala do COMO mudar, não do QUANTO mudou.'
      ],
      video: 'classificação das constituições concepções Lassalle Schmitt Kelsen OAB' },

    { id: 'co-constitucionalismo', titulo: 'Constitucionalismo e neoconstitucionalismo', incidencia: 'media',
      aula: [
        'Em uma frase: constitucionalismo é o movimento histórico que busca limitar o poder do Estado e proteger direitos por meio de uma Constituição.',
        'Conceito: não é uma lei, é uma ideia que evoluiu ao longo dos séculos. O centro dela é sempre o mesmo: governo limitado e garantia de direitos.',
        'Constitucionalismo antigo: aparece entre os hebreus (o poder do governante era limitado pelas leis religiosas) e nas cidades gregas, com participação dos cidadãos nas decisões.',
        'Constitucionalismo medieval: o marco é a Magna Carta de 1215, na Inglaterra. Ela limitou o poder do rei e garantiu direitos aos barões. Depois vieram o Petition of Rights (1628), o Habeas Corpus Act (1679) e o Bill of Rights (1689).',
        'Constitucionalismo moderno: surge no fim do século XVIII, com as primeiras Constituições escritas: a dos EUA (1787) e a da França (1791). A ideia-chave é uma Constituição escrita que organiza o Estado e limita o poder.',
        'Declaração francesa de 1789: o art. 16 dela diz que a sociedade que não garante direitos nem separa os poderes não tem Constituição. É uma frase muito cobrada para mostrar o conteúdo mínimo de uma Constituição.',
        'Constitucionalismo social: no início do século XX, as Constituições passam a garantir direitos sociais, como trabalho e educação. Os marcos são a Constituição do México (1917) e a de Weimar, na Alemanha (1919). No Brasil, a de 1934.',
        'Neoconstitucionalismo: nasce depois da Segunda Guerra Mundial. Após os horrores do nazismo, a Constituição passa a ser vista como norma de verdade, que obriga, e a dignidade humana vira o centro do sistema.',
        'Marcos do neoconstitucionalismo: histórico (Constituições do pós-guerra, como a italiana de 1947 e a alemã de 1949; no Brasil, a CF/88); filosófico (pós-positivismo, que aproxima Direito e ética); teórico (força normativa da Constituição, expansão da jurisdição constitucional e nova interpretação constitucional).',
        'Características do neoconstitucionalismo: princípios também são normas e obrigam; os juízes ganham papel maior na proteção de direitos; usa-se a ponderação, ou seja, o equilíbrio entre princípios em conflito; e a Constituição irradia efeitos para todos os ramos do Direito.',
        'Outras correntes: o novo constitucionalismo latino-americano (Equador, 2008, e Bolívia, 2009) valoriza a participação popular e o Estado plurinacional. O transconstitucionalismo (Marcelo Neves) trata do diálogo entre ordens jurídicas diferentes para resolver os mesmos problemas de direitos.',
        'Exemplo: Diego, advogado, pede que o juiz aplique diretamente o princípio da dignidade humana numa relação entre particulares. Essa postura de dar força direta aos princípios é típica do neoconstitucionalismo.',
        'Cuidado (pegadinha): o constitucionalismo moderno é marcado por Constituições ESCRITAS (EUA e França), e não pela Magna Carta, que é medieval. Outra: o neoconstitucionalismo não abandona a lei, ele reforça a força normativa da Constituição.',
        'Como a FGV cobra: descreve uma característica (força normativa, centralidade dos direitos fundamentais, ponderação de princípios) e pergunta a qual fase ou movimento ela pertence.',
        'Resumo para revisar: antigo (hebreus e Grécia); medieval (Magna Carta, 1215); moderno (EUA 1787 e França 1791); social (México 1917 e Weimar 1919); neoconstitucionalismo (pós-guerra, força normativa, princípios e dignidade).'
      ],
      cai: [
        'Associação de documento histórico com a fase do constitucionalismo (Magna Carta = medieval; Constituição dos EUA = moderno).',
        'Características do neoconstitucionalismo: força normativa da Constituição, normatividade dos princípios e expansão da jurisdição constitucional.',
        'Art. 16 da Declaração de 1789: sem garantia de direitos e separação de poderes, não há Constituição.',
        'Marcos do constitucionalismo social: México (1917) e Weimar (1919).'
      ],
      macetes: [
        'Linha do tempo: "Hebreus, Carta, Escrita, Social, Neo".',
        'Neo = "Nova força": a Constituição deixa de ser conselho e vira ordem.',
        'Social = "México e Weimar, trabalho e educação".',
        'Marcos do Neo: História (pós-guerra), Filosofia (pós-positivismo), Teoria (força normativa).'
      ],
      video: 'constitucionalismo e neoconstitucionalismo marcos OAB' },

    { id: 'co-poder-originario', titulo: 'Poder constituinte originário: características', incidencia: 'alta',
      aula: [
        'Em uma frase: o poder constituinte originário é o poder de criar uma Constituição nova, do zero, sem obedecer à Constituição anterior.',
        'Conceito: é o poder que inaugura uma nova ordem jurídica. Ele aparece quando um Estado nasce ou quando há ruptura, como uma revolução ou uma transição democrática.',
        'Titular e exercente: o titular é o povo (art. 1º, parágrafo único, da CF). Quem exerce, na prática, é um grupo, como uma Assembleia Constituinte eleita ou, nas outorgadas, o próprio governante.',
        'Características: é inicial (dá início a uma nova ordem), autônomo (decide sozinho o conteúdo), ilimitado juridicamente (não se submete ao direito anterior), incondicionado (não segue forma prévia) e permanente (não se esgota depois de usado; fica "adormecido").',
        'Limites: pela visão positivista, adotada pelo STF, ele é juridicamente ilimitado. Há autores que falam em limites de fato, como valores da sociedade e a proibição de retrocesso em direitos humanos, mas isso não vira limite jurídico na prova.',
        'Normas originárias não são inconstitucionais: o STF não aceita controlar normas feitas pelo originário. Não existe hierarquia entre elas. Conflitos aparentes se resolvem por interpretação (princípio da unidade da Constituição, ADI 815).',
        'Direito adquirido: ninguém pode alegar direito adquirido contra a nova Constituição. O originário pode mudar situações já constituídas. Mas o STF diz que, em regra, as normas da nova Constituição têm retroatividade mínima: atingem os efeitos futuros de fatos passados, salvo previsão expressa em contrário.',
        'Recepção: a lei anterior compatível em conteúdo com a nova Constituição continua valendo. A forma não importa. Exemplo clássico: o CTN era lei ordinária e foi recepcionado como lei complementar, porque a CF/88 exige lei complementar para normas gerais tributárias (art. 146).',
        'Não recepção: a lei anterior incompatível é revogada. Não se fala em inconstitucionalidade superveniente. Por isso não cabe ADI contra lei anterior à Constituição; o caminho no controle concentrado é a ADPF (Lei 9.882/99, art. 1º, parágrafo único, I).',
        'Repristinação: é a volta da validade de uma lei que já tinha sido revogada. Ela só acontece se a nova Constituição disser isso expressamente. Não existe repristinação automática.',
        'Desconstitucionalização: é a ideia de que normas da Constituição antiga continuariam valendo como lei comum. O Brasil não adota isso automaticamente; só aconteceria se a nova Constituição previsse expressamente.',
        'Exemplo: Eduardo invoca uma lei de 1975 contra a CF/88. Se a lei for contrária à nova Constituição, o juiz dirá que ela foi revogada (não recepcionada). Se Eduardo quiser levar isso direto ao STF, a ação correta é a ADPF.',
        'Cuidado (pegadinha): a FGV escreve "lei anterior incompatível torna-se inconstitucional e deve ser atacada por ADI". Errado: é revogação, e o controle concentrado se faz por ADPF. Outra pegadinha: dizer que a forma da lei antiga precisa ser igual à exigida hoje.',
        'Como a FGV cobra: casos de leis anteriores a 1988 (recepção e forma), assertivas sobre características do originário e sobre direito adquirido diante de nova Constituição.',
        'Resumo para revisar: originário é inicial, autônomo, ilimitado, incondicionado e permanente; titular é o povo; não há norma originária inconstitucional; recepção olha o conteúdo, não a forma; incompatível é revogada; repristinação só expressa.'
      ],
      cai: [
        'Caso de lei pré-1988 com conteúdo compatível, mas forma diferente: recepção com o novo status (como o CTN).',
        'Ação cabível contra lei anterior à Constituição no STF: ADPF, e não ADI.',
        'Assertiva sobre direito adquirido contra nova Constituição: não pode ser oposto ao poder originário.',
        'Características do originário em lista com um item trocado (ex.: "subordinado" ou "condicionado").'
      ],
      macetes: [
        'Originário "IAIIP": Inicial, Autônomo, Ilimitado, Incondicionado, Permanente.',
        'Recepção olha o CONTEÚDO, não a ROUPA (forma).',
        'Lei antiga x Constituição nova = revogação + ADPF; lei nova x Constituição = inconstitucionalidade + ADI.',
        'Repristinação e desconstitucionalização: só se a Constituição ESCREVER.'
      ],
      video: 'poder constituinte originário características recepção repristinação OAB' },

    { id: 'co-poder-derivado', titulo: 'Poder constituinte derivado: reformador, decorrente e revisor', incidencia: 'alta',
      aula: [
        'Em uma frase: o poder derivado é o poder de mudar a Constituição ou de criar as Constituições dos Estados, sempre obedecendo às regras e limites da CF/88.',
        'Conceito: ele é secundário (nasce da Constituição), limitado (tem limites jurídicos) e condicionado (segue um procedimento previsto). É o oposto do originário.',
        'Reformador: é o poder de fazer emendas constitucionais (art. 60). Ele é exercido pelo Congresso Nacional.',
        'Quem pode propor emenda: 1/3, no mínimo, dos Deputados ou dos Senadores; o Presidente da República; ou mais da metade das Assembleias Legislativas, cada uma pela maioria relativa de seus membros (art. 60, I a III). A CF/88 não prevê iniciativa popular para emenda federal.',
        'Como se vota: a proposta é discutida e votada em cada Casa, em dois turnos, e só é aprovada se tiver 3/5 dos votos em ambos (art. 60, §2º). Não há sanção nem veto do Presidente. A emenda é promulgada pelas Mesas da Câmara e do Senado, com número de ordem (art. 60, §3º).',
        'Limite circunstancial: a Constituição não pode ser emendada durante intervenção federal, estado de defesa ou estado de sítio (art. 60, §1º). A proibição alcança a tramitação toda, não só a promulgação.',
        'Limite material (cláusulas pétreas): não será sequer objeto de deliberação a proposta tendente a abolir a forma federativa, o voto direto, secreto, universal e periódico, a separação dos Poderes e os direitos e garantias individuais (art. 60, §4º). "Tendente a abolir" quer dizer que a emenda pode mexer, mas não pode esvaziar o núcleo.',
        'Limites implícitos: a doutrina e o STF entendem que não se pode mudar o titular do poder constituinte nem alterar o próprio art. 60 para facilitar as reformas. Isso evita a "dupla revisão", ou seja, mudar a regra para depois mudar o protegido.',
        'Proposta rejeitada: a matéria de PEC rejeitada ou havida por prejudicada não pode ser objeto de nova proposta na mesma sessão legislativa (art. 60, §5º). Diferente do projeto de lei, aqui não há exceção por maioria absoluta.',
        'Emenda pode ser inconstitucional: como o reformador é limitado, a emenda que viola cláusula pétrea ou o procedimento pode ser derrubada pelo STF. Parlamentar pode até impetrar mandado de segurança para barrar a tramitação de PEC que viole cláusula pétrea (controle preventivo).',
        'Revisor: estava no art. 3º do ADCT. A revisão seria feita uma única vez, após cinco anos da promulgação, em sessão unicameral (Câmara e Senado juntos) e por maioria absoluta. Ela ocorreu em 1993/1994 e gerou 6 emendas de revisão. Esse poder está esgotado.',
        'Decorrente: é o poder dos Estados de fazer suas Constituições e de se auto-organizar (art. 25 da CF; art. 11 do ADCT). Ele deve respeitar os princípios da CF/88. O STF trata a Lei Orgânica do DF como equivalente a uma Constituição estadual. Já a Lei Orgânica dos Municípios, para a maioria, não é fruto de poder decorrente.',
        'Mutação constitucional: alguns chamam de "poder difuso". É a mudança do sentido da norma sem mudar o texto, pela interpretação ao longo do tempo. Não é emenda.',
        'Exemplo: durante uma intervenção federal no Estado Y, o Senador Fábio apresenta PEC sobre outro assunto. A PEC não pode tramitar enquanto durar a intervenção, porque o limite circunstancial vale para qualquer emenda (art. 60, §1º).',
        'Cuidado (pegadinha): a FGV troca "3/5 em dois turnos" por "2/3" ou "maioria absoluta", e diz que a emenda vai à sanção presidencial. Errado. Outra: dizer que a revisão constitucional ainda pode ser feita; ela já se esgotou.',
        'Como a FGV cobra: casos de PEC com problema de iniciativa, quórum, tramitação durante intervenção, reapresentação na mesma sessão legislativa ou proposta que afeta cláusula pétrea.',
        'Resumo para revisar: derivado é secundário, limitado e condicionado; emenda: 1/3, Presidente ou mais da metade das Assembleias, 2 turnos e 3/5 em cada Casa, sem sanção; não emenda em intervenção, defesa ou sítio; cláusulas pétreas do art. 60, §4º; revisor esgotado; decorrente cria Constituições estaduais.'
      ],
      cai: [
        'Legitimados para propor emenda e quórum de aprovação (art. 60, I a III e §2º).',
        'PEC durante intervenção federal, estado de defesa ou estado de sítio (art. 60, §1º).',
        'Reapresentação de PEC rejeitada na mesma sessão legislativa: vedada, sem exceção (art. 60, §5º).',
        'Natureza do poder derivado decorrente dos Estados e esgotamento do poder revisor (art. 3º do ADCT).'
      ],
      macetes: [
        'Emenda: "1/3, Presidente e metade+1 das Assembleias; 2 turnos, 3/5, 2 Casas, sem sanção".',
        'Limites circunstanciais "IDS": Intervenção federal, estado de Defesa, estado de Sítio.',
        'Cláusulas pétreas "FOVOSEDI": FOrma federativa, VOto, SEparação dos Poderes, DIreitos individuais.',
        'Revisor = "foi uma vez só, em 1994, e acabou".'
      ],
      video: 'poder constituinte derivado reformador decorrente revisor art 60 OAB' },

    { id: 'co-eficacia', titulo: 'Eficácia das normas constitucionais: plena, contida e limitada', incidencia: 'alta',
      aula: [
        'Em uma frase: toda norma constitucional produz algum efeito, mas algumas funcionam sozinhas e outras precisam de uma lei para funcionar por completo.',
        'Conceito: eficácia aqui é a aptidão da norma para produzir efeitos jurídicos. A classificação mais cobrada é a de José Afonso da Silva, que divide as normas em plena, contida e limitada.',
        'Eficácia plena: a norma já nasce pronta. Tem aplicabilidade direta (não depende de lei), imediata (vale desde já) e integral (a lei não pode reduzir seu alcance). Exemplos: art. 2º (separação dos Poderes) e art. 5º, III (ninguém será submetido a tortura).',
        'Eficácia contida (ou restringível): a norma também nasce pronta e vale desde já, mas uma lei pode restringir seu alcance. A aplicabilidade é direta, imediata, mas possivelmente não integral. Enquanto a lei não vem, o direito é amplo.',
        'Exemplos de contida: art. 5º, XIII (liberdade de profissão, com qualificações previstas em lei, como o Exame de Ordem, que o STF considerou válido) e art. 5º, XV (liberdade de locomoção em tempo de paz, nos termos da lei). A restrição também pode vir de conceitos amplos, como "ordem pública", ou da própria Constituição.',
        'Eficácia limitada: a norma não produz todos os seus efeitos sozinha. Precisa de lei ou de ação do Estado. A aplicabilidade é indireta, mediata e reduzida.',
        'Limitada de princípio institutivo (ou organizativo): traça o esqueleto de um órgão ou instituição, que a lei vai completar. Exemplos: art. 33 ("a lei disporá sobre a organização dos Territórios") e art. 37, VII (greve do servidor público, nos termos de lei específica).',
        'Limitada programática: traça metas e programas que o Estado deve perseguir. Exemplos: art. 196 (saúde, direito de todos e dever do Estado), art. 205 (educação) e art. 215 (cultura).',
        'Eficácia mínima das limitadas: mesmo sem a lei, a norma limitada já revoga as leis anteriores contrárias, impede leis novas contrárias (eficácia negativa) e serve de guia para interpretar o Direito. Nunca diga que ela "não produz nenhum efeito".',
        'Omissão do legislador: se a falta de lei impede o exercício de um direito, cabe mandado de injunção (art. 5º, LXXI) ou ação direta de inconstitucionalidade por omissão (art. 103, §2º). No MI sobre greve de servidor, o STF mandou aplicar a lei de greve da iniciativa privada (Lei 7.783/89) até a lei específica sair (MI 670, 708 e 712).',
        'Direitos fundamentais: as normas que definem direitos e garantias fundamentais têm aplicação imediata (art. 5º, §1º). Esse dispositivo é um mandamento de máxima efetividade, mas não transforma automaticamente todas as normas em plenas.',
        'Outras classificações: Maria Helena Diniz fala em normas supereficazes ou de eficácia absoluta (as cláusulas pétreas, que nem emenda pode abolir), plena, relativa restringível (equivale à contida) e relativa complementável (equivale à limitada). Há também a norma de eficácia exaurida, que já cumpriu sua função, como várias do ADCT.',
        'Exemplo: Gabriela se forma em Direito e quer advogar. A liberdade de profissão (art. 5º, XIII) existe desde já, mas o Estatuto da Advocacia exige aprovação no Exame de Ordem. Essa lei restringe validamente o direito: é a norma contida em ação.',
        'Cuidado (pegadinha): a FGV confunde contida e limitada. Pergunte: "sem a lei, o direito já pode ser exercido?". Se sim, é contida (a lei vem para restringir). Se não, é limitada (a lei vem para completar).',
        'Como a FGV cobra: transcreve um dispositivo da CF e pergunta a classificação, ou afirma que norma programática não tem efeito algum, ou pergunta o remédio para a falta de lei regulamentadora.',
        'Resumo para revisar: plena é direta, imediata e integral; contida é direta, imediata e restringível; limitada é indireta, mediata e reduzida; limitada pode ser institutiva ou programática; mesmo a limitada tem eficácia negativa; omissão se combate com MI ou ADO.'
      ],
      cai: [
        'Classificação de artigo da CF: art. 5º, XIII, como contida; art. 37, VII, como limitada; art. 196 como programática.',
        'Assertiva de que norma programática não produz efeito algum: errada, pois tem eficácia negativa.',
        'Diferença entre contida (lei restringe) e limitada (lei completa).',
        'Remédio contra a falta de norma regulamentadora: mandado de injunção ou ADO.'
      ],
      macetes: [
        'Pergunta-chave: "já posso usar sem lei?" Sim = plena ou contida; não = limitada.',
        'Contida: a lei vem para CORTAR; limitada: a lei vem para COMPLETAR.',
        'Programática = "PROGRAMA de governo": saúde, educação, cultura.',
        'Plena "DII": Direta, Imediata, Integral; Limitada "IMR": Indireta, Mediata, Reduzida.'
      ],
      video: 'eficácia das normas constitucionais plena contida limitada José Afonso da Silva OAB' }
  ]);
})();
