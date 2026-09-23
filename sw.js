const CACHE_NAME = 'tattica-regata-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
  // Aggiungi qui eventuali file CSS, JS o immagini necessari
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
