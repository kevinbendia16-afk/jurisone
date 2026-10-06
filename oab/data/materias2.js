/* Aulas adicionais, anexadas às matérias de materias.js. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);

  add('etica', [
    { id: 'prerrogativas', titulo: 'Prerrogativas, estágio e sociedade de advogados', incidencia: 'alta',
      aula: [
        'Principais direitos do advogado (art. 7º): inviolabilidade do escritório e das comunicações; comunicar-se com o cliente preso, pessoal e reservadamente, mesmo sem procuração; presença de representante da OAB na prisão em flagrante por motivo ligado à advocacia; não ser recolhido preso, antes do trânsito em julgado, senão em sala de Estado-Maior ou, na falta, prisão domiciliar; examinar autos de flagrante e inquérito mesmo sem procuração (salvo os sigilosos).',
        'Estagiário: pode praticar sozinho atos como retirar e devolver autos e obter certidões; os demais atos privativos, só em conjunto com o advogado e sob sua responsabilidade.',
        'Sociedade de advogados: registro no Conselho Seccional (é proibido o registro em Junta Comercial); só advogados podem ser sócios; os advogados da sociedade não podem representar clientes com interesses opostos; ninguém pode integrar mais de uma sociedade na mesma Seccional. A sociedade unipessoal de advocacia é permitida.',
        'Renúncia ao mandato: o advogado continua responsável por 10 dias após notificar o cliente, salvo se for substituído antes.'
      ],
      cai: ['Rol do art. 7º (e a ressalva da sala de Estado-Maior antes do trânsito)', 'Limites de atuação do estagiário', 'Registro da sociedade na OAB'],
      macetes: ['Sala de Estado-Maior: só ANTES do trânsito em julgado.', 'Sociedade de advogados: OAB sim, Junta Comercial nunca.', 'Renunciou? Ainda responde por 10 dias.'],
      video: 'OAB ética prerrogativas do advogado art 7 estagiário sociedade de advogados' }
  ]);

  add('constitucional', [
    { id: 'direitos', titulo: 'Direitos fundamentais (art. 5º)', incidencia: 'alta',
      aula: [
        'Inviolabilidade do domicílio (art. 5º, XI): ninguém entra sem consentimento, salvo em flagrante delito, desastre ou para prestar socorro (a qualquer hora), ou por determinação judicial (somente durante o dia).',
        'Sigilo das comunicações telefônicas: só pode ser quebrado por ordem judicial, para investigação criminal ou instrução processual penal (art. 5º, XII).',
        'Direito de reunião: pacífica, sem armas, em locais abertos, independentemente de autorização, exigido apenas o prévio aviso à autoridade.',
        'Associações: criação independe de autorização; só podem ser dissolvidas compulsoriamente por decisão judicial transitada em julgado; e suas atividades suspensas por decisão judicial.',
        'Os direitos fundamentais não são absolutos; colisões resolvem-se por ponderação (proporcionalidade).'
      ],
      cai: ['Hipóteses de entrada na casa', 'Reserva de jurisdição', 'Dissolução de associações'],
      macetes: ['Casa: juiz só de DIA. Flagrante, desastre e socorro: a qualquer hora.', 'Associação: dissolver = trânsito em julgado; suspender = decisão judicial.'],
      video: 'direitos fundamentais art 5 inviolabilidade domicílio sigilo reunião associação OAB' },
    { id: 'nacionalidade', titulo: 'Nacionalidade', incidencia: 'media',
      aula: [
        'Natos (art. 12, I): nascidos no Brasil (salvo filhos de estrangeiros a serviço de seu país); nascidos no estrangeiro de pai ou mãe brasileiros a serviço do Brasil; nascidos no estrangeiro de pai ou mãe brasileiros, registrados em repartição brasileira ou que venham a residir no Brasil e optem, após a maioridade, pela nacionalidade brasileira.',
        'Naturalização extraordinária: residência no Brasil há mais de 15 anos ininterruptos e sem condenação penal, mediante requerimento. Para originários de países de língua portuguesa: 1 ano de residência e idoneidade moral.',
        'Cargos privativos de nato (art. 12, §3º): Presidente e Vice; Presidente da Câmara e do Senado; Ministro do STF; carreira diplomática; oficial das Forças Armadas; Ministro de Estado da Defesa.',
        'O brasileiro nato não pode ser extraditado. O naturalizado pode, por crime comum anterior à naturalização ou por tráfico de drogas comprovado.'
      ],
      cai: ['Rol de cargos privativos', 'Extradição do naturalizado'],
      macetes: ['Cargos de nato: "MP3.COM" – Ministro do STF, Presidente e Vice, Presidente da Câmara, Presidente do Senado, Carreira diplomática, Oficial das Forças Armadas, Ministro da Defesa.'],
      video: 'nacionalidade brasileiro nato naturalizado cargos privativos MP3.COM OAB' },
    { id: 'poderes', titulo: 'Organização dos Poderes', incidencia: 'media',
      aula: [
        'Câmara dos Deputados (art. 51): autoriza, por 2/3, a instauração de processo contra o Presidente, o Vice e os Ministros de Estado; toma as contas do Presidente quando não apresentadas no prazo.',
        'Senado Federal (art. 52): processa e julga o Presidente e o Vice nos crimes de responsabilidade; aprova a escolha de Ministros do STF, do PGR, de diretores do Banco Central, entre outros.',
        'Nos crimes comuns, o Presidente é julgado pelo STF, após autorização da Câmara. Durante o mandato, ele não pode ser responsabilizado por atos estranhos ao exercício de suas funções.',
        'Imunidade material dos parlamentares: são invioláveis, civil e penalmente, por quaisquer de suas opiniões, palavras e votos. Imunidade formal: desde a diplomação, só podem ser presos em flagrante de crime inafiançável.'
      ],
      cai: ['Competências privativas da Câmara x Senado', 'Imunidades parlamentares'],
      macetes: ['Câmara AUTORIZA (2/3); Senado JULGA (crime de responsabilidade); STF julga crime comum.'],
      video: 'competências câmara senado impeachment imunidade parlamentar OAB' }
  ]);

  add('civil', [
    { id: 'negocio', titulo: 'Negócio jurídico e seus defeitos', incidencia: 'alta',
      aula: [
        'Erro, dolo, coação, estado de perigo, lesão e fraude contra credores tornam o negócio ANULÁVEL. O prazo decadencial para anular é de 4 anos (art. 178).',
        'Dolo acidental (o negócio seria feito de outro modo) só gera perdas e danos (art. 146). Coação por terceiro anula o negócio se a parte beneficiada sabia ou devia saber.',
        'Lesão (art. 157): premente necessidade ou inexperiência + prestação manifestamente desproporcional. Estado de perigo (art. 156): necessidade de salvar-se, ou a pessoa da família, de grave dano conhecido pela outra parte.',
        'A simulação torna o negócio NULO, mas subsiste o que se dissimulou, se válido na substância e na forma (art. 167). Nulidade não convalesce com o tempo.'
      ],
      cai: ['Diferença entre lesão e estado de perigo', 'Simulação = nulidade', 'Prazo de 4 anos'],
      macetes: ['Vícios: anulável em 4 anos. Simulação: nula.', 'Lesão = inexperiência/necessidade econômica. Estado de perigo = salvar a vida.'],
      video: 'defeitos do negócio jurídico erro dolo coação lesão estado de perigo simulação OAB' },
    { id: 'respcivil', titulo: 'Responsabilidade civil', incidencia: 'alta',
      aula: [
        'Regra: responsabilidade subjetiva (arts. 186 e 927). Será objetiva nos casos especificados em lei ou quando a atividade normalmente desenvolvida implicar, por sua natureza, risco para os direitos de outrem (art. 927, parágrafo único).',
        'Responsabilidade por fato de terceiro (art. 932): pais pelos filhos menores, tutor e curador, empregador pelos empregados, donos de hotéis pelos hóspedes. É objetiva (art. 933).',
        'O incapaz responde subsidiária e equitativamente, se os responsáveis não tiverem obrigação ou meios (art. 928).',
        'A indenização mede-se pela extensão do dano (art. 944). Se houver excessiva desproporção entre a culpa e o dano, o juiz pode reduzir equitativamente.'
      ],
      cai: ['Responsabilidade objetiva por fato de terceiro', 'Responsabilidade do incapaz'],
      macetes: ['Art. 932 + 933: pais, empregador, tutor = respondem sem culpa.'],
      video: 'responsabilidade civil código civil art 927 932 933 objetiva subjetiva OAB' },
    { id: 'familia', titulo: 'Família: regimes de bens', incidencia: 'alta',
      aula: [
        'Comunhão PARCIAL (regime legal): comunicam-se os bens adquiridos onerosamente na constância do casamento. Excluem-se os bens anteriores, os recebidos por doação ou herança e os sub-rogados em seu lugar, e os proventos do trabalho pessoal.',
        'Comunhão UNIVERSAL: comunicam-se os bens presentes e futuros, salvo exceções do art. 1.668 (ex.: bens doados com cláusula de incomunicabilidade).',
        'Separação OBRIGATÓRIA: maiores de 70 anos, quem depende de suprimento judicial para casar, e quem casar com inobservância das causas suspensivas. O STF (Tema 1.236) permitiu afastá-la por escritura pública no caso dos maiores de 70.',
        'Alteração do regime: possível mediante autorização judicial, em pedido motivado de ambos os cônjuges, ressalvados direitos de terceiros (art. 1.639, §2º).'
      ],
      cai: ['O que se comunica na comunhão parcial', 'Hipóteses de separação obrigatória'],
      macetes: ['Parcial: o que se comprou durante o casamento é dos dois; herança e doação são de quem recebeu.'],
      video: 'regime de bens comunhão parcial universal separação obrigatória OAB civil' },
    { id: 'reais', titulo: 'Posse, propriedade e usucapião', incidencia: 'media',
      aula: [
        'Usucapião extraordinária (art. 1.238): 15 anos, sem título e boa-fé; 10 anos com moradia habitual ou obras produtivas.',
        'Usucapião ordinária (art. 1.242): 10 anos com justo título e boa-fé; 5 anos se o imóvel foi adquirido onerosamente com registro cancelado depois, havendo moradia ou investimentos.',
        'Usucapião especial urbana (art. 183 CF): área de até 250 m², 5 anos, para moradia, sem ser proprietário de outro imóvel. Rural (art. 191 CF): até 50 hectares, 5 anos, tornando-a produtiva.',
        'Usucapião familiar (art. 1.240-A): 2 anos, imóvel urbano de até 250 m² que dividia com o ex-cônjuge que abandonou o lar. Bens públicos não são usucapíveis.'
      ],
      cai: ['Prazos de cada espécie', 'Bens públicos não se usucapem'],
      macetes: ['Prazos: 15/10 (extraordinária), 10/5 (ordinária), 5 (especiais), 2 (familiar).'],
      video: 'usucapião espécies prazos extraordinária ordinária especial familiar OAB' }
  ]);

  add('processocivil', [
    { id: 'procedimento', titulo: 'Procedimento comum: audiência, contestação e revelia', incidencia: 'alta',
      aula: [
        'Recebida a inicial, o juiz designa audiência de conciliação ou mediação. Ela só não ocorre se AMBAS as partes manifestarem desinteresse, ou se não se admitir autocomposição (art. 334, §4º).',
        'O não comparecimento injustificado à audiência é ato atentatório à dignidade da justiça, com multa de até 2% da vantagem pretendida ou do valor da causa.',
        'Contestação: 15 dias, contados da audiência, do protocolo do pedido de cancelamento pelo réu ou da citação, conforme o caso (art. 335). Toda a matéria de defesa deve ser alegada (princípio da eventualidade).',
        'Revelia: presumem-se verdadeiros os fatos alegados pelo autor (art. 344), salvo se algum litisconsorte contestar, se o litígio versar sobre direitos indisponíveis, se faltar instrumento indispensável ou se as alegações forem inverossímeis (art. 345).'
      ],
      cai: ['Quando a audiência de conciliação é dispensada', 'Termo inicial da contestação', 'Exceções aos efeitos da revelia'],
      macetes: ['Audiência só cai se os DOIS não quiserem.', 'Revelia sem efeitos: litisconsorte contestou, direito indisponível, falta documento essencial, alegação inverossímil.'],
      video: 'procedimento comum CPC audiência de conciliação contestação revelia art 344 345 OAB' }
  ]);

  add('penal', [
    { id: 'concurso', titulo: 'Concurso de crimes e princípios', incidencia: 'media',
      aula: [
        'Concurso MATERIAL (art. 69): mais de uma ação, dois ou mais crimes → somam-se as penas.',
        'Concurso FORMAL (art. 70): uma só ação, dois ou mais crimes → aplica-se a pena mais grave aumentada de 1/6 até a metade. Se houver desígnios autônomos (formal impróprio), as penas se somam.',
        'Crime CONTINUADO (art. 71): mais de uma ação, crimes da mesma espécie, com condições semelhantes de tempo, lugar e modo → pena de um só crime, aumentada de 1/6 a 2/3.',
        'Princípio da insignificância (STF): mínima ofensividade, nenhuma periculosidade social, reduzido grau de reprovabilidade e inexpressividade da lesão. Não se aplica, por exemplo, a crimes com violência ou grave ameaça.'
      ],
      cai: ['Distinguir as três espécies de concurso', 'Vetores da insignificância'],
      macetes: ['Uma ação = formal. Várias ações = material ou continuado (se parecidas no tempo, lugar e modo).'],
      video: 'concurso material formal crime continuado princípio da insignificância OAB penal' }
  ]);

  add('trabalho', [
    { id: 'contrato', titulo: 'Relação de emprego, férias e estabilidades', incidencia: 'alta',
      aula: [
        'Requisitos do vínculo de emprego: pessoa física, pessoalidade, não eventualidade, onerosidade e subordinação (arts. 2º e 3º). Exclusividade NÃO é requisito. Vale a primazia da realidade.',
        'Férias: 30 dias após cada 12 meses (período aquisitivo), com 1/3 constitucional. Podem ser fracionadas em até 3 períodos, um com pelo menos 14 dias e os demais com no mínimo 5 dias cada.',
        'Gestante: estabilidade da confirmação da gravidez até 5 meses após o parto, mesmo que o empregador desconheça a gestação e mesmo em contrato por prazo determinado.',
        'Cipeiro: estabilidade desde o registro da candidatura até 1 ano após o fim do mandato. Acidentado: 12 meses após a cessação do auxílio por incapacidade acidentário.',
        'Prescrição: 5 anos, até o limite de 2 anos após a extinção do contrato.'
      ],
      cai: ['Requisitos do vínculo', 'Fracionamento das férias', 'Estabilidades provisórias'],
      macetes: ['Vínculo: "SHOPP" – Subordinação, Habitualidade, Onerosidade, Pessoalidade, Pessoa física.', 'Férias: 14 + 5 + 5 (no máximo 3 partes).'],
      video: 'requisitos relação de emprego férias fracionamento estabilidade gestante OAB trabalho' }
  ]);

  add('processotrabalho', [
    { id: 'procedimentotrab', titulo: 'Procedimentos e audiência', incidencia: 'alta',
      aula: [
        'Procedimento sumaríssimo: causas de até 40 salários mínimos (excluída a Administração direta, autárquica e fundacional). Pedido certo e líquido, no máximo 2 testemunhas por parte.',
        'Ritos: sumário (até 2 salários mínimos), sumaríssimo (até 40) e ordinário (acima de 40).',
        'Reclamação escrita: pedido certo, determinado e com indicação do valor (art. 840, §1º), sob pena de extinção sem resolução do mérito.',
        'Ausência do reclamante à audiência inicial: arquivamento, com custas (salvo motivo legalmente justificável). Ausência do reclamado: revelia e confissão quanto à matéria de fato. A presença do advogado do reclamado com contestação e documentos permite o seu recebimento (art. 844, §5º).'
      ],
      cai: ['Valor do sumaríssimo', 'Efeitos da ausência à audiência'],
      macetes: ['Faltou o reclamante → arquiva. Faltou o reclamado → revelia.', 'Sumário 2, sumaríssimo 40 salários mínimos.'],
      video: 'procedimento sumaríssimo audiência trabalhista arquivamento revelia art 844 OAB' }
  ]);

  add('administrativo', [
    { id: 'agentes', titulo: 'Agentes públicos', incidencia: 'media',
      aula: [
        'Estabilidade: 3 anos de efetivo exercício e avaliação especial de desempenho (art. 41 CF).',
        'O servidor estável só perde o cargo por sentença judicial transitada em julgado, processo administrativo com ampla defesa, avaliação periódica de desempenho insuficiente, ou para redução de despesas com pessoal (art. 169, §4º).',
        'Acumulação de cargos é vedada, salvo, havendo compatibilidade de horários: dois de professor; um de professor com outro técnico ou científico; dois de profissionais de saúde com profissões regulamentadas.',
        'Concurso: validade de até 2 anos, prorrogável uma vez por igual período. O aprovado dentro do número de vagas tem direito subjetivo à nomeação (STF, RE 598.099).'
      ],
      cai: ['Estabilidade', 'Acumulação lícita', 'Direito à nomeação'],
      macetes: ['Estabilidade 3 anos; concurso 2 + 2.'],
      video: 'agentes públicos estabilidade acumulação de cargos concurso público OAB administrativo' }
  ]);

  add('tributario', [
    { id: 'especies', titulo: 'Espécies tributárias e responsabilidade', incidencia: 'media',
      aula: [
        'Impostos: fato gerador independente de atividade estatal. Taxas: poder de polícia ou serviço público específico e divisível, efetivo ou potencial; não podem ter base de cálculo própria de impostos. Contribuição de melhoria: valorização imobiliária decorrente de obra pública.',
        'Empréstimos compulsórios: somente União, por lei complementar, para calamidade, guerra externa ou investimento público urgente e relevante.',
        'Responsabilidade por sucessão (art. 133): quem adquire fundo de comércio e continua a exploração responde integralmente, se o alienante cessar a atividade; subsidiariamente, se ele prosseguir ou iniciar nova atividade em 6 meses. Não há responsabilidade na alienação judicial em falência ou recuperação judicial.',
        'Sócios-administradores respondem pessoalmente por atos com excesso de poderes ou infração de lei, contrato ou estatuto (art. 135). A dissolução irregular da empresa autoriza o redirecionamento (Súmula 435 STJ).'
      ],
      cai: ['Conceito de taxa', 'Sucessão empresarial', 'Redirecionamento ao sócio'],
      macetes: ['Taxa = serviço específico e divisível ou poder de polícia. Iluminação pública e segurança pública não podem ser taxa.'],
      video: 'espécies tributárias taxa contribuição de melhoria responsabilidade tributária art 133 135 OAB' }
  ]);

  add('previdenciario', [
    { id: 'assistencia', titulo: 'Assistência social (BPC/LOAS) e pensão por morte', incidencia: 'media',
      aula: [
        'O BPC é benefício ASSISTENCIAL: independe de contribuição. Garante 1 salário mínimo à pessoa com deficiência e ao idoso com 65 anos ou mais que não tenham meios de prover a própria manutenção nem de tê-la provida pela família.',
        'O BPC não paga 13º e não gera pensão por morte.',
        'Pensão por morte: independe de carência, mas exige qualidade de segurado do falecido. Para o cônjuge/companheiro, a duração varia conforme a idade e o tempo de união e contribuição (pode ser de 4 meses a vitalícia).',
        'Dependentes de 1ª classe (cônjuge, companheiro e filhos menores de 21 ou inválidos) têm dependência econômica presumida e excluem as classes seguintes (pais; irmãos).'
      ],
      cai: ['Natureza assistencial do BPC', 'Requisitos da pensão por morte'],
      macetes: ['BPC: sem contribuição, sem 13º, sem pensão.'],
      video: 'BPC LOAS requisitos pensão por morte dependentes OAB previdenciário' }
  ]);
})();
