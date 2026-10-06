/* Dados do plano de estudos inteligente.
 * Datas oficiais (edital FGV): 48º Exame – 1ª fase 10/01/2027, 2ª fase 28/02/2027;
 * 47º Exame – 2ª fase 18/10/2026. O aluno pode editar as datas no app. */
window.PLANO_DADOS = {
  exames: [
    { id: '48', nome: '48º Exame de Ordem', fase1: '2027-01-10', fase2: '2027-02-28' },
    { id: '47-2', nome: '47º Exame (já passei na 1ª fase)', fase1: null, fase2: '2026-10-18' }
  ],

  /* Blocos de matérias que se estudam melhor juntas (na ordem do ciclo).
   * O plano intercala as matérias de cada bloco e passa por todos os blocos. */
  blocos: [
    { materias: ['etica'], nome: 'Ética Profissional',
      porque: 'São 8 questões de letra de lei, as mais fáceis de garantir. Começa o ciclo e aparece um pouco todos os dias (5 questões) até a prova.' },
    { materias: ['penal', 'processopenal'], nome: 'Penal + Processo Penal',
      porque: 'Prescrição, ação penal, prisões e o Pacote Anticrime ligam as duas matérias: estudar o crime e logo depois o processo fixa os dois (12 questões).' },
    { materias: ['civil', 'processocivil', 'cdc'], nome: 'Civil + Processo Civil + Consumidor',
      porque: 'O direito material e o instrumento caminham juntos (prescrição, tutelas, recursos). O CDC é um microssistema que conversa com contratos e responsabilidade civil (14 questões).' },
    { materias: ['constitucional', 'dh', 'eleitoral'], nome: 'Constitucional + Direitos Humanos + Eleitoral',
      porque: 'Direitos fundamentais, tratados (art. 5º, §3º) e direitos políticos (art. 14) estão todos na Constituição: um estudo reforça o outro (10 questões).' },
    { materias: ['trabalho', 'processotrabalho', 'previdenciario'], nome: 'Trabalho + Processo do Trabalho + Previdenciário',
      porque: 'Mesma lógica de proteção ao trabalhador: verbas, prazos de 8 dias e benefícios do INSS se completam (13 questões).' },
    { materias: ['administrativo', 'ambiental'], nome: 'Administrativo + Ambiental',
      porque: 'Poder de polícia, licenciamento e responsabilidade do Estado são a base dos dois (7 questões).' },
    { materias: ['tributario', 'financeiro'], nome: 'Tributário + Financeiro',
      porque: 'Receita pública: de onde vem o dinheiro (tributos) e como é gasto (orçamento, LRF, precatórios) (6 questões).' },
    { materias: ['empresarial', 'internacional'], nome: 'Empresarial + Internacional',
      porque: 'Empresarial aproveita o que você viu de obrigações e contratos no Civil; Internacional usa a LINDB e a homologação de sentenças (6 questões).' },
    { materias: ['eca', 'filosofia'], nome: 'ECA + Filosofia',
      porque: 'Matérias curtas, de 2 questões cada, cobradas de forma direta: fecham o ciclo sem pesar (4 questões).' }
  ],

  /* Técnicas de estudo com melhor resultado comprovado, aplicadas pelo plano. */
  tecnicas: [
    { titulo: 'Questões desde o primeiro dia', aplica: 'Toda aula termina com questões.',
      texto: 'Resolver questões obriga o cérebro a buscar a informação (prática de recuperação), o que fixa muito mais do que reler. Erre cedo, nos treinos, para não errar na prova.' },
    { titulo: 'Revisão espaçada: 1, 7 e 30 dias', aplica: 'O plano agenda as revisões sozinho.',
      texto: 'Revisar um assunto 1 dia, 7 dias e 30 dias depois de estudá-lo impede a curva do esquecimento. Cada revisão é curta: macetes da aula + 5 questões.' },
    { titulo: 'Estudo intercalado por afinidade', aplica: 'Blocos como Penal + Processo Penal.',
      texto: 'Alternar matérias que se conectam (o crime e o processo; o direito e o instrumento) cria ligações entre os assuntos e acelera o aprendizado das duas.' },
    { titulo: 'Prioridade pelo peso da prova', aplica: 'Temas de alta incidência vêm primeiro.',
      texto: 'Seis matérias somam quase metade da prova. Se o tempo apertar, o plano já garante que o que mais cai foi estudado antes.' },
    { titulo: 'Caderno de erros', aplica: 'Item "Revisar erros" na rotina.',
      texto: 'Cada questão errada vira revisão. Refazer os erros é o estudo mais eficiente que existe: você ataca exatamente o que ainda não sabe.' },
    { titulo: 'Simulado semanal cronometrado', aplica: 'Agendado na fase de questões e na reta final.',
      texto: 'Treinar 5 horas de prova cria ritmo e resistência. Use a técnica das duas passadas: primeiro as fáceis, depois as difíceis.' },
    { titulo: 'Blocos de 50 minutos (pomodoro)', aplica: 'Cada meta do dia cabe em um bloco.',
      texto: '50 minutos de foco total, sem celular, e 10 de pausa. A pausa não é perda de tempo: é quando a memória se consolida.' },
    { titulo: 'Lei seca nos temas campeões', aplica: 'Reta final: Estatuto da Advocacia e artigos-chave.',
      texto: 'Boa parte da prova é letra de lei. Ler o Estatuto, o art. 5º da CF e os prazos processuais em voz alta, sublinhando prazos e exceções, rende pontos certos.' },
    { titulo: 'Explique em voz alta', aplica: 'Ao terminar cada aula.',
      texto: 'Explicar o tema em 1 minuto, como se fosse para um leigo (técnica Feynman), revela na hora o que você ainda não entendeu.' },
    { titulo: 'Sono e véspera', aplica: 'A véspera da prova fica livre no plano.',
      texto: 'Dormir bem consolida o que foi estudado. Na véspera, só uma revisão leve de Ética e macetes; nada de conteúdo novo.' }
  ],

  /* 2ª fase: o que treinar até a prova prático-profissional. */
  segunda: [
    'Organize o vade mecum: índice, marcações e remissões permitidas pelo edital. Você vai consultá-lo o tempo todo.',
    'Domine a estrutura da peça: endereçamento, qualificação, fatos, direito, pedidos e fechamento, sem se identificar.',
    'Estude uma peça por vez, das mais cobradas para as menos cobradas na sua área, e escreva cada uma à mão no tempo da prova.',
    'Treine questões discursivas todos os dias: resposta direta, com o artigo de lei. A banca pontua o fundamento.',
    'Corrija tudo pelo espelho da FGV: cada item vale décimos. Anote as teses que você esqueceu.',
    'Faça um simulado completo por semana: peça + 4 questões em 5 horas.'
  ]
};
