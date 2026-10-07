/* Aulas adicionais – lote etica-06: Ética Profissional, unidade Sociedade de advogados. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('etica', [
    { id: 'sociedade', titulo: 'Sociedade de advogados e sociedade unipessoal', incidencia: 'alta',
      aula: [
        'Conceito (art. 15 do Estatuto): os advogados podem reunir-se em sociedade simples de prestação de serviços de advocacia (a sociedade "pluripessoal", com dois ou mais sócios) ou constituir sociedade unipessoal de advocacia (um único titular), figura criada pela Lei 13.247/16. A elas se aplica o Código de Ética e Disciplina, no que couber (art. 15, §2º).',
        'Natureza: é sociedade simples, nunca empresária, e seu objeto é exclusivamente a advocacia (art. 16, caput). Por isso ela nasce na OAB, e não na Junta Comercial: adquire personalidade jurídica com o registro aprovado dos atos constitutivos no Conselho Seccional em cuja base territorial tiver sede (art. 15, §1º). Os detalhes do registro estão na aula seguinte.',
        'Quem pode ser sócio: só advogado inscrito. Estagiário, bacharel ainda não inscrito e profissional de outra área (contador, economista) não podem ser sócios nem titulares, assim como o advogado totalmente proibido de advogar (art. 16, caput). Já o advogado apenas impedido, como o servidor público que não pode advogar contra a Fazenda que o remunera (art. 30, I), pode ser sócio normalmente.',
        'Sociedade unipessoal: um só advogado titular, com pessoa jurídica distinta da pessoa física. Pode ser criada do zero ou resultar da concentração de todas as quotas de uma sociedade de advogados nas mãos de um único advogado, "independentemente das razões que motivaram tal concentração" (art. 15, §7º): morte, retirada ou exclusão dos outros sócios. O Estatuto não exige recompor a pluralidade.',
        'Unipessoal não é escudo patrimonial: apesar do nome, o titular responde subsidiária e ilimitadamente pelos danos causados aos clientes, exatamente como o sócio (art. 17). Não confunda com a sociedade limitada unipessoal do Código Civil, em que a responsabilidade fica limitada ao capital.',
        'Um vínculo societário por Seccional (art. 15, §4º): nenhum advogado pode integrar mais de uma sociedade de advogados, constituir mais de uma sociedade unipessoal, ou integrar ao mesmo tempo uma sociedade de advogados e uma unipessoal, com sede OU filial na mesma área territorial do respectivo Conselho Seccional. Em Seccionais diferentes, pode.',
        'Exemplo: Helena é sócia de uma sociedade com sede em Recife. Ela não pode abrir uma unipessoal em Pernambuco nem entrar em outra sociedade com sede ou filial em Pernambuco. Pode, porém, ser sócia de uma sociedade sediada em Salvador, desde que a sociedade de Recife não tenha filial na Bahia e a de Salvador não tenha filial em Pernambuco. Atenção: essa trava vale para quem é SÓCIO ou TITULAR; o advogado ASSOCIADO pode vincular-se a uma ou mais sociedades (art. 17-A).',
        'O trabalho continua pessoal: as atividades privativas de advogado são exercidas individualmente, ainda que os honorários revertam à sociedade (art. 37, parágrafo único, do Regulamento Geral). Por isso, as procurações são outorgadas individualmente aos advogados e devem indicar a sociedade de que façam parte (art. 15, §3º).',
        'Honorários e tributos: o advogado pode requerer que os honorários de sucumbência que lhe caibam sejam pagos em favor da sociedade que integra como sócio (art. 85, §15, do CPC). E, havendo parceria com outros advogados ou sociedades, cada sociedade recolhe tributos só sobre a parcela da receita que efetivamente lhe couber (art. 15, §9º, incluído pela Lei 14.365/22).',
        'Conflito de interesses (art. 15, §6º, e art. 19 do CED): sócios da mesma sociedade não podem representar em juízo clientes de interesses opostos. O Código de Ética vai além: a vedação vale "em juízo ou fora dele" e alcança também advogados reunidos em caráter permanente para cooperação recíproca. Exemplo: um sócio negocia a compra de um imóvel pela empresa Alfa e o outro representa a vendedora Beta na mesma negociação. Vedado, mesmo sem processo.',
        'Administração (art. 15, §8º, incluído pela Lei 14.365/22): o sócio-administrador pode ser advogado servidor da administração direta, indireta ou fundacional, desde que não esteja sujeito a regime de dedicação exclusiva; para isso, afasta-se, quanto à sociedade de advogados, a proibição de gerência do art. 117, X, da Lei 8.112/90.',
        'Como a FGV cobra: advogado querendo duas sociedades (ou sociedade e unipessoal) na mesma Seccional, sócio que não é advogado, unipessoal surgida após a saída do outro sócio, servidor como sócio-administrador e sócios atuando para clientes com interesses opostos. A resposta está quase sempre na literalidade dos arts. 15 a 17 do Estatuto.'
      ],
      cai: [
        'Art. 15, §4º: duas sociedades (ou sociedade e unipessoal) com sede ou filial na mesma Seccional é proibido; em Seccionais diferentes, pode.',
        'Unipessoal por concentração das quotas, qualquer que seja o motivo (art. 15, §7º), com titular respondendo subsidiária e ilimitadamente (art. 17).',
        'Sócios da mesma sociedade não representam clientes com interesses opostos: em juízo (art. 15, §6º) e também fora dele (art. 19 do CED).',
        'Procuração outorgada individualmente aos advogados, com indicação da sociedade (art. 15, §3º).',
        'Servidor sem dedicação exclusiva pode ser sócio-administrador (art. 15, §8º).'
      ],
      macetes: [
        '"Uma casa por estado": como sócio ou titular, um só vínculo societário por Seccional; como associado, quantos quiser.',
        'A sociedade é a CASA, o advogado é quem TRABALHA: procuração e atos privativos são individuais; os honorários é que vão para a casa.',
        'Unipessoal tem "sociedade" no nome, mas não tem escudo no patrimônio.',
        'Mesma sociedade, mesmo lado da mesa: nunca clientes opostos, nem no fórum nem fora dele.'
      ],
      video: 'sociedade de advogados sociedade unipessoal de advocacia art 15 Estatuto OAB' },

    { id: 'et-soc-registro', titulo: 'Registro, nome, filiais e vedações da sociedade', incidencia: 'alta',
      aula: [
        'Onde se registra (art. 15, §1º): no Conselho Seccional da OAB em cuja base territorial a sociedade tiver sede. É o registro aprovado dos atos constitutivos (contrato social, ou ato de constituição da unipessoal) que dá personalidade jurídica à sociedade. Não é no Conselho Federal nem na Subseção.',
        'Onde é proibido (art. 16, §3º): é vedado o registro, nos cartórios de registro civil de pessoas jurídicas e nas Juntas Comerciais, de sociedade que inclua, entre outras finalidades, a atividade de advocacia. Não adianta montar uma sociedade empresária "de objeto amplo" que também preste serviços jurídicos.',
        'Vedações (art. 16, caput): não são admitidas a registro nem podem funcionar as sociedades que (1) apresentem forma ou características de sociedade empresária; (2) adotem denominação de fantasia; (3) realizem atividades estranhas à advocacia; (4) incluam como sócio ou titular pessoa não inscrita como advogado ou totalmente proibida de advogar.',
        'Atividade estranha e publicidade: a sociedade só presta advocacia, e também é proibido divulgar a advocacia em conjunto com outra atividade (art. 1º, §3º, do Estatuto; art. 40, IV, do CED). Nada de "Advocacia e Contabilidade" ou "Advocacia e Imóveis" na mesma placa, site ou perfil.',
        'Nome da sociedade pluripessoal (art. 16, §1º): a razão social deve ter, obrigatoriamente, o nome de pelo menos um advogado responsável pela sociedade. Pode permanecer o nome de sócio falecido, desde que o ato constitutivo preveja essa possibilidade. Nome de fantasia ("Lex Prime", "Justiça Rápida") é vedado.',
        'Nome da unipessoal (art. 16, §4º): formado obrigatoriamente pelo nome do titular, completo ou parcial, com a expressão "Sociedade Individual de Advocacia". Exemplo: "Carla Faria Sociedade Individual de Advocacia". Não há livre escolha do nome, nem com o acréscimo da expressão.',
        'Filiais (art. 15, §5º): o ato de constituição da filial deve ser averbado no registro da sociedade e arquivado no Conselho Seccional onde ela se instalar; os sócios, inclusive o titular da unipessoal, ficam obrigados à inscrição suplementar nessa Seccional. A filial não é nova pessoa jurídica: é a mesma sociedade atuando em outro lugar.',
        'Sede compartilhada (art. 15, §12, incluído pela Lei 14.365/22): a sede, a filial ou o local de trabalho podem ser espaço de uso individual ou compartilhado com outros escritórios ou empresas (coworking), desde que respeitado o sigilo profissional. Dividir o espaço é permitido; o que continua proibido é misturar a advocacia com a outra atividade.',
        'Sócio que fica incompatível temporariamente (art. 16, §2º, redação da Lei 14.365/22): o impedimento ou a incompatibilidade temporária não exclui o advogado da sociedade; o fato deve ser averbado no registro, e é proibida, em qualquer hipótese, a exploração do seu nome e da sua imagem em favor da sociedade. Exemplo: o sócio eleito prefeito continua sócio, mas o escritório não pode usar o nome dele para atrair clientes. Se a atividade incompatível for definitiva, a inscrição é cancelada (art. 11, IV) e ele não pode continuar sócio.',
        'Atos em nome da sociedade: com a razão social, a sociedade pratica os atos indispensáveis às suas finalidades que não sejam privativos de advogado (art. 42 do Regulamento Geral), como alugar a sala, contratar funcionários e emitir notas. Assinar petição e dar parecer continuam sendo atos do advogado.',
        'Como a FGV cobra: nome de fantasia, registro na Junta Comercial ou em cartório, sócio não advogado, sociedade que mistura advocacia com consultoria empresarial ou contabilidade, nome de sócio falecido, filial sem inscrição suplementar e sócio que assume cargo incompatível.'
      ],
      cai: [
        'Personalidade jurídica com o registro aprovado na Seccional da sede; Junta Comercial e cartório de pessoas jurídicas são proibidos (arts. 15, §1º, e 16, §3º).',
        'As 4 vedações do art. 16: forma empresária, nome de fantasia, atividade estranha à advocacia e sócio não advogado ou totalmente proibido de advogar.',
        'Nome de sócio falecido só se o ato constitutivo previr; unipessoal = nome do titular + "Sociedade Individual de Advocacia".',
        'Filial: averbação no registro da sociedade, arquivamento na Seccional da filial e inscrição suplementar dos sócios (art. 15, §5º).',
        'Sócio com incompatibilidade temporária continua sócio, com averbação, mas seu nome e sua imagem não podem ser explorados (art. 16, §2º).'
      ],
      macetes: [
        'Vedações do art. 16 = "FENA": Forma empresária, Estranha atividade, Nome de fantasia, Alguém que não é advogado (ou é totalmente proibido).',
        'Filial = "A-A-S": Averba no registro da sociedade, Arquiva na Seccional da filial, Suplementar para os sócios.',
        'Falecido no nome? Só se o contrato "deixou escrito".',
        'Incompatível temporário: fica na sociedade, mas "sem nome e sem rosto" na propaganda.'
      ],
      video: 'registro sociedade de advogados razão social filial vedações art 16 Estatuto OAB' },

    { id: 'et-soc-responsabilidade', titulo: 'Responsabilidade civil dos sócios e da sociedade perante o cliente', incidencia: 'media',
      aula: [
        'Regra-mãe (art. 17 do Estatuto): além da sociedade, o sócio e o titular da sociedade unipessoal respondem subsidiária e ilimitadamente pelos danos causados aos clientes por ação ou omissão no exercício da advocacia, sem prejuízo da responsabilidade disciplinar em que possam incorrer.',
        'Subsidiária: primeiro responde o patrimônio da sociedade; o patrimônio pessoal do sócio ou do titular só é alcançado se o da sociedade não bastar. Por isso a responsabilidade NÃO é solidária: o cliente não pode ir direto ao patrimônio do sócio deixando a sociedade de lado.',
        'Ilimitada: não há teto no valor das quotas. Uma cláusula do contrato social que limite a responsabilidade ao capital não vale contra o cliente, porque a regra é legal. E vale também para o titular da unipessoal: a "sociedade individual de advocacia" não blinda o patrimônio do advogado.',
        'Quem responde: a sociedade, o sócio (inclusive o sócio de serviço, que é sócio como qualquer outro) e o titular da unipessoal. O Regulamento Geral (art. 40) estende a regra aos associados: sócios e associados respondem subsidiária e ilimitadamente pelos danos causados diretamente ao cliente, nas hipóteses de dolo ou culpa, no exercício dos atos privativos da advocacia.',
        'Fundamento é a culpa (art. 32): o advogado é responsável pelos atos que, no exercício profissional, praticar com dolo ou culpa. A responsabilidade é subjetiva: sem dolo ou culpa do profissional, não há dever de indenizar.',
        'Obrigação de meio: o advogado se obriga a atuar com técnica, diligência e lealdade, não a vencer a causa. Perder a ação, por si só, não gera indenização. Exemplo: Carlos agiu com todo o cuidado, mas o juiz julgou improcedente o pedido de Ana; não há o que indenizar.',
        'Perda de uma chance (STJ): se o advogado, por negligência, perde o prazo de um recurso ou deixa a pretensão prescrever, pode ter de indenizar a chance perdida. O STJ exige chance séria e real de êxito, e a indenização não é automaticamente o valor total que se discutia: indeniza-se a chance, e não o resultado final.',
        'CDC: o STJ entende que o Código de Defesa do Consumidor não se aplica à relação entre advogado e cliente, regida pelo Estatuto. E, mesmo no CDC, o profissional liberal responde mediante verificação de culpa (art. 14, §4º, do CDC). Na prova, "responsabilidade objetiva do advogado" é sempre errada.',
        'Dano à parte contrária, lide temerária (art. 32, parágrafo único): o advogado responde solidariamente com seu cliente se estiver coligado com ele para lesar a parte contrária, o que será apurado em ação própria, e não nos próprios autos. Compare: perante o próprio cliente, responsabilidade subsidiária (art. 17); perante a parte contrária, solidária só com coligação (art. 32).',
        'Responsabilidade disciplinar é independente: o mesmo fato pode gerar indenização e processo na OAB. Exemplos: prejudicar, por culpa grave, interesse confiado ao seu patrocínio (art. 34, IX, punido com censura); incidir em erros reiterados que evidenciem inépcia profissional (art. 34, XXIV, punido com suspensão). A sociedade pode pagar a indenização, mas as sanções disciplinares recaem sobre o advogado.',
        'Como a FGV cobra: troca "subsidiária" por "solidária", "ilimitada" por "limitada às quotas", diz que a unipessoal limita a responsabilidade do titular, afirma responsabilidade objetiva pelo CDC ou, na lide temerária, troca "ação própria" por "nos próprios autos".'
      ],
      cai: [
        'Art. 17: a sociedade responde; o sócio e o titular da unipessoal respondem subsidiária e ilimitadamente.',
        'Responsabilidade subjetiva (dolo ou culpa, art. 32), obrigação de meio e inaplicabilidade do CDC segundo o STJ.',
        'Perda de prazo por negligência: perda de uma chance, que exige chance séria e real.',
        'Lide temerária: solidariedade com o cliente só se coligado para lesar a parte contrária, apurada em ação própria.'
      ],
      macetes: [
        '"SUB-ILI": SUBsidiária (primeiro a sociedade) e ILImitada (sem teto de quotas).',
        'Cliente lesado: art. 17 (subsidiária). Parte contrária lesada: art. 32, parágrafo único (solidária com coligação, em ação própria).',
        'O advogado promete o MEIO, não o FIM: perdeu a causa sem culpa, não indeniza.',
        'Perda de uma chance indeniza a CHANCE, não o prêmio inteiro.'
      ],
      video: 'responsabilidade civil do advogado sociedade de advogados art 17 art 32 lide temerária OAB' },

    { id: 'et-associado', titulo: 'Advogado associado, sócio de serviço e contratos entre advogados', incidencia: 'alta',
      aula: [
        'Conceito (art. 17-A, incluído pela Lei 14.365/22): o advogado pode associar-se a uma ou mais sociedades de advogados ou sociedades unipessoais de advocacia, sem os requisitos do vínculo empregatício, para prestação de serviços e participação nos resultados. O associado não é sócio (não tem quotas) nem empregado (não tem subordinação nem salário): é um parceiro que divide resultados.',
        'Contrato próprio (art. 17-B): a associação se formaliza por contrato, que pode ser de caráter geral ou restringir-se a determinada causa ou trabalho, e deve ser registrado no Conselho Seccional em cuja base territorial tiver sede a sociedade que dele participa. O Regulamento Geral (art. 39, parágrafo único) fala em averbação no registro da sociedade.',
        'Cláusulas mínimas (art. 17-B, parágrafo único): as partes estipulam livremente a partilha dos resultados, mas o contrato deve conter no mínimo: I, qualificação das partes, com referência expressa à inscrição no Conselho Seccional; II, especificação e delimitação do serviço; III, forma de repartição dos riscos e das receitas, vedada a atribuição da totalidade dos riscos ou das receitas exclusivamente a uma delas; IV, responsabilidade pelo fornecimento de condições materiais e pelo custeio das despesas; V, prazo de duração do contrato.',
        'Pegadinha (inciso III x inciso IV): a proibição de concentrar "tudo em um só" vale para RISCOS e RECEITAS. Quanto às condições materiais e às despesas, a lei só exige que o contrato diga quem arca com elas; não proíbe que fiquem com uma das partes.',
        'Associado não é empregado disfarçado (art. 15, §§10 e 11): cabe ao Conselho Federal fiscalizar e definir parâmetros dessa relação, e não será admitida a averbação de contrato de associação que contenha, em conjunto, os elementos caracterizadores da relação de emprego da CLT (pessoalidade, habitualidade, onerosidade e subordinação). Com horário imposto, ordens e salário fixo, o caso é de advogado empregado (arts. 18 a 21 do Estatuto).',
        'Sócio x associado x empregado: o sócio tem quotas, só pode ter um vínculo societário por Seccional (art. 15, §4º) e responde pelo art. 17; o associado não tem quotas, pode associar-se a uma ou mais sociedades (art. 17-A) e participa dos resultados; o empregado é subordinado, recebe salário e tem regras próprias de jornada e de honorários de sucumbência (arts. 20 e 21).',
        'Sócio de serviço: a sociedade de advogados é sociedade simples, e o Código Civil admite o sócio cuja contribuição consiste em serviços, e não em capital (art. 997, V). Salvo convenção em contrário, ele não pode empregar-se em atividade estranha à sociedade, sob pena de ser privado dos lucros e excluído (art. 1.006), e participa dos lucros na proporção da média do valor das quotas (art. 1.007). Na advocacia, continua sendo SÓCIO: precisa ser advogado, entra na regra de um vínculo societário por Seccional e responde subsidiária e ilimitadamente perante o cliente (art. 17).',
        'Parceria entre escritórios (art. 15, §9º, incluído pela Lei 14.365/22): quando advogados ou sociedades atuam em parceria para atender um cliente, cada sociedade recolhe tributos apenas sobre a parcela da receita que efetivamente lhe couber, excluída a receita transferida aos parceiros. Exemplo: a Sociedade A recebe R$ 100 mil e repassa R$ 40 mil à Sociedade B; A tributa R$ 60 mil, e B, R$ 40 mil.',
        'Contratos entre advogados no processo: o substabelecido com reserva de poderes deve ajustar antecipadamente seus honorários com o substabelecente (art. 26, §2º, do CED) e não pode cobrar honorários sem a intervenção de quem lhe substabeleceu (art. 26 do Estatuto). Já pagar agenciador de causas com participação nos honorários é infração disciplinar (art. 34, III).',
        'Conflito de interesses na parceria: o art. 19 do CED proíbe que advogados integrantes da mesma sociedade, ou reunidos em caráter permanente para cooperação recíproca, representem, em juízo ou fora dele, clientes com interesses opostos. Associação e parceria permanentes, portanto, também exigem atenção a essa trava.',
        'Como a FGV cobra: cláusula essencial do contrato de associação, onde se registra o contrato, se o advogado pode associar-se a mais de uma sociedade (pode), se o contrato pode restringir-se a uma causa (pode), se pode concentrar todos os riscos ou todas as receitas em uma parte (não pode) e se um contrato com subordinação e salário pode ser averbado como associação (não pode).'
      ],
      cai: [
        'Cláusulas mínimas do contrato de associação (art. 17-B, parágrafo único), com a vedação de concentrar todos os riscos ou todas as receitas em uma só parte.',
        'Contrato geral ou restrito a uma causa, registrado no Conselho Seccional da sede da sociedade (art. 17-B).',
        'Associado pode vincular-se a uma ou mais sociedades (art. 17-A); sócio não pode ter dois vínculos societários na mesma Seccional (art. 15, §4º).',
        'Contrato com todos os elementos da relação de emprego não é averbado (art. 15, §11).',
        'Parceria: cada sociedade tributa apenas a sua parcela da receita (art. 15, §9º).'
      ],
      macetes: [
        'Cláusulas mínimas = "5 perguntas": QUEM são (qualificação), O QUÊ (serviço), QUANTO cada um ganha e arrisca (riscos e receitas), QUEM PAGA a estrutura (condições materiais e despesas), POR QUANTO TEMPO (prazo).',
        'Sócio é "fiel" na Seccional; associado pode ter várias parcerias (art. 17-A: "uma ou mais").',
        'Riscos e receitas: nunca "tudo para um só". Despesas: basta dizer quem paga.',
        'Horário + ordens + salário = empregado, não associado (art. 15, §11).'
      ],
      video: 'advogado associado contrato de associação art 17-A 17-B Estatuto OAB Lei 14.365' }
  ]);
})();
