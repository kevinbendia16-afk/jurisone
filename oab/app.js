(function () {
  'use strict';
  const app = document.getElementById('app');
  const M = window.MATERIAS, Q = window.QUESTOES, S2 = window.SEGUNDA_FASE, EST = window.ESTRATEGIAS;
  const LETRAS = 'ABCDE';
  let timerId = null;

  /* ---------- progresso salvo no aparelho ---------- */
  const KEY = 'aprova-oab-v1';
  const state = load();
  function load() {
    const vazio = () => ({ resp: {}, aulas: {}, videos: {}, rascunhos: {}, casos: {}, plano: {} });
    try { return Object.assign(vazio(), JSON.parse(localStorage.getItem(KEY)) || {}); }
    catch (e) { return vazio(); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* modo privado */ } }

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const mat = id => M.find(m => m.id === id);
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;

  function statsDe(lista) {
    const feitas = lista.filter(q => state.resp[q.id]);
    return { total: lista.length, feitas: feitas.length, acertos: feitas.filter(q => state.resp[q.id].ok).length };
  }
  function aulasDe(m) { return m.topicos.filter(t => state.aulas[m.id + ':' + t.id]).length; }

  /* ---------- vídeos ---------- */
  function ytId(txt) {
    if (!txt) return '';
    const m = String(txt).match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([\w-]{11})/);
    return m ? m[1] : (/^[\w-]{11}$/.test(txt.trim()) ? txt.trim() : '');
  }
  const ytBusca = q => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);

  /* ---------- rotas ---------- */
  const rotas = [
    [/^\/?$/, home],
    [/^\/materias$/, materias],
    [/^\/materia\/([\w-]+)$/, materia],
    [/^\/aula\/([\w-]+)\/([\w-]+)$/, aula],
    [/^\/questoes$/, questoesMenu],
    [/^\/quiz\/([\w-]+)(?:\/([\w-]+))?$/, quiz],
    [/^\/simulado$/, simulado],
    [/^\/prova$/, prova],
    [/^\/oficiais\/([\w-]+)$/, oficiaisMateria],
    [/^\/segunda$/, segunda],
    [/^\/segunda\/([\w-]+)$/, segundaArea],
    [/^\/caso\/([\w-]+)$/, caso],
    [/^\/plano$/, plano],
    [/^\/estrategias$/, estrategias]
  ];
  function render() {
    clearInterval(timerId);
    const path = location.hash.replace(/^#/, '') || '/';
    for (const [re, fn] of rotas) {
      const m = path.match(re);
      if (m) { fn(...m.slice(1)); break; }
    }
    const sec = path.split('/')[1] || 'home';
    const ativo = { materia: 'materias', aula: 'materias', quiz: 'questoes', simulado: 'questoes', caso: 'segunda', prova: 'questoes', oficiais: 'questoes' }[sec] || sec;
    document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === ativo));
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', render);

  /* ---------- telas ---------- */
  function home() {
    const st = statsDe(Q);
    const totalAulas = M.reduce((n, m) => n + m.topicos.length, 0);
    const lidas = M.reduce((n, m) => n + aulasDe(m), 0);
    const erradas = Q.filter(q => state.resp[q.id] && !state.resp[q.id].ok).length;
    app.innerHTML = `
      <section class="card hero">
        <span class="pill">Exame de Ordem · FGV</span>
        <h1>Seu caminho para a <span class="grad">aprovação na OAB</span></h1>
        <p class="muted">Aulas diretas ao ponto, só o que cai na prova, macetes, videoaulas e questões comentadas alternativa por alternativa. 1ª e 2ª fase.</p>
        <div class="row">
          <a class="btn" href="#/materias">Começar a estudar</a>
          <a class="btn ghost" href="#/simulado">Fazer simulado</a>
        </div>
      </section>
      ${planoCardHome()}
      ${simuladoCardHome()}
      <h2>Seu progresso</h2>
      <div class="grid">
        <div class="card"><div class="muted">Aulas concluídas</div><div class="stat">${lidas}/${totalAulas}</div><div class="bar"><i style="width:${pct(lidas, totalAulas)}%"></i></div></div>
        <div class="card"><div class="muted">Questões resolvidas</div><div class="stat">${st.feitas}/${st.total}</div><div class="bar"><i style="width:${pct(st.feitas, st.total)}%"></i></div></div>
        <div class="card"><div class="muted">Aproveitamento</div><div class="stat">${pct(st.acertos, st.feitas)}%</div><div class="muted">Meta: acima de 50% (40 de 80)</div></div>
        <a class="card" href="${erradas ? '#/quiz/erradas' : '#/questoes'}"><div class="muted">Para revisar</div><div class="stat">${erradas}</div><div class="muted">${erradas ? 'Refazer questões que errei →' : 'Nenhum erro pendente'}</div></a>
      </div>
      <h2>Como a prova funciona</h2>
      <div class="grid two">
        <div class="card"><h3>📝 1ª fase – objetiva</h3><p class="muted">80 questões de múltipla escolha, 5 horas. Precisa acertar 40 (50%). Ética sozinha vale 8 questões.</p><a class="btn sm ghost" href="#/materias">Ver matérias por peso</a></div>
        <div class="card"><h3>✍️ 2ª fase – prático-profissional</h3><p class="muted">Peça profissional (5 pontos) + 4 questões discursivas (1,25 cada), na área escolhida. Precisa de nota 6,0.</p><a class="btn sm ghost" href="#/segunda">Preparar a 2ª fase</a></div>
      </div>
      <p class="footer-note">Conteúdo inédito, organizado a partir da lei e das súmulas cobradas pela FGV. Confira sempre o edital vigente do seu exame.</p>`;
    ligarChecks();
  }

  /* grade do curso: a ementa completa da matéria, por unidade; aulas ainda não escritas ficam "em produção" */
  function gradeDe(m) {
    const ementa = (window.EMENTA || {})[m.id] || [];
    const usados = new Set();
    const unidades = ementa.map(u => ({
      nome: u.unidade,
      aulas: u.aulas.map(([id, titulo]) => {
        const t = m.topicos.find(x => x.id === id);
        if (t) usados.add(id);
        return { id, titulo: t ? t.titulo : titulo, t };
      }),
    }));
    const extras = m.topicos.filter(t => !usados.has(t.id));
    if (extras.length) unidades.push({ nome: 'Aulas complementares', aulas: extras.map(t => ({ id: t.id, titulo: t.titulo, t })) });
    return unidades;
  }
  const aulasOrdenadas = m => gradeDe(m).flatMap(u => u.aulas).filter(a => a.t).map(a => a.t);
  const totalGrade = m => gradeDe(m).reduce((n, u) => n + u.aulas.length, 0);

  function materias() {
    const ord = M.slice().sort((a, b) => b.qtd - a.qtd);
    const prontas = M.reduce((n, m) => n + m.topicos.length, 0), total = M.reduce((n, m) => n + totalGrade(m), 0);
    app.innerHTML = `
      <h1>1ª Fase · Matérias</h1>
      <p class="muted">O curso completo da 1ª fase: ${total} aulas em 20 matérias, com a ementa inteira de cada uma e foco no que a FGV cobra. ${prontas} aulas já estão no ar; as demais estão em produção. Comece pelas matérias de maior peso.</p>
      <div class="grid">${ord.map(m => {
        const tot = totalGrade(m);
        return `<a class="card subj" href="#/materia/${m.id}">
          <div class="row between"><span class="ico" style="background:${m.cor}22">${m.icone}</span><span class="pill">≈ ${m.qtd} questões na prova</span></div>
          <h3>${esc(m.nome)}</h3>
          <span class="muted">${m.topicos.length} de ${tot} aulas no ar · ${aulasDe(m)} concluídas</span>
          <div class="bar"><i style="width:${pct(aulasDe(m), tot)}%"></i></div>
        </a>`; }).join('')}</div>`;
  }

  function materia(id) {
    const m = mat(id); if (!m) return notFound();
    const qs = Q.filter(q => q.materia === id);
    const grade = gradeDe(m), tot = totalGrade(m);
    let n = 0;
    app.innerHTML = `
      <a class="back" href="#/materias">← Matérias</a>
      <h1>${m.icone} ${esc(m.nome)}</h1>
      <p class="muted">${tot} aulas em ${grade.length} unidade(s) · ${m.topicos.length} no ar · ${aulasDe(m)} concluídas por você · ≈ ${m.qtd} questões na prova</p>
      <div class="box macete"><h3>🎯 Estratégia para esta matéria</h3>${esc(m.dica)}</div>
      ${grade.map((u, ui) => {
        const noAr = u.aulas.filter(a => a.t).length, feitas = u.aulas.filter(a => a.t && state.aulas[m.id + ':' + a.t.id]).length;
        return `<details class="unidade" ${ui === 0 || (feitas && feitas < noAr) ? 'open' : ''}>
        <summary><span><b>${esc(u.nome)}</b></span><span class="muted">${noAr}/${u.aulas.length} no ar${feitas ? ` · ${feitas} concluída(s)` : ''}</span></summary>
        <div class="list">${u.aulas.map(a => {
          n++;
          if (!a.t) return `<div class="card aula-off"><div><div class="muted">Aula ${n}</div><h3>${esc(a.titulo)}</h3><span class="pill">Em produção</span></div></div>`;
          return `<a class="card" href="#/aula/${m.id}/${a.t.id}">
            <div><div class="muted">Aula ${n}</div><h3>${esc(a.titulo)}</h3>
            <span class="pill ${a.t.incidencia}">Incidência ${a.t.incidencia === 'alta' ? 'alta' : 'média'}</span></div>
            ${state.aulas[m.id + ':' + a.t.id] ? '<span class="check">✓</span>' : '<span class="muted">→</span>'}
          </a>`;
        }).join('')}</div></details>`;
      }).join('')}
      <h2>Praticar</h2>
      <div class="row">
        <a class="btn" href="#/oficiais/${m.id}">Questões oficiais de ${esc(m.nome)}</a>
        ${qs.length ? `<a class="btn ghost" href="#/quiz/${m.id}">${qs.length} questões inéditas</a>` : ''}
      </div>`;
  }

  // parágrafo no formato "Título: texto" vira subtítulo + texto (títulos curtos, até 50 caracteres)
  function paragrafoAula(p) {
    const m = p.match(/^([^:]{2,50}):\s+([\s\S]+)$/);
    if (m && /^[A-ZÀ-Úa-zà-ú0-9"(]/.test(m[1]) && !/[.!?]$/.test(m[1].trim())) {
      const corpo = m[2].charAt(0).toUpperCase() + m[2].slice(1);
      return `<h3 class="sub">${esc(m[1].trim())}</h3><p>${esc(corpo)}</p>`;
    }
    return `<p>${esc(p)}</p>`;
  }

  function aula(mid, tid) {
    const m = mat(mid); const t = m && m.topicos.find(x => x.id === tid);
    if (!t) return notFound();
    const chave = mid + ':' + tid;
    const vid = state.videos[chave] || t.videoId || '';
    const ordem = aulasOrdenadas(m), prox = ordem[ordem.indexOf(t) + 1];
    const nq = Q.filter(q => q.materia === mid && q.topico === tid).length;
    app.innerHTML = `
      <a class="back" href="#/materia/${mid}">← ${esc(m.nome)}</a>
      <h1>${esc(t.titulo)}</h1>
      <span class="pill ${t.incidencia}">Incidência ${t.incidencia === 'alta' ? 'alta' : 'média'} na prova</span>

      <div class="card lesson" style="margin-top:16px">
        ${t.aula.map(paragrafoAula).join('')}
        <div class="box cai"><h3>📌 Como a FGV cobra</h3><ul>${t.cai.map(c => `<li>${esc(c)}</li>`).join('')}</ul></div>
        <div class="box macete"><h3>💡 Macetes</h3><ul>${t.macetes.map(c => `<li>${esc(c)}</li>`).join('')}</ul></div>
      </div>

      <h2>🎬 Videoaula</h2>
      <div class="card">
        ${vid ? `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${vid}" title="Videoaula" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>` :
          `<p class="muted">Abra as melhores aulas deste assunto no YouTube. Gostou de alguma? Cole o link abaixo e ela passa a tocar aqui dentro do app.</p>`}
        <div class="row">
          <a class="btn ${vid ? 'ghost' : ''} sm" href="${ytBusca(t.video)}" target="_blank" rel="noopener">▶ Ver aulas sobre o tema no YouTube</a>
          ${vid ? '<button class="btn ghost sm" id="rmVid">Trocar vídeo</button>' : ''}
        </div>
        ${vid ? '' : `<div class="row" style="margin-top:12px"><input type="text" id="vidUrl" placeholder="Cole aqui o link do vídeo do YouTube" style="flex:1;min-width:200px"><button class="btn sm" id="addVid">Salvar vídeo</button></div>`}
      </div>

      <div class="row" style="margin-top:20px">
        <button class="btn" id="done">${state.aulas[chave] ? '✓ Aula concluída' : 'Marcar como concluída'}</button>
        ${nq ? `<a class="btn ghost" href="#/quiz/${mid}/${tid}">Fazer ${nq} ${nq > 1 ? 'questões' : 'questão'} desta aula</a>` : ''}
        ${prox ? `<a class="btn ghost" href="#/aula/${mid}/${prox.id}">Próxima aula →</a>` : ''}
      </div>`;
    document.getElementById('done').onclick = () => { state.aulas[chave] = !state.aulas[chave]; save(); aula(mid, tid); };
    const add = document.getElementById('addVid');
    if (add) add.onclick = () => {
      const id = ytId(document.getElementById('vidUrl').value);
      if (!id) return alert('Link do YouTube inválido.');
      state.videos[chave] = id; save(); aula(mid, tid);
    };
    const rm = document.getElementById('rmVid');
    if (rm) rm.onclick = () => { delete state.videos[chave]; t.videoId = ''; save(); aula(mid, tid); };
  }

  function questoesMenu() {
    const st = statsDe(Q);
    const erradas = Q.filter(q => state.resp[q.id] && !state.resp[q.id].ok).length;
    app.innerHTML = `
      <h1>Banco de questões</h1>
      <section class="card hero">
        <div class="row between"><h2 style="margin:0">Questões oficiais da OAB</h2><span class="pill oficial" id="ofTotal">carregando…</span></div>
        <p class="muted" style="margin-bottom:0">Questões que já caíram no Exame de Ordem, de todas as edições, revisadas para a lei de hoje e com explicação de cada alternativa. As desatualizadas ficaram de fora.</p>
        <div class="row" style="margin-top:12px"><a class="btn" href="#/prova">Simulado de domingo: prova completa</a></div>
        <div class="grid" id="ofMaterias" style="margin-top:14px"></div>
      </section>
      <h2>Questões inéditas do Aprova OAB</h2>
      <p class="muted">${Q.length} questões no estilo FGV, com explicação de cada alternativa: por que a certa está certa e por que as erradas estão erradas.</p>
      <div class="grid">
        <a class="card subj" href="#/quiz/todas"><span class="ico" style="background:#f5b94222">🔀</span><h3>Todas misturadas</h3><span class="muted">${st.feitas}/${st.total} resolvidas</span></a>
        <a class="card subj" href="#/simulado"><span class="ico" style="background:#5b8def22">⏱️</span><h3>Simulado cronometrado</h3><span class="muted">Ritmo de prova: 3 min por questão</span></a>
        <a class="card subj" href="#/quiz/erradas"><span class="ico" style="background:#ff6b6b22">🔁</span><h3>Revisar erros</h3><span class="muted">${erradas} para refazer</span></a>
      </div>
      <h2>Por matéria</h2>
      <div class="list">${M.map(m => {
        const s = statsDe(Q.filter(q => q.materia === m.id));
        return `<a class="card" href="#/quiz/${m.id}"><div><h3>${m.icone} ${esc(m.nome)}</h3><span class="muted">${s.feitas}/${s.total} resolvidas · ${pct(s.acertos, s.feitas)}% de acerto</span></div><span class="muted">→</span></a>`;
      }).join('')}</div>`;
    carregarIndice().then(ind => {
      const tot = document.getElementById('ofTotal'), box = document.getElementById('ofMaterias');
      if (!tot) return;
      tot.textContent = ind.total ? `${ind.total} questões` : 'em revisão';
      box.innerHTML = ORDEM_CADERNO.filter(id => ind.porMateria[id]).map(id => {
        return `<a class="card subj" href="#/oficiais/${id}"><span class="muted">${mat(id).icone} ${esc(mat(id).nome)}</span><b>${ind.porMateria[id]} questões</b></a>`;
      }).join('') || '<p class="muted">As questões oficiais estão sendo revisadas e aparecem aqui conforme ficam prontas.</p>';
    });
  }

  /* motor de questões, usado no treino e no simulado */
  function rodar(lista, opts) {
    opts = opts || {};
    const prep = lista.map(q => ({ q, alt: q.oficial ? q.alt : shuffle(q.alt) }));
    let i = 0, acertos = 0;
    const resp = [];
    const fim = opts.segundos ? Date.now() + opts.segundos * 1000 : 0;
    if (fim) timerId = setInterval(() => {
      const el = document.getElementById('timer');
      const r = Math.max(0, Math.round((fim - Date.now()) / 1000));
      if (el) el.textContent = String(Math.floor(r / 60)).padStart(2, '0') + ':' + String(r % 60).padStart(2, '0');
      if (r === 0) { clearInterval(timerId); final(); }
    }, 1000);

    function tela() {
      const { q, alt } = prep[i];
      const m = mat(q.materia);
      app.innerHTML = `
        <div class="row between"><a class="back" href="${opts.voltar || '#/questoes'}">← Sair</a>
          ${fim ? '<span class="timer" id="timer">--:--</span>' : ''}</div>
        <div class="row between"><span class="pill">${m.icone} ${esc(m.nome)}</span><span class="muted">Questão ${i + 1} de ${prep.length}</span></div>
        ${q.oficial ? `<div class="row" style="margin-top:8px">${seloOficial(q)}</div>` : ''}
        <div class="bar"><i style="width:${pct(i, prep.length)}%"></i></div>
        <div class="card" style="margin-top:14px">
          <div class="q-enun">${esc(q.enunciado)}</div>
          <div id="alts">${alt.map((a, k) => `<button class="alt" data-k="${k}"><span class="lt">${LETRAS[k]}</span><span>${esc(a[0])}<span class="why" hidden>${esc(a[2])}</span></span></button>`).join('')}</div>
          <div class="row" id="next" style="margin-top:12px" hidden><button class="btn">${i + 1 < prep.length ? 'Próxima questão →' : 'Ver resultado'}</button></div>
        </div>`;
      document.querySelectorAll('.alt').forEach(b => b.onclick = () => responder(+b.dataset.k));
    }
    function responder(k) {
      const { q, alt } = prep[i];
      const ok = !!alt[k][1];
      if (ok) acertos++;
      resp.push({ q, ok });
      state.resp[q.id] = { ok, em: Date.now() }; save();
      document.querySelectorAll('.alt').forEach((b, j) => {
        b.disabled = true;
        if (opts.semGabarito) { if (j === k) b.style.borderColor = 'var(--gold)'; return; }
        b.querySelector('.why').hidden = false;
        if (alt[j][1]) b.classList.add('ok'); else if (j === k) b.classList.add('bad');
      });
      const nx = document.getElementById('next'); nx.hidden = false;
      nx.querySelector('button').onclick = () => { i++; i < prep.length ? tela() : final(); };
      if (opts.semGabarito) nx.querySelector('button').click();
    }
    function final() {
      clearInterval(timerId);
      const total = opts.semGabarito ? prep.length : resp.length;
      const p = pct(acertos, total);
      const porMat = {};
      resp.forEach(r => { const o = porMat[r.q.materia] = porMat[r.q.materia] || { a: 0, t: 0 }; o.t++; if (r.ok) o.a++; });
      app.innerHTML = `
        <div class="card result">
          <div class="muted">Resultado</div>
          <div class="big ${p >= 50 ? 'grad' : ''}">${acertos}/${total}</div>
          <p>${p >= 50 ? '🎉 Acima da nota de corte (50%). Continue assim!' : '💪 Abaixo de 50%. Revise as aulas e refaça os erros.'}</p>
          <div class="row" style="justify-content:center">
            <a class="btn" href="#/quiz/erradas">Revisar erros</a><a class="btn ghost" href="#/questoes">Voltar</a>
          </div>
        </div>
        <h2>Desempenho por matéria</h2>
        <div class="card table-wrap"><table><tr><th>Matéria</th><th>Acertos</th><th>%</th></tr>
          ${Object.keys(porMat).map(id => `<tr><td>${mat(id).icone} ${esc(mat(id).nome)}</td><td>${porMat[id].a}/${porMat[id].t}</td><td>${pct(porMat[id].a, porMat[id].t)}%</td></tr>`).join('')}
        </table></div>
        ${opts.semGabarito ? `<h2>Gabarito comentado</h2>${resp.map(r => `<div class="card" style="margin-bottom:10px"><div class="q-enun">${r.ok ? '✅' : '❌'} ${esc(r.q.enunciado)}</div>${r.q.alt.filter(a => a[1]).map(a => `<b>${esc(a[0])}</b><span class="why">${esc(a[2])}</span>`).join('')}</div>`).join('')}` : ''}`;
    }
    if (!prep.length) {
      app.innerHTML = `<a class="back" href="#/questoes">← Voltar</a><div class="card result"><div class="big">🎉</div><p>Nada para mostrar aqui. Você não tem questões pendentes nesta lista.</p><a class="btn" href="#/questoes">Ir para as questões</a></div>`;
      return;
    }
    tela();
  }

  /* ---------- questões oficiais (provas anteriores; carregadas sob demanda) ---------- */
  const OF = { indice: null, porMateria: {} };
  // ordem das matérias no caderno da FGV (a quantidade de cada uma vem de MATERIAS[].qtd)
  const ORDEM_CADERNO = ['etica', 'filosofia', 'constitucional', 'eleitoral', 'dh', 'internacional', 'financeiro', 'tributario',
    'administrativo', 'ambiental', 'civil', 'eca', 'cdc', 'empresarial', 'processocivil', 'penal', 'processopenal',
    'previdenciario', 'trabalho', 'processotrabalho'];
  function carregarIndice() {
    if (OF.indice) return Promise.resolve(OF.indice);
    return fetch('data/oficiais/indice.json').then(r => (r.ok ? r.json() : null)).catch(() => null)
      .then(i => (OF.indice = i || { total: 0, porMateria: {}, exames: [] }));
  }
  function carregarMateria(id) {
    if (OF.porMateria[id]) return Promise.resolve(OF.porMateria[id]);
    return fetch(`data/oficiais/${id}.json`).then(r => (r.ok ? r.json() : [])).catch(() => [])
      .then(lista => (OF.porMateria[id] = lista.map(x => ({
        id: 'of:' + x.id, materia: id, topico: null, enunciado: x.q,
        alt: x.a.map((t, k) => [t, k === x.r, x.ex[k]]), oficial: { exame: x.e, n: x.n, tema: x.t },
      }))));
  }
  const carregarTodas = () => carregarIndice().then(() => Promise.all(ORDEM_CADERNO.map(carregarMateria))).then(ls => ls.flat());
  // mostra "carregando" e só desenha o resultado se o aluno ainda estiver na mesma tela
  function aguardar(promessa, desenhar) {
    const rota = location.hash;
    app.innerHTML = '<div class="card result"><p class="muted">Carregando questões oficiais…</p></div>';
    promessa.then(v => { if (location.hash === rota) desenhar(v); });
  }
  const seloOficial = q => (q.oficial ? `<span class="pill oficial">Questão oficial · ${esc(q.oficial.exame)} · nº ${q.oficial.n}</span>` : '');

  function oficiaisMateria(id) {
    const m = mat(id); if (!m) return notFound();
    aguardar(carregarMateria(id), lista => {
      const novas = lista.filter(q => !state.resp[q.id]);
      rodar(shuffle(novas.length ? novas : lista), { voltar: '#/questoes' });
    });
  }

  /* ---------- simulado de domingo: prova completa, igual à da FGV ---------- */
  const DURACAO_PROVA = 5 * 3600 * 1000;
  function porId(todas) { const mapa = new Map(todas.concat(Q).map(q => [q.id, q])); return id => mapa.get(id); }
  function montarProvaOficial(todas) {
    const vistas = new Set(state.provaVistas || []);
    const ids = [], ineditas = [];
    for (const id of ORDEM_CADERNO) {
      const m = mat(id); if (!m) continue;
      const of = shuffle(todas.filter(q => q.materia === id));
      const escolha = of.filter(q => !vistas.has(q.id)).concat(of.filter(q => vistas.has(q.id))).slice(0, m.qtd);
      if (escolha.length < m.qtd) { // completa com questões inéditas do app se faltar oficial válida
        const extra = shuffle(Q.filter(q => q.materia === id)).slice(0, m.qtd - escolha.length);
        if (extra.length) ineditas.push(m.nome);
        escolha.push(...extra);
      }
      ids.push(...escolha.map(q => q.id));
    }
    return { ids, ineditas };
  }
  function prova() {
    aguardar(carregarTodas(), todas => {
      const p = state.prova;
      if (p && p.ids) return p.entregue ? provaResultado(todas) : provaTela(todas);
      provaInicio(todas);
    });
  }
  function provaInicio(todas) {
    const hist = state.historicoProvas || [];
    const n = OF.indice.total;
    app.innerHTML = `
      <a class="back" href="#/questoes">← Questões</a>
      <h1>Simulado de domingo</h1>
      <div class="card hero">
        <p style="margin-top:0">Uma prova completa <b>igual à da FGV</b>, montada com <b>questões oficiais</b> de exames anteriores, misturadas de todas as edições. Só entram questões que continuam valendo pela lei de hoje: cada uma foi revisada e ganhou explicação de todas as alternativas, e as desatualizadas ficaram de fora.</p>
        <ul>
          <li><b>80 questões</b> na ordem e na quantidade do caderno: Ética (1 a 8), Filosofia (9 e 10), Constitucional (11 a 16)… até Processo do Trabalho (76 a 80).</li>
          <li><b>5 horas</b> de prova, como no dia (das 13h às 18h, horário de Brasília). O tempo continua correndo se você sair do app.</li>
          <li>Sem consulta e sem gabarito durante a prova. Você pode pular, voltar, trocar respostas e marcar questões para revisar.</li>
          <li>Para passar: <b>40 acertos</b>. No final você vê a nota, o desempenho por matéria e o gabarito comentado de todas as alternativas.</li>
        </ul>
        <p class="muted">${n ? `${n} questões oficiais válidas disponíveis${OF.indice.exames.length ? `, de ${OF.indice.exames.length} exames (${esc(OF.indice.exames[0])} ao ${esc(OF.indice.exames[OF.indice.exames.length - 1])})` : ''}.` : 'As questões oficiais ainda estão sendo revisadas; por enquanto a prova usa as questões do app.'}</p>
        <div class="row"><button class="btn" id="comecar">Começar a prova</button></div>
      </div>
      ${hist.length ? `<h2>Seus simulados</h2><div class="card table-wrap"><table><tr><th>Data</th><th>Acertos</th><th>Resultado</th></tr>
        ${hist.slice().reverse().map(h => `<tr><td>${fmtData(h.data)}</td><td>${h.acertos}/${h.total}</td><td>${h.acertos >= 40 ? '✅ Acima da nota de corte' : '❌ Abaixo de 40'}</td></tr>`).join('')}</table></div>` : ''}`;
    document.getElementById('comecar').onclick = () => {
      const { ids, ineditas } = montarProvaOficial(todas);
      state.prova = { ids, resp: {}, flags: {}, inicio: Date.now(), fim: Date.now() + DURACAO_PROVA, atual: 0, ineditas };
      save(); provaTela(todas);
    };
  }
  function provaTela(todas) {
    const p = state.prova, achar = porId(todas);
    const qs = p.ids.map(achar).filter(Boolean);
    if (qs.length !== p.ids.length) { // alguma questão saiu do banco (ex.: revisão posterior): recomeça
      state.prova = null; save(); return provaInicio(todas);
    }
    const desenhar = () => {
      const i = p.atual, q = qs[i];
      const respondidas = Object.keys(p.resp).length;
      app.innerHTML = `
        <div class="prova-topo">
          <span class="timer" id="timer">--:--:--</span>
          <span class="muted">${respondidas}/80 respondidas</span>
          <button class="btn ghost sm" id="vercartao">Cartão-resposta</button>
        </div>
        <div class="cartao" id="cartao" hidden>${qs.map((x, k) => `<button class="bolha ${p.resp[k] != null ? 'resp' : ''} ${p.flags[k] ? 'flag' : ''} ${k === i ? 'atual' : ''}" data-k="${k}">${k + 1}</button>`).join('')}</div>
        <div class="card" style="margin-top:12px">
          <div class="row between"><b>Questão ${i + 1}</b>
            <label class="chip"><input type="checkbox" id="flag" ${p.flags[i] ? 'checked' : ''}><span>Revisar depois</span></label></div>
          <div class="q-enun">${esc(q.enunciado)}</div>
          ${q.alt.map((a, k) => `<button class="alt ${p.resp[i] === k ? 'marcada' : ''}" data-k="${k}"><span class="lt">${LETRAS[k]}</span><span>${esc(a[0])}</span></button>`).join('')}
          <div class="row between" style="margin-top:12px">
            <button class="btn ghost sm" id="ant" ${i === 0 ? 'disabled' : ''}>← Anterior</button>
            <button class="btn ghost sm" id="prox" ${i === qs.length - 1 ? 'disabled' : ''}>Próxima →</button>
          </div>
        </div>
        <div class="row" style="margin-top:16px"><button class="btn" id="entregar">Entregar prova</button>
          <span class="muted" id="avisoEntrega"></span></div>`;
      const ir = k => { p.atual = Math.max(0, Math.min(qs.length - 1, k)); save(); desenhar(); window.scrollTo(0, 0); };
      document.querySelectorAll('.alt').forEach(b => b.onclick = () => {
        const k = +b.dataset.k;
        if (p.resp[i] === k) delete p.resp[i]; else p.resp[i] = k; // tocar de novo desmarca
        save(); desenhar();
      });
      document.getElementById('flag').onchange = e => { if (e.target.checked) p.flags[i] = 1; else delete p.flags[i]; save(); desenhar(); };
      document.getElementById('ant').onclick = () => ir(i - 1);
      document.getElementById('prox').onclick = () => ir(i + 1);
      document.getElementById('vercartao').onclick = () => { const c = document.getElementById('cartao'); c.hidden = !c.hidden; };
      document.querySelectorAll('.bolha').forEach(b => b.onclick = () => ir(+b.dataset.k));
      const ent = document.getElementById('entregar');
      ent.onclick = () => {
        const faltam = qs.length - Object.keys(p.resp).length;
        if (!ent.dataset.confirmar) {
          ent.dataset.confirmar = '1'; ent.textContent = 'Confirmar entrega';
          document.getElementById('avisoEntrega').textContent = faltam ? `Ainda há ${faltam} questão(ões) em branco.` : 'Todas respondidas.';
          return;
        }
        entregar();
      };
      tick();
    };
    const tick = () => {
      const r = Math.max(0, Math.round((p.fim - Date.now()) / 1000));
      const el = document.getElementById('timer');
      if (el) el.textContent = `${Math.floor(r / 3600)}:${String(Math.floor(r % 3600 / 60)).padStart(2, '0')}:${String(r % 60).padStart(2, '0')}`;
      if (r === 0) entregar();
    };
    const entregar = () => {
      clearInterval(timerId);
      p.entregue = Date.now();
      let acertos = 0; const porMateria = {};
      qs.forEach((q, k) => {
        const ok = p.resp[k] != null && !!q.alt[p.resp[k]][1];
        if (ok) acertos++;
        const o = porMateria[q.materia] = porMateria[q.materia] || [0, 0]; o[1]++; if (ok) o[0]++;
        if (p.resp[k] != null) state.resp[q.id] = { ok, em: Date.now() };
      });
      p.acertos = acertos;
      state.provaVistas = [...new Set((state.provaVistas || []).concat(p.ids))].slice(-4000);
      (state.historicoProvas = state.historicoProvas || []).push({ data: hoje(), acertos, total: qs.length, porMateria,
        minutos: Math.round((Math.min(p.entregue, p.fim) - p.inicio) / 60000) });
      save(); provaResultado(todas);
    };
    if (Date.now() >= p.fim) return entregar();
    clearInterval(timerId); timerId = setInterval(tick, 1000);
    desenhar();
  }
  function provaResultado(todas) {
    const p = state.prova, achar = porId(todas);
    const qs = p.ids.map(achar);
    const porMateria = {};
    qs.forEach((q, k) => { if (!q) return; const ok = p.resp[k] != null && !!q.alt[p.resp[k]][1]; const o = porMateria[q.materia] = porMateria[q.materia] || [0, 0]; o[1]++; if (ok) o[0]++; });
    const passou = p.acertos >= 40;
    app.innerHTML = `
      <div class="card result">
        <div class="muted">Simulado de domingo · resultado</div>
        <div class="big ${passou ? 'grad' : ''}">${p.acertos}/80</div>
        <p>${passou ? '🎉 Aprovado neste simulado: acima dos 40 acertos.' : `💪 Faltaram ${40 - p.acertos} acerto(s) para os 40. Veja abaixo onde focar.`}</p>
        <p class="muted">Tempo usado: ${fmtMin(Math.round((Math.min(p.entregue, p.fim) - p.inicio) / 60000))} de 5h.</p>
        <div class="row" style="justify-content:center"><button class="btn" id="nova">Fazer outra prova</button><a class="btn ghost" href="#/plano">Voltar ao plano</a></div>
      </div>
      ${p.ineditas && p.ineditas.length ? `<p class="muted">Nesta prova, ${esc(p.ineditas.join(', '))} ainda não tinham questões oficiais revisadas suficientes e foram completadas com questões do app.</p>` : ''}
      <h2>Desempenho por matéria</h2>
      <div class="card table-wrap"><table><tr><th>Matéria</th><th>Acertos</th><th>%</th></tr>
        ${ORDEM_CADERNO.filter(id => porMateria[id]).map(id => { const [a, t] = porMateria[id]; return `<tr><td>${mat(id).icone} ${esc(mat(id).nome)}</td><td>${a}/${t}</td><td>${pct(a, t)}%</td></tr>`; }).join('')}
      </table></div>
      <h2>Gabarito comentado</h2>
      <div class="list">${qs.map((q, k) => {
        if (!q) return '';
        const marcada = p.resp[k], certa = q.alt.findIndex(a => a[1]), ok = marcada === certa;
        return `<details class="card gab" ${ok ? '' : 'open'}><summary><b>${k + 1}.</b> ${ok ? '✅' : marcada == null ? '⬜ Em branco' : '❌'} ${esc(mat(q.materia).nome)} ${seloOficial(q)}</summary>
          <div class="q-enun">${esc(q.enunciado)}</div>
          ${q.alt.map((a, j) => `<div class="alt ${j === certa ? 'ok' : j === marcada ? 'bad' : ''}"><span class="lt">${LETRAS[j]}</span><span>${esc(a[0])}<span class="why">${esc(a[2])}</span></span></div>`).join('')}
        </details>`;
      }).join('')}</div>`;
    document.getElementById('nova').onclick = () => { state.prova = null; save(); provaInicio(todas); };
  }

  function quiz(sel, top) {
    let lista;
    if (sel === 'todas') lista = shuffle(Q);
    else if (sel === 'erradas') lista = shuffle(Q.filter(q => state.resp[q.id] && !state.resp[q.id].ok));
    else lista = Q.filter(q => q.materia === sel && (!top || q.topico === top));
    rodar(lista, { voltar: top ? `#/aula/${sel}/${top}` : '#/questoes' });
  }

  function simulado() {
    app.innerHTML = `
      <a class="back" href="#/questoes">← Questões</a>
      <h1>Simulado cronometrado</h1>
      <div class="card">
        <p>Prova montada como a da FGV: cada matéria entra com a quantidade proporcional ao seu peso, na ordem do caderno, priorizando questões que você ainda não resolveu. Sem gabarito durante a prova, no ritmo real do Exame (3 min e 45 s por questão: 5 horas ÷ 80). O resultado e o gabarito comentado aparecem no final.</p>
        <label class="muted">Tamanho da prova</label>
        <select id="qtd">${[[80, 'Prova completa · 80 questões'], [40, 'Meia prova · 40 questões'], [20, 'Treino rápido · 20 questões']]
          .filter(([n]) => n <= Q.length).map(([n, t]) => `<option value="${n}">${t} (${Math.round(n * 3.75)} min)</option>`).join('')}</select>
        <div class="row" style="margin-top:14px"><button class="btn" id="go">Iniciar simulado</button></div>
      </div>`;
    document.getElementById('go').onclick = () => {
      const n = +document.getElementById('qtd').value;
      rodar(montarProva(n), { segundos: Math.round(n * 225), semGabarito: true, voltar: '#/simulado' });
    };
  }

  /* distribui n questões pelas matérias conforme o peso na prova; inéditas para o aluno vêm primeiro */
  function montarProva(n) {
    const pesoTotal = M.reduce((s, m) => s + m.qtd, 0);
    const porMateria = M.map(m => {
      const qs = shuffle(Q.filter(q => q.materia === m.id));
      const ordenadas = qs.filter(q => !state.resp[q.id]).concat(qs.filter(q => state.resp[q.id]));
      return { m, fila: ordenadas, cota: Math.max(1, Math.round(n * m.qtd / pesoTotal)), escolhidas: [] };
    });
    porMateria.forEach(p => { p.escolhidas = p.fila.splice(0, p.cota); });
    let total = porMateria.reduce((s, p) => s + p.escolhidas.length, 0);
    // completa pela matéria mais "atrasada" em relação ao peso; corta da mais "adiantada"
    const razao = p => p.escolhidas.length / p.m.qtd;
    while (total < n) {
      const p = porMateria.filter(x => x.fila.length).sort((a, b) => razao(a) - razao(b))[0];
      if (!p) break;
      p.escolhidas.push(p.fila.shift()); total++;
    }
    while (total > n) {
      const p = porMateria.filter(x => x.escolhidas.length > 1).sort((a, b) => razao(b) - razao(a))[0];
      if (!p) break;
      p.escolhidas.pop(); total--;
    }
    return porMateria.flatMap(p => p.escolhidas);
  }

  function segunda() {
    app.innerHTML = `
      <h1>2ª Fase · Prova prático-profissional</h1>
      <div class="card"><h3>📋 Regras que você precisa saber</h3><ul>${S2.regras.map(r => `<li>${esc(r)}</li>`).join('')}</ul></div>
      <h2>Estrutura de qualquer peça</h2>
      <div class="card"><ol class="steps">${S2.estrutura.map(e => `<li><b>${esc(e[0])}</b><br><span class="muted">${esc(e[1])}</span></li>`).join('')}</ol></div>
      <h2>Escolha sua área</h2>
      <div class="grid">${S2.areas.map(a => {
        const n = casosDe(a.id).length;
        return `<a class="card subj" href="#/segunda/${a.id}"><span class="ico" style="background:#f5b94222">${a.icone}</span><h3>${esc(a.nome)}</h3><span class="muted">${a.pecas.length} peças principais${n ? ` · ${n} treinos com espelho` : ''}</span></a>`;
      }).join('')}</div>`;
  }

  function segundaArea(id) {
    const a = S2.areas.find(x => x.id === id); if (!a) return notFound();
    app.innerHTML = `
      <a class="back" href="#/segunda">← 2ª Fase</a>
      <h1>${a.icone} ${esc(a.nome)}</h1>
      <p class="muted">O segredo da 2ª fase: descobrir a peça certa pelas pistas do enunciado. Use esta tabela como guia.</p>
      <div class="card table-wrap"><table>
        <tr><th>Peça</th><th>Quando usar (pista no enunciado)</th><th>Base legal</th></tr>
        ${a.pecas.map(p => `<tr><td><b>${esc(p[0])}</b></td><td>${esc(p[1])}</td><td class="muted">${esc(p[2])}</td></tr>`).join('')}
      </table></div>
      <div class="box macete"><h3>💡 Dicas de quem já passou</h3><ul>${a.dicas.map(d => `<li>${esc(d)}</li>`).join('')}</ul></div>
      ${casosDe(id).length ? `<h2>✍️ Treine com correção pelo espelho</h2>
      <div class="list">${casosDe(id).map(c => {
        const n = state.casos[c.id];
        return `<a class="card" href="#/caso/${c.id}"><div><span class="pill">${c.tipo === 'peca' ? 'Peça · 5,00' : 'Questão · 1,25'}</span><h3 style="margin-top:6px">${esc(c.titulo)}</h3></div>
          ${n != null ? `<span class="check">${fmtNota(n)}</span>` : '<span class="muted">→</span>'}</a>`;
      }).join('')}</div>` : ''}
      <h2>🎬 Videoaulas</h2>
      <div class="row">${a.pecas.map(p => `<a class="btn ghost sm" target="_blank" rel="noopener" href="${ytBusca('OAB 2ª fase ' + a.nome + ' como fazer ' + p[0])}">▶ ${esc(p[0])}</a>`).join('')}</div>`;
  }

  /* treino da 2ª fase: o aluno escreve a resposta e depois se corrige pelo espelho da banca */
  const casosDe = area => (window.CASOS_2FASE || []).filter(c => c.area === area);
  const fmtNota = n => n.toFixed(2).replace('.', ',');

  function caso(id) {
    const c = (window.CASOS_2FASE || []).find(x => x.id === id);
    if (!c) return notFound();
    const area = S2.areas.find(a => a.id === c.area);
    const total = c.tipo === 'peca' ? 5 : 1.25;
    app.innerHTML = `
      <a class="back" href="#/segunda/${c.area}">← ${esc(area ? area.nome : '2ª Fase')}</a>
      <h1>${esc(c.titulo)}</h1>
      <span class="pill">${c.tipo === 'peca' ? 'Peça profissional · vale 5,00' : 'Questão discursiva · vale 1,25'}</span>
      <div class="card lesson" style="margin-top:16px">${c.enunciado.split(/\n+/).map(p => `<p>${esc(p)}</p>`).join('')}</div>
      <h2>Sua resposta</h2>
      <div class="card">
        <p class="muted" style="margin-top:0">${c.tipo === 'peca' ? 'Identifique a peça, o endereçamento, as teses com artigos e os pedidos. Escreva como na prova.' : 'Responda cada item com o fundamento legal (artigo).'} O texto fica salvo neste aparelho.</p>
        <textarea id="resp" rows="${c.tipo === 'peca' ? 16 : 7}" placeholder="Escreva aqui...">${esc(state.rascunhos[id] || '')}</textarea>
        <div class="row" style="margin-top:12px"><button class="btn" id="ver">Ver gabarito e corrigir</button></div>
      </div>
      <div id="correcao" hidden>
        <h2>Gabarito comentado</h2>
        <div class="card lesson">${c.gabarito.split(/\n+/).map(p => `<p>${esc(p)}</p>`).join('')}</div>
        <h2>Espelho de correção</h2>
        <div class="card">
          <p class="muted" style="margin-top:0">Marque cada item que a sua resposta contém. É assim que o examinador da FGV corrige.</p>
          <div class="list">${c.espelho.map((e, i) => `<label class="espelho"><input type="checkbox" data-i="${i}"><span>${esc(e[0])}</span><b>${fmtNota(e[1])}</b></label>`).join('')}</div>
          <div class="row between" style="margin-top:14px"><span class="muted">Sua nota</span><span class="stat" id="nota">0,00 / ${fmtNota(total)}</span></div>
          <div class="row" style="margin-top:12px"><button class="btn" id="salvar">Salvar nota</button></div>
        </div>
      </div>`;
    const resp = document.getElementById('resp');
    resp.oninput = () => { state.rascunhos[id] = resp.value; save(); };
    const nota = () => [...document.querySelectorAll('.espelho input:checked')].reduce((s, el) => s + c.espelho[+el.dataset.i][1], 0);
    document.querySelectorAll('.espelho input').forEach(el => el.onchange = () => {
      document.getElementById('nota').textContent = `${fmtNota(nota())} / ${fmtNota(total)}`;
    });
    document.getElementById('ver').onclick = () => {
      document.getElementById('correcao').hidden = false;
      document.getElementById('correcao').scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById('salvar').onclick = () => {
      state.casos[id] = Math.round(nota() * 100) / 100; save();
      location.hash = '#/segunda/' + c.area;
    };
  }

  function estrategias() {
    app.innerHTML = `
      <h1>Estratégias e macetes de prova</h1>
      <p class="muted">O método usado pelos cursinhos com mais aprovados, resumido.</p>
      <div class="grid two">${EST.map((e, i) => `<div class="card"><span class="pill">#${i + 1}</span><h3 style="margin-top:8px">${esc(e.titulo)}</h3><p class="muted" style="margin:0">${esc(e.texto)}</p></div>`).join('')}</div>
      <h2>Zerar progresso</h2>
      <div class="card row between"><span class="muted">Apaga aulas concluídas, respostas, treinos da 2ª fase e vídeos salvos neste aparelho.</span><button class="btn ghost sm" id="reset">Zerar</button></div>`;
    const rs = document.getElementById('reset');
    rs.onclick = () => {
      if (!rs.dataset.confirmar) { rs.dataset.confirmar = '1'; rs.textContent = 'Clique de novo para apagar tudo'; return; }
      Object.assign(state, { resp: {}, aulas: {}, videos: {}, rascunhos: {}, casos: {}, plano: {} }); save(); render();
    };
  }

  /* ---------- plano de estudos inteligente ---------- */
  const PD = window.PLANO_DADOS;
  const U = window.Plano.util;
  const hoje = () => U.iso(new Date());
  const DIAS_SEMANA = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const fmtData = d => U.parse(d).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const fmtDia = d => U.parse(d).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' });
  const fmtMin = m => (m >= 60 ? `${Math.floor(m / 60)}h${m % 60 ? String(m % 60).padStart(2, '0') : ''}` : `${m} min`);
  let planoCache = null;
  function planoAtual() {
    const cfg = state.plano && state.plano.cfg;
    if (!cfg) return null;
    const chave = JSON.stringify(cfg) + (window.CASOS_2FASE || []).length;
    if (!planoCache || planoCache.chave !== chave) {
      planoCache = { chave, r: window.Plano.gerar(cfg, { materias: M, blocos: PD.blocos, areas: S2.areas, casos: window.CASOS_2FASE || [] }) };
    }
    return planoCache.r;
  }
  function itemFeito(d, it) {
    if (it.tipo === 'aula') return !!state.aulas[it.m + ':' + it.t];
    if (it.tipo === 'caso') return state.casos[it.caso] != null;
    return !!(state.plano.feitos || {})[d.data + '|' + it.chave];
  }
  function itemLink(it) {
    switch (it.tipo) {
      case 'aula': case 'revisao': return `#/aula/${it.m}/${it.t}`;
      case 'questoes': case 'etica': return `#/quiz/${it.m}`;
      case 'revfinal': return `#/materia/${it.m}`;
      case 'leitura': return '#/materia/etica';
      case 'erros': return '#/quiz/erradas';
      case 'simulado': return '#/prova';
      case 'caso': return `#/caso/${it.caso}`;
      case 'peca': case 'discursiva': case 'simulado2': return it.area ? `#/segunda/${it.area}` : '#/segunda';
      default: return '';
    }
  }
  function itemHtml(d, it) {
    const feito = itemFeito(d, it), link = itemLink(it);
    const marcavel = !['prova', 'aula', 'caso'].includes(it.tipo);
    return `<div class="meta ${feito ? 'feita' : ''}">
      ${marcavel ? `<input type="checkbox" class="chk-meta" data-d="${d.data}" data-k="${esc(it.chave)}" ${feito ? 'checked' : ''} aria-label="Marcar como feita">`
        : `<span class="meta-ico">${it.tipo === 'prova' ? '🏁' : feito ? '✓' : '○'}</span>`}
      <div class="meta-txt"><b>${esc(it.texto)}</b><span class="muted">${esc(it.detalhe || '')}</span></div>
      <span class="meta-min">${it.tipo === 'prova' ? '' : fmtMin(it.min)}</span>
      ${link ? `<a class="btn ghost sm" href="${link}">Abrir</a>` : ''}
    </div>`;
  }
  function ligarChecks() {
    document.querySelectorAll('.chk-meta').forEach(el => el.onchange = () => {
      state.plano.feitos = state.plano.feitos || {};
      const k = el.dataset.d + '|' + el.dataset.k;
      if (el.checked) state.plano.feitos[k] = 1; else delete state.plano.feitos[k];
      save(); el.closest('.meta').classList.toggle('feita', el.checked);
    });
  }
  function diaHtml(d, aberto) {
    const h = hoje();
    const total = d.itens.reduce((s, it) => s + (it.tipo === 'prova' ? 0 : it.min), 0);
    const feitas = d.itens.filter(it => itemFeito(d, it)).length;
    const rotulo = d.data === h ? 'Hoje' : U.entre(h, d.data) === 1 ? 'Amanhã' : fmtDia(d.data);
    if (d.folga) return `<div class="dia folga"><span>${esc(rotulo)}</span><span class="muted">Folga</span></div>`;
    return `<details class="dia" ${aberto ? 'open' : ''}><summary><span><b>${esc(rotulo)}</b> <span class="muted">· ${esc(d.etapa)}</span></span>
      <span class="muted">${feitas}/${d.itens.length} metas · ${fmtMin(total)}</span></summary>
      <div class="metas">${d.itens.map(it => itemHtml(d, it)).join('')}</div></details>`;
  }
  function contagem(cfg) {
    const h = hoje(), out = [];
    if (cfg.fase1 && cfg.fase1 >= h) out.push({ n: U.entre(h, cfg.fase1), txt: 'dias para a 1ª fase', data: cfg.fase1 });
    if (cfg.fase2 && cfg.fase2 >= h) out.push({ n: U.entre(h, cfg.fase2), txt: 'dias para a 2ª fase', data: cfg.fase2 });
    return out;
  }
  function situacao(r) {
    const h = hoje();
    const passados = r.dias.filter(d => d.data < h && !d.folga);
    const metas = passados.flatMap(d => d.itens.filter(it => it.tipo !== 'prova').map(it => itemFeito(d, it)));
    const atrasadas = metas.filter(x => !x).length;
    const futuros = r.dias.filter(d => !d.folga);
    const todas = futuros.flatMap(d => d.itens.filter(it => it.tipo !== 'prova').map(it => itemFeito(d, it)));
    return { atrasadas, pct: pct(todas.filter(Boolean).length, todas.length) };
  }

  function planoCardHome() {
    const cfg = state.plano && state.plano.cfg;
    if (!cfg) {
      const ex = PD.exames[0];
      const n = U.entre(hoje(), ex.fase1);
      return `<section class="card plano-cta">
        <div><span class="pill">Plano de estudos</span><h2 style="margin:8px 0 4px">${n > 0 ? `Faltam ${n} dias para a 1ª fase do ${esc(ex.nome)}` : 'Monte seu plano até a prova'}</h2>
        <p class="muted" style="margin:0">Diga quanto tempo você tem por dia e o app monta metas diárias até a 1ª fase (${fmtData(ex.fase1)}) e a 2ª fase (${fmtData(ex.fase2)}).</p></div>
        <a class="btn" href="#/plano">Montar meu plano</a></section>`;
    }
    const r = planoAtual(), h = hoje();
    const d = r.dias.find(x => x.data === h);
    const prox = r.dias.find(x => x.data > h && !x.folga);
    const cont = contagem(cfg);
    return `<section class="card plano-hoje">
      <div class="row between"><h2 style="margin:0">Metas de hoje</h2>
        <div class="row">${cont.map(c => `<span class="pill">${c.n} ${c.txt}</span>`).join('')}</div></div>
      ${d && !d.folga ? `<div class="metas">${d.itens.slice(0, 5).map(it => itemHtml(d, it)).join('')}</div>`
        : `<p class="muted">${d && d.folga ? 'Hoje é folga no seu plano.' : 'Nenhuma meta para hoje.'} ${prox ? `Próximo dia de estudo: ${fmtDia(prox.data)}.` : ''}</p>`}
      <a class="btn ghost sm" href="#/plano">Ver plano completo</a></section>`;
  }

  function simuladoCardHome() {
    const p = state.prova;
    if (p && p.ids && !p.entregue) {
      return `<a class="card plano-cta" href="#/prova"><div><span class="pill oficial">Prova em andamento</span><h3 style="margin:8px 0 0">Continue seu simulado: ${Object.keys(p.resp).length}/80 respondidas</h3></div><span class="btn">Continuar</span></a>`;
    }
    const d = U.parse(hoje()); const falta = (7 - d.getDay()) % 7;
    const dom = U.soma(hoje(), falta);
    return `<a class="card plano-cta" href="#/prova"><div><span class="pill oficial">Simulado de domingo</span>
      <h3 style="margin:8px 0 4px">${falta === 0 ? 'Hoje é dia de simulado!' : `Próximo simulado: domingo, ${fmtData(dom)}`}</h3>
      <p class="muted" style="margin:0">Prova completa igual à da FGV: 80 questões oficiais de exames anteriores, 5 horas, das 13h às 18h.</p></div>
      <span class="btn ghost">Abrir</span></a>`;
  }

  function plano() {
    const cfg = state.plano && state.plano.cfg;
    if (!cfg || state.plano.editando) return planoForm(cfg);
    const r = planoAtual(), h = hoje();
    const sit = situacao(r);
    const cont = contagem(cfg);
    const etapaAtual = r.etapas.find(e => e.de <= h && e.ate >= h);
    const proximos = r.dias.filter(d => d.data >= h).slice(0, 8);
    const meses = {};
    r.dias.forEach(d => { const k = d.data.slice(0, 7); (meses[k] = meses[k] || []).push(d); });
    app.innerHTML = `
      <h1>Seu plano de estudos</h1>
      <div class="card hero">
        <div class="contagem">${cont.length ? cont.map(c => `<div><div class="stat">${c.n}</div><div class="muted">${c.txt}<br>${fmtData(c.data)}</div></div>`).join('') : '<div class="muted">As datas do plano já passaram. Edite o plano para a próxima prova.</div>'}
          <div><div class="stat">${sit.pct}%</div><div class="muted">do plano concluído</div></div></div>
        <p style="margin:14px 0 0">${etapaAtual ? `Etapa atual: <b>${esc(etapaAtual.nome)}</b> (até ${fmtData(etapaAtual.ate)}).` : ''}
          ${sit.atrasadas ? `Você tem <b>${sit.atrasadas}</b> meta(s) atrasada(s). Faça as que puder ou replaneje a partir de hoje.` : 'Você está em dia. 👏'}</p>
        <div class="row" style="margin-top:12px">
          <button class="btn sm" id="replanejar">Replanejar a partir de hoje</button>
          <button class="btn ghost sm" id="editar">Editar datas e rotina</button>
        </div>
      </div>
      ${PD.seccionais[cfg.uf || 'RJ'] ? `<p class="muted">📍 ${esc(PD.seccionais[cfg.uf || 'RJ'])}</p>` : ''}
      ${r.avisos.length ? `<div class="box macete"><h3>⚠️ Atenção</h3><ul>${r.avisos.map(a => `<li>${esc(a)}</li>`).join('')}</ul></div>` : ''}
      <h2>Próximos dias</h2>
      <div class="list">${proximos.map((d, i) => diaHtml(d, i === 0 || d.data === h)).join('') || '<p class="muted">Nenhuma meta pela frente.</p>'}</div>
      <h2>Etapas</h2>
      <div class="card"><ol class="steps">${r.etapas.map(e => `<li class="${etapaAtual === e ? 'atual' : ''}"><b>${esc(e.nome)}</b><br><span class="muted">${fmtData(e.de)} a ${fmtData(e.ate)}</span></li>`).join('')}</ol></div>
      <details class="card" id="completo"><summary><b>Ver o plano completo, dia a dia</b> <span class="muted">(${r.dias.filter(d => !d.folga).length} dias de estudo)</span></summary>
        ${Object.keys(meses).map(k => `<h3 style="margin:18px 0 8px;text-transform:capitalize">${U.parse(k + '-01').toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}</h3>
          <div class="list">${meses[k].map(d => diaHtml(d, false)).join('')}</div>`).join('')}
      </details>
      ${r.resumo.foraDoPlano && r.resumo.foraDoPlano.length ? `<h2>Se sobrar tempo</h2><div class="list">${r.resumo.foraDoPlano.map(x => `<a class="card" href="#/aula/${x.m}/${x.t}"><span>${esc(mat(x.m).nome)}: ${esc(x.titulo)}</span><span class="muted">→</span></a>`).join('')}</div>` : ''}
      <h2>Matérias que rendem juntas</h2>
      <p class="muted">O plano estuda as matérias em blocos de afinidade, intercalando direito material e processo. Assim um assunto reforça o outro.</p>
      <div class="grid two">${PD.blocos.map((b, i) => `<div class="card"><span class="pill">Bloco ${i + 1}</span><h3 style="margin-top:8px">${esc(b.nome)}</h3><p class="muted" style="margin:0">${esc(b.porque)}</p></div>`).join('')}</div>
      <h2>Técnicas de estudo do plano</h2>
      <div class="grid two">${PD.tecnicas.map(t => `<div class="card"><h3>${esc(t.titulo)}</h3><p class="muted" style="margin:0 0 8px">${esc(t.texto)}</p><span class="pill">${esc(t.aplica)}</span></div>`).join('')}</div>
      <h2>Para a 2ª fase</h2>
      <div class="card"><ol class="steps">${PD.segunda.map(s => `<li>${esc(s)}</li>`).join('')}</ol></div>
      <p class="row" style="margin-top:20px"><a class="btn ghost sm" href="#/estrategias">Estratégias de prova</a>
        <button class="btn ghost sm" id="apagar">Apagar plano</button></p>`;
    ligarChecks();
    document.getElementById('replanejar').onclick = () => {
      Object.assign(state.plano.cfg, { inicio: hoje(), jaFeitas: Object.keys(state.aulas).filter(k => state.aulas[k]) });
      save(); plano();
    };
    document.getElementById('editar').onclick = () => { state.plano.editando = true; plano(); window.scrollTo(0, 0); };
    const ap = document.getElementById('apagar');
    ap.onclick = () => {
      if (ap.dataset.confirmar) { state.plano = {}; save(); plano(); return; }
      ap.dataset.confirmar = '1'; ap.textContent = 'Clique de novo para apagar o plano';
    };
  }

  function planoForm(cfg) {
    const atual = cfg || { exame: '48', fase1: PD.exames[0].fase1, fase2: PD.exames[0].fase2, horas: 3, dias: [1, 2, 3, 4, 5, 6], area: '' };
    app.innerHTML = `
      ${cfg ? '<a class="back" href="#/plano" id="cancelar">← Voltar ao plano</a>' : ''}
      <h1>Monte seu plano de estudos</h1>
      <p class="muted">Responda 4 perguntas e o app distribui todo o conteúdo em metas diárias, com revisões programadas, simulados e a preparação da 2ª fase.</p>
      <form class="card plano-form" id="fplano">
        <label for="pExame"><b>1. Qual prova você vai fazer?</b></label>
        <select id="pExame">${PD.exames.map(e => `<option value="${e.id}" ${atual.exame === e.id ? 'selected' : ''}>${esc(e.nome)}</option>`).join('')}
          <option value="outro" ${atual.exame === 'outro' ? 'selected' : ''}>Outra data</option></select>
        <div class="grid two" style="gap:10px">
          <div id="wF1"><label for="pF1" class="muted">Data da 1ª fase</label><input type="date" id="pF1" value="${atual.fase1 || ''}"></div>
          <div><label for="pF2" class="muted">Data da 2ª fase</label><input type="date" id="pF2" value="${atual.fase2 || ''}"></div>
        </div>
        <label for="pHoras"><b>2. Quantas horas por dia você pode estudar?</b> <span id="lHoras" class="pill">${atual.horas}h</span></label>
        <input type="range" id="pHoras" min="1" max="8" step="1" value="${atual.horas}">
        <b>3. Em quais dias da semana?</b>
        <div class="row" id="pDias">${DIAS_SEMANA.map((n, i) => `<label class="chip"><input type="checkbox" value="${i}" ${atual.dias.includes(i) ? 'checked' : ''}><span>${n}</span></label>`).join('')}</div>
        <label for="pUf"><b>Seu estado</b></label>
        <select id="pUf">${['AC','AL','AM','AP','BA','CE','DF','ES','GO','MA','MG','MS','MT','PA','PB','PE','PI','PR','RJ','RN','RO','RR','RS','SC','SE','SP','TO']
          .map(uf => `<option ${(atual.uf || 'RJ') === uf ? 'selected' : ''}>${uf}</option>`).join('')}</select>
        <label for="pArea"><b>4. Qual área você vai escolher na 2ª fase?</b></label>
        <select id="pArea"><option value="">Ainda não sei</option>${S2.areas.map(a => `<option value="${a.id}" ${atual.area === a.id ? 'selected' : ''}>${esc(a.nome)}</option>`).join('')}</select>
        <p class="muted" id="pErro" hidden></p>
        <div class="row"><button class="btn" type="submit">${cfg ? 'Salvar e recalcular' : 'Gerar meu plano'}</button></div>
      </form>`;
    const ex = document.getElementById('pExame'), f1 = document.getElementById('pF1'), f2 = document.getElementById('pF2');
    const sincroniza = () => {
      const e = PD.exames.find(x => x.id === ex.value);
      if (e) { f1.value = e.fase1 || ''; f2.value = e.fase2 || ''; }
      document.getElementById('wF1').hidden = !!(e && !e.fase1);
    };
    ex.onchange = sincroniza;
    document.getElementById('wF1').hidden = !!((PD.exames.find(x => x.id === ex.value) || {}).fase1 === null);
    const hr = document.getElementById('pHoras');
    hr.oninput = () => { document.getElementById('lHoras').textContent = hr.value + 'h'; };
    const canc = document.getElementById('cancelar');
    if (canc) canc.onclick = ev => { ev.preventDefault(); delete state.plano.editando; plano(); };
    document.getElementById('fplano').onsubmit = ev => {
      ev.preventDefault();
      const dias = [...document.querySelectorAll('#pDias input:checked')].map(i => +i.value);
      const e = PD.exames.find(x => x.id === ex.value);
      const novo = { exame: ex.value, fase1: e && !e.fase1 ? null : (f1.value || null), fase2: f2.value || null, horas: +hr.value, dias,
        area: document.getElementById('pArea').value, uf: document.getElementById('pUf').value, inicio: hoje(), jaFeitas: Object.keys(state.aulas).filter(k => state.aulas[k]) };
      const erro = !dias.length ? 'Escolha pelo menos um dia da semana.'
        : !novo.fase1 && !novo.fase2 ? 'Informe a data de pelo menos uma das fases.'
        : novo.fase1 && novo.fase2 && novo.fase2 <= novo.fase1 ? 'A 2ª fase precisa ser depois da 1ª.' : '';
      const pe = document.getElementById('pErro');
      if (erro) { pe.textContent = erro; pe.hidden = false; return; }
      state.plano = { cfg: novo, feitos: (state.plano && state.plano.feitos) || {} };
      save(); location.hash = '#/plano'; plano(); window.scrollTo(0, 0);
    };
  }

  function notFound() { app.innerHTML = '<div class="card result"><p>Página não encontrada.</p><a class="btn" href="#/">Início</a></div>'; }

  render();
  if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => {});
})();
