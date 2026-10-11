/* Questões – lote processocivil-12 (Sentença e coisa julgada). */
window.QUESTOES.push(
{ id: 'pc541', materia: 'processocivil', topico: 'sentenca',
  enunciado: 'Em ação de indenização, o réu alegou, com documentos, culpa exclusiva da vítima. O juiz proferiu sentença afirmando apenas: "Presentes os requisitos da responsabilidade civil, julgo procedente o pedido", sem examinar a alegação do réu. Segundo o CPC, essa sentença:',
  alt: [
    ['é válida, pois o juiz não é obrigado a responder aos argumentos das partes, bastando indicar a norma aplicável.', false, 'Errada. O juiz não precisa responder argumentos irrelevantes, mas deve enfrentar os capazes de, em tese, infirmar a conclusão (art. 489, §1º, IV), e limitar-se a indicar a norma também é vício (inciso I).'],
    ['não se considera fundamentada, e a omissão pode ser atacada por embargos de declaração.', true, 'Correta. A sentença apenas reproduz a lei e não enfrenta argumento capaz de mudar o resultado (art. 489, §1º, I e IV). O art. 1.022, parágrafo único, II, considera omissa a decisão que incorre nessas condutas.'],
    ['é inexistente, devendo o réu propor ação declaratória a qualquer tempo.', false, 'Errada. A falta de fundamentação gera nulidade (art. 93, IX, da CF), atacável por embargos e apelação. A doutrina trata como inexistente a sentença sem dispositivo, não a mal fundamentada.'],
    ['só pode ser impugnada por ação rescisória, após o trânsito em julgado.', false, 'Errada. O vício deve ser combatido pelos recursos próprios: embargos de declaração (art. 1.022) e apelação (art. 1.009). A rescisória não é o meio ordinário.']
  ] },
{ id: 'pc542', materia: 'processocivil', topico: 'sentenca',
  enunciado: 'Lívia ajuizou ação de cobrança e, após a contestação do réu Otávio, deixou de promover atos que lhe cabiam por mais de 30 dias. Sobre a extinção do processo por abandono, assinale a afirmativa correta.',
  alt: [
    ['O juiz deve extinguir o processo de ofício, independentemente de intimação de Lívia, gerando coisa julgada material.', false, 'Errada. Exige-se intimação pessoal da parte para suprir a falta em 5 dias (art. 485, §1º), e a sentença é sem mérito, sem coisa julgada material (art. 485, III).'],
    ['Lívia deve ser intimada pessoalmente para suprir a falta em 5 dias, e, como já houve contestação, a extinção depende de requerimento de Otávio.', true, 'Correta. É o que dispõem o art. 485, §1º (intimação pessoal, 5 dias) e §6º (após a contestação, extinção por abandono do autor depende de requerimento do réu).'],
    ['A extinção por abandono impede Lívia de propor nova ação contra Otávio com o mesmo objeto.', false, 'Errada. A sentença sem mérito, em regra, permite nova ação (art. 486). A proibição (perempção) só surge após três extinções por abandono (art. 486, §3º).'],
    ['Se Lívia apelar da sentença de extinção, o juiz não poderá se retratar, pois esgotou sua jurisdição.', false, 'Errada. Na apelação contra sentença do art. 485, o juiz tem 5 dias para se retratar (art. 485, §7º).']
  ] },
{ id: 'pc543', materia: 'processocivil', topico: 'sentenca',
  enunciado: 'Publicada a sentença que condenou Bruno a pagar quantia a Clara, constatou-se que o dispositivo trazia o nome da credora grafado de forma errada e um erro evidente na soma das parcelas. Já houve trânsito em julgado. Nesse caso:',
  alt: [
    ['os erros só podem ser corrigidos por ação rescisória, no prazo de 2 anos.', false, 'Errada. Inexatidão material e erro de cálculo não exigem rescisória; podem ser corrigidos de ofício ou a requerimento (art. 494, I).'],
    ['nada mais pode ser feito, pois a coisa julgada impede qualquer alteração da sentença.', false, 'Errada. A correção de erro material não altera o conteúdo da decisão, por isso é admitida mesmo após o trânsito em julgado (art. 494, I).'],
    ['o juiz pode corrigir os erros de ofício ou a requerimento, mesmo após o trânsito em julgado.', true, 'Correta. Publicada a sentença, o juiz pode alterá-la para corrigir inexatidões materiais ou erros de cálculo (art. 494, I), o que é possível a qualquer tempo.'],
    ['a correção depende de embargos de declaração opostos no prazo de 5 dias da publicação.', false, 'Errada. Os embargos são uma das vias (art. 494, II), mas o erro material pode ser corrigido de ofício ou a requerimento, sem prazo (art. 494, I).']
  ] },
{ id: 'pc544', materia: 'processocivil', topico: 'pc-congruencia',
  enunciado: 'Marta pediu, em ação contra Paulo, indenização de R$ 20 mil por danos materiais decorrentes de acidente de trânsito. O juiz condenou Paulo a pagar R$ 20 mil de danos materiais e R$ 5 mil de danos morais, que não foram pedidos. Quanto aos danos morais, a sentença é:',
  alt: [
    ['ultra petita, devendo o tribunal apenas reduzir o valor total da condenação para R$ 20 mil.', false, 'Errada. Ultra petita é conceder mais do mesmo objeto. Dano moral é objeto diverso do pedido, o que caracteriza extra petita (art. 492).'],
    ['citra petita, por não ter examinado todos os fundamentos da inicial.', false, 'Errada. Citra petita é deixar de decidir pedido formulado. Aqui o juiz decidiu além, concedendo algo não pedido.'],
    ['válida, pois o dano moral é pedido implícito em toda ação indenizatória.', false, 'Errada. Os pedidos implícitos são juros legais, correção monetária e verbas de sucumbência (art. 322, §1º); dano moral precisa ser pedido.'],
    ['extra petita, pois concedeu objeto diverso do demandado, vício que atinge essa parte da decisão.', true, 'Correta. É vedado ao juiz condenar em objeto diverso do que foi demandado (arts. 141 e 492). A parte congruente (danos materiais) permanece, e a condenação em danos morais deve ser afastada.']
  ] },
{ id: 'pc545', materia: 'processocivil', topico: 'pc-congruencia',
  enunciado: 'Joana ajuizou ação de cobrança de aluguéis vencidos contra seu inquilino. Durante o processo, venceram outros quatro aluguéis, não pagos nem consignados. A petição inicial não mencionou as parcelas futuras. A sentença que condena também nas parcelas vencidas no curso do processo é:',
  alt: [
    ['ultra petita, pois condena em quantidade superior à pedida.', false, 'Errada. As prestações sucessivas consideram-se incluídas no pedido, independentemente de declaração expressa (art. 323), logo não há excesso.'],
    ['congruente, pois as prestações sucessivas que vencerem durante o processo consideram-se incluídas no pedido.', true, 'Correta. Na obrigação em prestações sucessivas, as vincendas incluem-se na condenação enquanto durar a obrigação, se o devedor deixar de pagá-las ou consigná-las (art. 323).'],
    ['extra petita, devendo Joana ajuizar nova ação para cobrar as parcelas vencidas no curso do processo.', false, 'Errada. Não há objeto diverso; a lei inclui as prestações vincendas no pedido (art. 323).'],
    ['nula, porque o juiz só poderia considerar fatos ocorridos até a propositura da ação.', false, 'Errada. Além do art. 323, o art. 493 manda o juiz considerar fatos supervenientes que influam no julgamento.']
  ] },
{ id: 'pc546', materia: 'processocivil', topico: 'pc-congruencia',
  enunciado: 'Renato pediu a anulação de um contrato e indenização por perdas e danos. A sentença anulou o contrato, mas nada disse sobre a indenização. Renato apelou, e o processo está em condições de imediato julgamento. Segundo o CPC, o tribunal deve:',
  alt: [
    ['anular a sentença e devolver os autos ao juiz de primeiro grau para que julgue o pedido omitido.', false, 'Errada. Estando a causa madura, o tribunal não devolve os autos: decide desde logo o mérito (art. 1.013, §3º, III).'],
    ['julgar desde logo o pedido de indenização, pois constatou omissão no exame de um dos pedidos.', true, 'Correta. Se o processo estiver em condições de imediato julgamento, o tribunal decide o mérito quando constatar a omissão no exame de um dos pedidos (art. 1.013, §3º, III).'],
    ['negar provimento à apelação, pois a omissão só poderia ser alegada em embargos de declaração.', false, 'Errada. Os embargos são o meio mais adequado (art. 1.022, II), mas a apelação também pode apontar a omissão, e o tribunal pode suprir (art. 1.013, §3º, III).'],
    ['declarar que o pedido de indenização foi implicitamente rejeitado e está coberto pela coisa julgada.', false, 'Errada. Pedido não decidido não é rejeitado implicitamente nem fica coberto pela coisa julgada, que alcança a questão expressamente decidida (art. 503).']
  ] },
{ id: 'pc547', materia: 'processocivil', topico: 'pc-coisa-julgada',
  enunciado: 'Carla ajuizou ação de alimentos contra Diego, que contestou negando a paternidade. Após perícia, o juiz de família concluiu, na fundamentação, que Diego é o pai e o condenou a pagar alimentos. Iniciado o processo já na vigência do CPC/2015, sobre a paternidade é correto afirmar que:',
  alt: [
    ['não faz coisa julgada, pois os motivos da sentença nunca são alcançados por ela.', false, 'Errada. Os motivos, em regra, não fazem coisa julgada (art. 504, I), mas a questão prejudicial decidida expressa e incidentemente faz, preenchidos os requisitos do art. 503, §1º.'],
    ['só faria coisa julgada se Carla tivesse proposto ação declaratória incidental.', false, 'Errada. A exigência de declaratória incidental era do CPC/1973. O CPC/2015 dispensa essa ação (art. 503, §1º), para processos iniciados em sua vigência (art. 1.054).'],
    ['faz coisa julgada, pois dela dependia o julgamento do mérito, houve contraditório prévio e efetivo e o juízo é competente para decidi-la como questão principal.', true, 'Correta. São os três requisitos do art. 503, §1º, I a III, todos presentes no caso.'],
    ['faria coisa julgada ainda que Diego tivesse sido revel.', false, 'Errada. O art. 503, §1º, II, exige contraditório prévio e efetivo e afasta expressamente a regra no caso de revelia.']
  ] },
{ id: 'pc548', materia: 'processocivil', topico: 'pc-coisa-julgada',
  enunciado: 'Gustavo foi condenado, por sentença transitada em julgado, a pagar pensão alimentícia de R$ 2 mil ao filho. Dois anos depois, perdeu o emprego e sua renda caiu drasticamente. Diante disso, Gustavo:',
  alt: [
    ['pode propor ação revisional, pois em relação jurídica de trato continuado a sobrevinda de modificação no estado de fato autoriza a revisão.', true, 'Correta. O art. 505, I, permite rever o que foi estatuído na sentença quando, em relação continuativa, sobrevier modificação no estado de fato ou de direito.'],
    ['nada pode fazer, pois a coisa julgada torna a decisão imutável e indiscutível.', false, 'Errada. A coisa julgada (art. 502) não impede a revisão das relações continuativas, ressalvada pelo art. 505, I.'],
    ['deve propor ação rescisória, no prazo de 2 anos do trânsito em julgado.', false, 'Errada. A rescisória (arts. 966 e 975) ataca vícios da decisão. Aqui não há vício, e sim mudança posterior dos fatos, resolvida pela revisional.'],
    ['pode apenas alegar a mudança em impugnação ao cumprimento de sentença, que é o único meio admitido.', false, 'Errada. A via adequada é a ação revisional, com base no art. 505, I.']
  ] },
{ id: 'pc549', materia: 'processocivil', topico: 'pc-coisa-julgada',
  enunciado: 'Eduardo foi condenado, por sentença transitada em julgado, a pagar dívida de empréstimo a Fábio. Na contestação, não alegou que já havia pagado parte do valor, embora tivesse o recibo. Depois do trânsito, ajuizou ação para declarar a extinção parcial daquela mesma dívida pelo pagamento. Essa nova ação:',
  alt: [
    ['deve ser julgada procedente, pois o pagamento não foi examinado pela sentença anterior.', false, 'Errada. O fato de não ter sido examinado não basta: a eficácia preclusiva da coisa julgada cobre também o que poderia ter sido alegado (art. 508).'],
    ['é admissível, pois a coisa julgada só alcança as alegações efetivamente deduzidas pelas partes.', false, 'Errada. Pelo art. 508, consideram-se deduzidas e repelidas todas as alegações e defesas que a parte poderia opor, e não apenas as deduzidas.'],
    ['é admissível, pois a coisa julgada não alcança o réu revel ou omisso.', false, 'Errada. Eduardo foi parte e fica vinculado à coisa julgada (art. 506). A omissão na defesa atrai a eficácia preclusiva do art. 508.'],
    ['esbarra na coisa julgada, pois consideram-se deduzidas e repelidas todas as alegações e defesas que a parte poderia opor.', true, 'Correta. É a eficácia preclusiva da coisa julgada (art. 508): o deduzido e o dedutível ficam cobertos. O processo deve ser extinto sem mérito (art. 485, V).']
  ] },
{ id: 'pc550', materia: 'processocivil', topico: 'pc-remessa',
  enunciado: 'Sentença condenou um Município do interior, que não é capital, a pagar a uma servidora valor certo e líquido equivalente a 80 salários mínimos. A sentença não se fundou em súmula ou precedente vinculante, e o Município não apelou. Nesse caso:',
  alt: [
    ['a sentença está sujeita à remessa necessária, pois toda condenação contra a Fazenda deve ser reexaminada.', false, 'Errada. O art. 496, §3º, dispensa a remessa conforme o valor; para Municípios que não são capitais, o limite é de 100 salários mínimos (inciso III).'],
    ['não há remessa necessária, pois a condenação é inferior a 100 salários mínimos, limite aplicável aos Municípios que não são capitais.', true, 'Correta. Não se aplica a remessa quando a condenação de valor certo e líquido for inferior a 100 salários mínimos para os demais Municípios (art. 496, §3º, III).'],
    ['há remessa necessária, pois o limite para Municípios é de 500 salários mínimos.', false, 'Errada. O limite de 500 salários mínimos vale para Estados, DF e Municípios que sejam capitais (art. 496, §3º, II).'],
    ['há remessa necessária, pois o limite de dispensa é de 1.000 salários mínimos para qualquer ente.', false, 'Errada. 1.000 salários mínimos é o limite da União e suas autarquias e fundações de direito público (art. 496, §3º, I).']
  ] },
{ id: 'pc551', materia: 'processocivil', topico: 'pc-remessa',
  enunciado: 'Marcos obteve sentença condenando o Estado a pagar R$ 3 milhões, embora tivesse pedido R$ 4 milhões. Nenhuma das partes apelou, e os autos subiram ao tribunal por força da remessa necessária. O tribunal entendeu que o valor correto seria R$ 4 milhões. Nesse caso, o tribunal:',
  alt: [
    ['deve aumentar a condenação para R$ 4 milhões, pois a remessa devolve toda a matéria ao tribunal.', false, 'Errada. Embora a remessa devolva o reexame das parcelas suportadas pela Fazenda, é proibido agravar a condenação imposta a ela (Súmula 45 do STJ).'],
    ['pode aumentar a condenação, desde que ouça previamente o Estado.', false, 'Errada. A vedação da Súmula 45 do STJ é absoluta na remessa; para obter aumento, Marcos deveria ter apelado.'],
    ['não pode agravar a condenação imposta à Fazenda Pública no reexame necessário.', true, 'Correta. Segundo a Súmula 45 do STJ, no reexame necessário é defeso agravar a condenação da Fazenda, pois o instituto existe para protegê-la.'],
    ['deve anular a sentença e devolver os autos para novo julgamento.', false, 'Errada. Não há vício que justifique anulação; o tribunal apenas mantém ou reduz a condenação.']
  ] },
{ id: 'pc552', materia: 'processocivil', topico: 'pc-remessa',
  enunciado: 'Sobre a remessa necessária no CPC e na legislação especial, assinale a afirmativa correta.',
  alt: [
    ['A sentença que condena sociedade de economia mista ao pagamento de valor superior a 1.000 salários mínimos está sujeita à remessa necessária.', false, 'Errada. O art. 496, I, abrange União, Estados, DF, Municípios e suas autarquias e fundações de direito público; sociedades de economia mista são pessoas de direito privado.'],
    ['No mandado de segurança, está sujeita obrigatoriamente ao duplo grau de jurisdição a sentença que concede a segurança.', true, 'Correta. É a regra do art. 14, §1º, da Lei 12.016/09.'],
    ['Por ser recurso, a remessa necessária exige o recolhimento de preparo pela Fazenda.', false, 'Errada. A remessa não é recurso, mas condição de eficácia da sentença (art. 496); não tem prazo, razões nem preparo.'],
    ['Quando o julgamento da remessa necessária não for unânime, aplica-se a técnica de ampliação do colegiado.', false, 'Errada. O art. 942, §4º, II, afasta expressamente a técnica de ampliação do colegiado no julgamento da remessa necessária.']
  ] }
);
