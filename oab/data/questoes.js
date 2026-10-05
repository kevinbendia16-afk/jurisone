/* Banco de questões inéditas no estilo FGV. Cada alternativa traz o "porquê".
 * Formato: { id, materia, topico, enunciado, alt: [[texto, correta?, explicação], ...] } */
window.QUESTOES = [
// ÉTICA
{ id: 'et1', materia: 'etica', topico: 'inscricao',
  enunciado: 'Marcos, policial civil da ativa, foi aprovado no Exame de Ordem e deseja advogar apenas em causa própria, numa ação de cobrança contra um vizinho. Segundo o Estatuto da Advocacia, Marcos:',
  alt: [
    ['pode advogar em causa própria, pois o impedimento só alcança causas contra a Fazenda Pública.', false, 'Errada. Policial não tem mero impedimento: o art. 28, V, do Estatuto prevê INCOMPATIBILIDADE, que é a proibição total.'],
    ['não pode advogar, nem em causa própria, pois a atividade policial é incompatível com a advocacia.', true, 'Correta. A incompatibilidade (art. 28, V) proíbe totalmente a advocacia, inclusive em causa própria.'],
    ['pode advogar, desde que obtenha autorização do seu superior hierárquico.', false, 'Errada. Não existe autorização que afaste a incompatibilidade, prevista em lei.'],
    ['pode advogar, pois a incompatibilidade só se aplica a policiais militares.', false, 'Errada. O art. 28, V, alcança os ocupantes de cargos vinculados à atividade policial de QUALQUER natureza.']
  ] },
{ id: 'et2', materia: 'etica', topico: 'honorarios',
  enunciado: 'Ao fim de uma ação, o juiz condenou o réu ao pagamento de honorários de sucumbência. A cliente da advogada vencedora afirma que esse valor lhe pertence, para compensar o que pagou de honorários contratuais. Assinale a afirmativa correta.',
  alt: [
    ['A cliente tem razão, pois a sucumbência serve para ressarcir a parte vencedora.', false, 'Errada. Essa era a lógica antiga; o art. 23 do Estatuto atribui a sucumbência ao advogado.'],
    ['Os honorários devem ser divididos igualmente entre a cliente e a advogada.', false, 'Errada. Não há divisão legal; pertencem integralmente ao advogado, salvo estipulação diversa em contrato.'],
    ['Os honorários de sucumbência pertencem à advogada, que pode executá-los autonomamente.', true, 'Correta. Art. 23 do Estatuto: a sucumbência pertence ao advogado, que tem direito autônomo de executá-la.'],
    ['Os honorários pertencem ao Estado, como custas processuais.', false, 'Errada. Honorários não se confundem com custas processuais.']
  ] },
{ id: 'et3', materia: 'etica', topico: 'honorarios',
  enunciado: 'O advogado Paulo concluiu um serviço extrajudicial e não recebeu os honorários contratados. Qual o prazo prescricional para a ação de cobrança?',
  alt: [
    ['3 anos, contados da celebração do contrato.', false, 'Errada. O prazo de 3 anos é o da reparação civil no Código Civil; o Estatuto tem regra própria.'],
    ['10 anos, por se tratar do prazo geral do Código Civil.', false, 'Errada. O prazo geral só se aplica sem regra especial, e o Estatuto a tem (art. 25).'],
    ['1 ano, contado da conclusão do serviço.', false, 'Errada. Não há prazo de 1 ano para honorários no Estatuto.'],
    ['5 anos, contados da ultimação do serviço extrajudicial.', true, 'Correta. Art. 25, III, do Estatuto: prescreve em 5 anos, contados da ultimação do serviço extrajudicial.']
  ] },
{ id: 'et4', materia: 'etica', topico: 'disciplina',
  enunciado: 'Um advogado já sofreu três sanções de suspensão em processos disciplinares distintos. Diante de nova infração, a sanção cabível e o quórum necessário são:',
  alt: [
    ['exclusão, que depende da manifestação favorável de 2/3 dos membros do Conselho Seccional.', true, 'Correta. Art. 38, I e parágrafo único: exclusão após 3 suspensões, com quórum de 2/3 do Conselho Seccional.'],
    ['nova suspensão, pelo prazo máximo de 12 meses, decidida por maioria simples do TED.', false, 'Errada. A reincidência após 3 suspensões leva à exclusão, não a nova suspensão.'],
    ['exclusão, decidida pelo Conselho Federal por maioria simples.', false, 'Errada. A competência é do Conselho Seccional e o quórum é qualificado (2/3).'],
    ['censura, convertida em advertência por ofício reservado.', false, 'Errada. A censura é a sanção mais leve; não se aplica a quem já sofreu três suspensões.']
  ] },
{ id: 'et5', materia: 'etica', topico: 'publicidade',
  enunciado: 'A advogada Júlia foi intimada a depor como testemunha sobre fatos que conheceu ao atender um ex-cliente, que expressamente a autorizou a falar. Júlia deve:',
  alt: [
    ['depor, pois a autorização do cliente afasta o sigilo profissional.', false, 'Errada. O Código de Ética determina a recusa a depor mesmo com autorização do cliente.'],
    ['recusar-se a depor, mesmo autorizada pelo ex-cliente.', true, 'Correta. Art. 7º, XIX, do Estatuto e art. 38 do Código de Ética: o advogado recusa-se a depor sobre fato de quem foi ou é cliente, mesmo autorizado.'],
    ['depor, porque o sigilo cessa com o fim do mandato.', false, 'Errada. O sigilo permanece após o fim da relação profissional.'],
    ['depor apenas sobre fatos favoráveis ao ex-cliente.', false, 'Errada. Não existe essa ressalva; a recusa abrange os fatos ligados ao patrocínio.']
  ] },
// CONSTITUCIONAL
{ id: 'co1', materia: 'constitucional', topico: 'remedios',
  enunciado: 'João teve negado, pelo órgão público, o acesso às informações sobre ele próprio constantes de um banco de dados governamental. A medida judicial adequada é:',
  alt: [
    ['mandado de segurança.', false, 'Errada. O MS é residual: não cabe quando o direito é amparado por habeas data.'],
    ['ação popular.', false, 'Errada. A ação popular protege o patrimônio público e a moralidade, não interesses pessoais de informação.'],
    ['habeas data.', true, 'Correta. Art. 5º, LXXII: o habeas data assegura o conhecimento de informações relativas à pessoa do impetrante. A recusa administrativa já foi demonstrada.'],
    ['mandado de injunção.', false, 'Errada. O MI cabe na falta de norma regulamentadora, o que não é o caso.']
  ] },
{ id: 'co2', materia: 'constitucional', topico: 'controle',
  enunciado: 'Qual dos legitimados abaixo pode propor Ação Direta de Inconstitucionalidade perante o STF SEM precisar demonstrar pertinência temática?',
  alt: [
    ['Governador de Estado.', false, 'Errada. Governador é legitimado especial: deve demonstrar pertinência temática.'],
    ['Confederação sindical.', false, 'Errada. Confederações sindicais e entidades de classe são legitimadas especiais.'],
    ['Conselho Seccional da OAB.', false, 'Errada. O Conselho Seccional nem sequer é legitimado; só o Conselho FEDERAL da OAB.'],
    ['Partido político com representação no Congresso Nacional.', true, 'Correta. O partido com representação no Congresso é legitimado universal (art. 103, VIII).']
  ] },
{ id: 'co3', materia: 'constitucional', topico: 'emendas',
  enunciado: 'Uma PEC propõe abolir o voto secreto nas eleições gerais. Sobre ela, é correto afirmar:',
  alt: [
    ['é inconstitucional, pois o voto direto, secreto, universal e periódico é cláusula pétrea.', true, 'Correta. Art. 60, §4º, II: não será objeto de deliberação proposta tendente a abolir o voto direto, secreto, universal e periódico.'],
    ['é válida se aprovada por 3/5 em dois turnos em cada Casa.', false, 'Errada. O quórum qualificado não supera os limites materiais das cláusulas pétreas.'],
    ['é válida se aprovada em referendo popular.', false, 'Errada. Não há previsão de referendo para superar cláusula pétrea.'],
    ['depende de sanção do Presidente da República.', false, 'Errada. Emendas não se submetem a sanção ou veto; e esta é inconstitucional de todo modo.']
  ] },
// CIVIL
{ id: 'ci1', materia: 'civil', topico: 'capacidade',
  enunciado: 'Segundo o Código Civil, com a redação dada pelo Estatuto da Pessoa com Deficiência, são absolutamente incapazes de exercer pessoalmente os atos da vida civil:',
  alt: [
    ['os menores de 16 anos e as pessoas com deficiência mental.', false, 'Errada. A deficiência deixou de ser causa de incapacidade absoluta (Lei 13.146/15).'],
    ['apenas os menores de 16 anos.', true, 'Correta. Art. 3º do CC: só os menores de 16 anos são absolutamente incapazes.'],
    ['os menores de 18 anos e os pródigos.', false, 'Errada. Entre 16 e 18 anos e pródigos são RELATIVAMENTE incapazes (art. 4º).'],
    ['os ébrios habituais e os viciados em tóxico.', false, 'Errada. São relativamente incapazes (art. 4º, II).']
  ] },
{ id: 'ci2', materia: 'civil', topico: 'prescricao',
  enunciado: 'Ana sofreu danos em um acidente de trânsito causado por Bruno. Qual o prazo prescricional para Ana pleitear a reparação civil?',
  alt: [
    ['10 anos.', false, 'Errada. É o prazo geral (art. 205), afastado pela regra especial.'],
    ['5 anos.', false, 'Errada. 5 anos é o prazo, por exemplo, para cobrança de dívidas líquidas em instrumento (art. 206, §5º, I).'],
    ['3 anos.', true, 'Correta. Art. 206, §3º, V: prescreve em 3 anos a pretensão de reparação civil.'],
    ['1 ano.', false, 'Errada. 1 ano é para casos específicos, como a pretensão do segurado contra o segurador.']
  ] },
{ id: 'ci3', materia: 'civil', topico: 'sucessoes',
  enunciado: 'Carlos faleceu sem testamento, deixando esposa (casada no regime da comunhão universal) e dois filhos. Quanto à herança:',
  alt: [
    ['a esposa concorre com os filhos em partes iguais.', false, 'Errada. Na comunhão universal o cônjuge não concorre com os descendentes (art. 1.829, I).'],
    ['a esposa recebe metade da herança e os filhos dividem a outra metade.', false, 'Errada. Confunde meação com herança: a meação não integra a herança.'],
    ['a esposa herda tudo, por ser herdeira necessária.', false, 'Errada. Os descendentes estão na 1ª classe da ordem de vocação.'],
    ['os filhos herdam a totalidade da herança, cabendo à esposa sua meação.', true, 'Correta. Na comunhão universal, a viúva é meeira e não concorre com os descendentes na herança.']
  ] },
// PROCESSO CIVIL
{ id: 'pc1', materia: 'processocivil', topico: 'prazos',
  enunciado: 'Publicada a sentença, a parte deseja opor embargos de declaração por omissão. Qual o prazo?',
  alt: [
    ['5 dias úteis.', true, 'Correta. Art. 1.023 do CPC: 5 dias, contados em dias úteis (art. 219).'],
    ['15 dias úteis.', false, 'Errada. 15 dias é o prazo dos demais recursos (art. 1.003, §5º).'],
    ['5 dias corridos.', false, 'Errada. No CPC, os prazos processuais em dias contam-se em dias úteis.'],
    ['10 dias úteis.', false, 'Errada. Não há esse prazo para embargos de declaração.']
  ] },
{ id: 'pc2', materia: 'processocivil', topico: 'recursos',
  enunciado: 'O juiz indeferiu pedido de tutela provisória de urgência formulado pelo autor. O recurso cabível é:',
  alt: [
    ['apelação.', false, 'Errada. Apelação cabe contra sentença; trata-se de decisão interlocutória.'],
    ['agravo interno.', false, 'Errada. O agravo interno impugna decisão de relator no tribunal.'],
    ['agravo de instrumento.', true, 'Correta. Art. 1.015, I: cabe agravo de instrumento contra interlocutória que versa sobre tutelas provisórias.'],
    ['nenhum recurso imediato; a matéria deve ser alegada em preliminar de apelação.', false, 'Errada. Essa regra vale para as interlocutórias FORA do rol do art. 1.015.']
  ] },
{ id: 'pc3', materia: 'processocivil', topico: 'tutelas',
  enunciado: 'Concedida tutela antecipada em caráter antecedente, o réu não interpôs recurso. Nesse caso:',
  alt: [
    ['a decisão faz coisa julgada material imediatamente.', false, 'Errada. O art. 304, §6º, diz expressamente que a estabilização não faz coisa julgada.'],
    ['a tutela torna-se estável e o processo é extinto; qualquer das partes pode, em 2 anos, ajuizar ação para revê-la.', true, 'Correta. Art. 304, caput, §1º, §2º e §5º do CPC.'],
    ['a tutela perde automaticamente a eficácia.', false, 'Errada. Ao contrário, ela se estabiliza.'],
    ['o juiz deve converter o procedimento em comum de ofício.', false, 'Errada. Sem recurso, ocorre a estabilização, não a conversão.']
  ] },
// PENAL
{ id: 'pe1', materia: 'penal', topico: 'aplicacao',
  enunciado: 'Em 2023, Pedro, com 20 anos, atirou contra Lucas, que morreu apenas meses depois. Considera-se praticado o crime:',
  alt: [
    ['no momento da morte, pela teoria do resultado.', false, 'Errada. O CP não adota a teoria do resultado quanto ao tempo do crime.'],
    ['no momento dos disparos, pela teoria da atividade.', true, 'Correta. Art. 4º do CP: considera-se praticado o crime no momento da ação ou omissão.'],
    ['tanto no momento dos disparos quanto no da morte, pela teoria da ubiquidade.', false, 'Errada. A ubiquidade é adotada para o LUGAR do crime (art. 6º), não para o tempo.'],
    ['na data do recebimento da denúncia.', false, 'Errada. O recebimento da denúncia é marco processual, não o tempo do crime.']
  ] },
{ id: 'pe2', materia: 'penal', topico: 'excludentes',
  enunciado: 'Rita furtou um celular. Arrependida, devolveu-o voluntariamente à vítima antes do oferecimento da denúncia. Rita:',
  alt: [
    ['não responde pelo crime, pela desistência voluntária.', false, 'Errada. A desistência ocorre antes da consumação; aqui o furto já se consumou.'],
    ['responde apenas pelos atos praticados, pelo arrependimento eficaz.', false, 'Errada. O arrependimento eficaz impede a consumação; o furto já estava consumado.'],
    ['terá a pena reduzida de 1/3 a 2/3, pelo arrependimento posterior.', true, 'Correta. Art. 16: crime sem violência ou grave ameaça, restituição voluntária da coisa até o recebimento da denúncia.'],
    ['terá a punibilidade extinta.', false, 'Errada. A restituição não extingue a punibilidade no furto; gera apenas redução da pena.']
  ] },
{ id: 'pe3', materia: 'penal', topico: 'prescricaopenal',
  enunciado: 'José tinha 19 anos na data do crime. Ao calcular a prescrição, deve-se:',
  alt: [
    ['reduzir o prazo pela metade.', true, 'Correta. Art. 115 do CP: o prazo é reduzido de metade quando o agente era menor de 21 anos ao tempo do crime.'],
    ['aumentar o prazo em 1/3.', false, 'Errada. O aumento de 1/3 decorre da reincidência e só na prescrição da pretensão executória (art. 110).'],
    ['aplicar o prazo normalmente, pois ele já era maior de 18 anos.', false, 'Errada. O benefício alcança os menores de 21 anos.'],
    ['reduzir o prazo em 1/3.', false, 'Errada. A redução é de metade.']
  ] },
// PROCESSO PENAL
{ id: 'pp1', materia: 'processopenal', topico: 'prisoes',
  enunciado: 'Durante a instrução, sem qualquer requerimento, o juiz decretou de ofício a prisão preventiva do réu. A decisão é:',
  alt: [
    ['válida, pois o juiz pode decretar a preventiva de ofício durante a ação penal.', false, 'Errada. Essa possibilidade foi suprimida pelo Pacote Anticrime (Lei 13.964/19).'],
    ['válida, se o crime for hediondo.', false, 'Errada. Não há exceção para crimes hediondos.'],
    ['ilegal, pois após a Lei 13.964/19 a preventiva depende de requerimento ou representação.', true, 'Correta. Art. 311 do CPP. Cabe habeas corpus ou pedido de relaxamento da prisão.'],
    ['válida, desde que revista em 90 dias.', false, 'Errada. A revisão periódica não convalida a ilegalidade da decretação de ofício.']
  ] },
{ id: 'pp2', materia: 'processopenal', topico: 'acaopenal',
  enunciado: 'Vítima de crime de ação penal privada descobriu a autoria há 7 meses e só agora procurou um advogado para oferecer queixa. Nessa situação:',
  alt: [
    ['a queixa pode ser oferecida, pois o prazo é de 1 ano.', false, 'Errada. O prazo é de 6 meses (art. 38 CPP).'],
    ['ocorreu a decadência, causa de extinção da punibilidade.', true, 'Correta. Passados 6 meses do conhecimento da autoria, decai o direito de queixa (art. 38 CPP e art. 107, IV, CP).'],
    ['ocorreu a perempção.', false, 'Errada. A perempção ocorre durante a ação já proposta, por desídia do querelante (art. 60 CPP).'],
    ['o MP pode oferecer denúncia em substituição.', false, 'Errada. A ação penal privada subsidiária é o contrário; o MP não assume a ação privada exclusiva.']
  ] },
{ id: 'pp3', materia: 'processopenal', topico: 'procedimento',
  enunciado: 'Citado no procedimento comum, o réu deve apresentar resposta à acusação no prazo de:',
  alt: [
    ['15 dias.', false, 'Errada. 15 dias é o prazo da contestação no processo civil.'],
    ['5 dias.', false, 'Errada. 5 dias é o prazo de interposição da apelação criminal.'],
    ['8 dias.', false, 'Errada. 8 dias é o prazo das razões de apelação.'],
    ['10 dias.', true, 'Correta. Art. 396 do CPP.']
  ] },
// TRABALHO
{ id: 'tr1', materia: 'trabalho', topico: 'rescisao',
  enunciado: 'Lúcia trabalhou 5 anos completos na mesma empresa e foi dispensada sem justa causa. Seu aviso prévio é de:',
  alt: [
    ['30 dias.', false, 'Errada. Ignora a proporcionalidade da Lei 12.506/11.'],
    ['45 dias.', true, 'Correta. 30 dias + 3 dias por ano completo (5 × 3 = 15) = 45 dias.'],
    ['50 dias.', false, 'Errada. Seria 30 + 4 por ano, cálculo sem previsão legal.'],
    ['90 dias.', false, 'Errada. 90 dias é o teto, alcançado apenas com 20 anos de serviço.']
  ] },
{ id: 'tr2', materia: 'trabalho', topico: 'rescisao',
  enunciado: 'Empregado e empregador decidem extinguir o contrato de comum acordo (art. 484-A da CLT). O empregado:',
  alt: [
    ['receberá seguro-desemprego.', false, 'Errada. O art. 484-A, §2º, veda o seguro-desemprego.'],
    ['receberá multa de 40% do FGTS.', false, 'Errada. A multa é reduzida à metade: 20%.'],
    ['receberá metade do aviso prévio indenizado e da multa do FGTS, e poderá sacar até 80% do FGTS.', true, 'Correta. Art. 484-A, I e §1º.'],
    ['não receberá nenhuma verba rescisória.', false, 'Errada. As demais verbas são devidas integralmente.']
  ] },
{ id: 'tr3', materia: 'trabalho', topico: 'jornada',
  enunciado: 'Após a Reforma Trabalhista, o tempo gasto pelo empregado no deslocamento de casa até o posto de trabalho, em condução fornecida pelo empregador:',
  alt: [
    ['integra a jornada se o local for de difícil acesso.', false, 'Errada. Essa era a regra anterior (Súmula 90 TST), superada pela Reforma.'],
    ['não é computado na jornada, por não ser tempo à disposição do empregador.', true, 'Correta. Art. 58, §2º, da CLT, com redação da Lei 13.467/17.'],
    ['é pago como hora extra com adicional de 50%.', false, 'Errada. Não é sequer tempo de jornada.'],
    ['é computado pela metade.', false, 'Errada. Não há previsão de cômputo parcial.']
  ] },
// PROCESSO DO TRABALHO
{ id: 'pt1', materia: 'processotrabalho', topico: 'recursostrab',
  enunciado: 'A empresa X, em recuperação judicial, quer interpor recurso ordinário. Quanto ao depósito recursal:',
  alt: [
    ['deve depositar o valor integral.', false, 'Errada. O art. 899, §10, isenta as empresas em recuperação judicial.'],
    ['deve depositar metade do valor.', false, 'Errada. A redução pela metade é para ME, EPP, MEI, doméstico e entidades sem fins lucrativos.'],
    ['está isenta do depósito recursal.', true, 'Correta. Art. 899, §10, da CLT.'],
    ['pode substituí-lo por nota promissória.', false, 'Errada. Admite-se fiança bancária ou seguro garantia judicial (art. 899, §11), não nota promissória.']
  ] },
{ id: 'pt2', materia: 'processotrabalho', topico: 'recursostrab',
  enunciado: 'O prazo para interposição de recurso ordinário na Justiça do Trabalho é de:',
  alt: [
    ['8 dias úteis.', true, 'Correta. Lei 5.584/70, art. 6º, e art. 895 da CLT; contagem em dias úteis (art. 775).'],
    ['15 dias úteis.', false, 'Errada. É o prazo do CPC, não aplicável ao processo do trabalho.'],
    ['8 dias corridos.', false, 'Errada. Após a Reforma, os prazos trabalhistas são contados em dias úteis.'],
    ['5 dias úteis.', false, 'Errada. É o prazo dos embargos de declaração.']
  ] },
// ADMINISTRATIVO
{ id: 'ad1', materia: 'administrativo', topico: 'atos',
  enunciado: 'A Administração Pública revogou, por conveniência e oportunidade, um ato administrativo discricionário válido. Os efeitos dessa revogação são:',
  alt: [
    ['ex tunc, retroagindo à data do ato.', false, 'Errada. Efeitos ex tunc são próprios da anulação, por ilegalidade.'],
    ['ex nunc, a partir da revogação.', true, 'Correta. A revogação respeita os efeitos já produzidos pelo ato válido (Súmula 473 STF).'],
    ['nulos, pois a Administração não pode revogar seus atos.', false, 'Errada. A Administração pode revogar seus atos discricionários (autotutela).'],
    ['dependentes de homologação judicial.', false, 'Errada. A revogação não depende do Judiciário.']
  ] },
{ id: 'ad2', materia: 'administrativo', topico: 'licitacoes',
  enunciado: 'São modalidades de licitação previstas na Lei 14.133/21:',
  alt: [
    ['concorrência, tomada de preços, convite, concurso e leilão.', false, 'Errada. Tomada de preços e convite foram extintos pela nova lei.'],
    ['pregão, concorrência, concurso, leilão e diálogo competitivo.', true, 'Correta. Art. 28 da Lei 14.133/21.'],
    ['pregão, concorrência, RDC, leilão e convite.', false, 'Errada. RDC e convite não são modalidades da nova lei.'],
    ['concorrência, concurso, leilão, credenciamento e pregão.', false, 'Errada. Credenciamento é procedimento auxiliar (art. 78), não modalidade.']
  ] },
{ id: 'ad3', materia: 'administrativo', topico: 'improbidade',
  enunciado: 'Um servidor, por negligência, causou prejuízo ao erário. Segundo a Lei 8.429/92, com a redação da Lei 14.230/21:',
  alt: [
    ['responde por improbidade culposa por lesão ao erário.', false, 'Errada. A modalidade culposa foi extinta.'],
    ['não responde por improbidade, que exige dolo, sem prejuízo de outras responsabilizações.', true, 'Correta. Art. 1º, §§1º e 2º: só condutas dolosas configuram improbidade. Pode haver responsabilidade civil e administrativa.'],
    ['responde por violação aos princípios.', false, 'Errada. Também exige dolo e o rol do art. 11 é taxativo.'],
    ['responde por enriquecimento ilícito.', false, 'Errada. Não houve enriquecimento, e também exigiria dolo.']
  ] },
// TRIBUTÁRIO
{ id: 'tb1', materia: 'tributario', topico: 'principios',
  enunciado: 'Lei publicada em dezembro aumentou a alíquota do Imposto de Renda. Quanto à anterioridade, o aumento:',
  alt: [
    ['pode ser cobrado imediatamente.', false, 'Errada. O IR não é exceção à anterioridade anual.'],
    ['só pode ser cobrado após 90 dias da publicação.', false, 'Errada. O IR é exceção justamente à nonagesimal.'],
    ['pode ser cobrado a partir de 1º de janeiro do ano seguinte, pois o IR é exceção apenas à nonagesimal.', true, 'Correta. Art. 150, §1º: o IR respeita a anterioridade anual, mas não a nonagesimal.'],
    ['só pode ser cobrado após o exercício seguinte e mais 90 dias.', false, 'Errada. Não se aplica a nonagesimal ao IR.']
  ] },
{ id: 'tb2', materia: 'tributario', topico: 'credito',
  enunciado: 'O parcelamento do débito tributário é hipótese de:',
  alt: [
    ['extinção do crédito tributário.', false, 'Errada. O parcelamento não extingue; o débito só se extingue com o pagamento integral.'],
    ['exclusão do crédito tributário.', false, 'Errada. Exclusão são apenas isenção e anistia (art. 175).'],
    ['suspensão da exigibilidade do crédito tributário.', true, 'Correta. Art. 151, VI, do CTN.'],
    ['constituição do crédito tributário.', false, 'Errada. A constituição ocorre pelo lançamento.']
  ] },
// EMPRESARIAL
{ id: 'em1', materia: 'empresarial', topico: 'titulos',
  enunciado: 'Um cheque foi emitido em São Paulo para ser pago em agência na mesma praça. O prazo de apresentação é de:',
  alt: [
    ['30 dias da emissão.', true, 'Correta. Art. 33 da Lei 7.357/85: 30 dias na mesma praça.'],
    ['60 dias da emissão.', false, 'Errada. 60 dias é para cheques de praça diferente.'],
    ['6 meses da emissão.', false, 'Errada. 6 meses é o prazo prescricional da execução, contado após o prazo de apresentação.'],
    ['não há prazo de apresentação.', false, 'Errada. A lei fixa prazos de apresentação.']
  ] },
{ id: 'em2', materia: 'empresarial', topico: 'sociedades',
  enunciado: 'Na sociedade limitada, a responsabilidade dos sócios:',
  alt: [
    ['é ilimitada e solidária.', false, 'Errada. Isso ocorre na sociedade em nome coletivo.'],
    ['é restrita ao valor de suas quotas, mas todos respondem solidariamente pela integralização do capital social.', true, 'Correta. Art. 1.052 do Código Civil.'],
    ['é restrita ao valor das quotas, sem qualquer solidariedade.', false, 'Errada. Há solidariedade pela integralização do capital.'],
    ['é subsidiária e ilimitada.', false, 'Errada. Não corresponde à regra da limitada.']
  ] },
// ECA
{ id: 'ec1', materia: 'eca', topico: 'medidas',
  enunciado: 'Sobre a medida socioeducativa de internação, é correto afirmar:',
  alt: [
    ['pode durar no máximo 5 anos.', false, 'Errada. O prazo máximo é de 3 anos (art. 121, §3º).'],
    ['pode ser aplicada a criança de 11 anos que pratique ato infracional grave.', false, 'Errada. Criança recebe apenas medidas de proteção (art. 105).'],
    ['não comporta prazo determinado, deve ser reavaliada no máximo a cada 6 meses e não pode exceder 3 anos.', true, 'Correta. Art. 121, §§2º e 3º, do ECA.'],
    ['a liberação compulsória ocorre aos 18 anos.', false, 'Errada. A liberação compulsória é aos 21 anos (art. 121, §5º).']
  ] },
// CDC
{ id: 'cd1', materia: 'cdc', topico: 'respcdc',
  enunciado: 'Maria comprou uma geladeira que, após 20 dias, parou de funcionar (vício aparente). O prazo para reclamar é de:',
  alt: [
    ['30 dias.', false, 'Errada. 30 dias é para produtos NÃO duráveis.'],
    ['90 dias.', true, 'Correta. Art. 26, II, do CDC: 90 dias para produtos duráveis.'],
    ['5 anos.', false, 'Errada. 5 anos é a prescrição da reparação por FATO do produto (art. 27).'],
    ['7 dias.', false, 'Errada. 7 dias é o direito de arrependimento nas compras fora do estabelecimento.']
  ] },
{ id: 'cd2', materia: 'cdc', topico: 'respcdc',
  enunciado: 'Um celular explodiu e causou queimaduras no consumidor. O fabricante é identificado. Quanto ao comerciante que vendeu o aparelho:',
  alt: [
    ['responde solidariamente, sempre.', false, 'Errada. No FATO do produto, o comerciante responde subsidiariamente (art. 13).'],
    ['responde apenas se o fabricante não puder ser identificado, ou se não conservar adequadamente produtos perecíveis.', true, 'Correta. Art. 13 do CDC.'],
    ['nunca responde.', false, 'Errada. Responde nas hipóteses do art. 13.'],
    ['responde só se houver culpa.', false, 'Errada. A responsabilidade no CDC é objetiva.']
  ] },
// AMBIENTAL
{ id: 'am1', materia: 'ambiental', topico: 'respamb',
  enunciado: 'Pedro comprou um imóvel rural com área de preservação permanente já desmatada pelo antigo dono. A obrigação de recuperar a área:',
  alt: [
    ['é exclusiva do antigo proprietário, causador do dano.', false, 'Errada. A obrigação é propter rem e acompanha o imóvel.'],
    ['pode ser exigida de Pedro e/ou do antigo proprietário, à escolha do credor.', true, 'Correta. Súmula 623 do STJ.'],
    ['está prescrita se o dano ocorreu há mais de 5 anos.', false, 'Errada. A reparação do dano ambiental é imprescritível (Tema 999 STF).'],
    ['depende de prova de culpa de Pedro.', false, 'Errada. A responsabilidade civil ambiental é objetiva.']
  ] },
// DH
{ id: 'dh1', materia: 'dh', topico: 'tratados',
  enunciado: 'A Convenção Americana de Direitos Humanos foi incorporada antes da EC 45/04, sem o rito do art. 5º, §3º. Segundo o STF, ela possui status:',
  alt: [
    ['de lei ordinária.', false, 'Errada. Esse era o entendimento antigo, superado no RE 466.343.'],
    ['de emenda constitucional.', false, 'Errada. Só os aprovados pelo rito do §3º (3/5, dois turnos) equivalem a emenda.'],
    ['supralegal.', true, 'Correta. RE 466.343: acima das leis e abaixo da Constituição.'],
    ['supraconstitucional.', false, 'Errada. O STF não admite status acima da Constituição.']
  ] },
// INTERNACIONAL
{ id: 'in1', materia: 'internacional', topico: 'lindb',
  enunciado: 'A competência para homologar sentença estrangeira no Brasil é:',
  alt: [
    ['do STF.', false, 'Errada. Era do STF até a EC 45/04.'],
    ['do STJ.', true, 'Correta. Art. 105, I, i, da Constituição.'],
    ['da Justiça Federal de 1ª instância.', false, 'Errada. Ela EXECUTA a sentença após a homologação (art. 109, X).'],
    ['do Ministério das Relações Exteriores.', false, 'Errada. Homologação é ato jurisdicional.']
  ] },
// FINANCEIRO
{ id: 'fi1', materia: 'financeiro', topico: 'orcamento',
  enunciado: 'Pela Lei de Responsabilidade Fiscal, a despesa total com pessoal dos Estados não pode exceder, em relação à receita corrente líquida:',
  alt: [
    ['50%.', false, 'Errada. 50% é o limite da União.'],
    ['54%.', false, 'Errada. 54% é o limite do Executivo municipal, uma das repartições internas.'],
    ['60%.', true, 'Correta. Art. 19, II, da LRF.'],
    ['70%.', false, 'Errada. Não há esse limite.']
  ] },
// ELEITORAL
{ id: 'el1', materia: 'eleitoral', topico: 'elegibilidade',
  enunciado: 'A idade mínima para concorrer ao cargo de Senador é de:',
  alt: [
    ['30 anos.', false, 'Errada. 30 anos é para Governador.'],
    ['21 anos.', false, 'Errada. 21 anos é para Deputado e Prefeito.'],
    ['18 anos.', false, 'Errada. 18 anos é para Vereador.'],
    ['35 anos.', true, 'Correta. Art. 14, §3º, VI, a, da Constituição.']
  ] },
// PREVIDENCIÁRIO
{ id: 'pr1', materia: 'previdenciario', topico: 'beneficios',
  enunciado: 'Segurado sofreu acidente de trânsito (não relacionado ao trabalho) com apenas 3 contribuições e ficou temporariamente incapaz. Quanto ao auxílio por incapacidade temporária:',
  alt: [
    ['não tem direito, pois a carência é de 12 contribuições.', false, 'Errada. Incapacidade decorrente de acidente de QUALQUER natureza dispensa carência.'],
    ['tem direito, pois a incapacidade decorrente de acidente de qualquer natureza dispensa carência.', true, 'Correta. Art. 26, II, da Lei 8.213/91.'],
    ['tem direito apenas se o acidente for de trabalho.', false, 'Errada. A dispensa abrange acidente de qualquer natureza.'],
    ['precisa cumprir 180 contribuições.', false, 'Errada. 180 é a carência das aposentadorias programadas.']
  ] },
// FILOSOFIA
{ id: 'fl1', materia: 'filosofia', topico: 'autores',
  enunciado: 'A ideia de que a validade de todo o ordenamento jurídico repousa em uma norma pressuposta, a norma fundamental, é central no pensamento de:',
  alt: [
    ['Hans Kelsen.', true, 'Correta. Na Teoria Pura do Direito, a norma fundamental fecha o escalonamento normativo.'],
    ['Herbert Hart.', false, 'Errada. Hart fala em regra de reconhecimento, que é uma regra social, não pressuposta.'],
    ['Ronald Dworkin.', false, 'Errada. Dworkin enfatiza princípios e o Direito como integridade.'],
    ['John Rawls.', false, 'Errada. Rawls é teórico da justiça (véu da ignorância).']
  ] },
{ id: 'fl2', materia: 'filosofia', topico: 'autores',
  enunciado: 'Para Aristóteles, a justiça que distribui honras e bens conforme o mérito de cada um, numa igualdade geométrica (proporcional), é a justiça:',
  alt: [
    ['corretiva.', false, 'Errada. A corretiva usa igualdade aritmética, nas relações entre particulares.'],
    ['comutativa.', false, 'Errada. A comutativa é a das trocas, sinônimo de corretiva nas transações voluntárias.'],
    ['distributiva.', true, 'Correta. A justiça distributiva é proporcional ao mérito.'],
    ['legal.', false, 'Errada. A justiça legal ou geral é a obediência às leis voltada ao bem comum.']
  ] }
];
