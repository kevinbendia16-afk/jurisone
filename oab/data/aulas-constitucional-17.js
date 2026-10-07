/* Aulas adicionais – lote constitucional-17. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('constitucional', [
    { id: 'co-adpf', titulo: 'Arguição de descumprimento de preceito fundamental', incidencia: 'alta',
      aula: [
        'Em uma frase: a ADPF é a ação "coringa" do controle concentrado, usada quando nenhuma outra ação resolve a ofensa a um preceito fundamental.',
        'Conceito: a ADPF, ou seja, arguição de descumprimento de preceito fundamental, é uma ação julgada só pelo STF. Ela serve para evitar ou reparar lesão a preceito fundamental causada por ato do Poder Público (art. 102, §1º, da CF; art. 1º da Lei 9.882/99).',
        'Preceito fundamental: a lei não define. O STF entende que são as normas mais importantes da Constituição, como os direitos e garantias fundamentais, as cláusulas pétreas (art. 60, §4º) e os princípios sensíveis (art. 34, VII).',
        'Objeto amplo: a ADPF alcança o que a ADI não alcança. Cabe contra lei municipal, contra lei anterior à Constituição de 1988 (direito pré-constitucional) e contra atos do Poder Público que não são leis, como decisões judiciais reiteradas (art. 1º, parágrafo único, I, da Lei 9.882/99).',
        'Subsidiariedade: não cabe ADPF quando houver outro meio eficaz de sanar a lesão (art. 4º, §1º, da Lei 9.882/99). O STF lê isso em termos de controle concentrado: se cabe ADI ou ADC, não cabe ADPF. Exemplo: lei estadual posterior a 1988 se ataca por ADI.',
        'Fungibilidade: o STF admite receber uma ADPF como ADI, e vice-versa, quando houver dúvida razoável e os requisitos da outra ação estiverem presentes. Fungibilidade quer dizer troca de uma ação pela outra, sem perder o processo.',
        'Legitimados: são os mesmos da ADI, listados no art. 103 da CF (art. 2º, I, da Lei 9.882/99). O cidadão comum não pode propor ADPF; o inciso que o permitia foi vetado. Ele pode apenas pedir ao Procurador-Geral da República que proponha (art. 2º, §1º).',
        'Liminar: o STF concede medida liminar por maioria absoluta dos membros. Em caso de extrema urgência, perigo de lesão grave ou recesso, o relator pode concedê-la sozinho, para depois o Plenário referendar (art. 5º e §1º da Lei 9.882/99).',
        'Julgamento e efeitos: exige quórum de instalação de 2/3 dos ministros (art. 8º). A decisão tem eficácia contra todos e efeito vinculante para os demais órgãos do Poder Público (art. 10, §3º). É irrecorrível e não cabe ação rescisória (art. 12). Cabe reclamação se alguém desrespeitar a decisão (art. 13).',
        'Modulação: na ADPF também é possível limitar os efeitos no tempo, por maioria de 2/3 dos membros, por segurança jurídica ou excepcional interesse social (art. 11 da Lei 9.882/99).',
        'Exemplo: a Câmara de Vereadores de Rio Claro aprova lei municipal que proíbe falar de certo tema nas escolas. Não cabe ADI no STF contra lei municipal. A confederação nacional de professores pode então propor ADPF no STF.',
        'Cuidado (pegadinha): a FGV costuma dizer que "qualquer cidadão pode propor ADPF". Errado. Também diz que cabe ADPF contra lei federal de 2020 sem outra peculiaridade: aí cabe ADI, e a ADPF esbarra na subsidiariedade.',
        'Como a FGV cobra: dá um caso com lei municipal ou norma anterior a 1988 e pergunta qual ação cabe no STF. A resposta costuma ser ADPF.',
        'Resumo para revisar: ADPF só no STF; protege preceito fundamental; cabe contra lei municipal e direito pré-constitucional; é subsidiária; mesmos legitimados da ADI.'
      ],
      cai: ['Qual ação cabe contra lei municipal que ofende a CF diretamente no STF (ADPF).', 'Cabimento contra norma anterior a 1988 (recepção) por meio de ADPF.', 'Princípio da subsidiariedade e fungibilidade com a ADI.', 'Legitimidade: mesmos do art. 103; cidadão não pode.'],
      macetes: ['ADPF = "Ação Do Pré-constitucional e do Federalismo municipal".', 'Sobrou? ADPF. Se cabe ADI ou ADC, não cabe ADPF.', 'Liminar: maioria absoluta; julgamento instala com 2/3, igual à ADI.'],
      video: 'ADPF arguição de descumprimento de preceito fundamental OAB' },

    { id: 'co-efeitos', titulo: 'Efeitos das decisões e modulação', incidencia: 'alta',
      aula: [
        'Em uma frase: quando o STF diz que uma lei é inconstitucional, é preciso saber quem fica obrigado, desde quando e se dá para ajustar esse "desde quando".',
        'Conceito: os efeitos da decisão dizem a quem ela atinge (todos ou só as partes) e em que momento ela vale (desde a origem da lei ou só dali para frente).',
        'Regra no controle concentrado: na ADI, ADC e ADPF a decisão de mérito vale contra todos (eficácia erga omnes, ou seja, "contra todos") e vincula os demais órgãos do Judiciário e a administração pública direta e indireta, em todas as esferas (art. 102, §2º, da CF; art. 28, parágrafo único, da Lei 9.868/99).',
        'Quem não fica vinculado: o efeito vinculante não prende o Poder Legislativo na função de legislar nem o próprio Plenário do STF. O Congresso pode aprovar nova lei igual, e o STF pode rever seu entendimento. Isso evita a "fossilização" da Constituição.',
        'Efeito no tempo (regra): a lei inconstitucional é tratada como nula desde a origem. Por isso a decisão tem efeito retroativo, chamado ex tunc ("desde então").',
        'Modulação: o STF pode restringir os efeitos ou decidir que a decisão só vale a partir do trânsito em julgado ou de outro momento fixado. Precisa de dois requisitos: razões de segurança jurídica ou excepcional interesse social, e voto de 2/3 dos membros, isto é, 8 ministros (art. 27 da Lei 9.868/99; art. 11 da Lei 9.882/99).',
        'Efeito repristinatório: se a lei nova é declarada inconstitucional, volta a valer a lei antiga que ela tinha revogado. É que a lei nula não revoga nada. O STF pode afastar isso por modulação.',
        'Liminar em ADI: em regra vale contra todos e só para frente (ex nunc, "de agora em diante"), salvo se o STF der efeito retroativo. Ela também faz voltar a lei anterior, salvo decisão expressa em contrário (art. 11, §§1º e 2º, da Lei 9.868/99).',
        'Controle difuso: no caso concreto, a decisão vale em regra só entre as partes. O Senado pode suspender a execução da lei declarada inconstitucional pelo STF (art. 52, X, da CF). Mas o STF hoje entende que suas decisões de Plenário, mesmo no difuso, têm força geral, e o papel do Senado é dar publicidade (ADIs 3406 e 3470).',
        'Repercussão geral: no recurso extraordinário com repercussão geral, a tese fixada pelo STF deve ser seguida por todos os juízes e tribunais (art. 927, III, do CPC).',
        'Exemplo: o STF declara inconstitucional uma taxa estadual cobrada há 10 anos. Para não quebrar o Estado, 8 ministros decidem que a decisão vale só a partir da data do julgamento. Joana, que pagou a taxa em 2020, não terá devolução, salvo se a modulação ressalvar ações já ajuizadas.',
        'Cuidado (pegadinha): a FGV troca o quórum da modulação por maioria absoluta (6). Errado: modulação exige 2/3 (8 ministros). Maioria absoluta é para declarar a inconstitucionalidade (art. 97 da CF; art. 23 da Lei 9.868/99).',
        'Como a FGV cobra: pergunta se o Legislativo fica vinculado, qual o quórum da modulação ou o que acontece com a lei revogada pela lei declarada inconstitucional.',
        'Resumo para revisar: regra é erga omnes, vinculante e ex tunc; Legislativo não fica vinculado; modulação exige 2/3 e segurança jurídica ou interesse social; lei anterior volta a valer; liminar em regra ex nunc.'
      ],
      cai: ['Quórum da modulação: 2/3 dos membros (8 ministros).', 'Efeito vinculante não atinge o Legislativo na função de legislar.', 'Efeito repristinatório da declaração de inconstitucionalidade.', 'Efeitos da cautelar em ADI (ex nunc, como regra).'],
      macetes: ['Declarar: 6 (maioria absoluta). Modular: 8 (2/3).', 'Vinculante prende Judiciário e Administração, não o legislador.', 'Lei nula não revoga: a antiga "ressuscita".', 'Liminar olha para frente; mérito olha para trás.'],
      video: 'efeitos da decisão controle de constitucionalidade modulação OAB' },

    { id: 'co-controle-estadual', titulo: 'Controle de constitucionalidade estadual', incidencia: 'media',
      aula: [
        'Em uma frase: cada Estado tem sua Constituição, e o Tribunal de Justiça é o "guardião" dela contra leis estaduais e municipais.',
        'Para que serve: garante que leis estaduais e municipais respeitem a Constituição do Estado. Ele é feito pelo Tribunal de Justiça (TJ), por meio da representação de inconstitucionalidade, que funciona como uma "ADI estadual" (art. 125, §2º, da CF).',
        'Objeto: só leis ou atos normativos estaduais ou municipais. O parâmetro, ou seja, a norma usada para comparar, é a Constituição Estadual. Lei federal não pode ser atacada no TJ.',
        'Legitimidade: a própria Constituição Estadual define quem pode propor. A CF só proíbe dar essa legitimidade a um único órgão (art. 125, §2º). Os Estados costumam copiar o modelo do art. 103, com governador, prefeito, mesa da Assembleia, OAB seccional e outros.',
        'Normas de reprodução obrigatória: muitas regras da Constituição Estadual apenas repetem a CF. O STF admite que o TJ julgue lei municipal ou estadual usando como parâmetro essas normas, mesmo quando elas apenas copiam a CF (Tema 484 de repercussão geral).',
        'Recurso ao STF: se o parâmetro for norma de reprodução obrigatória, cabe recurso extraordinário contra a decisão do TJ. Assim o STF dá a última palavra sobre a interpretação da norma federal repetida.',
        'Lei municipal x CF: não cabe ADI no STF contra lei municipal. Os caminhos são o controle difuso, a ADPF no STF ou a ação no TJ com base em norma de reprodução da Constituição Estadual.',
        'Simultaneidade: se a mesma lei estadual for atacada ao mesmo tempo no TJ (frente à Constituição Estadual) e no STF (frente à CF), a ação no TJ fica suspensa até o STF decidir, quando o parâmetro estadual for reprodução da CF.',
        'Cláusula de reserva de plenário: o TJ também só declara inconstitucionalidade pela maioria absoluta do Pleno ou do órgão especial (art. 97 da CF).',
        'Exemplo: o prefeito de Santa Luz sanciona lei que cria cargo em comissão para funções técnicas comuns. O Procurador-Geral de Justiça propõe representação no TJ, alegando ofensa à regra de concurso público que a Constituição Estadual repete da CF. Da decisão do TJ cabe recurso extraordinário.',
        'Cuidado (pegadinha): a FGV afirma que o TJ pode julgar lei federal em face da Constituição Estadual, ou que só o governador pode propor. Ambas erradas.',
        'Como a FGV cobra: pergunta qual tribunal julga a lei municipal frente à Constituição Estadual e se cabe recurso ao STF.',
        'Resumo para revisar: TJ julga lei estadual ou municipal frente à Constituição Estadual; proibido legitimar um só órgão; norma de reprodução obrigatória serve de parâmetro; cabe RE ao STF; lei federal fica fora.'
      ],
      cai: ['Competência do TJ para a representação de inconstitucionalidade (art. 125, §2º).', 'Vedação de legitimidade a um único órgão.', 'Cabimento de recurso extraordinário quando o parâmetro é norma de reprodução obrigatória.', 'Lei municipal não é objeto de ADI no STF.'],
      macetes: ['TJ guarda a Constituição do Estado; STF guarda a CF.', 'Um só legitimado? Proibido pela CF.', 'Norma copiada da CF abre porta para o RE.'],
      video: 'controle de constitucionalidade estadual representação TJ OAB' }
  ]);
})();
