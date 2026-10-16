/* Questões – lote processopenal-04: Jurisdição e competência. */
window.QUESTOES.push(

  // === pp-comp-lugar ===
  { id: 'pp381', materia: 'processopenal', topico: 'pp-comp-lugar',
    enunciado: 'Durante uma briga na cidade de Alfa, Jonas desfere golpes de faca em Rodolfo. Socorrido, Rodolfo é transferido para um hospital na cidade de Beta, onde falece dias depois. Considerando as regras de competência territorial do Código de Processo Penal, assinale a afirmativa correta.',
    alt: [
      ['A competência é da comarca de Alfa, pois ali foi praticada a conduta.', false, 'Errada. A competência interna no CPP segue a teoria do resultado; olha-se o lugar da consumação, não o da conduta (art. 70, caput).'],
      ['A competência é da comarca de Beta, onde o crime se consumou com a morte da vítima.', true, 'Correta. Pela teoria do resultado adotada pelo art. 70, caput, no crime consumado a competência é do lugar em que a infração se consumou; a morte ocorreu em Beta.'],
      ['A competência firma-se pela prevenção entre Alfa e Beta, por envolver duas comarcas.', false, 'Errada. A prevenção só resolve quando o lugar é incerto por estar na divisa (art. 70, §3º); aqui a consumação ocorreu claramente em Beta.'],
      ['A competência é da comarca do domicílio do réu, por haver dúvida sobre o lugar do crime.', false, 'Errada. O domicílio do réu é critério subsidiário, usado quando o lugar da infração é desconhecido (art. 72); aqui ele é conhecido.']
    ] },

  { id: 'pp382', materia: 'processopenal', topico: 'pp-comp-lugar',
    enunciado: 'Dona Celina, residente em Curitiba, recebe uma ligação de um golpista que, passando-se por gerente de banco, a convence a realizar uma transferência via PIX. O criminoso atua de local desconhecido. Sobre a competência para o estelionato, assinale a afirmativa correta.',
    alt: [
      ['A competência é do lugar onde se encontra o autor do golpe, a ser apurado na investigação.', false, 'Errada. A lei não fixa a competência pelo lugar do autor; no estelionato por transferência, o foro é o do domicílio da vítima (art. 70, §4º).'],
      ['A competência é do domicílio da vítima, ou seja, de Curitiba.', true, 'Correta. No estelionato praticado mediante depósito, transferência de valores ou cheque sem fundos, a competência é do domicílio da vítima (art. 70, §4º, incluído pela Lei 14.155/21).'],
      ['A competência é do lugar da agência bancária em que a conta de destino foi aberta.', false, 'Errada. A regra do art. 70, §4º, privilegia o domicílio da vítima, e não a localização da conta de destino ou da agência.'],
      ['A competência firma-se pela prevenção, por ser impossível identificar o lugar do crime.', false, 'Errada. A lei resolveu expressamente a questão: domicílio da vítima (art. 70, §4º); não se recorre à prevenção.']
    ] },

  { id: 'pp383', materia: 'processopenal', topico: 'pp-comp-lugar',
    enunciado: 'Henrique pretende promover ação penal privada por crime de injúria contra seu antigo sócio. O crime ocorreu na comarca onde ambos trabalham, mas o réu tem residência em outra comarca. Sobre a escolha do foro, assinale a afirmativa correta.',
    alt: [
      ['Henrique está obrigado a propor a queixa no lugar da infração, por ser critério preferencial e inafastável.', false, 'Errada. Na ação penal privada exclusiva, a lei abre uma faculdade ao querelante, afastando a obrigatoriedade do lugar da infração (art. 73).'],
      ['Henrique poderá preferir o foro do domicílio do réu, ainda que conhecido o lugar da infração.', true, 'Correta. Nos crimes de ação penal exclusivamente privada, o querelante poderá preferir o foro de domicílio ou residência do réu, ainda quando conhecido o lugar da infração (art. 73).'],
      ['A competência será sempre do domicílio do querelante, por ser ele a vítima.', false, 'Errada. A lei permite escolher o domicílio do réu, e não o do querelante (art. 73); a regra geral continua sendo o lugar da infração (art. 70).'],
      ['A opção pelo domicílio do réu só é possível na ação penal pública condicionada.', false, 'Errada. A faculdade do art. 73 é própria da ação penal exclusivamente privada, não da ação pública condicionada.']
    ] },

  // === pp-comp-materia ===
  { id: 'pp384', materia: 'processopenal', topico: 'pp-comp-materia',
    enunciado: 'Investiga-se o furto de valores praticado contra uma agência do Banco do Brasil. Discute-se perante qual Justiça deve tramitar o processo. Assinale a afirmativa correta.',
    alt: [
      ['A competência é da Justiça Federal, pois o Banco do Brasil integra a Administração federal.', false, 'Errada. O Banco do Brasil é sociedade de economia mista; crimes contra ela são da Justiça Estadual (Súmula 42 do STJ).'],
      ['A competência é da Justiça Estadual, por se tratar de crime contra sociedade de economia mista.', true, 'Correta. Compete à Justiça Estadual processar crimes praticados em detrimento de sociedade de economia mista; o art. 109, IV, da CF alcança a União, autarquias e empresas públicas, não as sociedades de economia mista (Súmula 42 do STJ).'],
      ['A competência é da Justiça Federal, pois toda instituição financeira federal atrai esse foro.', false, 'Errada. Nem toda instituição ligada à União atrai a Justiça Federal; a sociedade de economia mista é julgada na Justiça Estadual (Súmula 42 do STJ).'],
      ['A competência é da Justiça Federal apenas se o prejuízo for elevado.', false, 'Errada. O valor do prejuízo não altera a competência de Justiça; crime contra sociedade de economia mista é da Justiça Estadual (Súmula 42 do STJ).']
    ] },

  { id: 'pp385', materia: 'processopenal', topico: 'pp-comp-materia',
    enunciado: 'Laura é flagrada ingressando no Brasil, pela fronteira com o Paraguai, transportando cocaína destinada à revenda no território nacional. Sobre a competência para o processo, assinale a afirmativa correta.',
    alt: [
      ['A competência é da Justiça Estadual, pois o tráfico é crime comum, independentemente da origem da droga.', false, 'Errada. Havendo transnacionalidade, o tráfico previsto em convenção internacional é de competência da Justiça Federal (art. 109, V, da CF).'],
      ['A competência é da Justiça Federal, em razão da transnacionalidade do tráfico.', true, 'Correta. O tráfico internacional de drogas, previsto em convenção, com execução que ultrapassa as fronteiras, é de competência da Justiça Federal (art. 109, V, da CF).'],
      ['A competência é da Justiça Militar, por envolver a vigilância de fronteiras.', false, 'Errada. A Justiça Militar julga crimes militares definidos no Código Penal Militar; o tráfico internacional é da Justiça Federal (art. 109, V, da CF).'],
      ['A competência é da Justiça Eleitoral, por envolver crime previsto em tratado.', false, 'Errada. A Justiça Eleitoral julga crimes eleitorais e conexos; o tráfico internacional é da Justiça Federal (art. 109, V, da CF).']
    ] },

  { id: 'pp386', materia: 'processopenal', topico: 'pp-comp-materia',
    enunciado: 'Sargento da Polícia Militar, em serviço de patrulhamento, efetua disparos com a intenção de matar e provoca a morte de um civil durante uma abordagem. Sobre a competência para o julgamento, assinale a afirmativa correta.',
    alt: [
      ['A competência é da Justiça Militar Estadual, por se tratar de militar em serviço.', false, 'Errada. Ainda que o agente seja militar em serviço, o crime doloso contra a vida de civil é julgado pela Justiça comum (art. 125, §4º, da CF).'],
      ['A competência é do Tribunal do Júri da Justiça comum, por ser crime doloso contra a vida de civil.', true, 'Correta. O crime doloso contra a vida de civil praticado por militar estadual é julgado pelo Tribunal do Júri, ressalvada a competência da Justiça Militar quanto aos demais crimes militares (art. 125, §4º, da CF).'],
      ['A competência é da Justiça Federal, por envolver agente de segurança pública.', false, 'Errada. Ser agente de segurança não atrai a Justiça Federal; crime doloso contra a vida de civil por militar estadual vai a júri (art. 125, §4º, da CF).'],
      ['A competência é do juiz singular da Justiça comum, afastado o júri por ser agente público.', false, 'Errada. O crime doloso contra a vida é julgado pelo Tribunal do Júri (art. 5º, XXXVIII, da CF, e art. 125, §4º), e não pelo juiz singular.']
    ] },

  // === pp-conexao ===
  { id: 'pp387', materia: 'processopenal', topico: 'pp-conexao',
    enunciado: 'Depois de cometer um roubo, Fabrício mata a única testemunha do crime para garantir sua impunidade. Sobre o vínculo entre as infrações, assinale a afirmativa correta.',
    alt: [
      ['Há continência por cumulação subjetiva, pois as duas infrações recaem sobre Fabrício.', false, 'Errada. A continência subjetiva ocorre quando várias pessoas respondem pela mesma infração (art. 77, I); aqui há infrações distintas ligadas pela finalidade.'],
      ['Há conexão objetiva, pois uma infração foi praticada para assegurar a impunidade da outra.', true, 'Correta. Há conexão objetiva ou lógica quando uma infração é cometida para facilitar, ocultar, conseguir impunidade ou vantagem em relação a outra (art. 76, II).'],
      ['Há conexão intersubjetiva, por terem as infrações sido praticadas por várias pessoas reunidas.', false, 'Errada. A conexão intersubjetiva pressupõe pluralidade de pessoas (art. 76, I); aqui o autor é o mesmo, e o liame é a finalidade.'],
      ['Não há conexão, pois os crimes têm bens jurídicos diferentes.', false, 'Errada. A diversidade de bens jurídicos não afasta a conexão; o vínculo finalístico configura conexão objetiva (art. 76, II).']
    ] },

  { id: 'pp388', materia: 'processopenal', topico: 'pp-conexao',
    enunciado: 'Verifica-se a conexão entre um crime de contrabando, de competência da Justiça Federal, e um crime de ameaça, de competência da Justiça Estadual. Sobre o juízo competente para julgar os dois crimes reunidos, assinale a afirmativa correta.',
    alt: [
      ['Prevalece o juízo do lugar da infração de pena mais grave, conforme o art. 78, II, a, do CPP.', false, 'Errada. No concurso entre crimes federal e estadual não se aplica a regra da pena mais grave; prevalece a Justiça Federal (Súmula 122 do STJ).'],
      ['Compete à Justiça Federal julgar os dois crimes conexos.', true, 'Correta. Compete à Justiça Federal processar e julgar os crimes conexos de competência federal e estadual; a federal atrai a estadual (Súmula 122 do STJ).'],
      ['Cada Justiça julga o seu crime, pois conexão entre Justiças diversas impõe a separação obrigatória.', false, 'Errada. A separação obrigatória do art. 79 refere-se à Justiça Militar e à da Infância; entre federal e estadual há reunião na Justiça Federal (Súmula 122 do STJ).'],
      ['Compete à Justiça Estadual, por ser a Justiça comum residual e mais ampla.', false, 'Errada. Havendo conexão, a Justiça Federal atrai o crime estadual (Súmula 122 do STJ); não é a Estadual que prevalece.']
    ] },

  { id: 'pp389', materia: 'processopenal', topico: 'pp-conexao',
    enunciado: 'Quatro pessoas, previamente combinadas, assaltam juntas a mesma residência e são denunciadas pelo mesmo roubo. Sobre o instituto que determina o julgamento conjunto, assinale a afirmativa correta.',
    alt: [
      ['Trata-se de conexão instrumental, pois a prova de um fato influi na prova do outro.', false, 'Errada. A conexão instrumental liga infrações distintas pela prova comum (art. 76, III); aqui há uma única infração imputada a várias pessoas.'],
      ['Trata-se de continência por cumulação subjetiva, pois várias pessoas respondem pela mesma infração.', true, 'Correta. Há continência por cumulação subjetiva quando duas ou mais pessoas são acusadas pela mesma infração, em concurso de agentes (art. 77, I).'],
      ['Trata-se de conexão objetiva, pois um crime foi praticado para ocultar o outro.', false, 'Errada. Há um único crime praticado em concurso; não há infração cometida para ocultar outra (art. 76, II não se aplica).'],
      ['Trata-se de continência por cumulação objetiva, hipótese de concurso formal.', false, 'Errada. A continência objetiva abrange concurso formal e os casos de aberratio (art. 77, II); aqui há uma só conduta de roubo imputada a vários agentes, o que é continência subjetiva (art. 77, I).']
    ] },

  // === pp-prerrogativa ===
  { id: 'pp390', materia: 'processopenal', topico: 'pp-prerrogativa',
    enunciado: 'Um Senador da República é acusado de ter recebido vantagem indevida para favorecer determinada empresa na votação de um projeto de lei. Sobre a competência para o julgamento, assinale a afirmativa correta.',
    alt: [
      ['A competência é do juiz de primeiro grau, pois o foro por prerrogativa foi extinto pela AP 937.', false, 'Errada. A AP 937 restringiu, mas não extinguiu o foro; ele permanece para crimes cometidos no exercício do cargo e em razão dele.'],
      ['A competência é do Supremo Tribunal Federal, por ser crime cometido no exercício do mandato e em razão dele.', true, 'Correta. Membros do Congresso Nacional são julgados pelo STF nos crimes comuns (art. 102, I, b, da CF); após a AP 937, o foro se aplica justamente aos crimes cometidos no cargo e em razão das funções.'],
      ['A competência é do Superior Tribunal de Justiça, que julga os parlamentares federais.', false, 'Errada. O STJ julga Governadores e certos magistrados (art. 105, I, a); parlamentares federais são julgados pelo STF (art. 102, I, b).'],
      ['A competência é do Tribunal de Justiça do Estado em que o Senador foi eleito.', false, 'Errada. O foro de Senador é o STF (art. 102, I, b, da CF), e não um Tribunal de Justiça estadual.']
    ] },

  { id: 'pp391', materia: 'processopenal', topico: 'pp-prerrogativa',
    enunciado: 'Um Deputado Federal, dirigindo em dia de folga e sem qualquer relação com o mandato, provoca acidente de trânsito e responde por lesão corporal culposa. Sobre a competência, à luz do entendimento do STF na AP 937, assinale a afirmativa correta.',
    alt: [
      ['A competência é do STF, pois todo crime de parlamentar federal atrai o foro por prerrogativa.', false, 'Errada. Após a AP 937, o foro só abrange crimes cometidos no exercício do cargo e em razão dele; não é qualquer crime do parlamentar.'],
      ['A competência é do juiz de primeiro grau, pois o crime não tem relação com o exercício do mandato.', true, 'Correta. Segundo a AP 937 do STF, o foro por prerrogativa aplica-se apenas a crimes praticados durante o exercício do cargo e em razão das funções; crime estranho ao mandato é julgado no primeiro grau.'],
      ['A competência é do Tribunal Regional Federal da respectiva região.', false, 'Errada. O crime, sem relação com o cargo, não atrai foro em tribunal; é julgado no primeiro grau (AP 937).'],
      ['A competência é do STF apenas durante o mandato, deslocando-se ao primeiro grau após o término.', false, 'Errada. Como o crime não guarda relação com a função, não há foro em momento algum; a competência é do primeiro grau desde já (AP 937).']
    ] },

  { id: 'pp392', materia: 'processopenal', topico: 'pp-prerrogativa',
    enunciado: 'Um Prefeito é investigado por desviar verbas repassadas pela União por meio de convênio federal, sujeitas a prestação de contas ao ente federal. Sobre a competência para o julgamento, assinale a afirmativa correta.',
    alt: [
      ['A competência é do Tribunal de Justiça, pois o prefeito é sempre julgado por esse tribunal.', false, 'Errada. O prefeito é julgado pelo TJ nos crimes de competência estadual; quando o crime é federal, o foro é o TRF (Súmula 702 do STF).'],
      ['A competência é do Tribunal Regional Federal, pois o crime atinge interesse da União.', true, 'Correta. Prefeito responde perante o tribunal correspondente à natureza da infração; sendo o crime de competência federal, o julgamento cabe ao TRF (Súmula 702 do STF).'],
      ['A competência é do juiz federal de primeiro grau, afastado o foro por prerrogativa.', false, 'Errada. O prefeito tem foro por prerrogativa; sendo o crime federal, julga o TRF, e não o juiz de primeiro grau (Súmula 702 do STF).'],
      ['A competência é do Superior Tribunal de Justiça, que julga os chefes do Executivo municipal.', false, 'Errada. O STJ julga Governadores (art. 105, I, a); o prefeito é julgado por TJ, TRF ou TRE conforme a natureza do crime (Súmula 702 do STF).']
    ] },

  // === pp-excecoes ===
  { id: 'pp393', materia: 'processopenal', topico: 'pp-excecoes',
    enunciado: 'A defesa de Rogério descobre que o juiz da causa já havia atuado como testemunha no mesmo processo. Sobre a situação, assinale a afirmativa correta.',
    alt: [
      ['Trata-se de suspeição, defeito subjetivo que preclui se não arguido no momento próprio.', false, 'Errada. Ter funcionado como testemunha no processo é hipótese de impedimento (art. 252), de natureza objetiva, e não de suspeição.'],
      ['Trata-se de impedimento, que gera nulidade absoluta e pode ser reconhecido a qualquer tempo.', true, 'Correta. O juiz que funcionou como testemunha no processo está impedido (art. 252, II); o impedimento é objetivo, gera nulidade absoluta e não se sujeita à preclusão.'],
      ['Trata-se de mera irregularidade, pois a atuação como testemunha não afeta a imparcialidade.', false, 'Errada. A hipótese é causa legal de impedimento (art. 252, II), que compromete a validade dos atos decisórios do juiz.'],
      ['Trata-se de incompetência de juízo, a ser alegada por exceção no prazo de defesa.', false, 'Errada. O defeito não é de competência, mas de impedimento do juiz (art. 252, II).']
    ] },

  { id: 'pp394', materia: 'processopenal', topico: 'pp-excecoes',
    enunciado: 'Mariana é denunciada perante vara de comarca diversa daquela do lugar da infração, hipótese de incompetência relativa (territorial). A defesa, porém, deixa de opor a exceção no prazo da resposta. Sobre o desdobramento, assinale a afirmativa correta.',
    alt: [
      ['O juiz deve declarar de ofício a incompetência relativa e remeter os autos ao juízo correto.', false, 'Errada. A incompetência relativa não pode ser declarada de ofício pelo juiz (Súmula 33 do STJ).'],
      ['A incompetência relativa se prorroga, tornando competente o juízo que antes não o era.', true, 'Correta. Não arguida no momento oportuno, a incompetência relativa (territorial) se prorroga e o juízo, antes incompetente, torna-se competente (Súmula 33 do STJ).'],
      ['Todos os atos do processo serão nulos, inclusive os instrutórios já praticados.', false, 'Errada. Ainda que reconhecida a incompetência, anulam-se apenas os atos decisórios, podendo os instrutórios ser ratificados (art. 567); e, no caso, a relativa sequer se declara de ofício.'],
      ['A ação penal deve ser extinta por ilegitimidade de parte decorrente do foro errado.', false, 'Errada. Foro errado é questão de competência, não de legitimidade; e a incompetência relativa não arguida prorroga-se (Súmula 33 do STJ).']
    ] },

  { id: 'pp395', materia: 'processopenal', topico: 'pp-excecoes',
    enunciado: 'Dois juízos de comarcas distintas recusam-se a processar o mesmo caso, cada um afirmando que o competente é o outro. Sobre a situação, assinale a afirmativa correta.',
    alt: [
      ['Trata-se de conflito positivo de competência, pois ambos reivindicam o processo.', false, 'Errada. No conflito positivo os juízos se declaram competentes; aqui ambos se declaram incompetentes, o que é conflito negativo (art. 114).'],
      ['Trata-se de conflito negativo de competência, a ser dirimido pelo tribunal competente.', true, 'Correta. Quando dois ou mais juízos se consideram incompetentes para o mesmo caso, há conflito negativo de competência, suscitável pela parte, pelo MP ou pelos próprios juízos e resolvido pelo tribunal competente (arts. 113 a 117).'],
      ['Trata-se de conflito de atribuições, a ser resolvido pelo Conselho Nacional do Ministério Público.', false, 'Errada. Conflito de atribuições ocorre entre membros do Ministério Público; entre juízos, há conflito de competência (arts. 113 a 117).'],
      ['A questão resolve-se automaticamente pela prevenção, sem necessidade de suscitar conflito.', false, 'Errada. Havendo divergência expressa entre os juízos, cabe suscitar o conflito de competência, que será dirimido pelo tribunal (arts. 113 a 117).']
    ] }

);
