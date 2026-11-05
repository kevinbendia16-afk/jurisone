/* Questões – lote penal-01. */
window.QUESTOES.push(
{ id: 'pe321', materia: 'penal', topico: 'pe-conceito',
  enunciado: 'A Assembleia Legislativa do Estado Alfa aprovou lei estadual que tipifica como crime, punido com detenção, a conduta de pichar prédios tombados pelo patrimônio histórico estadual. Não existe lei complementar federal autorizando o Estado a legislar sobre o tema. Sobre essa lei, assinale a afirmativa correta.',
  alt: [
    ['É válida, pois os Estados têm competência concorrente para legislar sobre proteção do patrimônio histórico, inclusive em matéria penal.', false, 'Errada. A competência concorrente sobre patrimônio histórico (art. 24, VII, da CF) não alcança o direito penal, que é competência privativa da União (art. 22, I, da CF).'],
    ['É formalmente inconstitucional, pois compete privativamente à União legislar sobre direito penal.', true, 'Correta. A fonte material do Direito Penal é a União (art. 22, I, da CF). Sem lei complementar federal autorizando o Estado (art. 22, parágrafo único), a lei estadual não pode criar crime.'],
    ['É válida apenas se o Governador a regulamentar por decreto, definindo a pena.', false, 'Errada. Decreto não cria nem completa pena; a reserva legal penal é absoluta (art. 5º, XXXIX, da CF e art. 1º do CP), e o vício está na competência.'],
    ['É válida, desde que a pena prevista seja apenas de multa.', false, 'Errada. O tipo de pena não muda a competência: qualquer norma penal incriminadora é da União (art. 22, I, da CF).']
  ] },
{ id: 'pe322', materia: 'penal', topico: 'pe-conceito',
  enunciado: 'Durante grave crise, o Presidente da República editou medida provisória aumentando a pena do crime de receptação. Lúcio praticou receptação durante a vigência da medida provisória. Na sentença, o juiz deverá:',
  alt: [
    ['aplicar a pena aumentada, pois a medida provisória tem força de lei desde a edição.', false, 'Errada. Embora tenha força de lei, a MP não pode tratar de direito penal (art. 62, §1º, I, "b", da CF).'],
    ['aplicar a pena aumentada apenas se a medida provisória tiver sido convertida em lei antes da sentença.', false, 'Errada. A vedação é à edição da MP em matéria penal; ela não poderia alterar a pena do fato praticado por Lúcio, que se rege pela lei anterior.'],
    ['aplicar a pena original do Código Penal, pois é vedada a edição de medida provisória sobre direito penal.', true, 'Correta. O art. 62, §1º, I, "b", da CF proíbe medida provisória sobre direito penal, e a pena só pode ser cominada por lei anterior (art. 1º do CP).'],
    ['aplicar a média entre a pena original e a pena aumentada.', false, 'Errada. Não existe critério de "média" entre leis; além disso, é vedada a combinação de normas penais para criar uma terceira (Súmula 501 do STJ, por analogia de raciocínio).']
  ] },
{ id: 'pe323', materia: 'penal', topico: 'pe-conceito',
  enunciado: 'Na sentença condenatória, o juiz afirmou que fixava a pena "conforme necessário e suficiente para a reprovação e a prevenção do crime", nos termos do art. 59 do Código Penal. Sobre a finalidade da pena adotada por esse dispositivo, assinale a afirmativa correta.',
  alt: [
    ['O Código Penal adota a teoria absoluta, segundo a qual a pena é apenas retribuição pelo mal praticado.', false, 'Errada. A menção à prevenção mostra que o CP não se limita à retribuição.'],
    ['O Código Penal adota a teoria relativa pura, que nega qualquer caráter retributivo à pena.', false, 'Errada. A palavra "reprovação" traduz a ideia retributiva, que convive com a prevenção.'],
    ['O Código Penal adota a teoria mista ou unificadora, que combina retribuição e prevenção.', true, 'Correta. O art. 59 do CP fala em reprovação (retribuição) e prevenção, o que caracteriza a teoria mista; a LEP soma a finalidade de integração social (art. 1º da Lei 7.210/84).'],
    ['O Código Penal adota a teoria do Direito Penal do inimigo, voltada à neutralização do autor perigoso.', false, 'Errada. O Direito Penal do inimigo (Jakobs) é criticado por flexibilizar garantias e não foi adotado pelo CP, que segue o Direito Penal do fato.']
  ] },
{ id: 'pe324', materia: 'penal', topico: 'pe-legalidade',
  enunciado: 'Clara foi presa em fevereiro guardando em casa certa substância para venda. Na data do fato, a substância não constava da lista de drogas proscritas da Anvisa, que complementa a Lei 11.343/06. Em abril, a Anvisa incluiu a substância na lista. Sobre a situação, assinale a afirmativa correta.',
  alt: [
    ['Clara responde por tráfico, pois a lei penal em branco pode ser completada a qualquer tempo pelo órgão técnico.', false, 'Errada. O complemento integra o tipo; aplicá-lo a fato anterior equivaleria a retroagir norma incriminadora, o que o art. 5º, XL, da CF proíbe.'],
    ['Clara não responde por tráfico, pois a conduta era atípica na data do fato e a norma mais grave não retroage.', true, 'Correta. A Lei de Drogas é lei penal em branco heterogênea (complementada pela Portaria SVS/MS 344/98). Sem a substância na lista na data do fato, não havia crime (art. 1º do CP e art. 5º, XL, da CF).'],
    ['Clara responde por tráfico, pois a Lei de Drogas é lei penal em branco ao revés, cuja pena é fixada pela Anvisa.', false, 'Errada. Na lei em branco ao revés falta a pena, não a conduta; e a pena nunca pode ser fixada por ato administrativo. A Lei de Drogas é em branco heterogênea.'],
    ['Clara responde por tráfico, pois a Lei de Drogas é lei temporária e, por isso, ultrativa.', false, 'Errada. A Lei de Drogas não é temporária nem excepcional (art. 3º do CP); e ultratividade diz respeito a fatos praticados durante a vigência da lei, não a fatos anteriores ao complemento.']
  ] },
{ id: 'pe325', materia: 'penal', topico: 'pe-legalidade',
  enunciado: 'Em 5 de janeiro, Fausto sequestrou Gilberto para exigir resgate da família e o manteve em cativeiro até 20 de março, quando foi preso. Em 1º de março entrou em vigor lei que aumentou a pena do crime de extorsão mediante sequestro. Sobre a lei aplicável, assinale a afirmativa correta.',
  alt: [
    ['Aplica-se a lei anterior, pois o crime começou antes da lei nova, e a lei mais grave não retroage.', false, 'Errada. Não se trata de retroatividade: o crime permanente continuava sendo praticado quando a lei nova entrou em vigor.'],
    ['Aplica-se a lei nova, mais grave, pois sua vigência é anterior à cessação da permanência.', true, 'Correta. A extorsão mediante sequestro (art. 159 do CP) é crime permanente, e a Súmula 711 do STF manda aplicar a lei mais grave se ela entrar em vigor antes de cessar a permanência.'],
    ['O juiz deve combinar as duas leis, aplicando a parte mais favorável de cada uma.', false, 'Errada. A combinação de leis é vedada pela jurisprudência (Súmula 501 do STJ).'],
    ['Aplica-se a lei anterior, pois a lei penal só se aplica a crimes iniciados após sua publicação.', false, 'Errada. A regra não considera o início, mas o momento em que o crime ainda está sendo praticado; no crime permanente, a consumação se prolonga (Súmula 711 do STF).']
  ] },
{ id: 'pe326', materia: 'penal', topico: 'pe-legalidade',
  enunciado: 'Para enfrentar uma epidemia, foi editada lei que, por 180 dias, puniu com pena maior a venda de insumos médicos por preço abusivo. Heitor praticou a conduta no 40º dia de vigência. A sentença foi proferida após o fim do prazo da lei. Assinale a afirmativa correta.',
  alt: [
    ['Heitor deve ser absolvido, pois a lei já perdeu vigência, o que equivale a abolitio criminis.', false, 'Errada. O fim do prazo da lei temporária não é abolitio criminis; o art. 3º do CP manda aplicá-la aos fatos praticados durante sua vigência.'],
    ['Heitor deve ser punido com base na lei temporária, que é ultrativa quanto aos fatos praticados durante sua vigência.', true, 'Correta. A lei temporária, embora decorrido o período de sua duração, aplica-se ao fato praticado durante sua vigência (art. 3º do CP).'],
    ['Heitor deve ser punido pela lei temporária apenas se a sentença transitar em julgado antes do fim do prazo.', false, 'Errada. O art. 3º do CP não exige julgamento dentro do prazo; basta que o fato tenha sido praticado durante a vigência.'],
    ['Heitor deve ser punido, mas o juiz deve aplicar a lei geral posterior, por ser mais benéfica.', false, 'Errada. A retroatividade benéfica (art. 2º do CP) não alcança os fatos regidos por lei temporária ou excepcional, justamente por causa do art. 3º.']
  ] },
{ id: 'pe327', materia: 'penal', topico: 'pe-intervencao',
  enunciado: 'Um professor explicou aos alunos que o Direito Penal só deve ser chamado a atuar quando os demais ramos do ordenamento, como o civil e o administrativo, se mostrarem insuficientes para proteger o bem jurídico, funcionando como um "soldado de reserva". O professor descreveu o princípio da:',
  alt: [
    ['fragmentariedade.', false, 'Errada. A fragmentariedade diz QUAIS bens e ataques interessam ao Direito Penal (só os mais relevantes e graves); a ideia de último recurso diante de outros ramos é a subsidiariedade.'],
    ['subsidiariedade.', true, 'Correta. A subsidiariedade, desdobramento da intervenção mínima, determina que o Direito Penal só atue quando os outros ramos falharem: é o "soldado de reserva".'],
    ['adequação social.', false, 'Errada. A adequação social (Welzel) afasta a tipicidade de condutas aceitas socialmente; não trata da relação entre ramos do Direito.'],
    ['legalidade.', false, 'Errada. A legalidade exige lei anterior que defina crime e pena (art. 1º do CP), mas não diz quando o Direito Penal deve ser usado diante dos outros ramos.']
  ] },
{ id: 'pe328', materia: 'penal', topico: 'pe-intervencao',
  enunciado: 'Isadora, ao manobrar seu carro na garagem do condomínio, sem atenção, bateu e danificou o portão de um vizinho. O vizinho registrou ocorrência pedindo que ela fosse processada criminalmente por dano. Sobre o caso, assinale a afirmativa correta.',
  alt: [
    ['Isadora responde por dano culposo, com pena reduzida.', false, 'Errada. O Código Penal não prevê dano culposo; o art. 163 só pune o dano doloso.'],
    ['Isadora responde por dano simples, pois o dano ao patrimônio dispensa a análise do dolo.', false, 'Errada. Não existe responsabilidade penal objetiva; sem dolo, e sem previsão da forma culposa (art. 18, parágrafo único, do CP), não há crime.'],
    ['Não há crime, pois o dano culposo não é previsto no Código Penal, restando a responsabilidade civil, o que expressa a fragmentariedade do Direito Penal.', true, 'Correta. O crime culposo exige previsão expressa (art. 18, parágrafo único, do CP), e o art. 163 só traz o dano doloso. O Direito Penal protege apenas fragmentos; o prejuízo é resolvido no cível.'],
    ['Há crime de dano qualificado, pois o bem pertencia a condomínio.', false, 'Errada. As qualificadoras do art. 163, parágrafo único, pressupõem o dano doloso e não incluem bem de condomínio residencial.']
  ] },
{ id: 'pe329', materia: 'penal', topico: 'pe-intervencao',
  enunciado: 'Jonas, em profunda crise, tentou suicídio, mas foi socorrido a tempo. Descobriu-se que Kátia, por mensagens, o havia instigado a se matar. Sobre a responsabilidade penal, assinale a afirmativa correta.',
  alt: [
    ['Jonas e Kátia respondem pelo crime do art. 122 do CP, em concurso de pessoas.', false, 'Errada. A autolesão e a tentativa de suicídio não são punidas, em razão do princípio da ofensividade (não se pune conduta que não excede o próprio autor).'],
    ['Apenas Kátia pode responder pelo crime de induzimento, instigação ou auxílio a suicídio ou a automutilação; Jonas não comete crime.', true, 'Correta. O art. 122 do CP pune quem induz, instiga ou auxilia; a tentativa de suicídio, por atingir só o próprio agente, não é crime, conforme a ofensividade.'],
    ['Nenhum deles comete crime, pois o suicídio não se consumou.', false, 'Errada. Desde a Lei 13.968/19, o art. 122 do CP pune a instigação independentemente da morte, com penas maiores se resultar lesão grave ou morte (§§1º e 2º).'],
    ['Apenas Jonas responde, por tentativa de homicídio contra si mesmo.', false, 'Errada. Homicídio exige matar "alguém", ou seja, outra pessoa (art. 121 do CP); a autolesão não é punida.']
  ] },
{ id: 'pe330', materia: 'penal', topico: 'pe-insignificancia',
  enunciado: 'Leandro, primário e sem antecedentes, subtraiu, sem violência, dois pacotes de biscoito avaliados em R$ 9,00 de uma grande rede de supermercados. Denunciado por furto simples, a defesa sustenta a aplicação do princípio da insignificância. Caso acolhida a tese, o juiz deverá:',
  alt: [
    ['condenar Leandro, mas reconhecer o furto privilegiado e aplicar somente multa.', false, 'Errada. O furto privilegiado (art. 155, §2º, do CP) pressupõe que haja crime; se a insignificância é acolhida, o fato é atípico e não há condenação.'],
    ['absolver Leandro, pois a insignificância exclui a ilicitude da conduta.', false, 'Errada. A insignificância não é excludente de ilicitude (como as do art. 23 do CP), mas de tipicidade material.'],
    ['absolver Leandro, pois a insignificância afasta a tipicidade material, de modo que o fato não constitui crime.', true, 'Correta. Presentes os quatro vetores do STF (HC 84.412), exclui-se a tipicidade material, e a absolvição se funda no art. 386, III, do CPP.'],
    ['extinguir a punibilidade de Leandro, por perdão judicial.', false, 'Errada. O perdão judicial (art. 107, IX, do CP) só cabe nos casos previstos em lei e pressupõe crime; a insignificância leva à atipicidade.']
  ] },
{ id: 'pe331', materia: 'penal', topico: 'pe-insignificancia',
  enunciado: 'Marcelo, em discussão com a esposa dentro de casa, empurrou-a, causando-lhe pequena escoriação no braço. Processado, a defesa pede o reconhecimento da insignificância, diante da lesão mínima. Segundo a jurisprudência do STJ, assinale a afirmativa correta.',
  alt: [
    ['Aplica-se a insignificância, pois a lesão foi levíssima e não deixou sequelas.', false, 'Errada. A gravidade mínima da lesão não basta nesse contexto: a Súmula 589 do STJ veda a insignificância na violência doméstica contra a mulher.'],
    ['Aplica-se a insignificância apenas se a vítima se reconciliar com o agressor.', false, 'Errada. A reconciliação não interfere; a Súmula 589 do STJ afasta a insignificância nesses crimes, que envolvem proteção especial da Lei 11.340/06.'],
    ['Não se aplica a insignificância aos crimes ou contravenções praticados contra a mulher no âmbito das relações domésticas.', true, 'Correta. É o teor da Súmula 589 do STJ, fundada na proteção especial da Lei Maria da Penha e na proibição de proteção deficiente.'],
    ['Aplica-se a bagatela imprópria obrigatoriamente, por se tratar de réu primário.', false, 'Errada. A bagatela imprópria é excepcional, depende das circunstâncias concretas e não é automática pela primariedade; além disso, a orientação do STJ nesse contexto é de afastar a bagatela.']
  ] },
{ id: 'pe332', materia: 'penal', topico: 'pe-insignificancia',
  enunciado: 'Natália, ao voltar do exterior, foi flagrada trazendo mercadorias lícitas sem pagar os tributos devidos, deixando de recolher R$ 6.000,00 em impostos. Primária, foi denunciada por descaminho. Segundo a jurisprudência dos tribunais superiores, assinale a afirmativa correta.',
  alt: [
    ['Não se aplica a insignificância, pois a Súmula 599 do STJ a veda em todos os crimes contra a Administração Pública, sem exceção.', false, 'Errada. O próprio STJ excepciona o descaminho da Súmula 599, por se tratar de crime de natureza tributária.'],
    ['Aplica-se a insignificância, pois o tributo iludido não ultrapassa R$ 20.000,00, patamar adotado pelos tribunais superiores.', true, 'Correta. STF e STJ admitem a insignificância no descaminho (art. 334 do CP) quando o tributo não ultrapassa R$ 20.000,00, com base nas Portarias 75 e 130/2012 do Ministério da Fazenda (STJ, Tema 157).'],
    ['Aplica-se a insignificância apenas se o valor for inferior a 10% do salário mínimo.', false, 'Errada. A referência de cerca de 10% do salário mínimo é usada pelo STJ no furto; no descaminho o parâmetro é o valor do tributo, até R$ 20.000,00.'],
    ['Não se aplica a insignificância, pois o descaminho é equiparado ao contrabando.', false, 'Errada. São crimes distintos: o descaminho (art. 334) envolve mercadoria lícita e lesão tributária; o contrabando (art. 334-A) envolve mercadoria proibida e, em regra, não admite insignificância.']
  ] },
{ id: 'pe333', materia: 'penal', topico: 'pe-interpretacao',
  enunciado: 'Otávio matou a vítima liberando gás tóxico, sem cheiro, no quarto em que ela dormia. O art. 121, §2º, III, do CP qualifica o homicídio praticado com emprego de "veneno, fogo, explosivo, asfixia, tortura ou outro meio insidioso ou cruel". Ao reconhecer a qualificadora, o juiz utilizou:',
  alt: [
    ['analogia in malam partem, vedada no Direito Penal.', false, 'Errada. Não houve analogia: a própria lei previu a fórmula genérica "outro meio insidioso ou cruel", e não há lacuna a ser preenchida.'],
    ['interpretação analógica, admitida mesmo em prejuízo do réu, pois foi autorizada pela própria lei.', true, 'Correta. A interpretação analógica (intra legem) ocorre quando a lei traz exemplos seguidos de fórmula genérica; o juiz apenas cumpre o comando legal (art. 121, §2º, III, do CP).'],
    ['interpretação autêntica contextual.', false, 'Errada. Interpretação autêntica é a definição dada pelo próprio legislador (como no art. 327 do CP); aqui o juiz é quem interpretou a fórmula genérica.'],
    ['analogia in bonam partem.', false, 'Errada. A qualificadora prejudica o réu, e não se trata de analogia, mas de interpretação analógica.']
  ] },
{ id: 'pe334', materia: 'penal', topico: 'pe-interpretacao',
  enunciado: 'Priscila vive em união estável com Rodrigo há oito anos. Sem violência ou grave ameaça, Rodrigo subtraiu joias de Priscila, que tem 45 anos. O art. 181, I, do CP isenta de pena quem comete crime patrimonial em prejuízo do cônjuge, na constância da sociedade conjugal, sem mencionar o companheiro. Segundo a doutrina majoritária, assinale a afirmativa correta.',
  alt: [
    ['Rodrigo responde normalmente pelo furto, pois a analogia é vedada no Direito Penal.', false, 'Errada. Só é vedada a analogia contra o réu; a analogia in bonam partem é admitida quando há lacuna involuntária.'],
    ['Rodrigo é isento de pena, por aplicação analógica do art. 181, I, do CP em favor do réu, já que a Constituição reconhece a união estável como entidade familiar.', true, 'Correta. A extensão da escusa absolutória ao companheiro é analogia in bonam partem, aceita pela doutrina majoritária (art. 181, I, do CP e art. 226, §3º, da CF).'],
    ['Rodrigo responde pelo furto, com pena reduzida pela metade, por ser companheiro.', false, 'Errada. Não existe essa redução; a relação de parentesco pode gerar isenção (art. 181) ou ação penal condicionada à representação (art. 182), conforme o caso.'],
    ['Rodrigo não pode ser beneficiado, pois o art. 183 do CP exclui as escusas quando a vítima é mulher.', false, 'Errada. O art. 183 exclui as escusas no roubo, na extorsão, nos crimes com violência ou grave ameaça, para o estranho que participa do crime e quando a vítima tem 60 anos ou mais; não menciona a condição de mulher.']
  ] },
{ id: 'pe335', materia: 'penal', topico: 'pe-interpretacao',
  enunciado: 'Em uma aula, o professor afirmou: "A Exposição de Motivos do Código Penal é exemplo de interpretação autêntica, pois foi elaborada junto com o Código." Sobre essa afirmação e sobre a interpretação da lei penal, assinale a afirmativa correta.',
  alt: [
    ['A afirmação está certa, pois toda explicação contemporânea à lei é autêntica.', false, 'Errada. Autêntica é a interpretação feita pelo próprio legislador, em texto de lei; o momento da elaboração não basta.'],
    ['A afirmação está errada, pois a Exposição de Motivos, não votada pelo Poder Legislativo, é interpretação doutrinária; é exemplo de interpretação autêntica contextual o conceito de funcionário público do art. 327 do CP.', true, 'Correta. A Exposição de Motivos foi escrita pelos autores do projeto e não foi aprovada pelo Congresso, por isso é doutrinária; já o art. 327 do CP é o legislador definindo, no próprio Código, o sentido do termo.'],
    ['A afirmação está errada, pois a Exposição de Motivos é interpretação judicial.', false, 'Errada. Interpretação judicial é a feita pelos juízes nas decisões; a Exposição de Motivos é obra dos juristas que elaboraram o projeto.'],
    ['A afirmação está certa, e a interpretação autêntica posterior pode retroagir para prejudicar o réu.', false, 'Errada. Além de a premissa estar errada, a lei interpretativa posterior não pode prejudicar o réu por fatos anteriores, sob pena de violar a irretroatividade da lei mais grave (art. 5º, XL, da CF).']
  ] }
);
