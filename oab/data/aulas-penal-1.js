/* Direito Penal – parte 1: fundamentos, teoria do crime e teoria da pena. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('penal', [
    { id: 'principiospenal', titulo: 'Princípios do Direito Penal', incidencia: 'alta',
      aula: [
        'Legalidade e anterioridade: não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal (art. 1º do CP e art. 5º, XXXIX, da CF). Só lei em sentido estrito cria crime e pena: medida provisória não pode (art. 62, §1º, I, b, da CF).',
        'Irretroatividade da lei mais grave: a lei penal só retroage para beneficiar o réu (art. 5º, XL, da CF). A lei mais severa vale apenas para fatos posteriores à sua vigência.',
        'Intervenção mínima: o Direito Penal é a última opção do Estado (ultima ratio). Desdobra-se em subsidiariedade (só atua quando os outros ramos falham) e fragmentariedade (protege apenas os bens mais importantes contra os ataques mais graves).',
        'Ofensividade e insignificância: só há crime quando há lesão ou perigo de lesão ao bem jurídico. A insignificância exclui a tipicidade material quando presentes os 4 vetores do STF: mínima ofensividade, nenhuma periculosidade social, reduzido grau de reprovabilidade e inexpressividade da lesão. Não se aplica a crimes com violência ou grave ameaça, nem aos crimes contra a Administração Pública (Súmula 599 do STJ), salvo o descaminho.',
        'Culpabilidade: não existe responsabilidade penal objetiva. Ninguém responde sem dolo ou culpa, e a pena é limitada pela reprovabilidade da conduta.',
        'Pessoalidade (intranscendência): nenhuma pena passa da pessoa do condenado. A obrigação de reparar o dano e a perda de bens podem ser estendidas aos sucessores, até o limite do patrimônio transferido (art. 5º, XLV, da CF).',
        'Humanidade: são proibidas as penas de morte (salvo guerra declarada), de caráter perpétuo, de trabalhos forçados, de banimento e cruéis (art. 5º, XLVII, da CF).',
        'Individualização e proporcionalidade: a pena é individualizada na lei, na sentença e na execução, e deve ser proporcional à gravidade do fato. Ninguém pode ser punido duas vezes pelo mesmo fato (ne bis in idem).'
      ],
      cai: ['Medida provisória não pode criar crime', 'Insignificância: os 4 vetores e a Súmula 599 do STJ', 'Intranscendência: a reparação do dano chega aos herdeiros até o limite da herança'],
      macetes: ['Insignificância = "MARI": Mínima ofensividade, Ausência de periculosidade, Reduzida reprovabilidade, Inexpressividade da lesão.', 'Penas proibidas: "MOPE-TRA-BAN-CRU" (morte, perpétua, trabalhos forçados, banimento, cruéis).'],
      video: 'princípios do direito penal OAB legalidade insignificância intervenção mínima' },

    { id: 'leiespaco', titulo: 'Lei penal no espaço: territorialidade e extraterritorialidade', incidencia: 'media',
      aula: [
        'Territorialidade temperada: aplica-se a lei brasileira ao crime cometido no território nacional, sem prejuízo de convenções, tratados e regras de direito internacional (art. 5º do CP).',
        'Território por extensão: embarcações e aeronaves brasileiras públicas ou a serviço do governo, onde quer que estejam; e as privadas brasileiras em alto-mar ou no espaço aéreo correspondente (art. 5º, §1º). Também se aplica a lei brasileira a crimes em embarcações e aeronaves estrangeiras privadas que estejam em território brasileiro (art. 5º, §2º).',
        'Extraterritorialidade incondicionada (art. 7º, I): crimes contra a vida ou a liberdade do Presidente da República; contra o patrimônio ou a fé pública da União, Estados, DF, Municípios, empresas públicas, sociedades de economia mista, autarquias e fundações; contra a Administração Pública por quem está a seu serviço; e genocídio, quando o agente for brasileiro ou domiciliado no Brasil. Aplica-se a lei brasileira mesmo que o agente tenha sido absolvido ou condenado no estrangeiro.',
        'Extraterritorialidade condicionada (art. 7º, II): crimes que o Brasil se obrigou a reprimir por tratado; praticados por brasileiro; e em aeronaves ou embarcações brasileiras privadas no estrangeiro, quando lá não forem julgados.',
        'Condições do §2º (todas juntas): o agente entrar no território nacional; o fato ser punível também no país em que foi praticado; o crime estar entre aqueles pelos quais a lei brasileira autoriza a extradição; o agente não ter sido absolvido nem cumprido pena no estrangeiro; e não ter sido perdoado nem extinta a punibilidade.',
        'Estrangeiro contra brasileiro fora do Brasil (§3º): além das condições acima, não pode ter sido pedida ou ter sido negada a extradição, e deve haver requisição do Ministro da Justiça.',
        'Pena cumprida no estrangeiro (art. 8º): atenua a pena imposta no Brasil pelo mesmo crime, quando diversas, ou nela é computada, quando idênticas.'
      ],
      cai: ['Distinguir hipóteses incondicionadas e condicionadas', 'Condições cumulativas do art. 7º, §2º', 'Embarcação privada estrangeira em porto brasileiro'],
      macetes: ['Incondicionada = crimes contra o próprio Estado brasileiro (Presidente, patrimônio público, Administração) + genocídio.', 'Condicionada exige o agente "pisar" no Brasil.'],
      video: 'lei penal no espaço territorialidade extraterritorialidade art 7 OAB' },

    { id: 'fatotipico', titulo: 'Fato típico: conduta, resultado, nexo causal e tipicidade', incidencia: 'alta',
      aula: [
        'Conceito analítico: para a teoria majoritária (tripartite), crime é fato típico, ilícito e culpável. O fato típico tem quatro elementos: conduta, resultado, nexo causal e tipicidade.',
        'Conduta: ação ou omissão humana, voluntária e consciente, dirigida a um fim. Não há conduta em atos reflexos, coação física irresistível, sonambulismo ou hipnose.',
        'Resultado: naturalístico (modificação no mundo exterior, exigida nos crimes materiais, como o homicídio) ou jurídico (lesão ou perigo ao bem jurídico, presente em todo crime). Crimes formais se consumam com a conduta, mesmo sem o resultado pretendido (extorsão, Súmula 96 do STJ); crimes de mera conduta não têm resultado naturalístico (violação de domicílio).',
        'Nexo causal (art. 13): o CP adota a teoria da equivalência dos antecedentes (conditio sine qua non): causa é toda ação ou omissão sem a qual o resultado não teria ocorrido.',
        'Concausa superveniente relativamente independente (art. 13, §1º): se, por si só, produziu o resultado, rompe o nexo, e o agente responde apenas pelos atos praticados. Exemplo: a vítima ferida morre no incêndio do hospital; o autor responde por tentativa de homicídio.',
        'Omissão imprópria (art. 13, §2º): quem tinha o dever de agir para evitar o resultado responde por ele. O dever surge da lei (pais), de quem assumiu a responsabilidade de impedir o resultado (babá, salva-vidas) ou de quem criou o risco com seu comportamento anterior (ingerência).',
        'Tipicidade: formal (adequação do fato à descrição legal) e material (lesão relevante ao bem jurídico). Por isso a insignificância exclui a tipicidade material.'
      ],
      cai: ['Concausas: quando o nexo é rompido', 'Hipóteses de dever de agir do garantidor', 'Crime material x formal x de mera conduta'],
      macetes: ['Garantidor: "LEI, ASSUMIU, CRIOU" (lei, assunção da responsabilidade, ingerência).', 'Concausa superveniente que "por si só" mata = o autor responde só pela tentativa.'],
      video: 'fato típico conduta nexo causal concausas omissão imprópria OAB penal' },

    { id: 'dolo', titulo: 'Dolo, culpa e crime preterdoloso', incidencia: 'alta',
      aula: [
        'Dolo (art. 18, I): o agente quis o resultado (dolo direto) ou assumiu o risco de produzi-lo (dolo eventual).',
        'Culpa (art. 18, II): o resultado decorre de imprudência (agir sem cautela), negligência (deixar de agir com cautela) ou imperícia (falta de aptidão técnica em arte ou profissão), sendo previsível.',
        'Excepcionalidade do crime culposo: só há crime culposo quando a lei prevê expressamente a modalidade culposa (art. 18, parágrafo único). Não existe, por exemplo, furto culposo.',
        'Culpa consciente x dolo eventual: nos dois o agente prevê o resultado. Na culpa consciente, ele acredita sinceramente que o resultado não ocorrerá; no dolo eventual, ele não se importa ("seja como for, dá no mesmo").',
        'Crime preterdoloso: dolo no antecedente e culpa no consequente. Exemplo: lesão corporal seguida de morte (art. 129, §3º). Pelo resultado que agrava a pena só responde quem o causou ao menos culposamente (art. 19).',
        'Não se admite tentativa nos crimes culposos nem nos preterdolosos, porque não há vontade dirigida ao resultado final.'
      ],
      cai: ['Diferença entre culpa consciente e dolo eventual', 'Excepcionalidade do crime culposo', 'Preterdolo e tentativa'],
      macetes: ['Culpa consciente: "vai dar certo". Dolo eventual: "dane-se".', 'Preterdolo = dolo antes, culpa depois; tentativa impossível.'],
      video: 'dolo eventual culpa consciente crime preterdoloso OAB penal' },

    { id: 'erro', titulo: 'Erro de tipo, erro de proibição e descriminantes putativas', incidencia: 'alta',
      aula: [
        'Erro de tipo essencial (art. 20): o agente se engana sobre um elemento do tipo (pega a mala de outra pessoa pensando que é a sua). Sempre exclui o dolo. Se inevitável, exclui dolo e culpa; se evitável, permite a punição por crime culposo, se houver previsão legal.',
        'Erro sobre a pessoa (art. 20, §3º): o agente atinge pessoa diversa da pretendida. Considera-se a vítima que ele queria atingir (vítima virtual) para qualificadoras, agravantes e privilégios.',
        'Aberratio ictus e aberratio criminis (arts. 73 e 74): no erro na execução, o agente atinge pessoa diversa por acidente ou erro no uso dos meios, e responde como se tivesse atingido quem pretendia (se atingir as duas, aplica-se o concurso formal). No resultado diverso do pretendido, responde por culpa se o fato for previsto como culposo.',
        'Erro de proibição (art. 21): o agente sabe o que faz, mas acha que é permitido. Exclui a potencial consciência da ilicitude. Se inevitável, isenta de pena; se evitável, reduz a pena de 1/6 a 1/3. O desconhecimento da lei é inescusável, mas o erro sobre a ilicitude do fato pode afastar a culpabilidade.',
        'Descriminantes putativas (art. 20, §1º): o agente imagina, por erro plenamente justificado, situação de fato que tornaria a ação legítima (pensa que vai ser agredido e reage). Isenta de pena; se o erro derivar de culpa, responde por crime culposo, se previsto.',
        'Erro determinado por terceiro (art. 20, §2º): responde o terceiro que provocou o erro.'
      ],
      cai: ['Erro de tipo exclui o dolo; erro de proibição afeta a culpabilidade', 'Frações do erro de proibição evitável', 'Erro sobre a pessoa e vítima virtual'],
      macetes: ['Erro de TIPO: erra sobre o FATO. Erro de PROIBIÇÃO: erra sobre a LEI.', 'Proibição evitável: reduz de 1/6 a 1/3.'],
      video: 'erro de tipo erro de proibição descriminantes putativas OAB penal' },

    { id: 'itercriminis', titulo: 'Iter criminis, consumação, tentativa e crime impossível', incidencia: 'alta',
      aula: [
        'Etapas do crime: cogitação, preparação, execução e consumação. Cogitação e preparação, em regra, não são puníveis, salvo quando a preparação já é crime autônomo (associação criminosa, petrechos para falsificação).',
        'Consumação (art. 14, I): quando reúnem-se todos os elementos da definição legal. No furto e no roubo, consuma-se com a inversão da posse, ainda que por breve tempo e sem posse mansa e pacífica (Súmula 582 do STJ, para o roubo; Tema 934 do STJ, para o furto).',
        'Tentativa (art. 14, II): iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente. Pena do consumado reduzida de 1/3 a 2/3: quanto mais perto da consumação, menor a redução.',
        'Não admitem tentativa: crimes culposos, preterdolosos, omissivos próprios, habituais e contravenções penais (a tentativa de contravenção não é punível, art. 4º da LCP).',
        'Desistência voluntária e arrependimento eficaz (art. 15): o agente desiste de prosseguir ou impede o resultado. Responde só pelos atos já praticados (ponte de ouro).',
        'Arrependimento posterior (art. 16): crime sem violência ou grave ameaça à pessoa, dano reparado ou coisa restituída até o recebimento da denúncia, por ato voluntário: redução de 1/3 a 2/3.',
        'Crime impossível (art. 17): ineficácia absoluta do meio ou absoluta impropriedade do objeto. Não se pune nem a tentativa. A vigilância eletrônica da loja, por si só, não torna o furto impossível (Súmula 567 do STJ); o flagrante preparado pela polícia torna (Súmula 145 do STF).'
      ],
      cai: ['Momento da consumação no furto e no roubo', 'Crimes que não admitem tentativa', 'Súmulas 567 do STJ e 145 do STF'],
      macetes: ['Sem tentativa: "CCHOPP" – Culposo, Contravenção, Habitual, Omissivo próprio, Preterdoloso, e unissubsistentes.', 'Flagrante preparado = crime impossível. Flagrante esperado = crime válido.'],
      video: 'iter criminis tentativa crime impossível súmula 145 súmula 567 OAB penal' },

    { id: 'culpabilidade', titulo: 'Culpabilidade e imputabilidade', incidencia: 'alta',
      aula: [
        'Elementos da culpabilidade: imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa. Faltando qualquer um, o agente é isento de pena.',
        'Doença mental (art. 26): é inimputável quem, por doença mental ou desenvolvimento mental incompleto ou retardado, era inteiramente incapaz de entender o caráter ilícito do fato ou de se determinar de acordo com esse entendimento (critério biopsicológico). Recebe absolvição imprópria com medida de segurança.',
        'Semi-imputável (art. 26, parágrafo único): capacidade apenas reduzida. Há condenação, com pena reduzida de 1/3 a 2/3, ou substituição por medida de segurança (art. 98).',
        'Menores de 18 anos (art. 27): inimputáveis por critério biológico. Respondem pelo ECA (ato infracional).',
        'Embriaguez (art. 28): a voluntária ou culposa não exclui a imputabilidade (teoria da actio libera in causa). Só a embriaguez completa, por caso fortuito ou força maior, isenta de pena; se incompleta, reduz a pena de 1/3 a 2/3. Emoção e paixão não excluem a imputabilidade.',
        'Coação moral irresistível e obediência hierárquica (art. 22): só é punível o autor da coação ou da ordem. A ordem não pode ser manifestamente ilegal; se for, o subordinado também responde.'
      ],
      cai: ['Critério biopsicológico x biológico', 'Embriaguez voluntária x fortuita', 'Coação moral irresistível'],
      macetes: ['Culpabilidade = "IPE": Imputabilidade, Potencial consciência, Exigibilidade.', 'Bebeu porque quis? Responde. Bebeu enganado e ficou completamente embriagado? Isento.'],
      video: 'culpabilidade imputabilidade embriaguez coação moral irresistível OAB penal' },

    { id: 'concursopessoas', titulo: 'Concurso de pessoas', incidencia: 'alta',
      aula: [
        'Teoria monista (art. 29): quem concorre para o crime incide nas penas a ele cominadas, na medida de sua culpabilidade. Todos respondem pelo mesmo crime.',
        'Requisitos: pluralidade de agentes e de condutas, relevância causal de cada conduta, liame subjetivo (vontade de participar do mesmo fato, não precisa de acordo prévio) e identidade de infração.',
        'Autor e partícipe: autor executa o núcleo do tipo ou tem o domínio do fato; partícipe induz, instiga ou auxilia sem praticar o núcleo. A participação é acessória: só é punível se o autor ao menos iniciar a execução (art. 31).',
        'Participação de menor importância (art. 29, §1º): redução de 1/6 a 1/3.',
        'Cooperação dolosamente distinta (art. 29, §2º): quem quis participar de crime menos grave responde por ele; a pena é aumentada até a metade se o resultado mais grave era previsível.',
        'Comunicabilidade (art. 30): circunstâncias e condições de caráter pessoal não se comunicam, salvo quando elementares do crime. Por isso o particular que ajuda o funcionário público a desviar verba, sabendo dessa condição, responde por peculato.',
        'Autoria mediata: o autor usa como instrumento alguém que age sem culpabilidade (um inimputável, alguém em erro). Só o autor mediato responde.'
      ],
      cai: ['Elementares se comunicam (peculato do particular)', 'Cooperação dolosamente distinta', 'Art. 31: ajuste sem início de execução não é punível'],
      macetes: ['Requisitos: "PRLI" – Pluralidade, Relevância causal, Liame subjetivo, Identidade de infração.', 'Elementar se comunica se o comparsa sabia dela.'],
      video: 'concurso de pessoas teoria monista art 29 art 30 elementares OAB penal' },

    { id: 'penas', titulo: 'Espécies de pena e regimes de cumprimento', incidencia: 'alta',
      aula: [
        'Espécies (art. 32): privativas de liberdade (reclusão e detenção), restritivas de direitos e multa.',
        'Regime inicial (art. 33, §2º): pena superior a 8 anos, fechado; superior a 4 e até 8 anos, semiaberto, se não reincidente; até 4 anos, aberto, se não reincidente. A detenção começa no semiaberto ou no aberto (pode haver regressão ao fechado).',
        'Reincidente: o regime inicial é o mais grave, mas a Súmula 269 do STJ admite o semiaberto para o reincidente condenado a até 4 anos, se as circunstâncias judiciais forem favoráveis.',
        'Gravidade abstrata não basta: o juiz não pode impor regime mais severo que o permitido pela pena só com base na gravidade abstrata do crime (Súmulas 718 e 719 do STF; Súmula 440 do STJ). Precisa de fundamentação concreta.',
        'Progressão (art. 112 da LEP, após o Pacote Anticrime): exige percentuais de cumprimento da pena que variam conforme primariedade, violência e hediondez (de 16% a 70%) e boa conduta carcerária. Ex.: 16% para primário em crime sem violência; 40% para primário em crime hediondo.',
        'Limite de cumprimento (art. 75): o tempo de cumprimento das penas privativas de liberdade não pode ser superior a 40 anos.',
        'Detração (art. 42): computa-se na pena e na medida de segurança o tempo de prisão provisória e de internação. O juiz da sentença já considera a detração para fixar o regime inicial (art. 387, §2º, do CPP).'
      ],
      cai: ['Tabela do art. 33', 'Súmulas 269, 440, 718 e 719', 'Limite de 40 anos'],
      macetes: ['Regimes: mais de 8 = fechado; 4 a 8 = semiaberto; até 4 = aberto (se não reincidente).', 'Gravidade abstrata não fundamenta regime: precisa de motivo concreto.'],
      video: 'regimes de cumprimento de pena art 33 súmula 269 718 719 progressão OAB penal' },

    { id: 'dosimetria', titulo: 'Dosimetria: o cálculo da pena em três fases', incidencia: 'alta',
      aula: [
        'Critério trifásico (art. 68): 1ª fase, pena-base; 2ª fase, atenuantes e agravantes; 3ª fase, causas de diminuição e de aumento.',
        '1ª fase: o juiz analisa as 8 circunstâncias judiciais do art. 59: culpabilidade, antecedentes, conduta social, personalidade, motivos, circunstâncias, consequências do crime e comportamento da vítima. Inquéritos e ações penais em curso não podem agravar a pena-base (Súmula 444 do STJ).',
        '2ª fase: agravantes (arts. 61 e 62, como reincidência e motivo fútil) e atenuantes (art. 65, como menoridade relativa e confissão espontânea). Nesta fase a pena não pode ficar abaixo do mínimo nem acima do máximo legal (Súmula 231 do STJ).',
        'Confissão espontânea: atenua a pena sempre que for utilizada pelo juiz para formar seu convencimento, mesmo que parcial ou qualificada (Súmula 545 do STJ). O STJ admite compensar a confissão com a reincidência.',
        'Reincidência (arts. 63 e 64): novo crime após o trânsito em julgado de condenação anterior. Após 5 anos do cumprimento ou da extinção da pena anterior, não gera mais reincidência (período depurador), mas pode valer como mau antecedente.',
        '3ª fase: causas de aumento e diminuição, em frações (1/3, 2/3, metade). Aqui a pena pode ultrapassar o máximo ou ficar abaixo do mínimo. Qualificadoras não entram nas fases: elas mudam os próprios limites da pena (pena-base já parte do patamar qualificado).',
        'Pena de multa: dias-multa de 10 a 360, cada um de 1/30 a 5 vezes o salário mínimo (art. 49), considerando principalmente a situação econômica do réu.'
      ],
      cai: ['Súmula 231 do STJ (atenuante não leva abaixo do mínimo)', 'Súmula 444 do STJ', 'Diferença entre qualificadora e causa de aumento'],
      macetes: ['Fases: BASE (art. 59) → AGRAVA/ATENUA (sem furar limites) → AUMENTA/DIMINUI (pode furar).', 'Súmula 231: atenuante nunca abaixo do mínimo.'],
      video: 'dosimetria da pena critério trifásico art 59 súmula 231 OAB penal' },

    { id: 'substituicao', titulo: 'Penas alternativas, sursis e livramento condicional', incidencia: 'alta',
      aula: [
        'Substituição por restritivas de direitos (art. 44): pena não superior a 4 anos e crime sem violência ou grave ameaça, ou crime culposo com qualquer pena; réu não reincidente em crime doloso (admite-se reincidente se a medida for socialmente recomendável e não houver reincidência específica); circunstâncias judiciais favoráveis.',
        'Como substituir (art. 44, §2º): pena de até 1 ano, por multa ou uma restritiva; superior a 1 ano, por uma restritiva e multa ou por duas restritivas.',
        'Restritivas de direitos (art. 43): prestação pecuniária, perda de bens e valores, prestação de serviços à comunidade (só para penas superiores a 6 meses), interdição temporária de direitos e limitação de fim de semana. O descumprimento injustificado converte em privativa de liberdade.',
        'Sursis (art. 77): suspensão da pena de até 2 anos, por período de prova de 2 a 4 anos, para não reincidente em crime doloso, com circunstâncias favoráveis, quando não couber a substituição. Sursis etário ou humanitário: pena de até 4 anos, para maior de 70 anos ou por razões de saúde, com período de prova de 4 a 6 anos.',
        'Livramento condicional (art. 83): pena igual ou superior a 2 anos; cumprimento de mais de 1/3 (não reincidente em crime doloso e com bons antecedentes), mais da metade (reincidente em crime doloso) ou mais de 2/3 (crimes hediondos e equiparados, se não reincidente específico); bom comportamento, ausência de falta grave nos últimos 12 meses e reparação do dano, salvo impossibilidade.',
        'Violência doméstica: é vedada a substituição por restritiva de direitos em crime ou contravenção praticados contra a mulher com violência ou grave ameaça no ambiente doméstico (Súmula 588 do STJ).'
      ],
      cai: ['Requisitos do art. 44', 'Sursis comum x etário', 'Frações do livramento condicional'],
      macetes: ['Substituição: até 4 anos e sem violência (ou culposo).', 'Sursis: até 2 anos (etário/humanitário: até 4).', 'Livramento: 1/3, 1/2, 2/3.'],
      video: 'penas restritivas de direitos art 44 sursis livramento condicional OAB penal' },

    { id: 'medidaseguranca', titulo: 'Medidas de segurança e efeitos da condenação', incidencia: 'media',
      aula: [
        'Medida de segurança: aplicada ao inimputável (absolvição imprópria) e, em substituição à pena, ao semi-imputável que precise de tratamento (sistema vicariante: pena ou medida, nunca as duas).',
        'Espécies (art. 96): internação em hospital de custódia e tratamento ambulatorial. Pela lei, crime punido com reclusão leva à internação; com detenção, pode haver tratamento ambulatorial. O STJ admite tratamento ambulatorial mesmo em crime punido com reclusão, conforme a periculosidade.',
        'Prazo: mínimo de 1 a 3 anos, com perícia médica ao fim desse prazo e depois anualmente. O máximo não pode ultrapassar o limite máximo da pena abstratamente cominada ao crime (Súmula 527 do STJ).',
        'Efeitos genéricos e automáticos da condenação (art. 91): tornar certa a obrigação de indenizar o dano e a perda, em favor da União, dos instrumentos e do produto do crime.',
        'Efeitos específicos, que precisam ser motivados na sentença (art. 92): perda do cargo ou mandato (pena de 1 ano ou mais em crime com abuso de poder ou violação de dever com a Administração; ou superior a 4 anos nos demais casos); incapacidade para o poder familiar, tutela ou curatela em crimes dolosos com reclusão contra filho, tutelado ou curatelado, ou contra o outro titular do poder familiar; e inabilitação para dirigir quando o veículo foi usado como meio para crime doloso.',
        'Reabilitação (art. 93): pode ser requerida 2 anos após a extinção da pena. Assegura o sigilo dos registros da condenação.'
      ],
      cai: ['Súmula 527 do STJ', 'Efeitos automáticos x efeitos que exigem motivação', 'Sistema vicariante'],
      macetes: ['Inimputável: absolvição imprópria + medida. Semi-imputável: pena reduzida OU medida.', 'Perda do cargo: 1 ano (crime funcional) ou mais de 4 anos (demais).'],
      video: 'medida de segurança súmula 527 efeitos da condenação art 91 92 OAB penal' }
  ]);
})();
