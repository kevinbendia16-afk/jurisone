/* 2ª fase: prova prático-profissional (peça de 5 pontos + 4 questões de 1,25). Aprovação: nota 6,0. */
window.SEGUNDA_FASE = {
  regras: [
    'Duração de 5 horas. Uma peça profissional (5,0 pontos) + 4 questões discursivas (1,25 cada). Para passar: nota mínima 6,0.',
    'Pode consultar legislação sem anotações, comentários ou jurisprudência (vade mecum "limpo"). Remissões simples entre artigos são permitidas – confira o edital.',
    'Não assine nem se identifique: use "Advogado... OAB..." e "Local... Data...". Identificação anula a prova.',
    'A peça errada (inadequada) zera a nota da peça. Identificar a peça é o passo mais importante.',
    'A banca pontua pelo espelho: cada fundamento legal e cada pedido vale décimos. Cite o artigo de lei SEMPRE.'
  ],
  estrutura: [
    ['Endereçamento', 'Juízo competente correto (vara, comarca, tribunal). Erro aqui custa pontos e pode indicar peça errada.'],
    ['Qualificação das partes', 'Nome, nacionalidade, estado civil, profissão, CPF, endereço (art. 319 do CPC) – sem inventar dados: use "..."'],
    ['Nome da peça e fundamento legal', 'Ex.: "AÇÃO DE INDENIZAÇÃO POR DANOS MORAIS, com fundamento no art. 186 e 927 do CC".'],
    ['Fatos', 'Resuma os fatos do enunciado, sem criar fatos novos.'],
    ['Direito', 'Um tópico para cada tese. Cada tese: artigo de lei + explicação aplicada ao caso. Preliminares antes do mérito.'],
    ['Pedidos', 'Espelhe cada tese num pedido. Inclua: citação, provas, procedência, condenação em custas e honorários, valor da causa.'],
    ['Fechamento', '"Nestes termos, pede deferimento. Local..., Data... Advogado... OAB..."']
  ],
  areas: [
    { id: 'civil2', nome: 'Direito Civil', icone: '📜',
      pecas: [
        ['Petição inicial (procedimento comum)', 'Enunciado narra um conflito e o cliente ainda não ajuizou ação.', 'Art. 319 e 320 CPC'],
        ['Contestação', 'Cliente foi citado e o prazo de resposta está aberto.', 'Art. 335 a 342 CPC'],
        ['Apelação', 'Houve sentença desfavorável.', 'Art. 1.009 CPC'],
        ['Agravo de instrumento', 'Decisão interlocutória do rol do art. 1.015 (ex.: tutela indeferida).', 'Art. 1.015 e 1.016 CPC'],
        ['Embargos à execução', 'Cliente foi executado por título extrajudicial.', 'Art. 914 CPC'],
        ['Impugnação ao cumprimento de sentença', 'Cliente intimado a pagar após sentença.', 'Art. 525 CPC']
      ],
      dicas: ['Sempre pedir tutela provisória quando houver urgência no enunciado.', 'Valor da causa é obrigatório na inicial (art. 292).', 'Fazer opção pela audiência de conciliação (art. 319, VII).'] },
    { id: 'penal2', nome: 'Direito Penal', icone: '🔒',
      pecas: [
        ['Resposta à acusação', 'Réu citado após recebimento da denúncia.', 'Art. 396 e 396-A CPP'],
        ['Memoriais (alegações finais)', 'Instrução encerrada, antes da sentença.', 'Art. 403, §3º CPP'],
        ['Apelação', 'Sentença condenatória ou absolutória.', 'Art. 593 CPP'],
        ['Recurso em sentido estrito', 'Decisões do art. 581 (ex.: rejeição da denúncia, pronúncia).', 'Art. 581 CPP'],
        ['Habeas corpus', 'Ilegalidade na liberdade de locomoção sem outro recurso eficaz.', 'Art. 647 e 648 CPP'],
        ['Relaxamento / liberdade provisória', 'Prisão em flagrante ilegal ou desnecessária.', 'Art. 310 e 321 CPP; art. 5º, LXV, CF']
      ],
      dicas: ['Ordem das teses: nulidades → extinção da punibilidade → absolvição → pena (dosimetria, regime, substituição).', 'Sempre pedir subsidiariamente: pena mínima, regime mais brando, substituição por restritiva de direitos.', 'Apelação: interposição (5 dias) + razões (8 dias) em peças separadas.'] },
    { id: 'trabalho2', nome: 'Direito do Trabalho', icone: '👷',
      pecas: [
        ['Reclamação trabalhista', 'Empregado com direitos violados ainda não ajuizou ação.', 'Art. 840, §1º CLT'],
        ['Contestação', 'Empresa notificada para audiência.', 'Art. 847 CLT'],
        ['Recurso ordinário', 'Sentença da Vara do Trabalho.', 'Art. 895 CLT'],
        ['Recurso de revista', 'Acórdão do TRT em recurso ordinário que viola lei, a Constituição ou contraria súmula do TST.', 'Art. 896 CLT'],
        ['Embargos à execução', 'Executado com o juízo garantido.', 'Art. 884 CLT'],
        ['Agravo de petição', 'Decisão na fase de execução.', 'Art. 897, a, CLT']
      ],
      dicas: ['Pedidos da reclamação devem ser certos, determinados e com indicação de valor (art. 840, §1º).', 'Lembre de honorários de sucumbência (art. 791-A) e justiça gratuita.', 'Recurso: comprovar preparo (custas + depósito recursal) quando for a empresa.'] },
    { id: 'tributario2', nome: 'Direito Tributário', icone: '💰',
      pecas: [
        ['Ação declaratória de inexistência de relação jurídico-tributária', 'Ainda não houve lançamento; quer evitar a cobrança.', 'Art. 19, I, CPC'],
        ['Ação anulatória de débito fiscal', 'Já houve lançamento e o contribuinte quer anulá-lo.', 'Art. 38 LEF'],
        ['Mandado de segurança', 'Direito líquido e certo, prova pré-constituída, até 120 dias do ato.', 'Lei 12.016/09'],
        ['Ação de repetição de indébito', 'Pagou tributo indevido e quer restituição.', 'Art. 165 CTN'],
        ['Embargos à execução fiscal', 'Execução fiscal ajuizada e juízo garantido (30 dias).', 'Art. 16 LEF'],
        ['Exceção de pré-executividade', 'Matéria de ordem pública sem necessidade de prova, sem garantir o juízo.', 'Súmula 393 STJ']
      ],
      dicas: ['Observe o momento: antes do lançamento → declaratória/MS preventivo; depois → anulatória/MS; após pagar → repetição; após execução → embargos.', 'Peça o depósito do montante integral para suspender a exigibilidade (art. 151, II, CTN).'] },
    { id: 'administrativo2', nome: 'Direito Administrativo', icone: '🏢',
      pecas: [
        ['Mandado de segurança', 'Ato ilegal de autoridade, prova pré-constituída, até 120 dias.', 'Art. 5º, LXIX, CF; Lei 12.016/09'],
        ['Ação ordinária (procedimento comum)', 'Precisa de dilação probatória ou já passaram os 120 dias.', 'Art. 319 CPC'],
        ['Ação popular', 'Cidadão quer anular ato lesivo ao patrimônio público.', 'Lei 4.717/65'],
        ['Ação de indenização contra o Estado', 'Dano causado por agente público.', 'Art. 37, §6º, CF'],
        ['Contestação / recursos', 'Cliente é réu ou perdeu a ação.', 'CPC']
      ],
      dicas: ['Responsabilidade do Estado: pedir com base na responsabilidade objetiva (art. 37, §6º).', 'No MS, indicar a autoridade coatora e a pessoa jurídica a que pertence.'] },
    { id: 'constitucional2', nome: 'Direito Constitucional', icone: '🏛️',
      pecas: [
        ['ADI / ADC / ADO / ADPF', 'Legitimado do art. 103 quer impugnar lei em abstrato.', 'Lei 9.868/99 e 9.882/99'],
        ['Mandado de segurança', 'Direito líquido e certo violado por autoridade.', 'Lei 12.016/09'],
        ['Mandado de injunção', 'Falta de norma regulamentadora.', 'Lei 13.300/16'],
        ['Habeas data', 'Informações pessoais negadas.', 'Lei 9.507/97'],
        ['Reclamação constitucional', 'Desrespeito a súmula vinculante ou decisão do STF.', 'Art. 103-A, §3º, CF; art. 988 CPC'],
        ['Recurso extraordinário', 'Acórdão que contraria a Constituição, com repercussão geral.', 'Art. 102, III, CF']
      ],
      dicas: ['Ações de controle concentrado: demonstrar legitimidade e, se for o caso, pertinência temática.', 'Pedir medida cautelar quando houver urgência.'] },
    { id: 'empresarial2', nome: 'Direito Empresarial', icone: '🏭',
      pecas: [
        ['Pedido de recuperação judicial', 'Empresário em crise quer preservar a empresa.', 'Art. 47 e 51 Lei 11.101/05'],
        ['Pedido de falência / contestação', 'Credor com título protestado acima de 40 salários mínimos.', 'Art. 94 e 98 Lei 11.101/05'],
        ['Ação de dissolução parcial de sociedade', 'Sócio quer sair ou excluir outro sócio.', 'Art. 599 CPC'],
        ['Ação monitória / execução de título', 'Credor com título de crédito.', 'Art. 700 e 784 CPC'],
        ['Habilitação / impugnação de crédito', 'Credor na falência ou recuperação.', 'Art. 8º e 10 Lei 11.101/05']
      ],
      dicas: ['Recuperação: exige atividade regular há mais de 2 anos (art. 48).', 'Defesa no pedido de falência: 10 dias, com possibilidade de depósito elisivo (art. 98).'] }
  ]
};

/* Estratégias gerais usadas pelos cursinhos com mais aprovados. */
window.ESTRATEGIAS = [
  { titulo: 'Comece por Ética', texto: 'São 8 questões de letra de lei. Quem domina Ética garante 20% dos acertos necessários para passar. Leia o Estatuto, o Código de Ética e o Regulamento Geral.' },
  { titulo: 'Estude pelo peso', texto: 'Ética + Constitucional + Civil + Processo Civil + Penal + Processo Penal = cerca de 38 das 80 questões. Domine essas antes das matérias com 2 questões.' },
  { titulo: 'Você precisa de 40 acertos', texto: 'A meta é 50% da prova. Não precisa saber tudo: precisa acertar o que mais cai. Mire 45 acertos nos simulados para ter margem de segurança.' },
  { titulo: 'Questões > teoria', texto: 'A FGV repete temas. Resolva questões todos os dias e leia a explicação de TODAS as alternativas, inclusive das que você acertou.' },
  { titulo: 'Técnica das duas passadas', texto: 'Na prova, responda primeiro as questões fáceis e marque as difíceis. Volte depois. São 5 horas para 80 questões: cerca de 3 minutos por questão.' },
  { titulo: 'Leia o comando primeiro', texto: 'Antes do enunciado longo, leia a pergunta final ("assinale a correta/incorreta"). Você lê o caso já sabendo o que procurar.' },
  { titulo: 'Desconfie dos absolutos', texto: 'Alternativas com "sempre", "nunca", "exclusivamente", "em qualquer hipótese" costumam estar erradas, salvo quando reproduzem a lei.' },
  { titulo: 'Revisão espaçada', texto: 'Revise o conteúdo em 24 horas, 7 dias e 30 dias. Use a seção de revisão do app para refazer as questões que você errou.' },
  { titulo: '2ª fase: escolha cedo', texto: 'Escolha a área da 2ª fase logo após a 1ª. Treine uma peça por semana, sempre com o vade mecum que você vai levar para a prova, para criar familiaridade com os artigos.' },
  { titulo: 'Simulado cronometrado', texto: 'Faça pelo menos 3 simulados completos em condições reais: 5 horas, sem celular, respondendo no gabarito.' }
];
