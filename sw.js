const CACHE_NAME = 'nclex-esol-v1';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './questions.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// Install Event - Cache Files
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Fetch Event - Serve from Cache if available
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
