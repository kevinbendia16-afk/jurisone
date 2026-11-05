/* Questões – lote processocivil-16 (Cumprimento de sentença e execução). */
window.QUESTOES.push(
{ id: 'pc621', materia: 'processocivil', topico: 'pc-fazenda',
  enunciado: 'Marta obteve sentença transitada em julgado condenando o Estado X a lhe pagar R$ 300.000,00. Ela requereu o cumprimento de sentença, com demonstrativo do crédito. Sobre a defesa do Estado e as consequências do não pagamento voluntário, assinale a afirmativa correta.',
  alt: [
    ['O Estado será intimado para pagar em 15 dias, sob pena de multa de 10% e honorários de 10%.', false, 'Errada. Contra a Fazenda não se aplica a multa de 10% do art. 523, §1º (art. 534, §2º, do CPC). A Fazenda não é intimada para pagar, e sim para impugnar, porque paga por precatório ou RPV.'],
    ['O Estado será intimado, na pessoa de seu representante judicial, para impugnar a execução em 30 dias, nos próprios autos.', true, 'Correta. É a regra do art. 535 do CPC: intimação do representante judicial, por carga, remessa ou meio eletrônico, com prazo de 30 dias para impugnar nos próprios autos.'],
    ['O Estado será citado para opor embargos à execução em 15 dias.', false, 'Errada. Título judicial gera cumprimento de sentença, com impugnação em 30 dias (art. 535). Embargos à execução em 30 dias são a defesa contra execução de título extrajudicial (art. 910).'],
    ['Não impugnada a execução, o juiz determinará a penhora de bens públicos suficientes.', false, 'Errada. Bens públicos são impenhoráveis. Sem impugnação, expede-se precatório ou RPV (art. 535, §3º, do CPC e art. 100 da CF).']
  ] },
{ id: 'pc622', materia: 'processocivil', topico: 'pc-fazenda',
  enunciado: 'Ricardo é credor do Município Y de quantia que se enquadra no limite de pequeno valor fixado pela lei municipal. Não houve impugnação ao cumprimento de sentença. Sobre o pagamento, assinale a afirmativa correta.',
  alt: [
    ['O pagamento se fará por precatório, incluído no orçamento do exercício seguinte.', false, 'Errada. O precatório é para valores acima do pequeno valor. Dentro do limite, paga-se por RPV (art. 100, §3º, da CF e art. 535, §3º, II, do CPC).'],
    ['Ricardo pode fracionar crédito maior para receber parte por RPV e o restante por precatório.', false, 'Errada. A CF proíbe fracionar, repartir ou quebrar o valor para enquadrar parte como pequeno valor (art. 100, §8º, da CF). Ele pode, porém, renunciar ao excedente para receber tudo por RPV.'],
    ['O juiz ordenará à autoridade citada o pagamento por requisição de pequeno valor, no prazo de 2 meses contado da entrega da requisição.', true, 'Correta. Art. 535, §3º, II, do CPC: a obrigação de pequeno valor é paga por ordem do próprio juiz à autoridade na pessoa de quem o ente foi citado, em 2 meses, mediante depósito em banco oficial.'],
    ['O pagamento depende de requisição do presidente do tribunal, como em qualquer condenação da Fazenda.', false, 'Errada. Quem requisita por intermédio do presidente do tribunal é o precatório (art. 535, §3º, I). A RPV é ordenada pelo próprio juiz da execução (art. 535, §3º, II).']
  ] },
{ id: 'pc623', materia: 'processocivil', topico: 'pc-fazenda',
  enunciado: 'A empresa Construir Ltda. tem contrato assinado com a União, que reconhece dívida líquida e vencida, mas não paga. Seu advogado avalia se pode propor execução de título extrajudicial. Assinale a afirmativa correta.',
  alt: [
    ['Não cabe execução de título extrajudicial contra a Fazenda; é preciso ação de conhecimento.', false, 'Errada. A Súmula 279 do STJ admite execução por título extrajudicial contra a Fazenda Pública, e o CPC a regula no art. 910.'],
    ['Cabe a execução, e a União será citada para opor embargos em 30 dias; não opostos ou transitada em julgado a decisão que os rejeitar, expede-se precatório ou RPV.', true, 'Correta. Art. 910, caput e §1º, do CPC, e Súmula 279 do STJ.'],
    ['Cabe a execução, mas a União será citada para pagar em 3 dias, sob pena de penhora.', false, 'Errada. Pagar em 3 dias sob pena de penhora é o rito comum da execução por quantia (art. 829). Contra a Fazenda não há penhora; há citação para embargos em 30 dias (art. 910).'],
    ['Cabe a execução, mas nos embargos a União só pode alegar matérias de impugnação ao cumprimento de sentença.', false, 'Errada. Como não houve processo de conhecimento, a Fazenda pode alegar nos embargos qualquer matéria que poderia deduzir como defesa em processo de conhecimento (art. 910, §2º, do CPC).']
  ] },
{ id: 'pc624', materia: 'processocivil', topico: 'execucao',
  enunciado: 'Paulo é credor de Sérgio com base em confissão de dívida assinada por ambos e por duas testemunhas. Receoso de discussões sobre o valor, Paulo pretende propor ação de cobrança pelo procedimento comum. Assinale a afirmativa correta.',
  alt: [
    ['A ação deve ser extinta por falta de interesse, pois Paulo já tem título executivo.', false, 'Errada. O CPC afastou essa tese: a existência de título extrajudicial não impede a opção pelo processo de conhecimento para obter título judicial (art. 785).'],
    ['Paulo pode optar pelo processo de conhecimento, a fim de obter título executivo judicial.', true, 'Correta. Art. 785 do CPC: o credor com título extrajudicial pode escolher o processo de conhecimento.'],
    ['Paulo só pode usar o procedimento comum se antes desistir formalmente do título.', false, 'Errada. A lei não exige desistência ou renúncia ao título; a opção é livre (art. 785 do CPC).'],
    ['Paulo deve propor necessariamente ação monitória.', false, 'Errada. A monitória serve a quem tem prova escrita sem eficácia de título executivo (art. 700). Quem tem título pode executar ou optar pelo conhecimento (art. 785).']
  ] },
{ id: 'pc625', materia: 'processocivil', topico: 'execucao',
  enunciado: 'Em execução de título extrajudicial por quantia certa, o juiz recebeu a inicial e fixou honorários advocatícios. Gustavo, executado, quer saber o que acontece se pagar integralmente no prazo legal. Assinale a afirmativa correta.',
  alt: [
    ['Ele tem 15 dias para pagar, e os honorários de 10% ficarão isentos.', false, 'Errada. Na execução de título extrajudicial o prazo é de 3 dias (art. 829). Os 15 dias são do cumprimento de sentença (art. 523).'],
    ['Ele tem 3 dias para pagar, e, se pagar nesse prazo, os honorários de 10% serão reduzidos pela metade.', true, 'Correta. Art. 829 (citação para pagar em 3 dias) e art. 827, caput e §1º, do CPC (honorários de 10%, reduzidos à metade com pagamento integral no prazo).'],
    ['Ele tem 3 dias para pagar, mas incidirá também multa de 10% sobre o débito.', false, 'Errada. A multa de 10% é do cumprimento de sentença (art. 523, §1º), não da execução de título extrajudicial.'],
    ['Ele tem 3 dias para pagar, e os honorários não podem ser elevados em hipótese alguma.', false, 'Errada. Os honorários podem chegar a 20% se rejeitados os embargos ou, mesmo sem embargos, ao final, pelo trabalho do advogado do exequente (art. 827, §2º, do CPC).']
  ] },
{ id: 'pc626', materia: 'processocivil', topico: 'execucao',
  enunciado: 'Distribuída a execução movida por Laura contra Otávio, ela obteve certidão de que a execução foi admitida pelo juiz e a averbou na matrícula de três imóveis de Otávio. Depois, a penhora recaiu sobre apenas um deles, suficiente para a dívida. Assinale a afirmativa correta.',
  alt: [
    ['As averbações nos demais imóveis permanecem até o fim da execução, como garantia.', false, 'Errada. Formalizada penhora suficiente, o exequente deve providenciar, em 10 dias, o cancelamento das averbações dos bens não penhorados (art. 828, §2º, do CPC).'],
    ['Laura deve cancelar as averbações dos bens não penhorados em 10 dias, e responde por indenização se a averbação for manifestamente indevida ou não for cancelada.', true, 'Correta. Art. 828, §§2º e 5º, do CPC.'],
    ['A averbação só podia ser feita após a citação de Otávio.', false, 'Errada. Basta a certidão de que a execução foi admitida pelo juiz (art. 828, caput, do CPC); não se exige citação prévia.'],
    ['A alienação de imóvel averbado, feita antes da penhora, nunca configura fraude à execução.', false, 'Errada. Presume-se em fraude à execução a alienação ou oneração de bens feita após a averbação (art. 828, §4º, do CPC).']
  ] },
{ id: 'pc627', materia: 'processocivil', topico: 'pc-titulos',
  enunciado: 'Fernanda e a empresa Digital S.A. celebraram contrato de mútuo inteiramente eletrônico, assinado por ambas com assinatura eletrônica, sem testemunhas. Diante do inadimplemento, a empresa quer executar o contrato. Assinale a afirmativa correta.',
  alt: [
    ['O contrato não é título executivo, pois o documento particular exige duas testemunhas.', false, 'Errada. A exigência de duas testemunhas do art. 784, III, é dispensada no título constituído ou atestado por meio eletrônico com assinatura eletrônica (art. 784, §4º, incluído pela Lei 14.620/23).'],
    ['O contrato é título executivo, pois nos títulos eletrônicos admite-se qualquer modalidade de assinatura eletrônica prevista em lei, dispensada a assinatura de testemunhas.', true, 'Correta. Art. 784, §4º, do CPC.'],
    ['O contrato só vale como título se registrado em cartório de títulos e documentos.', false, 'Errada. Não há essa exigência no CPC; o requisito é a assinatura eletrônica válida (art. 784, §4º).'],
    ['A empresa deve propor ação monitória, única via para documentos eletrônicos.', false, 'Errada. O documento eletrônico com assinatura eletrônica é título extrajudicial (art. 784, §4º); a monitória fica para prova escrita sem eficácia executiva (art. 700).']
  ] },
{ id: 'pc628', materia: 'processocivil', topico: 'pc-titulos',
  enunciado: 'Henrique recebeu um cheque de Igor e só o apresentou anos depois, quando já prescrita a pretensão executória. Ele consulta você sobre a via adequada para cobrar. Assinale a afirmativa correta.',
  alt: [
    ['Henrique pode executar o cheque, pois título de crédito nunca perde a força executiva.', false, 'Errada. Prescrita a pretensão executória, o cheque deixa de embasar execução (art. 784, I, combinado com a Lei 7.357/85, art. 59).'],
    ['Henrique pode propor ação monitória fundada no cheque prescrito.', true, 'Correta. Súmula 299 do STJ: é admissível ação monitória fundada em cheque prescrito, porque ele é prova escrita sem eficácia de título executivo (art. 700 do CPC).'],
    ['Henrique perdeu qualquer meio de cobrar a dívida.', false, 'Errada. A prescrição da execução não extingue as demais vias, como a monitória (Súmula 299 do STJ) ou a ação de cobrança.'],
    ['Henrique deve propor cumprimento de sentença.', false, 'Errada. Cumprimento de sentença pressupõe título judicial (art. 515); o cheque é título extrajudicial.']
  ] },
{ id: 'pc629', materia: 'processocivil', topico: 'pc-titulos',
  enunciado: 'Joana propôs execução contra Kátia com base em contrato que previa pagamento de parcela apenas após a entrega de uma obra, que ainda não ocorreu. Kátia procura você. Assinale a afirmativa correta.',
  alt: [
    ['A execução é válida, pois basta a existência do título, independentemente da exigibilidade.', false, 'Errada. A execução exige obrigação certa, líquida e exigível (art. 783 do CPC).'],
    ['A execução é nula, porque a obrigação não é exigível, nulidade que pode ser reconhecida pelo juiz de ofício ou a requerimento, independentemente de embargos.', true, 'Correta. Art. 803, I e parágrafo único, do CPC: é nula a execução se o título não corresponder a obrigação certa, líquida e exigível, e a nulidade pode ser pronunciada de ofício ou a requerimento.'],
    ['Kátia só pode alegar a falta de exigibilidade em embargos, após garantir o juízo.', false, 'Errada. Embargos não dependem de garantia (art. 914), e a nulidade pode ser alegada por simples petição (art. 803, parágrafo único).'],
    ['A execução deve prosseguir e Kátia apenas poderá pedir indenização depois.', false, 'Errada. Sem exigibilidade, a execução é nula (art. 803, I); a lei não manda prosseguir.']
  ] },
{ id: 'pc630', materia: 'processocivil', topico: 'pc-penhora',
  enunciado: 'Leonardo, executado em ação de alimentos devidos ao filho, recebe salário mensal de R$ 8.000,00. Seu advogado alega que o salário é absolutamente impenhorável. Assinale a afirmativa correta.',
  alt: [
    ['O salário é impenhorável em qualquer situação.', false, 'Errada. A impenhorabilidade do art. 833, IV, não se aplica à penhora para pagamento de prestação alimentícia, de qualquer origem (art. 833, §2º, do CPC).'],
    ['O salário pode ser penhorado para pagamento de prestação alimentícia, independentemente de seu valor.', true, 'Correta. Art. 833, §2º, do CPC: a impenhorabilidade não vale para a prestação alimentícia, nem para importâncias acima de 50 salários mínimos mensais.'],
    ['O salário só pode ser penhorado na parte que exceder 50 salários mínimos.', false, 'Errada. O limite de 50 salários mínimos é a outra exceção, para dívidas não alimentares. Para alimentos, a penhora independe desse limite (art. 833, §2º).'],
    ['O salário só pode ser penhorado se o executado concordar.', false, 'Errada. A penhora é ato de constrição que não depende de concordância do devedor (art. 831 e seguintes).']
  ] },
{ id: 'pc631', materia: 'processocivil', topico: 'pc-penhora',
  enunciado: 'Mauro foi fiador em contrato de locação comercial. Executado pelo locador, teve penhorado o único imóvel em que mora com a família. Ele alega proteção do bem de família. Assinale a afirmativa correta, de acordo com o STF.',
  alt: [
    ['A penhora é inválida, pois a exceção do fiador só vale para locação residencial.', false, 'Errada. O STF, no Tema 1127, fixou que é constitucional a penhora do bem de família do fiador tanto em locação residencial quanto comercial.'],
    ['A penhora é válida, pois é constitucional penhorar o bem de família do fiador de contrato de locação, residencial ou comercial.', true, 'Correta. Art. 3º, VII, da Lei 8.009/90 e Tema 1127 do STF.'],
    ['A penhora é válida apenas se Mauro tiver outro imóvel.', false, 'Errada. Se tivesse outro imóvel, o caso nem seria de bem de família único. A exceção do art. 3º, VII, da Lei 8.009/90 atinge justamente o imóvel residencial do fiador.'],
    ['A penhora é inválida, porque o bem de família só pode ser penhorado por dívidas de IPTU.', false, 'Errada. O art. 3º da Lei 8.009/90 traz várias exceções, entre elas os tributos do imóvel e a fiança em locação (inciso VII).']
  ] },
{ id: 'pc632', materia: 'processocivil', topico: 'pc-penhora',
  enunciado: 'Na execução movida contra Natália, por dívida não alimentar, foram bloqueados R$ 30.000,00 de sua caderneta de poupança, única aplicação que possui. Assinale a afirmativa correta.',
  alt: [
    ['O valor é penhorável, pois o dinheiro ocupa o primeiro lugar na ordem de penhora.', false, 'Errada. O dinheiro é prioritário (art. 835, §1º), mas a ordem não afasta as impenhorabilidades, como a da poupança até 40 salários mínimos (art. 833, X).'],
    ['O valor é impenhorável, por estar depositado em caderneta de poupança até o limite de 40 salários mínimos.', true, 'Correta. Art. 833, X, do CPC: é impenhorável a quantia em poupança até 40 salários mínimos (hoje, valor bem acima de R$ 30.000,00).'],
    ['Só é impenhorável a metade do valor.', false, 'Errada. A lei protege integralmente a quantia até 40 salários mínimos (art. 833, X); não há regra de metade.'],
    ['A impenhorabilidade depende de prova de que o dinheiro veio do salário.', false, 'Errada. A proteção do art. 833, X, decorre do depósito em poupança até o limite, sem exigir a origem salarial.']
  ] },
{ id: 'pc633', materia: 'processocivil', topico: 'pc-expropriacao',
  enunciado: 'Penhorado e avaliado o imóvel de Rui em R$ 500.000,00, a credora Sônia quer ficar com o bem para quitar a dívida. Assinale a afirmativa correta sobre a adjudicação.',
  alt: [
    ['Sônia pode adjudicar por qualquer valor, desde que acima de 50% da avaliação.', false, 'Errada. Os 50% são o parâmetro do preço vil no leilão (art. 891, parágrafo único). Na adjudicação o preço não pode ser inferior ao da avaliação (art. 876).'],
    ['Sônia pode adjudicar oferecendo preço não inferior ao da avaliação; se o crédito for inferior ao valor do bem, deve depositar a diferença.', true, 'Correta. Art. 876, caput e §4º, I, do CPC.'],
    ['A adjudicação só pode ocorrer depois de frustrado o leilão.', false, 'Errada. A adjudicação é a primeira forma de expropriação (arts. 825, I, e 876); a alienação vem se ela não for requerida (art. 880).'],
    ['Somente o exequente pode adjudicar.', false, 'Errada. Também podem adjudicar, entre outros, credores com penhora, cônjuge, companheiro, descendentes e ascendentes do executado (art. 876, §5º).']
  ] },
{ id: 'pc634', materia: 'processocivil', topico: 'pc-expropriacao',
  enunciado: 'No leilão do apartamento de Tiago, avaliado em R$ 400.000,00, o juiz não fixou preço mínimo. O maior lance foi de R$ 180.000,00. Assinale a afirmativa correta.',
  alt: [
    ['O lance deve ser aceito, pois no segundo leilão vale qualquer valor.', false, 'Errada. Mesmo no segundo leilão é proibido o preço vil (art. 891 do CPC).'],
    ['O lance é vil, pois, sem preço mínimo fixado, considera-se vil o inferior a 50% da avaliação.', true, 'Correta. Art. 891, parágrafo único, do CPC: R$ 180.000,00 é menos que 50% de R$ 400.000,00.'],
    ['O lance é vil apenas se inferior a 80% da avaliação.', false, 'Errada. O CPC usa 50% da avaliação quando não há preço mínimo (art. 891, parágrafo único). O percentual de 80% aparece para imóvel de incapaz (art. 896).'],
    ['Cabe ao arrematante escolher se aceita ou não o parâmetro do preço vil.', false, 'Errada. A vedação ao preço vil é regra legal (art. 891), não depende da vontade do arrematante.']
  ] },
{ id: 'pc635', materia: 'processocivil', topico: 'pc-expropriacao',
  enunciado: 'Na execução contra Vera, nenhum legitimado requereu a adjudicação do bem penhorado. O exequente pergunta qual o próximo passo. Assinale a afirmativa correta.',
  alt: [
    ['Deve ser realizado obrigatoriamente leilão presencial.', false, 'Errada. Antes do leilão, cabe alienação por iniciativa particular (art. 880), e o leilão eletrônico é preferencial ao presencial (art. 882).'],
    ['O exequente pode requerer a alienação por iniciativa particular, por conta própria ou por corretor ou leiloeiro credenciado.', true, 'Correta. Art. 880 do CPC: frustrada ou não requerida a adjudicação, o exequente pode requerer a alienação por iniciativa particular; o leilão só ocorre se ela não se efetivar (art. 881).'],
    ['A execução deve ser extinta por falta de interessados.', false, 'Errada. A ausência de adjudicação apenas leva às formas seguintes de alienação (arts. 880 e 881).'],
    ['O bem deve ser devolvido a Vera, com levantamento da penhora.', false, 'Errada. A penhora subsiste e o bem segue para alienação (arts. 879 a 881 do CPC).']
  ] },
{ id: 'pc636', materia: 'processocivil', topico: 'pc-embargos-execucao',
  enunciado: 'Wagner foi citado em execução de título extrajudicial por oficial de justiça; o mandado foi juntado aos autos em 10 de março. Nenhum bem foi penhorado. Ele quer se defender. Assinale a afirmativa correta.',
  alt: [
    ['Wagner só pode embargar após a penhora, que garante o juízo.', false, 'Errada. Os embargos independem de penhora, depósito ou caução (art. 914 do CPC).'],
    ['Wagner pode opor embargos em 15 dias úteis, contados da juntada do mandado de citação, independentemente de penhora.', true, 'Correta. Arts. 914 e 915, combinados com o art. 231, II, do CPC.'],
    ['O prazo dos embargos é de 30 dias, contados da intimação da penhora.', false, 'Errada. 30 dias é o prazo da Fazenda (art. 910). A contagem a partir da intimação da penhora era do regime antigo; hoje conta da citação (art. 915).'],
    ['A defesa de Wagner deve ser apresentada por impugnação nos próprios autos.', false, 'Errada. Impugnação é a defesa no cumprimento de sentença (art. 525). Na execução de título extrajudicial, a defesa típica são os embargos, distribuídos por dependência (art. 914, §1º).']
  ] },
{ id: 'pc637', materia: 'processocivil', topico: 'pc-embargos-execucao',
  enunciado: 'Nos embargos à execução, Yara alegou apenas que o exequente cobra valor superior ao devido, sem indicar qual seria o valor correto nem juntar demonstrativo. Assinale a afirmativa correta.',
  alt: [
    ['O juiz deve determinar perícia contábil para apurar o valor correto.', false, 'Errada. Quem alega excesso tem o ônus de declarar o valor correto e apresentar demonstrativo (art. 917, §3º); a perícia não supre essa falta.'],
    ['Sendo o excesso o único fundamento, os embargos serão rejeitados liminarmente.', true, 'Correta. Art. 917, §4º, I, do CPC: sem a indicação do valor correto ou o demonstrativo, os embargos baseados só no excesso são rejeitados liminarmente; havendo outros fundamentos, o excesso não é examinado (inciso II).'],
    ['Os embargos devem prosseguir normalmente, pois o excesso é matéria de ordem pública.', false, 'Errada. A lei impõe ônus específico ao embargante (art. 917, §§3º e 4º).'],
    ['O juiz deve intimar o exequente para refazer os cálculos.', false, 'Errada. O ônus de apontar o valor correto é do embargante, não do exequente (art. 917, §3º).']
  ] },
{ id: 'pc638', materia: 'processocivil', topico: 'pc-embargos-execucao',
  enunciado: 'Zeca opôs embargos à execução e pediu que a execução ficasse suspensa até o julgamento. Ainda não há penhora, depósito ou caução nos autos. Assinale a afirmativa correta.',
  alt: [
    ['Os embargos suspendem automaticamente a execução.', false, 'Errada. Em regra, os embargos não têm efeito suspensivo (art. 919, caput, do CPC).'],
    ['O efeito suspensivo pode ser concedido se presentes os requisitos da tutela provisória e a execução estiver garantida por penhora, depósito ou caução suficientes.', true, 'Correta. Art. 919, §1º, do CPC: os requisitos são cumulativos; sem garantia, o pedido de Zeca não pode ser acolhido.'],
    ['Basta a garantia do juízo para que o efeito suspensivo seja concedido.', false, 'Errada. Além da garantia, é preciso demonstrar os requisitos da tutela provisória (art. 919, §1º).'],
    ['A concessão do efeito suspensivo impede a penhora e a avaliação de bens.', false, 'Errada. O efeito suspensivo não impede a penhora nem a avaliação (art. 919, §5º, do CPC).']
  ] }
);
