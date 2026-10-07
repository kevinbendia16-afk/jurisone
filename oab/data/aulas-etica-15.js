/* Aulas adicionais – lote etica-15 (Ética: revisão do processo disciplinar). */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('etica', [
    { id: 'et-revisao', titulo: 'Revisão do processo disciplinar', incidencia: 'media',
      aula: [
        'Em uma frase: a revisão é a "segunda chance" do advogado já punido de forma definitiva, quando a condenação se apoiou em um erro de julgamento ou em uma prova falsa.',
        'Conceito: revisão disciplinar é um pedido para reabrir um processo disciplinar já encerrado, ou seja, sem mais recurso possível. Ela não é recurso. O recurso ataca uma decisão ainda aberta; a revisão ataca uma decisão que já transitou em julgado na esfera da OAB (art. 73, §5º, do Estatuto).',
        'Para que serve: corrigir injustiças graves. Se o advogado foi punido por causa de um engano evidente ou de um documento forjado, a OAB não pode manter a pena só porque o prazo de recurso acabou.',
        'Hipóteses (só duas): a lei admite a revisão em apenas dois casos. Primeiro, erro de julgamento, isto é, a decisão contrariou de forma clara a prova dos autos ou a norma aplicável. Segundo, condenação baseada em falsa prova, como um depoimento mentiroso ou um documento adulterado (art. 73, §5º, do Estatuto).',
        'O que não cabe: a revisão não serve para rediscutir provas já bem avaliadas, nem para pedir uma pena mais leve só por discordar dela. Também não serve para quem quer apenas "tentar de novo" com os mesmos argumentos. Sem erro de julgamento ou prova falsa, o pedido é rejeitado.',
        'Pressuposto: é preciso existir condenação definitiva. Se ainda cabe recurso, o caminho é o recurso, e não a revisão. Lembre que, em regra, os recursos no processo disciplinar têm prazo de 15 dias e efeito suspensivo (arts. 69 e 77 do Estatuto).',
        'Quem pede: a revisão é um instrumento de defesa. Quem a requer é o advogado punido. Ela existe para beneficiar o condenado, e não para agravar a situação dele.',
        'Onde se processa: o pedido tem autuação própria, ou seja, forma um processo novo, que fica ligado (apensado) aos autos originais. O procedimento detalhado está no Código de Ética e Disciplina e no Regimento do Conselho competente. O pedido não suspende, por si só, a pena que está sendo cumprida.',
        'Diferença para a reabilitação: a reabilitação não discute se a pena foi justa. Ela apenas "limpa" a ficha depois do cumprimento. Pode ser pedida 1 ano após o cumprimento da sanção, com provas de bom comportamento. Se a falta também foi crime, depende ainda da reabilitação criminal (art. 41 do Estatuto). Já a revisão diz: "a condenação estava errada".',
        'Exemplo: a advogada Lívia foi suspensa por suposta apropriação de valores do cliente. A prova principal era um recibo. Depois do fim do processo, uma perícia mostrou que o recibo foi falsificado pelo próprio cliente. Lívia pode pedir a revisão por condenação baseada em falsa prova.',
        'Cuidado (pegadinha): a FGV costuma trocar revisão por recurso ou por reabilitação. Revisão exige decisão definitiva e um dos dois fundamentos. Reabilitação exige 1 ano após cumprir a pena e bom comportamento. Outra pegadinha: dizer que a revisão cabe por "simples discordância com a pena aplicada". Não cabe.',
        'Como a FGV cobra: normalmente com um caso de advogado punido de forma definitiva que descobre um fato novo. O enunciado pergunta qual medida usar e com qual fundamento.',
        'Resumo para revisar: revisão não é recurso; exige condenação definitiva; só cabe por erro de julgamento ou falsa prova (art. 73, §5º); quem pede é o advogado punido; reabilitação é outra coisa (1 ano após cumprir a pena, art. 41).'
      ],
      cai: [
        'Caso de advogado punido definitivamente que descobre que a prova era falsa: resposta é a revisão (art. 73, §5º, do Estatuto).',
        'Alternativa que diz caber revisão por mera discordância com a dosagem da pena: errada.',
        'Confusão proposital entre revisão (condenação errada) e reabilitação (1 ano após cumprir a pena, art. 41).',
        'Confusão entre revisão e recurso de 15 dias contra decisão ainda não definitiva (art. 77).'
      ],
      macetes: [
        'Revisão = "E.F.": Erro de julgamento ou Falsa prova.',
        'Recurso: decisão aberta. Revisão: decisão fechada e errada. Reabilitação: decisão fechada, pena cumprida, 1 ano de bom comportamento.',
        'Revisão só ajuda o punido: nunca serve para piorar a situação dele.'
      ],
      video: 'revisão do processo disciplinar OAB art 73 §5º estatuto ética' }
  ]);
})();
