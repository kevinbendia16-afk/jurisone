/* Aulas adicionais – lote constitucional-02 (Teoria da Constituição: interpretação e direito intertemporal). */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);

  add('constitucional', [
    { id: 'co-hermeneutica', titulo: 'Interpretação constitucional: métodos e princípios', incidencia: 'media',
      aula: [
        'Em uma frase: interpretar a Constituição é descobrir o sentido certo de suas normas, usando métodos e princípios próprios, porque ela é diferente de uma lei comum.',
        'Conceito: hermenêutica é a teoria da interpretação. A Constituição tem normas abertas, como "dignidade" e "razoável duração do processo". Por isso a doutrina criou ferramentas específicas para lê-la.',
        'Método jurídico (clássico): trata a Constituição como uma lei e usa os critérios de sempre: literal, sistemático, histórico e teleológico (que busca a finalidade da norma). É ligado a Forsthoff.',
        'Método tópico-problemático: parte do problema concreto para a norma. A Constituição vira um conjunto de argumentos (topoi, ou seja, "lugares comuns") para resolver o caso. É ligado a Viehweg.',
        'Método hermenêutico-concretizador: parte da norma para o caso, mas reconhece que o intérprete já chega com uma pré-compreensão (sua visão prévia). Ele vai e volta entre texto e realidade, o chamado "círculo hermenêutico". É ligado a Konrad Hesse.',
        'Método científico-espiritual e método normativo-estruturante: o primeiro olha os valores e a realidade social que a Constituição integra (Smend). O segundo diz que a norma é maior que o texto: inclui o texto (programa normativo) e a realidade (âmbito normativo). É ligado a Friedrich Müller.',
        'Princípio da unidade da Constituição: as normas devem ser lidas em conjunto, sem contradição. Por isso não há hierarquia entre normas originárias, e o STF não declara norma originária inconstitucional (ADI 815).',
        'Princípio da concordância prática (ou harmonização): quando dois direitos colidem, o intérprete busca preservar o máximo de cada um, sem sacrificar totalmente nenhum. Exemplo: liberdade de imprensa contra intimidade.',
        'Princípios do efeito integrador, da máxima efetividade e da força normativa: o primeiro busca soluções que favoreçam a unidade política e social. O segundo manda dar à norma, em especial aos direitos fundamentais, o maior alcance possível. O terceiro manda dar à Constituição eficácia real e duradoura.',
        'Princípio da justeza (ou conformidade funcional): o intérprete não pode mudar a divisão de funções que a Constituição fez. O Judiciário, ao interpretar, não pode agir como legislador.',
        'Interpretação conforme a Constituição: quando uma lei admite vários sentidos, o juiz escolhe o que combina com a Constituição e afasta os outros. O texto da lei fica. Limite: não se pode contrariar o sentido claro da lei nem criar norma nova (Lei 9.868/99, art. 28, parágrafo único).',
        'Exemplo: uma lei fala em "entidade familiar formada por homem e mulher". O STF, na ADI 4277 e ADPF 132, deu interpretação conforme ao art. 1.723 do Código Civil e reconheceu a união estável entre pessoas do mesmo sexo.',
        'Cuidado (pegadinha): interpretação conforme não é declaração de nulidade parcial sem redução de texto, embora sejam parecidas. Na primeira, o STF diz qual sentido vale. Na segunda, diz qual aplicação é inválida. As duas mantêm o texto intacto. Outra pegadinha: "unidade" e "concordância prática" não são a mesma coisa; a primeira evita contradição, a segunda resolve colisão no caso concreto.',
        'Como a FGV cobra: descreve uma técnica ("o intérprete parte do problema", "busca harmonizar direitos em conflito") e pede o nome do método ou princípio; ou apresenta decisão do STF com interpretação conforme.',
        'Resumo para revisar: tópico parte do problema; concretizador parte da norma com pré-compreensão; normativo-estruturante diz que norma é texto mais realidade; unidade evita contradição e concordância prática harmoniza colisões; interpretação conforme mantém o texto e escolhe o sentido compatível.'
      ],
      cai: [
        'Identificar o princípio pela descrição: harmonizar direitos em colisão = concordância prática; ler a Constituição como um todo = unidade.',
        'Reconhecer que não existe hierarquia entre normas originárias, nem norma originária inconstitucional (ADI 815).',
        'Saber os limites da interpretação conforme: só quando a lei é plurissignificativa e sem contrariar o texto claro.',
        'Associar método ao autor: Hesse (concretizador), Müller (normativo-estruturante), Viehweg (tópico).'
      ],
      macetes: [
        'Tópico começa no problema; concretizador começa na norma.',
        'Concordância prática = "ninguém perde tudo".',
        'Interpretação conforme: o texto fica, um sentido sai.',
        'Müller = "norma é mais que texto".'
      ],
      video: 'métodos e princípios de interpretação constitucional OAB' },

    { id: 'co-direito-intertemporal', titulo: 'Recepção, repristinação, desconstitucionalização e mutação', incidencia: 'alta',
      aula: [
        'Em uma frase: quando nasce uma Constituição nova, é preciso saber o que acontece com as leis e a Constituição antigas; estes institutos respondem a isso.',
        'Para que serve: evitar um vazio jurídico. Sem esses institutos, toda a legislação do país sumiria no dia da nova Constituição.',
        'Recepção: a lei anterior que combina em conteúdo com a nova Constituição continua valendo. Só o conteúdo importa; a forma (o tipo de lei) não. A lei passa a ter o status que a nova Constituição exige para aquele assunto.',
        'Recepção com novo status: o CTN nasceu lei ordinária (Lei 5.172/66) e hoje tem força de lei complementar, porque o art. 146 exige lei complementar para normas gerais tributárias. Assim, só lei complementar pode alterá-lo nesses pontos.',
        'Não recepção: a lei anterior com conteúdo contrário é revogada. O STF não aceita a tese da "inconstitucionalidade superveniente". Consequência: não cabe ADI contra lei anterior a 1988. O caminho no controle concentrado é a ADPF (Lei 9.882/99, art. 1º, parágrafo único, I).',
        'Lei anterior com vício de forma da época: a recepção supõe que a lei era válida diante da Constituição do tempo em que foi feita. Uma lei já inconstitucional antes não é "salva" pela nova Constituição.',
        'Repristinação: é a volta à vida de uma lei revogada porque a lei que a revogou deixou de valer. Exemplo: a Lei A foi revogada pela Lei B; a nova Constituição não recepciona a Lei B. A Lei A não volta sozinha. Só volta se houver previsão expressa. A mesma regra vale entre leis comuns (LINDB, art. 2º, §3º).',
        'Efeito repristinatório (diferente da repristinação): quando o STF declara uma lei inconstitucional em controle concentrado, ela é nula desde o início. Por isso a lei que ela tinha revogado volta a valer. Isso é automático, salvo modulação de efeitos (Lei 9.868/99, art. 11, §2º, e art. 27).',
        'Desconstitucionalização: é a ideia de que normas da Constituição antiga, compatíveis com a nova, continuariam valendo como leis comuns. O Brasil não adota isso como regra. A Constituição antiga é revogada por inteiro. Só aconteceria se a nova Constituição previsse expressamente.',
        'Recepção material de normas constitucionais: é a nova Constituição mandar que certos artigos da antiga continuem valendo, com status constitucional e por prazo certo. Exemplo: o art. 34 do ADCT manteve por um tempo o sistema tributário da Constituição anterior.',
        'Mutação constitucional: é mudar o sentido da norma sem mudar o texto, por interpretação ou costume, ao longo do tempo. Também é chamada de "poder constituinte difuso". Limite: não pode contrariar o texto nem os princípios da Constituição; senão vira mutação inconstitucional.',
        'Exemplo: Paula invoca uma portaria de 1980 que proíbe mulheres casadas de assumir certo cargo. A regra fere a igualdade (art. 5º, I). O juiz dirá que ela não foi recepcionada, isto é, foi revogada em 1988. Se Paula quiser levar o tema ao STF em controle abstrato, usará ADPF, e não ADI.',
        'Cuidado (pegadinha): a FGV troca "revogação" por "inconstitucionalidade superveniente" e "ADPF" por "ADI". Também confunde repristinação (precisa ser expressa) com efeito repristinatório (automático na declaração de inconstitucionalidade). E chama de mutação o que é emenda: emenda muda o texto; mutação, não.',
        'Como a FGV cobra: caso de lei antiga diante da CF/88, pergunta sobre a ação cabível, sobre a volta de lei revogada e sobre mudança de interpretação do STF sem alteração do texto.',
        'Resumo para revisar: recepção olha só o conteúdo; incompatível é revogada, cabendo ADPF; repristinação só expressa; efeito repristinatório é automático na inconstitucionalidade, salvo modulação; desconstitucionalização não é regra no Brasil; mutação muda sentido, não texto.'
      ],
      cai: [
        'Lei pré-1988 incompatível: não recepção (revogação), e a ação no STF é a ADPF.',
        'Lei antiga ordinária recepcionada como complementar (CTN) só pode ser alterada por lei complementar.',
        'Diferença entre repristinação (só expressa) e efeito repristinatório (automático no controle concentrado).',
        'Mutação constitucional como mudança informal, sem alterar o texto.'
      ],
      macetes: [
        'Recepção não olha a roupa (forma), olha a alma (conteúdo).',
        'Lei velha contra Constituição nova: R de Revogação, P de ADPF.',
        'Repristinação: lei morta só ressuscita se alguém disser em voz alta (expressamente).',
        'Mutação: muda o sentido, o texto fica igual.'
      ],
      video: 'recepção repristinação desconstitucionalização mutação constitucional OAB' }
  ]);
})();
