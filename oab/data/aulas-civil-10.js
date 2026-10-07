/* Aulas adicionais – lote civil-10 (Contratos). */
(function () {
  const add = (id, topicos) => window.MATERIAS.find(m => m.id === id).topicos.push(...topicos);
  add('civil', [
    { id: 'ci-seguro', titulo: 'Seguro', incidencia: 'media',
      aula: [
        'Em uma frase: no seguro, a pessoa paga um valor (o prêmio) para que a seguradora assuma um risco e pague uma quantia se o problema acontecer.',
        'Atenção à lei aplicável: desde dezembro de 2025 o contrato de seguro é regido pelo Marco Legal dos Seguros, a Lei 15.040/2024. Ela revogou os antigos artigos 757 a 802 do Código Civil. Muitas regras continuaram parecidas, mas a base legal agora é a lei nova.',
        'Conceito e partes: seguradora é a empresa autorizada que garante o risco. Segurado é quem contrata e paga o prêmio. Beneficiário é quem recebe a indenização ou o capital. Prêmio é o preço pago; sinistro é o evento ruim que acontece (Lei 15.040/2024).',
        'Seguro de dano x seguro de pessoa: no seguro de dano (carro, casa), a seguradora só repõe o prejuízo real; ninguém pode lucrar com o sinistro. No seguro de pessoa (vida, acidentes), o valor é livre, porque a vida não tem preço, e pode haver vários seguros sobre a mesma pessoa.',
        'Boa-fé e informação: o segurado deve contar a verdade sobre o risco ao contratar. Se esconder de má-fé algo que mudaria o preço ou a aceitação, pode perder a garantia. Se agravar o risco de propósito durante o contrato, também pode perder a cobertura.',
        'Atraso no pagamento: o simples atraso de uma parcela não cancela o seguro sozinho. A seguradora precisa avisar o segurado antes, para colocá-lo em mora, ou seja, em atraso formal (Súmula 616 do STJ).',
        'Suicídio no seguro de vida: se a pessoa se mata nos dois primeiros anos de vigência, o beneficiário não recebe o capital, mas tem direito à devolução da reserva técnica já formada. Depois desse prazo, a seguradora tem de pagar. Não importa provar se foi premeditado (Súmula 610 do STJ; regra mantida na Lei 15.040/2024).',
        'Embriaguez: no seguro de vida, a embriaguez do segurado não livra a seguradora de pagar (Súmula 620 do STJ). Já no seguro de automóvel, a embriaguez do motorista pode afastar a cobertura se ela agravou o risco e causou o acidente.',
        'Venda do carro segurado: se o dono vende o veículo e não avisa a seguradora, ela não pode negar a indenização só por isso. Só pode negar se a troca de dono agravou o risco (Súmula 465 do STJ).',
        'Capital do seguro de vida: o valor pago ao beneficiário não é herança e não responde pelas dívidas do falecido. Ele vai direto para quem foi indicado. Sem indicação, a lei manda pagar metade ao cônjuge e o resto aos herdeiros.',
        'Exemplo: Bruno faz seguro de vida e indica a irmã Lúcia como beneficiária. Oito meses depois, ele tira a própria vida. Lúcia não recebe o capital, mas recebe de volta a reserva técnica. Se tivesse ocorrido três anos depois, ela receberia tudo.',
        'Cuidado (pegadinha): a FGV costuma trocar a regra da embriaguez. No seguro de vida, embriaguez não exclui a cobertura; no seguro de carro, pode excluir se causou o acidente. Também cuidado com fundamentos antigos: os arts. 757 a 802 do CC foram revogados.',
        'Como a FGV cobra: casos com suicídio no prazo de carência, seguro cancelado por atraso sem aviso, carro vendido sem comunicação e beneficiário disputando o capital com credores ou herdeiros.',
        'Resumo para revisar: seguro agora é regido pela Lei 15.040/2024; suicídio nos 2 primeiros anos não gera capital, mas devolve a reserva (Súmula 610); atraso exige aviso prévio (Súmula 616); embriaguez não afasta seguro de vida (Súmula 620); capital de vida não é herança nem paga dívidas.'
      ],
      cai: [
        'Suicídio nos dois primeiros anos de vigência do seguro de vida e devolução da reserva técnica (Súmula 610 do STJ).',
        'Cancelamento do seguro por atraso sem notificação prévia do segurado (Súmula 616 do STJ).',
        'Embriaguez do segurado no seguro de vida x no seguro de automóvel (Súmula 620 do STJ).',
        'Venda do veículo sem aviso à seguradora (Súmula 465 do STJ) e destino do capital do seguro de vida.'
      ],
      macetes: [
        'Suicídio: "2 anos de carência, depois paga sempre" (Súmula 610).',
        '616 = "sem aviso, sem cancelamento".',
        'Vida não tem preço: seguro de pessoa tem valor livre; seguro de dano só repõe o prejuízo, sem lucro.',
        'Lei nova: seguro saiu do Código Civil e foi para a Lei 15.040/2024.'
      ],
      video: 'contrato de seguro OAB súmula 610 616 620 STJ lei 15.040' },

    { id: 'ci-outros-contratos', titulo: 'Empreitada, prestação de serviço, transporte e transação', incidencia: 'media',
      aula: [
        'Em uma frase: são quatro contratos do Código Civil que a FGV cobra por suas regras específicas: obra (empreitada), trabalho autônomo (prestação de serviço), deslocamento (transporte) e acordo para encerrar briga (transação).',
        'Empreitada, conceito: o empreiteiro se obriga a fazer uma obra, só com o trabalho ou também fornecendo os materiais. O fornecimento de material não se presume; precisa estar na lei ou no contrato (art. 610 do CC).',
        'Empreitada, riscos: se o empreiteiro fornece material, os riscos correm por conta dele até a entrega da obra. Se só dá o trabalho, os riscos de perda sem culpa dele ficam com o dono da obra (arts. 611 e 612 do CC).',
        'Empreitada, garantia de 5 anos: em edifícios e construções grandes, o empreiteiro responde por 5 anos pela solidez e segurança da obra. O dono deve entrar com a ação em até 180 dias depois que o defeito aparecer, sob pena de perder o direito (art. 618 e parágrafo único do CC).',
        'Prestação de serviço: é o trabalho autônomo, sem vínculo de emprego (arts. 593 a 609 do CC). O contrato não pode durar mais de 4 anos, mesmo que vise pagar dívida (art. 598). Quem alicia, ou seja, atrai o prestador de outro contratante, paga a este o que o prestador ganharia em 2 anos (art. 608).',
        'Transporte de pessoas: o transportador responde pelos danos aos passageiros e às bagagens, salvo força maior. Cláusula que exclui essa responsabilidade é nula (art. 734 do CC; Súmula 161 do STF).',
        'Culpa de terceiro: se um terceiro causa o acidente, a empresa de transporte continua responsável perante o passageiro e depois cobra do terceiro (art. 735 do CC; Súmula 187 do STF). Já o assalto à mão armada dentro do ônibus é visto como fortuito externo e, em regra, afasta a responsabilidade.',
        'Carona e cortesia: o transporte feito de graça, por amizade, não segue as regras do contrato de transporte (art. 736 do CC). Quem dá carona só indeniza o passageiro se agiu com dolo, isto é, intenção, ou culpa grave (Súmula 145 do STJ).',
        'Desistência da viagem: o passageiro pode desistir antes de a viagem começar e receber o valor de volta, se avisar a tempo. O transportador pode reter até 5% do valor como multa compensatória (art. 740 e §3º do CC).',
        'Transação, conceito: é o acordo em que as partes fazem concessões mútuas, ou seja, cada uma cede um pouco, para evitar ou encerrar um litígio (art. 840 do CC). Só vale para direitos patrimoniais de caráter privado (art. 841) e é interpretada de forma restritiva (art. 843).',
        'Transação, invalidade: ela só se anula por dolo, coação ou erro essencial quanto à pessoa ou à coisa. Erro de direito não anula a transação (art. 849). É nula a transação sobre litígio já decidido por sentença definitiva, se uma parte não sabia da decisão (art. 850).',
        'Exemplo: Paula dá carona a Rui até a praia. Num descuido leve, bate o carro e Rui se machuca. Como era cortesia, Rui só receberia indenização se Paula tivesse agido com dolo ou culpa grave (Súmula 145 do STJ). Se fosse um Uber, a responsabilidade seria objetiva.',
        'Cuidado (pegadinha): os 5 anos do art. 618 são prazo de garantia; os 180 dias são o prazo para entrar com a ação após o defeito aparecer. E culpa de terceiro não livra a transportadora, mas assalto armado em regra livra.',
        'Como a FGV cobra: defeito estrutural em prédio anos após a entrega, acidente de ônibus causado por outro motorista, carona com acidente e acordo questionado depois por "erro sobre a lei".',
        'Resumo para revisar: empreitada tem garantia de 5 anos e ação em 180 dias (art. 618); prestação de serviço dura no máximo 4 anos (art. 598); transportador responde mesmo por culpa de terceiro (art. 735); carona só gera dever de indenizar com dolo ou culpa grave (Súmula 145); transação não se anula por erro de direito (art. 849).'
      ],
      cai: [
        'Prazo de garantia de 5 anos e prazo de 180 dias para a ação na empreitada (art. 618 do CC).',
        'Responsabilidade do transportador por culpa de terceiro (art. 735 do CC e Súmula 187 do STF).',
        'Transporte de cortesia e exigência de dolo ou culpa grave (art. 736 do CC e Súmula 145 do STJ).',
        'Limite de 4 anos na prestação de serviço (art. 598) e hipóteses de anulação da transação (art. 849).'
      ],
      macetes: [
        'Empreitada "5 e 180": 5 anos de garantia, 180 dias para agir.',
        'Prestação de serviço: "4 anos no máximo, 2 anos de multa para quem alicia".',
        'Transporte: terceiro não salva o transportador; assalto armado, em regra, salva.',
        'Carona = "só paga se pisou feio" (dolo ou culpa grave).',
        'Transação: cada um cede um pouco; erro de direito não desfaz.'
      ],
      video: 'empreitada transporte transação contratos em espécie OAB art 618 734 735 736' }
  ]);
})();
