const NAMA_CACHE = 'tarik-tali-matematik-v1';
const FAIL = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', function (acara) {
  acara.waitUntil(
    caches.open(NAMA_CACHE).then(function (cache) {
      return cache.addAll(FAIL);
    })
  );
});

self.addEventListener('fetch', function (acara) {
  acara.respondWith(
    caches.match(acara.request).then(function (respon) {
      return respon || fetch(acara.request);
    })
  );
});
