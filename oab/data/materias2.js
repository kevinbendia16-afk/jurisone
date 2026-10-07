/* Aulas adicionais, anexadas às matérias de materias.js. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);

  add('etica', [
    { id: 'prerrogativas', titulo: 'Prerrogativas, estágio e sociedade de advogados', incidencia: 'alta',
      aula: [
        'Principais direitos do advogado (art. 7º): inviolabilidade do escritório e das comunicações; comunicar-se com o cliente preso, pessoal e reservadamente, mesmo sem procuração; presença de representante da OAB na prisão em flagrante por motivo ligado à advocacia; não ser recolhido preso, antes do trânsito em julgado, senão em sala de Estado-Maior ou, na falta, prisão domiciliar; examinar autos de flagrante e de investigações de qualquer natureza, mesmo sem procuração (art. 7º, XIV), salvo se estiverem sob sigilo, caso em que é preciso apresentar procuração (art. 7º, §10; Súmula Vinculante 14).',
        'Estagiário: pode praticar sozinho, sob responsabilidade do advogado, atos como retirar e devolver autos, obter certidões e assinar petições de juntada de documentos (art. 29, §1º, do Regulamento Geral); os demais atos privativos, só em conjunto com o advogado e sob sua responsabilidade.',
        'Sociedade de advogados: registro no Conselho Seccional (é proibido o registro em Junta Comercial); só advogados podem ser sócios; os advogados da sociedade não podem representar clientes com interesses opostos; ninguém pode integrar mais de uma sociedade na mesma Seccional. A sociedade unipessoal de advocacia é permitida.',
        'Renúncia ao mandato: o advogado continua responsável por 10 dias após notificar o cliente, salvo se for substituído antes.',
        'Atenção – prisão e busca: por motivo ligado ao exercício da profissão, o advogado só pode ser preso em flagrante de crime inafiançável (art. 7º, §3º), com a presença de representante da OAB na lavratura do auto, sob pena de nulidade (art. 7º, IV). A quebra da inviolabilidade do escritório exige indícios de autoria e materialidade de crime praticado pelo próprio advogado, decisão judicial motivada, mandado específico e pormenorizado e a presença de representante da OAB; não se podem usar documentos e dados dos clientes, salvo dos que forem investigados como partícipes ou coautores do mesmo crime (art. 7º, §§6º e 7º).'
      ],
      cai: ['Rol do art. 7º (e a ressalva da sala de Estado-Maior antes do trânsito)', 'Limites de atuação do estagiário', 'Registro da sociedade na OAB'],
      macetes: ['Sala de Estado-Maior: só ANTES do trânsito em julgado.', 'Sociedade de advogados: OAB sim, Junta Comercial nunca.', 'Renunciou? Ainda responde por 10 dias.'],
      video: 'OAB ética prerrogativas do advogado art 7 estagiário sociedade de advogados' }
  ]);

  add('constitucional', [
    { id: 'direitos', titulo: 'Direitos fundamentais (art. 5º)', incidencia: 'alta',
      aula: [
        'Inviolabilidade do domicílio (art. 5º, XI): ninguém entra sem consentimento, salvo em flagrante delito, desastre ou para prestar socorro (a qualquer hora), ou por determinação judicial (somente durante o dia).',
        'Casa, para a CF, abrange qualquer compartimento habitado e também o local de trabalho fechado ao público (escritório, consultório) e o quarto de hotel ocupado. Sobre o conceito de dia, a doutrina diverge (período de luz solar ou das 6h às 18h); a Lei de Abuso de Autoridade pune quem cumpre mandado de busca domiciliar após as 21h ou antes das 5h (art. 22, §1º, III, da Lei 13.869/19). A entrada forçada sem mandado, mesmo à noite, só é lícita quando amparada em fundadas razões, justificadas a posteriori, de que há flagrante dentro da casa (STF, Tema 280).',
        'Sigilo das comunicações telefônicas: só pode ser quebrado por ordem judicial, para investigação criminal ou instrução processual penal (art. 5º, XII).',
        'Reserva de jurisdição: só o juiz pode determinar interceptação telefônica, busca domiciliar e prisão (salvo flagrante). Por isso a CPI, que tem poderes de investigação próprios das autoridades judiciais (art. 58, §3º), pode quebrar, por decisão fundamentada, os sigilos bancário, fiscal e de dados – inclusive os registros de ligações telefônicas –, mas NÃO pode determinar interceptação telefônica, busca e apreensão domiciliar nem prisão, salvo em flagrante.',
        'Direito de reunião: pacífica, sem armas, em locais abertos ao público, independentemente de autorização, desde que não frustre outra reunião anteriormente convocada para o mesmo local, exigido apenas o prévio aviso à autoridade competente (art. 5º, XVI).',
        'Associações: criação independe de autorização; só podem ser dissolvidas compulsoriamente por decisão judicial transitada em julgado, e só podem ter suas atividades suspensas por decisão judicial (art. 5º, XIX). Ninguém pode ser compelido a associar-se ou a permanecer associado (art. 5º, XX). Quando expressamente autorizadas, as associações representam seus filiados em juízo ou fora dele (art. 5º, XXI); para o STF, não basta previsão genérica no estatuto: é preciso autorização expressa, individual ou em assembleia (Tema 82). Já no mandado de segurança coletivo há substituição processual e a autorização é dispensada (Súmula 629 do STF).',
        'Os direitos fundamentais não são absolutos; colisões resolvem-se por ponderação (proporcionalidade).'
      ],
      cai: ['Hipóteses de entrada na casa', 'Reserva de jurisdição', 'Dissolução de associações'],
      macetes: ['Casa: juiz só de DIA. Flagrante, desastre e socorro: a qualquer hora.', 'Associação: dissolver = trânsito em julgado; suspender = decisão judicial.'],
      video: 'direitos fundamentais art 5 inviolabilidade domicílio sigilo reunião associação OAB' },
    { id: 'nacionalidade', titulo: 'Nacionalidade', incidencia: 'media',
      aula: [
        'Natos (art. 12, I): nascidos no Brasil (salvo filhos de estrangeiros a serviço de seu país); nascidos no estrangeiro de pai ou mãe brasileiros a serviço do Brasil; nascidos no estrangeiro de pai ou mãe brasileiros, registrados em repartição brasileira ou que venham a residir no Brasil e optem, após a maioridade, pela nacionalidade brasileira.',
        'Naturalização extraordinária: residência no Brasil há mais de 15 anos ininterruptos e sem condenação penal, mediante requerimento. Essa naturalização é direito subjetivo: preenchidos os requisitos, não pode ser negada. Já a naturalização ORDINÁRIA (art. 12, II, a) é ato discricionário, na forma da lei (Lei 13.445/17); dos originários de países de língua portuguesa a CF exige apenas residência por 1 ano ininterrupto e idoneidade moral.',
        'Cargos privativos de nato (art. 12, §3º): Presidente e Vice; Presidente da Câmara e do Senado; Ministro do STF; carreira diplomática; oficial das Forças Armadas; Ministro de Estado da Defesa.',
        'A lei não pode distinguir natos e naturalizados, salvo nos casos previstos na própria CF (art. 12, §2º): os cargos do §3º, as 6 vagas de cidadãos natos no Conselho da República (art. 89, VII), a extradição (art. 5º, LI) e a propriedade de empresa jornalística e de radiodifusão, que, entre pessoas físicas, é privativa de natos ou de naturalizados há mais de 10 anos (art. 222). Aos portugueses com residência permanente no País, havendo reciprocidade, são atribuídos os direitos inerentes ao brasileiro, salvo os casos previstos na CF (quase-nacionalidade, art. 12, §1º).',
        'O brasileiro nato não pode ser extraditado. O naturalizado pode, por crime comum anterior à naturalização ou por tráfico de drogas comprovado.',
        'Perda da nacionalidade (art. 12, §4º, com a redação da EC 131/23): só ocorre (I) pelo cancelamento da naturalização por sentença judicial, em virtude de fraude no processo de naturalização ou de atentado contra a ordem constitucional e o Estado Democrático; ou (II) por pedido expresso de perda feito à autoridade brasileira competente, ressalvadas as situações que gerem apatridia. Atenção: desde a EC 131/23, adquirir outra nacionalidade NÃO faz mais o brasileiro perder a sua, e quem renunciou pode readquirir a nacionalidade originária, nos termos da lei (art. 12, §5º).'
      ],
      cai: ['Rol de cargos privativos', 'Extradição do naturalizado'],
      macetes: ['Cargos de nato: "MP3.COM" – Ministro do STF, Presidente e Vice, Presidente da Câmara, Presidente do Senado, Carreira diplomática, Oficial das Forças Armadas, Ministro da Defesa.'],
      video: 'nacionalidade brasileiro nato naturalizado cargos privativos MP3.COM OAB' },
    { id: 'poderes', titulo: 'Organização dos Poderes', incidencia: 'media',
      aula: [
        'Câmara dos Deputados (art. 51): autoriza, por 2/3, a instauração de processo contra o Presidente, o Vice e os Ministros de Estado; toma as contas do Presidente quando não apresentadas no prazo.',
        'Senado Federal (art. 52): processa e julga o Presidente e o Vice nos crimes de responsabilidade; aprova a escolha de Ministros do STF, do PGR, de diretores do Banco Central, entre outros.',
        'No impeachment, a Câmara autoriza por 2/3 e o Senado, sob a presidência do Presidente do STF, só condena por 2/3 de seus membros; a pena é a perda do cargo com inabilitação para o exercício de função pública por 8 anos (art. 52, parágrafo único). O Presidente fica suspenso de suas funções após a instauração do processo pelo Senado (crime de responsabilidade) ou o recebimento da denúncia ou queixa pelo STF (crime comum); se o julgamento não terminar em 180 dias, ele reassume, sem prejuízo do processo (art. 86, §§1º e 2º).',
        'Nos crimes comuns, o Presidente é julgado pelo STF, após autorização da Câmara. Durante o mandato, ele não pode ser responsabilizado penalmente por atos estranhos ao exercício de suas funções (art. 86, §4º – a imunidade é só penal e temporária; ações cíveis, fiscais e administrativas seguem normalmente), e, nas infrações comuns, não pode ser preso enquanto não sobrevier sentença condenatória (art. 86, §3º).',
        'Imunidade material dos parlamentares: são invioláveis, civil e penalmente, por quaisquer de suas opiniões, palavras e votos. Imunidade formal: desde a diplomação, só podem ser presos em flagrante de crime inafiançável.',
        'Detalhes da imunidade formal (art. 53): preso em flagrante de crime inafiançável, os autos vão em 24 horas à Casa, que resolve sobre a prisão pelo voto da maioria de seus membros (§2º); recebida a denúncia por crime praticado após a diplomação, a Casa pode sustar o andamento da ação, por iniciativa de partido político nela representado e voto da maioria (§3º), o que suspende a prescrição enquanto durar o mandato (§5º). Deputados estaduais têm as mesmas imunidades (art. 27, §1º); vereadores só têm a material, por opiniões, palavras e votos no exercício do mandato e na circunscrição do Município (art. 29, VIII).'
      ],
      cai: ['Competências privativas da Câmara x Senado', 'Imunidades parlamentares'],
      macetes: ['Câmara AUTORIZA (2/3); Senado JULGA (crime de responsabilidade); STF julga crime comum.'],
      video: 'competências câmara senado impeachment imunidade parlamentar OAB' }
  ]);

  add('civil', [
    { id: 'negocio', titulo: 'Negócio jurídico e seus defeitos', incidencia: 'alta',
      aula: [
        'Erro, dolo, coação, estado de perigo, lesão e fraude contra credores tornam o negócio ANULÁVEL. O prazo decadencial para anular é de 4 anos (art. 178).',
        'Termo inicial dos 4 anos (art. 178): na coação, do dia em que ela CESSAR; no erro, dolo, fraude contra credores, estado de perigo e lesão, do dia em que se realizou o negócio; nos atos de incapazes, do dia em que cessar a incapacidade. Se a lei disser que o ato é anulável sem fixar prazo, ele será de 2 anos, contados da conclusão do ato (art. 179). A anulabilidade só pode ser alegada pelos interessados, não é pronunciada de ofício e admite confirmação (arts. 172 e 177); a nulidade pode ser alegada por qualquer interessado ou pelo MP, quando lhe couber intervir, e deve ser pronunciada pelo juiz (art. 168).',
        'Dolo acidental (o negócio seria feito de outro modo) só gera perdas e danos (art. 146). Coação por terceiro anula o negócio se a parte beneficiada sabia ou devia saber, e ela responde solidariamente com o coator por perdas e danos (art. 154); se não sabia nem devia saber, o negócio subsiste e só o coator indeniza (art. 155). No dolo de terceiro, o negócio também só é anulado se a parte beneficiada sabia ou devia saber; caso contrário, subsiste e o terceiro responde pelas perdas e danos (art. 148).',
        'Lesão (art. 157): premente necessidade ou inexperiência + prestação manifestamente desproporcional; não exige dolo de aproveitamento da outra parte (Enunciado 150 da Jornada de Direito Civil), e o negócio não é anulado se for oferecido suplemento suficiente ou se o favorecido concordar com a redução do proveito (art. 157, §2º). Estado de perigo (art. 156): alguém, premido da necessidade de salvar-se, ou a pessoa de sua família, de grave dano conhecido pela outra parte, assume obrigação excessivamente onerosa; se a pessoa não for da família, o juiz decide segundo as circunstâncias (art. 156, parágrafo único).',
        'A simulação torna o negócio NULO, mas subsiste o que se dissimulou, se válido na substância e na forma (art. 167). Nulidade não convalesce com o tempo.',
        'Fraude contra credores (arts. 158 a 165): nos atos gratuitos e na remissão de dívida, basta o prejuízo ao credor (eventus damni); nos onerosos, exige-se também que a insolvência seja notória ou que houvesse motivo para ser conhecida do outro contratante (consilium fraudis, art. 159). Só os credores que já o eram ao tempo do ato podem propor a ação pauliana (art. 158, §2º). Não confunda com a fraude à execução (art. 792 do CPC), que pressupõe processo em curso e torna o ato ineficaz perante o exequente, sem necessidade de ação própria.'
      ],
      cai: ['Diferença entre lesão e estado de perigo', 'Simulação = nulidade', 'Prazo de 4 anos'],
      macetes: ['Vícios: anulável em 4 anos. Simulação: nula.', 'Lesão = inexperiência/necessidade econômica. Estado de perigo = salvar-se (ou um familiar) de grave dano conhecido pela outra parte.'],
      video: 'defeitos do negócio jurídico erro dolo coação lesão estado de perigo simulação OAB' },
    { id: 'respcivil', titulo: 'Responsabilidade civil', incidencia: 'alta',
      aula: [
        'Regra: responsabilidade subjetiva (arts. 186 e 927). Será objetiva nos casos especificados em lei ou quando a atividade normalmente desenvolvida implicar, por sua natureza, risco para os direitos de outrem (art. 927, parágrafo único).',
        'Responsabilidade por fato de terceiro (art. 932): pais pelos filhos menores, tutor e curador, empregador pelos empregados, donos de hotéis pelos hóspedes. É objetiva (art. 933).',
        'Quem indeniza pelo terceiro pode reaver dele o que pagou, salvo se o causador do dano for seu descendente, absoluta ou relativamente incapaz (art. 934). As pessoas do art. 932 respondem solidariamente com os autores do dano (art. 942, parágrafo único), mas, se o autor for incapaz, a responsabilidade dele é apenas subsidiária (art. 928). A responsabilidade civil é independente da criminal, mas não se pode mais questionar a existência do fato ou a autoria quando essas questões já estiverem decididas no juízo criminal (art. 935).',
        'O incapaz responde subsidiária e equitativamente, se os responsáveis não tiverem obrigação ou meios (art. 928).',
        'Fato do animal e da coisa (responsabilidade objetiva): o dono ou detentor do animal ressarce o dano, se não provar culpa da vítima ou força maior (art. 936); o dono do edifício responde pela ruína que decorra de falta de reparos cuja necessidade fosse manifesta (art. 937); quem habita o prédio responde pelas coisas que dele caírem ou forem lançadas em lugar indevido (art. 938). Quanto ao incapaz, a indenização equitativa não terá lugar se privar do necessário ele ou quem dele depende (art. 928, parágrafo único).',
        'A indenização mede-se pela extensão do dano (art. 944). Se houver excessiva desproporção entre a culpa e o dano, o juiz pode reduzir equitativamente.',
        'Súmulas do STJ que mais caem: dano material e moral oriundos do mesmo fato são cumuláveis (Súmula 37); dano estético e moral também (Súmula 387); a pessoa jurídica pode sofrer dano moral (Súmula 227); na responsabilidade extracontratual, os juros de mora fluem desde o evento danoso (Súmula 54); a correção do dano moral corre desde o arbitramento (Súmula 362). Sem índice convencionado ou previsto em lei específica, a correção é pelo IPCA, e os juros seguem a taxa legal, que é a Selic, deduzido o IPCA (arts. 389, parágrafo único, e 406, com a Lei 14.905/24).'
      ],
      cai: ['Responsabilidade objetiva por fato de terceiro', 'Responsabilidade do incapaz'],
      macetes: ['Art. 932 + 933: pais, tutor, curador, empregador e hoteleiro respondem sem culpa PRÓPRIA, mas é preciso provar a culpa de quem causou o dano (filho, pupilo, curatelado, empregado, hóspede) – responsabilidade objetiva indireta.'],
      video: 'responsabilidade civil código civil art 927 932 933 objetiva subjetiva OAB' },
    { id: 'familia', titulo: 'Família: regimes de bens', incidencia: 'alta',
      aula: [
        'Comunhão PARCIAL (regime legal): comunicam-se os bens adquiridos onerosamente na constância do casamento. Excluem-se os bens anteriores, os recebidos por doação ou herança e os sub-rogados em seu lugar, e os proventos do trabalho pessoal (art. 1.659). Cuidado: o que se compra com o salário durante o casamento se comunica, e o STJ manda partilhar verbas trabalhistas e FGTS referentes ao período do casamento. Também entram na comunhão os bens adquiridos por fato eventual, como prêmio de loteria, e as benfeitorias em bens particulares (art. 1.660).',
        'Comunhão UNIVERSAL: comunicam-se os bens presentes e futuros, salvo exceções do art. 1.668 (ex.: bens doados com cláusula de incomunicabilidade).',
        'A escolha de regime diferente da comunhão parcial exige pacto antenupcial (salvo a separação obrigatória, imposta por lei), que é nulo se não for feito por escritura pública e ineficaz se não lhe seguir o casamento (art. 1.653); sem pacto, ou se ele for nulo ou ineficaz, vale a comunhão parcial (art. 1.640), que também rege a união estável sem contrato escrito (art. 1.725). Na separação CONVENCIONAL, cada cônjuge administra e pode alienar livremente seus bens (art. 1.687). Na participação final nos aquestos, cada um tem patrimônio próprio durante o casamento e, na dissolução, tem direito à metade dos bens adquiridos pelo casal a título oneroso (art. 1.672).',
        'Separação OBRIGATÓRIA: maiores de 70 anos, quem depende de suprimento judicial para casar, e quem casar com inobservância das causas suspensivas. O STF (Tema 1.236) permitiu afastá-la por escritura pública no caso dos maiores de 70.',
        'Súmula 377 do STF: no regime de separação legal (obrigatória), comunicam-se os bens adquiridos na constância do casamento. Para o STJ, essa comunicação depende da prova do esforço comum, e os nubentes podem afastá-la por pacto antenupcial. A súmula não se aplica à separação convencional.',
        'Alteração do regime: possível mediante autorização judicial, em pedido motivado de ambos os cônjuges, ressalvados direitos de terceiros (art. 1.639, §2º).',
        'Outorga conjugal (art. 1.647): salvo no regime da separação absoluta, nenhum cônjuge pode, sem autorização do outro, alienar ou gravar de ônus real bens imóveis, pleitear em juízo acerca desses bens, prestar fiança ou aval, nem fazer doação não remuneratória de bens comuns ou que possam integrar futura meação. Se o outro negar sem motivo justo, o juiz pode suprir a outorga (art. 1.648). O ato praticado sem ela é anulável até 2 anos depois de terminada a sociedade conjugal (art. 1.649), e a fiança sem autorização do cônjuge implica a ineficácia total da garantia (Súmula 332 do STJ).'
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
