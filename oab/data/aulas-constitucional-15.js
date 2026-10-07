/* Aulas adicionais – lote constitucional-15. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('constitucional', [
    { id: 'co-defensoria', titulo: 'Defensoria Pública e Advocacia Pública', incidencia: 'media',
      aula: [
        'Em uma frase: a Defensoria Pública defende de graça quem não pode pagar advogado; a Advocacia Pública defende o próprio Estado (União, Estados, DF e Municípios) na Justiça e dá consultoria a ele.',
        'Conceito: as duas são "funções essenciais à Justiça", ou seja, órgãos sem os quais a Justiça não funciona, ao lado do Ministério Público e da advocacia privada. Elas ficam fora dos três Poderes no capítulo da Constituição (arts. 127 a 135 da CF).',
        'Missão da Defensoria: ela é instituição permanente. Cabe a ela a orientação jurídica, a promoção dos direitos humanos e a defesa, judicial e fora do Judiciário, dos direitos individuais e coletivos dos necessitados. A assistência é integral e gratuita (art. 134, caput, e art. 5º, LXXIV, da CF).',
        'Princípios da Defensoria: são três, iguais aos do Ministério Público: unidade (é uma só instituição), indivisibilidade (um defensor pode substituir outro sem prejuízo) e independência funcional (o defensor atua conforme sua convicção, sem ordem do chefe sobre como agir no caso). Eles foram incluídos pela EC 80/2014 (art. 134, §4º).',
        'Autonomia: as Defensorias Estaduais têm autonomia funcional e administrativa e iniciativa da sua proposta de orçamento (EC 45/2004). A EC 74/2013 estendeu isso à Defensoria da União e à do DF. Por isso, a lei não pode colocar a Defensoria como órgão subordinado a uma Secretaria do governo (art. 134, §§2º e 3º).',
        'Defensor público: entra por concurso público de provas e títulos. Tem garantia de inamovibilidade, isto é, não pode ser transferido contra a vontade, salvo hipóteses legais. É proibido de advogar fora das atribuições do cargo (art. 134, §1º).',
        'Inscrição na OAB: o STF decidiu que o defensor público não precisa estar inscrito na OAB para atuar. A capacidade de ir a juízo vem da nomeação e posse no cargo, não da carteira da Ordem (RE 1.240.999, Tema 1074 do STF).',
        'Ação civil pública: a Defensoria pode propor ação civil pública para defender direitos coletivos, desde que a causa possa beneficiar pessoas necessitadas (art. 5º, II, da Lei 7.347/85; ADI 3943 do STF).',
        'Honorários: a Defensoria tem direito a receber honorários de sucumbência (valor que o perdedor paga) mesmo quando vence o próprio ente público ao qual pertence. O STF fixou isso no Tema 1002 (RE 1.140.005). Esse dinheiro vai para a instituição, não para o defensor.',
        'Advocacia-Geral da União (AGU): representa a União, judicial e extrajudicialmente, e faz a consultoria e o assessoramento jurídico do Poder Executivo federal (art. 131 da CF). Seu chefe é o Advogado-Geral da União. O Presidente nomeia livremente, entre cidadãos com mais de 35 anos, notável saber jurídico e reputação ilibada (art. 131, §1º). Não há sabatina no Senado.',
        'Dívida ativa da União: na execução da dívida ativa de natureza tributária, quem representa a União é a Procuradoria-Geral da Fazenda Nacional, e não a AGU de forma geral (art. 131, §3º). A entrada nas classes iniciais da AGU é por concurso de provas e títulos (art. 131, §2º).',
        'Procuradores dos Estados e do DF: fazem a representação judicial e a consultoria das suas unidades. Entram por concurso de provas e títulos, com participação da OAB em todas as fases. Ganham estabilidade após três anos de efetivo exercício, depois de avaliação de desempenho e relatório das corregedorias (art. 132 e parágrafo único). Procuradores municipais têm como teto o subsídio dos desembargadores (Tema 510 do STF).',
        'Exemplo: Dona Joana não tem dinheiro para um advogado e procura o defensor Paulo. Paulo entra com a ação mesmo sem carteira da OAB, e ninguém pode anular a ação por isso. Se o Estado perder a ação, deve pagar honorários à Defensoria. Do outro lado, quem defende o Estado é a procuradora estadual Marta, aprovada em concurso com participação da OAB.',
        'Cuidado (pegadinha): a FGV troca os requisitos. O Advogado-Geral da União é de livre nomeação, sem aprovação do Senado e sem exigência de ser da carreira. Já o Procurador-Geral da República precisa ser da carreira e passar pelo Senado. Outra troca comum: dizer que a Defensoria é subordinada ao Executivo; isso é falso.',
        'Como a FGV cobra: casos curtos sobre autonomia da Defensoria (lei estadual que a subordina a secretaria é inconstitucional), sobre os princípios do art. 134, §4º, sobre a escolha do Advogado-Geral da União e sobre quem cobra a dívida ativa tributária da União.',
        'Resumo para revisar: Defensoria defende os necessitados, com unidade, indivisibilidade e independência funcional; tem autonomia funcional, administrativa e orçamentária; defensor não precisa de inscrição na OAB (Tema 1074); AGU tem chefe de livre nomeação, maior de 35 anos; dívida ativa tributária da União fica com a PGFN.'
      ],
      cai: [
        'Lei que subordina a Defensoria a uma Secretaria de Estado: inconstitucional, por violar a autonomia do art. 134, §2º.',
        'Requisitos do Advogado-Geral da União: livre nomeação pelo Presidente, mais de 35 anos, notável saber jurídico e reputação ilibada, sem sabatina.',
        'Defensor público sem inscrição na OAB: atua normalmente (Tema 1074 do STF).',
        'Execução da dívida ativa tributária da União: Procuradoria-Geral da Fazenda Nacional (art. 131, §3º).',
        'Concurso de procurador do Estado: participação da OAB em todas as fases e estabilidade após 3 anos (art. 132).'
      ],
      macetes: [
        'U-I-I: Unidade, Indivisibilidade e Independência funcional servem para MP e Defensoria.',
        'AGU = "amigo do Presidente": livre nomeação, sem Senado. PGR = carreira + Senado.',
        'Fazenda cobra Fazenda: tributo da União é cobrado pela Procuradoria da Fazenda Nacional.',
        'Defensor tem posse, não carteira: capacidade vem do cargo, não da OAB.'
      ],
      video: 'Defensoria Pública e Advocacia Pública OAB constitucional art. 131 a 134' }
  ]);
})();
