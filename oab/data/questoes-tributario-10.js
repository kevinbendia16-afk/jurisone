/* Questoes – Tributario lote 10 (Processo Tributario). */
window.QUESTOES.push(
{ id: 'tb500', materia: 'tributario', topico: 'processotrib',
  enunciado: 'Uma empresa recebe auto de infracao cobrando ICMS supostamente devido. O advogado pretende suspender a exigibilidade do credito tributario. Dentre as hipoteses do art. 151 do CTN, qual medida NAO suspende a exigibilidade?',
  alt: [
    ['Deposito do montante integral', false, 'Errada. O deposito do montante integral suspende a exigibilidade (art. 151, II, CTN e Sumula 112/STJ).'],
    ['Concessao de medida liminar em mandado de seguranca', false, 'Errada. A liminar em MS suspende a exigibilidade (art. 151, IV, CTN).'],
    ['Parcelamento do debito tributario', false, 'Errada. O parcelamento suspende a exigibilidade (art. 151, VI, CTN, incluido pela LC 104/01).'],
    ['Compensacao administrativa deferida pela autoridade fiscal', true, 'Correta. A compensacao e causa de extincao do credito tributario (art. 156, II, CTN), nao de suspensao. As hipoteses de suspensao do art. 151 sao taxativas: moratoria, deposito integral, reclamacoes e recursos administrativos, liminar em MS, tutela antecipada e parcelamento.']
  ] },

{ id: 'tb501', materia: 'tributario', topico: 'processotrib',
  enunciado: 'Marcos ajuizou acao anulatoria de debito tributario sem realizar deposito do montante integral. A Fazenda alega que, sem o deposito, a execucao fiscal pode prosseguer. Assinale a alternativa correta.',
  alt: [
    ['A acao anulatoria so e cabivel se houver deposito do montante integral', false, 'Errada. O deposito nao e condicao de admissibilidade da acao anulatoria. Conforme Sumula 247/TFR e jurisprudencia pacifica, o ajuizamento independe de deposito.'],
    ['O deposito e facultativo; sem ele, a exigibilidade do credito nao se suspende, mas a acao prossegue normalmente', true, 'Correta. O deposito e facultativo. Sem ele, a acao anulatoria prossegue, mas a Fazenda pode ajuizar execucao fiscal paralelamente, pois a exigibilidade nao esta suspensa (Sumula 112/STJ).'],
    ['O ajuizamento da acao anulatoria suspende automaticamente a exigibilidade do credito tributario', false, 'Errada. O mero ajuizamento de acao judicial nao suspende a exigibilidade. E necessario deposito integral, liminar ou tutela antecipada (art. 151, CTN).'],
    ['A Fazenda deve aguardar o transito em julgado da anulatoria antes de executar', false, 'Errada. Sem suspensao da exigibilidade, a Fazenda pode executar o credito. Nao ha obrigacao de aguardar o desfecho da anulatoria.']
  ] },

{ id: 'tb502', materia: 'tributario', topico: 'processotrib',
  enunciado: 'Pedro, contribuinte, deseja questionar a cobranca de um tributo que entende indevido. Ele ainda nao foi autuado nem inscrito em divida ativa. Qual acao e mais adequada?',
  alt: [
    ['Embargos a execucao fiscal', false, 'Errada. Embargos a execucao so cabem apos o ajuizamento da execucao fiscal e a garantia do juizo (art. 16, LEF).'],
    ['Acao declaratoria de inexistencia de relacao juridico-tributaria', true, 'Correta. A acao declaratoria (art. 19, CPC) e cabivel quando o contribuinte quer obter certeza sobre a inexistencia da obrigacao tributaria antes de qualquer lancamento ou cobranca. E a via adequada para questionar preventivamente.'],
    ['Acao de repeticao de indebito', false, 'Errada. A repeticao de indebito pressupoe pagamento indevido ja realizado (art. 165, CTN). Pedro ainda nao pagou.'],
    ['Excecao de pre-executividade', false, 'Errada. A excecao de pre-executividade so e cabivel dentro de uma execucao fiscal ja ajuizada (Sumula 393/STJ).']
  ] },

{ id: 'tb503', materia: 'tributario', topico: 'tb-administrativo',
  enunciado: 'Uma empresa federal recebe auto de infracao e apresenta impugnacao ao CARF. Julgado o recurso em segunda instancia, ha empate na votacao. Conforme a legislacao vigente, qual o resultado?',
  alt: [
    ['O empate sera resolvido pelo voto de qualidade do presidente da turma, que e representante da Fazenda', false, 'Errada. A Lei 13.988/20 (art. 19-E da Lei 10.522/02) extinguiu o voto de qualidade no CARF. O empate agora favorece o contribuinte.'],
    ['O julgamento sera convertido em diligencia para obtencao de novas provas', false, 'Errada. O empate tem solucao legal propria; nao ha previsao de conversao em diligencia por empate.'],
    ['O empate resolve-se em favor do contribuinte', true, 'Correta. Desde a Lei 13.988/20, que incluiu o art. 19-E na Lei 10.522/02, o empate no CARF resolve-se a favor do contribuinte, cancelando o lancamento. A LC 208/2024 confirmou essa regra, eliminando o antigo voto de qualidade.'],
    ['O empate obriga a remessa dos autos ao Poder Judiciario', false, 'Errada. O empate e resolvido na propria esfera administrativa. Nao ha remessa ao Judiciario.']
  ] },

{ id: 'tb504', materia: 'tributario', topico: 'tb-administrativo',
  enunciado: 'Joao, antes de qualquer procedimento fiscalizatorio, percebe que nao declarou e nao recolheu ISS de determinado periodo. Ele procura a Prefeitura, efetua a denuncia espontanea e paga o tributo com juros de mora. Sobre a multa de oficio, assinale a alternativa correta.',
  alt: [
    ['A multa de oficio e devida, pois a denuncia espontanea so exclui os juros', false, 'Errada. A denuncia espontanea exclui a multa, nao os juros. O contribuinte deve pagar tributo e juros de mora (art. 138, CTN).'],
    ['A multa de oficio e excluida, pois a denuncia espontanea acompanhada do pagamento integral do tributo e juros afasta a responsabilidade por infracao', true, 'Correta. O art. 138 do CTN preve que a denuncia espontanea, acompanhada do pagamento do tributo devido e juros de mora, exclui a responsabilidade pela infracao (multa). E necessario que ocorra antes de qualquer procedimento administrativo ou medida de fiscalizacao.'],
    ['A denuncia espontanea so e valida se o tributo for federal', false, 'Errada. O art. 138 do CTN aplica-se a todos os tributos (federais, estaduais e municipais), pois e norma geral de direito tributario.'],
    ['A denuncia espontanea nao se aplica pois Joao deixou de declarar e recolher, caracterizando obrigacao acessoria e principal', false, 'Errada. A denuncia espontanea aplica-se ao descumprimento de obrigacao principal. A Sumula 360/STJ restringe a denuncia espontanea para tributos sujeitos a lancamento por homologacao ja declarados e nao pagos, mas Joao nao declarou, portanto a denuncia espontanea e plenamente cabivel.']
  ] },

{ id: 'tb505', materia: 'tributario', topico: 'tb-administrativo',
  enunciado: 'Uma empresa apresenta impugnacao administrativa contra lancamento de contribuicao previdenciaria. Durante o julgamento do recurso administrativo, a Fazenda ajuiza execucao fiscal. Essa conduta e:',
  alt: [
    ['Licita, pois o credito tributario ja esta constituido pelo lancamento', false, 'Errada. Embora o credito esteja constituido, a pendencia de recurso administrativo suspende sua exigibilidade (art. 151, III, CTN), impedindo a execucao.'],
    ['Ilicita, pois as reclamacoes e recursos administrativos suspendem a exigibilidade do credito tributario', true, 'Correta. O art. 151, III, do CTN estabelece que reclamacoes e recursos administrativos suspendem a exigibilidade do credito tributario. Com a exigibilidade suspensa, a Fazenda nao pode inscrever em divida ativa nem ajuizar execucao fiscal.'],
    ['Licita, desde que a Fazenda oferte caucao suficiente', false, 'Errada. Nao existe previsao de caucao pela Fazenda para executar credito com exigibilidade suspensa. A suspensao impede a execucao.'],
    ['Licita, pois contribuicoes previdenciarias seguem rito proprio que permite execucao imediata', false, 'Errada. As contribuicoes previdenciarias, como tributos, seguem as mesmas regras do CTN quanto a suspensao da exigibilidade (art. 151, III).']
  ] },

{ id: 'tb506', materia: 'tributario', topico: 'tb-execucao-fiscal',
  enunciado: 'A Fazenda Nacional ajuiza execucao fiscal contra empresa devedora. A Certidao de Divida Ativa (CDA) que instrui a inicial goza de presuncao de:',
  alt: [
    ['Presuncao absoluta (jure et de jure) de certeza e liquidez', false, 'Errada. A presuncao da CDA e relativa (juris tantum), nao absoluta. Pode ser ilidida por prova inequivoca (art. 3 da LEF e art. 204 do CTN).'],
    ['Presuncao relativa (juris tantum) de certeza e liquidez, que pode ser ilidida por prova inequivoca a cargo do executado', true, 'Correta. Conforme art. 3 da Lei 6.830/80 e art. 204, paragrafo unico, do CTN, a CDA goza de presuncao relativa de certeza e liquidez, cabendo ao executado apresentar prova inequivoca para ilidi-la.'],
    ['Presuncao relativa apenas de liquidez, nao de certeza', false, 'Errada. A presuncao e de certeza E liquidez, ambas relativas (art. 204 do CTN).'],
    ['Nenhuma presuncao, devendo a Fazenda provar a existencia do debito', false, 'Errada. A lei confere expressamente presuncao de certeza e liquidez a CDA regularmente inscrita.']
  ] },

{ id: 'tb507', materia: 'tributario', topico: 'tb-execucao-fiscal',
  enunciado: 'Em execucao fiscal, a Fazenda nao localiza bens do devedor. O juiz suspende o processo e os autos permanecem arquivados por mais de 5 anos sem manifestacao da Fazenda. O juiz pode reconhecer a prescricao intercorrente?',
  alt: [
    ['Nao, pois a prescricao intercorrente nao se aplica a execucao fiscal', false, 'Errada. O STJ consolidou a prescricao intercorrente em execucao fiscal no Tema Repetitivo 566 (REsp 1.340.553), aplicando o art. 40, §4, da LEF.'],
    ['Sim, de oficio, apos a intimacao da Fazenda para se manifestar', true, 'Correta. Conforme art. 40, §4, da LEF e Tema 566 do STJ, decorrido o prazo prescricional intercorrente (5 anos apos 1 ano de suspensao), o juiz pode reconhecer a prescricao de oficio, apos ouvir a Fazenda, que pode alegar causas suspensivas ou interruptivas.'],
    ['Somente se o devedor requerer expressamente', false, 'Errada. A prescricao intercorrente pode ser reconhecida de oficio pelo juiz (art. 40, §4, LEF, com redacao da Lei 11.051/04), independente de requerimento do executado.'],
    ['Sim, mas somente apos 10 anos de arquivamento', false, 'Errada. O prazo e de 5 anos (prazo prescricional do art. 174 do CTN), contados apos 1 ano de suspensao do processo (art. 40, §§2 e 4, da LEF, conforme Tema 566/STJ).']
  ] },

{ id: 'tb508', materia: 'tributario', topico: 'tb-execucao-fiscal',
  enunciado: 'A Fazenda Estadual pretende redirecionar execucao fiscal contra o socio-gerente de empresa que encerrou irregularmente suas atividades. Sobre o redirecionamento, assinale a alternativa correta.',
  alt: [
    ['O redirecionamento depende de comprovacao de dolo especifico do socio em fraudar o fisco', false, 'Errada. O encerramento irregular, por si so, gera presuncao de dissolucao irregular e permite o redirecionamento (Sumula 435/STJ). Nao se exige prova de dolo especifico.'],
    ['A dissolucao irregular da empresa gera presuncao de infringencia a lei pelo socio-gerente, autorizando o redirecionamento', true, 'Correta. Conforme Sumula 435/STJ: "Presume-se dissolvida irregularmente a empresa que deixar de funcionar no seu domicilio fiscal, sem comunicacao aos orgaos competentes, legitimando o redirecionamento da execucao fiscal para o socio-gerente." O art. 135, III, do CTN fundamenta a responsabilidade.'],
    ['O redirecionamento e automatico para todos os socios, independentemente de participacao na gestao', false, 'Errada. O redirecionamento alcanca o socio-gerente (com poderes de administracao), nao qualquer socio. Socios sem poder de gestao nao respondem (art. 135, III, CTN).'],
    ['O redirecionamento exige previa instauracao de incidente de desconsideracao da personalidade juridica', false, 'Errada. O Tema 444/STJ pacificou que o redirecionamento na execucao fiscal com base no art. 135 do CTN nao exige instauracao do incidente de desconsideracao (art. 133-137, CPC), por ter rito proprio na LEF.']
  ] },

{ id: 'tb509', materia: 'tributario', topico: 'tb-defesas',
  enunciado: 'Em execucao fiscal, o advogado do executado pretende alegar nulidade da CDA por ausencia de requisito essencial, sem garantia do juizo. A via adequada e:',
  alt: [
    ['Embargos a execucao fiscal, com dispensa de garantia por se tratar de materia de ordem publica', false, 'Errada. Embora a nulidade da CDA seja materia de ordem publica, os embargos a execucao fiscal exigem garantia do juizo (art. 16, §1, da LEF). A via correta sem garantia e a excecao de pre-executividade.'],
    ['Excecao de pre-executividade, pois a materia e de ordem publica e nao exige dilacao probatoria', true, 'Correta. A Sumula 393/STJ admite excecao de pre-executividade para materias conheciveis de oficio que nao demandem dilacao probatoria. A nulidade da CDA por vicio formal e hipotese classica, dispensando garantia do juizo.'],
    ['Acao anulatoria autonoma, pois nao e possivel discutir nulidade da CDA dentro da execucao', false, 'Errada. A nulidade da CDA pode ser arguida dentro da execucao, tanto por embargos quanto por excecao de pre-executividade.'],
    ['Impugnacao ao cumprimento de sentenca, conforme o CPC', false, 'Errada. A execucao fiscal segue a LEF (Lei 6.830/80), nao o rito de cumprimento de sentenca do CPC. As defesas proprias sao embargos e excecao de pre-executividade.']
  ] },

{ id: 'tb510', materia: 'tributario', topico: 'tb-defesas',
  enunciado: 'Ana foi citada em execucao fiscal e deseja opor embargos a execucao. Sobre o prazo e a garantia, assinale a alternativa correta.',
  alt: [
    ['O prazo e de 15 dias da juntada do mandado de citacao, sem necessidade de garantia', false, 'Errada. O prazo dos embargos na execucao fiscal e de 30 dias (art. 16 da LEF), nao 15. Alem disso, a garantia e necessaria.'],
    ['O prazo e de 30 dias contados do deposito, juncao da prova de fianca bancaria, seguro-garantia ou intimacao da penhora', true, 'Correta. Art. 16, caput e §1, da LEF: o executado oferecera embargos no prazo de 30 dias, contados do deposito, da juncao da prova da fianca bancaria, do seguro-garantia ou da intimacao da penhora.'],
    ['O prazo e de 30 dias da citacao, independentemente de garantia', false, 'Errada. O prazo de 30 dias nao corre da citacao, mas da garantia do juizo (deposito, fianca ou penhora), conforme art. 16, §1, LEF.'],
    ['O prazo e de 5 dias uteis da penhora, conforme o CPC', false, 'Errada. A execucao fiscal segue a LEF, que preve prazo de 30 dias (nao 5) e conta da garantia, nao apenas da penhora. O CPC aplica-se subsidiariamente.']
  ] },

{ id: 'tb511', materia: 'tributario', topico: 'tb-defesas',
  enunciado: 'Carlos pretende alegar prescricao do credito tributario em execucao fiscal. Ele nao possui bens para garantir o juizo. Pode utilizar excecao de pre-executividade para arguir prescricao?',
  alt: [
    ['Nao, pois prescricao exige dilacao probatoria e so pode ser arguida em embargos', false, 'Errada. A prescricao tributaria e materia de ordem publica, conhecivel de oficio, e normalmente nao exige dilacao probatoria, sendo perfeitamente arguivel em excecao de pre-executividade.'],
    ['Sim, pois a prescricao e materia de ordem publica, conhecivel de oficio, que pode ser arguida por excecao de pre-executividade sem garantia do juizo', true, 'Correta. A Sumula 393/STJ admite excecao de pre-executividade para materias de ordem publica que nao demandem dilacao probatoria. A prescricao tributaria (art. 174, CTN) e materia de ordem publica, conhecivel de oficio, e como regra nao depende de prova complexa.'],
    ['Sim, mas somente se a prescricao for evidente e anterior a inscricao em divida ativa', false, 'Errada. A excecao de pre-executividade para prescricao nao se limita a prescricao anterior a inscricao. A prescricao intercorrente tambem pode ser arguida por essa via (Tema 566/STJ).'],
    ['Nao, pois a excecao de pre-executividade so admite materia processual, nao de merito', false, 'Errada. A excecao de pre-executividade admite tanto materias processuais quanto de merito, desde que sejam de ordem publica e dispensem dilacao probatoria (Sumula 393/STJ).']
  ] },

{ id: 'tb512', materia: 'tributario', topico: 'tb-acoes-contribuinte',
  enunciado: 'Uma empresa pagou ICMS indevidamente por erro no calculo durante 3 anos consecutivos. Pretende recuperar os valores pagos a maior. Qual acao e adequada e qual o prazo?',
  alt: [
    ['Acao de repeticao de indebito, com prazo de 2 anos contados do pagamento', false, 'Errada. O prazo para repeticao de indebito tributario e de 5 anos (art. 168, CTN), nao 2.'],
    ['Acao de repeticao de indebito, com prazo de 5 anos contados da extincao do credito tributario (pagamento)', true, 'Correta. A repeticao de indebito (art. 165 c/c art. 168 do CTN) permite a restituicao de tributo pago indevidamente, com prazo de 5 anos contados da extincao do credito (data do pagamento). Conforme Tema 168/STJ (tese dos "cinco mais cinco" afastada pela LC 118/05).'],
    ['Acao anulatoria, com prazo de 5 anos contados da notificacao do lancamento', false, 'Errada. A anulatoria pressupoe lancamento a ser anulado. No caso, houve pagamento espontaneo indevido, sendo cabivel repeticao de indebito.'],
    ['Mandado de seguranca, com prazo de 120 dias do pagamento indevido', false, 'Errada. O MS nao e adequado para repeticao de indebito, pois exige dilacao probatoria e produz efeitos patrimoniais retroativos (Sumula 269/STF). Alem disso, MS nao serve como substituto de acao de cobranca.']
  ] },

{ id: 'tb513', materia: 'tributario', topico: 'tb-acoes-contribuinte',
  enunciado: 'Fernanda descobre que o Municipio vai cobrar taxa de iluminacao publica, que ela entende inconstitucional. Pretende impetrar mandado de seguranca preventivo. Sobre o MS em materia tributaria, assinale a alternativa correta.',
  alt: [
    ['O MS preventivo e cabivel, desde que impetrado no prazo de 120 dias da publicacao da lei que instituiu a taxa', false, 'Errada. O prazo de 120 dias aplica-se ao MS repressivo, contado da ciencia do ato coator. No MS preventivo, nao ha ato coator consumado, portanto nao corre o prazo decadencial enquanto houver ameaca concreta.'],
    ['O MS em materia tributaria so e cabivel apos o pagamento do tributo', false, 'Errada. O MS preventivo e cabivel justamente antes do pagamento, para evitar a cobranca ilegal. Nao se exige pagamento previo.'],
    ['O MS preventivo e cabivel quando ha justo receio de lesao a direito liquido e certo por ato de autoridade, e a liminar concedida suspende a exigibilidade do credito', true, 'Correta. O MS preventivo e cabivel ante ameaca concreta de ato ilegal (art. 1, Lei 12.016/09). A liminar em MS suspende a exigibilidade do credito tributario (art. 151, IV, CTN). Nao ha prazo de 120 dias no preventivo, pois o ato coator ainda nao se consumou.'],
    ['O MS nao e cabivel contra lei em tese que institui tributo', false, 'Errada parcialmente. De fato, a Sumula 266/STF veda MS contra lei em tese. Porem, quando a lei e autoaplicavel (nao depende de regulamentacao), como ocorre com tributos de lancamento direto, o MS e cabivel, pois a lei ja produz efeitos concretos sobre o contribuinte.']
  ] },

{ id: 'tb514', materia: 'tributario', topico: 'tb-acoes-contribuinte',
  enunciado: 'Paulo tem divida tributaria com o Estado e deseja realizar o pagamento, mas a Fazenda recusa o recebimento alegando que deveria ter pago na data do vencimento. Qual acao e adequada?',
  alt: [
    ['Mandado de seguranca para compelir a Fazenda a receber', false, 'Errada. Embora o MS pudesse ser utilizado em tese, a via especifica para essa situacao e a acao de consignacao em pagamento (art. 164, I, CTN), que permite o deposito judicial e a extincao do credito.'],
    ['Acao de consignacao em pagamento, depositando judicialmente o valor que entende devido', true, 'Correta. O art. 164, I, do CTN preve a acao de consignacao em pagamento quando a autoridade subordina o recebimento ao pagamento de penalidade ou exige o cumprimento de exigencia administrativa sem fundamento legal. A recusa injustificada autoriza a consignacao, e o deposito judicial extingue o credito se julgado procedente (art. 156, VIII, CTN).'],
    ['Acao de repeticao de indebito, para restituir o que ja pagou', false, 'Errada. Paulo ainda nao pagou; ele quer pagar e a Fazenda recusa. A repeticao de indebito pressupoe pagamento ja efetuado (art. 165, CTN).'],
    ['Embargos a execucao fiscal, depositando o valor nos autos', false, 'Errada. Nao ha execucao fiscal em curso. Os embargos pressupoem execucao ja ajuizada. A via adequada e a consignacao em pagamento.']
  ] }
);
