/* Cache offline: o app funciona sem internet depois do primeiro acesso (exceto vídeos). */
const CACHE = 'aprova-oab-v1';
const ARQS = ['./', 'index.html', 'styles.css', 'app.js', 'manifest.json', 'icon.svg',
  'data/materias.js', 'data/questoes.js', 'data/segunda-fase.js'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQS)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks =>
  Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => {
    const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return r;
  }).catch(() => caches.match(e.request)));
});
