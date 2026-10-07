/* Banco ampliado – parte 2: Penal, Processo Penal, Trabalho, Processo do Trabalho, Administrativo e Tributário. */
window.QUESTOES.push(
// PENAL
{ id: 'pe4', materia: 'penal', topico: 'aplicacao',
  enunciado: 'Após o trânsito em julgado da condenação de Ana por um crime, entra em vigor lei que deixa de considerar o fato como crime. Nesse caso:',
  alt: [
    ['nada muda, pois há coisa julgada.', false, 'Errada. A lei benéfica retroage mesmo após o trânsito em julgado (art. 2º do CP e art. 5º, XL, da CF).'],
    ['cessam a execução e os efeitos penais da sentença, mas permanecem os efeitos civis.', true, 'Correta. Arts. 2º e 107, III, do CP (abolitio criminis): extinguem-se os efeitos penais, mantendo-se os extrapenais, como o dever de indenizar.'],
    ['Ana deve propor revisão criminal para obter o benefício.', false, 'Errada. A aplicação da lei mais benéfica após o trânsito compete ao juízo da execução (Súmula 611 STF).'],
    ['apagam-se todos os efeitos, inclusive o dever de indenizar.', false, 'Errada. Os efeitos civis permanecem.']
  ] },
{ id: 'pe5', materia: 'penal', topico: 'excludentes',
  enunciado: 'Carlos, para salvar o próprio filho de um incêndio, arrombou a porta da casa do vizinho. Carlos agiu em:',
  alt: [
    ['legítima defesa.', false, 'Errada. Não houve injusta agressão humana.'],
    ['estado de necessidade.', true, 'Correta. Art. 24 do CP: salvar direito próprio ou alheio de perigo atual, não provocado, cujo sacrifício não era razoável exigir.'],
    ['exercício regular de direito.', false, 'Errada. Não há direito de arrombar a casa alheia; a conduta é justificada pelo perigo.'],
    ['estrito cumprimento do dever legal.', false, 'Errada. Carlos não é agente público cumprindo dever.']
  ] },
{ id: 'pe6', materia: 'penal', topico: 'excludentes',
  enunciado: 'Bruno iniciou a execução de um furto, mas, podendo prosseguir, desistiu voluntariamente e foi embora sem nada levar, após quebrar a janela. Bruno responde:',
  alt: [
    ['por tentativa de furto.', false, 'Errada. Na desistência voluntária não há tentativa.'],
    ['apenas pelos atos já praticados, ou seja, pelo dano.', true, 'Correta. Art. 15 do CP: na desistência voluntária, o agente só responde pelos atos já praticados; aqui, o dano à janela (art. 163 do CP), que na forma simples é de ação penal privada (art. 167).'],
    ['por furto consumado com redução de pena.', false, 'Errada. O furto nem se consumou.'],
    ['por nenhum crime.', false, 'Errada. Responde pelos atos praticados, se típicos (dano).']
  ] },
{ id: 'pe7', materia: 'penal', topico: 'prescricaopenal',
  enunciado: 'É causa de extinção da punibilidade:',
  alt: [
    ['a reparação do dano no crime de estelionato após o recebimento da denúncia.', false, 'Errada. Gera, no máximo, atenuante (art. 65, III, b).'],
    ['o perdão do ofendido aceito, nos crimes de ação penal privada.', true, 'Correta. Art. 107, V, do CP.'],
    ['a confissão espontânea.', false, 'Errada. É atenuante (art. 65, III, d).'],
    ['o casamento da vítima com o agente nos crimes sexuais.', false, 'Errada. Essa causa foi revogada pela Lei 11.106/05.']
  ] },
{ id: 'pe8', materia: 'penal', topico: 'excludentes',
  enunciado: 'Sobre o crime impossível (art. 17 do CP), é correto afirmar:',
  alt: [
    ['é punido com a pena da tentativa.', false, 'Errada. Não se pune a tentativa quando o crime é impossível.'],
    ['ocorre por ineficácia absoluta do meio ou absoluta impropriedade do objeto, e não é punível.', true, 'Correta. Art. 17 do CP.'],
    ['ocorre por ineficácia relativa do meio.', false, 'Errada. A ineficácia relativa caracteriza tentativa punível.'],
    ['a presença de vigilância eletrônica em loja sempre torna o furto impossível.', false, 'Errada. Súmula 567 do STJ: o sistema de vigilância, por si só, não torna o crime impossível.']
  ] },
{ id: 'pe9', materia: 'penal', topico: 'concurso',
  enunciado: 'Quanto ao concurso de crimes, quando o agente, mediante uma só ação, pratica dois ou mais crimes, idênticos ou não, ocorre:',
  alt: [
    ['concurso material, somando-se as penas.', false, 'Errada. O concurso material exige mais de uma ação (art. 69).'],
    ['concurso formal, aplicando-se a pena mais grave aumentada de 1/6 até metade, salvo desígnios autônomos.', true, 'Correta. Art. 70 do CP.'],
    ['crime continuado.', false, 'Errada. O crime continuado exige mais de uma ação, com condições semelhantes (art. 71).'],
    ['crime único.', false, 'Errada. Há pluralidade de crimes.']
  ] },
{ id: 'pe10', materia: 'penal', topico: 'concurso',
  enunciado: 'Sobre o princípio da insignificância, segundo o STF, são requisitos:',
  alt: [
    ['apenas o valor ínfimo do bem.', false, 'Errada. O STF exige quatro vetores.'],
    ['mínima ofensividade da conduta, nenhuma periculosidade social da ação, reduzido grau de reprovabilidade do comportamento e inexpressividade da lesão jurídica.', true, 'Correta. Vetores fixados pelo STF (HC 84.412).'],
    ['primariedade e bons antecedentes, apenas.', false, 'Errada. Não são os requisitos objetivos fixados.'],
    ['que o crime seja culposo.', false, 'Errada. Não há esse requisito. A insignificância afasta a tipicidade material e é aplicada sobretudo a crimes patrimoniais dolosos sem violência ou grave ameaça.']
  ] },
// PROCESSO PENAL
{ id: 'pp4', materia: 'processopenal', topico: 'prisoes',
  enunciado: 'Preso em flagrante, João deve ser apresentado ao juiz em audiência de custódia no prazo de:',
  alt: [
    ['48 horas.', false, 'Errada. O prazo é de 24 horas.'],
    ['24 horas.', true, 'Correta. Art. 310 do CPP, com redação da Lei 13.964/19.'],
    ['10 dias.', false, 'Errada. 10 dias é o prazo do inquérito com indiciado preso.'],
    ['5 dias.', false, 'Errada. Não é o prazo legal.']
  ] },
{ id: 'pp5', materia: 'processopenal', topico: 'prisoes',
  enunciado: 'Sobre a prisão temporária, é correto afirmar:',
  alt: [
    ['pode ser decretada de ofício pelo juiz durante a ação penal.', false, 'Errada. Só cabe na investigação e depende de representação ou requerimento (Lei 7.960/89).'],
    ['cabe apenas durante a investigação, tem prazo de 5 dias prorrogável por igual período, e de 30 dias, prorrogável por igual período, nos crimes hediondos e equiparados.', true, 'Correta. Lei 7.960/89, art. 2º, e Lei 8.072/90, art. 2º, §4º.'],
    ['não tem prazo definido.', false, 'Errada. Tem prazo legal.'],
    ['pode ser decretada para qualquer crime.', false, 'Errada. Só cabe para os crimes do rol do art. 1º, III, da Lei 7.960/89 e para os hediondos e equiparados (art. 2º, §4º, da Lei 8.072/90), e ainda exige que a prisão seja imprescindível para as investigações (STF, ADIs 3360 e 4109).']
  ] },
{ id: 'pp6', materia: 'processopenal', topico: 'acaopenal',
  enunciado: 'Encerrado o prazo legal sem que o MP oferecesse denúncia, arquivasse ou requisitasse diligências, a vítima pode:',
  alt: [
    ['nada fazer, pois a ação é pública.', false, 'Errada. A CF garante a ação privada subsidiária da pública (art. 5º, LIX).'],
    ['oferecer queixa-crime subsidiária, no prazo de 6 meses contados do esgotamento do prazo do MP.', true, 'Correta. Art. 5º, LIX, da CF e arts. 29 e 38 do CPP: o prazo de 6 meses conta-se do dia em que se esgotar o prazo do MP para a denúncia.'],
    ['oferecer queixa a qualquer tempo.', false, 'Errada. Há prazo de 6 meses.'],
    ['oferecer queixa mesmo se o MP tiver arquivado o inquérito.', false, 'Errada. Arquivamento não é inércia; não cabe ação subsidiária. Discordando do arquivamento, a vítima pode, em 30 dias do recebimento da comunicação, submeter a matéria à revisão da instância competente do MP (art. 28, §1º, do CPP).']
  ] },
{ id: 'pp7', materia: 'processopenal', topico: 'acaopenal',
  enunciado: 'Sobre o acordo de não persecução penal (art. 28-A do CPP), é requisito:',
  alt: [
    ['crime com pena máxima inferior a 4 anos.', false, 'Errada. O requisito é pena MÍNIMA inferior a 4 anos.'],
    ['confissão formal e circunstanciada, infração sem violência ou grave ameaça e pena mínima inferior a 4 anos.', true, 'Correta. Art. 28-A do CPP.'],
    ['que o crime seja hediondo.', false, 'Errada. Ser hediondo não é requisito do ANPP. O acordo exige infração sem violência ou grave ameaça e com pena mínima inferior a 4 anos (art. 28-A, caput), e é vedado, entre outros casos, nos crimes de violência doméstica ou familiar ou praticados contra a mulher por razões da condição de sexo feminino (art. 28-A, §2º, IV).'],
    ['ausência de confissão.', false, 'Errada. A confissão é requisito.']
  ] },
{ id: 'pp8', materia: 'processopenal', topico: 'procedimento',
  enunciado: 'O juiz rejeitou a denúncia oferecida pelo MP. O recurso cabível é:',
  alt: [
    ['apelação.', false, 'Errada. O art. 581, I, prevê recurso em sentido estrito.'],
    ['recurso em sentido estrito.', true, 'Correta. Art. 581, I, do CPP. (No JECRIM, cabe apelação – art. 82 da Lei 9.099/95.)'],
    ['agravo de instrumento.', false, 'Errada. Não existe no processo penal comum.'],
    ['habeas corpus.', false, 'Errada. O HC protege o réu; aqui quem recorre é a acusação.']
  ] },
{ id: 'pp9', materia: 'processopenal', topico: 'procedimento',
  enunciado: 'Após a pronúncia, no procedimento do júri, o recurso cabível contra a decisão é:',
  alt: [
    ['apelação.', false, 'Errada. Desde 2008, cabe apelação contra impronúncia e absolvição sumária; contra a pronúncia, RESE.'],
    ['recurso em sentido estrito.', true, 'Correta. Art. 581, IV, do CPP.'],
    ['embargos infringentes.', false, 'Errada. São recurso exclusivo da defesa e só cabem contra acórdão não unânime de segunda instância desfavorável ao réu (art. 609, parágrafo único, do CPP).'],
    ['revisão criminal.', false, 'Errada. Pressupõe trânsito em julgado da condenação.']
  ] },
{ id: 'pp10', materia: 'processopenal', topico: 'procedimento',
  enunciado: 'A revisão criminal:',
  alt: [
    ['tem prazo de 2 anos após o trânsito em julgado.', false, 'Errada. Pode ser requerida a qualquer tempo, mesmo após a extinção da pena (art. 622).'],
    ['pode ser requerida a qualquer tempo, inclusive após a morte do réu, pelo cônjuge, ascendente, descendente ou irmão.', true, 'Correta. Arts. 622 e 623 do CPP. Para requerer a revisão, o condenado não precisa se recolher à prisão (Súmula 393 do STF).'],
    ['pode ser proposta pela acusação contra sentença absolutória.', false, 'Errada. Só existe revisão criminal em favor do réu.'],
    ['exige que o réu se recolha à prisão.', false, 'Errada. Não há essa exigência.']
  ] },
// TRABALHO
{ id: 'tr4', materia: 'trabalho', topico: 'jornada',
  enunciado: 'Segundo a CLT após a Reforma, a jornada 12x36 pode ser estabelecida por:',
  alt: [
    ['somente convenção coletiva.', false, 'Errada. O art. 59-A também admite acordo individual escrito.'],
    ['acordo individual escrito, convenção coletiva ou acordo coletivo de trabalho.', true, 'Correta. Art. 59-A da CLT. O STF validou a 12x36 ajustada por acordo individual escrito (ADI 5994).'],
    ['decisão unilateral do empregador.', false, 'Errada. Depende de ajuste formal.'],
    ['autorização do Ministério do Trabalho.', false, 'Errada. Não há essa exigência.']
  ] },
{ id: 'tr5', materia: 'trabalho', topico: 'jornada',
  enunciado: 'Um empregado com jornada de 8 horas teve concedidos apenas 30 minutos de intervalo para refeição. O empregador deve pagar:',
  alt: [
    ['1 hora inteira com adicional de 50%, com natureza salarial.', false, 'Errada. Era o entendimento da Súmula 437 do TST, superado pela Reforma.'],
    ['os 30 minutos suprimidos, com adicional de 50%, com natureza indenizatória.', true, 'Correta. Art. 71, §4º, da CLT.'],
    ['nada, pois o intervalo é negociável.', false, 'Errada. A supressão gera pagamento.'],
    ['os 30 minutos sem adicional.', false, 'Errada. Há adicional de 50%.']
  ] },
{ id: 'tr6', materia: 'trabalho', topico: 'contrato',
  enunciado: 'As férias podem ser fracionadas, com concordância do empregado, em até:',
  alt: [
    ['2 períodos, um deles de pelo menos 10 dias.', false, 'Errada. Era a regra anterior à Reforma.'],
    ['3 períodos, um deles não inferior a 14 dias corridos e os demais não inferiores a 5 dias corridos cada um.', true, 'Correta. Art. 134, §1º, da CLT.'],
    ['4 períodos de qualquer duração.', false, 'Errada. O máximo é 3 períodos.'],
    ['não podem ser fracionadas.', false, 'Errada. O fracionamento é permitido.']
  ] },
{ id: 'tr7', materia: 'trabalho', topico: 'contrato',
  enunciado: 'A empregada gestante tem estabilidade provisória:',
  alt: [
    ['desde a comunicação da gravidez ao empregador até 5 meses após o parto.', false, 'Errada. O marco inicial é a CONFIRMAÇÃO da gravidez, e o desconhecimento do empregador não afasta o direito (Súmula 244 TST).'],
    ['desde a confirmação da gravidez até 5 meses após o parto, inclusive no contrato por prazo determinado.', true, 'Correta. Art. 10, II, b, do ADCT e Súmula 244, III, do TST. Basta que a gravidez seja anterior à dispensa (STF, Tema 497). Atenção: o TST afasta a estabilidade no trabalho temporário da Lei 6.019/74 (IAC, Tema 2).'],
    ['apenas durante a licença-maternidade.', false, 'Errada. Vai até 5 meses após o parto.'],
    ['só se a empresa tiver mais de 100 empregados.', false, 'Errada. Não há esse requisito.']
  ] },
{ id: 'tr8', materia: 'trabalho', topico: 'contrato',
  enunciado: 'É requisito para a configuração da relação de emprego (arts. 2º e 3º da CLT):',
  alt: [
    ['exclusividade.', false, 'Errada. A exclusividade não é requisito da relação de emprego.'],
    ['pessoalidade, não eventualidade, onerosidade e subordinação, prestados por pessoa física.', true, 'Correta. Arts. 2º e 3º da CLT.'],
    ['carteira de trabalho assinada.', false, 'Errada. A anotação é obrigação, não requisito; o vínculo existe pela realidade (primazia da realidade).'],
    ['trabalho em tempo integral.', false, 'Errada. Existe contrato de trabalho em tempo parcial.']
  ] },
{ id: 'tr9', materia: 'trabalho', topico: 'contrato',
  enunciado: 'A prescrição dos créditos trabalhistas é de:',
  alt: [
    ['2 anos, contados da lesão.', false, 'Errada. 2 anos é o prazo para ajuizar a ação após o fim do contrato.'],
    ['5 anos, até o limite de 2 anos após a extinção do contrato.', true, 'Correta. Art. 7º, XXIX, da CF e art. 11 da CLT.'],
    ['10 anos.', false, 'Errada. Não é o prazo trabalhista.'],
    ['3 anos.', false, 'Errada. Não é o prazo previsto.']
  ] },
// PROCESSO DO TRABALHO
{ id: 'pt3', materia: 'processotrabalho', topico: 'procedimentotrab',
  enunciado: 'No procedimento sumaríssimo trabalhista, são processadas as causas cujo valor:',
  alt: [
    ['não exceda 2 salários mínimos.', false, 'Errada. Esse é o limite do rito sumário (Lei 5.584/70).'],
    ['não exceda 40 salários mínimos, excluída a Administração Pública direta, autárquica e fundacional.', true, 'Correta. Art. 852-A da CLT.'],
    ['não exceda 60 salários mínimos.', false, 'Errada. 60 salários é o limite dos Juizados Especiais Federais.'],
    ['seja qualquer um, se as partes concordarem.', false, 'Errada. O rito é determinado pelo valor.']
  ] },
{ id: 'pt4', materia: 'processotrabalho', topico: 'procedimentotrab',
  enunciado: 'O reclamante não compareceu à audiência inaugural, sem motivo justificado. A consequência é:',
  alt: [
    ['revelia do reclamante.', false, 'Errada. Revelia é efeito da ausência do RECLAMADO.'],
    ['arquivamento da reclamação, com condenação ao pagamento de custas, ainda que beneficiário da justiça gratuita, salvo motivo legalmente justificável.', true, 'Correta. Art. 844, caput e §2º, da CLT (o STF validou a cobrança na ADI 5766).'],
    ['julgamento à revelia em favor do reclamado.', false, 'Errada. O efeito é o arquivamento.'],
    ['suspensão do processo por 30 dias.', false, 'Errada. Não há essa previsão.']
  ] },
{ id: 'pt5', materia: 'processotrabalho', topico: 'recursostrab',
  enunciado: 'Na fase de execução trabalhista, o recurso cabível contra decisão do juiz nos embargos à execução é:',
  alt: [
    ['recurso ordinário.', false, 'Errada. O recurso ordinário cabe contra decisões definitivas na fase de conhecimento.'],
    ['agravo de petição, em 8 dias.', true, 'Correta. Art. 897, a, da CLT.'],
    ['agravo de instrumento.', false, 'Errada. O agravo de instrumento trabalhista só destranca recursos.'],
    ['recurso de revista.', false, 'Errada. Na execução, a revista só cabe por ofensa direta à Constituição.']
  ] },
{ id: 'pt6', materia: 'processotrabalho', topico: 'procedimentotrab',
  enunciado: 'Na reclamação trabalhista escrita, o pedido deve:',
  alt: [
    ['ser genérico, apurado na liquidação.', false, 'Errada. Após a Reforma, o pedido deve indicar seu valor.'],
    ['ser certo, determinado e com indicação de seu valor, sob pena de extinção sem resolução do mérito.', true, 'Correta. Art. 840, §§1º e 3º, da CLT. O valor pode ser estimado (art. 12, §2º, da IN 41/2018 do TST).'],
    ['ser formulado apenas oralmente.', false, 'Errada. A reclamação pode ser escrita ou verbal.'],
    ['dispensar a indicação de valor em qualquer caso.', false, 'Errada. A indicação é obrigatória.']
  ] },
// ADMINISTRATIVO
{ id: 'ad4', materia: 'administrativo', topico: 'atos',
  enunciado: 'Um servidor foi removido sob a justificativa de "excesso de pessoal", mas comprovou-se que o setor tinha falta de servidores. O ato:',
  alt: [
    ['é válido, pois a remoção é discricionária.', false, 'Errada. A discricionariedade não afasta a vinculação ao motivo declarado.'],
    ['é inválido, pela teoria dos motivos determinantes.', true, 'Correta. O motivo declarado, se falso, invalida o ato.'],
    ['é válido, pois a remoção dispensa motivação.', false, 'Errada. Mesmo quando dispensável, a motivação apresentada vincula.'],
    ['só pode ser revogado, não anulado.', false, 'Errada. Vício de motivo gera anulação.']
  ] },
{ id: 'ad5', materia: 'administrativo', topico: 'atos',
  enunciado: 'Segundo a Lei 9.784/99, aplicável à Administração Pública federal, o direito da Administração de anular atos administrativos de que decorram efeitos favoráveis aos destinatários, salvo comprovada má-fé, decai em:',
  alt: [
    ['2 anos.', false, 'Errada. O art. 54 da Lei 9.784/99 fixa 5 anos.'],
    ['5 anos, contados da data em que foram praticados.', true, 'Correta. Art. 54 da Lei 9.784/99.'],
    ['10 anos.', false, 'Errada. Não é o prazo legal federal.'],
    ['nunca decai.', false, 'Errada. Há prazo decadencial, salvo má-fé.']
  ] },
{ id: 'ad6', materia: 'administrativo', topico: 'licitacoes',
  enunciado: 'A contratação de artista consagrado pela crítica, diretamente ou por empresário exclusivo, é caso de:',
  alt: [
    ['dispensa de licitação.', false, 'Errada. Há inviabilidade de competição, o que caracteriza inexigibilidade.'],
    ['inexigibilidade de licitação.', true, 'Correta. Art. 74, II, da Lei 14.133/21.'],
    ['licitação obrigatória na modalidade concurso.', false, 'Errada. O concurso escolhe trabalho técnico, científico ou artístico mediante prêmio, não um artista consagrado.'],
    ['licitação deserta.', false, 'Errada. Licitação deserta é aquela sem interessados.']
  ] },
{ id: 'ad7', materia: 'administrativo', topico: 'improbidade',
  enunciado: 'Uma ambulância do Município atropelou um pedestre, por culpa exclusiva deste, que atravessou fora da faixa correndo. A responsabilidade do Município:',
  alt: [
    ['existe sempre, pois é objetiva.', false, 'Errada. A teoria do risco administrativo admite excludentes.'],
    ['é afastada pela culpa exclusiva da vítima.', true, 'Correta. A culpa exclusiva da vítima rompe o nexo causal (teoria do risco administrativo).'],
    ['depende de prova de culpa do motorista.', false, 'Errada. A responsabilidade é objetiva; culpa só importa no regresso.'],
    ['é do motorista, exclusivamente.', false, 'Errada. A vítima não pode acionar diretamente o agente (Tema 940 STF).']
  ] },
{ id: 'ad8', materia: 'administrativo', topico: 'agentes',
  enunciado: 'Sobre os agentes públicos, a estabilidade do servidor nomeado para cargo de provimento efetivo em virtude de concurso é adquirida após:',
  alt: [
    ['2 anos de efetivo exercício.', false, 'Errada. Desde a EC 19/98, o prazo é de 3 anos.'],
    ['3 anos de efetivo exercício e avaliação especial de desempenho por comissão.', true, 'Correta. Art. 41, caput e §4º, da CF.'],
    ['a posse.', false, 'Errada. A estabilidade exige exercício por 3 anos.'],
    ['5 anos.', false, 'Errada. Não é o prazo constitucional.']
  ] },
{ id: 'ad9', materia: 'administrativo', topico: 'licitacoes',
  enunciado: 'O pregão, na Lei 14.133/21, é a modalidade obrigatória para:',
  alt: [
    ['obras e serviços especiais de engenharia.', false, 'Errada. O pregão não se aplica a serviços técnicos especializados de natureza predominantemente intelectual nem a obras e serviços de engenharia, salvo os serviços comuns de engenharia (art. 29, parágrafo único, e art. 6º, XXI, a, da Lei 14.133/21).'],
    ['aquisição de bens e serviços comuns, cujo critério de julgamento pode ser o menor preço ou o maior desconto.', true, 'Correta. Art. 6º, XLI, e art. 29 da Lei 14.133/21.'],
    ['alienação de bens imóveis.', false, 'Errada. É o leilão.'],
    ['escolha de trabalho artístico.', false, 'Errada. É o concurso.']
  ] },
// TRIBUTÁRIO
{ id: 'tb3', materia: 'tributario', topico: 'principios',
  enunciado: 'Lei federal majorou o IPI em novembro. O aumento poderá ser cobrado:',
  alt: [
    ['a partir de 1º de janeiro.', false, 'Errada. O IPI deve respeitar a noventena.'],
    ['após 90 dias da publicação da lei, independentemente do exercício.', true, 'Correta. O IPI é exceção apenas à anterioridade anual (art. 150, §1º).'],
    ['imediatamente.', false, 'Errada. O IPI não é exceção à noventena.'],
    ['só no exercício seguinte, após 90 dias.', false, 'Errada. O IPI não respeita a anual.']
  ] },
{ id: 'tb4', materia: 'tributario', topico: 'principios',
  enunciado: 'Uma entidade religiosa, mantenedora de templo de qualquer culto, é proprietária de imóvel alugado a terceiros, cuja renda é integralmente aplicada nas finalidades essenciais da entidade. Quanto ao IPTU desse imóvel:',
  alt: [
    ['incide normalmente, pois o imóvel não é usado para culto.', false, 'Errada. A imunidade de templos alcança o patrimônio relacionado às finalidades essenciais (art. 150, VI, b, e §4º, da CF), e o STF (RE 325.822) a estende ao imóvel alugado a terceiros quando a renda é revertida a essas finalidades, na mesma linha da Súmula Vinculante 52, que trata das entidades da alínea c.'],
    ['é imune, desde que o valor dos aluguéis seja aplicado nas atividades essenciais da entidade.', true, 'Correta. Art. 150, VI, b, e §4º, da CF (entidades religiosas e templos de qualquer culto, redação da EC 132/23) e STF, RE 325.822; a Súmula Vinculante 52 aplica a mesma lógica às entidades do art. 150, VI, c.'],
    ['é isento por lei municipal obrigatória.', false, 'Errada. Trata-se de imunidade constitucional, não de isenção.'],
    ['incide pela metade.', false, 'Errada. Não há tributação parcial.']
  ] },
{ id: 'tb5', materia: 'tributario', topico: 'credito',
  enunciado: 'A isenção e a anistia são hipóteses de:',
  alt: [
    ['extinção do crédito tributário.', false, 'Errada. São exclusão (art. 175 do CTN).'],
    ['exclusão do crédito tributário.', true, 'Correta. Art. 175 do CTN.'],
    ['suspensão da exigibilidade.', false, 'Errada. Não estão no art. 151.'],
    ['imunidade tributária.', false, 'Errada. Imunidade é limitação constitucional ao poder de tributar.']
  ] },
{ id: 'tb6', materia: 'tributario', topico: 'credito',
  enunciado: 'A ação para cobrança do crédito tributário prescreve em:',
  alt: [
    ['5 anos, contados da data da sua constituição definitiva.', true, 'Correta. Art. 174 do CTN.'],
    ['5 anos, contados do fato gerador.', false, 'Errada. Do fato gerador conta-se, em regra, a decadência nos lançamentos por homologação (art. 150, §4º).'],
    ['10 anos.', false, 'Errada. O prazo é de 5 anos.'],
    ['3 anos.', false, 'Errada. Não é o prazo do CTN.']
  ] },
{ id: 'tb7', materia: 'tributario', topico: 'especies',
  enunciado: 'A cobrança de taxa exige:',
  alt: [
    ['qualquer atividade estatal, ainda que não específica.', false, 'Errada. O serviço deve ser específico e divisível.'],
    ['o exercício regular do poder de polícia ou a utilização, efetiva ou potencial, de serviço público específico e divisível.', true, 'Correta. Art. 145, II, da CF e art. 77 do CTN.'],
    ['base de cálculo própria de imposto.', false, 'Errada. É vedado (art. 145, §2º).'],
    ['valorização imobiliária decorrente de obra pública.', false, 'Errada. Essa é a contribuição de melhoria.']
  ] },
{ id: 'tb8', materia: 'tributario', topico: 'especies',
  enunciado: 'Sobre a responsabilidade tributária na sucessão empresarial, quem adquire fundo de comércio e continua a exploração do mesmo ramo responde pelos tributos devidos até a data do ato:',
  alt: [
    ['integralmente, se o alienante cessar a exploração do comércio.', true, 'Correta. Art. 133, I, do CTN.'],
    ['nunca, pois tributo é pessoal.', false, 'Errada. O CTN prevê a responsabilidade do adquirente.'],
    ['sempre de forma subsidiária, mesmo se o alienante cessar a atividade.', false, 'Errada. A responsabilidade é subsidiária quando o alienante prossegue na exploração ou inicia, dentro de 6 meses da alienação, nova atividade no mesmo ou em outro ramo (art. 133, II); se ele cessa a exploração, o adquirente responde integralmente (art. 133, I).'],
    ['inclusive na alienação judicial em falência.', false, 'Errada. O art. 133, §1º, afasta a responsabilidade do adquirente na alienação judicial em processo de falência e na de filial ou unidade produtiva isolada em recuperação judicial, salvo se o adquirente for sócio ou sociedade controlada pelo devedor, parente do devedor ou de seus sócios, ou agente do devedor para fraudar a sucessão tributária (§2º).']
  ] }
);
