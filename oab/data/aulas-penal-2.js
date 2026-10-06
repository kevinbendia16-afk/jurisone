/* Direito Penal – parte 2: crimes em espécie e legislação penal especial. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('penal', [
    { id: 'crimespessoa', titulo: 'Crimes contra a pessoa: vida, lesão corporal, honra e liberdade', incidencia: 'alta',
      aula: [
        'Homicídio (art. 121): simples, 6 a 20 anos. Privilegiado (§1º): relevante valor social ou moral, ou domínio de violenta emoção logo após injusta provocação da vítima, com redução de 1/6 a 1/3. Qualificado (§2º), 12 a 30 anos: motivo torpe ou fútil, meio cruel, recurso que dificulte a defesa, para assegurar outro crime, contra agente de segurança pública, com arma de uso restrito ou proibido, contra menor de 14 anos, entre outros.',
        'Feminicídio (art. 121-A, Lei 14.994/24): passou a ser crime autônomo, com pena de 20 a 40 anos, quando a mulher é morta por razões da condição do sexo feminino (violência doméstica ou menosprezo e discriminação à condição de mulher). É hediondo.',
        'Homicídio privilegiado-qualificado: é possível quando a qualificadora é objetiva (meio ou modo de execução), pois o privilégio é subjetivo. Esse homicídio não é hediondo.',
        'Homicídio culposo (art. 121, §3º): 1 a 3 anos. O juiz pode deixar de aplicar a pena (perdão judicial, §5º) quando as consequências atingem o próprio agente de forma tão grave que a sanção se torna desnecessária, como na morte de um filho.',
        'Outros crimes contra a vida: induzimento, instigação ou auxílio a suicídio ou automutilação (art. 122), infanticídio (art. 123: a mãe, sob influência do estado puerperal, durante ou logo após o parto) e aborto (arts. 124 a 128). O aborto não é punido quando necessário para salvar a vida da gestante ou quando a gravidez resulta de estupro (art. 128); o STF também afastou o crime na anencefalia (ADPF 54).',
        'Lesão corporal (art. 129): leve; grave (§1º: incapacidade para as ocupações habituais por mais de 30 dias, perigo de vida, debilidade permanente, aceleração de parto); gravíssima (§2º: incapacidade permanente para o trabalho, enfermidade incurável, perda ou inutilização de membro, sentido ou função, deformidade permanente, aborto); e seguida de morte (§3º). Lesão leve e culposa dependem de representação (art. 88 da Lei 9.099/95), salvo em violência doméstica contra a mulher, em que a ação é pública incondicionada (Súmula 542 do STJ).',
        'Crimes contra a honra: calúnia (imputar falsamente fato definido como crime), difamação (imputar fato ofensivo à reputação) e injúria (ofender a dignidade ou o decoro, sem imputar fato). A exceção da verdade cabe na calúnia e, na difamação, só quando o ofendido é funcionário público e a ofensa se refere às suas funções. A injúria racial hoje está na Lei 7.716/89 (art. 2º-A) e equipara-se ao racismo.',
        'Ação penal nos crimes contra a honra: em regra privada (art. 145). Contra funcionário público em razão das funções, a legitimidade é concorrente: queixa do ofendido ou ação pública condicionada à representação (Súmula 714 do STF). A retratação cabal antes da sentença isenta de pena na calúnia e na difamação (art. 143).',
        'Crimes contra a liberdade: constrangimento ilegal (art. 146), ameaça (art. 147), perseguição ou stalking (art. 147-A), violência psicológica contra a mulher (art. 147-B), sequestro e cárcere privado (art. 148), redução à condição análoga à de escravo (art. 149) e violação de domicílio (art. 150).'
      ],
      cai: ['Qualificadoras objetivas x subjetivas e o privilegiado-qualificado', 'Feminicídio como crime autônomo (art. 121-A)', 'Lesão grave x gravíssima', 'Calúnia, difamação e injúria: diferença e exceção da verdade'],
      macetes: ['Honra: Calúnia = Crime falso; Difamação = fato Desonroso; Injúria = Insulto.', 'Lesão grave: mais de 30 dias, perigo de vida, debilidade, aceleração de parto. Gravíssima: "permanente/incurável/perda/deformidade/aborto".'],
      video: 'crimes contra a pessoa homicídio qualificado feminicídio art 121-A lesão corporal honra OAB' },

    { id: 'crimespatrimonio', titulo: 'Crimes contra o patrimônio', incidencia: 'alta',
      aula: [
        'Furto (art. 155): subtrair coisa alheia móvel, 1 a 4 anos. Aumenta de 1/3 se praticado durante o repouso noturno (§1º). Furto privilegiado (§2º): réu primário e coisa de pequeno valor (até 1 salário mínimo, para a jurisprudência), permitindo trocar reclusão por detenção, reduzir de 1/3 a 2/3 ou aplicar só multa.',
        'Furto qualificado (§4º): 2 a 8 anos, com destruição ou rompimento de obstáculo, abuso de confiança, fraude, escalada ou destreza, chave falsa ou concurso de duas ou mais pessoas. Com explosivo (§4º-A): 4 a 10 anos. Fraude eletrônica (§4º-B): 4 a 8 anos. O privilégio é compatível com qualificadora de ordem objetiva (Súmula 511 do STJ).',
        'Roubo (art. 157): subtração mediante violência ou grave ameaça, 4 a 10 anos. Roubo impróprio (§1º): a violência vem depois da subtração, para assegurar a coisa ou a impunidade. Aumentos: 1/3 até a metade (concurso de pessoas, transporte de valores, restrição da liberdade da vítima, arma branca etc.); 2/3 com arma de fogo (§2º-A); o dobro com arma de fogo de uso restrito ou proibido (§2º-B).',
        'Latrocínio (art. 157, §3º, II): roubo com resultado morte, 20 a 30 anos, hediondo. Há latrocínio consumado quando o homicídio se consuma, ainda que o agente não consiga subtrair os bens (Súmula 610 do STF). A competência é do juiz singular, não do júri (Súmula 603 do STF).',
        'Extorsão (art. 158): constranger alguém, com violência ou grave ameaça, a fazer, tolerar ou deixar de fazer algo para obter vantagem econômica. É crime formal: consuma-se mesmo sem a vantagem (Súmula 96 do STJ). Sequestro relâmpago (§3º) e extorsão mediante sequestro (art. 159, hediondo).',
        'Apropriação indébita (art. 168): o agente tem a posse ou detenção lícita da coisa e depois inverte esse título, passando a agir como dono. A diferença para o furto é que a posse inicial foi legítima.',
        'Estelionato (art. 171): obter vantagem ilícita, em prejuízo alheio, induzindo ou mantendo alguém em erro, 1 a 5 anos. Fraude eletrônica (§2º-A): 4 a 8 anos. Desde o Pacote Anticrime, a ação depende de representação, salvo se a vítima for a Administração Pública, criança ou adolescente, pessoa com deficiência mental, maior de 70 anos ou incapaz (§5º).',
        'Receptação (art. 180): adquirir, receber, transportar ou ocultar coisa que sabe ser produto de crime. A receptação qualificada (§1º) é praticada no exercício de atividade comercial ou industrial; há também receptação culposa (§3º).',
        'Imunidades (arts. 181 a 183): é isento de pena quem comete crime patrimonial contra cônjuge na constância da sociedade conjugal, ascendente ou descendente; a ação passa a depender de representação contra cônjuge separado, irmão, tio ou sobrinho com quem o agente coabita. Não valem em roubo, extorsão ou crimes com violência ou grave ameaça, para o terceiro que participa, nem se a vítima tem 60 anos ou mais.'
      ],
      cai: ['Furto privilegiado-qualificado (Súmula 511)', 'Frações do roubo (1/3 a metade, 2/3, dobro)', 'Súmulas 610 e 603 do STF', 'Estelionato: ação condicionada e exceções'],
      macetes: ['Roubo: faca/concurso = 1/3 a 1/2; arma de fogo = 2/3; arma restrita/proibida = dobro.', 'Extorsão é formal: não precisa receber o dinheiro.', 'Apropriação: "peguei emprestado e fiquei". Furto: "peguei escondido".'],
      video: 'crimes contra o patrimônio furto roubo latrocínio estelionato receptação OAB penal' },

    { id: 'crimessexuais', titulo: 'Crimes contra a dignidade sexual', incidencia: 'media',
      aula: [
        'Estupro (art. 213): constranger alguém, mediante violência ou grave ameaça, a ter conjunção carnal ou a praticar ou permitir outro ato libidinoso, 6 a 10 anos. Qualificado se resulta lesão grave ou a vítima tem entre 14 e 18 anos (8 a 12 anos) ou se resulta morte (12 a 30 anos). É hediondo.',
        'Estupro de vulnerável (art. 217-A): conjunção carnal ou ato libidinoso com menor de 14 anos, ou com quem, por enfermidade ou deficiência mental, não tem discernimento, ou não pode oferecer resistência, 8 a 15 anos. O consentimento da vítima, sua experiência sexual anterior ou um relacionamento amoroso com o agente são irrelevantes (Súmula 593 do STJ e art. 217-A, §5º). É hediondo.',
        'Importunação sexual (art. 215-A): praticar ato libidinoso contra alguém sem a sua anuência, para satisfazer a própria lascívia ou a de terceiro, 1 a 5 anos, se o ato não constitui crime mais grave. Atinge, por exemplo, o assédio em transporte público.',
        'Outros tipos: violação sexual mediante fraude (art. 215), assédio sexual (art. 216-A: exige relação de superioridade hierárquica ou ascendência no emprego), registro não autorizado da intimidade sexual (art. 216-B) e divulgação de cena de estupro, sexo ou nudez sem consentimento (art. 218-C).',
        'Ação penal: pública incondicionada em todos os crimes contra a dignidade sexual (art. 225, com a redação da Lei 13.718/18). Os processos correm em segredo de justiça (art. 234-B).',
        'Aumentos (art. 226): estupro coletivo (dois ou mais agentes) e estupro corretivo (para controlar o comportamento social ou sexual da vítima) aumentam a pena de 1/3 a 2/3. Há aumento também se o agente é ascendente, padrasto, tutor ou tem autoridade sobre a vítima.'
      ],
      cai: ['Irrelevância do consentimento no estupro de vulnerável', 'Ação pública incondicionada', 'Importunação sexual x estupro'],
      macetes: ['Vulnerável = menor de 14: consentimento não vale nada (Súmula 593).', 'Crimes sexuais: ação sempre pública incondicionada.'],
      video: 'crimes contra a dignidade sexual estupro de vulnerável importunação sexual OAB penal' },

    { id: 'crimesadm', titulo: 'Crimes contra a Administração Pública', incidencia: 'alta',
      aula: [
        'Funcionário público para fins penais (art. 327): quem exerce cargo, emprego ou função pública, ainda que transitoriamente ou sem remuneração. Equipara-se quem trabalha em entidade paraestatal ou em empresa contratada ou conveniada para executar atividade típica da Administração.',
        'Peculato (art. 312): o funcionário se apropria ou desvia dinheiro, valor ou bem de que tem a posse em razão do cargo (peculato-apropriação e peculato-desvio), ou o subtrai valendo-se da facilidade do cargo (peculato-furto, §1º), 2 a 12 anos.',
        'Peculato culposo (§§2º e 3º): o funcionário concorre culposamente para o crime de outrem. A reparação do dano antes da sentença irrecorrível extingue a punibilidade; depois dela, reduz pela metade a pena imposta.',
        'Concussão x corrupção passiva: na concussão (art. 316) o funcionário EXIGE vantagem indevida; na corrupção passiva (art. 317) ele SOLICITA, RECEBE ou ACEITA promessa. Ambas, 2 a 12 anos. Do lado do particular, a corrupção ativa (art. 333) é OFERECER ou PROMETER vantagem.',
        'Prevaricação e afins: prevaricação (art. 319) é retardar ou deixar de praticar ato de ofício para satisfazer interesse ou sentimento pessoal. Há ainda condescendência criminosa (art. 320) e advocacia administrativa (art. 321).',
        'Crimes de particulares: resistência (art. 329, opor-se com violência ou ameaça a ato legal), desobediência (art. 330), desacato (art. 331, que o STF considera compatível com a Constituição e a Convenção Americana) e tráfico de influência (art. 332).',
        'Descaminho x contrabando: descaminho (art. 334) é iludir o pagamento de tributo sobre mercadoria permitida; contrabando (art. 334-A) é importar ou exportar mercadoria proibida. Aplica-se a insignificância ao descaminho quando o tributo iludido não supera R$ 20 mil.',
        'Crimes contra a administração da justiça: denunciação caluniosa (art. 339), comunicação falsa de crime (art. 340), falso testemunho (art. 342: a retratação antes da sentença no processo em que ocorreu o falso extingue a punibilidade), coação no curso do processo (art. 344), exercício arbitrário das próprias razões (art. 345) e favorecimento pessoal (art. 348: isento de pena o ascendente, descendente, cônjuge ou irmão do criminoso).'
      ],
      cai: ['Exigir x solicitar (concussão x corrupção passiva)', 'Peculato culposo e reparação do dano', 'Conceito amplo de funcionário público', 'Descaminho x contrabando e a insignificância'],
      macetes: ['EXIGE = Concussão. SOLICITA/RECEBE/ACEITA = corrupção passiva. OFERECE/PROMETE = corrupção ativa.', 'Peculato culposo: reparou antes da sentença irrecorrível = extingue; depois = metade.'],
      video: 'crimes contra a administração pública peculato concussão corrupção passiva ativa OAB penal' },

    { id: 'crimesfe', titulo: 'Crimes contra a fé pública e a paz pública', incidencia: 'media',
      aula: [
        'Moeda falsa (art. 289): falsificar moeda de curso legal, 3 a 12 anos, de competência da Justiça Federal. A falsificação grosseira, incapaz de enganar, pode configurar estelionato, de competência estadual (Súmula 73 do STJ).',
        'Falsidade material x ideológica: na falsidade material (arts. 297 e 298) o documento é forjado ou alterado na sua forma; na ideológica (art. 299) o documento é formalmente verdadeiro, mas o conteúdo declarado é falso. O cartão de crédito ou débito equipara-se a documento particular (art. 298, parágrafo único).',
        'Uso de documento falso (art. 304): quem usa responde com a pena da falsificação. Se o próprio falsificador usa o documento, responde só por um crime.',
        'Falso absorvido pelo estelionato: quando o falso se exaure no estelionato, sem mais potencialidade lesiva, é por este absorvido (Súmula 17 do STJ).',
        'Falsa identidade (art. 307): atribuir-se falsa identidade para obter vantagem ou causar dano. É crime mesmo quando usado perante a autoridade policial em situação de alegada autodefesa (Súmula 522 do STJ).',
        'Associação criminosa (art. 288): associarem-se 3 ou mais pessoas para o fim específico de cometer crimes, 1 a 3 anos, aumentada até a metade se armada ou com participação de criança ou adolescente. Não confundir com a organização criminosa (Lei 12.850/13: 4 ou mais pessoas, estrutura ordenada e divisão de tarefas) nem com a associação para o tráfico (Lei 11.343/06, art. 35: 2 ou mais pessoas).',
        'Outros crimes contra a paz pública: incitação ao crime (art. 286), apologia de crime ou criminoso (art. 287) e constituição de milícia privada (art. 288-A).'
      ],
      cai: ['Falsidade material x ideológica', 'Súmulas 17, 73 e 522 do STJ', 'Associação criminosa x organização criminosa x associação para o tráfico'],
      macetes: ['Associações: tráfico = 2+; associação criminosa = 3+; organização criminosa = 4+.', 'Ideológica: papel verdadeiro, mentira dentro.'],
      video: 'falsidade documental material ideológica uso de documento falso associação criminosa OAB penal' },

    { id: 'drogas', titulo: 'Lei de Drogas (Lei 11.343/06)', incidencia: 'alta',
      aula: [
        'Porte para consumo pessoal (art. 28): não há pena de prisão. As sanções são advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa. Para distinguir usuário de traficante, o juiz considera natureza e quantidade da droga, local, circunstâncias, conduta e antecedentes.',
        'Maconha para consumo (STF, Tema 506, 2024): o STF decidiu que o porte de maconha para uso pessoal não é crime, mas ilícito administrativo, e presumiu como usuário quem porta até 40 gramas ou 6 plantas fêmeas, presunção que pode ser afastada por outros elementos que indiquem tráfico.',
        'Tráfico (art. 33): importar, vender, ter em depósito, transportar, trazer consigo, entre outros 18 verbos, 5 a 15 anos. É equiparado a hediondo. Oferecer droga eventualmente e sem lucro a pessoa de seu relacionamento, para consumirem juntos, é crime menos grave (§3º).',
        'Tráfico privilegiado (art. 33, §4º): redução de 1/6 a 2/3 para o agente primário, de bons antecedentes, que não se dedica a atividades criminosas nem integra organização criminosa. O tráfico privilegiado não é hediondo (art. 112, §5º, da LEP).',
        'Associação para o tráfico (art. 35): 2 ou mais pessoas associadas, de forma estável e permanente, para traficar. Não é hediondo.',
        'Causas de aumento (art. 40): transnacionalidade, tráfico interestadual (que não exige a efetiva transposição da divisa, Súmula 587 do STJ), nas imediações de escolas, hospitais e presídios, com violência ou arma, ou envolvendo criança ou adolescente.',
        'Competência: Justiça Estadual, em regra; Justiça Federal se o tráfico for transnacional (art. 70). O STF declarou inconstitucionais a vedação abstrata da liberdade provisória e da substituição da pena por restritiva de direitos no tráfico.'
      ],
      cai: ['Usuário x traficante e o Tema 506 do STF', 'Requisitos do tráfico privilegiado e sua natureza não hedionda', 'Associação para o tráfico'],
      macetes: ['Privilegiado: "PBNN" – Primário, Bons antecedentes, Não se dedica ao crime, Não integra organização.', 'Art. 28: sem prisão.'],
      video: 'lei de drogas art 28 art 33 tráfico privilegiado tema 506 STF OAB penal' },

    { id: 'hediondos', titulo: 'Crimes hediondos, Maria da Penha e Estatuto do Desarmamento', incidencia: 'alta',
      aula: [
        'Crimes hediondos (Lei 8.072/90): o rol é taxativo e inclui, entre outros, homicídio qualificado, feminicídio, latrocínio, extorsão qualificada pela morte, extorsão mediante sequestro, estupro, estupro de vulnerável, furto com explosivo, roubo com arma de fogo e posse ou porte de arma de uso proibido. São equiparados a hediondos a tortura, o tráfico de drogas e o terrorismo (art. 5º, XLIII, da CF).',
        'Consequências: são insuscetíveis de anistia, graça, indulto e fiança; a prisão temporária dura até 30 dias, prorrogáveis por mais 30; e a progressão exige percentuais maiores (40% para o primário; 60% para o reincidente em hediondo; 50% e 70% quando há resultado morte). O regime inicial fechado obrigatório foi declarado inconstitucional pelo STF.',
        'Lei Maria da Penha (Lei 11.340/06): protege a mulher contra violência doméstica e familiar (física, psicológica, sexual, patrimonial e moral), inclusive em relações homoafetivas e independentemente de coabitação.',
        'Regras da Maria da Penha: não se aplica a Lei 9.099/95 (nada de transação penal ou suspensão condicional do processo, art. 41); não cabe a insignificância (Súmula 589 do STJ); é vedada a substituição da pena por restritiva de direitos quando há violência ou grave ameaça (Súmula 588 do STJ); a lesão corporal é de ação pública incondicionada (Súmula 542 do STJ); e descumprir medida protetiva de urgência é crime (art. 24-A).',
        'Estatuto do Desarmamento (Lei 10.826/03): posse irregular de arma de uso permitido (art. 12: dentro de casa ou no local de trabalho, se titular ou responsável), detenção de 1 a 3 anos; porte ilegal de arma de uso permitido (art. 14: fora desses locais), reclusão de 2 a 4 anos; posse ou porte de arma de uso restrito (art. 16), 3 a 6 anos; de uso proibido (art. 16, §2º), 4 a 12 anos e hediondo.',
        'Arma desmuniciada: o porte de arma desmuniciada é crime, porque os delitos do Estatuto são de perigo abstrato.'
      ],
      cai: ['Rol de hediondos e equiparados (TTT)', 'Súmulas 542, 588 e 589 do STJ', 'Posse x porte e uso permitido x restrito x proibido'],
      macetes: ['Equiparados a hediondos: "TTT" – Tortura, Tráfico, Terrorismo.', 'Maria da Penha: nada de Lei 9.099, insignificância ou cesta básica.', 'Posse = em casa/trabalho. Porte = na rua.'],
      video: 'crimes hediondos lei maria da penha súmulas estatuto do desarmamento posse porte OAB penal' },

    { id: 'especiais2', titulo: 'Abuso de autoridade, organização criminosa, tortura, racismo e crimes de trânsito', incidencia: 'media',
      aula: [
        'Abuso de autoridade (Lei 13.869/19): os crimes exigem finalidade específica de prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal (art. 1º, §1º). A divergência na interpretação da lei ou na avaliação de fatos e provas não configura abuso (art. 1º, §2º).',
        'Organização criminosa (Lei 12.850/13): associação de 4 ou mais pessoas, estruturalmente ordenada e com divisão de tarefas, para obter vantagem mediante infrações com pena máxima superior a 4 anos ou de caráter transnacional. Prevê meios de obtenção de prova como a colaboração premiada, a ação controlada e a infiltração de agentes.',
        'Colaboração premiada: o acordo é negócio jurídico processual entre o colaborador e o MP ou a polícia, homologado pelo juiz. Nenhuma sentença condenatória pode ser proferida apenas com base nas declarações do colaborador.',
        'Tortura (Lei 9.455/97): constranger com violência ou grave ameaça, causando sofrimento físico ou mental, para obter informação ou confissão, provocar ação criminosa ou por discriminação racial ou religiosa, entre outras hipóteses. Quem se omite tendo o dever de evitar ou apurar responde com pena menor. A condenação acarreta automaticamente a perda do cargo.',
        'Racismo (Lei 7.716/89): imprescritível e inafiançável (art. 5º, XLII, da CF). Desde a Lei 14.532/23, a injúria racial também está nessa lei. O STF enquadrou a homotransfobia como racismo (ADO 26).',
        'Crimes de trânsito (CTB): homicídio culposo e lesão corporal culposa na direção de veículo (arts. 302 e 303); embriaguez ao volante (art. 306), crime de perigo abstrato configurado por concentração de álcool igual ou superior a 6 decigramas por litro de sangue ou 0,3 miligrama por litro de ar alveolar, ou por sinais de alteração da capacidade psicomotora; e entregar a direção a pessoa não habilitada (art. 310), também de perigo abstrato (Súmula 575 do STJ).'
      ],
      cai: ['Finalidade específica no abuso de autoridade', 'Conceito de organização criminosa', 'Embriaguez ao volante como crime de perigo abstrato'],
      macetes: ['Orcrim: 4+ pessoas, estrutura, tarefas, pena máxima acima de 4 anos.', 'Racismo e injúria racial: imprescritíveis e inafiançáveis.'],
      video: 'abuso de autoridade lei 13.869 organização criminosa colaboração premiada crimes de trânsito OAB penal' }
  ]);
})();
