/* Cache offline: o app funciona sem internet depois do primeiro acesso (exceto vídeos). */
const CACHE = 'aprova-oab-v10';
const ARQS = ['./', 'index.html', 'styles.css', 'app.js', 'manifest.json', 'icon.svg',
  'data/materias.js', 'data/materias2.js', 'data/ementa.js', 'data/aulas-a.js', 'data/aulas-b.js', 'data/aulas-penal-1.js', 'data/aulas-penal-2.js', 'data/questoes.js', 'data/questoes2.js', 'data/questoes3.js', 'data/questoes4.js', 'data/questoes-a.js', 'data/questoes-b.js', 'data/segunda-fase.js', 'data/casos-2fase-a.js', 'data/casos-2fase-b.js', 'data/plano-dados.js', 'plano.js'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQS)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks =>
  Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => {
    const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return r;
  }).catch(() => caches.match(e.request)));
});
