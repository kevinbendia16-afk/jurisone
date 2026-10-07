/* Aulas adicionais – lote etica-03: incompatibilidades e impedimentos. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);

  add('etica', [
    { id: 'et-incompat', titulo: 'Incompatibilidades em espécie (art. 28)', incidencia: 'alta',
      aula: [
        'Conceito (art. 27): incompatibilidade é a proibição TOTAL de advogar. Quem está no rol do art. 28 não advoga para ninguém: nem em causa própria, nem de graça, nem "só no consultivo". Se a situação já existe quando a pessoa pede a inscrição, o pedido é indeferido, porque não exercer atividade incompatível é requisito da inscrição (art. 8º, V).',
        'Inciso I, o topo da política: chefe do Poder Executivo (Presidente, Governador, Prefeito), membros da Mesa do Poder Legislativo e seus substitutos legais. O parlamentar que não integra a Mesa NÃO está aqui: ele sofre só o impedimento do art. 30, II.',
        'Inciso II, quem julga: membros do Poder Judiciário, do Ministério Público, dos Tribunais e Conselhos de Contas, dos juizados especiais e da justiça de paz, além de todos os que exercem função de julgamento em órgãos de deliberação coletiva da Administração direta e indireta (colegiados que julgam recursos administrativos). Exceção: o advogado que integra esses órgãos como representante dos advogados não é incompatível, mas fica impedido de advogar perante o próprio órgão enquanto durar a investidura (art. 8º do Regulamento Geral).',
        'Inciso III, quem dirige: ocupantes de cargos ou funções de direção em órgãos da Administração direta ou indireta, em suas fundações e em suas empresas controladas ou concessionárias de serviço público. Exemplos: secretário municipal, presidente de autarquia, diretor-presidente de sociedade de economia mista, diretor de concessionária de serviço público.',
        'Exceções do inciso III (art. 28, §2º): não são incompatíveis os que não detêm poder de decisão relevante sobre interesses de terceiros, a juízo do conselho competente da OAB, nem quem exerce a administração acadêmica diretamente relacionada ao magistério jurídico (diretor da faculdade de Direito, coordenador do curso de Direito de universidade pública).',
        'Inciso IV, Judiciário e cartórios: ocupantes de cargos ou funções vinculados direta ou indiretamente a qualquer órgão do Poder Judiciário (técnico, analista, oficial de justiça, assessor de juiz), mesmo que trabalhem na área administrativa, e os que exercem serviços notariais e de registro (tabeliães e registradores; o art. 25 da Lei 8.935/94 repete a regra).',
        'Incisos V e VI, força e armas: ocupantes de cargos ou funções vinculados direta ou indiretamente à atividade policial de qualquer natureza (delegado, agente, escrivão, policial militar, policial rodoviário federal) e militares de qualquer natureza na ativa. Militar da reserva ou reformado não é incompatível. Desde a Lei 14.365/22, policiais e militares podem advogar em causa própria, com inscrição especial (art. 28, §§3º e 4º), tema da aula de casos frequentes.',
        'Incisos VII e VIII, dinheiro: quem tem competência de lançamento, arrecadação ou fiscalização de tributos e contribuições parafiscais (auditor fiscal, fiscal de rendas) e quem ocupa função de direção ou gerência em instituição financeira, "inclusive privadas". O que gera a incompatibilidade é a competência tributária ou o posto de comando: o gerente de agência de banco privado é incompatível; o caixa do mesmo banco advoga normalmente.',
        'Afastamento temporário não resolve (art. 28, §1º): a incompatibilidade permanece mesmo que o ocupante deixe de exercer o cargo temporariamente (férias, licença, licença sem remuneração). Ela só termina quando o vínculo termina: exoneração, aposentadoria, fim do mandato ou passagem para a reserva.',
        'Efeitos na inscrição: atividade incompatível em caráter definitivo (posse como juiz, promotor ou delegado) gera cancelamento, promovido de ofício ou por comunicação de qualquer pessoa (art. 11, IV e §1º); em caráter temporário (mandato de prefeito, cargo na Mesa da Câmara), gera licença (art. 12, II). Na sociedade de advogados, a incompatibilidade temporária não exclui o sócio: é averbada no registro e fica proibida a exploração do nome e da imagem dele em favor da sociedade (art. 16, §2º).',
        'Fora do rol, não há incompatibilidade: contador, corretor, administrador ou empresário podem advogar, só não podem divulgar a advocacia junto com a outra atividade (art. 1º, §3º). E não confunda com o art. 29: procuradores-gerais, advogados-gerais, defensores-gerais e dirigentes de órgãos jurídicos da Administração não são incompatíveis, mas só podem exercer a advocacia vinculada à função durante a investidura.',
        'Como a FGV cobra: o enunciado dá o cargo do personagem e pergunta se ele pode advogar "ao menos em causa própria" ou "durante a licença". Se o cargo está no art. 28, a resposta é não (ressalvada a causa própria de policiais e militares, com inscrição especial). As pegadinhas preferidas: "inclusive privadas" (banco), licença que não libera (§1º) e parlamentar comum, que não é incompatível.'
      ],
      cai: [
        'Caso concreto com o cargo do personagem (gerente de banco privado, tabelião, oficial de justiça, auditor fiscal, diretor de estatal) perguntando se ele pode advogar ao menos em causa própria.',
        'Servidor em cargo incompatível que está de férias ou de licença pode advogar? Não (art. 28, §1º).',
        'Exceções do art. 28, §2º: quem não tem poder de decisão relevante e a direção acadêmica do curso de Direito.',
        'Consequência na inscrição (cancelamento se definitiva, licença se temporária) e na sociedade de advogados (art. 16, §2º).'
      ],
      macetes: [
        'Os 8 incisos em 4 verbos: quem MANDA (I e III: chefe do Executivo, Mesa, diretores), quem JULGA (II e IV: juiz, MP, Contas, órgãos julgadores, servidores do Judiciário e cartórios), quem PRENDE (V e VI: polícia e militares da ativa) e quem COBRA (VII e VIII: fisco e comando de banco).',
        'Banco: "inclusive privado". Gerente e diretor = incompatíveis; caixa e escriturário = livres.',
        'Licença não descompatibiliza (§1º): enquanto existir o vínculo, existe a incompatibilidade.',
        'Definitivo cancela, temporário licencia: juiz, promotor e delegado → cancelamento; prefeito e membro da Mesa → licença.'
      ],
      video: 'OAB ética incompatibilidades art 28 estatuto da advocacia rol completo' },

    { id: 'et-impedimentos', titulo: 'Impedimentos em espécie (art. 30) e docentes de Direito', incidencia: 'alta',
      aula: [
        'Conceito (art. 27): impedimento é a proibição PARCIAL. O impedido é advogado com inscrição normal e atua em tudo, menos no campo que a lei veda. Não há licença nem cancelamento: a restrição convive com a inscrição ativa.',
        'Servidores (art. 30, I): os servidores da administração direta, indireta e fundacional são impedidos de advogar CONTRA a Fazenda Pública que os remunere ou à qual seja vinculada a entidade empregadora. Duas perguntas resolvem a questão: quem paga o servidor? E a que ente a entidade dele se vincula?',
        'Exemplo: Ana é analista do INSS, autarquia federal. Não pode advogar contra o INSS nem contra a União, à qual o INSS se vincula. Pode advogar contra o Estado e o Município, contra empresas privadas e em causas de família ou de consumo. O impedimento é só "contra" e só contra a sua Fazenda.',
        'Administração indireta: a regra alcança também servidores de fundações públicas e empregados de empresas públicas e sociedades de economia mista. O impedimento atinge a Fazenda Pública à qual a entidade empregadora se vincula: o empregado de uma estatal federal não advoga contra a União.',
        'Parlamentares (art. 30, II): os membros do Poder Legislativo, em todos os níveis (vereador, deputado estadual, distrital ou federal, senador), não podem advogar CONTRA nem A FAVOR de pessoas jurídicas de direito público, empresas públicas, sociedades de economia mista, fundações públicas, entidades paraestatais e concessionárias ou permissionárias de serviço público. Vale para qualquer esfera: o vereador de uma cidade pequena também não pode processar a União nem defender a concessionária de telefonia.',
        'Comparação que a FGV explora: o servidor é proibido só de advogar contra, e só contra a sua Fazenda; o parlamentar é proibido contra e a favor, diante de toda a lista de entes e entidades, de qualquer esfera. E se o parlamentar integra a Mesa, sai do art. 30 e cai no art. 28, I (incompatibilidade).',
        'Docentes de Direito (art. 30, parágrafo único): os docentes dos cursos jurídicos não se incluem no inciso I. O professor de Direito da universidade federal pode advogar inclusive contra a União, que paga seu salário. A exceção é estreita: vale só para o inciso I (o professor de Direito eleito vereador sofre o inciso II normalmente) e só para quem leciona em curso jurídico (o professor de Medicina da mesma universidade continua impedido contra a União).',
        'Direção acadêmica: o professor de Direito que dirige a faculdade ou coordena o curso jurídico também não fica incompatível, porque a administração acadêmica diretamente relacionada ao magistério jurídico está fora do art. 28, III (art. 28, §2º).',
        'Impedimentos fora do art. 30: conciliadores e mediadores judiciais que sejam advogados ficam impedidos de advogar nos juízos em que atuam (art. 167, §5º, do CPC) e, por 1 ano após a última audiência, de assessorar, representar ou patrocinar qualquer das partes (art. 172 do CPC); juízes leigos não advogam perante os Juizados Especiais enquanto exercem a função (art. 7º, parágrafo único, da Lei 9.099/95); e o advogado que integra órgão julgador colegiado como representante dos advogados não advoga perante esse órgão durante a investidura (art. 8º, §1º, do Regulamento Geral).',
        'Consequências: são nulos os atos praticados pelo advogado impedido no âmbito do impedimento (art. 4º, parágrafo único); os atos fora dele são válidos. Além disso, exercer a profissão quando impedido é infração disciplinar (art. 34, I), punida com censura (art. 36, I).',
        'Como a FGV cobra: o enunciado mostra um servidor ou um parlamentar e várias causas, e você indica quais ele pode aceitar. Pergunte sempre: quem está do outro lado (ou quem está sendo defendido)? É a Fazenda que paga o servidor? É ente público, estatal ou concessionária (no caso do parlamentar)? E o personagem é professor de Direito?'
      ],
      cai: [
        'Servidor de autarquia ou estatal advogando contra o ente ao qual a entidade se vincula (ex.: servidor de universidade federal contra a União).',
        'Parlamentar sem cargo na Mesa: impedido contra ou a favor de entes públicos, estatais e concessionárias de qualquer esfera; livre nas causas entre particulares.',
        'Professor de Direito (livre, pelo parágrafo único do art. 30) x professor de outro curso da mesma universidade (impedido).',
        'Consequências: nulidade só no âmbito do impedimento (art. 4º, parágrafo único) e censura (arts. 34, I, e 36, I).',
        'Conciliador e mediador judicial advogado: impedido nos juízos em que atua (art. 167, §5º, do CPC).'
      ],
      macetes: [
        'Servidor não morde a mão que o alimenta: só não advoga CONTRA quem paga (ou contra o ente a que sua entidade se liga).',
        'Parlamentar: "nem contra, nem a favor, do governo de ninguém", estatais e concessionárias incluídas.',
        'O parágrafo único salva só o professor de DIREITO e só do inciso I.',
        'Impedido continua advogado: dentro do impedimento = ato nulo + censura; fora dele = tudo válido.'
      ],
      video: 'OAB ética impedimentos art 30 servidor público parlamentar professor de direito' },

    { id: 'et-incompat-casos', titulo: 'Casos frequentes na prova: policiais, servidores, parlamentares e magistrados aposentados', incidencia: 'alta',
      aula: [
        'Roteiro de 3 perguntas: (1) o vínculo ainda existe? Aposentadoria, exoneração, fim do mandato e passagem para a reserva encerram a restrição (salvo a quarentena de magistrados e membros do MP). (2) O cargo está no art. 28? Então é incompatibilidade. (3) Está no art. 30 ou em lei especial? Então é impedimento, só naquele campo. Fora disso, advoga livremente.',
        'Policiais (art. 28, V): qualquer cargo ou função vinculado direta ou indiretamente à atividade policial, de qualquer natureza: delegado, agente, escrivão, policial militar, policial rodoviário federal, inclusive quem trabalha no setor administrativo da polícia. Para terceiros, nada: nem mediante pagamento, nem pro bono, nem para parente.',
        'Causa própria de policiais e militares (art. 28, §§3º e 4º, incluídos pela Lei 14.365/22): as incompatibilidades dos incisos V e VI não se aplicam à advocacia em causa própria, estritamente para defesa e tutela de direitos pessoais, mediante inscrição especial na OAB, vedada a participação em sociedade de advogados. A inscrição especial consta do documento profissional e não isenta de anuidade, multas e preços de serviços, vedada cobrança maior que a dos demais inscritos.',
        'Exemplo: o sargento PM Diego, aprovado no Exame, pode, com inscrição especial, processar a seguradora que negou a indenização do carro dele. Não pode patrocinar o divórcio do irmão, atuar de graça para uma ONG nem ser sócio de escritório. E a exceção é só para policiais e militares: juiz, promotor, prefeito ou auditor fiscal continuam proibidos até em causa própria.',
        'Militares (art. 28, VI): só os da ativa, de qualquer natureza (Forças Armadas, polícia militar, bombeiro militar). Militar da reserva ou reformado advoga normalmente.',
        'Servidores públicos: a regra é o impedimento contra a Fazenda que os remunera (art. 30, I). Mas alguns cargos caem no art. 28 e viram incompatibilidade: servidor do Judiciário e oficial de justiça (IV), auditor ou fiscal de tributos (VII), ocupante de cargo de direção com poder de decisão relevante (III). E a licença, inclusive sem remuneração, não libera o incompatível (art. 28, §1º).',
        'Exemplos rápidos: técnico administrativo da Prefeitura = impedido só contra o Município; analista do Tribunal de Justiça = incompatível; fiscal de rendas do Estado = incompatível; professor de Direito da universidade estadual = livre (art. 30, parágrafo único); Procurador-Geral do Estado = só advoga na função, durante a investidura (art. 29).',
        'Parlamentares: vereador, deputado e senador sem cargo na Mesa são impedidos (art. 30, II): nem contra nem a favor de entes públicos, estatais, fundações públicas, paraestatais e concessionárias ou permissionárias, de qualquer esfera; nas causas entre particulares, advogam normalmente. A Constituição segue a mesma linha para deputados e senadores, que desde a posse não podem patrocinar causa em que essas entidades sejam interessadas (art. 54, II, c, da CF).',
        'Mesa e Executivo: membros da Mesa do Legislativo (o presidente da Câmara, por exemplo), seus substitutos legais e os chefes do Executivo são incompatíveis (art. 28, I). Como o mandato é temporário, a consequência é a licença (art. 12, II), não o cancelamento; terminado o mandato, voltam a advogar com a mesma inscrição.',
        'Magistrados e membros do MP aposentados: com a aposentadoria ou a exoneração deixam o cargo, a incompatibilidade do art. 28, II, acaba e eles podem se inscrever na OAB. Resta a quarentena constitucional: é vedado advogar no juízo ou tribunal do qual se afastaram antes de decorridos 3 anos do afastamento (art. 95, parágrafo único, V, da CF; para o MP, art. 128, §6º).',
        'Exemplo: a desembargadora Lúcia se aposentou no TJ do Estado Alfa em março de 2025. Inscrita na OAB, já pode atuar no STJ ou no TJ de outro Estado; no TJ Alfa, só a partir de março de 2028. Detalhe ético: no cartão e na publicidade, o ex-juiz, o ex-promotor ou o ex-delegado não pode mencionar o cargo que ocupou; a única função que pode aparecer é a de professor universitário (art. 44, §2º, do CED).',
        'Como a FGV cobra: casos curtos com um personagem por cargo e alternativas que trocam incompatibilidade por impedimento. Os erros que a banca espera: achar que a licença libera, que o vereador comum é incompatível, que o policial pode advogar para parente ou de graça e que o juiz aposentado fica proibido em todo o Judiciário por 3 anos.'
      ],
      cai: [
        'Policial ou militar da ativa querendo advogar para terceiros, pro bono ou em causa própria: só a causa própria, com inscrição especial e sem sociedade (art. 28, §§3º e 4º).',
        'Servidor do Judiciário, oficial de justiça ou fiscal de tributos de licença: continua incompatível (art. 28, §1º).',
        'Vereador ou deputado comum (impedimento, art. 30, II) x membro da Mesa (incompatibilidade, art. 28, I, com licença).',
        'Magistrado ou promotor aposentado: pode advogar, menos no juízo ou tribunal de onde saiu, nos 3 anos seguintes (art. 95, parágrafo único, V, e art. 128, §6º, da CF).'
      ],
      macetes: [
        'Policial e militar da ativa: "causa própria, carteira especial, sem cliente e sem sociedade".',
        'Quarentena = 3 anos, só na "casa" de onde saiu (o juízo ou o tribunal), não no Judiciário inteiro.',
        'Reserva, aposentadoria e exoneração libertam; férias e licença não.',
        'Legislativo: sentou na Mesa, licencia; ficou no plenário, só não mexe com governo, estatal nem concessionária.'
      ],
      video: 'OAB incompatibilidade policial militar causa própria Lei 14.365 magistrado aposentado quarentena vereador' }
  ]);
})();
