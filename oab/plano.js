/* Motor do plano de estudos: transforma as datas da prova e a rotina do aluno em metas diárias.
 * Função pura (sem DOM), para poder ser testada fora do navegador:
 *   window.Plano.gerar(cfg, ctx) -> { dias, etapas, avisos, resumo }
 * cfg: { fase1: 'AAAA-MM-DD' | null, fase2: 'AAAA-MM-DD' | null, inicio: 'AAAA-MM-DD',
 *        horas: 1..10, dias: [0..6] (0 = domingo), area: id da área da 2ª fase, jaFeitas: ['materia:topico'] }
 * ctx: { materias, blocos, areas, casos } */
(function (root) {
  'use strict';

  /* ---------- datas (sempre no fuso local, sem horas) ---------- */
  const parse = iso => { const [a, m, d] = iso.split('-').map(Number); return new Date(a, m - 1, d); };
  const iso = dt => `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
  const soma = (isoData, n) => { const d = parse(isoData); d.setDate(d.getDate() + n); return iso(d); };
  const entre = (a, b) => Math.round((parse(b) - parse(a)) / 864e5);
  const intervalo = (de, ate) => { const out = []; for (let d = de; d <= ate; d = soma(d, 1)) out.push(d); return out; };

  const MIN_AULA = 50;      // leitura da aula + vídeo curto + 10 questões
  const MIN_REVISAO = 10;   // macetes + 5 questões
  const MAX_REVISOES = 4;   // por dia; o excedente passa para o dia seguinte

  function gerar(cfg, ctx) {
    const avisos = [];
    const etapas = [];
    const mapa = new Map(); // data -> dia
    const dia = (data, etapa) => {
      if (!mapa.has(data)) mapa.set(data, { data, etapa, itens: [], folga: false });
      return mapa.get(data);
    };
    const estuda = data => cfg.dias.includes(parse(data).getDay());
    const minutos = Math.max(1, Math.min(10, +cfg.horas || 2)) * 60;
    const mat = id => ctx.materias.find(m => m.id === id);
    const jaFeitas = new Set(cfg.jaFeitas || []);

    let resumo = { aulasTotal: 0, aulasNoPlano: 0, diasEstudo1: 0, diasEstudo2: 0 };

    /* ================= 1ª FASE ================= */
    if (cfg.fase1 && cfg.fase1 > cfg.inicio) {
      const vespera = soma(cfg.fase1, -1);
      const todos = intervalo(cfg.inicio, soma(vespera, -1));
      const estudo = todos.filter(estuda);
      todos.filter(d => !estuda(d)).forEach(d => { dia(d, 'Folga').folga = true; });
      const N = estudo.length;
      resumo.diasEstudo1 = N;

      // ordem das aulas: 1º as de alta incidência, depois as de média; em cada passada, bloco a bloco,
      // intercalando as matérias do bloco (material, processo, material...)
      const fila = [];
      for (const inc of ['alta', 'media']) {
        for (const b of ctx.blocos) {
          const listas = b.materias.map(id => (mat(id) ? mat(id).topicos : [])
            .filter(t => t.incidencia === inc && !jaFeitas.has(id + ':' + t.id))
            .map(t => ({ m: id, t })));
          for (let i = 0; listas.some(l => i < l.length); i++) listas.forEach(l => { if (l[i]) fila.push(l[i]); });
        }
      }
      resumo.aulasTotal = fila.length;

      if (N === 0) {
        avisos.push('Não há dias de estudo antes da 1ª fase com a rotina escolhida. Inclua mais dias da semana ou confira a data da prova.');
      } else {
        // divisão em etapas: base (teoria + questões), questões e simulados, reta final
        let nBase, nQuest, nFinal;
        if (N >= 10) { nFinal = Math.max(2, Math.round(N * 0.15)); nQuest = Math.round(N * 0.25); nBase = N - nQuest - nFinal; }
        else { nFinal = N >= 3 ? 1 : 0; nQuest = N >= 6 ? 1 : 0; nBase = N - nFinal - nQuest; }
        const base = estudo.slice(0, nBase), quest = estudo.slice(nBase, nBase + nQuest), final = estudo.slice(nBase + nQuest);
        if (base.length) etapas.push({ nome: 'Base: teoria + questões', de: base[0], ate: base[base.length - 1], fase: 1 });
        if (quest.length) etapas.push({ nome: 'Questões e simulados', de: quest[0], ate: quest[quest.length - 1], fase: 1 });
        if (final.length) etapas.push({ nome: 'Reta final: revisão', de: final[0], ate: final[final.length - 1], fase: 1 });

        // capacidade da etapa base
        let porDia = Math.max(1, Math.floor((minutos - 15 - 20) / MIN_AULA));
        const capacidade = base.length * porDia;
        let cabem = fila;
        let sobra = [];
        if (fila.length > capacidade) {
          const apertado = Math.min(porDia + 2, Math.ceil(fila.length / Math.max(1, base.length)));
          if (apertado > porDia) {
            avisos.push(`Tempo apertado: para ver todo o conteúdo, o plano coloca até ${apertado} aulas por dia. Se puder, aumente as horas por dia ou estude também nos dias de folga.`);
            porDia = apertado;
          }
          cabem = fila.slice(0, base.length * porDia);
          sobra = fila.slice(base.length * porDia);
        }
        // o que não coube na base vai para a etapa de questões (uma aula extra por dia)
        const extraQuest = sobra.splice(0, quest.length);
        if (sobra.length) {
          avisos.push(`${sobra.length} aula(s) de incidência menor ficaram fora do plano por falta de tempo. Elas aparecem em "Se sobrar tempo".`);
        }
        resumo.aulasNoPlano = cabem.length + extraQuest.length;
        resumo.foraDoPlano = sobra.map(x => ({ m: x.m, t: x.t.id, titulo: x.t.titulo }));

        // revisões espaçadas (1, 7 e 30 dias depois), sempre em dias de estudo antes da véspera
        const pendRev = new Map(); // data -> [itens]
        const agendarRevisoes = (dataAula, x) => {
          for (const n of [1, 7, 30]) {
            const alvo = soma(dataAula, n);
            const d = estudo.find(e => e >= alvo);
            if (!d) continue;
            if (!pendRev.has(d)) pendRev.set(d, []);
            pendRev.get(d).push({ tipo: 'revisao', chave: `rev:${x.m}:${x.t.id}:${n}`, m: x.m, t: x.t.id,
              texto: `Revisar (${n === 1 ? '1 dia' : n + ' dias'}): ${x.t.titulo}`, detalhe: 'Releia os macetes e faça 5 questões', min: MIN_REVISAO });
          }
        };
        const aulaItem = x => ({ tipo: 'aula', chave: `aula:${x.m}:${x.t.id}`, m: x.m, t: x.t.id,
          texto: `${mat(x.m).nome}: ${x.t.titulo}`, detalhe: 'Aula + vídeo + questões da aula', min: MIN_AULA });

        // etapa base: espalha as aulas de forma uniforme
        base.forEach((d, i) => {
          const de = Math.round(i * cabem.length / base.length), ate = Math.round((i + 1) * cabem.length / base.length);
          const doDia = cabem.slice(de, ate);
          const D = dia(d, 'Base: teoria + questões');
          doDia.forEach(x => { D.itens.push(aulaItem(x)); agendarRevisoes(d, x); });
          if (!doDia.length) { // mais dias que aulas: dia de questões da matéria em estudo
            const ref = cabem[Math.min(cabem.length - 1, de)] || fila[0];
            if (ref) D.itens.push({ tipo: 'questoes', chave: `q:${ref.m}`, m: ref.m, texto: `Questões de ${mat(ref.m).nome}`, detalhe: '20 questões + leitura das explicações', min: 60 });
          }
          if (!doDia.some(x => x.m === 'etica')) D.itens.push({ tipo: 'etica', chave: 'etica-diaria', m: 'etica', texto: 'Ética do dia', detalhe: '5 questões de Ética (a matéria que mais aprova)', min: 15 });
          // sobrou tempo no dia? mais questões da matéria que está sendo estudada
          const livre = minutos - D.itens.reduce((s, it) => s + it.min, 0) - 20;
          const foco = doDia[doDia.length - 1];
          if (foco && livre >= 30) D.itens.push({ tipo: 'questoes', chave: `q:${foco.m}`, m: foco.m, texto: `Questões de ${mat(foco.m).nome}`,
            detalhe: `${Math.max(10, Math.round(livre / 3))} questões, lendo a explicação de todas as alternativas`, min: livre });
        });

        // etapa de questões: rodízio de matérias pelo peso + simulado semanal
        const rodizio = [];
        const pesos = ctx.materias.map(m => ({ id: m.id, w: m.qtd, acc: 0 }));
        for (let k = 0; k < quest.length * 2 + 4; k++) { // rodízio ponderado (smooth weighted round-robin)
          const total = pesos.reduce((s, p) => s + p.w, 0);
          pesos.forEach(p => { p.acc += p.w; });
          const top = pesos.reduce((a, b) => (b.acc > a.acc ? b : a));
          top.acc -= total; rodizio.push(top.id);
        }
        const nQ = Math.max(10, Math.round(minutos / 60 * 12)); // ~12 questões por hora
        quest.forEach((d, i) => {
          const D = dia(d, 'Questões e simulados');
          const proxEstudo = quest[i + 1] || final[0];
          const fimDeSemana = !proxEstudo || entre(d, proxEstudo) > 1 || parse(d).getDay() === 6 || parse(d).getDay() === 0;
          if (fimDeSemana && i > 0) {
            D.itens.push(simulado(minutos));
          } else {
            const a = rodizio[(i * 2) % rodizio.length], b = rodizio[(i * 2 + 1) % rodizio.length];
            [a, b].filter((v, j, arr) => arr.indexOf(v) === j).forEach(id => D.itens.push({ tipo: 'questoes', chave: `q:${id}`, m: id,
              texto: `Questões de ${mat(id).nome}`, detalhe: `${Math.round(nQ / 2)} questões, lendo a explicação de todas as alternativas`, min: Math.round(minutos * 0.35) }));
          }
          if (extraQuest[i]) { D.itens.push(aulaItem(extraQuest[i])); agendarRevisoes(d, extraQuest[i]); }
          D.itens.push({ tipo: 'erros', chave: 'erros', texto: 'Revisar erros', detalhe: 'Refaça as questões que você errou', min: 20 });
        });

        // reta final: revisão relâmpago das matérias de maior peso + simulados
        const ordemFinal = ctx.materias.slice().sort((a, b) => b.qtd - a.qtd).map(m => m.id);
        const porDiaFinal = Math.max(2, Math.ceil(ordemFinal.length / Math.max(1, final.length)));
        final.forEach((d, i) => {
          const D = dia(d, 'Reta final: revisão');
          const simuladoAqui = final.length >= 4 && i === final.length - 3;
          if (simuladoAqui) D.itens.push(simulado(minutos));
          else {
            ordemFinal.slice(i * porDiaFinal, (i + 1) * porDiaFinal).forEach(id => D.itens.push({ tipo: 'revfinal', chave: `rf:${id}`, m: id,
              texto: `Revisão relâmpago: ${mat(id).nome}`, detalhe: 'Macetes e "como a FGV cobra" de todas as aulas + 10 questões', min: Math.round(minutos * 0.3) }));
            if (i === 0) D.itens.push({ tipo: 'leitura', chave: 'lei-seca-estatuto', m: 'etica', texto: 'Lei seca: Estatuto da Advocacia (Lei 8.906/94)', detalhe: 'Leitura ativa, sublinhando prazos, quóruns e exceções', min: 60 });
          }
          D.itens.push({ tipo: 'erros', chave: 'erros', texto: 'Revisar erros', detalhe: 'Refaça as questões que você errou', min: 20 });
        });

        // encaixa as revisões espaçadas, respeitando o limite diário
        const comRev = estudo.filter(d => d < (final[0] || '9999'));
        let atraso = [];
        for (const d of estudo) {
          const lista = atraso.concat(pendRev.get(d) || []);
          if (!comRev.includes(d)) { atraso = []; continue; } // na reta final a revisão é por matéria
          const D = dia(d, mapa.get(d) ? mapa.get(d).etapa : '');
          // cabe no dia: até 4 revisões, menos se o tempo estiver tomado (no mínimo 1)
          const usado = D.itens.filter(it => it.tipo !== 'questoes').reduce((s, it) => s + it.min, 0);
          const cabe = Math.max(1, Math.min(MAX_REVISOES, Math.floor((minutos - usado) / MIN_REVISAO)));
          D.itens.push(...lista.slice(0, cabe));
          atraso = lista.slice(cabe);
        }
      }

      const V = dia(vespera, 'Véspera');
      V.itens.push({ tipo: 'descanso', chave: 'vespera', texto: 'Véspera: descanse', detalhe: 'Só revisão leve dos macetes de Ética (30 min). Separe documento, caneta preta transparente e confira o local de prova. Durma cedo.', min: 30 });
      dia(cfg.fase1, 'Prova').itens.push({ tipo: 'prova', chave: 'prova1', texto: '1ª fase do Exame de Ordem', detalhe: 'Prova objetiva: 80 questões em 5 horas. Use a técnica das duas passadas.', min: 300 });
    } else if (cfg.fase1) {
      avisos.push('A data da 1ª fase já passou ou é hoje. O plano mostra só a preparação para a 2ª fase.');
    }

    /* ================= 2ª FASE ================= */
    const ini2 = cfg.fase1 && cfg.fase1 >= cfg.inicio ? soma(cfg.fase1, 1) : cfg.inicio;
    if (cfg.fase2 && cfg.fase2 > ini2) {
      const vespera2 = soma(cfg.fase2, -1);
      const todos = intervalo(ini2, soma(vespera2, -1));
      const estudo = todos.filter(estuda);
      todos.filter(d => !estuda(d)).forEach(d => { const D = dia(d, 'Folga'); D.folga = true; });
      resumo.diasEstudo2 = estudo.length;
      const area = (ctx.areas || []).find(a => a.id === cfg.area);
      const casos = (ctx.casos || []).filter(c => c.area === cfg.area);
      const pecaCaso = casos.find(c => c.tipo === 'peca');
      const discursivas = casos.filter(c => c.tipo === 'questao');
      if (estudo.length) etapas.push({ nome: '2ª fase: peças e discursivas', de: estudo[0], ate: estudo[estudo.length - 1], fase: 2 });
      if (!area) avisos.push('Escolha a área da 2ª fase para o plano listar as peças certas.');

      const pecas = area ? area.pecas.map(p => p[0]) : [];
      const nRevisao = estudo.length >= 8 ? 2 : estudo.length >= 4 ? 1 : 0;
      const corpo = estudo.slice(0, estudo.length - nRevisao);
      const pecasNoPlano = Math.min(pecas.length, Math.max(0, Math.floor((corpo.length - 1) / 2)));
      if (area && pecasNoPlano < pecas.length) avisos.push(`Para a 2ª fase, cabem ${pecasNoPlano} de ${pecas.length} peças no tempo disponível: o plano prioriza as mais cobradas.`);
      let k = 0;
      corpo.forEach((d, i) => {
        const D = dia(d, '2ª fase: peças e discursivas');
        const prox = corpo[i + 1];
        const fimDeSemana = i > 2 && (!prox || entre(d, prox) > 1 || parse(d).getDay() === 6 || parse(d).getDay() === 0);
        if (i === 0) {
          D.itens.push({ tipo: 'peca', chave: 'estrutura', area: cfg.area, texto: 'Estrutura da peça e organização do vade mecum', detalhe: 'Monte o índice, as marcações e as remissões permitidas. Revise a estrutura padrão da peça.', min: Math.round(minutos * 0.6) });
        } else if (fimDeSemana) {
          D.itens.push(minutos >= 240
            ? { tipo: 'simulado2', chave: 'simulado2', area: cfg.area, texto: 'Simulado da 2ª fase', detalhe: 'Peça + 4 questões discursivas em 5 horas, consultando só o vade mecum. Corrija pelo espelho.', min: 300 }
            : { tipo: 'simulado2', chave: 'simulado2', area: cfg.area, texto: 'Simulado da 2ª fase (peça)', detalhe: 'Uma peça completa em 2h30, consultando só o vade mecum. Corrija pelo espelho; as 4 discursivas ficam para o dia seguinte.', min: 150 });
        } else if (k < pecasNoPlano * 2) {
          const p = pecas[Math.floor(k / 2)];
          const estudar = k % 2 === 0;
          D.itens.push({ tipo: 'peca', chave: `peca:${p}:${estudar ? 'estudo' : 'treino'}`, area: cfg.area,
            texto: estudar ? `Estudar a peça: ${p}` : `Escrever a peça: ${p}`,
            detalhe: estudar ? 'Cabimento, competência, prazo, estrutura e teses mais cobradas' : 'Escreva a peça inteira à mão, cronometrando (até 2h30)', min: Math.round(minutos * 0.6) });
          if (!estudar && k === 1 && pecaCaso) D.itens.push({ tipo: 'caso', chave: `caso:${pecaCaso.id}`, caso: pecaCaso.id, texto: `Treino com espelho: ${pecaCaso.titulo}`, detalhe: 'Resolva e corrija pelo espelho da banca', min: 120 });
          k++;
        } else {
          D.itens.push({ tipo: 'peca', chave: `pecarev:${i}`, area: cfg.area, texto: 'Peça livre: refazer a que você teve mais dificuldade', detalhe: 'Compare com o modelo e anote as teses esquecidas', min: Math.round(minutos * 0.6) });
        }
        const disc = discursivas[i % Math.max(1, discursivas.length)];
        if (disc && i % 3 === 1) D.itens.push({ tipo: 'caso', chave: `caso:${disc.id}`, caso: disc.id, texto: `Discursiva com espelho: ${disc.titulo}`, detalhe: 'Responda com o artigo de lei e corrija pelo espelho', min: 40 });
        else D.itens.push({ tipo: 'discursiva', chave: 'disc', area: cfg.area, texto: '2 questões discursivas da área', detalhe: 'Resposta direta + fundamento legal (artigo)', min: 40 });
      });
      estudo.slice(estudo.length - nRevisao).forEach(d => {
        dia(d, '2ª fase: revisão final').itens.push({ tipo: 'peca', chave: 'revisao2', area: cfg.area, texto: 'Revisão final da 2ª fase', detalhe: 'Releia suas peças corrigidas, as teses anotadas e os artigos mais usados no vade mecum', min: Math.round(minutos * 0.7) });
      });
      if (nRevisao) etapas.push({ nome: '2ª fase: revisão final', de: estudo[estudo.length - nRevisao], ate: estudo[estudo.length - 1], fase: 2 });
      dia(vespera2, 'Véspera').itens.push({ tipo: 'descanso', chave: 'vespera2', texto: 'Véspera: descanse', detalhe: 'Confira o vade mecum (sem anotações proibidas), documento e local de prova. Durma cedo.', min: 30 });
      dia(cfg.fase2, 'Prova').itens.push({ tipo: 'prova', chave: 'prova2', texto: '2ª fase do Exame de Ordem', detalhe: 'Peça profissional + 4 questões discursivas em 5 horas.', min: 300 });
    } else if (cfg.fase2 && cfg.fase2 <= cfg.inicio) {
      avisos.push('A data da 2ª fase já passou. Confira as datas do plano.');
    }

    const dias = [...mapa.values()].sort((a, b) => (a.data < b.data ? -1 : 1));
    return { dias, etapas, avisos, resumo };
  }

  function simulado(minutos) {
    return minutos >= 240
      ? { tipo: 'simulado', chave: 'simulado80', n: 80, texto: 'Simulado completo: 80 questões', detalhe: '5 horas, sem consulta, no ritmo da prova. Depois, revise o gabarito comentado.', min: 300 }
      : { tipo: 'simulado', chave: 'simulado40', n: 40, texto: 'Meia prova: 40 questões', detalhe: '2h30 cronometradas. Depois, revise o gabarito comentado.', min: 150 };
  }

  root.Plano = { gerar, util: { parse, iso, soma, entre } };
})(typeof window !== 'undefined' ? window : globalThis);
