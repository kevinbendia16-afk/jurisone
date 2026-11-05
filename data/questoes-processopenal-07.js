/* Questões – lote processopenal-07: Prisões e medidas cautelares. */
window.QUESTOES.push(

  // === pp-flagrante ===
  { id: 'pp441', materia: 'processopenal', topico: 'pp-flagrante',
    enunciado: 'Durante uma ronda, policiais militares avistam Rodrigo furtando um veículo. Rodrigo percebe a viatura e foge a pé; os policiais iniciam perseguição imediata e ininterrupta, alcançando-o quatro quarteirões adiante. Sobre a situação de flagrância, assinale a afirmativa correta.',
    alt: [
      ['Trata-se de flagrante próprio, pois Rodrigo foi preso no exato momento da ação.', false, 'Errada. O flagrante próprio (art. 302, I e II) ocorre quando a pessoa está cometendo a infração ou acaba de cometê-la no local; aqui houve fuga e perseguição posterior.'],
      ['Trata-se de flagrante impróprio, pois Rodrigo foi perseguido logo após o crime em situação que faz presumir a autoria.', true, 'Correta. O flagrante impróprio, ou quase-flagrante, caracteriza-se pela perseguição logo após a infração, em situação que faça presumir ser o agente o autor (art. 302, III).'],
      ['Trata-se de flagrante presumido, pois Rodrigo foi encontrado com os objetos do crime.', false, 'Errada. O flagrante presumido (art. 302, IV) dispensa perseguição: a pessoa é apenas encontrada, logo depois, com os instrumentos ou objetos; no caso, houve perseguição ininterrupta.'],
      ['Não há flagrante, pois a perseguição fora do local do crime descaracteriza a situação de flagrância.', false, 'Errada. A perseguição logo após o crime mantém o flagrante válido, ainda que dure algum tempo e ocorra longe do local inicial (art. 302, III).']
    ] },

  { id: 'pp442', materia: 'processopenal', topico: 'pp-flagrante',
    enunciado: 'Desconfiando que Vanessa traficava drogas, policiais incumbiram um agente de se passar por comprador. Vanessa, que não negociava naquele momento, só entregou a droga porque foi insistentemente instigada pelo agente, enquanto a área já estava cercada de modo a impedir qualquer venda real. Sobre o flagrante, assinale a afirmativa correta.',
    alt: [
      ['O flagrante é válido, pois a polícia apenas aguardou o momento oportuno para a prisão.', false, 'Errada. Essa é a descrição do flagrante esperado, que é válido; no caso, o agente provocou o crime e impediu a consumação, o que configura flagrante preparado.'],
      ['O flagrante é preparado e, por tornar impossível a consumação, não há crime.', true, 'Correta. No flagrante preparado (provocado), o agente provocador induz o crime e, ao mesmo tempo, torna impossível sua consumação, caracterizando crime impossível (Súmula 145 do STF).'],
      ['O flagrante é forjado, pois os policiais plantaram a droga para incriminar Vanessa.', false, 'Errada. No flagrante forjado a prova é plantada e o fato sequer existiu; aqui houve conduta real de Vanessa, embora induzida, o que configura flagrante preparado.'],
      ['O flagrante é presumido, pois Vanessa foi encontrada com a droga logo após a oferta.', false, 'Errada. A questão não trata da classificação temporal do art. 302, mas da provocação policial; a hipótese é de flagrante preparado e crime impossível (Súmula 145 do STF).']
    ] },

  { id: 'pp443', materia: 'processopenal', topico: 'pp-flagrante',
    enunciado: 'Henrique foi preso em flagrante por crime cuja pena máxima é de 2 anos. Encaminhado o auto, realiza-se a audiência de custódia em 24 horas. O Ministério Público não requer a conversão em preventiva e não há representação da autoridade policial. Diante disso, o juiz deve:',
    alt: [
      ['converter o flagrante em prisão preventiva de ofício, se entender necessário à ordem pública.', false, 'Errada. Desde a Lei 13.964/19, o juiz não pode converter o flagrante em preventiva de ofício; é indispensável requerimento do MP ou representação da autoridade policial (art. 311 do CPP e Súmula 676 do STJ).'],
      ['manter a prisão em flagrante até o fim da instrução, independentemente de qualquer pedido.', false, 'Errada. O flagrante, por si só, não mantém a pessoa presa; ou é convertido em preventiva mediante pedido, ou se concede liberdade provisória (art. 310).'],
      ['conceder liberdade provisória, com ou sem fiança, por ausência de pedido de conversão em preventiva.', true, 'Correta. Sem requerimento do MP nem representação da autoridade policial, o juiz não pode converter de ofício (art. 311; Súmula 676 do STJ) e deve conceder liberdade provisória, com ou sem fiança (art. 310, III).'],
      ['relaxar a prisão, pois a ausência de pedido de preventiva torna o flagrante ilegal.', false, 'Errada. O relaxamento é cabível quando a prisão é ilegal (art. 310, I); a ausência de pedido de conversão não torna o flagrante ilegal, apenas impõe a concessão de liberdade provisória.']
    ] },

  // === pp-preventiva ===
  { id: 'pp444', materia: 'processopenal', topico: 'pp-preventiva',
    enunciado: 'O Ministério Público requer a prisão preventiva de Bruno, denunciado por furto simples, cuja pena máxima cominada é de 4 anos, invocando a garantia da ordem pública. Não há reincidência nem violência doméstica. Sobre o cabimento, assinale a afirmativa correta.',
    alt: [
      ['Cabe a preventiva, pois a garantia da ordem pública é fundamento suficiente em qualquer crime doloso.', false, 'Errada. O fundamento do art. 312 não dispensa a hipótese de cabimento do art. 313; em regra, a preventiva exige crime doloso com pena máxima superior a 4 anos.'],
      ['Não cabe a preventiva, pois o crime tem pena máxima de exatamente 4 anos, e não superior a 4 anos.', true, 'Correta. O art. 313, I, exige crime doloso com pena privativa de liberdade máxima SUPERIOR a 4 anos; pena de exatamente 4 anos não preenche a hipótese, e não há reincidência nem violência doméstica.'],
      ['Cabe a preventiva, pois o furto é crime doloso e isso basta para a hipótese do art. 313, I.', false, 'Errada. O art. 313, I, não se contenta com o crime ser doloso: a pena máxima deve ser superior a 4 anos.'],
      ['Não cabe a preventiva, pois ela jamais é admitida em crimes contra o patrimônio.', false, 'Errada. Não há vedação por tipo de bem jurídico; a preventiva seria admissível se a pena máxima fosse superior a 4 anos ou presente outra hipótese do art. 313.']
    ] },

  { id: 'pp445', materia: 'processopenal', topico: 'pp-preventiva',
    enunciado: 'Ao sentenciar sobre medidas cautelares, o juiz decreta de ofício a prisão preventiva de Carla, no curso do processo, sem requerimento do Ministério Público e sem representação da autoridade policial. Sobre a decretação, assinale a afirmativa correta.',
    alt: [
      ['É válida, pois o juiz pode decretar a preventiva de ofício no curso do processo.', false, 'Errada. Desde a Lei 13.964/19 (Pacote Anticrime), o juiz não pode decretar a preventiva de ofício em nenhuma fase; exige-se provocação (art. 311).'],
      ['É válida, pois a vedação à decretação de ofício só alcança a fase de investigação.', false, 'Errada. A vedação do art. 311 alcança qualquer fase, inclusive o curso do processo.'],
      ['É ilegal, pois a preventiva depende de requerimento do MP, do querelante ou do assistente, ou de representação da autoridade policial.', true, 'Correta. O art. 311 do CPP, com a redação do Pacote Anticrime, exige requerimento do MP, do querelante ou do assistente, ou representação da autoridade policial; não há preventiva de ofício.'],
      ['É válida, desde que o juiz fundamente a decisão na garantia da ordem pública.', false, 'Errada. A fundamentação é sempre necessária (art. 315), mas não supre a falta de pedido; sem provocação, a decretação de ofício é ilegal (art. 311).']
    ] },

  { id: 'pp446', materia: 'processopenal', topico: 'pp-preventiva',
    enunciado: 'Diego está preso preventivamente há cerca de cinco meses. O órgão que decretou a prisão não revisou, de ofício, a necessidade de mantê-la a cada 90 dias. Sobre essa omissão, assinale a afirmativa correta.',
    alt: [
      ['A omissão é irrelevante, pois a preventiva, uma vez decretada, dispensa qualquer revisão periódica.', false, 'Errada. O art. 316, parágrafo único, impõe ao órgão emissor revisar, de ofício, a necessidade da prisão a cada 90 dias, em decisão fundamentada.'],
      ['A omissão impõe a revisão periódica, mas, segundo o STF, não gera a soltura automática do preso.', true, 'Correta. O art. 316, parágrafo único, exige a revisão a cada 90 dias; o STF entende que a falta dessa revisão não gera soltura automática, devendo a omissão ser sanada mediante reavaliação fundamentada.'],
      ['A omissão torna a prisão nula desde a origem, com direito a indenização automática.', false, 'Errada. A falta de revisão não anula a prisão desde a origem; ela deve ser corrigida, sem soltura automática, conforme o STF.'],
      ['A omissão obriga o juiz a converter a preventiva em prisão temporária.', false, 'Errada. Não existe conversão de preventiva em temporária; a temporária só cabe na fase de inquérito. A omissão exige reavaliação da preventiva.']
    ] },

  // === pp-temporaria ===
  { id: 'pp447', materia: 'processopenal', topico: 'pp-temporaria',
    enunciado: 'A autoridade policial representa pela prisão temporária de um indiciado por homicídio doloso, alegando que a prisão é imprescindível às investigações e que o indiciado não tem residência fixa. Sobre o prazo da prisão temporária nesse caso, assinale a afirmativa correta.',
    alt: [
      ['O prazo é de 30 dias, prorrogável por mais 30, por se tratar de crime contra a vida.', false, 'Errada. O prazo de 30 + 30 dias é o dos crimes hediondos e equiparados; o homicídio doloso simples, fora as hipóteses de hediondez, segue a regra geral.'],
      ['O prazo é de 5 dias, prorrogável por mais 5 em caso de extrema e comprovada necessidade.', true, 'Correta. A regra geral da prisão temporária é de 5 dias, prorrogável por igual período em caso de extrema e comprovada necessidade (art. 2º da Lei 7.960/89).'],
      ['O prazo é de 10 dias improrrogáveis, contados da captura.', false, 'Errada. Não há prazo único de 10 dias improrrogáveis; são 5 dias prorrogáveis por mais 5 (art. 2º da Lei 7.960/89).'],
      ['O prazo é de 15 dias, prorrogável uma única vez por igual período.', false, 'Errada. Esse prazo não existe para a temporária; a regra comum é 5 + 5 dias (art. 2º da Lei 7.960/89).']
    ] },

  { id: 'pp448', materia: 'processopenal', topico: 'pp-temporaria',
    enunciado: 'Preso temporariamente por tráfico de drogas, crime equiparado a hediondo, Lucas completa o prazo total de sua prisão temporária sem que tenha sido decretada qualquer outra prisão. Sobre a providência cabível, assinale a afirmativa correta.',
    alt: [
      ['Lucas só pode ser solto após a expedição de alvará de soltura pelo juiz.', false, 'Errada. Findo o prazo, a soltura é imediata e independe de alvará, salvo se houver preventiva por outro motivo (art. 2º, §7º, da Lei 7.960/89).'],
      ['Lucas deve ser posto imediatamente em liberdade, independentemente de alvará de soltura, salvo preventiva decretada por outro fundamento.', true, 'Correta. Decorrido o prazo, o preso deve ser posto imediatamente em liberdade, independentemente de alvará, salvo se já decretada a prisão preventiva por outro fundamento (art. 2º, §7º, da Lei 7.960/89).'],
      ['A prisão temporária se converte automaticamente em prisão preventiva ao fim do prazo.', false, 'Errada. Não há conversão automática; para manter alguém preso depois da temporária é preciso decretar preventiva, com seus próprios requisitos.'],
      ['O prazo pode ser prorrogado indefinidamente enquanto durar a investigação.', false, 'Errada. Nos crimes hediondos a temporária dura 30 dias, prorrogável por mais 30; não há prorrogação indefinida.']
    ] },

  { id: 'pp449', materia: 'processopenal', topico: 'pp-temporaria',
    enunciado: 'O juiz, ao ler reportagens sobre uma extorsão mediante sequestro, decide decretar a prisão temporária do suspeito por conta própria, sem representação da autoridade policial e sem requerimento do Ministério Público. Sobre essa decretação, assinale a afirmativa correta.',
    alt: [
      ['É válida, pois o juiz pode decretar a prisão temporária de ofício em crimes graves.', false, 'Errada. A prisão temporária nunca pode ser decretada de ofício; depende de representação da autoridade policial ou de requerimento do MP (art. 2º da Lei 7.960/89).'],
      ['É válida, pois a extorsão mediante sequestro integra o rol de crimes que admitem a temporária.', false, 'Errada. Embora o crime integre o rol (art. 1º, III), falta o pressuposto de pedido; sem representação policial ou requerimento do MP, não há temporária de ofício.'],
      ['É ilegal, pois a prisão temporária depende de representação da autoridade policial ou de requerimento do Ministério Público.', true, 'Correta. A prisão temporária só pode ser decretada mediante representação da autoridade policial ou requerimento do Ministério Público; não há decretação de ofício (art. 2º da Lei 7.960/89).'],
      ['É ilegal, pois a prisão temporária só pode ser decretada no curso do processo penal.', false, 'Errada. A temporária só cabe na fase de inquérito, não no processo; o vício, porém, está na decretação de ofício, vedada pela lei.']
    ] },

  // === pp-domiciliar ===
  { id: 'pp450', materia: 'processopenal', topico: 'pp-domiciliar',
    enunciado: 'Letícia, gestante, é presa preventivamente por furto praticado sem violência ou grave ameaça a pessoa. A defesa requer a substituição da preventiva por prisão domiciliar. Sobre o pedido, assinale a afirmativa correta.',
    alt: [
      ['A substituição é mera faculdade do juiz, que pode indeferi-la livremente.', false, 'Errada. No art. 318-A a substituição da preventiva da gestante por domiciliar é a regra ("será substituída"), salvo as exceções legais; a faculdade ("poderá") é a do art. 318.'],
      ['A substituição por prisão domiciliar é a regra e deve ser deferida, pois não há violência, grave ameaça nem crime contra o próprio filho.', true, 'Correta. O art. 318-A determina a substituição da preventiva da gestante por domiciliar, salvo crime com violência ou grave ameaça à pessoa ou contra o próprio filho ou dependente; nenhuma exceção incide.'],
      ['A substituição é vedada, pois a prisão domiciliar só é cabível para maiores de 80 anos.', false, 'Errada. A idade de 80 anos é apenas uma das hipóteses do art. 318, I; a gestante tem regra própria e mais favorável no art. 318-A.'],
      ['A substituição só caberia se Letícia fosse condenada e cumprisse pena em regime aberto.', false, 'Errada. Essa é a domiciliar da execução penal (art. 117 da LEP); o caso é de domiciliar cautelar, que substitui a preventiva de quem ainda não foi condenada (arts. 318 e 318-A do CPP).']
    ] },

  { id: 'pp451', materia: 'processopenal', topico: 'pp-domiciliar',
    enunciado: 'Seu Joaquim, com 72 anos de idade, já foi condenado e cumpre pena em regime aberto. Diante de sua idade, requer prisão domiciliar. Sobre o fundamento desse pedido, assinale a afirmativa correta.',
    alt: [
      ['O pedido se baseia no art. 318 do CPP, que exige idade superior a 80 anos.', false, 'Errada. O art. 318 do CPP trata da domiciliar cautelar, que substitui a preventiva, e exige mais de 80 anos; o caso é de condenado em regime aberto, regido pela LEP.'],
      ['O pedido se baseia no art. 117 da Lei de Execução Penal, cabível ao condenado em regime aberto maior de 70 anos.', true, 'Correta. A domiciliar da execução penal (art. 117 da LEP) cabe ao condenado em regime aberto que seja maior de 70 anos, entre outras hipóteses; os requisitos diferem dos da domiciliar cautelar do CPP.'],
      ['O pedido é incabível, pois a prisão domiciliar não existe para quem já foi condenado.', false, 'Errada. A prisão domiciliar da execução penal existe justamente para o condenado em regime aberto, nas hipóteses do art. 117 da LEP.'],
      ['O pedido se baseia no art. 318-A do CPP, aplicável a qualquer pessoa idosa.', false, 'Errada. O art. 318-A trata da gestante e da mãe de criança de até 12 anos na fase cautelar; não é a base para o condenado idoso em regime aberto.']
    ] },

  { id: 'pp452', materia: 'processopenal', topico: 'pp-domiciliar',
    enunciado: 'Ao substituir a prisão preventiva de Fábio por prisão domiciliar, o juiz pretende manter alguma fiscalização sobre ele. Sobre a possibilidade de impor monitoração eletrônica, assinale a afirmativa correta.',
    alt: [
      ['Não é possível, pois a prisão domiciliar e a monitoração eletrônica são medidas incompatíveis entre si.', false, 'Errada. O art. 318-B autoriza que a substituição por domiciliar seja cumulada com as medidas cautelares diversas do art. 319, entre elas a monitoração eletrônica.'],
      ['É possível cumular a prisão domiciliar com a monitoração eletrônica, que é medida cautelar diversa da prisão.', true, 'Correta. A monitoração eletrônica é medida cautelar diversa da prisão (art. 319, IX, do CPP) e pode ser cumulada com a prisão domiciliar (art. 318-B).'],
      ['A monitoração eletrônica é uma espécie de prisão e, por isso, não pode acompanhar a domiciliar.', false, 'Errada. A monitoração eletrônica não é prisão, mas instrumento de fiscalização; é medida cautelar diversa (art. 319, IX) e pode acompanhar a domiciliar.'],
      ['A monitoração eletrônica só pode ser usada na execução penal, nunca na fase cautelar.', false, 'Errada. A monitoração eletrônica é cabível tanto como medida cautelar diversa (art. 319, IX, do CPP) quanto na execução penal (art. 146-B da LEP).']
    ] }

);
