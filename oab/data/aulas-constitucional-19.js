/* Aulas adicionais – lote constitucional-19. */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('constitucional', [
    { id: 'co-meio-ambiente', titulo: 'Meio ambiente na Constituição', incidencia: 'media',
      aula: [
        'Em uma frase: todos têm direito a um meio ambiente equilibrado, e o dever de cuidar dele é do Poder Público e também de cada um de nós, pensando nas gerações de hoje e nas futuras (art. 225, caput).',
        'Conceito: o meio ambiente é um "bem de uso comum do povo". Isso quer dizer que ele não pertence a uma pessoa só; é de toda a coletividade. Por isso é chamado de direito difuso, ou seja, um direito de pessoas indeterminadas, ligadas por uma situação comum (art. 225, caput).',
        'Direito de terceira dimensão: a doutrina e o STF classificam o meio ambiente como direito de solidariedade (terceira dimensão). Ele protege a humanidade inteira, inclusive quem ainda nem nasceu. É a chamada solidariedade entre gerações (art. 225, caput).',
        'Deveres do Poder Público: para garantir esse direito, o Estado deve, entre outras tarefas, preservar os processos ecológicos, proteger o patrimônio genético, criar espaços territoriais especialmente protegidos, exigir estudo prévio de impacto ambiental, controlar substâncias perigosas, promover educação ambiental e proteger a fauna e a flora (art. 225, §1º, I a VII).',
        'Estudo de impacto ambiental: obra ou atividade que possa causar "significativa degradação" do meio ambiente precisa de estudo prévio de impacto ambiental (o famoso EIA). Esse estudo deve ser público, ou seja, a sociedade tem acesso a ele. Ele é feito antes da obra, nunca depois (art. 225, §1º, IV).',
        'Espaços protegidos: os espaços territoriais especialmente protegidos (como parques e reservas) podem ser criados por qualquer ato do Poder Público, inclusive decreto. Mas, para alterar ou suprimir esses espaços, a CF exige lei. Criar é fácil; diminuir ou acabar só por lei (art. 225, §1º, III).',
        'Tríplice responsabilidade: quem causa dano ambiental, pessoa física ou jurídica, pode responder ao mesmo tempo nas esferas penal, administrativa e civil. Uma não exclui a outra. A CF admite expressamente crime praticado por pessoa jurídica (art. 225, §3º; Lei 9.605/98). O STF entende que a empresa pode ser processada criminalmente mesmo sem a pessoa física responsável ser processada junto.',
        'Reparação civil: na esfera civil a responsabilidade por dano ambiental é objetiva, ou seja, não depende de culpa (art. 14, §1º, da Lei 6.938/81). O STF fixou que a pretensão de reparação civil do dano ambiental é imprescritível (Tema 999). Já a multa administrativa e a pena criminal prescrevem normalmente.',
        'Mineração: quem explora recursos minerais é obrigado a recuperar o meio ambiente degradado, segundo a solução técnica exigida pelo órgão público competente (art. 225, §2º).',
        'Patrimônio nacional: a Floresta Amazônica brasileira, a Mata Atlântica, a Serra do Mar, o Pantanal Mato-Grossense e a Zona Costeira são "patrimônio nacional". Atenção: isso NÃO os transforma em bens da União. Significa que seu uso deve seguir a lei e preservar o ambiente (art. 225, §4º). Cerrado e Caatinga não estão nessa lista.',
        'Usinas nucleares e terras devolutas: usinas que operam com reator nuclear precisam ter sua localização definida em lei federal, sem a qual não podem ser instaladas (art. 225, §6º). As terras devolutas necessárias à proteção dos ecossistemas naturais são indisponíveis (art. 225, §5º).',
        'Vaquejada e crueldade com animais: a CF proíbe práticas que submetam animais a crueldade (art. 225, §1º, VII). Depois que o STF derrubou a lei da vaquejada (ADI 4983), veio a EC 96/2017. Ela diz que não são cruéis as práticas desportivas com animais que sejam manifestações culturais registradas como patrimônio cultural, desde que regulamentadas por lei que assegure o bem-estar dos animais (art. 225, §7º).',
        'Competências: proteger o meio ambiente e combater a poluição é competência administrativa comum de União, Estados, DF e Municípios (art. 23, VI e VII). Legislar sobre florestas, caça, pesca, fauna, proteção do meio ambiente e responsabilidade por dano ambiental é competência concorrente de União, Estados e DF (art. 24, VI e VIII). O Município pode legislar sobre meio ambiente no interesse local, em harmonia com as normas da União e do Estado (art. 30, I e II; STF, Tema 145).',
        'Exemplo: a mineradora Pedra Alta abriu uma cava sem licença e destruiu nascentes. Ela pode receber multa do órgão ambiental, responder a ação penal como pessoa jurídica e ser condenada a reparar o dano. A ação de reparação pode ser proposta mesmo décadas depois, porque é imprescritível. E ainda tem o dever de recuperar a área minerada.',
        'Cuidado (pegadinha): "patrimônio nacional" não é "bem da União"; criar unidade de conservação pode ser por decreto, mas reduzir exige lei; a reparação civil é imprescritível, mas a multa não; a pessoa jurídica pode cometer crime ambiental.',
        'Como a FGV cobra: casos com empresa poluidora perguntando sobre as três esferas de responsabilidade; decreto que reduz área de parque (inconstitucional); exigência do EIA prévio e público; vaquejada após a EC 96/2017; e a lista dos biomas que são patrimônio nacional.',
        'Resumo para revisar: bem de uso comum do povo, dever de todos e do Estado; EIA prévio e público para significativa degradação; criar espaço protegido por qualquer ato, alterar ou suprimir só por lei; responsabilidade penal, administrativa e civil, inclusive da pessoa jurídica; reparação civil imprescritível (Tema 999).'
      ],
      cai: [
        'Empresa poluidora: pode responder ao mesmo tempo nas esferas penal, administrativa e civil, inclusive criminalmente como pessoa jurídica (art. 225, §3º).',
        'Decreto que reduz ou extingue unidade de conservação: inconstitucional, pois só a lei pode alterar ou suprimir espaço protegido (art. 225, §1º, III).',
        'Lista do art. 225, §4º: Amazônia, Mata Atlântica, Serra do Mar, Pantanal e Zona Costeira são patrimônio nacional, e não bens da União.',
        'Imprescritibilidade da reparação civil do dano ambiental (Tema 999 do STF).',
        'Vaquejada e EC 96/2017: práticas culturais registradas e regulamentadas por lei não são consideradas cruéis (art. 225, §7º).'
      ],
      macetes: [
        'Espaço protegido: "cria por qualquer ato, mexe só por lei".',
        'Patrimônio nacional = "A Mata Serra o Pantanal na Costa": Amazônia, Mata Atlântica, Serra do Mar, Pantanal, Zona Costeira (sem Cerrado e sem Caatinga).',
        'Responsabilidade tripla e independente: "PAC" (Penal, Administrativa, Civil).',
        'EIA: "Prévio e Público" (dois Ps).'
      ],
      video: 'meio ambiente na Constituição art 225 OAB' }
  ]);
})();
