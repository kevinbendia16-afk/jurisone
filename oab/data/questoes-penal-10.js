/* Questões – lote penal-10 (Penas). */
window.QUESTOES.push(
{ id: 'pe501', materia: 'penal', topico: 'pe-ppl',
  enunciado: 'Rodrigo, primário e com todas as circunstâncias judiciais favoráveis, foi condenado a 5 anos de detenção. O juiz fixou o regime inicial fechado. Como advogado de Rodrigo, assinale a afirmativa correta.',
  alt: [
    ['O regime está correto, pois a pena supera 4 anos.', false, 'Errada. Pena acima de 4 anos não leva automaticamente ao fechado; além disso, a detenção nunca começa no fechado (art. 33, caput, do CP).'],
    ['O regime deve ser alterado, pois a pena de detenção não admite regime inicial fechado, sendo cabível o semiaberto.', true, 'Correta. A detenção é cumprida em regime semiaberto ou aberto, salvo necessidade de transferência ao fechado por regressão; para primário com pena entre 4 e 8 anos, cabe o semiaberto (art. 33, caput e §2º, "b", do CP).'],
    ['O regime deve ser alterado para o aberto, pois a pena de detenção sempre começa no aberto.', false, 'Errada. A detenção pode começar no semiaberto; o aberto, para o primário, exige pena igual ou inferior a 4 anos (art. 33, §2º, "c", do CP).'],
    ['O regime está correto, pois o juiz pode fixar qualquer regime para a detenção, desde que fundamente.', false, 'Errada. O fechado só é alcançado pela detenção por regressão, nunca como regime inicial (art. 33, caput, do CP).']
  ] },
{ id: 'pe502', materia: 'penal', topico: 'pe-ppl',
  enunciado: 'Sabrina, primária, foi condenada por roubo simples a 6 anos de reclusão, com pena-base fixada no mínimo legal. O juiz impôs o regime inicial fechado afirmando apenas que o roubo é crime grave que gera intranquilidade social. Assinale a afirmativa correta.',
  alt: [
    ['A decisão é válida, pois o roubo é praticado com grave ameaça.', false, 'Errada. A grave ameaça é elementar do roubo e já está considerada na pena cominada; não justifica, sozinha, regime mais severo (Súmula 718 do STF).'],
    ['A decisão é válida, pois o regime é escolhido livremente pelo juiz.', false, 'Errada. O regime segue os critérios do art. 33, §§2º e 3º, do CP, e a imposição de regime mais severo exige motivação idônea (Súmula 719 do STF).'],
    ['A decisão deve ser reformada para o regime aberto.', false, 'Errada. Pena superior a 4 anos não permite o aberto; o regime adequado ao primário com pena entre 4 e 8 anos é o semiaberto (art. 33, §2º, "b", do CP).'],
    ['A decisão deve ser reformada para o regime semiaberto, pois a gravidade abstrata do delito não justifica regime mais gravoso quando a pena-base está no mínimo.', true, 'Correta. Fixada a pena-base no mínimo, é vedado regime mais gravoso com base na gravidade abstrata (Súmula 440 do STJ e Súmulas 718 e 719 do STF); cabe o semiaberto (art. 33, §2º, "b", do CP).']
  ] },
{ id: 'pe503', materia: 'penal', topico: 'pe-ppl',
  enunciado: 'Teobaldo foi condenado, em processos diferentes, a penas que somam 110 anos de reclusão por crimes cometidos antes do início do cumprimento. Ao requerer a progressão de regime, sua defesa sustentou que o cálculo deveria ser feito sobre o limite legal de cumprimento. Sobre o tema, assinale a afirmativa correta.',
  alt: [
    ['As penas são unificadas para atender ao limite de 40 anos, mas a progressão é calculada sobre a pena total aplicada.', true, 'Correta. O tempo máximo de cumprimento é de 40 anos (art. 75 do CP, com redação da Lei 13.964/19), mas essa unificação não é considerada para benefícios como a progressão (Súmula 715 do STF).'],
    ['As penas são unificadas em 30 anos, e a progressão é calculada sobre esse limite.', false, 'Errada. O limite passou a 40 anos com o Pacote Anticrime, e os benefícios são calculados sobre a pena total (art. 75 do CP e Súmula 715 do STF).'],
    ['As penas são unificadas em 40 anos, e a progressão é calculada sobre os 40 anos.', false, 'Errada. A Súmula 715 do STF afasta a unificação para o cálculo dos benefícios, que usam a pena total.'],
    ['Não há limite de cumprimento quando as penas resultam de processos diferentes.', false, 'Errada. O art. 75, §1º, do CP manda unificar penas que ultrapassem 40 anos, inclusive de processos diferentes.']
  ] },
{ id: 'pe504', materia: 'penal', topico: 'pe-progressao',
  enunciado: 'Valdemar, que tinha condenação definitiva anterior por furto, foi condenado por latrocínio consumado, praticado em 2023, a 24 anos de reclusão. Sua defesa quer saber o percentual de pena exigido para a progressão de regime. Assinale a afirmativa correta.',
  alt: [
    ['70%, pois ele é reincidente e o crime é hediondo com resultado morte.', false, 'Errada. O percentual de 70% exige reincidência em crime hediondo ou equiparado com resultado morte (art. 112, VIII, da LEP); a reincidência de Valdemar é em crime comum.'],
    ['60%, pois ele é reincidente e o crime é hediondo.', false, 'Errada. Os 60% exigem reincidência em crime hediondo ou equiparado (art. 112, VII, da LEP), o que não ocorre.'],
    ['50%, aplicando-se o percentual do primário em hediondo com resultado morte, vedado o livramento condicional.', true, 'Correta. Na falta de previsão para o reincidente não específico, aplica-se o percentual do primário, vedada a analogia contra o réu (Tema 1084 do STJ): 50%, com vedação do livramento (art. 112, VI, "a", da LEP).'],
    ['40%, pois a reincidência em crime comum não pode ser considerada.', false, 'Errada. O percentual de 40% é para hediondo sem resultado morte (art. 112, V, da LEP); o latrocínio tem resultado morte.']
  ] },
{ id: 'pe505', materia: 'penal', topico: 'pe-progressao',
  enunciado: 'Wanderley cumpre pena em regime semiaberto. Após procedimento administrativo disciplinar com defesa técnica, foi reconhecida falta grave consistente em fuga. A respeito dos efeitos dessa falta, assinale a afirmativa correta.',
  alt: [
    ['Interrompe o prazo para progressão de regime e também o prazo para o livramento condicional.', false, 'Errada. A falta grave não interrompe o prazo para o livramento condicional (Súmula 441 do STJ).'],
    ['Interrompe o prazo para progressão de regime, reiniciando-se a contagem com base na pena remanescente, mas não interrompe o prazo para o livramento condicional.', true, 'Correta. É o que dispõem o art. 112, §6º, da LEP e a Súmula 534 do STJ; quanto ao livramento, aplica-se a Súmula 441 do STJ.'],
    ['Interrompe automaticamente o prazo para indulto e comutação de pena.', false, 'Errada. A falta grave não interrompe esses prazos, salvo se o decreto concessivo dispuser em sentido contrário (Súmula 535 do STJ).'],
    ['Não gera qualquer efeito sobre a progressão, porque o PAD não substitui decisão judicial.', false, 'Errada. Reconhecida a falta grave, o juiz da execução aplica os efeitos legais, entre eles a interrupção da contagem para progressão (art. 112, §6º, da LEP).']
  ] },
{ id: 'pe506', materia: 'penal', topico: 'pe-progressao',
  enunciado: 'Yuri cumpre pena em regime fechado e já cumpriu tempo suficiente para progredir ao semiaberto e, pela soma, ao aberto. Seu advogado pede a transferência direta para o regime aberto. Assinale a afirmativa correta.',
  alt: [
    ['O pedido deve ser deferido, pois o tempo cumprido é suficiente para o aberto.', false, 'Errada. A progressão é feita de forma gradual, regime por regime, vedada a progressão por salto (Súmula 491 do STJ).'],
    ['O pedido deve ser deferido, pois a progressão por salto é admitida quando há bom comportamento.', false, 'Errada. O bom comportamento é requisito subjetivo da progressão (art. 112, §1º, da LEP), mas não autoriza o salto (Súmula 491 do STJ).'],
    ['O pedido deve ser indeferido, pois a progressão só é possível após o trânsito em julgado.', false, 'Errada. Admite-se progressão antes do trânsito em julgado (Súmula 716 do STF); o obstáculo aqui é o salto.'],
    ['O pedido deve ser indeferido, pois é inadmissível a progressão per saltum, devendo o preso passar pelo semiaberto.', true, 'Correta. A Súmula 491 do STJ veda a progressão por salto; o preso deve primeiro ir ao semiaberto (art. 112 da LEP).']
  ] },
{ id: 'pe507', materia: 'penal', topico: 'pe-remicao',
  enunciado: 'Zuleica cumpre pena em regime aberto e trabalha como vendedora, com carteira assinada, além de frequentar curso supletivo de ensino médio. Ela pede remição pelos dias de trabalho e pelas horas de estudo. Assinale a afirmativa correta.',
  alt: [
    ['Ela pode remir pelo trabalho e pelo estudo, cumulativamente.', false, 'Errada. No regime aberto, a lei admite remição apenas pela frequência a curso de ensino regular ou de educação profissional (art. 126, §6º, da LEP).'],
    ['Ela pode remir apenas pelo estudo, à razão de 1 dia de pena a cada 12 horas de frequência escolar.', true, 'Correta. No aberto e no livramento condicional, a remição é só por estudo (art. 126, §6º, da LEP), na proporção do art. 126, §1º, I.'],
    ['Ela pode remir apenas pelo trabalho, à razão de 1 dia de pena a cada 3 dias trabalhados.', false, 'Errada. O trabalho é condição do próprio regime aberto (art. 36, §1º, do CP) e não gera remição nesse regime (art. 126, §6º, da LEP).'],
    ['Ela não pode remir, pois a remição é exclusiva do regime fechado.', false, 'Errada. O fechado e o semiaberto admitem remição por trabalho e estudo, e o aberto admite por estudo (art. 126, caput e §6º, da LEP).']
  ] },
{ id: 'pe508', materia: 'penal', topico: 'pe-remicao',
  enunciado: 'Alceu, em regime fechado, tinha 120 dias remidos pelo trabalho quando foi encontrado com um aparelho celular na cela. Após PAD com defesa técnica, o juiz reconheceu a falta grave e declarou a perda de todos os dias remidos, sem fundamentar a fração. Assinale a afirmativa correta.',
  alt: [
    ['A decisão é correta, pois a falta grave acarreta a perda integral dos dias remidos.', false, 'Errada. Desde a Lei 12.433/11, a perda é limitada a até 1/3 do tempo remido (art. 127 da LEP).'],
    ['A decisão é nula, pois a posse de celular não é falta grave.', false, 'Errada. A posse de aparelho telefônico que permita comunicação com outros presos ou com o ambiente externo é falta grave (art. 50, VII, da LEP).'],
    ['A decisão deve ser reformada, pois a perda está limitada a até 1/3 do tempo remido, com fundamentação nos critérios do art. 57 da LEP, ou seja, no máximo 40 dias.', true, 'Correta. O art. 127 da LEP permite revogar até 1/3 dos dias remidos, observando o art. 57 da LEP, o que, no caso, equivale a no máximo 40 dias.'],
    ['A decisão deve ser reformada, pois a falta grave só gera perda de dias remidos se houver condenação criminal transitada em julgado.', false, 'Errada. A falta grave é apurada em PAD (Súmula 533 do STJ), sem necessidade de condenação criminal.']
  ] },
{ id: 'pe509', materia: 'penal', topico: 'pe-remicao',
  enunciado: 'Bento, primário e sem circunstâncias judiciais negativas, permaneceu preso preventivamente por 1 ano e 3 meses e foi condenado a 9 anos de reclusão por tráfico de drogas, sem a minorante do art. 33, §4º, da Lei 11.343/06. Na sentença, sobre a fixação do regime inicial, assinale a afirmativa correta.',
  alt: [
    ['O juiz deve fixar o fechado, pois a detração só pode ser feita pelo juiz da execução.', false, 'Errada. O juiz da sentença deve considerar o tempo de prisão provisória para fixar o regime inicial (art. 387, §2º, do CPP).'],
    ['O juiz deve fixar o fechado, pois o tráfico é equiparado a hediondo e exige regime inicial fechado.', false, 'Errada. O STF declarou inconstitucional o regime inicial fechado obrigatório para hediondos e equiparados (HC 111.840); aplica-se o art. 33 do CP.'],
    ['O juiz pode fixar o aberto, pois descontado o tempo de prisão a pena fica abaixo de 8 anos.', false, 'Errada. O aberto, para o primário, exige pena igual ou inferior a 4 anos (art. 33, §2º, "c", do CP).'],
    ['O juiz deve descontar o tempo de prisão provisória para fins de regime, o que permite o semiaberto, pois restam 7 anos e 9 meses.', true, 'Correta. Com a detração do art. 387, §2º, do CPP, restam 7 anos e 9 meses, compatíveis com o semiaberto para o primário (art. 33, §2º, "b", do CP).']
  ] },
{ id: 'pe510', materia: 'penal', topico: 'pe-art59',
  enunciado: 'Na sentença que condenou Celso por estelionato, o juiz elevou a pena-base em razão de "maus antecedentes", apontando dois inquéritos policiais e uma ação penal ainda em curso. Como advogado de Celso, assinale o argumento correto.',
  alt: [
    ['Inquéritos e ações penais em curso podem ser usados como conduta social negativa, mas não como antecedentes.', false, 'Errada. Usar os mesmos registros com outro rótulo também viola a presunção de inocência (Súmula 444 do STJ e art. 5º, LVII, da CF).'],
    ['É vedada a utilização de inquéritos policiais e ações penais em curso para agravar a pena-base.', true, 'Correta. Esse é o teor da Súmula 444 do STJ, fundada na presunção de inocência (art. 5º, LVII, da CF).'],
    ['A ação penal em curso pode ser usada, mas os inquéritos não.', false, 'Errada. Nem inquéritos nem ações em curso podem elevar a pena-base; só condenações definitivas contam como antecedentes (Súmula 444 do STJ).'],
    ['Os registros podem ser usados se o juiz fundamentar a necessidade de prevenção.', false, 'Errada. A finalidade de prevenção do art. 59 do CP não autoriza afastar a Súmula 444 do STJ.']
  ] },
{ id: 'pe511', materia: 'penal', topico: 'pe-art59',
  enunciado: 'Dalva foi condenada por furto simples. Na primeira fase da dosimetria, o juiz aumentou a pena-base afirmando que "o comportamento da vítima em nada contribuiu para o crime". As demais circunstâncias eram neutras. Assinale a afirmativa correta.',
  alt: [
    ['O aumento é válido, pois o comportamento da vítima é uma das circunstâncias do art. 59 do CP.', false, 'Errada. Embora prevista no art. 59, essa circunstância, segundo o STJ, só pode ser neutra ou favorável ao réu.'],
    ['O aumento é válido, desde que a fração não ultrapasse 1/6.', false, 'Errada. O problema não é a fração, e sim a própria valoração negativa, que é indevida.'],
    ['O aumento é indevido, pois a ausência de contribuição da vítima é circunstância neutra e não pode elevar a pena-base.', true, 'Correta. O comportamento da vítima só pode beneficiar o réu ou ser neutro; sua falta de contribuição não justifica aumento (art. 59 do CP e jurisprudência do STJ).'],
    ['O aumento é indevido, pois o comportamento da vítima só é examinado na terceira fase.', false, 'Errada. O comportamento da vítima é circunstância judicial, examinada na primeira fase (arts. 59 e 68 do CP).']
  ] },
{ id: 'pe512', materia: 'penal', topico: 'pe-art59',
  enunciado: 'Ernesto foi condenado por homicídio qualificado por motivo torpe. Na primeira fase, o juiz aumentou a pena-base porque "os motivos do crime são torpes" e, na segunda fase, aplicou a agravante do motivo torpe. Assinale a afirmativa correta.',
  alt: [
    ['A dosimetria é correta, pois cada fase tem finalidade própria.', false, 'Errada. O mesmo fato não pode ser usado mais de uma vez na dosimetria, sob pena de bis in idem.'],
    ['Houve bis in idem: a torpeza, que já qualifica o crime, não pode elevar a pena-base nem incidir como agravante.', true, 'Correta. A circunstância que qualifica o crime não serve como agravante (art. 61, caput, do CP) nem como circunstância judicial negativa, para evitar dupla valoração.'],
    ['Só é indevida a agravante; o aumento da pena-base é válido.', false, 'Errada. O motivo que já qualifica o crime também não pode ser valorado na pena-base.'],
    ['Só é indevido o aumento da pena-base; a agravante é válida porque está no art. 61 do CP.', false, 'Errada. O art. 61 do CP afasta a agravante quando a circunstância constitui ou qualifica o crime.']
  ] },
{ id: 'pe513', materia: 'penal', topico: 'pe-agravantes',
  enunciado: 'Fabiana, com 19 anos na data do fato, praticou furto simples e confessou espontaneamente em juízo, tendo a confissão sido usada na sentença. A pena-base foi fixada no mínimo legal de 1 ano. Sobre a segunda fase da dosimetria, assinale a afirmativa correta.',
  alt: [
    ['A pena deve ser reduzida abaixo de 1 ano, pois há duas atenuantes.', false, 'Errada. A incidência de atenuante não pode conduzir a pena abaixo do mínimo legal (Súmula 231 do STJ).'],
    ['A atenuante da menoridade não se aplica, pois a maioridade civil ocorre aos 18 anos.', false, 'Errada. A atenuante do art. 65, I, do CP tem fundamento penal e continua aplicável ao menor de 21 na data do fato.'],
    ['As atenuantes são reconhecidas, mas a pena intermediária permanece em 1 ano.', true, 'Correta. Há menoridade relativa e confissão (art. 65, I e III, "d", do CP; Súmula 545 do STJ), mas a pena não desce abaixo do mínimo na segunda fase (Súmula 231 do STJ).'],
    ['A confissão não atenua, pois foi feita apenas em juízo.', false, 'Errada. A confissão espontânea perante a autoridade, inclusive judicial, atenua a pena (art. 65, III, "d", do CP).']
  ] },
{ id: 'pe514', materia: 'penal', topico: 'pe-agravantes',
  enunciado: 'Gilberto, reincidente em crime de furto, foi condenado por novo furto e confessou espontaneamente a prática do crime, com a confissão usada na sentença. Não há outras agravantes ou atenuantes. Sobre a segunda fase, assinale a afirmativa correta.',
  alt: [
    ['A reincidência prepondera sobre a confissão, devendo a pena ser agravada.', false, 'Errada. O STJ entende que a confissão, ligada à personalidade, também é preponderante (art. 67 do CP).'],
    ['A confissão e a reincidência se compensam integralmente.', true, 'Correta. Pelo Tema 585 do STJ, a atenuante da confissão espontânea e a agravante da reincidência, ambas preponderantes, se compensam integralmente quando há uma reincidência (art. 67 do CP).'],
    ['A confissão prevalece, devendo a pena ser atenuada.', false, 'Errada. Não há prevalência da confissão; há compensação integral entre as duas circunstâncias (Tema 585 do STJ).'],
    ['A compensação é proibida, pois a reincidência é específica.', false, 'Errada. O STJ admite a compensação mesmo com reincidência específica (Tema 1172 do STJ); a proporcionalidade só se altera no caso de multirreincidência.']
  ] },
{ id: 'pe515', materia: 'penal', topico: 'pe-agravantes',
  enunciado: 'Helena, de 68 anos na data do fato, praticou estelionato. A sentença condenatória foi proferida quando ela já tinha 71 anos. O juiz negou a atenuante etária, sob o argumento de que ela não tinha 70 anos quando cometeu o crime. Assinale a afirmativa correta.',
  alt: [
    ['O juiz acertou, pois a idade é aferida na data do fato.', false, 'Errada. A data do fato é o marco da menoridade relativa; para a senilidade, a lei fixa a data da sentença (art. 65, I, do CP).'],
    ['O juiz errou, pois a atenuante se aplica ao maior de 60 anos na data do fato.', false, 'Errada. Maior de 60 anos é a vítima da agravante do art. 61, II, "h"; a atenuante é para maior de 70 na data da sentença.'],
    ['O juiz errou, pois a atenuante incide quando o agente é maior de 70 anos na data da sentença.', true, 'Correta. O art. 65, I, do CP prevê a atenuante para o agente maior de 70 anos na data da sentença.'],
    ['O juiz acertou, pois o estelionato contra a economia popular não admite atenuantes.', false, 'Errada. Não há essa vedação; as atenuantes do art. 65 do CP aplicam-se aos crimes em geral.']
  ] },
{ id: 'pe516', materia: 'penal', topico: 'pe-reincidencia',
  enunciado: 'Ítalo foi condenado definitivamente pela contravenção de vias de fato. Meses depois, praticou um furto. Na sentença do furto, o juiz aplicou a agravante da reincidência. Assinale a afirmativa correta.',
  alt: [
    ['A agravante foi corretamente aplicada, pois qualquer infração penal anterior gera reincidência.', false, 'Errada. O art. 63 do CP exige condenação anterior por crime; a contravenção anterior não torna reincidente quem comete crime depois.'],
    ['A agravante foi corretamente aplicada, pelo art. 7º da Lei das Contravenções Penais.', false, 'Errada. O art. 7º da LCP trata de quem comete contravenção depois de condenado; não se aplica a quem pratica crime depois de contravenção.'],
    ['Ítalo não é reincidente, mas a condenação pela contravenção pode ser valorada como maus antecedentes.', true, 'Correta. Contravenção seguida de crime não gera reincidência (art. 63 do CP), mas a condenação definitiva anterior pode ser considerada como maus antecedentes (art. 59 do CP).'],
    ['Ítalo não é reincidente, e a condenação anterior não pode gerar qualquer efeito na dosimetria.', false, 'Errada. A condenação definitiva anterior que não gera reincidência pode ser valorada como maus antecedentes na primeira fase (art. 59 do CP).']
  ] },
{ id: 'pe517', materia: 'penal', topico: 'pe-reincidencia',
  enunciado: 'Jonas cumpriu integralmente a pena de uma condenação por receptação, tendo sido declarada extinta em fevereiro de 2018. Em junho de 2024, praticou um furto. O Ministério Público pediu o reconhecimento da reincidência. Assinale a afirmativa correta.',
  alt: [
    ['Jonas é reincidente, pois a condenação anterior transitou em julgado antes do novo crime.', false, 'Errada. Passados mais de 5 anos da extinção da pena, a condenação anterior não prevalece para efeito de reincidência (art. 64, I, do CP).'],
    ['Jonas não é reincidente, mas a condenação anterior pode, em tese, ser considerada como maus antecedentes.', true, 'Correta. Decorrido o período depurador de 5 anos, não há reincidência (art. 64, I, do CP); mas o STF admite valorar a condenação como maus antecedentes (Tema 150 do STF).'],
    ['Jonas é reincidente, pois o período depurador conta da data da condenação anterior.', false, 'Errada. O prazo de 5 anos conta da data do cumprimento ou extinção da pena (art. 64, I, do CP).'],
    ['Jonas não é reincidente, e a condenação anterior jamais poderá ser usada contra ele, pelo direito ao esquecimento.', false, 'Errada. O STF decidiu que o período depurador não se aplica aos maus antecedentes (Tema 150 do STF).']
  ] },
{ id: 'pe518', materia: 'penal', topico: 'pe-reincidencia',
  enunciado: 'Laércio, reincidente, foi condenado definitivamente por furto. Discute-se a prescrição. A respeito dos efeitos da reincidência sobre a prescrição, assinale a afirmativa correta.',
  alt: [
    ['A reincidência aumenta de 1/3 o prazo da prescrição da pretensão punitiva e da executória.', false, 'Errada. A reincidência não influi no prazo da prescrição da pretensão punitiva (Súmula 220 do STJ).'],
    ['A reincidência reduz pela metade o prazo prescricional.', false, 'Errada. A redução pela metade é para o menor de 21 na data do fato ou maior de 70 na data da sentença (art. 115 do CP).'],
    ['A reincidência não produz nenhum efeito sobre a prescrição.', false, 'Errada. Ela aumenta de 1/3 o prazo da prescrição executória (art. 110 do CP) e interrompe a prescrição (art. 117, VI, do CP).'],
    ['A reincidência aumenta de 1/3 apenas o prazo da prescrição da pretensão executória.', true, 'Correta. O art. 110, caput, do CP prevê o aumento de 1/3 para a prescrição depois do trânsito em julgado, e a Súmula 220 do STJ afasta o efeito sobre a pretensão punitiva.']
  ] }
);
