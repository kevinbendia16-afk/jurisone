/* Questoes – Tributario lote 08 (Impostos em especie). */
window.QUESTOES.push(
{ id: 'tb460', materia: 'tributario', topico: 'impostos',
  enunciado: 'O Municipio de Palmares aprovou lei complementar municipal criando imposto sobre grandes movimentacoes financeiras, com fato gerador e base de calculo distintos dos impostos ja existentes. A medida e constitucional?',
  alt: [
    ['Sim, pois a lei complementar garante a legalidade da criacao', false, 'Errada. A competencia residual para criar impostos novos e exclusiva da Uniao (art. 154, I, da CF). Municipios e Estados nao podem criar impostos fora de sua competencia enumerada.'],
    ['Nao, pois somente a Uniao tem competencia residual para instituir novos impostos, mediante lei complementar federal', true, 'Correta. A competencia residual tributaria e privativa da Uniao (art. 154, I, da CF), exigindo lei complementar federal, nao cumulatividade e fato gerador e base de calculo diferentes dos impostos existentes.'],
    ['Sim, desde que respeitados os principios da anterioridade e da noventena', false, 'Errada. Respeitar anterioridade e noventena nao supre a falta de competencia. Municipio simplesmente nao pode criar imposto novo.'],
    ['Nao, pois a criacao de impostos depende de emenda constitucional', false, 'Errada. A Uniao pode criar impostos novos por lei complementar, sem necessidade de emenda constitucional (art. 154, I).']
  ] },

{ id: 'tb461', materia: 'tributario', topico: 'impostos',
  enunciado: 'O Estado do Amapa arrecadou R$ 100 milhoes de ICMS em determinado mes. Qual o valor minimo que deve ser repassado aos Municipios amapaenses?',
  alt: [
    ['R$ 50 milhoes', false, 'Errada. 50% e o percentual de reparticao do IPVA, nao do ICMS.'],
    ['R$ 25 milhoes', true, 'Correta. O art. 158, IV, da CF determina que 25% da arrecadacao do ICMS estadual pertence aos Municipios. 25% de R$ 100 milhoes = R$ 25 milhoes.'],
    ['R$ 21,5 milhoes', false, 'Errada. 21,5% e o percentual do FPE (Fundo de Participacao dos Estados), que incide sobre IR e IPI federais, nao sobre ICMS.'],
    ['R$ 10 milhoes', false, 'Errada. Nao existe percentual de 10% de reparticao do ICMS para Municipios. O correto e 25%.']
  ] },

{ id: 'tb462', materia: 'tributario', topico: 'impostos',
  enunciado: 'Helena, servidora publica do Municipio de Goiania, tem IR retido na fonte sobre sua remuneracao. Para qual ente federativo a receita do IR retido e destinada?',
  alt: [
    ['A Uniao, titular da competencia para instituir o IR', false, 'Errada. Embora a Uniao seja competente para instituir o IR, o art. 158, I, da CF atribui aos Municipios o produto do IR retido na fonte sobre rendimentos pagos por eles.'],
    ['Ao Estado de Goias, por ser o ente de maior hierarquia na regiao', false, 'Errada. Nao ha essa regra de hierarquia. O IR retido por Municipio fica com o Municipio, nao com o Estado.'],
    ['Ao Municipio de Goiania, que efetua o pagamento', true, 'Correta. O art. 158, I, da CF preve que pertence aos Municipios o produto da arrecadacao do IR retido na fonte sobre rendimentos pagos por eles, suas autarquias e fundacoes.'],
    ['Metade para a Uniao e metade para o Municipio', false, 'Errada. A totalidade do IR retido na fonte por Municipios fica com o Municipio, sem divisao com a Uniao.']
  ] },

{ id: 'tb463', materia: 'tributario', topico: 'tb-impostos-uniao',
  enunciado: 'Em dezembro de 2026, o Congresso Nacional aprovou lei ordinaria majorando a aliquota do Imposto sobre Produtos Industrializados (IPI) sobre bebidas alcoolicas, com vigencia imediata. A cobranca pode iniciar em:',
  alt: [
    ['Janeiro de 2027, respeitada a anterioridade anual', false, 'Errada. O IPI nao esta sujeito a anterioridade anual (art. 150, §1, da CF). Ele deve respeitar apenas a noventena.'],
    ['Marco de 2027, apos o decurso de 90 dias da publicacao', true, 'Correta. O IPI esta excepcionado da anterioridade anual, mas deve respeitar a anterioridade nonagesimal (noventena). Lei publicada em dezembro de 2026 so pode ser cobrada 90 dias apos, ou seja, em marco de 2027 (art. 150, III, c, e §1).'],
    ['Imediatamente, pois o IPI e extrafiscal e nao obedece a nenhuma anterioridade', false, 'Errada. O IPI respeita a noventena (anterioridade nonagesimal). Impostos que nao respeitam nenhuma anterioridade sao o II, o IE e o IOF.'],
    ['Janeiro de 2028, respeitadas tanto a anterioridade anual quanto a nonagesimal', false, 'Errada. O IPI so precisa respeitar a noventena, nao a anterioridade anual. Exigir ambas atrasaria desnecessariamente.']
  ] },

{ id: 'tb464', materia: 'tributario', topico: 'tb-impostos-uniao',
  enunciado: 'O governo federal, por decreto presidencial, majorou a aliquota do Imposto de Importacao sobre automoveis de 35% para 55%, com efeitos imediatos. A medida e constitucional?',
  alt: [
    ['Nao, pois a majoracao de tributo exige lei em sentido formal', false, 'Errada. O II e uma das excecoes ao principio da legalidade plena: suas aliquotas podem ser alteradas por decreto do Executivo (art. 153, §1, da CF).'],
    ['Sim, pois o II e excecao a legalidade, anterioridade e noventena', true, 'Correta. O Imposto de Importacao tem funcao extrafiscal e e excecao ao principio da legalidade quanto a aliquotas (art. 153, §1), a anterioridade anual e a noventena (art. 150, §1). A cobranca pode ser imediata.'],
    ['Sim, mas a cobranca so podera ocorrer apos 90 dias do decreto', false, 'Errada. O II nao obedece nem a anterioridade anual nem a noventena. A cobranca e imediata.'],
    ['Nao, pois apenas o IOF pode ter aliquota alterada por decreto', false, 'Errada. Alem do IOF, o II, o IE, o IPI e a CIDE-Combustiveis tambem podem ter aliquotas alteradas por decreto (art. 153, §1, e art. 177, §4, I, b).']
  ] },

{ id: 'tb465', materia: 'tributario', topico: 'tb-impostos-uniao',
  enunciado: 'Rafaela recebeu indenizacao por acidente de trabalho no valor de R$ 200.000 e quer saber se deve pagar Imposto de Renda sobre esse valor. A resposta correta e:',
  alt: [
    ['Sim, pois toda renda e tributada pelo principio da universalidade', false, 'Errada. Embora o IR siga o principio da universalidade, ha isencoes legais. A indenizacao por acidente de trabalho e expressamente isenta.'],
    ['Nao, pois indenizacoes por acidente de trabalho sao isentas de IR', true, 'Correta. A Lei 7.713/88 isenta de IR as indenizacoes por acidente de trabalho (art. 6, IV). Indenizacao nao representa acrescimo patrimonial, e sim reposicao de perda.'],
    ['Sim, mas somente sobre o valor que exceder R$ 100.000', false, 'Errada. Nao existe esse limite. A isencao e integral para indenizacoes por acidente de trabalho.'],
    ['Depende: se Rafaela aplicar o valor, os rendimentos serao tributados, e a indenizacao tambem', false, 'Errada. Os rendimentos da aplicacao podem ser tributados, mas a indenizacao em si e isenta, independentemente de sua destinacao.']
  ] },

{ id: 'tb466', materia: 'tributario', topico: 'tb-icms',
  enunciado: 'Uma distribuidora de combustiveis em Minas Gerais, na qualidade de substituta tributaria, recolheu ICMS-ST calculado sobre preco presumido de R$ 6,50 por litro de gasolina. O preco efetivo de venda ao consumidor nos postos foi de R$ 5,80. O contribuinte substituido pode pedir restituicao da diferenca?',
  alt: [
    ['Nao, pois o fato gerador presumido e definitivo e nao admite restituicao', false, 'Errada. Essa era a posicao anterior, mas o STF a superou no Tema 201.'],
    ['Sim, pois o STF reconheceu o direito a restituicao quando o preco real e inferior ao presumido', true, 'Correta. No Tema 201 (RE 593.849), o STF decidiu que e devida a restituicao da diferenca do ICMS-ST quando a base de calculo efetiva for inferior a presumida (art. 150, §7, da CF).'],
    ['Somente se houver previsao em lei estadual autorizando a restituicao', false, 'Errada. O direito a restituicao decorre diretamente da CF (art. 150, §7) e foi reconhecido pelo STF com repercussao geral, independentemente de lei estadual.'],
    ['Sim, mas limitada a 50% da diferenca, conforme jurisprudencia', false, 'Errada. A restituicao e integral da diferenca entre o ICMS recolhido sobre o preco presumido e o que seria devido sobre o preco real.']
  ] },

{ id: 'tb467', materia: 'tributario', topico: 'tb-icms',
  enunciado: 'O Estado do Parana, sem aprovacao do CONFAZ, concedeu credito presumido de 50% de ICMS para industrias que se instalassem em seu territorio. Uma empresa paranaense beneficiada vendeu mercadorias para contribuinte paulista, que tomou credito integral do ICMS destacado na nota fiscal. O Estado de Sao Paulo glosou o credito. A glosa e valida?',
  alt: [
    ['Nao, pois o contribuinte paulista nao e responsavel pelos atos do Parana', false, 'Errada. Embora o contribuinte paulista nao tenha culpa, o STF reconheceu a validade da glosa (Tema 490), pois o beneficio sem CONFAZ e inconstitucional.'],
    ['Sim, pois beneficio fiscal concedido sem convenio do CONFAZ e inconstitucional, e o Estado de destino pode recusar o credito decorrente', true, 'Correta. A Sumula Vinculante 69 declara inconstitucional beneficio fiscal sem convenio do CONFAZ. O STF, no Tema 490, reconheceu que o Estado de destino pode glosar o credito correspondente.'],
    ['Nao, pois a glosa viola o principio da nao-cumulatividade', false, 'Errada. A nao-cumulatividade pressupoe que o credito seja legitimo. Credito decorrente de beneficio inconstitucional nao goza dessa protecao.'],
    ['Sim, mas somente apos decisao do STF declarando inconstitucional o beneficio especifico', false, 'Errada. A SV 69 ja estabelece como regra geral a inconstitucionalidade de beneficios sem CONFAZ. Nao e necessaria decisao caso a caso.']
  ] },

{ id: 'tb468', materia: 'tributario', topico: 'tb-icms',
  enunciado: 'Uma loja em Sao Paulo vende eletrodomesticos pela internet para consumidor final nao contribuinte do ICMS domiciliado na Bahia. A aliquota interestadual e de 7% e a aliquota interna da Bahia e de 18%. Como se da a tributacao do ICMS?',
  alt: [
    ['SP recolhe 18% integralmente', false, 'Errada. Desde a EC 87/2015, nas vendas interestaduais para consumidor final nao contribuinte, o ICMS e dividido entre o Estado de origem e o de destino.'],
    ['SP recolhe 7% e a Bahia recolhe 11% a titulo de DIFAL', true, 'Correta. Conforme art. 155, §2, VII e VIII, da CF (EC 87/2015), o remetente recolhe pela aliquota interestadual (7% para SP-BA) e o diferencial de aliquotas (18% - 7% = 11%) e devido ao Estado de destino (BA). A LC 190/2022 regulamentou a materia.'],
    ['SP recolhe 7% e nao ha qualquer tributo adicional', false, 'Errada. Essa era a regra antes da EC 87/2015, quando o destino nao recebia nada. Atualmente, o DIFAL e devido ao Estado de destino.'],
    ['A Bahia recolhe 18% integralmente, pois o consumidor e de la', false, 'Errada. A aliquota interestadual (7%) pertence ao Estado de origem (SP). A BA recebe so o DIFAL.']
  ] },

{ id: 'tb469', materia: 'tributario', topico: 'tb-ipva-itcmd',
  enunciado: 'Fabio, residente em Salvador, possui um iate avaliado em R$ 2 milhoes registrado na Capitania dos Portos. O Estado da Bahia pretende cobrar IPVA sobre a embarcacao. A cobranca e constitucional?',
  alt: [
    ['Sim, pois o IPVA incide sobre qualquer veiculo automotor, incluindo embarcacoes', false, 'Errada. O STF decidiu que o IPVA nao incide sobre embarcacoes e aeronaves (RE 134.509 e RE 379.572), pois o imposto sucedeu a Taxa Rodoviaria Unica e a CF/88 nao ampliou o conceito.'],
    ['Nao, pois o STF entende que o IPVA nao incide sobre embarcacoes e aeronaves', true, 'Correta. O STF firmou que o IPVA tem como fato gerador apenas a propriedade de veiculos automotores terrestres, excluindo embarcacoes e aeronaves.'],
    ['Sim, desde que haja lei estadual especifica incluindo embarcacoes', false, 'Errada. A vedacao e constitucional, firmada pelo STF. Nenhuma lei estadual pode ampliar o conceito.'],
    ['Nao, pois embarcacoes estao sujeitas ao IOF, nao ao IPVA', false, 'Errada. O IOF incide sobre operacoes financeiras, nao sobre propriedade de bens. A razao da nao incidencia e outra: o IPVA se restringe a veiculos terrestres.']
  ] },

{ id: 'tb470', materia: 'tributario', topico: 'tb-ipva-itcmd',
  enunciado: 'Dona Marta faleceu em Sao Paulo deixando um apartamento em Belo Horizonte e acoes negociadas na B3. O inventario sera processado em SP. A qual Estado e devido o ITCMD sobre cada bem?',
  alt: [
    ['SP para ambos, pois e o local do inventario', false, 'Errada. Para bens imoveis, o ITCMD e devido ao Estado da situacao do bem (art. 155, §1, I, da CF), nao ao do inventario.'],
    ['MG para o apartamento e SP para as acoes', true, 'Correta. Conforme art. 155, §1, I e II, da CF, o ITCMD sobre imoveis e devido ao Estado onde se situa o bem (MG) e sobre bens moveis e devido ao Estado onde se processa o inventario (SP).'],
    ['MG para ambos, pois o bem de maior valor esta la', false, 'Errada. A competencia segue a natureza do bem: imovel = local do bem; movel = local do inventario. O valor e irrelevante.'],
    ['SP para o apartamento e MG para as acoes', false, 'Errada. Inverte as regras: imovel segue o local do bem (MG), movel segue o inventario (SP).']
  ] },

{ id: 'tb471', materia: 'tributario', topico: 'tb-ipva-itcmd',
  enunciado: 'O Estado de Goias aprovou lei estadual cobrando ITCMD sobre heranca recebida de tio que morava na Italia, sem que exista lei complementar federal regulamentando a materia. A cobranca e valida?',
  alt: [
    ['Sim, pois o ITCMD e de competencia estadual e dispensa lei complementar', false, 'Errada. O art. 155, §1, III, da CF exige lei complementar para regular a competencia quando o de cujus possuia bens ou tinha domicilio no exterior.'],
    ['Nao, pois o STF decidiu que, sem a lei complementar prevista no art. 155, §1, III, da CF, os Estados nao podem cobrar ITCMD sobre herancas do exterior', true, 'Correta. No Tema 825 (RE 851.108), o STF decidiu que a exigencia de LC e inafastavel. Sem ela, a cobranca e inconstitucional. A EC 132/23 alterou a regra, mas depende de regulamentacao.'],
    ['Sim, desde que a aliquota nao ultrapasse 8%', false, 'Errada. O problema nao e a aliquota, mas a falta de lei complementar. Respeitar o teto de 8% nao supre essa exigencia.'],
    ['Sim, pois a EC 132/23 ja autoriza a cobranca independentemente de lei complementar', false, 'Errada. Embora a EC 132/23 tenha alterado o art. 155, §1, III, a cobranca depende de regulamentacao para ser efetivada.']
  ] },

{ id: 'tb472', materia: 'tributario', topico: 'tb-iptu-itbi',
  enunciado: 'Marcos comprou um apartamento em Recife por R$ 400.000 e registrou a escritura no Cartorio de Registro de Imoveis. A Prefeitura, ao cobrar o ITBI, utilizou como base de calculo o valor venal do IPTU, que era de R$ 550.000. A cobranca esta correta?',
  alt: [
    ['Sim, pois o valor venal do IPTU e a base de calculo legal do ITBI', false, 'Errada. O STJ, no Tema 1113 (REsp 1.937.821), decidiu que a base de calculo do ITBI e o valor da transacao, nao o valor venal do IPTU.'],
    ['Nao, pois a base de calculo do ITBI e o valor da transacao declarado pelo contribuinte, cabendo ao Fisco provar eventual subdeclaracao', true, 'Correta. Conforme o Tema 1113 do STJ, a BC do ITBI e o valor real da transacao. Se o Fisco entender que ha subdeclaracao, o onus da prova e dele, nao do contribuinte.'],
    ['Sim, pois cabe ao contribuinte provar que o valor da transacao e inferior ao venal', false, 'Errada. O onus da prova de subdeclaracao e do Fisco, nao do contribuinte (Tema 1113).'],
    ['Nao, pois o ITBI so pode incidir sobre o valor da avaliacao judicial', false, 'Errada. Nao existe exigencia de avaliacao judicial. A base e o valor da transacao, e o Fisco pode questionar, mas com onus proprio.']
  ] },

{ id: 'tb473', materia: 'tributario', topico: 'tb-iptu-itbi',
  enunciado: 'Uma empresa de incorporacao imobiliaria integraliza um terreno avaliado em R$ 2 milhoes ao capital social de R$ 1,5 milhao de uma sociedade recentemente constituida. A respeito do ITBI, assinale a alternativa correta.',
  alt: [
    ['Ha imunidade total, pois a integralizacao de capital e imune ao ITBI', false, 'Errada. O STF, no Tema 796, decidiu que a imunidade so alcanca o valor correspondente ao capital subscrito, nao o excedente.'],
    ['Ha imunidade sobre R$ 1,5 milhao e incidencia de ITBI sobre os R$ 500 mil excedentes', true, 'Correta. O Tema 796 do STF (RE 796.376) firmou que a imunidade do art. 156, §2, I, da CF limita-se ao valor do capital subscrito. O que exceder (R$ 500 mil) esta sujeito ao ITBI.'],
    ['Incide ITBI sobre os R$ 2 milhoes, pois a empresa tem atividade preponderantemente imobiliaria', false, 'Errada. A atividade preponderante so afasta a imunidade nas hipoteses de fusao, incorporacao, cisao ou extincao. Na integralizacao, a limitacao e pelo capital subscrito (Tema 796).'],
    ['Nao incide ITBI, pois a empresa foi recentemente constituida e ainda nao tem atividade preponderante definida', false, 'Errada. A restricao do Tema 796 (excedente ao capital) aplica-se independentemente da atividade ou da idade da empresa.']
  ] },

{ id: 'tb474', materia: 'tributario', topico: 'tb-iptu-itbi',
  enunciado: 'O Municipio de Campinas aprovou lei instituindo aliquotas progressivas de ITBI: 2% para imoveis ate R$ 500.000, 3% para imoveis de R$ 500.001 a R$ 1.000.000 e 4% acima de R$ 1.000.000. A lei e constitucional?',
  alt: [
    ['Sim, pois a progressividade atende ao principio da capacidade contributiva', false, 'Errada. Embora a capacidade contributiva seja principio geral, o STF firmou na Sumula 656 que a progressividade do ITBI e inconstitucional.'],
    ['Nao, pois o STF entende que e inconstitucional a fixacao de aliquotas progressivas para o ITBI', true, 'Correta. A Sumula 656 do STF estabelece que e inconstitucional a lei que estabelece aliquotas progressivas para o ITBI com base no valor venal do imovel.'],
    ['Sim, pois a EC 29/2000 autorizou a progressividade dos impostos municipais', false, 'Errada. A EC 29/2000 autorizou expressamente a progressividade do IPTU, nao do ITBI. A Sumula 656 permanece valida para o ITBI.'],
    ['Nao, mas somente se as aliquotas superarem 5%', false, 'Errada. O problema nao e o percentual, mas a propria progressividade. O ITBI deve ter aliquota uniforme.']
  ] },

{ id: 'tb475', materia: 'tributario', topico: 'tb-iss',
  enunciado: 'Uma empresa de software sediada em Curitiba vende licencas de uso de programa padronizado pela internet para clientes em todo o Brasil. O Estado do Parana pretende cobrar ICMS sobre essas operacoes. A cobranca e devida?',
  alt: [
    ['Sim, pois software de prateleira e mercadoria e incide ICMS', false, 'Errada. Essa era a posicao anterior, mas o STF a superou nas ADIs 1945 e 5659.'],
    ['Nao, pois o STF decidiu que sobre licenciamento e cessao de uso de software incide ISS, nao ICMS', true, 'Correta. O STF, nas ADIs 1945 e 5659, decidiu que o ISS incide sobre o licenciamento e a cessao de uso de software, inclusive o padronizado, afastando a incidencia do ICMS.'],
    ['Sim, pois o software padronizado nao consta da lista da LC 116/03', false, 'Errada. O software se enquadra na lista de servicos da LC 116/03 (item 1.05), e o STF confirmou a incidencia do ISS.'],
    ['Depende: se o software for customizado, ISS; se for padronizado, ICMS', false, 'Errada. Apos as ADIs 1945 e 5659, todo software, padronizado ou customizado, e tributado pelo ISS.']
  ] },

{ id: 'tb476', materia: 'tributario', topico: 'tb-iss',
  enunciado: 'Uma construtora sediada em Brasilia executa obra de edificacao em Goiania. O contrato preve fornecimento de material pelo construtor no valor de R$ 500.000 e servico no valor de R$ 800.000. Sobre qual base de calculo e a qual Municipio e devido o ISS?',
  alt: [
    ['R$ 1.300.000, devido a Brasilia (sede da construtora)', false, 'Errada. O ISS da construcao civil e devido no local da obra (Goiania), nao na sede (art. 3, III, da LC 116/03). Alem disso, os materiais sao excluidos da BC.'],
    ['R$ 800.000, devido a Goiania (local da obra)', true, 'Correta. O ISS de construcao civil e devido no local da obra (art. 3, III, da LC 116/03) e a base de calculo exclui os materiais fornecidos pelo prestador (art. 7, §2, I). BC = R$ 800.000, local = Goiania.'],
    ['R$ 1.300.000, devido a Goiania (local da obra)', false, 'Errada. O local esta correto (Goiania), mas a base deve excluir os materiais. BC = R$ 800.000.'],
    ['R$ 800.000, devido a Brasilia (sede da construtora)', false, 'Errada. A base de calculo esta correta, mas o local e Goiania (obra), nao Brasilia (sede).']
  ] },

{ id: 'tb477', materia: 'tributario', topico: 'tb-iss',
  enunciado: 'O Municipio de Florianopolis pretende fixar a aliquota do ISS sobre servicos de informatica em 1,5% para atrair empresas de tecnologia. A medida e valida?',
  alt: [
    ['Sim, pois o Municipio tem autonomia para fixar aliquotas', false, 'Errada. A autonomia municipal e limitada pela LC 116/03, que fixa aliquota minima de 2%.'],
    ['Nao, pois a aliquota minima do ISS e 2%, conforme a LC 116/03', true, 'Correta. O art. 8-A da LC 116/03 (incluido pela LC 157/2016) fixa a aliquota minima do ISS em 2%. Fixar abaixo disso ou conceder beneficio que resulte em carga inferior e vedado.'],
    ['Sim, desde que aprovada por lei complementar municipal', false, 'Errada. Nem lei complementar municipal pode afastar o piso de 2% fixado pela LC nacional.'],
    ['Nao, pois a aliquota minima do ISS e 5%', false, 'Errada. 5% e a aliquota maxima, nao a minima (art. 8, II, da LC 116/03).']
  ] }
);
