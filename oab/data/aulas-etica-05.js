/* Aulas adicionais – lote etica-05 (Direitos e prerrogativas: direitos da advogada gestante, lactante, adotante e que der à luz). */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);

  add('etica', [
    { id: 'et-advogada', titulo: 'Direitos da advogada gestante, lactante, adotante e que der à luz', incidencia: 'media',
      aula: [
        'Onde está: art. 7º-A do Estatuto da Advocacia (Lei 8.906/94), incluído pela Lei 13.363/2016, que também alterou o CPC (art. 313, IX e X, e §§ 6º e 7º). São direitos próprios da advogada, somados às prerrogativas gerais do art. 7º. A lei trabalha com quatro situações (gestante, lactante, adotante e "que der à luz") e cada direito vale só para algumas delas. A prova se resume a saber QUEM tem O QUÊ e POR QUANTO TEMPO.',
        'Gestante (art. 7º-A, I): dois direitos exclusivos: (a) entrar nos tribunais sem ser submetida a detectores de metais e aparelhos de raios X; (b) reserva de vaga nas garagens dos fóruns dos tribunais. Valem enquanto durar o estado gravídico (§ 1º): nasceu o bebê, acabam, mesmo que a advogada passe a amamentar.',
        'Creche (art. 7º-A, II): a advogada lactante, adotante ou que der à luz tem acesso a creche, onde houver, ou a local adequado ao atendimento das necessidades do bebê. A gestante NÃO está aqui, porque ainda não há bebê a cuidar. O fórum não é obrigado a ter creche: se não houver, basta um local adequado (para amamentar, trocar, acalmar o bebê).',
        'Preferência (art. 7º-A, III): é o único direito comum às quatro situações. Gestante, lactante, adotante ou que der à luz tem preferência na ordem das sustentações orais e das audiências a serem realizadas a cada dia, mediante comprovação de sua condição (atestado, certidão de nascimento, termo de adoção). Sem comprovar, não há preferência automática.',
        'Suspensão dos prazos (art. 7º-A, IV): só para a advogada adotante ou que der à luz, com dois requisitos cumulativos: (1) ser a ÚNICA patrona da causa; (2) notificar o cliente POR ESCRITO. Se houver outro advogado constituído nos autos, ele conduz o processo e não há suspensão. A gestante não tem esse direito, nem a lactante pelo simples fato de amamentar: a suspensão nasce com o parto ou com a adoção.',
        'Prazos (§§ 1º a 3º): gestante e lactante, enquanto durar a gravidez ou a amamentação, sem número fixo. Adotante e que der à luz: creche e preferência (incisos II e III) pelo prazo do art. 392 da CLT, ou seja, 120 dias; suspensão dos prazos (inciso IV) pelo prazo do art. 313, § 6º, do CPC, ou seja, 30 dias. Não inverta: 120 dias NÃO é prazo de suspensão processual.',
        'Suspensão no CPC (art. 313, IX e § 6º): o processo fica suspenso por 30 dias contados da data do parto ou da concessão da adoção, mediante apresentação da certidão de nascimento (ou documento similar que comprove o parto) ou do termo judicial que concedeu a adoção, desde que haja notificação ao cliente. O termo inicial é o parto ou a adoção, e não a data do pedido ou da juntada nos autos. Durante a suspensão, é vedado praticar atos processuais, mas o juiz pode determinar atos urgentes para evitar dano irreparável (art. 314 do CPC).',
        'Advogado pai (só no CPC): o art. 7º-A fala apenas da advogada. O advogado que se torna pai, pelo nascimento ou pela adoção, tem só a suspensão do art. 313, X e § 7º, do CPC: 8 dias contados do parto ou da concessão da adoção, se for o único patrono da causa, com certidão ou termo de adoção e notificação ao cliente. Não tem preferência na pauta, creche, dispensa de detector nem vaga na garagem.',
        'Somando condições: a advogada que deu à luz e amamenta tem creche e preferência por 120 dias como "que der à luz" e, depois disso, continua com esses dois direitos enquanto amamentar, agora como lactante (§ 1º). Já a dispensa do detector de metais e a vaga na garagem terminam com o parto, porque são exclusivas da gestante.',
        'Exemplo: Bianca, grávida de 7 meses, vai ao Tribunal sustentar oralmente: entra sem passar pelo detector de metais, estaciona na vaga reservada e, comprovando a gravidez, pede preferência na pauta. Dois meses depois nasce Davi. Bianca é a única advogada de um cliente, avisa-o por escrito e junta a certidão de nascimento: o processo fica suspenso por 30 dias contados do parto. Nos 120 dias após o parto, tem preferência nas audiências e acesso à creche do fórum (ou a local adequado); se continuar amamentando, mantém esses dois direitos como lactante.',
        'Como a FGV cobra: descreve uma advogada em uma das quatro situações e pergunta qual direito ela tem. As alternativas erradas trocam os titulares (detector de metais para a lactante, suspensão para a gestante), trocam os prazos (suspensão de 120 dias, direitos da gestante "até 120 dias após o parto") ou somem com os requisitos (única patrona, notificação escrita ao cliente, comprovação da condição). Também aparece o advogado pai, com os 8 dias do CPC.'
      ],
      cai: [
        'Quem tem cada direito: detector de metais e vaga na garagem só para a gestante; creche para lactante, adotante e que der à luz; preferência nas sustentações orais e audiências para as quatro, mediante comprovação; suspensão de prazos só para adotante e que der à luz (art. 7º-A, I a IV).',
        'Duração: gestante e lactante enquanto durar a condição (§ 1º); adotante e que der à luz, 120 dias para creche e preferência (§ 2º, art. 392 da CLT) e 30 dias para a suspensão (§ 3º, art. 313, § 6º, do CPC).',
        'Requisitos da suspensão: única patrona da causa + notificação por escrito ao cliente + certidão de nascimento ou termo de adoção; prazo contado do parto ou da concessão da adoção, e não da juntada.',
        'Advogado que se torna pai (inclusive por adoção): suspensão por 8 dias, prevista só no CPC (art. 313, X e § 7º), também exigindo ser o único patrono e notificar o cliente.',
        'Lactante depois dos 120 dias: continua com creche e preferência enquanto amamentar (§ 1º), mas não tem detector, garagem nem suspensão.'
      ],
      macetes: [
        'BARRIGA, COLO e TODAS: barriga (gestante) = detector de metais e garagem; bebê no colo (lactante, adotante, que deu à luz) = creche; todas as quatro = preferência na pauta.',
        'Suspensão só vem com o BEBÊ NA CERTIDÃO (parto ou adoção): gestante e lactante, só por essas condições, não suspendem prazo.',
        'Números 30 – 8 – 120: mãe suspende 30 dias, pai suspende 8 dias, creche e preferência da adotante e da que deu à luz duram 120 dias (o mesmo número da licença-maternidade da CLT).',
        'Suspensão = ÚNICA + ESCRITA: única patrona da causa e notificação por escrito ao cliente.'
      ],
      video: 'OAB ética art 7-A Estatuto direitos da advogada gestante lactante adotante suspensão de prazos 30 dias' }
  ]);
})();
