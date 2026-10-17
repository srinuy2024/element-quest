// ElementQuest Service Worker for 100% Offline Android Mobile Play
const CACHE_NAME = 'element-quest-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './data/elements.js',
  './data/molecules.js',
  './data/real-world-maps.js',
  './js/audio.js',
  './js/atom-renderer.js',
  './js/interactive-scenes.js',
  './js/confetti.js',
  './js/molecule-lab.js',
  './js/fireworks-lab.js',
  './js/real-world-lab.js',
  './js/thermal-lab.js',
  './js/diploma-modal.js',
  './js/mascot-guide.js',
  './js/game-modes.js',
  './js/app.js',
  './assets/icon.svg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Network-first strategy: always fetch fresh updates when online, fallback to cache when offline
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cached) => {
          return cached || caches.match('./index.html');
        });
      })
  );
});
