/* Ementa completa da 1ª fase: a grade do curso, matéria por matéria, em unidades.
 * Cada aula tem um id (o mesmo do tópico em MATERIAS quando a aula já existe) e um título.
 * Aulas da ementa que ainda não foram escritas aparecem no app como "em produção".
 * Ordem das unidades = ordem didática (do básico ao avançado), não ordem de incidência. */
window.EMENTA = {
  etica: [
    { unidade: 'A advocacia e a OAB', aulas: [
      ['atividade', 'Atividade de advocacia: atos privativos e o advogado como indispensável à Justiça'],
      ['inscricao', 'Inscrição, incompatibilidade e impedimento'],
      ['licenca', 'Licença, cancelamento e inscrição suplementar'],
      ['oab', 'Estrutura da OAB, órgãos e eleições'] ] },
    { unidade: 'Direitos e deveres do advogado', aulas: [
      ['prerrogativas', 'Prerrogativas, estágio e sociedade de advogados'],
      ['sociedade', 'Sociedade de advogados e sociedade unipessoal'],
      ['mandato', 'Relação com o cliente, mandato e conflito de interesses'],
      ['publicidade', 'Sigilo e publicidade'],
      ['advempregado', 'Advogado empregado e advocacia pública'],
      ['probono', 'Advocacia pro bono e deveres de urbanidade'] ] },
    { unidade: 'Honorários', aulas: [
      ['honorarios', 'Honorários advocatícios'],
      ['honorarios2', 'Honorários: execução, preferência e prescrição'] ] },
    { unidade: 'Infrações e processo disciplinar', aulas: [
      ['disciplina', 'Infrações, sanções e processo disciplinar'],
      ['infracoes', 'Infrações em espécie (art. 34): quais levam a censura, suspensão ou exclusão'],
      ['processodisc', 'Processo disciplinar: competência, prazos, recursos e revisão'] ] }
  ],
  filosofia: [
    { unidade: 'Fundamentos', aulas: [
      ['jusnatural', 'Jusnaturalismo, contratualistas e Kant'],
      ['autores', 'Principais autores'],
      ['justica', 'Teorias da justiça: Aristóteles, Rawls e utilitarismo'] ] },
    { unidade: 'Positivismo e pós-positivismo', aulas: [
      ['positivismo', 'Positivismo jurídico: Kelsen, Hart e Bobbio'],
      ['escolas', 'Correntes do pensamento jurídico'],
      ['argumentacao', 'Interpretação, argumentação e ponderação'],
      ['hermeneutica', 'Hermenêutica e lacunas: analogia, costumes e princípios gerais'] ] }
  ],
  constitucional: [
    { unidade: 'Teoria da Constituição', aulas: [
      ['teoria', 'Constituição: conceito, classificação, poder constituinte e eficácia das normas'],
      ['principiosfund', 'Princípios fundamentais (arts. 1º a 4º)'] ] },
    { unidade: 'Direitos e garantias fundamentais', aulas: [
      ['direitos', 'Direitos fundamentais (art. 5º)'],
      ['direitos2', 'Direitos individuais em espécie: igualdade, liberdade, propriedade e garantias processuais'],
      ['sociais', 'Direitos sociais'],
      ['nacionalidade', 'Nacionalidade'],
      ['politicos', 'Direitos políticos'],
      ['remedios', 'Remédios constitucionais'] ] },
    { unidade: 'Organização do Estado', aulas: [
      ['organizacao', 'Organização do Estado: competências e intervenção'],
      ['administracaocf', 'Administração Pública na Constituição (arts. 37 a 41)'] ] },
    { unidade: 'Organização dos Poderes', aulas: [
      ['poderes', 'Organização dos Poderes'],
      ['legislativo', 'Processo legislativo: iniciativa, sanção, veto e medidas provisórias'],
      ['emendas', 'Processo legislativo e emendas'],
      ['fiscalizacao', 'Fiscalização: Tribunais de Contas e CPIs'],
      ['executivo', 'Poder Executivo e crimes de responsabilidade'],
      ['judiciario', 'Poder Judiciário: quinto constitucional, STF, STJ e súmula vinculante'],
      ['funcoesessenciais', 'Funções essenciais à Justiça: MP, Advocacia Pública, Advocacia e Defensoria'] ] },
    { unidade: 'Controle de constitucionalidade', aulas: [
      ['controle', 'Controle de constitucionalidade'],
      ['controle2', 'ADI, ADC, ADO e ADPF: cabimento, efeitos e modulação'] ] },
    { unidade: 'Defesa do Estado e ordem social', aulas: [
      ['defesa', 'Estado de defesa, estado de sítio e segurança pública'],
      ['ordemsocial', 'Ordem econômica e ordem social (saúde, educação, família, índios)'] ] }
  ],
  eleitoral: [
    { unidade: 'Direito Eleitoral', aulas: [
      ['principioseleit', 'Princípios, fontes e sistemas eleitorais (majoritário e proporcional)'],
      ['elegibilidade', 'Elegibilidade e inelegibilidade'],
      ['partidos', 'Partidos políticos e fidelidade partidária'],
      ['propaganda', 'Propaganda eleitoral'],
      ['acoes', 'Justiça Eleitoral, anterioridade e ações'],
      ['crimeseleit', 'Crimes eleitorais e condutas vedadas'] ] }
  ],
  dh: [
    { unidade: 'Direitos Humanos', aulas: [
      ['teoriadh', 'Teoria geral: características, gerações e incorporação dos tratados'],
      ['tratados', 'Tratados e sistema interamericano'],
      ['global', 'Sistema global (ONU) e Tribunal Penal Internacional'],
      ['deficiencia', 'Pessoa com deficiência: Convenção de Nova York e LBI'],
      ['migrantes', 'Refugiados e migrantes (Leis 9.474/97 e 13.445/17)'],
      ['vulneraveis', 'Grupos vulneráveis: mulheres, igualdade racial, idosos e povos indígenas'] ] }
  ],
  internacional: [
    { unidade: 'Direito Internacional Público', aulas: [
      ['fontesdip', 'Fontes, tratados e Convenção de Viena'],
      ['sujeitos', 'Sujeitos: Estados, organizações internacionais e imunidade de jurisdição'],
      ['nacionalidadeint', 'Nacionalidade, extradição, asilo e deportação'] ] },
    { unidade: 'Direito Internacional Privado', aulas: [
      ['lindb', 'LINDB e homologação'],
      ['conexao', 'Elementos de conexão e aplicação do direito estrangeiro'],
      ['cooperacao', 'Cooperação jurídica internacional, carta rogatória e competência internacional'] ] }
  ],
  financeiro: [
    { unidade: 'Direito Financeiro', aulas: [
      ['orcamento', 'Orçamento, LRF e precatórios'],
      ['receitas', 'Receitas e despesas públicas'],
      ['lrf', 'Lei de Responsabilidade Fiscal: limites, dívida e transparência'],
      ['precatorios', 'Precatórios e RPV (art. 100 da CF)'] ] }
  ],
  tributario: [
    { unidade: 'Sistema Tributário Nacional', aulas: [
      ['conceito', 'Tributo: conceito, competência e capacidade tributária'],
      ['especies', 'Espécies tributárias e responsabilidade'],
      ['principios', 'Princípios e imunidades'],
      ['imunidades', 'Imunidades em espécie e jurisprudência do STF'] ] },
    { unidade: 'Obrigação e crédito', aulas: [
      ['obrigacao', 'Obrigação tributária: fato gerador, sujeitos e solidariedade'],
      ['responsabilidade', 'Responsabilidade tributária: sucessores, terceiros e infrações'],
      ['lancamento', 'Lançamento: modalidades e revisão'],
      ['credito', 'Crédito tributário'],
      ['prescricaotrib', 'Decadência e prescrição tributárias'],
      ['garantias', 'Garantias e privilégios do crédito; CND'] ] },
    { unidade: 'Impostos e processo', aulas: [
      ['impostos', 'Impostos da União, dos Estados e dos Municípios (e a Reforma Tributária)'],
      ['processotrib', 'Processo tributário: execução fiscal, embargos, MS e ações do contribuinte'] ] }
  ],
  administrativo: [
    { unidade: 'Fundamentos', aulas: [
      ['principiosadm', 'Princípios da Administração Pública'],
      ['organizacaoadm', 'Organização administrativa: direta, indireta e terceiro setor'],
      ['poderesadm', 'Poderes administrativos e abuso de poder'] ] },
    { unidade: 'Atos e contratos', aulas: [
      ['atos', 'Atos administrativos'],
      ['licitacoes', 'Licitações (Lei 14.133/21)'],
      ['contratos', 'Contratos administrativos (Lei 14.133/21)'],
      ['servicos', 'Serviços públicos, concessões e PPPs'] ] },
    { unidade: 'Agentes e responsabilização', aulas: [
      ['agentes', 'Agentes públicos'],
      ['improbidade', 'Improbidade e responsabilidade do Estado'],
      ['responsabilidadeestado', 'Responsabilidade civil do Estado em profundidade'],
      ['processoadm', 'Processo administrativo (Lei 9.784/99)'] ] },
    { unidade: 'Bens e intervenção', aulas: [
      ['bens', 'Bens públicos'],
      ['intervencao', 'Intervenção na propriedade: desapropriação, tombamento, servidão e requisição'],
      ['controleadm', 'Controle da Administração e Lei Anticorrupção'] ] }
  ],
  ambiental: [
    { unidade: 'Direito Ambiental', aulas: [
      ['principiosamb', 'Princípios e competências em matéria ambiental'],
      ['respamb', 'Responsabilidade ambiental'],
      ['licenciamento', 'Licenciamento ambiental e EIA/RIMA'],
      ['snuc', 'Unidades de conservação (SNUC)'],
      ['florestal', 'Código Florestal: APP e reserva legal'],
      ['crimesamb', 'Crimes e infrações ambientais (Lei 9.605/98)'] ] }
  ],
  civil: [
    { unidade: 'Parte Geral', aulas: [
      ['lindbcivil', 'LINDB: vigência, aplicação e interpretação das leis'],
      ['capacidade', 'Capacidade civil'],
      ['personalidade', 'Direitos da personalidade, ausência e pessoa jurídica'],
      ['bensciv', 'Bens jurídicos'],
      ['negocio', 'Negócio jurídico e seus defeitos'],
      ['invalidade', 'Invalidade do negócio jurídico: nulidade e anulabilidade'],
      ['prescricao', 'Prescrição e decadência'] ] },
    { unidade: 'Obrigações e contratos', aulas: [
      ['obrigacoes', 'Obrigações: modalidades, transmissão e adimplemento'],
      ['inadimplemento', 'Inadimplemento: mora, perdas e danos, juros e cláusula penal'],
      ['contratosgeral', 'Teoria geral dos contratos'],
      ['contratosesp', 'Contratos em espécie: compra e venda, doação, locação, fiança e outros'],
      ['respcivil', 'Responsabilidade civil'] ] },
    { unidade: 'Direito das Coisas', aulas: [
      ['reais', 'Posse, propriedade e usucapião'],
      ['propriedade', 'Propriedade, condomínio e direitos de vizinhança'],
      ['direitosreais', 'Direitos reais sobre coisa alheia e garantias (hipoteca, penhor, alienação fiduciária)'] ] },
    { unidade: 'Família', aulas: [
      ['casamento', 'Casamento, união estável e divórcio'],
      ['familia', 'Família: regimes de bens'],
      ['filiacao', 'Parentesco, filiação, poder familiar e guarda'],
      ['alimentos', 'Alimentos, tutela e curatela'] ] },
    { unidade: 'Sucessões', aulas: [
      ['sucessoes', 'Sucessões'],
      ['testamento', 'Sucessão testamentária, legítima e colação'],
      ['inventario', 'Herança: aceitação, renúncia, exclusão e inventário'] ] }
  ],
  eca: [
    { unidade: 'Estatuto da Criança e do Adolescente', aulas: [
      ['direitoseca', 'Princípios e direitos fundamentais'],
      ['familiasubst', 'Família natural e família substituta: guarda e tutela'],
      ['adocao', 'Adoção'],
      ['protecao', 'Medidas de proteção e Conselho Tutelar'],
      ['medidas', 'Ato infracional e medidas socioeducativas'],
      ['processoeca', 'Acesso à Justiça, procedimentos e crimes do ECA'] ] }
  ],
  cdc: [
    { unidade: 'Direito do Consumidor', aulas: [
      ['relacao', 'Relação de consumo: consumidor, fornecedor e princípios'],
      ['direitosbasicos', 'Direitos básicos e inversão do ônus da prova'],
      ['respcdc', 'Fato x vício e prazos'],
      ['praticas', 'Práticas comerciais: oferta, publicidade e práticas abusivas'],
      ['protecaocontratual', 'Proteção contratual, cláusulas abusivas e superendividamento'],
      ['defesajuizo', 'Defesa do consumidor em juízo e sanções administrativas'] ] }
  ],
  empresarial: [
    { unidade: 'Teoria geral', aulas: [
      ['sociedades', 'Empresário e sociedades'],
      ['estabelecimento', 'Estabelecimento, nome empresarial, registro e escrituração'],
      ['propriedadeind', 'Propriedade industrial: marcas e patentes'] ] },
    { unidade: 'Sociedades', aulas: [
      ['limitada', 'Sociedade limitada'],
      ['sa', 'Sociedade anônima'],
      ['outrassoc', 'Sociedades simples, em comum, em conta de participação e operações societárias'] ] },
    { unidade: 'Títulos e contratos', aulas: [
      ['titulos', 'Títulos de crédito e falência'],
      ['titulosesp', 'Títulos em espécie: letra de câmbio, nota promissória, cheque e duplicata'],
      ['contratosemp', 'Contratos empresariais'] ] },
    { unidade: 'Crise da empresa', aulas: [
      ['recuperacao', 'Recuperação judicial e extrajudicial'],
      ['falencia', 'Falência: decretação, efeitos e classificação dos créditos'] ] }
  ],
  processocivil: [
    { unidade: 'Teoria geral', aulas: [
      ['normas', 'Normas fundamentais do processo civil'],
      ['jurisdicao', 'Jurisdição, competência e cooperação'],
      ['partes', 'Partes, procuradores, gratuidade e litisconsórcio'],
      ['intervencao', 'Intervenção de terceiros e desconsideração da personalidade jurídica'],
      ['atos', 'Atos processuais e nulidades'],
      ['prazos', 'Prazos processuais'],
      ['tutelas', 'Tutelas provisórias'] ] },
    { unidade: 'Processo de conhecimento', aulas: [
      ['inicial', 'Petição inicial, improcedência liminar e citação'],
      ['procedimento', 'Procedimento comum: audiência, contestação e revelia'],
      ['provas', 'Provas'],
      ['sentenca', 'Sentença e coisa julgada'],
      ['especiais', 'Procedimentos especiais: monitória, possessórias, inventário e família'] ] },
    { unidade: 'Cumprimento e execução', aulas: [
      ['cumprimento', 'Cumprimento de sentença'],
      ['execucao', 'Execução de título extrajudicial e embargos'] ] },
    { unidade: 'Recursos e precedentes', aulas: [
      ['recursos', 'Recursos'],
      ['recursosesp', 'Recursos em espécie: apelação, agravos, embargos, RE e REsp'],
      ['precedentes', 'Precedentes, IRDR, IAC, reclamação e ação rescisória'],
      ['juizados', 'Juizados Especiais Cíveis'] ] }
  ],
  penal: [
    { unidade: 'Fundamentos e lei penal', aulas: [
      ['principiospenal', 'Princípios do Direito Penal'],
      ['aplicacao', 'Aplicação da lei penal'],
      ['leiespaco', 'Lei penal no espaço, territorialidade e extraterritorialidade'] ] },
    { unidade: 'Teoria do crime', aulas: [
      ['fatotipico', 'Fato típico: conduta, resultado, nexo causal e tipicidade'],
      ['dolo', 'Dolo, culpa e crime preterdoloso'],
      ['erro', 'Erro de tipo, erro de proibição e descriminantes putativas'],
      ['excludentes', 'Excludentes e tentativa'],
      ['itercriminis', 'Iter criminis, consumação, crime impossível e arrependimentos'],
      ['culpabilidade', 'Culpabilidade e imputabilidade'],
      ['concursopessoas', 'Concurso de pessoas'] ] },
    { unidade: 'Teoria da pena', aulas: [
      ['penas', 'Espécies de pena e regimes de cumprimento'],
      ['dosimetria', 'Dosimetria: o cálculo da pena em três fases'],
      ['substituicao', 'Penas alternativas, sursis e livramento condicional'],
      ['concurso', 'Concurso de crimes e princípios'],
      ['medidaseguranca', 'Medidas de segurança e efeitos da condenação'],
      ['prescricaopenal', 'Extinção da punibilidade e prescrição'] ] },
    { unidade: 'Crimes em espécie', aulas: [
      ['crimespessoa', 'Crimes contra a pessoa: vida, lesão corporal, honra e liberdade'],
      ['crimespatrimonio', 'Crimes contra o patrimônio'],
      ['crimessexuais', 'Crimes contra a dignidade sexual'],
      ['crimesadm', 'Crimes contra a Administração Pública'],
      ['crimesfe', 'Crimes contra a fé pública e a paz pública'] ] },
    { unidade: 'Legislação penal especial', aulas: [
      ['drogas', 'Lei de Drogas'],
      ['hediondos', 'Crimes hediondos, Maria da Penha e Estatuto do Desarmamento'],
      ['especiais2', 'Abuso de autoridade, organização criminosa, crimes de trânsito e outras leis'] ] }
  ],
  processopenal: [
    { unidade: 'Fundamentos e investigação', aulas: [
      ['principiospp', 'Princípios e sistema acusatório; juiz das garantias'],
      ['leiprocessual', 'Lei processual no tempo e no espaço'],
      ['inquerito', 'Inquérito policial e arquivamento'],
      ['anpp', 'Acordo de não persecução penal e justiça negociada'] ] },
    { unidade: 'Ação e jurisdição', aulas: [
      ['acaopenal', 'Ação penal'],
      ['acaocivil', 'Ação civil ex delicto'],
      ['competencia', 'Jurisdição e competência'],
      ['questoes', 'Questões e processos incidentes'] ] },
    { unidade: 'Provas e medidas cautelares', aulas: [
      ['provaspp', 'Provas no processo penal'],
      ['prisoes', 'Prisões e medidas cautelares'],
      ['liberdade', 'Liberdade provisória, fiança e medidas cautelares diversas'] ] },
    { unidade: 'Procedimentos', aulas: [
      ['comunicacao', 'Citação, intimação e sujeitos do processo'],
      ['procedimento', 'Procedimento comum e recursos'],
      ['juri', 'Tribunal do Júri'],
      ['jecrim', 'Juizados Especiais Criminais (Lei 9.099/95)'],
      ['sentencapp', 'Sentença penal, emendatio e mutatio libelli'],
      ['nulidades', 'Nulidades'] ] },
    { unidade: 'Recursos e ações autônomas', aulas: [
      ['recursospp', 'Recursos em espécie: apelação, RESE, embargos e agravo em execução'],
      ['hcrevisao', 'Habeas corpus, revisão criminal e execução penal'] ] }
  ],
  previdenciario: [
    { unidade: 'Direito Previdenciário', aulas: [
      ['seguridade', 'Seguridade social: princípios e custeio'],
      ['segurados', 'Segurados, dependentes e qualidade de segurado'],
      ['beneficios', 'Benefícios e carência'],
      ['aposentadorias', 'Aposentadorias após a EC 103/19'],
      ['assistencia', 'Assistência social (BPC/LOAS) e pensão por morte'],
      ['acaoprev', 'Benefícios por incapacidade e ações previdenciárias'] ] }
  ],
  trabalho: [
    { unidade: 'Fundamentos e relação de emprego', aulas: [
      ['principiostrab', 'Princípios e fontes do Direito do Trabalho'],
      ['contrato', 'Relação de emprego, férias e estabilidades'],
      ['sujeitos', 'Empregado, empregador, grupo econômico e sucessão'],
      ['terceirizacao', 'Terceirização, trabalho temporário e intermitente'],
      ['especiais', 'Domésticos, aprendizes, teletrabalho e outros contratos especiais'] ] },
    { unidade: 'Duração do trabalho e remuneração', aulas: [
      ['jornada', 'Jornada de trabalho'],
      ['intervalos', 'Intervalos, trabalho noturno e repouso semanal'],
      ['ferias', 'Férias'],
      ['remuneracao', 'Salário, remuneração, equiparação salarial e 13º'],
      ['adicionais', 'Adicionais: insalubridade, periculosidade e horas extras'] ] },
    { unidade: 'Alteração, suspensão e extinção', aulas: [
      ['alteracao', 'Alteração, suspensão e interrupção do contrato'],
      ['rescisao', 'Extinção do contrato e aviso prévio'],
      ['estabilidades', 'Estabilidades e garantias de emprego'],
      ['fgts', 'FGTS e seguro-desemprego'],
      ['seguranca', 'Saúde e segurança do trabalho; trabalho da mulher e do menor'] ] },
    { unidade: 'Direito coletivo', aulas: [
      ['coletivo', 'Sindicatos, negociação coletiva e greve'],
      ['prescricaotrab', 'Prescrição e decadência trabalhistas'] ] }
  ],
  processotrabalho: [
    { unidade: 'Organização e competência', aulas: [
      ['principiospt', 'Princípios e organização da Justiça do Trabalho'],
      ['competenciatrab', 'Competência da Justiça do Trabalho'],
      ['partespt', 'Partes, procuradores, jus postulandi e representação'] ] },
    { unidade: 'Procedimentos', aulas: [
      ['procedimentotrab', 'Procedimentos e audiência'],
      ['reclamacao', 'Reclamação trabalhista: requisitos e pedidos líquidos'],
      ['provaspt', 'Provas e ônus da prova no processo do trabalho'],
      ['sentencapt', 'Sentença, coisa julgada e acordo'],
      ['honorariostrab', 'Honorários e justiça gratuita'] ] },
    { unidade: 'Recursos e execução', aulas: [
      ['recursostrab', 'Recursos trabalhistas'],
      ['recursosesp', 'Recurso de revista, embargos no TST e agravos'],
      ['execucaotrab', 'Execução trabalhista e embargos à execução'],
      ['acoesesp', 'Ações especiais: rescisória, mandado de segurança e dissídio coletivo'] ] }
  ]
};
