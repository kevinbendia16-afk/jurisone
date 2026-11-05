/* Banco ampliado – parte 1: Ética, Constitucional, Civil e Processo Civil. */
window.QUESTOES.push(
// ÉTICA
{ id: 'et6', materia: 'etica', topico: 'inscricao',
  enunciado: 'Laura, bacharel em Direito aprovada no Exame de Ordem, é servidora do Tribunal de Justiça. Ela pede inscrição na OAB. O pedido deve ser:',
  alt: [
    ['deferido, com impedimento para advogar contra o Estado.', false, 'Errada. Servidor do Judiciário não tem mero impedimento: o art. 28, IV, prevê incompatibilidade.'],
    ['indeferido, pois ocupantes de cargos vinculados ao Poder Judiciário exercem atividade incompatível com a advocacia.', true, 'Correta. Art. 28, IV, e art. 8º, V, do Estatuto: não exercer atividade incompatível é requisito da inscrição.'],
    ['deferido, desde que ela se licencie por 30 dias.', false, 'Errada. Não existe licença curta que afaste a incompatibilidade enquanto ela ocupa o cargo.'],
    ['deferido sem restrições, pois o Exame de Ordem supre qualquer requisito.', false, 'Errada. A aprovação no Exame é apenas um dos requisitos do art. 8º.']
  ] },
{ id: 'et7', materia: 'etica', topico: 'inscricao',
  enunciado: 'Um professor de Direito Penal de universidade pública federal, aprovado na OAB, deseja advogar. Segundo o Estatuto:',
  alt: [
    ['é incompatível, por ser servidor público federal.', false, 'Errada. A docência em universidade pública não está entre as incompatibilidades do art. 28; geraria, no máximo, impedimento contra a Fazenda que o remunera (art. 30, I), do qual os docentes de cursos jurídicos são expressamente excluídos (art. 30, parágrafo único).'],
    ['é impedido de advogar contra a União.', false, 'Errada. A regra geral do impedimento (art. 30, I) não se aplica aos docentes de cursos jurídicos.'],
    ['pode advogar livremente, pois os docentes de cursos jurídicos não se incluem no impedimento.', true, 'Correta. Art. 30, parágrafo único, do Estatuto.'],
    ['só pode advogar em causa própria.', false, 'Errada. Não há essa limitação para docentes.']
  ] },
{ id: 'et8', materia: 'etica', topico: 'inscricao',
  enunciado: 'Um deputado estadual, inscrito na OAB, pretende patrocinar ação em favor de uma concessionária de serviço público. Ele:',
  alt: [
    ['pode, pois o impedimento só alcança causas contra o Poder Público.', false, 'Errada. O art. 30, II, impede o parlamentar de advogar CONTRA OU A FAVOR de concessionárias.'],
    ['é impedido, pois membros do Legislativo não podem advogar contra ou a favor de pessoas jurídicas de direito público, empresas públicas, sociedades de economia mista e concessionárias de serviço público.', true, 'Correta. Art. 30, II, do Estatuto.'],
    ['é incompatível com toda a advocacia.', false, 'Errada. A incompatibilidade atinge membros das MESAS do Legislativo (art. 28, I); o parlamentar comum é apenas impedido.'],
    ['pode, desde que renuncie aos honorários.', false, 'Errada. A gratuidade não afasta o impedimento.']
  ] },
{ id: 'et9', materia: 'etica', topico: 'honorarios',
  enunciado: 'O advogado Rui celebrou contrato com cláusula quota litis, recebendo 30% do proveito econômico. Sobre essa cláusula:',
  alt: [
    ['é vedada pelo Código de Ética.', false, 'Errada. A cláusula quota litis é admitida, desde que respeitados limites.'],
    ['é permitida, mas os honorários, somados aos de sucumbência, não podem ser superiores às vantagens advindas a favor do cliente.', true, 'Correta. Art. 50 do Código de Ética.'],
    ['só é permitida em causas trabalhistas.', false, 'Errada. Não há essa restrição.'],
    ['obriga o advogado a custear todas as despesas do processo.', false, 'Errada. O CED não exige isso; a quota litis apenas condiciona o valor ao êxito.']
  ] },
{ id: 'et10', materia: 'etica', topico: 'honorarios',
  enunciado: 'Não havendo contrato escrito, os honorários do advogado serão:',
  alt: [
    ['indevidos, pois só o contrato escrito gera obrigação.', false, 'Errada. O serviço prestado gera direito a honorários, mesmo sem contrato.'],
    ['fixados por arbitramento judicial, em remuneração compatível com o trabalho e o valor econômico da questão, observados obrigatoriamente os parâmetros do art. 85 do CPC.', true, 'Correta. Art. 22, §2º, do Estatuto, com a redação da Lei 14.365/2022: o arbitramento judicial observa obrigatoriamente os §§ 2º a 6º-A e 8º a 10 do art. 85 do CPC (a antiga menção ao piso da tabela da Seccional saiu do dispositivo).'],
    ['fixados unilateralmente pelo advogado.', false, 'Errada. Na falta de acordo, cabe arbitramento judicial.'],
    ['sempre de 20% sobre o valor da causa.', false, 'Errada. Não há percentual fixo legal para o arbitramento.']
  ] },
{ id: 'et11', materia: 'etica', topico: 'disciplina',
  enunciado: 'O advogado Caio levantou alvará judicial de R$ 50 mil em favor de sua cliente e, cobrado por ela, recusou-se injustificadamente a prestar contas e a repassar a quantia. Instaurado processo disciplinar, a sanção cabível e sua duração são:',
  alt: [
    ['censura.', false, 'Errada. A retenção de valores do cliente é punida com suspensão (art. 37, I, c/c art. 34, XXI).'],
    ['suspensão, que perdura até que satisfaça integralmente a dívida, inclusive com correção monetária.', true, 'Correta. Art. 37, §2º, do Estatuto.'],
    ['exclusão imediata.', false, 'Errada. A exclusão tem hipóteses próprias (art. 38).'],
    ['multa, exclusivamente.', false, 'Errada. A multa é sanção acessória (art. 39).']
  ] },
{ id: 'et12', materia: 'etica', topico: 'disciplina',
  enunciado: 'Quanto à competência para punir disciplinarmente um advogado inscrito em São Paulo que cometeu infração no Rio de Janeiro:',
  alt: [
    ['é do Conselho Seccional de São Paulo, onde ele é inscrito.', false, 'Errada. A competência é definida pelo local da infração.'],
    ['é do Conselho Federal.', false, 'Errada. O Conselho Federal só julga em casos específicos, como infrações de seus membros.'],
    ['é do Conselho Seccional do Rio de Janeiro, em cuja base territorial ocorreu a infração.', true, 'Correta. Art. 70 do Estatuto, salvo se a falta for cometida perante o Conselho Federal.'],
    ['é concorrente entre as duas Seccionais.', false, 'Errada. A lei fixa o critério do local da infração.']
  ] },
{ id: 'et13', materia: 'etica', topico: 'disciplina',
  enunciado: 'A pretensão à punibilidade das infrações disciplinares prescreve em:',
  alt: [
    ['5 anos, contados da constatação oficial do fato.', true, 'Correta. Art. 43 do Estatuto.'],
    ['2 anos, contados da prática do fato.', false, 'Errada. O prazo é de 5 anos e conta da constatação oficial.'],
    ['10 anos, contados do fato.', false, 'Errada. Não é o prazo previsto no art. 43.'],
    ['é imprescritível.', false, 'Errada. Há prazo prescricional expresso.']
  ] },
{ id: 'et14', materia: 'etica', topico: 'publicidade',
  enunciado: 'A advogada Bia quer anunciar em seu perfil profissional no Instagram os valores de suas consultas, com "promoção de lançamento". Segundo o Provimento 205/2021:',
  alt: [
    ['é permitido, desde que o perfil seja profissional.', false, 'Errada. A divulgação de valores e promoções caracteriza mercantilização.'],
    ['é vedado, pois a publicidade não pode divulgar valores de honorários nem conter promoções, o que caracteriza captação e mercantilização.', true, 'Correta. Provimento 205/2021 e art. 39 do Código de Ética (publicidade meramente informativa, sem captação de clientela nem mercantilização).'],
    ['é permitido apenas em anúncios patrocinados.', false, 'Errada. O impulsionamento é permitido só para conteúdo informativo, nunca para preços.'],
    ['depende de autorização prévia da Seccional.', false, 'Errada. Não existe autorização prévia; a conduta é vedada.']
  ] },
{ id: 'et15', materia: 'etica', topico: 'publicidade',
  enunciado: 'Sobre o sigilo profissional, assinale a afirmativa correta.',
  alt: [
    ['O sigilo cessa com a morte do cliente.', false, 'Errada. O dever de sigilo permanece.'],
    ['O advogado pode revelar segredos do cliente para se defender de acusação feita pelo próprio cliente, nos limites da defesa.', true, 'Correta. Art. 37 do Código de Ética: o sigilo cede em defesa própria, restrito ao necessário.'],
    ['O sigilo não abrange informações obtidas em mediação.', false, 'Errada. O CED estende o sigilo à atuação como mediador, conciliador e árbitro (art. 36, §2º).'],
    ['O advogado deve depor se o juiz o determinar.', false, 'Errada. O advogado tem o direito de recusar-se a depor (art. 7º, XIX).']
  ] },
{ id: 'et16', materia: 'etica', topico: 'prerrogativas',
  enunciado: 'São direitos do advogado, segundo o art. 7º do Estatuto, EXCETO:',
  alt: [
    ['comunicar-se com seus clientes presos, pessoal e reservadamente, mesmo sem procuração.', false, 'Errada como resposta: é direito expresso (art. 7º, III).'],
    ['examinar autos de flagrante e de inquérito em qualquer instituição, mesmo sem procuração, salvo os sigilosos.', false, 'Errada como resposta: é direito (art. 7º, XIV). Nos sigilosos, precisa de procuração.'],
    ['ter a presença de representante da OAB quando preso em flagrante por motivo ligado ao exercício da advocacia.', false, 'Errada como resposta: é direito (art. 7º, IV).'],
    ['não ser recolhido preso, mesmo após o trânsito em julgado da condenação, senão em sala de Estado-Maior.', true, 'Correta (é a exceção). O direito à sala de Estado-Maior (ou, na falta dela, à prisão domiciliar) vale só ANTES do trânsito em julgado (art. 7º, V); depois dele, a pena é cumprida no sistema comum.']
  ] },
{ id: 'et17', materia: 'etica', topico: 'prerrogativas',
  enunciado: 'O estagiário de advocacia regularmente inscrito pode:',
  alt: [
    ['praticar todos os atos privativos de advogado sozinho.', false, 'Errada. O estagiário atua em conjunto com o advogado e sob sua responsabilidade.'],
    ['praticar isoladamente atos como retirar e devolver autos em cartório e obter certidões, e os demais atos em conjunto com advogado.', true, 'Correta. Art. 3º, §2º, do Estatuto e art. 29 do Regulamento Geral.'],
    ['assinar sozinho petições iniciais.', false, 'Errada. Depende da assinatura conjunta do advogado.'],
    ['manter a inscrição de estagiário por tempo indeterminado.', false, 'Errada. O estágio dura 2 anos (art. 9º, §1º, do Estatuto) e a identidade de estagiário tem validade máxima de 3 anos, sem prorrogação (art. 35, parágrafo único, do Regulamento Geral).']
  ] },
{ id: 'et18', materia: 'etica', topico: 'prerrogativas',
  enunciado: 'Sobre a sociedade de advogados, é correto afirmar:',
  alt: [
    ['pode registrar-se na Junta Comercial.', false, 'Errada. O registro é feito no Conselho Seccional da OAB, sendo vedado o registro em Junta Comercial (arts. 15, §1º, e 16, §3º).'],
    ['pode ter sócio não inscrito como advogado.', false, 'Errada. É vedado (art. 16).'],
    ['o advogado não pode integrar mais de uma sociedade de advogados com sede ou filial na mesma área territorial do Conselho Seccional.', true, 'Correta. Art. 15, §4º, do Estatuto.'],
    ['os advogados de uma mesma sociedade podem representar clientes com interesses opostos.', false, 'Errada. É vedado (art. 15, §6º).']
  ] },
{ id: 'et19', materia: 'etica', topico: 'prerrogativas',
  enunciado: 'O advogado que renuncia ao mandato deve:',
  alt: [
    ['deixar de atuar imediatamente.', false, 'Errada. Ele continua responsável por 10 dias, salvo se substituído antes.'],
    ['continuar representando o cliente durante os 10 dias seguintes à notificação da renúncia, salvo se for substituído antes.', true, 'Correta. Art. 5º, §3º, do Estatuto e art. 112 do CPC.'],
    ['obter autorização do juiz para renunciar.', false, 'Errada. A renúncia é ato unilateral, apenas comunicado ao cliente.'],
    ['devolver todos os honorários já recebidos.', false, 'Errada. A renúncia não obriga à devolução dos honorários pelos serviços prestados.']
  ] },
{ id: 'et20', materia: 'etica', topico: 'disciplina',
  enunciado: 'O processo disciplinar na OAB:',
  alt: [
    ['é público desde a instauração.', false, 'Errada. Tramita em sigilo até o término (art. 72, §2º).'],
    ['tramita em sigilo até o seu término, só tendo acesso às informações as partes, seus defensores e a autoridade judiciária competente.', true, 'Correta. Art. 72, §2º, do Estatuto.'],
    ['não admite defesa por advogado.', false, 'Errada. É assegurada ampla defesa.'],
    ['só pode ser instaurado por representação do cliente.', false, 'Errada. Pode ser instaurado de ofício ou por representação de qualquer autoridade ou pessoa interessada (art. 72).']
  ] },
// CONSTITUCIONAL
{ id: 'co4', materia: 'constitucional', topico: 'remedios',
  enunciado: 'Uma associação legalmente constituída há mais de um ano pretende impetrar mandado de segurança coletivo em defesa de seus associados. Ela:',
  alt: [
    ['precisa de autorização expressa de cada associado.', false, 'Errada. A Súmula 629 do STF dispensa a autorização dos associados no MS coletivo.'],
    ['pode impetrar, dispensada a autorização dos associados.', true, 'Correta. Art. 5º, LXX, b, da CF e Súmula 629 do STF.'],
    ['não tem legitimidade; só partidos políticos podem impetrar MS coletivo.', false, 'Errada. Partidos, organizações sindicais, entidades de classe e associações são legitimados.'],
    ['só pode defender direitos de todos os associados, nunca de parte deles.', false, 'Errada. A Súmula 630 do STF admite a defesa de interesse de apenas parte da categoria.']
  ] },
{ id: 'co5', materia: 'constitucional', topico: 'remedios',
  enunciado: 'Sobre o habeas corpus, é correto afirmar:',
  alt: [
    ['exige advogado para ser impetrado.', false, 'Errada. Qualquer pessoa pode impetrar, sem advogado.'],
    ['cabe contra punições disciplinares militares quanto ao mérito.', false, 'Errada. O art. 142, §2º, veda HC em relação ao mérito das punições disciplinares militares (cabe para a legalidade).'],
    ['é gratuito e pode ser impetrado por qualquer pessoa, em seu favor ou de outrem.', true, 'Correta. Art. 5º, LXXVII, da CF e art. 654 do CPP.'],
    ['só cabe após a prisão efetiva.', false, 'Errada. Existe HC preventivo, diante de ameaça à liberdade.']
  ] },
{ id: 'co6', materia: 'constitucional', topico: 'controle',
  enunciado: 'Uma câmara de Tribunal de Justiça, sem submeter a questão ao plenário ou ao órgão especial, afastou a aplicação de uma lei por considerá-la inconstitucional, embora sem declará-la expressamente. A decisão:',
  alt: [
    ['é válida, pois não houve declaração expressa de inconstitucionalidade.', false, 'Errada. A Súmula Vinculante 10 considera violada a reserva de plenário mesmo sem declaração expressa.'],
    ['viola a cláusula de reserva de plenário (art. 97 da CF e Súmula Vinculante 10).', true, 'Correta. Afastar a incidência de lei equivale a declarar sua inconstitucionalidade.'],
    ['é válida, pois os tribunais estaduais não se sujeitam ao art. 97.', false, 'Errada. O art. 97 se aplica a todos os tribunais.'],
    ['só seria inválida se proferida pelo STF.', false, 'Errada. A reserva de plenário vincula os tribunais em geral.']
  ] },
{ id: 'co7', materia: 'constitucional', topico: 'controle',
  enunciado: 'A ADPF (arguição de descumprimento de preceito fundamental):',
  alt: [
    ['cabe mesmo quando houver outro meio eficaz de sanar a lesividade.', false, 'Errada. A ADPF é subsidiária (art. 4º, §1º, da Lei 9.882/99).'],
    ['não admite impugnação de lei municipal.', false, 'Errada. A ADPF pode ter por objeto lei municipal e normas anteriores à Constituição.'],
    ['é subsidiária e admite como objeto direito pré-constitucional e leis municipais.', true, 'Correta. Lei 9.882/99, arts. 1º e 4º, §1º.'],
    ['pode ser proposta por qualquer cidadão.', false, 'Errada. Os legitimados são os mesmos da ADI (art. 103).']
  ] },
{ id: 'co8', materia: 'constitucional', topico: 'emendas',
  enunciado: 'Durante a vigência de intervenção federal em um Estado, foi aprovada uma emenda constitucional. Ela é:',
  alt: [
    ['válida, se aprovada por 3/5.', false, 'Errada. O quórum não supera a limitação circunstancial.'],
    ['inconstitucional, pois a Constituição não pode ser emendada na vigência de intervenção federal, estado de defesa ou estado de sítio.', true, 'Correta. Art. 60, §1º, da CF.'],
    ['válida, se não tratar do Estado sob intervenção.', false, 'Errada. A vedação é absoluta durante a intervenção.'],
    ['válida, se promulgada pelo Presidente da República.', false, 'Errada. Emenda é promulgada pelas Mesas e, de qualquer modo, é inválida.']
  ] },
{ id: 'co9', materia: 'constitucional', topico: 'nacionalidade',
  enunciado: 'A respeito da nacionalidade, é brasileiro nato:',
  alt: [
    ['o estrangeiro residente no Brasil há mais de 15 anos ininterruptos, sem condenação penal, que requeira a nacionalidade.', false, 'Errada. Essa é hipótese de naturalização extraordinária (art. 12, II, b).'],
    ['o nascido no estrangeiro, de pai ou mãe brasileiro, desde que registrado em repartição brasileira competente.', true, 'Correta. Art. 12, I, c, da CF.'],
    ['o português com residência permanente no Brasil.', false, 'Errada. Ao português se atribuem os direitos de brasileiro (quase-nacionalidade), não a condição de nato.'],
    ['o filho de diplomatas estrangeiros a serviço de seu país, nascido no Brasil.', false, 'Errada. O art. 12, I, a, exclui os filhos de estrangeiros a serviço de seu país.']
  ] },
{ id: 'co10', materia: 'constitucional', topico: 'nacionalidade',
  enunciado: 'São cargos privativos de brasileiro nato, EXCETO:',
  alt: [
    ['Presidente da Câmara dos Deputados.', false, 'Errada como resposta: é privativo de nato (art. 12, §3º, II).'],
    ['Ministro do STF.', false, 'Errada como resposta: é privativo de nato (art. 12, §3º, IV).'],
    ['Ministro de Estado da Defesa.', false, 'Errada como resposta: é privativo de nato (art. 12, §3º, VII).'],
    ['Ministro do STJ.', true, 'Correta (exceção). Ministro do STJ não consta do rol do art. 12, §3º.']
  ] },
{ id: 'co11', materia: 'constitucional', topico: 'poderes',
  enunciado: 'Compete privativamente ao Senado Federal:',
  alt: [
    ['autorizar a instauração de processo contra o Presidente da República.', false, 'Errada. É competência da Câmara dos Deputados, por 2/3 (art. 51, I).'],
    ['processar e julgar o Presidente da República nos crimes de responsabilidade.', true, 'Correta. Art. 52, I, da CF.'],
    ['julgar o Presidente nos crimes comuns.', false, 'Errada. Nos crimes comuns o julgamento é do STF (art. 102, I, b).'],
    ['tomar as contas do Presidente quando não apresentadas no prazo.', false, 'Errada. É competência da Câmara (art. 51, II).']
  ] },
{ id: 'co12', materia: 'constitucional', topico: 'direitos',
  enunciado: 'Segundo a Constituição, a casa é asilo inviolável do indivíduo. Nela se pode entrar sem consentimento do morador:',
  alt: [
    ['a qualquer hora, por determinação judicial.', false, 'Errada. A ordem judicial só autoriza o ingresso DURANTE O DIA.'],
    ['em caso de flagrante delito, desastre ou para prestar socorro, a qualquer hora; ou, durante o dia, por determinação judicial.', true, 'Correta. Art. 5º, XI, da CF.'],
    ['por ordem da autoridade policial, durante o dia.', false, 'Errada. Exige-se determinação JUDICIAL (reserva de jurisdição).'],
    ['apenas com ordem judicial, em qualquer caso.', false, 'Errada. Flagrante, desastre e socorro dispensam ordem.']
  ] },
// CIVIL
{ id: 'ci4', materia: 'civil', topico: 'capacidade',
  enunciado: 'Pedro, com 16 anos, foi emancipado pelos pais por instrumento público. Essa emancipação:',
  alt: [
    ['depende de homologação judicial.', false, 'Errada. A emancipação voluntária dispensa homologação (art. 5º, parágrafo único, I).'],
    ['é válida, independentemente de homologação judicial.', true, 'Correta. Art. 5º, parágrafo único, I, do CC: basta instrumento público, sem homologação judicial; a emancipação deve ser registrada no Registro Civil (art. 9º, II, do CC) e só produz efeitos após o registro (art. 91, parágrafo único, da Lei 6.015/73).'],
    ['é nula, pois só é possível aos 17 anos.', false, 'Errada. A idade mínima é 16 anos.'],
    ['exime os pais de qualquer responsabilidade civil pelos atos do filho.', false, 'Errada. O STJ entende que a emancipação voluntária não afasta a responsabilidade dos pais.']
  ] },
{ id: 'ci5', materia: 'civil', topico: 'prescricao',
  enunciado: 'Durante o casamento, Ana emprestou dinheiro ao marido. Divorciaram-se 6 anos depois. Quanto à prescrição da cobrança:',
  alt: [
    ['já ocorreu, pois o prazo é de 5 anos e correu durante o casamento.', false, 'Errada. Não corre prescrição entre cônjuges na constância da sociedade conjugal (art. 197, I).'],
    ['não correu durante a constância da sociedade conjugal; começa a correr com o fim dela.', true, 'Correta. Art. 197, I, do CC: causa impeditiva/suspensiva.'],
    ['é imprescritível entre ex-cônjuges.', false, 'Errada. Encerrada a sociedade conjugal, a prescrição corre normalmente.'],
    ['foi interrompida pelo casamento.', false, 'Errada. O casamento não interrompe; impede ou suspende o curso.']
  ] },
{ id: 'ci6', materia: 'civil', topico: 'prescricao',
  enunciado: 'Assinale a afirmativa correta sobre prescrição e decadência.',
  alt: [
    ['A decadência fixada em lei pode ser renunciada.', false, 'Errada. É nula a renúncia à decadência legal (art. 209).'],
    ['Os prazos de prescrição podem ser alterados por acordo das partes.', false, 'Errada. O art. 192 proíbe a alteração por acordo.'],
    ['O juiz deve conhecer de ofício a decadência estabelecida por lei.', true, 'Correta. Art. 210 do CC.'],
    ['A prescrição pode ser interrompida quantas vezes for necessário.', false, 'Errada. Só uma vez (art. 202).']
  ] },
{ id: 'ci7', materia: 'civil', topico: 'sucessoes',
  enunciado: 'Joaquim, viúvo e sem descendentes, faleceu deixando apenas o pai e um irmão. A herança caberá:',
  alt: [
    ['ao pai e ao irmão, em partes iguais.', false, 'Errada. Os colaterais só herdam na falta de descendentes, ascendentes e cônjuge.'],
    ['integralmente ao pai.', true, 'Correta. Na falta de descendentes, herdam os ascendentes (art. 1.829, II); o irmão (colateral) fica excluído.'],
    ['integralmente ao irmão.', false, 'Errada. O ascendente prefere ao colateral.'],
    ['ao Município, por herança jacente.', false, 'Errada. Há herdeiros sucessíveis.']
  ] },
{ id: 'ci8', materia: 'civil', topico: 'sucessoes',
  enunciado: 'Maria tem dois filhos e deseja fazer testamento. Ela pode dispor livremente:',
  alt: [
    ['de todo o seu patrimônio.', false, 'Errada. Havendo herdeiros necessários, metade é reservada (legítima).'],
    ['de metade da herança, pois a outra metade pertence de pleno direito aos herdeiros necessários.', true, 'Correta. Arts. 1.789 e 1.846 do CC.'],
    ['de 1/3 da herança.', false, 'Errada. A porção disponível é de 50%.'],
    ['de nada, pois quem tem filhos não pode testar.', false, 'Errada. Pode testar a parte disponível.']
  ] },
{ id: 'ci9', materia: 'civil', topico: 'respcivil',
  enunciado: 'Sobre a responsabilidade civil no Código Civil, é correto afirmar:',
  alt: [
    ['os pais respondem pelos filhos menores sob sua autoridade apenas se provada culpa in vigilando.', false, 'Errada. A responsabilidade é objetiva (art. 933).'],
    ['o empregador responde objetivamente pelos atos dos empregados no exercício do trabalho.', true, 'Correta. Arts. 932, III, e 933 do CC.'],
    ['a indenização mede-se pela gravidade da culpa, e não pela extensão do dano.', false, 'Errada. A regra é a extensão do dano (art. 944); a culpa só permite redução equitativa.'],
    ['o incapaz nunca responde pelos prejuízos que causar.', false, 'Errada. Responde subsidiariamente (art. 928).']
  ] },
{ id: 'ci10', materia: 'civil', topico: 'negocio',
  enunciado: 'Quanto aos defeitos do negócio jurídico, assinale a correta.',
  alt: [
    ['O dolo acidental anula o negócio.', false, 'Errada. O dolo acidental só obriga a perdas e danos (art. 146).'],
    ['A lesão ocorre quando a pessoa, sob premente necessidade ou por inexperiência, se obriga a prestação manifestamente desproporcional.', true, 'Correta. Art. 157 do CC.'],
    ['A coação exercida por terceiro nunca anula o negócio.', false, 'Errada. Anula se a parte beneficiada sabia ou devia saber (art. 154).'],
    ['O prazo para anular negócio por erro é de 10 anos.', false, 'Errada. É de 4 anos (art. 178).']
  ] },
{ id: 'ci11', materia: 'civil', topico: 'familia',
  enunciado: 'No casamento pelo regime da comunhão parcial de bens, comunicam-se:',
  alt: [
    ['os bens que cada cônjuge possuía antes do casamento.', false, 'Errada. São excluídos (art. 1.659, I).'],
    ['os bens recebidos por doação ou herança durante o casamento.', false, 'Errada. Também excluídos (art. 1.659, I).'],
    ['os bens adquiridos onerosamente na constância do casamento, ainda que em nome de um só dos cônjuges.', true, 'Correta. Art. 1.660, I, do CC.'],
    ['os proventos do trabalho pessoal de cada cônjuge.', false, 'Errada. O art. 1.659, VI, os exclui.']
  ] },
{ id: 'ci12', materia: 'civil', topico: 'reais',
  enunciado: 'A usucapião extraordinária de imóvel exige posse ininterrupta e sem oposição por:',
  alt: [
    ['5 anos, com justo título.', false, 'Errada. Justo título e boa-fé são requisitos da usucapião ORDINÁRIA (10 anos).'],
    ['15 anos, independentemente de título e boa-fé, reduzidos a 10 anos se o possuidor fizer do imóvel sua moradia habitual ou nele realizar obras produtivas.', true, 'Correta. Art. 1.238 do CC.'],
    ['20 anos.', false, 'Errada. Era o prazo do Código de 1916.'],
    ['2 anos, em qualquer caso.', false, 'Errada. 2 anos é a usucapião familiar (art. 1.240-A), com requisitos próprios.']
  ] },
// PROCESSO CIVIL
{ id: 'pc4', materia: 'processocivil', topico: 'prazos',
  enunciado: 'O Município, réu em ação de procedimento comum, terá para contestar o prazo de:',
  alt: [
    ['15 dias úteis.', false, 'Errada. A Fazenda Pública tem prazo em dobro (art. 183).'],
    ['30 dias úteis, por gozar de prazo em dobro.', true, 'Correta. Art. 183 do CPC: prazo em dobro para todas as manifestações.'],
    ['60 dias corridos.', false, 'Errada. O prazo é contado em dias úteis e não é quadruplicado.'],
    ['15 dias corridos.', false, 'Errada. Nem o prazo, nem a forma de contagem.']
  ] },
{ id: 'pc5', materia: 'processocivil', topico: 'prazos',
  enunciado: 'Em processo eletrônico, dois réus litisconsortes têm advogados de escritórios distintos. O prazo para contestar é:',
  alt: [
    ['contado em dobro.', false, 'Errada. O art. 229, §2º, afasta o prazo em dobro nos processos eletrônicos.'],
    ['simples, de 15 dias úteis, pois o benefício não se aplica aos autos eletrônicos.', true, 'Correta. Art. 229, §2º, do CPC.'],
    ['de 20 dias úteis.', false, 'Errada. Não existe esse prazo.'],
    ['em dobro, só para o primeiro réu citado.', false, 'Errada. Não há essa regra.']
  ] },
{ id: 'pc6', materia: 'processocivil', topico: 'recursos',
  enunciado: 'O juiz indeferiu a produção de prova pericial requerida pelo autor. Segundo o CPC, essa decisão:',
  alt: [
    ['deve ser impugnada por agravo de instrumento, sob pena de preclusão.', false, 'Errada. A decisão sobre provas não está no rol do art. 1.015 (salvo a redistribuição do ônus da prova).'],
    ['não preclui e pode ser impugnada em preliminar de apelação ou nas contrarrazões.', true, 'Correta. Art. 1.009, §1º, do CPC.'],
    ['é irrecorrível em qualquer hipótese.', false, 'Errada. Pode ser impugnada na apelação.'],
    ['deve ser impugnada por mandado de segurança.', false, 'Errada. Há via recursal própria (preliminar de apelação).']
  ] },
{ id: 'pc7', materia: 'processocivil', topico: 'recursos',
  enunciado: 'Sobre a apelação no CPC, é correto afirmar:',
  alt: [
    ['o juízo de primeiro grau faz o juízo de admissibilidade.', false, 'Errada. O CPC/15 retirou o juízo de admissibilidade do primeiro grau (art. 1.010, §3º).'],
    ['a sentença que confirma, concede ou revoga tutela provisória começa a produzir efeitos imediatamente após a publicação.', true, 'Correta. Art. 1.012, §1º, V, do CPC.'],
    ['a apelação nunca tem efeito suspensivo.', false, 'Errada. A regra é o efeito suspensivo (art. 1.012).'],
    ['o prazo é de 8 dias.', false, 'Errada. É de 15 dias úteis.']
  ] },
{ id: 'pc8', materia: 'processocivil', topico: 'tutelas',
  enunciado: 'O autor juntou prova documental de seu direito e há tese firmada em julgamento de recursos repetitivos a seu favor. Ele pode obter:',
  alt: [
    ['tutela de evidência, inclusive liminarmente, sem demonstrar perigo de dano.', true, 'Correta. Art. 311, II, e parágrafo único, do CPC.'],
    ['tutela de urgência cautelar apenas.', false, 'Errada. A hipótese é de evidência, que dispensa urgência.'],
    ['julgamento antecipado, sem ouvir o réu.', false, 'Errada. O julgamento antecipado do mérito pressupõe o contraditório.'],
    ['nada, pois é preciso aguardar a sentença.', false, 'Errada. O CPC admite tutela de evidência.']
  ] },
{ id: 'pc9', materia: 'processocivil', topico: 'tutelas',
  enunciado: 'A tutela de urgência de natureza antecipada NÃO será concedida quando:',
  alt: [
    ['houver risco ao resultado útil do processo.', false, 'Errada. O risco é requisito para conceder, não para negar.'],
    ['houver perigo de irreversibilidade dos efeitos da decisão.', true, 'Correta. Art. 300, §3º, do CPC.'],
    ['o réu ainda não tiver sido citado.', false, 'Errada. Pode ser concedida liminarmente.'],
    ['o juiz exigir caução.', false, 'Errada. A caução pode ser exigida para concedê-la (art. 300, §1º).']
  ] },
{ id: 'pc10', materia: 'processocivil', topico: 'procedimento',
  enunciado: 'Na petição inicial, o autor informou que não tem interesse na audiência de conciliação. O réu também manifestou desinteresse. Nesse caso:',
  alt: [
    ['a audiência ocorre de qualquer forma.', false, 'Errada. Ela não se realiza se ambas as partes manifestarem desinteresse (art. 334, §4º, I).'],
    ['a audiência não será realizada, e o prazo para contestar conta do protocolo do pedido de cancelamento pelo réu.', true, 'Correta. Arts. 334, §4º, I, e 335, II, do CPC.'],
    ['o processo é extinto.', false, 'Errada. O processo segue normalmente.'],
    ['o réu é considerado revel.', false, 'Errada. Não há revelia.']
  ] },
{ id: 'pc11', materia: 'processocivil', topico: 'recursos',
  enunciado: 'Os embargos de declaração opostos contra sentença:',
  alt: [
    ['suspendem o prazo para os demais recursos.', false, 'Errada. Eles INTERROMPEM o prazo (art. 1.026).'],
    ['interrompem o prazo para a interposição de recurso.', true, 'Correta. Art. 1.026 do CPC.'],
    ['não têm efeito sobre os prazos.', false, 'Errada. Há efeito interruptivo.'],
    ['só cabem contra acórdãos.', false, 'Errada. Cabem contra qualquer decisão judicial (art. 1.022).']
  ] },
{ id: 'pc12', materia: 'processocivil', topico: 'procedimento',
  enunciado: 'O réu, devidamente citado, não contestou a ação. A revelia NÃO produz o efeito de presunção de veracidade dos fatos quando:',
  alt: [
    ['o réu for pessoa jurídica.', false, 'Errada. Não é hipótese do art. 345.'],
    ['havendo pluralidade de réus, algum deles contestar a ação.', true, 'Correta. Art. 345, I, do CPC.'],
    ['o valor da causa for elevado.', false, 'Errada. Não há essa exceção.'],
    ['o autor tiver advogado particular.', false, 'Errada. Irrelevante para a revelia.']
  ] }
);
