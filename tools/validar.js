#!/usr/bin/env node
/* Valida os arquivos de conteúdo do Aprova OAB.  Uso: node oab/tools/validar.js
 * Carrega os dados na mesma ordem do index.html e aponta qualquer problema de formato. */
'use strict';
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'data');
const arquivos = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
const ordem = f =>
  f === 'materias.js' ? 0 : f === 'materias2.js' ? 1 : f === 'ementa.js' ? 1.5 : f.startsWith('ementa-') ? 1.6 : f.startsWith('aulas-') ? 2 :
  f === 'questoes.js' ? 3 : f.startsWith('questoes') ? 4 : 5;
arquivos.sort((a, b) => ordem(a) - ordem(b) || a.localeCompare(b, 'pt', { numeric: true }));

global.window = {};
const erros = [];
for (const f of arquivos) {
  try { require(path.join(dir, f)); }
  catch (e) { erros.push(`arquivo ${f} não carrega: ${e.message}`); }
}

const M = window.MATERIAS || [], Q = window.QUESTOES || [];
const eTexto = v => typeof v === 'string' && v.trim().length > 0;
const eLista = v => Array.isArray(v) && v.length > 0 && v.every(eTexto);

for (const m of M) {
  const vistos = new Set();
  for (const t of m.topicos) {
    const onde = `aula ${m.id}/${t.id}`;
    if (vistos.has(t.id)) erros.push(`${onde}: id de tópico repetido`);
    vistos.add(t.id);
    if (!eTexto(t.titulo)) erros.push(`${onde}: sem título`);
    if (!['alta', 'media'].includes(t.incidencia)) erros.push(`${onde}: incidência deve ser 'alta' ou 'media'`);
    if (!eLista(t.aula)) erros.push(`${onde}: 'aula' deve ser lista de parágrafos`);
    if (!eLista(t.cai)) erros.push(`${onde}: 'cai' deve ser lista`);
    if (!eLista(t.macetes)) erros.push(`${onde}: 'macetes' deve ser lista`);
    if (!eTexto(t.video)) erros.push(`${onde}: sem termo de busca de vídeo`);
  }
}

const ids = new Set();
for (const q of Q) {
  const onde = `questão ${q.id}`;
  if (ids.has(q.id)) erros.push(`${onde}: id repetido`);
  ids.add(q.id);
  const m = M.find(x => x.id === q.materia);
  if (!m) erros.push(`${onde}: matéria '${q.materia}' não existe`);
  else if (!m.topicos.find(t => t.id === q.topico)) erros.push(`${onde}: tópico '${q.topico}' não existe em ${q.materia}`);
  if (!eTexto(q.enunciado)) erros.push(`${onde}: sem enunciado`);
  if (!Array.isArray(q.alt) || q.alt.length !== 4) erros.push(`${onde}: deve ter exatamente 4 alternativas`);
  else {
    if (q.alt.filter(a => a[1] === true).length !== 1) erros.push(`${onde}: deve ter exatamente 1 alternativa correta`);
    q.alt.forEach((a, i) => {
      if (!eTexto(a[0]) || typeof a[1] !== 'boolean' || !eTexto(a[2])) erros.push(`${onde}: alternativa ${i + 1} mal formada`);
      else if (!/^(Correta|Errada)/.test(a[2])) erros.push(`${onde}: explicação da alternativa ${i + 1} deve começar com "Correta" ou "Errada"`);
      else if (a[1] !== a[2].startsWith('Correta')) erros.push(`${onde}: alternativa ${i + 1} marcada ${a[1]} mas explicada como "${a[2].split('.')[0]}"`);
    });
  }
}

const areas = ((window.SEGUNDA_FASE || {}).areas || []).map(a => a.id);
const casoIds = new Set();
for (const c of window.CASOS_2FASE || []) {
  const onde = `caso 2ª fase ${c.id}`;
  if (casoIds.has(c.id)) erros.push(`${onde}: id repetido`);
  casoIds.add(c.id);
  if (!areas.includes(c.area)) erros.push(`${onde}: área '${c.area}' não existe`);
  if (!['peca', 'questao'].includes(c.tipo)) erros.push(`${onde}: tipo deve ser 'peca' ou 'questao'`);
  for (const k of ['titulo', 'enunciado', 'gabarito']) if (!eTexto(c[k])) erros.push(`${onde}: campo '${k}' vazio`);
  if (!Array.isArray(c.espelho) || !c.espelho.length) erros.push(`${onde}: sem espelho`);
  else {
    const soma = Math.round(c.espelho.reduce((s, e) => s + e[1], 0) * 100) / 100;
    const alvo = c.tipo === 'peca' ? 5 : 1.25;
    if (soma !== alvo) erros.push(`${onde}: espelho soma ${soma}, deveria somar ${alvo}`);
    c.espelho.forEach((e, i) => { if (!eTexto(e[0]) || typeof e[1] !== 'number' || e[1] <= 0) erros.push(`${onde}: item ${i + 1} do espelho mal formado`); });
  }
}

const E = window.EMENTA || {};
for (const m of M) {
  if (!E[m.id]) { erros.push(`ementa: matéria ${m.id} sem grade`); continue; }
  const ids = E[m.id].flatMap(u => u.aulas.map(a => a[0]));
  ids.filter((x, i) => ids.indexOf(x) !== i).forEach(x => erros.push(`ementa ${m.id}: id repetido ${x}`));
}
const aulas = M.reduce((n, m) => n + m.topicos.length, 0);
console.log(`Arquivos: ${arquivos.length} | matérias: ${M.length} | aulas: ${aulas} | questões: ${Q.length} | casos 2ª fase: ${casoIds.size}`);
if (erros.length) { console.log(`\n${erros.length} problema(s):\n- ` + erros.join('\n- ')); process.exit(1); }
console.log('Tudo certo.');
