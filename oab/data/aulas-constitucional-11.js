/* Aulas adicionais – lote constitucional-11. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('constitucional', [
    { id: 'administracaocf', titulo: 'Administração Pública na Constituição (arts. 37 a 41)', incidencia: 'alta',
      aula: [
        'Em uma frase: a Constituição dá as regras básicas que todo órgão público do país precisa seguir, da prefeitura pequena ao Ministério em Brasília.',
        'Para que serve: os arts. 37 a 41 valem para a administração direta (União, Estados, DF e Municípios) e para a indireta (autarquias, fundações, empresas públicas e sociedades de economia mista), em qualquer dos três Poderes (art. 37, caput).',
        'Princípios expressos (LIMPE): Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (art. 37, caput). A eficiência entrou pela EC 19/98. Legalidade, aqui, quer dizer que o administrador só faz o que a lei permite; o particular pode fazer tudo que a lei não proíbe.',
        'Publicidade e promoção pessoal: a propaganda de atos e obras do governo deve ter caráter educativo, informativo ou de orientação social. Não pode trazer nome, símbolo ou imagem que promovam pessoalmente a autoridade (art. 37, §1º).',
        'Nepotismo: nomear cônjuge, companheiro ou parente até o terceiro grau da autoridade nomeante, ou de servidor com chefia no mesmo órgão, para cargo em comissão ou função de confiança viola a Constituição. Também vale a nomeação cruzada, ou seja, o "eu nomeio o seu, você nomeia o meu" (Súmula Vinculante 13). O STF, em regra, não aplica a súmula a cargos políticos, como Secretário ou Ministro, salvo fraude ou falta de qualificação evidente.',
        'Cargos em comissão e funções de confiança: o cargo em comissão é de livre nomeação e exoneração e serve só para direção, chefia e assessoramento. A função de confiança é exercida apenas por servidor de cargo efetivo (art. 37, V).',
        'Contratação temporária: a lei pode permitir contratar por tempo determinado para necessidade temporária de excepcional interesse público, sem concurso, mas com processo seletivo simplificado quando possível (art. 37, IX).',
        'Greve e sindicato: o servidor civil pode se sindicalizar (art. 37, VI) e fazer greve nos termos de lei específica (art. 37, VII). Como essa lei não veio, o STF mandou aplicar a lei de greve do setor privado (MI 670, 708 e 712). Policiais e demais servidores da segurança pública não podem fazer greve (Tema 541 do STF). O militar não pode se sindicalizar nem fazer greve (art. 142, §3º, IV).',
        'Remuneração por lei: a remuneração dos servidores só é fixada ou alterada por lei específica, com revisão geral anual, sempre na mesma data e sem distinção de índices (art. 37, X). É proibido vincular ou equiparar remunerações (art. 37, XIII). O Judiciário não pode aumentar vencimento de servidor com base na isonomia (Súmula Vinculante 37).',
        'Responsabilidade do Estado: as pessoas jurídicas de direito público e as privadas prestadoras de serviço público respondem pelos danos que seus agentes causarem a terceiros, sem precisar provar culpa (responsabilidade objetiva). O Estado depois cobra do agente se ele agiu com dolo ou culpa, em ação de regresso (art. 37, §6º). A vítima deve processar o Estado, não o agente diretamente (Tema 940 do STF).',
        'Improbidade: o ato de improbidade gera suspensão dos direitos políticos, perda da função, indisponibilidade dos bens e ressarcimento ao erário, sem prejuízo da ação penal (art. 37, §4º). Com a Lei 14.230/21, só há improbidade com dolo. A ação de ressarcimento por ato doloso de improbidade é imprescritível (art. 37, §5º; Tema 897 do STF).',
        'Exemplo: o Prefeito Jonas coloca seu sobrinho como Diretor de Compras (cargo em comissão) e espalha placas "Obra do Prefeito Jonas". As duas condutas violam a Constituição: a primeira é nepotismo (SV 13); a segunda é promoção pessoal (art. 37, §1º).',
        'Cuidado (pegadinha): a FGV diz que cargo em comissão pode ser criado para atividade técnica ou burocrática. Errado: só direção, chefia e assessoramento. Outra: dizer que a vítima pode escolher processar só o servidor. Pelo Tema 940, a ação vai contra o Estado.',
        'Como a FGV cobra: casos de nepotismo (inclusive cruzado), de propaganda com nome do governante, de aumento de servidor dado por juiz e de dano causado por agente público.',
        'Resumo para revisar: LIMPE vale para todos os Poderes e entes; SV 13 proíbe nepotismo, mas em regra não alcança cargo político; remuneração só por lei e sem equiparação (SV 37); responsabilidade objetiva do Estado com regresso contra o agente culpado; ação vai contra o Estado (Tema 940).'
      ],
      cai: [
        'Caso de nomeação de parente para cargo em comissão, perguntando se viola a SV 13 e se a regra alcança Secretário (cargo político).',
        'Propaganda oficial com nome ou foto do governante: violação da impessoalidade (art. 37, §1º).',
        'Pedido judicial de aumento por isonomia: vedado pela SV 37.',
        'Responsabilidade objetiva do Estado e ação de regresso contra o servidor (art. 37, §6º; Tema 940).',
        'Greve de servidor civil (lei do setor privado por analogia) versus policial e militar (proibição).'
      ],
      macetes: [
        'LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência.',
        'Comissão = Chefia, Direção, Assessoramento (CDA). Função de confiança = só para quem já é Efetivo.',
        'Nepotismo vai até o 3º grau: pais, filhos, avós, netos, irmãos, tios, sobrinhos, bisavós e bisnetos. Primo (4º grau) escapa.',
        'Dano por agente: vítima processa o Estado (objetiva); Estado cobra do agente só com dolo ou culpa (subjetiva).'
      ],
      video: 'OAB constitucional administração pública art 37 princípios nepotismo SV 13' },

    { id: 'co-servidores', titulo: 'Servidores públicos: acesso, estabilidade, acumulação e teto', incidencia: 'alta',
      aula: [
        'Em uma frase: para entrar no serviço público efetivo é preciso concurso; depois de 3 anos e avaliação, o servidor fica estável; em regra, não pode acumular cargos; e ninguém ganha acima do teto.',
        'Acesso aos cargos: cargos, empregos e funções públicas são acessíveis aos brasileiros que cumprem os requisitos da lei, e também aos estrangeiros, na forma da lei (art. 37, I). Requisitos como idade ou altura só valem se estiverem em lei e forem justificados pelo cargo (Súmula 683 do STF). Exame psicotécnico só com previsão em lei e critérios objetivos (Súmula Vinculante 44).',
        'Concurso público: a investidura em cargo ou emprego público depende de aprovação prévia em concurso de provas ou de provas e títulos. A exceção são os cargos em comissão (art. 37, II). Vale também para empregado de empresa pública e sociedade de economia mista. Fazer um concurso para um cargo e passar para outro de carreira diferente sem novo concurso é inconstitucional (Súmula Vinculante 43).',
        'Validade e prioridade: o concurso vale por até 2 anos, prorrogável uma vez por igual período (art. 37, III). Durante o prazo previsto no edital, o aprovado tem prioridade sobre novos concursados (art. 37, IV). Quem passa dentro do número de vagas do edital tem direito subjetivo à nomeação (Tema 161 do STF).',
        'Pessoas com deficiência: a lei reserva percentual de cargos e empregos para pessoas com deficiência e define os critérios de admissão (art. 37, VIII).',
        'Estabilidade: o servidor nomeado para cargo de provimento efetivo, por concurso, fica estável após 3 anos de efetivo exercício (art. 41, caput). Também é obrigatória a avaliação especial de desempenho por comissão (art. 41, §4º). Atenção: estabilidade é no serviço público, não no cargo.',
        'Como o estável perde o cargo: só em 4 hipóteses. Sentença judicial transitada em julgado, ou seja, da qual não cabe mais recurso; processo administrativo com ampla defesa; avaliação periódica de desempenho, na forma de lei complementar, com ampla defesa (art. 41, §1º); e excesso de despesa com pessoal, depois de cortar antes cargos em comissão e não estáveis (art. 169, §4º).',
        'Reintegração, disponibilidade e aproveitamento: se a demissão do estável for anulada pela Justiça, ele volta ao cargo (reintegração). Quem ocupava a vaga volta ao cargo de origem, sem indenização, ou vai para outro cargo ou para a disponibilidade (art. 41, §2º). Se o cargo for extinto, o estável fica em disponibilidade, recebendo proporcional ao tempo de serviço, até ser aproveitado em outro cargo (art. 41, §3º).',
        'Acumulação de cargos: em regra é proibida. Só se permite, havendo compatibilidade de horários e respeitado o teto: dois cargos de professor; um de professor com outro técnico ou científico; dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas (art. 37, XVI). A proibição alcança autarquias, fundações, estatais e subsidiárias (art. 37, XVII).',
        'Outras acumulações: o juiz e o membro do MP podem ter também um cargo de magistério (arts. 95, parágrafo único, I, e 128, §5º, II, "d"). O vereador pode acumular o mandato com o cargo, se houver compatibilidade de horários, recebendo os dois (art. 38, III).',
        'Teto remuneratório: ninguém na administração recebe mais que o subsídio mensal dos Ministros do STF. Nos Estados: no Executivo, o subsídio do Governador; no Legislativo, o dos Deputados Estaduais; no Judiciário, o dos Desembargadores do TJ, limitado a 90,25% do subsídio de Ministro do STF. Nos Municípios, o do Prefeito (art. 37, XI). O teto vale para empresas estatais que recebem dinheiro público para pagar pessoal ou custeio (art. 37, §9º).',
        'Teto na acumulação: quando a acumulação é lícita, o teto é aplicado a cada cargo separadamente, e não à soma (Temas 377 e 384 do STF). Parcelas indenizatórias previstas em lei, como diárias, ficam fora do teto (art. 37, §11).',
        'Exemplo: a médica Clara tem um cargo de médica no Município e outro no Estado, com horários compatíveis. A acumulação é lícita (saúde + saúde). Cada salário é comparado com o teto de forma separada. Já o professor Davi, que quer somar um cargo de professor com um de agente administrativo, comum e sem caráter técnico, não pode.',
        'Cuidado (pegadinha): a FGV diz que o estável perde o cargo só por sentença judicial. Errado: são 4 hipóteses. Outra: confundir validade do concurso (até 2 anos + 2) com estabilidade (3 anos). E o estágio probatório não dá estabilidade automática: precisa da avaliação especial.',
        'Como a FGV cobra: servidor que quer acumular cargos, aprovado dentro das vagas que não é nomeado, estável demitido sem processo, cargo extinto e remuneração acima do teto.',
        'Resumo para revisar: concurso obrigatório, salvo cargo em comissão; validade de até 2 anos, prorrogável uma vez; estabilidade após 3 anos e avaliação especial; estável perde cargo por sentença, processo administrativo, avaliação periódica ou excesso de despesa; acumulação só nas hipóteses do art. 37, XVI, com teto aplicado a cada cargo.'
      ],
      cai: [
        'Caso de acumulação de cargos: professor com técnico, dois de saúde, ou combinação proibida.',
        'Hipóteses de perda do cargo pelo servidor estável (art. 41, §1º, e art. 169, §4º).',
        'Prazo de validade do concurso e direito à nomeação de quem passou dentro das vagas (Tema 161).',
        'Extinção do cargo e disponibilidade com remuneração proporcional; reintegração após anulação da demissão.',
        'Teto: subtetos estaduais e municipais e aplicação do teto a cada cargo acumulado.'
      ],
      macetes: [
        'Concurso: "2 + 2"; estabilidade: "3 + avaliação".',
        'Estável sai por 4 portas: Sentença, Processo administrativo, Avaliação periódica e Excesso de despesa.',
        'Acumulação permitida: Professor + Professor; Professor + Técnico; Saúde + Saúde. Sempre com horário compatível.',
        'Extinguiu o cargo? Disponibilidade com pagamento proporcional. Anulou a demissão? Reintegração.'
      ],
      video: 'OAB constitucional servidores públicos estabilidade acumulação de cargos teto art 37 41' }
  ]);
})();
