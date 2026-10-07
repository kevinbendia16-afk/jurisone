/* Aulas adicionais – lote constitucional-03. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('constitucional', [
    { id: 'principiosfund', titulo: 'Princípios fundamentais (arts. 1º a 4º)', incidencia: 'alta',
      aula: [
        'Em uma frase: os arts. 1º a 4º são a "carteira de identidade" do Brasil; dizem quem somos, como nos organizamos, aonde queremos chegar e como nos portamos lá fora.',
        'Conceito: princípios fundamentais são as escolhas básicas que orientam toda a Constituição. Eles servem de bússola para interpretar as outras normas. Ficam no Título I, logo no começo da CF.',
        'Mapa dos quatro artigos: art. 1º traz os fundamentos (a base, o alicerce); art. 2º traz a separação dos Poderes; art. 3º traz os objetivos (as metas); art. 4º traz os princípios das relações internacionais (como o Brasil age com outros países).',
        'Fundamentos (art. 1º): são cinco. Soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, e pluralismo político. Memorize pelo SO-CI-DI-VA-PLU. Repare que trabalho e livre iniciativa aparecem juntos, no mesmo inciso (art. 1º, IV).',
        'Pluralismo político: não é só "vários partidos". Significa aceitar a convivência de ideias, crenças e grupos diferentes na sociedade. O pluripartidarismo é apenas uma das formas de pluralismo (art. 1º, V; art. 17).',
        'Dignidade da pessoa humana: é o valor que mais aparece nas decisões do STF. Ela proíbe tratar a pessoa como objeto. Exemplo: serve de base para vedar a tortura e para garantir o mínimo existencial, isto é, o básico para viver com decência (art. 1º, III).',
        'Quem manda: todo o poder emana do povo. O povo exerce esse poder por meio de representantes eleitos ou diretamente. É a democracia semidireta, ou seja, mistura representantes com participação direta (art. 1º, parágrafo único). A participação direta acontece por plebiscito, referendo e iniciativa popular (art. 14, I a III).',
        'Separação dos Poderes (art. 2º): Legislativo, Executivo e Judiciário são independentes e harmônicos entre si. Cada um tem uma função principal (típica), mas também exerce funções dos outros de forma secundária (atípica). Exemplo: o Judiciário faz concurso e licita (administra). Essa separação é cláusula pétrea (art. 60, §4º, III).',
        'Objetivos (art. 3º): são metas a alcançar. Por isso começam sempre com verbo no infinitivo: construir uma sociedade livre, justa e solidária; garantir o desenvolvimento nacional; erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais; promover o bem de todos, sem preconceito de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.',
        'Detalhe que cai: a CF manda ERRADICAR a pobreza e a marginalização, mas apenas REDUZIR as desigualdades sociais e regionais (art. 3º, III). A FGV troca esses verbos para pegar o aluno.',
        'Exemplo: Ana estuda e vê a frase "a cidadania é objetivo da República". Ela deve marcar errado. Cidadania não tem verbo; é fundamento (art. 1º, II). Já "garantir o desenvolvimento nacional" tem verbo; é objetivo (art. 3º, II).',
        'Cuidado (pegadinha): "valores sociais do trabalho" é fundamento (art. 1º, IV), mas "valorização do trabalho humano" é fundamento da ordem econômica (art. 170, caput). E "prevalência dos direitos humanos" não é fundamento: é princípio das relações internacionais (art. 4º, II).',
        'Como a FGV cobra: dá uma lista misturada e pede para separar fundamento, objetivo e princípio internacional; ou traz um caso de lei que fere a dignidade, o pluralismo ou a separação dos Poderes.',
        'Resumo para revisar: fundamentos = SO-CI-DI-VA-PLU, sem verbo (art. 1º); objetivos = verbos no infinitivo (art. 3º); erradicar pobreza, reduzir desigualdades; poder emana do povo, democracia semidireta; Poderes independentes e harmônicos (art. 2º).'
      ],
      cai: ['Lista misturada pedindo qual item é fundamento (art. 1º) e qual é objetivo (art. 3º).', 'Troca dos verbos "erradicar" e "reduzir" no art. 3º, III.', 'Formas de exercício direto do poder pelo povo: plebiscito, referendo e iniciativa popular.', 'Separação dos Poderes como cláusula pétrea e funções típicas e atípicas.'],
      macetes: ['Fundamentos: SO-CI-DI-VA-PLU (soberania, cidadania, dignidade, valores sociais do trabalho e livre iniciativa, pluralismo).', 'Tem verbo no infinitivo? É objetivo (art. 3º). Não tem verbo? Provavelmente fundamento.', 'Objetivos: CON-GA-ER-PRO (construir, garantir, erradicar, promover).', 'Pobreza se ERRADICA; desigualdade se REDUZ.'],
      video: 'OAB princípios fundamentais artigos 1 a 4 constituição fundamentos objetivos' },

    { id: 'co-federacao', titulo: 'Forma de Estado, forma e sistema de governo', incidencia: 'media',
      aula: [
        'Em uma frase: o Brasil é uma Federação (forma de Estado), uma República (forma de governo) e um Presidencialismo (sistema de governo).',
        'Conceito: forma de Estado diz como o poder se divide no território. Forma de governo diz como se escolhe e se troca quem governa. Sistema de governo diz como se relacionam o Executivo e o Legislativo.',
        'Federação: o poder é dividido entre União, Estados, Distrito Federal e Municípios. Todos são autônomos, ou seja, têm governo, leis e dinheiro próprios dentro dos limites da CF (art. 18). Só a República Federativa do Brasil, como um todo, é soberana.',
        'Autonomia não é soberania: soberania é o poder máximo, que não se subordina a ninguém, e pertence ao Estado brasileiro. Os entes têm só autonomia. A União representa o país no exterior, mas não é "mais soberana" que os Estados (art. 21, I).',
        'União indissolúvel: nenhum ente pode se separar. Não existe direito de secessão (separação). Uma tentativa de separação autoriza intervenção federal para manter a integridade nacional (art. 1º, caput; art. 34, I).',
        'Cláusula pétrea: a forma federativa de Estado não pode ser abolida nem por emenda constitucional (art. 60, §4º, I). A emenda pode mexer em detalhes, mas não tender a acabar com a Federação.',
        'Forma republicana: governantes eleitos, mandato com prazo e responsabilidade de quem governa. Em 1993 houve plebiscito e o povo escolheu manter República e presidencialismo (ADCT, art. 2º). A forma republicana NÃO está escrita no rol do art. 60, §4º, mas é princípio sensível, cuja violação pode gerar intervenção (art. 34, VII, a).',
        'Presidencialismo: o Presidente é ao mesmo tempo chefe de Estado (representa o país) e chefe de Governo (administra). Tem mandato fixo de 4 anos e não depende da confiança do Congresso para ficar no cargo (arts. 76 e 82).',
        'Distrito Federal: não pode ser dividido em Municípios (art. 32, caput). Acumula competências de Estado e de Município (art. 32, §1º). Brasília é a Capital Federal (art. 18, §1º).',
        'Territórios: hoje não existem, mas podem ser criados por lei complementar. Eles integram a União e não são entes federativos (art. 18, §2º).',
        'Criar ou dividir Estados: depende de plebiscito da população diretamente interessada e de lei complementar do Congresso Nacional (art. 18, §3º).',
        'Criar Municípios: depende de lei estadual, dentro do período fixado em lei complementar federal, com estudos de viabilidade municipal divulgados e plebiscito das populações envolvidas (art. 18, §4º). Como a LC federal ainda não veio, novos municípios ficam travados.',
        'Exemplo: Bruno, deputado estadual, propõe plebiscito para o Estado Alfa sair do Brasil. A proposta é inconstitucional: a união é indissolúvel e a Federação é cláusula pétrea.',
        'Cuidado (pegadinha): a FGV diz que "a forma republicana é cláusula pétrea expressa". Errado: expressa é a forma federativa. Também diz que o DF pode criar Municípios. Errado (art. 32).',
        'Como a FGV cobra e resumo para revisar: casos de secessão, criação de ente e limites de emenda; Federação = cláusula pétrea expressa; República e presidencialismo confirmados em 1993; DF sem Municípios; Estado novo = plebiscito + LC; Município novo = LC federal + estudos + plebiscito + lei estadual.'
      ],
      cai: ['Proibição de secessão e intervenção federal para manter a integridade nacional.', 'Forma federativa como cláusula pétrea expressa (art. 60, §4º, I).', 'Requisitos para criar Estados e Municípios (art. 18, §§3º e 4º).', 'DF não pode ser dividido em Municípios; Territórios não são entes.'],
      macetes: ['FE-RE-PRE: Federação (Estado), República (governo), Presidencialismo (sistema).', 'Soberania é do Brasil; autonomia é de cada ente.', 'Município novo: "LC-E-P-L" (lei complementar federal, estudos, plebiscito, lei estadual).', 'DF = Estado + Município, mas sem Municípios dentro.'],
      video: 'OAB federação forma de estado forma de governo sistema de governo constitucional' },

    { id: 'co-relacoes-int', titulo: 'Princípios das relações internacionais e objetivos da República', incidencia: 'media',
      aula: [
        'Em uma frase: o art. 4º diz como o Brasil deve se comportar com os outros países; o art. 3º diz quais metas o Brasil persegue aqui dentro.',
        'Para que serve: esses princípios guiam o Presidente, o Itamaraty e o Congresso em tratados, asilo, extradição e política externa. Também ajudam o STF a decidir casos internacionais.',
        'Lista do art. 4º (dez incisos): independência nacional; prevalência dos direitos humanos; autodeterminação dos povos; não intervenção; igualdade entre os Estados; defesa da paz; solução pacífica dos conflitos; repúdio ao terrorismo e ao racismo; cooperação entre os povos para o progresso da humanidade; concessão de asilo político.',
        'Autodeterminação e não intervenção: cada povo decide seu próprio destino. Por isso o Brasil não deve se meter em assuntos internos de outros países (art. 4º, III e IV).',
        'Asilo político: é a proteção dada a estrangeiro perseguido por motivos políticos em seu país. A CF fala em "concessão de asilo político" (art. 4º, X). É ato de soberania; o Brasil decide se concede.',
        'Ligação com outros artigos: o repúdio ao terrorismo (art. 4º, VIII) conversa com o art. 5º, XLIII, que torna o terrorismo crime inafiançável e insuscetível de graça ou anistia. O repúdio ao racismo conversa com o art. 5º, XLII (racismo inafiançável e imprescritível). E o Brasil não extradita estrangeiro por crime político ou de opinião (art. 5º, LII).',
        'Integração latino-americana: o parágrafo único do art. 4º diz que o Brasil buscará a integração econômica, política, social e cultural dos povos da América Latina, visando formar uma comunidade latino-americana de nações. Atenção: é América LATINA, não "Américas" nem "Mercosul".',
        'Objetivos da República (art. 3º): construir sociedade livre, justa e solidária; garantir o desenvolvimento nacional; erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais; promover o bem de todos, sem preconceitos.',
        'Diferença central: o art. 3º olha para dentro (metas internas); o art. 4º olha para fora (conduta internacional). Os dois têm frases parecidas, e a FGV aproveita isso.',
        'Exemplo: Carlos, opositor perseguido no país Delta, pede proteção ao Brasil. A concessão de asilo político é princípio expresso das relações internacionais (art. 4º, X). Se Delta pedir a extradição dele por crime político, o Brasil não pode entregá-lo (art. 5º, LII).',
        'Cuidado (pegadinha): "prevalência dos direitos humanos" é princípio internacional (art. 4º, II), não fundamento. "Soberania" é fundamento (art. 1º, I), enquanto o art. 4º fala em "independência nacional". "Cooperação entre os povos" é art. 4º; "sociedade solidária" é art. 3º.',
        'Como a FGV cobra: pede para identificar qual item é princípio do art. 4º; ou cria caso de asilo, tratado ou integração regional para testar o texto exato.',
        'Resumo para revisar: art. 4º = conduta do Brasil no exterior, dez incisos; asilo político é princípio expresso; integração da América Latina no parágrafo único; art. 3º = metas internas com verbos; direitos humanos prevalecem nas relações internacionais.'
      ],
      cai: ['Identificar, numa lista, os princípios do art. 4º e separá-los dos fundamentos e objetivos.', 'Integração com os povos da América Latina (art. 4º, parágrafo único).', 'Asilo político e vedação de extradição por crime político.', 'Repúdio ao terrorismo e ao racismo ligado ao art. 5º.'],
      macetes: ['Art. 4º "AINDA CONCEDE REPÚDIO": independência, autodeterminação, não intervenção, direitos humanos, igualdade... e termina com asilo.', 'Dentro do Brasil = art. 3º (metas); fora do Brasil = art. 4º (conduta).', 'Integração: América LATINA, comunidade latino-americana de nações.', 'Soberania no art. 1º; independência nacional no art. 4º.'],
      video: 'OAB princípios das relações internacionais artigo 4 constituição asilo político' }
  ]);
})();
