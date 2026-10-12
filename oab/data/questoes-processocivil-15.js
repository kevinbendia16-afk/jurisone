/* Questões – lote processocivil-15 (Cumprimento de sentença e execução). */
window.QUESTOES.push(
{ id: 'pc601', materia: 'processocivil', topico: 'pc-liquidacao',
  enunciado: 'Amanda obteve sentença condenando Bento a indenizar os danos materiais decorrentes de um incêndio, em valor a ser apurado. Para quantificar o prejuízo, Amanda precisará provar quais bens estavam no imóvel e quanto gastou com hospedagem, fatos não apurados na fase de conhecimento. Sobre a liquidação, assinale a afirmativa correta.',
  alt: [
    ['Deve ser feita por arbitramento, com nomeação obrigatória de perito desde o início.', false, 'Errada. O arbitramento serve para avaliação técnica sem fato novo, e nele o juiz primeiro pede pareceres às partes, só nomeando perito se forem insuficientes (arts. 509, I, e 510 do CPC).'],
    ['Deve ser feita pelo procedimento comum, com intimação de Bento, na pessoa de seu advogado, para contestar em 15 dias.', true, 'Correta. Havendo necessidade de alegar e provar fato novo, a liquidação segue o procedimento comum, e o requerido é intimado na pessoa do advogado para contestar em 15 dias (arts. 509, II, e 511 do CPC).'],
    ['Deve ser feita pelo procedimento comum, com nova citação pessoal de Bento.', false, 'Errada. Bento já é parte do processo; por isso é intimado na pessoa do advogado, e não citado (art. 511 do CPC). Citação só ocorre em títulos como a sentença penal ou arbitral (art. 515, §1º).'],
    ['É dispensável, pois Amanda pode apresentar diretamente o demonstrativo de cálculo e iniciar o cumprimento.', false, 'Errada. O cumprimento direto com demonstrativo só é possível quando o valor depende de simples cálculo aritmético (art. 509, §2º, do CPC), o que não é o caso, pois há fatos a provar.']
  ] },
{ id: 'pc602', materia: 'processocivil', topico: 'pc-liquidacao',
  enunciado: 'Na liquidação por arbitramento de uma sentença que condenou a empresa Cimento Forte a indenizar Davi, o juiz proferiu decisão fixando o valor da indenização. Inconformada, a empresa pretende recorrer e, nas razões, sustentar também que não teve culpa pelo dano. Assinale a afirmativa correta.',
  alt: [
    ['Cabe apelação, e a ausência de culpa pode ser rediscutida, pois a liquidação reabre o mérito.', false, 'Errada. Contra decisão proferida na liquidação cabe agravo de instrumento (art. 1.015, parágrafo único, do CPC), e é vedado rediscutir a lide na liquidação (art. 509, §4º).'],
    ['Cabe agravo de instrumento, mas a ausência de culpa não pode ser rediscutida, porque é vedado, na liquidação, discutir de novo a lide ou modificar a sentença.', true, 'Correta. As decisões da fase de liquidação são impugnáveis por agravo de instrumento (art. 1.015, parágrafo único, do CPC), e a liquidação não pode rediscutir o que a sentença decidiu (art. 509, §4º).'],
    ['Cabe agravo de instrumento, e a culpa pode ser rediscutida se houver prova nova.', false, 'Errada. O recurso está certo, mas a culpa já foi decidida na sentença e está protegida; prova nova não autoriza rediscutir a lide na liquidação (art. 509, §4º, do CPC). O caminho, se houvesse, seria a ação rescisória (art. 966, VII).'],
    ['Não cabe recurso, pois a decisão de liquidação é irrecorrível até a sentença do cumprimento.', false, 'Errada. O parágrafo único do art. 1.015 do CPC prevê expressamente agravo de instrumento contra decisões da fase de liquidação.']
  ] },
{ id: 'pc603', materia: 'processocivil', topico: 'pc-liquidacao',
  enunciado: 'Elias obteve sentença que condenou Flávia a pagar R$ 30.000,00 de danos morais e lucros cessantes a serem apurados. Flávia apelou, e a apelação foi recebida com efeito suspensivo. Elias quer adiantar a apuração dos lucros cessantes. Assinale a afirmativa correta.',
  alt: [
    ['Elias deve aguardar o julgamento da apelação, pois a liquidação só é possível após o trânsito em julgado.', false, 'Errada. A liquidação pode ser realizada na pendência de recurso, em autos apartados, no juízo de origem (art. 512 do CPC).'],
    ['Elias pode requerer a liquidação na pendência do recurso, em autos apartados, no juízo de origem.', true, 'Correta. O art. 512 do CPC permite a liquidação na pendência de recurso, processada em autos apartados no juízo de origem, com as cópias das peças pertinentes.'],
    ['Elias pode requerer a liquidação, mas apenas perante o tribunal onde tramita a apelação.', false, 'Errada. A liquidação na pendência de recurso corre no juízo de origem, e não no tribunal (art. 512 do CPC).'],
    ['Somente Flávia, como devedora, poderia requerer a liquidação durante o recurso.', false, 'Errada. Credor e devedor têm legitimidade para requerer a liquidação (art. 509, caput, do CPC), e o art. 512 não restringe a iniciativa ao devedor.']
  ] },
{ id: 'pc604', materia: 'processocivil', topico: 'cumprimento',
  enunciado: 'Gustavo ajuizou ação de cobrança de aluguéis apenas contra a locatária Helena e obteve sentença condenatória transitada em julgado. No requerimento de cumprimento de sentença, incluiu no polo passivo o fiador Ítalo, que não participou da fase de conhecimento, por ser devedor solidário segundo o contrato. Assinale a afirmativa correta.',
  alt: [
    ['O cumprimento pode ser dirigido contra Ítalo, pois a solidariedade permite cobrar qualquer devedor.', false, 'Errada. A solidariedade de direito material não supre a falta de participação no processo: o cumprimento não pode ser promovido contra o fiador que não participou da fase de conhecimento (art. 513, §5º, do CPC).'],
    ['O cumprimento não pode ser promovido contra Ítalo, porque ele não participou da fase de conhecimento.', true, 'Correta. O art. 513, §5º, do CPC proíbe o cumprimento contra fiador, coobrigado ou corresponsável que não tiver participado da fase de conhecimento.'],
    ['O cumprimento pode ser dirigido contra Ítalo, desde que ele seja citado pessoalmente.', false, 'Errada. A citação na fase de cumprimento não corrige a ausência na fase de conhecimento; a vedação do art. 513, §5º, do CPC é expressa.'],
    ['O cumprimento pode alcançar Ítalo se Helena não tiver bens penhoráveis, em razão do benefício de ordem.', false, 'Errada. O benefício de ordem é regra de direito material entre fiador e devedor, mas não autoriza executar no cumprimento quem não foi parte (art. 513, §5º, do CPC).']
  ] },
{ id: 'pc605', materia: 'processocivil', topico: 'cumprimento',
  enunciado: 'A sentença que condenou Joaquim a pagar R$ 40.000,00 a Kátia transitou em julgado em fevereiro de 2024. Joaquim tinha advogado constituído nos autos. Kátia só requereu o cumprimento de sentença em agosto de 2025. Sobre a intimação de Joaquim para pagar, assinale a afirmativa correta.',
  alt: [
    ['Será feita pelo Diário da Justiça, na pessoa do advogado constituído.', false, 'Errada. Essa é a regra geral (art. 513, §2º, I, do CPC), mas ela não se aplica quando o requerimento é feito após um ano do trânsito em julgado (art. 513, §4º).'],
    ['Será feita por nova citação, já que se passou mais de um ano do trânsito em julgado.', false, 'Errada. Não há nova citação no cumprimento de sentença; o que muda é a forma de intimação, que passa a ser pessoal, por carta (art. 513, §4º, do CPC).'],
    ['Será feita na pessoa de Joaquim, por meio de carta com aviso de recebimento, encaminhada ao endereço constante dos autos.', true, 'Correta. Requerido o cumprimento após um ano do trânsito em julgado, a intimação é feita na pessoa do devedor, por carta com aviso de recebimento, no endereço dos autos (art. 513, §4º, do CPC).'],
    ['Será feita por edital, pois presume-se que o devedor mudou de endereço.', false, 'Errada. O edital só é usado quando o devedor foi citado por edital na fase de conhecimento e ficou revel (art. 513, §2º, IV, do CPC).']
  ] },
{ id: 'pc606', materia: 'processocivil', topico: 'cumprimento',
  enunciado: 'Lucas obteve sentença condenando Márcia a lhe pagar R$ 100.000,00. Márcia interpôs recurso especial, que não tem efeito suspensivo, e Lucas iniciou o cumprimento provisório. Penhorado dinheiro, Lucas pretende levantá-lo sem prestar caução, alegando apenas que a dívida é antiga. A sentença não está fundada em súmula nem em repetitivo, o crédito não é alimentar e Lucas não demonstrou necessidade. Assinale a afirmativa correta.',
  alt: [
    ['O levantamento depende de caução suficiente e idônea, pois não se configura hipótese legal de dispensa.', true, 'Correta. No cumprimento provisório, o levantamento de dinheiro depende de caução (art. 520, IV, do CPC), e nenhuma das hipóteses de dispensa do art. 521 (crédito alimentar, necessidade, agravo do art. 1.042 pendente, súmula ou repetitivo) está presente.'],
    ['O levantamento é livre, pois o recurso especial não tem efeito suspensivo.', false, 'Errada. A falta de efeito suspensivo permite o cumprimento provisório, mas o levantamento de dinheiro continua dependendo de caução (art. 520, IV, do CPC).'],
    ['O cumprimento provisório não é possível na pendência de recurso especial.', false, 'Errada. Cabe cumprimento provisório de decisão impugnada por recurso sem efeito suspensivo, como, em regra, o recurso especial (arts. 520 e 995 do CPC).'],
    ['O levantamento é possível sem caução, mas Lucas responde por danos apenas se agir com culpa.', false, 'Errada. A responsabilidade do exequente no cumprimento provisório não depende de culpa (art. 520, I, do CPC), e a caução é exigida para o levantamento (art. 520, IV).']
  ] },
{ id: 'pc607', materia: 'processocivil', topico: 'pc-cumprimento-pagar',
  enunciado: 'Natália foi intimada, na pessoa de seu advogado, para pagar o débito de R$ 60.000,00 reconhecido em sentença transitada em julgado. No prazo legal, pagou R$ 20.000,00. Considerando apenas a multa e os honorários do cumprimento, assinale a afirmativa correta.',
  alt: [
    ['Incidem multa de 10% e honorários de 10% sobre R$ 60.000,00, pois o pagamento foi incompleto.', false, 'Errada. Havendo pagamento parcial, a multa e os honorários incidem apenas sobre o restante (art. 523, §2º, do CPC).'],
    ['Não incidem multa nem honorários, pois houve pagamento dentro do prazo.', false, 'Errada. O pagamento foi apenas parcial; sobre a parte não paga incidem os acréscimos (art. 523, §§1º e 2º, do CPC).'],
    ['Incidem multa de 10% e honorários de 10% sobre R$ 40.000,00, totalizando R$ 8.000,00 de acréscimos.', true, 'Correta. Pago parcialmente o débito, multa e honorários de 10% cada incidem sobre o saldo de R$ 40.000,00, ou seja, R$ 4.000,00 de multa e R$ 4.000,00 de honorários (art. 523, §§1º e 2º, do CPC).'],
    ['Incide apenas multa de 20% sobre R$ 40.000,00, sem honorários, que só são devidos se houver impugnação.', false, 'Errada. São duas verbas distintas de 10% cada (art. 523, §1º), e os honorários são devidos haja ou não impugnação (Súmula 517 do STJ).']
  ] },
{ id: 'pc608', materia: 'processocivil', topico: 'pc-cumprimento-pagar',
  enunciado: 'Otávio foi condenado a pagar R$ 50.000,00 a Priscila. Antes de ser intimado para o cumprimento de sentença, compareceu em juízo e depositou R$ 45.000,00, com memória discriminada do cálculo. Priscila discordou do valor, e o juiz concluiu que o débito correto era de R$ 50.000,00. Assinale a afirmativa correta.',
  alt: [
    ['Priscila não pode levantar os R$ 45.000,00 enquanto discute a diferença.', false, 'Errada. O autor pode impugnar o valor sem prejuízo do levantamento do depósito a título de parcela incontroversa (art. 526, §1º, do CPC).'],
    ['Sobre a diferença de R$ 5.000,00 incidem multa de 10% e honorários de 10%, prosseguindo-se a execução com penhora.', true, 'Correta. Concluindo o juiz pela insuficiência do depósito, incidem multa e honorários de 10% sobre a diferença, seguindo-se a execução com penhora e atos subsequentes (art. 526, §2º, do CPC).'],
    ['Sobre o total de R$ 50.000,00 incidem multa de 10% e honorários de 10%, porque o depósito foi insuficiente.', false, 'Errada. Os acréscimos recaem apenas sobre a diferença não depositada (art. 526, §2º, do CPC).'],
    ['O juiz deve declarar satisfeita a obrigação, pois o devedor tomou a iniciativa de pagar.', false, 'Errada. A obrigação só é declarada satisfeita se o autor não se opuser ao depósito (art. 526, §3º, do CPC). Aqui houve oposição e o valor foi considerado insuficiente.']
  ] },
{ id: 'pc609', materia: 'processocivil', topico: 'pc-cumprimento-pagar',
  enunciado: 'Intimado para pagar R$ 90.000,00 no cumprimento de sentença, Quintino requereu ao juiz autorização para depositar 30% do valor e pagar o restante em seis parcelas mensais, corrigidas e com juros. O exequente se opôs. Assinale a afirmativa correta.',
  alt: [
    ['O pedido deve ser deferido, pois o parcelamento é direito do executado que reconhece o débito.', false, 'Errada. O parcelamento do art. 916 do CPC é próprio da execução de título extrajudicial, e o §7º desse artigo proíbe sua aplicação ao cumprimento de sentença.'],
    ['O pedido deve ser deferido apenas se Quintino comprovar dificuldade financeira.', false, 'Errada. Não existe essa condição: o parcelamento legal simplesmente não se aplica ao cumprimento de sentença (art. 916, §7º, do CPC).'],
    ['O pedido deve ser indeferido, pois o parcelamento legal não se aplica ao cumprimento de sentença, sem prejuízo de eventual acordo entre as partes.', true, 'Correta. O art. 916, §7º, do CPC afasta o parcelamento do cumprimento de sentença. Diante da oposição do credor, não há como impô-lo, embora as partes possam livremente fazer acordo.'],
    ['O pedido deve ser deferido, mas o depósito inicial deve ser de 50% do valor.', false, 'Errada. O percentual de 30% é o da execução extrajudicial (art. 916), e nenhum percentual autoriza o parcelamento no cumprimento de sentença (art. 916, §7º, do CPC).']
  ] },
{ id: 'pc610', materia: 'processocivil', topico: 'pc-impugnacao',
  enunciado: 'Renata, condenada a pagar R$ 70.000,00, foi intimada para o pagamento voluntário e não pagou. Ainda não houve penhora de bens. Ela pretende impugnar o cumprimento de sentença. Assinale a afirmativa correta.',
  alt: [
    ['Renata deve aguardar a penhora, pois o prazo de impugnação conta da intimação da penhora.', false, 'Errada. O prazo de impugnação independe de penhora ou de nova intimação (art. 525, caput, do CPC).'],
    ['Renata deve garantir o juízo para que a impugnação seja admitida.', false, 'Errada. A garantia do juízo não é requisito para impugnar; é requisito apenas para a concessão de efeito suspensivo (art. 525, caput e §6º, do CPC).'],
    ['O prazo de 15 dias para impugnar começa automaticamente após o término do prazo para pagamento voluntário, independentemente de penhora ou de nova intimação.', true, 'Correta. É a regra do art. 525, caput, do CPC: transcorrido o prazo do art. 523 sem pagamento, inicia-se o prazo de 15 dias para impugnação, sem necessidade de penhora ou nova intimação.'],
    ['Renata tem 30 dias para impugnar, contados da intimação para pagamento.', false, 'Errada. O prazo de 30 dias é da Fazenda Pública (art. 535 do CPC). Para o particular, são 15 dias após o fim do prazo para pagar (art. 525).']
  ] },
{ id: 'pc611', materia: 'processocivil', topico: 'pc-impugnacao',
  enunciado: 'Sávio foi condenado por sentença transitada em julgado em 2023 a pagar R$ 25.000,00 a Tânia. Na impugnação ao cumprimento, apresentada em 2026, pretende alegar: (I) que já havia pagado a dívida em 2021, antes do ajuizamento da ação, fato não alegado na contestação; e (II) que celebrou com Tânia, em 2024, acordo de compensação que extinguiu a dívida. Assinale a afirmativa correta.',
  alt: [
    ['Ambas as alegações podem ser feitas, pois o pagamento e a compensação estão no rol da impugnação.', false, 'Errada. As causas extintivas só podem ser alegadas se supervenientes à sentença (art. 525, §1º, VII, do CPC). O pagamento de 2021 é anterior e está coberto pela eficácia preclusiva da coisa julgada (art. 508).'],
    ['Apenas a alegação II pode ser feita, pois somente as causas extintivas supervenientes à sentença são admitidas na impugnação.', true, 'Correta. O art. 525, §1º, VII, do CPC admite causas modificativas ou extintivas, como compensação, desde que supervenientes à sentença. O pagamento anterior deveria ter sido alegado na contestação (art. 508).'],
    ['Apenas a alegação I pode ser feita, pois a compensação exige ação própria.', false, 'Errada. A compensação superveniente é expressamente admitida na impugnação (art. 525, §1º, VII, do CPC), e o pagamento anterior à sentença não pode ser alegado.'],
    ['Nenhuma das alegações pode ser feita, porque a impugnação só admite matérias processuais.', false, 'Errada. A impugnação admite também matérias de mérito supervenientes, como pagamento, novação, compensação, transação e prescrição (art. 525, §1º, VII, do CPC).']
  ] },
{ id: 'pc612', materia: 'processocivil', topico: 'pc-impugnacao',
  enunciado: 'Ulisses apresentou impugnação ao cumprimento de sentença alegando, como único fundamento, que o valor cobrado por Vera era superior ao devido, mas não indicou o valor que entendia correto nem apresentou demonstrativo de cálculo. Diante disso, o juiz deve',
  alt: [
    ['intimar Ulisses para emendar a impugnação em 15 dias, sob pena de indeferimento.', false, 'Errada. O CPC prevê consequência direta para o caso: a rejeição liminar quando o excesso é o único fundamento (art. 525, §5º).'],
    ['remeter os autos ao contador judicial para apurar o valor correto.', false, 'Errada. O ônus de indicar o valor correto com demonstrativo é do executado (art. 525, §4º, do CPC); não cabe ao juízo suprir a omissão.'],
    ['processar a impugnação normalmente, deixando a análise do excesso para a sentença.', false, 'Errada. A impugnação só seria processada, sem exame do excesso, se houvesse outro fundamento além dele (art. 525, §5º, do CPC).'],
    ['rejeitar liminarmente a impugnação.', true, 'Correta. Se o executado não aponta o valor correto ou não apresenta o demonstrativo, a impugnação é liminarmente rejeitada quando o excesso de execução for seu único fundamento (art. 525, §§4º e 5º, do CPC).']
  ] },
{ id: 'pc613', materia: 'processocivil', topico: 'pc-cumprimento-fazer',
  enunciado: 'Por decisão em tutela provisória, a operadora de saúde Vida Plena foi obrigada a custear cirurgia de Wesley, sob pena de multa diária. A operadora descumpriu a ordem por 20 dias. Wesley pretende cobrar a multa antes da sentença. Assinale a afirmativa correta.',
  alt: [
    ['A multa só pode ser cobrada após o trânsito em julgado da sentença favorável.', false, 'Errada. A decisão que fixa a multa admite cumprimento provisório (art. 537, §3º, do CPC); o trânsito em julgado é exigido apenas para o levantamento do valor.'],
    ['A multa pode ser cobrada em cumprimento provisório, devendo o valor ser depositado em juízo, com levantamento após o trânsito em julgado da sentença favorável a Wesley.', true, 'Correta. É o que prevê o art. 537, §3º, do CPC: cumprimento provisório da multa, com depósito em juízo e levantamento permitido após o trânsito em julgado da sentença favorável.'],
    ['A multa pode ser cobrada e levantada imediatamente por Wesley, por se tratar de questão de saúde.', false, 'Errada. O CPC não excepciona o levantamento da multa: ele só é permitido após o trânsito em julgado da sentença favorável (art. 537, §3º).'],
    ['A multa reverte ao Estado, e Wesley só pode cobrar perdas e danos.', false, 'Errada. O valor da multa é devido ao exequente (art. 537, §2º, do CPC), e pode ser cobrado junto com as perdas e danos (art. 500).']
  ] },
{ id: 'pc614', materia: 'processocivil', topico: 'pc-cumprimento-fazer',
  enunciado: 'Ximena obteve sentença condenando Yuri a lhe entregar um imóvel rural. Yuri não entregou o bem no prazo e, na fase de cumprimento, alegou pela primeira vez que construiu um galpão no imóvel e que só o entregaria após ser indenizado. Assinale a afirmativa correta.',
  alt: [
    ['O juiz deve expedir mandado de busca e apreensão e suspender o cumprimento até a apuração das benfeitorias.', false, 'Errada. Para imóvel, o mandado é de imissão na posse (art. 538, caput, do CPC), e a retenção por benfeitorias não alegada na contestação não pode ser exercida no cumprimento (art. 538, §2º).'],
    ['O juiz deve expedir mandado de imissão na posse, pois a existência de benfeitorias e o direito de retenção deviam ter sido alegados na contestação, na fase de conhecimento.', true, 'Correta. Não entregue a coisa imóvel, expede-se mandado de imissão na posse (art. 538, caput, do CPC). Benfeitorias e retenção devem ser alegadas na contestação, na fase de conhecimento (art. 538, §§1º e 2º).'],
    ['O juiz deve converter a obrigação em perdas e danos, pois houve recusa do devedor.', false, 'Errada. A conversão em perdas e danos só ocorre a pedido do autor ou se impossível a tutela específica (art. 499 do CPC), e a recusa do devedor não basta.'],
    ['O juiz deve admitir a retenção, que pode ser exercida em qualquer fase, inclusive por impugnação.', false, 'Errada. O direito de retenção por benfeitorias deve ser exercido na contestação, na fase de conhecimento (art. 538, §2º, do CPC).']
  ] },
{ id: 'pc615', materia: 'processocivil', topico: 'pc-cumprimento-fazer',
  enunciado: 'Zilda obteve ordem judicial para que a vizinha Ágata retirasse uma estrutura que invadia seu terreno, com multa diária de R$ 2.000,00. Ágata demorou 300 dias para cumprir, e a multa acumulou valor dez vezes maior que o custo da obra. Sobre a multa, assinale a afirmativa correta.',
  alt: [
    ['O valor não pode ser alterado, pois a decisão que fixou a multa transitou em julgado com a sentença.', false, 'Errada. Segundo o STJ, a decisão que comina astreintes não preclui nem faz coisa julgada (Tema 706 do STJ), e o juiz pode modificar a multa excessiva (art. 537, §1º, do CPC).'],
    ['A multa é limitada, por lei, ao valor da obrigação principal.', false, 'Errada. O CPC não fixa teto igual ao da obrigação principal; exige que a multa seja suficiente e compatível (art. 537, caput), podendo o juiz ajustá-la se excessiva (§1º, I).'],
    ['O juiz pode rever a multa que se tornou excessiva, e o valor, ao final, pertence a Zilda.', true, 'Correta. O juiz pode modificar o valor da multa que se tornou excessiva (art. 537, §1º, I, do CPC), a decisão de astreintes não faz coisa julgada (Tema 706 do STJ) e o valor é devido ao exequente (art. 537, §2º).'],
    ['A multa deve ser revertida a fundo público, para evitar enriquecimento sem causa de Zilda.', false, 'Errada. O CPC é expresso: o valor da multa é devido ao exequente (art. 537, §2º). O excesso se resolve com a redução, não com a mudança do destinatário.']
  ] },
{ id: 'pc616', materia: 'processocivil', topico: 'pc-alimentos-execucao',
  enunciado: 'Beatriz, representando o filho Caetano, de 7 anos, requereu o cumprimento de sentença de alimentos contra Danilo, que está há 10 meses sem pagar a pensão. Ela pediu a prisão civil. Sobre o débito que autoriza a prisão, assinale a afirmativa correta.',
  alt: [
    ['A prisão pode ser decretada por todas as 10 parcelas em atraso.', false, 'Errada. A prisão civil só se refere às 3 prestações anteriores ao ajuizamento e às que vencerem no curso do processo (art. 528, §7º, do CPC e Súmula 309 do STJ). As demais são cobradas por penhora.'],
    ['A prisão se refere às 3 prestações anteriores ao ajuizamento e às que se vencerem no curso do processo, sendo as demais cobradas pelo rito da penhora.', true, 'Correta. É o que dispõe o art. 528, §7º, do CPC, em linha com a Súmula 309 do STJ; as parcelas mais antigas seguem o rito da expropriação.'],
    ['A prisão se refere apenas à última prestação vencida antes do ajuizamento.', false, 'Errada. A lei fala em até 3 prestações anteriores ao ajuizamento, mais as vincendas no curso do processo (art. 528, §7º, do CPC).'],
    ['A prisão se refere às 6 prestações anteriores ao ajuizamento, por se tratar de alimentos a menor.', false, 'Errada. Não há regra especial para menores quanto ao número de parcelas; o limite é de 3 prestações anteriores, mais as vincendas (art. 528, §7º, do CPC).']
  ] },
{ id: 'pc617', materia: 'processocivil', topico: 'pc-alimentos-execucao',
  enunciado: 'Fábio teve a prisão civil decretada por dívida de alimentos e cumpriu integralmente o prazo fixado pelo juiz, sem pagar o débito. Ao sair, alegou que a dívida estava extinta. Assinale a afirmativa correta.',
  alt: [
    ['A dívida está extinta, pois a prisão substitui o pagamento das prestações.', false, 'Errada. O cumprimento da pena não exime o executado do pagamento das prestações vencidas e vincendas (art. 528, §5º, do CPC).'],
    ['A dívida subsiste, mas não pode mais ser cobrada por nenhum meio executivo.', false, 'Errada. A dívida pode ser cobrada pelo rito da penhora e por outros meios, como o desconto em folha (arts. 529 e 530 do CPC).'],
    ['A dívida subsiste, e Fábio pode ser preso novamente pelas mesmas parcelas, até pagar.', false, 'Errada. A prisão é medida coercitiva com prazo de 1 a 3 meses (art. 528, §3º, do CPC); cumprida, a cobrança das mesmas parcelas segue pela via patrimonial, e não por nova prisão.'],
    ['A dívida subsiste, porque o cumprimento da pena não exime o executado do pagamento das prestações vencidas e vincendas.', true, 'Correta. A prisão civil é coerção, não pagamento. O art. 528, §5º, do CPC afirma que o cumprimento da pena não exime o executado do pagamento das prestações.']
  ] },
{ id: 'pc618', materia: 'processocivil', topico: 'pc-alimentos-execucao',
  enunciado: 'Gisele recebe alimentos de Heitor, empregado com carteira assinada de uma rede de supermercados. Heitor está em atraso, e Gisele pretende que tanto a pensão mensal quanto o débito em atraso sejam descontados diretamente do salário dele. Assinale a afirmativa correta.',
  alt: [
    ['O desconto em folha só pode alcançar a pensão mensal, e o débito em atraso deve ser cobrado por penhora.', false, 'Errada. O débito objeto de execução também pode ser descontado dos rendimentos, de forma parcelada (art. 529, §3º, do CPC).'],
    ['O débito em atraso pode ser descontado de forma parcelada, desde que, somado à pensão mensal, não ultrapasse 50% dos ganhos líquidos de Heitor.', true, 'Correta. O art. 529, §3º, do CPC permite o desconto parcelado do débito, sem prejuízo dos alimentos vincendos, desde que o total não ultrapasse 50% dos ganhos líquidos.'],
    ['O desconto pode alcançar até 100% do salário, pois os alimentos têm prioridade absoluta.', false, 'Errada. O CPC estabelece o limite de 50% dos ganhos líquidos para a soma do débito parcelado com a parcela mensal (art. 529, §3º).'],
    ['O desconto em folha depende de concordância de Heitor, por envolver verba salarial.', false, 'Errada. O desconto é determinado pelo juiz a requerimento do exequente, e o empregador que não cumprir comete crime de desobediência (art. 529, caput e §1º, do CPC).']
  ] }
);
