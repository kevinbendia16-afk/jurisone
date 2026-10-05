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
    try { return Object.assign({ resp: {}, aulas: {}, videos: {} }, JSON.parse(localStorage.getItem(KEY)) || {}); }
    catch (e) { return { resp: {}, aulas: {}, videos: {} }; }
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
    [/^\/segunda$/, segunda],
    [/^\/segunda\/([\w-]+)$/, segundaArea],
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
    const ativo = { materia: 'materias', aula: 'materias', quiz: 'questoes', simulado: 'questoes' }[sec] || sec;
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
  }

  function materias() {
    const ord = M.slice().sort((a, b) => b.qtd - a.qtd);
    app.innerHTML = `
      <h1>1ª Fase · Matérias</h1>
      <p class="muted">Ordenadas pelo número médio de questões na prova. Comece pelas de maior peso.</p>
      <div class="grid">${ord.map(m => {
        const st = statsDe(Q.filter(q => q.materia === m.id));
        return `<a class="card subj" href="#/materia/${m.id}">
          <div class="row between"><span class="ico" style="background:${m.cor}22">${m.icone}</span><span class="pill">≈ ${m.qtd} questões</span></div>
          <h3>${esc(m.nome)}</h3>
          <span class="muted">${aulasDe(m)}/${m.topicos.length} aulas · ${st.feitas}/${st.total} questões</span>
          <div class="bar"><i style="width:${pct(aulasDe(m), m.topicos.length)}%"></i></div>
        </a>`; }).join('')}</div>`;
  }

  function materia(id) {
    const m = mat(id); if (!m) return notFound();
    const qs = Q.filter(q => q.materia === id);
    app.innerHTML = `
      <a class="back" href="#/materias">← Matérias</a>
      <h1>${m.icone} ${esc(m.nome)}</h1>
      <div class="box macete"><h3>🎯 Estratégia para esta matéria</h3>${esc(m.dica)}</div>
      <h2>Aulas</h2>
      <div class="list">${m.topicos.map((t, i) => `
        <a class="card" href="#/aula/${m.id}/${t.id}">
          <div><div class="muted">Aula ${i + 1}</div><h3>${esc(t.titulo)}</h3>
          <span class="pill ${t.incidencia}">Incidência ${t.incidencia === 'alta' ? 'alta' : 'média'}</span></div>
          ${state.aulas[m.id + ':' + t.id] ? '<span class="check">✓</span>' : '<span class="muted">→</span>'}
        </a>`).join('')}</div>
      <h2>Praticar</h2>
      <a class="btn" href="#/quiz/${m.id}">Resolver ${qs.length} questões de ${esc(m.nome)}</a>`;
  }

  function aula(mid, tid) {
    const m = mat(mid); const t = m && m.topicos.find(x => x.id === tid);
    if (!t) return notFound();
    const chave = mid + ':' + tid;
    const vid = state.videos[chave] || t.videoId || '';
    const idx = m.topicos.indexOf(t), prox = m.topicos[idx + 1];
    const nq = Q.filter(q => q.materia === mid && q.topico === tid).length;
    app.innerHTML = `
      <a class="back" href="#/materia/${mid}">← ${esc(m.nome)}</a>
      <h1>${esc(t.titulo)}</h1>
      <span class="pill ${t.incidencia}">Incidência ${t.incidencia === 'alta' ? 'alta' : 'média'} na prova</span>

      <div class="card lesson" style="margin-top:16px">
        ${t.aula.map(p => `<p>${esc(p)}</p>`).join('')}
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
  }

  /* motor de questões, usado no treino e no simulado */
  function rodar(lista, opts) {
    opts = opts || {};
    const prep = lista.map(q => ({ q, alt: shuffle(q.alt) }));
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
        <p>Questões de todas as matérias, misturadas e sem mostrar o gabarito durante a prova, no ritmo real do Exame (3 min e 45 s por questão: 5 horas ÷ 80). O resultado e o gabarito comentado aparecem no final.</p>
        <label class="muted">Quantidade de questões</label>
        <select id="qtd">${[10, 20, 30, Q.length].filter((v, i, a) => v <= Q.length && a.indexOf(v) === i).map(n => `<option value="${n}">${n} questões (${Math.round(n * 3.75)} min)</option>`).join('')}</select>
        <div class="row" style="margin-top:14px"><button class="btn" id="go">Iniciar simulado</button></div>
      </div>`;
    document.getElementById('go').onclick = () => {
      const n = +document.getElementById('qtd').value;
      rodar(shuffle(Q).slice(0, n), { segundos: Math.round(n * 225), semGabarito: true, voltar: '#/simulado' });
    };
  }

  function segunda() {
    app.innerHTML = `
      <h1>2ª Fase · Prova prático-profissional</h1>
      <div class="card"><h3>📋 Regras que você precisa saber</h3><ul>${S2.regras.map(r => `<li>${esc(r)}</li>`).join('')}</ul></div>
      <h2>Estrutura de qualquer peça</h2>
      <div class="card"><ol class="steps">${S2.estrutura.map(e => `<li><b>${esc(e[0])}</b><br><span class="muted">${esc(e[1])}</span></li>`).join('')}</ol></div>
      <h2>Escolha sua área</h2>
      <div class="grid">${S2.areas.map(a => `<a class="card subj" href="#/segunda/${a.id}"><span class="ico" style="background:#f5b94222">${a.icone}</span><h3>${esc(a.nome)}</h3><span class="muted">${a.pecas.length} peças principais</span></a>`).join('')}</div>`;
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
      <h2>🎬 Videoaulas</h2>
      <div class="row">${a.pecas.map(p => `<a class="btn ghost sm" target="_blank" rel="noopener" href="${ytBusca('OAB 2ª fase ' + a.nome + ' como fazer ' + p[0])}">▶ ${esc(p[0])}</a>`).join('')}</div>`;
  }

  function estrategias() {
    app.innerHTML = `
      <h1>Estratégias e macetes de prova</h1>
      <p class="muted">O método usado pelos cursinhos com mais aprovados, resumido.</p>
      <div class="grid two">${EST.map((e, i) => `<div class="card"><span class="pill">#${i + 1}</span><h3 style="margin-top:8px">${esc(e.titulo)}</h3><p class="muted" style="margin:0">${esc(e.texto)}</p></div>`).join('')}</div>
      <h2>Zerar progresso</h2>
      <div class="card row between"><span class="muted">Apaga aulas concluídas, respostas e vídeos salvos neste aparelho.</span><button class="btn ghost sm" id="reset">Zerar</button></div>`;
    document.getElementById('reset').onclick = () => {
      if (!confirm('Apagar todo o seu progresso?')) return;
      state.resp = {}; state.aulas = {}; state.videos = {}; save(); render();
    };
  }

  function notFound() { app.innerHTML = '<div class="card result"><p>Página não encontrada.</p><a class="btn" href="#/">Início</a></div>'; }

  render();
  if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => {});
})();
