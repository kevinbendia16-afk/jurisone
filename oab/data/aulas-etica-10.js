/* Aulas adicionais – lote etica-10 (Ética: honorários advocatícios). */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);

  add('etica', [
    { id: 'et-hon-contratuais', titulo: 'Honorários contratuais: contrato escrito, forma e pagamento', incidencia: 'alta',
      aula: [
        'Conceito: honorários contratuais (ou convencionados) são os que o advogado ajusta diretamente com o cliente. A prestação do serviço assegura ao inscrito na OAB três espécies de honorários: os convencionados, os fixados por arbitramento judicial e os de sucumbência (art. 22 do Estatuto). Os contratuais são pagos pelo CLIENTE; a sucumbência, pela parte VENCIDA. Uma verba não exclui a outra: o advogado pode receber as duas.',
        'Forma (art. 48 do CED): os serviços de advocacia são contratados PREFERENTEMENTE por escrito, e o contrato não exige forma especial (nada de escritura pública ou modelo oficial). "Preferentemente" é a palavra-chave: o ajuste verbal é válido e gera direito aos honorários. Sem o papel, o advogado perde a prova fácil e a força executiva.',
        'Conteúdo mínimo (art. 48, §1º, do CED): o contrato deve estabelecer, com clareza e precisão, o objeto, os honorários ajustados, a forma de pagamento e a extensão do patrocínio, esclarecendo se abrange todos os atos do processo ou só determinado grau de jurisdição, além de dispor sobre a hipótese de a causa terminar por transação ou acordo.',
        'Exemplo do conteúdo: Bruno contrata a advogada Íris "para a ação de despejo". Se o contrato não disser se a apelação está incluída, nasce a briga: Íris entende que o recurso é cobrado à parte, Bruno entende que já pagou tudo. O CED exige que a extensão do patrocínio fique escrita justamente para evitar esse conflito.',
        'Força executiva (art. 24 do Estatuto): o contrato ESCRITO que estipula honorários é título executivo extrajudicial, e o crédito é privilegiado na falência, no concurso de credores, na insolvência civil e na liquidação extrajudicial. O ajuste verbal não é título: sem contrato escrito, o advogado precisa de ação de conhecimento (cobrança ou arbitramento) para provar e receber o crédito.',
        'Pagamento no silêncio do contrato (art. 22, §3º, do Estatuto): salvo estipulação em contrário, um terço dos honorários é devido no INÍCIO do serviço, outro terço até a DECISÃO DE PRIMEIRA INSTÂNCIA e o restante no FINAL. Exemplo: Carla contrata Diogo por R$ 30.000,00 sem fixar parcelas; deve R$ 10.000,00 ao começar, R$ 10.000,00 até a sentença e R$ 10.000,00 ao final. Se o contrato disser outra coisa, vale o contrato.',
        'Pagamento direto no processo (art. 22, §4º): se o advogado juntar o contrato aos autos ANTES da expedição do mandado de levantamento ou do precatório, o juiz determina que os honorários lhe sejam pagos diretamente, deduzidos da quantia que o cliente vai receber, salvo se o cliente provar que já os pagou. É o chamado destaque dos honorários contratuais.',
        'Custas e despesas (art. 48, §3º, do CED): o contrato pode dispor sobre a contratação de profissionais para serviços auxiliares e sobre o pagamento de custas e emolumentos. No silêncio, presume-se que essas despesas cabem ao CLIENTE. Se o contrato previr que o advogado as antecipe, ele pode reter o valor atualizado no ato da prestação de contas, mediante comprovação documental.',
        'Compensação e meios de pagamento: o advogado só pode compensar seus créditos com importâncias devidas ao cliente se o contrato autorizar ou se houver autorização especial assinada pelo cliente (art. 48, §2º, do CED). É lícito receber por cartão de crédito, com credenciamento junto à operadora (art. 53). Duplicata, nunca; fatura, só se o cliente consentir e sem protesto (art. 52). Os detalhes da cobrança estão na aula de aviltamento, cobrança e protesto.',
        'Outros honorários convencionados (art. 22, §§6º e 8º, do Estatuto): também são convencionados os honorários decorrentes da indicação de cliente entre advogados ou sociedades de advogados (§8º, incluído pela Lei 14.365/22). E o regime do art. 22 vale para os honorários assistenciais, fixados em ações coletivas propostas por entidades de classe em substituição processual, sem prejuízo dos honorários convencionais (§6º).',
        'Como a FGV cobra: (a) contrato omisso sobre parcelas: regra dos terços; (b) "o contrato verbal é nulo" ou "não gera honorários": errado, a forma escrita é só preferencial; (c) contrato escrito: título executivo extrajudicial; (d) custas, no silêncio, são do cliente; (e) compensação só com autorização contratual ou especial do cliente.'
      ],
      cai: [
        'Regra dos terços quando o contrato não fixa as parcelas: início, decisão de primeira instância e final (art. 22, §3º, do Estatuto)',
        'Forma preferencialmente escrita e conteúdo mínimo do contrato: objeto, valor, forma de pagamento, extensão do patrocínio e hipótese de acordo (art. 48, caput e §1º, do CED)',
        'Contrato escrito como título executivo extrajudicial e crédito privilegiado (art. 24 do Estatuto)',
        'Custas no silêncio do contrato a cargo do cliente e retenção das despesas antecipadas na prestação de contas (art. 48, §3º, do CED)',
        'Pagamento direto ao advogado com a juntada do contrato antes do levantamento ou do precatório (art. 22, §4º)'
      ],
      macetes: [
        'Contrato calado = 1/3 + 1/3 + 1/3: COMEÇO, SENTENÇA de 1º grau, FIM.',
        'Escrito é PREFERÊNCIA, não requisito: o verbal vale, mas não executa.',
        'Conteúdo do contrato "O-V-F-E-A": Objeto, Valor, Forma de pagamento, Extensão do patrocínio e Acordo (o que acontece se houver transação).',
        'Custas no silêncio: paga o cliente. Antecipou por contrato? Retém com comprovante na prestação de contas.',
        'Quer receber direto no processo? Junte o contrato ANTES do alvará ou do precatório.'
      ],
      video: 'OAB ética honorários contratuais contrato de honorários art 22 §3º estatuto art 48 código de ética' },

    { id: 'et-quota-litis', titulo: 'Cláusula quota litis e limites', incidencia: 'alta',
      aula: [
        'Conceito: quota litis ("cota da lide") é a cláusula pela qual o advogado recebe uma PARTE do resultado obtido pelo cliente, em regra um percentual sobre o proveito econômico. É honorário de êxito: perdida a causa, nada é devido a esse título. É permitida pelo Código de Ética (art. 50 do CED), mas com limites que a FGV adora cobrar.',
        'Limite 1 – dinheiro (art. 50, caput, do CED): na quota litis, os honorários devem ser NECESSARIAMENTE representados por pecúnia. O advogado ganha um percentual em dinheiro, e não vira dono de um pedaço da fazenda, do apartamento ou das quotas da empresa em disputa.',
        'Limite 2 – teto (art. 50, caput): os honorários da quota litis, ACRESCIDOS dos honorários de sucumbência, não podem ser superiores às vantagens advindas a favor do cliente. A sucumbência entra na conta! Em linguagem simples: somando tudo, o advogado não pode ganhar com a causa mais do que o próprio cliente.',
        'Exemplo do teto: Renato contrata a advogada Sílvia com 30% do que receber numa ação de indenização. Ele ganha R$ 100.000,00, e o juiz fixa R$ 15.000,00 de sucumbência. Sílvia recebe R$ 30.000,00 + R$ 15.000,00 = R$ 45.000,00; Renato fica com R$ 70.000,00. A soma das verbas do advogado não supera a vantagem do cliente: cláusula válida.',
        'Exceção – participação em bens (art. 50, §1º): o advogado só pode participar de bens particulares do cliente em caráter EXCEPCIONAL, com duas condições cumulativas: o cliente COMPROVADAMENTE não tem condições pecuniárias de pagar os honorários, e o ajuste é feito em INSTRUMENTO CONTRATUAL.',
        'Exemplo da exceção: dona Zilda, sem renda e sem dinheiro guardado, contrata um advogado para o inventário do marido, que deixou apenas um terreno; ela pode ajustar por escrito que pagará os honorários com uma fração desse bem. Já o empresário com dinheiro aplicado não pode combinar que o advogado fique com parte de seus bens: falta a primeira condição.',
        'Prestações vencidas e vincendas (art. 50, §2º): quando o serviço jurídico versar sobre prestações vencidas e vincendas (benefício previdenciário, pensão, aluguéis), os honorários podem incidir sobre umas e outras, atendidos os requisitos da moderação e da razoabilidade.',
        'Não confunda com a Súmula 111 do STJ: nas ações previdenciárias, os honorários de SUCUMBÊNCIA não incidem sobre as prestações vencidas após a sentença, e o STJ manteve a súmula sob o CPC/2015 (Tema 1.105). Ela limita a verba paga pela parte vencida, e não o contrato entre advogado e cliente, que segue o art. 50, §2º, do CED.',
        'Moderação (art. 49 do CED): mesmo abaixo do teto, o percentual deve ser moderado, considerando a complexidade e a dificuldade da causa, o trabalho e o tempo, o valor da causa, a condição econômica do cliente e o proveito para ele, entre outros elementos. O Estatuto e o CED não fixam percentual máximo para a quota litis: os limites são o teto do art. 50 e a moderação do art. 49.',
        'Despesas: a quota litis não transfere ao advogado as custas do processo. No silêncio do contrato, custas e emolumentos presumem-se a cargo do cliente; se o contrato previr que o advogado as antecipe, ele retém o valor atualizado na prestação de contas, com comprovação documental (art. 48, §3º, do CED).',
        'Como a FGV cobra: "a quota litis é vedada" (errado); "pode ser paga em bens se as partes quiserem" (errado: só excepcionalmente, com cliente sem dinheiro e instrumento contratual); "a sucumbência não entra no limite" (errado); "os honorários só podem incidir sobre parcelas vencidas" (errado: vencidas e vincendas, com moderação e razoabilidade).'
      ],
      cai: [
        'Validade da quota litis e o teto: quota litis somada à sucumbência não pode superar as vantagens do cliente (art. 50 do CED)',
        'Honorários necessariamente em dinheiro e a exceção da participação em bens do cliente sem condições pecuniárias, por instrumento contratual (art. 50, §1º)',
        'Incidência sobre prestações vencidas e vincendas, com moderação e razoabilidade (art. 50, §2º), sem confundir com a Súmula 111 do STJ',
        'Critérios de moderação do art. 49 do CED aplicados ao percentual de êxito'
      ],
      macetes: [
        'Quota litis = "cota da lide": o advogado ganha um pedaço do RESULTADO, em DINHEIRO.',
        'Teto: QUOTA + SUCUMBÊNCIA não passam da vantagem do cliente. O advogado nunca ganha mais que o cliente.',
        'Bem do cliente só com duas chaves: cliente comprovadamente sem dinheiro + contrato escrito.',
        'Vencidas E vincendas: o CED permite no contrato; a Súmula 111 limita só a sucumbência previdenciária.'
      ],
      video: 'OAB ética cláusula quota litis art 50 código de ética honorários limites' },

    { id: 'et-hon-arbitrados', titulo: 'Honorários arbitrados judicialmente e tabela da OAB', incidencia: 'media',
      aula: [
        'Conceito: honorários arbitrados são os fixados pelo JUIZ quando não houve estipulação nem acordo entre advogado e cliente sobre o valor (art. 22, §2º, do Estatuto). A gratuidade não se presume: fora da advocacia pro bono, assumida como tal, a prestação do serviço assegura o direito aos honorários (art. 22, caput). Faltou contrato? O caminho é o arbitramento judicial.',
        'Critérios legais (art. 22, §2º): o juiz fixa remuneração compatível com o trabalho e o valor econômico da questão. Com a Lei 14.365/22, o dispositivo passou a mandar observar obrigatoriamente os parâmetros do art. 85 do CPC, como o grau de zelo do profissional, o lugar da prestação do serviço, a natureza e a importância da causa e o trabalho e o tempo exigidos.',
        'Critérios éticos (art. 49 do CED): os honorários são fixados com moderação, atendendo, entre outros elementos, à relevância, ao vulto, à complexidade e à dificuldade das questões; ao trabalho e ao tempo; à possibilidade de o advogado ficar impedido de atuar em outros casos; ao valor da causa, à condição econômica do cliente e ao proveito obtido; ao caráter da intervenção (cliente eventual, frequente ou constante); ao lugar da prestação; à competência do profissional; e à praxe do foro.',
        'Como pedir (art. 54 do CED): havendo necessidade de promover arbitramento ou cobrança judicial de honorários, o advogado deve RENUNCIAR PREVIAMENTE ao mandato que recebeu do cliente em débito. Exemplo: Otávio advoga para Lúcia sem contrato, e ela se recusa a pagar. Antes de propor a ação de arbitramento, ele renuncia ao mandato e continua responsável pela causa nos 10 dias seguintes à notificação, salvo se substituído antes (art. 5º, §3º, do Estatuto).',
        'Resultado: a decisão judicial que FIXA ou ARBITRA honorários é título executivo, e o crédito é privilegiado (art. 24 do Estatuto). Os honorários incluídos na condenação, por arbitramento ou sucumbência, pertencem ao advogado, que tem direito autônomo para executá-los (art. 23).',
        'Tabela da OAB – quem faz: compete privativamente ao CONSELHO SECCIONAL fixar a tabela de honorários, válida para todo o território estadual (art. 58, V, do Estatuto). Não é o Conselho Federal nem a Subseção. A tabela traz valores mínimos de referência para cada tipo de serviço.',
        'Tabela da OAB – para que serve: (1) piso ético: cobrar abaixo do mínimo da tabela da Seccional onde o serviço é realizado caracteriza aviltamento (art. 48, §6º, do CED); (2) parâmetro para o juiz na sucumbência fixada por equidade: ele deve observar os valores recomendados pelo Conselho Seccional ou o mínimo de 10% do art. 85, §2º, aplicando o que for maior (art. 85, §8º-A, do CPC, incluído pela Lei 14.365/22); (3) base para os honorários do advogado dativo.',
        'Advogado dativo (art. 22, §1º, do Estatuto): o advogado indicado para patrocinar causa de juridicamente necessitado, no caso de impossibilidade da Defensoria Pública no local, tem direito a honorários FIXADOS PELO JUIZ, segundo a TABELA do Conselho Seccional, e PAGOS PELO ESTADO. Não paga o assistido, nem a OAB. E recusar, sem justo motivo, essa nomeação é infração disciplinar (art. 34, XII).',
        'Dativo no STJ (Tema 984): as tabelas elaboradas unilateralmente pelas Seccionais servem de referência, mas não vinculam o juiz ao arbitrar a remuneração do defensor dativo no processo penal; ele pode, motivadamente, fixar outro valor. Vinculam, porém, as tabelas produzidas por acordo entre Poder Público, Defensoria Pública e OAB, e a tabela de honorários da Justiça Federal.',
        'Equidade, para não confundir: a sucumbência só é fixada por apreciação equitativa quando o proveito econômico for inestimável ou irrisório, ou o valor da causa for muito baixo (art. 85, §8º, do CPC). Se o valor for líquido ou liquidável, a equidade é proibida (art. 85, §6º-A), inclusive nas causas de valor elevado (STJ, Tema 1.076).',
        'Como a FGV cobra: "sem contrato escrito o advogado nada recebe" (errado: arbitramento); "pode pedir o arbitramento sem renunciar ao mandato" (errado: art. 54 do CED); "o dativo é pago pelo assistido ou pela OAB" (errado: pelo Estado, em valor fixado pelo juiz segundo a tabela); "a tabela é do Conselho Federal" (errado: Conselho Seccional).'
      ],
      cai: [
        'Falta de estipulação: arbitramento judicial compatível com o trabalho e o valor econômico da questão (art. 22, §2º, do Estatuto)',
        'Renúncia prévia ao mandato antes do arbitramento ou da cobrança judicial (art. 54 do CED)',
        'Advogado dativo: honorários fixados pelo juiz segundo a tabela da Seccional e pagos pelo Estado (art. 22, §1º)',
        'Quem fixa a tabela (Conselho Seccional, art. 58, V) e suas funções: piso ético, equidade do CPC e dativo'
      ],
      macetes: [
        'Sem contrato? Quem fixa é o JUIZ (arbitramento). Com contrato? Vale o contrato.',
        'Dativo: "o JUIZ fixa, a TABELA guia, o ESTADO paga".',
        'Tabela é da SECCIONAL (art. 58, V): cada estado tem a sua.',
        'Antes de arbitrar, RENUNCIAR: ninguém processa o próprio cliente que ainda representa.'
      ],
      video: 'OAB ética honorários arbitrados judicialmente advogado dativo tabela da OAB art 22 estatuto' },

    { id: 'et-sucumbencia', titulo: 'Honorários de sucumbência: titularidade e natureza alimentar', incidencia: 'alta',
      aula: [
        'Conceito: honorários de sucumbência são os que o juiz impõe ao VENCIDO para pagar ao advogado do VENCEDOR (art. 85 do CPC). Não servem para reembolsar o cliente pelo que ele pagou ao próprio advogado: são remuneração do advogado, paga pela outra parte, e se somam aos honorários contratuais.',
        'Titularidade (art. 23 do Estatuto): os honorários incluídos na condenação, por arbitramento ou sucumbência, PERTENCEM AO ADVOGADO, que tem direito autônomo para executar a sentença nessa parte e pode requerer que o precatório seja expedido em seu favor. O CPC confirma: os honorários constituem direito do advogado (art. 85, §14). O cliente não pode se apropriar da verba.',
        'Natureza alimentar (art. 85, §14, do CPC): os honorários têm natureza alimentar, com os mesmos privilégios dos créditos oriundos da legislação do trabalho. Contra a Fazenda Pública, os honorários incluídos na condenação ou destacados do principal são pagos por precatório ou RPV, observada a ordem especial dos créditos alimentares (Súmula Vinculante 47).',
        'Compensação proibida (art. 85, §14): na sucumbência parcial, cada parte paga honorários ao advogado da outra, e é VEDADA a compensação. A antiga Súmula 306 do STJ, que a admitia, foi superada pelo CPC/2015. A lógica: a verba é do advogado, e não da parte, então não há dívidas recíprocas entre as mesmas pessoas para compensar.',
        'Alimentar não é pensão: para a Corte Especial do STJ, embora tenham natureza alimentar, os honorários não se confundem com prestação alimentícia e, por isso, não se enquadram, por si sós, na exceção do art. 833, §2º, do CPC, que permite penhorar salário para pagar pensão.',
        'Sociedade e causa própria: o advogado pode requerer que os honorários que lhe cabem sejam pagos à sociedade de advogados que integra como sócio, mantida a natureza alimentar (art. 85, §15, do CPC). E há sucumbência também quando o advogado atua em causa própria (art. 85, §17).',
        'Advogado empregado e advogado público: nas causas em que o empregador for parte, a sucumbência é devida aos advogados empregados (art. 21 do Estatuto) e não integra o salário nem a remuneração para fins trabalhistas ou previdenciários (art. 14 do Regulamento Geral). Os advogados públicos recebem sucumbência nos termos da lei (art. 85, §19, do CPC), respeitado o teto constitucional (STF, ADI 6.053).',
        'Direito disponível (STF, ADI 1.194): o STF declarou inconstitucional o art. 24, §3º, do Estatuto, que considerava nula qualquer cláusula que retirasse do advogado a sucumbência. Logo, o advogado pode negociar no contrato o destino dessa verba. O que não se admite é que ela lhe seja tirada sem sua concordância: o acordo entre o cliente e a parte contrária, sem aquiescência do advogado, não prejudica seus honorários, convencionados ou de sucumbência (art. 24, §4º).',
        'Morte ou incapacidade do advogado (art. 24, §2º): os honorários de sucumbência, PROPORCIONAIS ao trabalho realizado, são recebidos por seus sucessores ou representantes legais. Exemplo: Hélio morre no meio da ação e a advogada Débora conclui o processo; ao final, os herdeiros de Hélio recebem a parte proporcional ao trabalho dele, e não a verba inteira.',
        'Decisão omissa (art. 85, §18, do CPC): se a decisão transitada em julgado for omissa quanto ao direito aos honorários ou ao seu valor, cabe ação autônoma para defini-los e cobrá-los. A antiga Súmula 453 do STJ, em sentido contrário, foi superada.',
        'Como a FGV cobra: cliente que reivindica a sucumbência (errado: é do advogado); compensação na sucumbência recíproca (errado: vedada); sucumbência do advogado empregado como salário (errado); morte do advogado (sucessores recebem a parte proporcional); acordo feito pelo cliente sem o advogado (não prejudica os honorários).'
      ],
      cai: [
        'Titularidade: a sucumbência pertence ao advogado, com direito autônomo de execução (art. 23 do Estatuto; art. 85, §14, do CPC)',
        'Natureza alimentar, privilégio de crédito trabalhista e vedação de compensação na sucumbência parcial (art. 85, §14, do CPC; SV 47)',
        'Falecimento ou incapacidade do advogado: sucessores recebem a sucumbência proporcional ao trabalho (art. 24, §2º)',
        'Acordo do cliente sem aquiescência do advogado não prejudica os honorários (art. 24, §4º) e a disponibilidade da verba (ADI 1.194)'
      ],
      macetes: [
        'Sucumbência: quem PERDE paga, quem ADVOGOU recebe. O cliente fica de fora.',
        'Alimentar = privilégio de trabalhista + fila especial no precatório (SV 47) + proibição de compensar.',
        'Morreu o advogado? O herdeiro recebe a PROPORÇÃO do trabalho feito.',
        'Disponível, mas não "tomável": o advogado pode negociar a verba no contrato; o cliente não pode tirá-la sozinho.'
      ],
      video: 'OAB ética honorários de sucumbência pertencem ao advogado natureza alimentar art 23 estatuto art 85 §14 CPC' },

    { id: 'honorarios2', titulo: 'Honorários: execução, preferência e prescrição', incidencia: 'alta',
      aula: [
        'Mapa da aula: conquistado o direito aos honorários, falta RECEBER. São três perguntas: com que título o advogado executa, em que posição entra na fila dos credores e até quando pode cobrar.',
        'Títulos executivos (art. 24 do Estatuto): a decisão judicial que FIXA ou ARBITRA honorários (executada por cumprimento de sentença) e o CONTRATO ESCRITO que os estipula (título extrajudicial). O ajuste verbal não é título: exige ação de cobrança ou de arbitramento, com renúncia prévia ao mandato do cliente em débito (art. 54 do CED).',
        'Direito autônomo (art. 23 do Estatuto e art. 51 do CED): o advogado executa em nome próprio o capítulo da sentença sobre honorários e pode pedir que o precatório ou a RPV seja expedido em seu favor. Não depende da vontade nem da iniciativa do cliente. O CED recomenda que a execução dos honorários, contratuais ou sucumbenciais, seja promovida preferentemente de forma destacada (art. 48, §7º).',
        'Onde executar (art. 24, §1º): a execução dos honorários pode ser promovida nos MESMOS AUTOS da ação em que o advogado atuou, SE ASSIM LHE CONVIER. É faculdade do advogado, não obrigação.',
        'Contra a Fazenda (Súmula Vinculante 47): os honorários incluídos na condenação ou destacados do montante principal têm natureza alimentar e são pagos por precatório ou RPV, observada ordem especial restrita aos créditos dessa natureza.',
        'Destaque dos contratuais (art. 22, §4º): juntado o contrato aos autos antes do mandado de levantamento ou do precatório, o juiz manda pagar os honorários diretamente ao advogado, deduzidos do valor do cliente, salvo se este provar que já pagou.',
        'Bloqueio universal (art. 24-A, incluído pela Lei 14.365/22): se todo o patrimônio do cliente for bloqueado por decisão judicial, garante-se ao advogado a liberação de até 20% dos bens bloqueados para receber honorários e reembolsar gastos com a defesa, salvo nas causas relacionadas aos crimes da Lei de Drogas (Lei 11.343/06). O pedido corre em autos apartados, sob sigilo, com a apresentação do contrato.',
        'Preferência (art. 24 do Estatuto e art. 85, §14, do CPC): o crédito de honorários é PRIVILEGIADO na falência, no concurso de credores, na insolvência civil e na liquidação extrajudicial, com os mesmos privilégios dos créditos trabalhistas. Na falência, o STJ equipara os honorários aos créditos trabalhistas, observado o limite de 150 salários-mínimos por credor do art. 83, I, da Lei 11.101/05 (Tema 637); o que passar disso segue como quirografário.',
        'Prescrição (art. 25 do Estatuto): prescreve em 5 ANOS a ação de cobrança de honorários, contado o prazo: I – do vencimento do contrato, se houver; II – do trânsito em julgado da decisão que os fixar; III – da ultimação do serviço extrajudicial; IV – da desistência ou transação; V – da renúncia ou revogação do mandato. O Código Civil também dá 5 anos aos procuradores judiciais para cobrar honorários (art. 206, §5º, II).',
        'Exemplo de prescrição: Teresa revoga o mandato do advogado Caio em 10/03/2021, sem pagar honorários que não tinham data de vencimento. O prazo de Caio conta-se da revogação (inciso V) e termina em 10/03/2026; a ação proposta em abril de 2026 está prescrita. Se o serviço fosse um parecer, o prazo correria da entrega do trabalho (ultimação do serviço extrajudicial, inciso III).',
        'Prestação de contas (art. 25-A): prescreve em 5 anos a ação de prestação de contas pelas quantias recebidas pelo advogado de seu cliente, ou de terceiros por conta dele. É o caminho inverso, do cliente contra o advogado. E recusar-se injustificadamente a prestar contas é infração disciplinar (art. 34, XXI).',
        'Como a FGV cobra: prazo de 5 anos com o termo inicial certo para cada situação; execução nos mesmos autos como faculdade; direito autônomo e precatório em favor do advogado; natureza alimentar e ordem especial (SV 47); liberação de até 20% no bloqueio universal (salvo Lei de Drogas). As pegadinhas usam prazos do Código Civil (3 ou 10 anos) ou o termo inicial errado.'
      ],
      cai: [
        'Prescrição de 5 anos e os cinco termos iniciais do art. 25 do Estatuto',
        'Prestação de contas pelo advogado: prescrição de 5 anos (art. 25-A)',
        'Execução autônoma, nos mesmos autos se convier, e precatório ou RPV em favor do advogado (arts. 23 e 24, §1º; SV 47)',
        'Crédito privilegiado e equiparação aos créditos trabalhistas na falência (art. 24; Tema 637 do STJ)',
        'Liberação de até 20% dos bens no bloqueio universal, salvo Lei de Drogas (art. 24-A)'
      ],
      macetes: [
        'Tudo é 5: cobrar honorários em 5 anos; exigir prestação de contas do advogado em 5 anos.',
        'Termos iniciais V-T-U-D-R, "Vou Tirar Um Dinheiro Rápido": Vencimento do contrato, Trânsito em julgado, Ultimação do serviço extrajudicial, Desistência ou transação, Renúncia ou revogação.',
        'Honorário na falência = "trabalhista de terno": mesmo privilégio, mesmo teto de 150 salários-mínimos.',
        'Bloqueio universal: 20% para pagar a defesa, menos na Lei de Drogas.',
        'Mesmos autos? Só se o advogado QUISER (art. 24, §1º).'
      ],
      video: 'OAB ética execução de honorários prescrição 5 anos art 24 art 25 estatuto da advocacia' },

    { id: 'et-hon-substab', titulo: 'Honorários no substabelecimento e na revogação do mandato', incidencia: 'media',
      aula: [
        'Conceito: substabelecer é transferir a outro advogado os poderes recebidos do cliente. COM reserva, o advogado original (substabelecente) continua na causa ao lado do novo (substabelecido); SEM reserva, ele se retira e o substabelecido assume sozinho. A pergunta desta aula é: nessas trocas, quem recebe o quê?',
        'Com reserva – acerto prévio (art. 26 do CED): o substabelecimento com reserva de poderes é ato pessoal do advogado da causa, e o substabelecido deve ajustar ANTECIPADAMENTE seus honorários com o SUBSTABELECENTE (§2º). A relação do substabelecido é com o colega que o chamou, e não com o cliente.',
        'Com reserva – cobrança (art. 26 do Estatuto): o advogado substabelecido com reserva de poderes NÃO PODE COBRAR honorários sem a intervenção daquele que lhe conferiu o substabelecimento. Exemplo: Paula substabelece com reserva a Vítor para fazer audiências em outra cidade; Vítor não pode mandar a cobrança direto à empresa cliente, passando por cima de Paula.',
        'Sem reserva (art. 26, §1º, do CED): exige o prévio e inequívoco conhecimento do cliente, porque troca o advogado responsável pela causa. Daí em diante, o substabelecido conduz o processo sozinho; o substabelecente não perde a remuneração pelo trabalho que já realizou.',
        'Partilha da sucumbência (art. 51, §1º, do CED): havendo substabelecimento, a sucumbência é REPARTIDA entre substabelecente e substabelecido, proporcionalmente à atuação de cada um no processo OU conforme tenham ajustado entre si. Primeiro vale o acordo; sem acordo, vale a proporção do trabalho. Não há divisão automática "meio a meio".',
        'Divergência entre colegas (art. 51, §§2º e 3º): a OAB ou seus Tribunais de Ética e Disciplina podem ser solicitados a indicar MEDIADOR para que a partilha da sucumbência siga o critério do §1º; e, nos processos disciplinares sobre essa divergência, o RELATOR deve tentar, preliminarmente, a conciliação entre os advogados.',
        'Revogação pelo cliente (art. 17 do CED): revogar o mandato NÃO desobriga o cliente de pagar os honorários contratados, e o advogado revogado conserva o direito à sucumbência, calculada proporcionalmente ao serviço efetivamente prestado. A parcela dos honorários paga pelos serviços já prestados não precisa ser devolvida (art. 12, parágrafo único).',
        'Fim da relação contratual (art. 24, §5º, do Estatuto, incluído pela Lei 14.365/22): salvo renúncia expressa do advogado aos honorários pactuados, encerrada a relação contratual com o cliente, ele mantém o direito aos honorários proporcionais ao trabalho realizado nos processos em que atuou.',
        'Renúncia do advogado: é feita sem mencionar o motivo (art. 16 do CED), e o advogado continua representando o cliente nos 10 dias seguintes à notificação, salvo se substituído antes (art. 5º, §3º, do Estatuto). Renunciar ao MANDATO não é renunciar aos HONORÁRIOS: o crédito pelo trabalho feito continua de pé.',
        'Prazo para cobrar (art. 25, V, do Estatuto): a cobrança dos honorários prescreve em 5 anos, contados da renúncia ou da revogação do mandato.',
        'Novo advogado da causa: quem aceita procuração de cliente que já tem patrono deve dar prévio conhecimento ao colega, salvo motivo plenamente justificável ou medida judicial urgente e inadiável (art. 14 do CED). Basta o conhecimento: não se exige a concordância do colega nem a quitação de seus honorários.',
        'Como a FGV cobra: substabelecido com reserva cobrando direto do cliente (errado: art. 26 do Estatuto); sucumbência toda para quem terminou o processo ou dividida meio a meio (errado: proporção da atuação ou ajuste); revogação que apaga os honorários (errado: art. 17 do CED); substabelecimento sem reserva sem ciência do cliente (errado: art. 26, §1º, do CED).'
      ],
      cai: [
        'Substabelecido com reserva não cobra honorários sem a intervenção do substabelecente (art. 26 do Estatuto)',
        'Ajuste antecipado dos honorários do substabelecido com o substabelecente (art. 26, §2º, do CED)',
        'Partilha da sucumbência no substabelecimento: proporcional à atuação ou conforme ajuste; mediador e conciliação pelo relator (art. 51, §§1º a 3º, do CED)',
        'Revogação do mandato: cliente paga o contratado e o advogado mantém a sucumbência proporcional (art. 17 do CED)'
      ],
      macetes: [
        'COM reserva: "quem me chamou é quem me acerta" – ajuste e cobrança passam pelo substabelecente.',
        'SEM reserva: o cliente precisa SABER antes (prévio e inequívoco conhecimento).',
        'Sucumbência dividida: primeiro o ACORDO entre os dois; sem acordo, a PROPORÇÃO do trabalho.',
        'Revogou? O cliente paga o contratado, e o advogado leva a sucumbência na proporção do que trabalhou.'
      ],
      video: 'OAB ética honorários substabelecimento com reserva art 26 estatuto revogação do mandato art 17 art 51 código de ética' }
  ]);
})();
