/* Aulas adicionais – lote etica-08 (Relação com o cliente: aceitação de causas, conflito de interesses, renúncia e substabelecimento, devolução e prestação de contas, relação com colegas e autoridades, pro bono e urbanidade). */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);

  add('etica', [
    { id: 'et-aceite', titulo: 'Aceitação e recusa de causas; defesa criminal', incidencia: 'alta',
      aula: [
        'Em uma frase: o advogado escolhe as causas que aceita, mas não pode recusar a defesa criminal por achar o acusado culpado, nem passar por cima do colega que já atua para o cliente.',
        'Conceito: aceitar uma causa é assumir o patrocínio, ou seja, passar a defender os interesses de alguém. A advocacia privada é uma escolha livre. Em regra, ninguém obriga o advogado a aceitar um cliente.',
        'Recusa legítima: o advogado pode recusar causa ou parecer quando o pedido envolver direito que também se aplica a ele. Pode recusar também quando a tese contrariar orientação que ele mesmo já defendeu antes (art. 4º, parágrafo único, do CED).',
        'Advogado empregado ou com contrato permanente: mesmo com vínculo, ele mantém a liberdade e a independência técnica. Não é obrigado a defender tese contra sua orientação já manifestada (art. 4º do CED; art. 18 do Estatuto).',
        'Defesa criminal: é direito e também dever do advogado assumir a defesa criminal sem levar em conta sua opinião sobre a culpa do acusado. Não existe causa criminal indigna de defesa. Todo acusado tem direito a defesa técnica (art. 23 do CED).',
        'Cliente que já tem advogado: o novo advogado não deve aceitar procuração sem dar prévio conhecimento ao colega que já atua. Basta avisar; não precisa de autorização nem de prova de que os honorários foram pagos (art. 14 do CED).',
        'Exceções ao aviso: o aviso prévio pode ser dispensado por motivo plenamente justificável ou para tomar medidas judiciais urgentes e inadiáveis, como um prazo que vence hoje (art. 14 do CED).',
        'Nomeação pelo juiz: quando não há Defensoria Pública no local, o juiz pode nomear advogado dativo, ou seja, indicado para defender quem não pode pagar. Recusar sem justo motivo é infração punida com censura (art. 34, XII, e art. 36, I, do Estatuto). Os honorários são fixados pelo juiz e pagos pelo Estado (art. 22, §1º).',
        'Dever de informar: ao aceitar, o advogado deve informar o cliente com clareza sobre os riscos da causa e as consequências que podem vir da demanda (art. 9º do CED).',
        'Exemplo: Paulo, advogado criminalista, é procurado pela família de Tiago, preso em flagrante por homicídio. Paulo acha que Tiago é culpado. Mesmo assim, pode e deve aceitar a defesa se quiser, pois a opinião pessoal sobre a culpa não é motivo ético para negar defesa. Se Tiago já tiver advogado, Paulo avisa o colega antes, salvo se precisar impetrar habeas corpus urgente.',
        'Cuidado (pegadinha): a FGV troca "conhecimento" por "autorização" ou exige "quitação dos honorários do colega anterior". O CED pede só o conhecimento prévio. Outra pegadinha: dizer que o advogado pode recusar defesa criminal porque considera o crime repugnante.',
        'Como a FGV cobra: caso de advogado que reluta em defender réu acusado de crime grave; cliente que troca de advogado no meio do processo; recusa de nomeação dativa.',
        'Resumo para revisar: não há causa criminal indigna de defesa (art. 23 do CED); cliente com advogado exige conhecimento prévio do colega, salvo urgência ou motivo justificável (art. 14); recusa legítima de tese que afeta o próprio advogado ou contraria sua orientação anterior (art. 4º); recusar nomeação dativa sem justo motivo gera censura (art. 34, XII).'
      ],
      cai: ['Advogado que acha o réu culpado pode defendê-lo: não há causa criminal indigna de defesa (art. 23 do CED).', 'Novo advogado e cliente com patrono constituído: basta o prévio conhecimento do colega, com exceção para urgência (art. 14 do CED).', 'Recusa legítima de causa que trata de direito aplicável ao próprio advogado (art. 4º, parágrafo único, do CED).', 'Recusa injustificada de nomeação quando não há Defensoria: infração com censura (art. 34, XII, do Estatuto).'],
      macetes: ['Crime? Defesa sempre possível: culpa é com o juiz, defesa é com o advogado.', 'Troca de advogado = AVISAR, não pedir licença.', 'Urgência dispensa o aviso: prazo vencendo não espera.', 'Nomeação dativa recusada sem motivo = censura (inciso XII, número de "doze anos de censura").'],
      video: 'OAB ética aceitação de causa defesa criminal art 23 CED cliente com advogado constituído art 14' },

    { id: 'et-conflito', titulo: 'Conflito de interesses e patrocínio de partes contrárias', incidencia: 'alta',
      aula: [
        'Em uma frase: o advogado não pode servir a dois senhores com interesses opostos; se o conflito aparecer, escolhe um cliente e sai do outro, guardando o segredo de ambos.',
        'Conceito: há conflito de interesses quando defender bem um cliente prejudica outro cliente, ou quando o advogado já ajudou a outra parte no mesmo assunto. A confiança é a base da relação (art. 10 do CED).',
        'Mesma sociedade: advogados da mesma sociedade, ou reunidos de forma permanente para cooperar entre si, não podem representar clientes com interesses opostos, nem em juízo nem fora dele (art. 19 do CED). A regra pega o escritório inteiro, não só o advogado da causa.',
        'Conflito que surge depois: se dois clientes do mesmo advogado passam a brigar e ele não consegue harmonizá-los, deve optar por um dos mandatos e renunciar aos demais. Faz isso com prudência e discrição, mantendo o sigilo profissional (art. 20 do CED).',
        'Ato em que colaborou: o advogado deve se abster de atacar a validade de um ato jurídico que ajudou a formar. Exemplo: não pode pedir a nulidade de um contrato que ele mesmo redigiu (art. 22 do CED).',
        'Intervenção anterior: o advogado deve declarar seu impedimento, ou o da sociedade, quando já tratou antes do mesmo assunto para a outra parte (art. 22 do CED).',
        'Ex-cliente: advogar contra ex-cliente ou ex-empregador não é proibido. O dever é guardar o sigilo do que soube na relação anterior (art. 21 do CED).',
        'Patrono e preposto: o advogado não pode atuar no mesmo processo, ao mesmo tempo, como advogado e preposto (representante que fala pela empresa) do empregador ou cliente (art. 25 do CED).',
        'Exemplo: Renata redigiu o contrato de compra e venda entre Bruno e Carla. Meses depois, Carla quer anular o contrato por erro na redação. Renata não deve aceitar essa causa, pois atacaria ato que ela mesma ajudou a formar. Se Bruno e Carla fossem ambos clientes e brigassem, ela ficaria com um e renunciaria ao outro.',
        'Cuidado (pegadinha): a FGV diz que o advogado deve renunciar a todos os mandatos. Errado: ele escolhe um e renuncia aos demais. Outra pegadinha: "é proibido advogar contra ex-cliente". Errado: é permitido, guardado o sigilo.',
        'Como a FGV cobra: sócios de um escritório chamados por partes opostas; casal que se divorcia e procura o advogado da família; advogado que redigiu contrato e depois é chamado a impugná-lo; preposto e advogado na mesma audiência trabalhista.',
        'Resumo para revisar: mesma sociedade não representa interesses opostos (art. 19); conflito superveniente: escolhe um e renuncia aos demais, com sigilo (art. 20); contra ex-cliente pode, com sigilo (art. 21); não ataca ato que ajudou a formar (art. 22); nunca patrono e preposto juntos (art. 25).'
      ],
      cai: ['Conflito entre clientes: optar por um mandato e renunciar aos demais, com sigilo (art. 20 do CED).', 'Sócios da mesma sociedade defendendo partes contrárias: vedado (art. 19 do CED).', 'Advogado que redigiu contrato não deve pedir sua anulação (art. 22 do CED).', 'Atuar como patrono e preposto no mesmo processo: vedado (art. 25 do CED).'],
      macetes: ['Conflito: ESCOLHE UM, LARGA O RESTO, CALA SOBRE TODOS.', 'Escritório é um corpo só: se um sócio defende A, nenhum defende B contra A.', 'Ex-cliente pode virar adversário; o segredo dele, nunca.', 'Quem fez o contrato não o desfaz.'],
      video: 'OAB ética conflito de interesses art 19 20 21 22 CED advogado partes contrárias' },

    { id: 'et-renuncia', titulo: 'Renúncia, revogação e substabelecimento do mandato', incidencia: 'alta',
      aula: [
        'Em uma frase: o advogado pode sair da causa (renúncia), o cliente pode tirá-lo (revogação) e o advogado pode passar poderes a um colega (substabelecimento), mas cada saída tem regras próprias.',
        'Conceito: mandato é o vínculo pelo qual o cliente dá poderes ao advogado, formalizado na procuração. Ele termina por renúncia, revogação ou conclusão da causa. Concluída a causa ou arquivado o processo, presume-se extinto o mandato (art. 13 do CED). O simples passar do tempo não extingue o mandato, salvo se a procuração disser o contrário (art. 18 do CED).',
        'Renúncia, como fazer: o advogado renuncia sem dizer o motivo (art. 16 do CED). Isso protege o cliente e o sigilo.',
        'Renúncia, prazo de 10 dias: depois de notificar o cliente, o advogado continua responsável pela causa nos 10 dias seguintes, salvo se for substituído antes (art. 5º, §3º, do Estatuto). Abandonar a causa antes disso, sem justo motivo, é infração punida com censura (art. 34, XI, e art. 36, I).',
        'Renúncia e responsabilidade: renunciar não apaga a responsabilidade por danos que o advogado causou ao cliente ou a terceiros, com dolo ou culpa (art. 16, §1º, do CED). Também não deve deixar a causa ao abandono: diante de dificuldades insuperáveis ou inércia do cliente, o caminho recomendado é renunciar (art. 15 do CED).',
        'Revogação: é o cliente que tira os poderes do advogado. O cliente continua obrigado a pagar os honorários contratados. O advogado mantém o direito à sucumbência (honorários pagos pela parte que perde) proporcional ao trabalho feito (art. 17 do CED).',
        'Substabelecimento com reserva: o advogado passa poderes a um colega, mas continua na causa. É ato pessoal dele, não precisa do cliente. O substabelecido deve combinar antes seus honorários com quem substabeleceu e não pode cobrar honorários sem a intervenção deste (art. 26, caput e §2º, do CED).',
        'Substabelecimento sem reserva: o advogado sai e o colega assume tudo. Exige o prévio e inequívoco conhecimento do cliente (art. 26, §1º, do CED). Na prática, funciona como uma renúncia com substituto já pronto.',
        'Imposição do cliente: o advogado não é obrigado a aceitar que o cliente coloque outros advogados para atuar com ele, nem a aceitar indicação de colega para trabalhar no processo (art. 24 do CED).',
        'Exemplo: Fernanda, advogada de Júlio, vai morar fora do país. Ela pode substabelecer COM reserva a Rafael sem consultar Júlio, mas deve ajustar antes os honorários de Rafael. Se quiser sair de vez, substabelece SEM reserva e precisa que Júlio saiba antes. Se Júlio a dispensar, ele ainda paga o contratado.',
        'Cuidado (pegadinha): a FGV diz que a renúncia deve ser motivada, ou que o substabelecimento sem reserva exige "autorização expressa por escrito" do cliente. O CED fala em conhecimento prévio e inequívoco. Também é falso que a revogação faz o advogado perder toda a sucumbência.',
        'Como a FGV cobra: prazo de 10 dias após a renúncia; cliente que revoga e se recusa a pagar; quem paga o substabelecido; abandono de causa como infração.',
        'Resumo para revisar: renúncia sem motivo e 10 dias de responsabilidade (art. 16 do CED; art. 5º, §3º, do Estatuto); revogação não livra o cliente dos honorários contratados e mantém sucumbência proporcional (art. 17); com reserva = ato pessoal, honorários ajustados antes (art. 26); sem reserva = conhecimento prévio do cliente (art. 26, §1º); abandono = censura (art. 34, XI).'
      ],
      cai: ['Responsabilidade do advogado nos 10 dias seguintes à notificação da renúncia (art. 5º, §3º, do Estatuto).', 'Renúncia sem menção do motivo (art. 16 do CED).', 'Revogação: honorários contratados devidos e sucumbência proporcional (art. 17 do CED).', 'Substabelecimento com e sem reserva e o ajuste de honorários do substabelecido (art. 26 do CED).'],
      macetes: ['RENúncia: Responde por DEZ dias e Não diz o motivo.', 'Revogou? Paga o combinado; sucumbência vai na proporção do trabalho.', 'COM reserva = Comigo ainda; SEM reserva = Sai e o cliente precisa Saber.', 'Substabelecido cobra por meio de quem o chamou.'],
      video: 'OAB ética renúncia revogação substabelecimento com e sem reserva art 26 CED' },

    { id: 'et-devolucao', titulo: 'Devolução de bens, documentos e prestação de contas', incidencia: 'media',
      aula: [
        'Em uma frase: o dinheiro e os papéis do cliente não pertencem ao advogado; ao fim da causa ele devolve tudo e mostra, item por item, o que recebeu e o que gastou.',
        'Para que serve: a prestação de contas protege a confiança do cliente. Ela mostra quanto entrou, quanto saiu e quanto sobra para cada lado.',
        'Regra principal: concluída ou desistida a causa, com ou sem extinção do mandato, o advogado deve devolver os bens, valores e documentos recebidos e prestar contas de forma pormenorizada, ou seja, detalhada (art. 12 do CED).',
        'O que não se devolve: os honorários já pagos pelo serviço efetivamente prestado não precisam ser devolvidos. A devolução atinge o que pertence ao cliente (art. 12 do CED).',
        'Compensação: o advogado só pode descontar seus honorários de valores que recebeu para o cliente se o contrato autorizar ou se o cliente der autorização especial assinada para isso (art. 48, §2º, do CED). Sem isso, deve repassar o valor e cobrar os honorários separadamente.',
        'Recusa em prestar contas: recusar-se, sem justificativa, a prestar contas ao cliente do que recebeu dele ou de terceiros por conta dele é infração (art. 34, XXI, do Estatuto). A pena é suspensão (art. 37, I).',
        'Suspensão que dura: nesse caso, a suspensão continua até o advogado prestar contas e quitar integralmente a dívida, com correção monetária (art. 37, §2º, do Estatuto). Ou seja, não acaba só pelo prazo.',
        'Locupletamento: tirar proveito indevido do dinheiro do cliente, por qualquer forma, também é infração punida com suspensão (art. 34, XX, e art. 37, I, do Estatuto).',
        'Autos e documentos: reter de forma abusiva ou extraviar autos recebidos com vista ou em confiança é infração punida com suspensão (art. 34, XXII, e art. 37, I, do Estatuto).',
        'Exemplo: Marta ganhou uma ação e a advogada Lívia levantou R$ 50 mil por alvará. O contrato não autoriza descontar honorários. Lívia deve repassar o valor a Marta, prestar contas detalhadas e cobrar seus honorários à parte. Se ficar com o dinheiro e se recusar a prestar contas, pode ser suspensa até pagar tudo.',
        'Cuidado (pegadinha): a FGV diz que a pena por não prestar contas é censura, ou que a suspensão dura no máximo 12 meses. Errado: é suspensão e ela se prolonga até a quitação. Outra pegadinha: dizer que o advogado deve devolver também os honorários já ganhos.',
        'Como a FGV cobra: advogado que levanta alvará e não repassa; compensação de honorários sem previsão; prazo da suspensão no caso do inciso XXI.',
        'Resumo para revisar: ao fim, devolve bens, valores e documentos e presta contas detalhadas (art. 12 do CED); compensação só com previsão no contrato ou autorização especial (art. 48, §2º); recusa de prestar contas = suspensão até a quitação (arts. 34, XXI, e 37, §2º); retenção abusiva de autos = suspensão (art. 34, XXII).'
      ],
      cai: ['Recusa injustificada de prestar contas: suspensão até a quitação integral (arts. 34, XXI, e 37, §2º, do Estatuto).', 'Compensação de honorários com valores do cliente só com previsão contratual ou autorização especial (art. 48, §2º, do CED).', 'Dever de devolver bens e documentos e prestar contas pormenorizadas ao fim da causa (art. 12 do CED).'],
      macetes: ['Dinheiro do cliente: REPASSA, PRESTA CONTA, COBRA À PARTE.', 'Inciso XXI = suspensão que só acaba quando paga (21 = "vinte e um, só some quando quita").', 'Compensar só com papel assinado: contrato ou autorização especial.', 'Honorários ganhos ficam; o resto volta.'],
      video: 'OAB ética prestação de contas devolução de documentos art 12 CED art 34 XXI suspensão' },

    { id: 'et-colega', titulo: 'Relação com colegas, magistrados e partes contrárias', incidencia: 'media',
      aula: [
        'Em uma frase: advogado, juiz e promotor estão no mesmo nível; todos se tratam com respeito, e o advogado nunca negocia com a parte contrária pelas costas do advogado dela.',
        'Conceito: a advocacia é indispensável à administração da justiça (art. 133 da CF; art. 2º do Estatuto). Por isso, o advogado não é subordinado a ninguém no processo.',
        'Sem hierarquia: não há hierarquia nem subordinação entre advogados, magistrados e membros do Ministério Público. Todos devem tratar-se com consideração e respeito recíprocos (art. 6º do Estatuto). Servidores e autoridades devem dar ao advogado tratamento compatível com a dignidade da advocacia (art. 6º, parágrafo único).',
        'Acesso ao juiz: o advogado pode dirigir-se diretamente aos magistrados nas salas e gabinetes, sem horário marcado, respeitada a ordem de chegada (art. 7º, VIII, do Estatuto).',
        'Independência: nenhum receio de desagradar juiz ou autoridade, nem de ficar impopular, deve impedir o advogado de exercer a profissão (art. 31, §2º, do Estatuto).',
        'Parte contrária com advogado: o advogado não deve se entender diretamente com a parte adversa que tem advogado, sem o consentimento deste (art. 2º, parágrafo único, VIII, do CED). Fazer acordo com a parte contrária sem autorização do próprio cliente ou sem ciência do advogado contrário é infração punida com censura (art. 34, VIII, e art. 36, I, do Estatuto).',
        'Colegas: o advogado trata os colegas com urbanidade, respeito e consideração (art. 27 do CED). Pode criticar teses, mas sem ofensas pessoais.',
        'Imunidade profissional: no exercício da profissão, as manifestações do advogado em juízo ou fora dele não configuram injúria nem difamação puníveis, sem prejuízo de sanções disciplinares pela OAB pelos excessos (art. 7º, §2º, do Estatuto). O desacato foi retirado dessa imunidade pelo STF (ADI 1127). A calúnia nunca esteve coberta.',
        'Exemplo: Diego advoga para uma empresa e encontra Sílvia, a autora da ação, no corredor do fórum. Sílvia tem advogada, Dra. Helena. Diego não deve propor acordo direto a Sílvia sem o consentimento de Helena. Se fechar acordo assim, sem ciência dela, comete infração punida com censura.',
        'Cuidado (pegadinha): a FGV afirma que o juiz é superior hierárquico do advogado na audiência, ou que a imunidade cobre calúnia ou desacato. Errado nos dois casos. Outra pegadinha: a imunidade afasta o crime, mas não afasta a punição disciplinar pelos excessos.',
        'Como a FGV cobra: acordo feito com a parte contrária sem o advogado dela; advogado barrado no gabinete por falta de horário; ofensas em petição e alcance da imunidade.',
        'Resumo para revisar: sem hierarquia entre advogado, juiz e MP (art. 6º do Estatuto); acesso ao juiz sem horário marcado (art. 7º, VIII); falar com parte adversa só com consentimento do advogado dela (art. 2º, parágrafo único, VIII, do CED; art. 34, VIII, do Estatuto, censura); imunidade cobre injúria e difamação, não calúnia nem desacato (art. 7º, §2º; ADI 1127).'
      ],
      cai: ['Inexistência de hierarquia entre advogados, magistrados e MP (art. 6º do Estatuto).', 'Entendimento com a parte contrária sem ciência do advogado dela: censura (art. 34, VIII, do Estatuto).', 'Alcance da imunidade profissional: injúria e difamação, não calúnia nem desacato (art. 7º, §2º; ADI 1127).', 'Direito de falar com o juiz sem horário marcado (art. 7º, VIII).'],
      macetes: ['Advogado, juiz e promotor: três cadeiras no MESMO andar.', 'Parte contrária tem advogado? Fala com o advogado, não com a parte.', 'Imunidade: I e D (injúria e difamação) sim; C (calúnia) e desacato, não.', 'Imunidade penal não é imunidade disciplinar.'],
      video: 'OAB ética relação com magistrados art 6 estatuto imunidade profissional art 7 parágrafo 2 parte contrária' },

    { id: 'probono', titulo: 'Advocacia pro bono e deveres de urbanidade', incidencia: 'media',
      aula: [
        'Em uma frase: pro bono é advogar de graça, de vez em quando e por vontade própria, para quem não pode pagar; nunca para fazer política nem para atrair clientes.',
        'Conceito: pro bono vem do latim e quer dizer "para o bem". É a prestação gratuita, eventual e voluntária de serviços jurídicos em favor de instituições sociais sem fins econômicos e de seus assistidos, quando não tiverem recursos para contratar advogado (art. 30, §1º, do CED).',
        'Três requisitos: gratuita (sem cobrança nenhuma), eventual (não é a atividade habitual do escritório) e voluntária (o advogado escolhe fazer). Se faltar um deles, não é pro bono.',
        'Pessoas físicas: o pro bono também pode beneficiar pessoas naturais que não tenham recursos para contratar advogado sem prejuízo do próprio sustento (art. 30, §2º, do CED).',
        'Proibições: o pro bono não pode servir a fins político-partidários ou eleitorais. Também não pode beneficiar instituições que tenham esses objetivos. E não pode ser usado como publicidade para captar clientela (art. 30, §3º, do CED).',
        'Onde está a regra: o pro bono está no CED de 2015, no art. 30. Para a prova, guarde o art. 30 do CED.',
        'Diferença da advocacia dativa: no pro bono não há honorários. Na advocacia dativa, o advogado é nomeado pelo juiz e recebe honorários pagos pelo Estado (art. 22, §1º, do Estatuto).',
        'Urbanidade: é o dever de tratar todos com respeito e educação. Vale para colegas, autoridades, servidores, partes e terceiros. Ao mesmo tempo, o advogado defende suas prerrogativas e exige o mesmo tratamento (art. 27 do CED).',
        'Linguagem: o advogado deve usar linguagem escorreita e polida, ou seja, correta e educada, e evitar ofensas nas peças e nas falas (art. 28 do CED). Pode ser firme, mas não grosseiro.',
        'Exemplo: Clara faz atendimentos gratuitos uma vez por mês numa associação de moradores. Isso é pro bono. Se ela é pré-candidata a vereadora e distribui panfletos com seu nome durante os atendimentos, viola o art. 30, §3º. Se postar fotos dos atendidos dizendo "contrate quem faz justiça", usa o pro bono para captar clientes, também proibido.',
        'Cuidado (pegadinha): a FGV diz que pro bono só pode beneficiar pessoas jurídicas, ou que pode ser permanente e habitual, ou que permite cobrar valor simbólico. Tudo errado. Também é falso que o pro bono seja livre para instituição ligada a partido político.',
        'Como a FGV cobra: advogado candidato que presta pro bono; escritório que divulga pro bono como chamariz; beneficiário pessoa física sem recursos; diferença entre pro bono e dativo.',
        'Resumo para revisar: pro bono = gratuito, eventual e voluntário (art. 30, §1º, do CED); beneficia instituições sociais sem fins econômicos, seus assistidos e pessoas naturais sem recursos (art. 30, §§1º e 2º); proibido para fins político-partidários, eleitorais ou captação de clientela (art. 30, §3º); urbanidade com todos e linguagem polida (arts. 27 e 28).'
      ],
      cai: ['Conceito de pro bono: gratuito, eventual e voluntário (art. 30, §1º, do CED).', 'Pro bono para pessoa natural sem recursos (art. 30, §2º).', 'Vedação de uso eleitoral, político-partidário ou para captação de clientela (art. 30, §3º).', 'Dever de urbanidade com colegas, autoridades e terceiros (art. 27 do CED).'],
      macetes: ['Pro bono = G.E.V.: Gratuito, Eventual, Voluntário.', 'Pro bono não vota e não vende: sem política, sem captação.', 'Dativo recebe do Estado; pro bono não recebe de ninguém.', 'Firme, sim; grosseiro, nunca.'],
      video: 'OAB ética advocacia pro bono art 30 CED urbanidade' }
  ]);
})();
