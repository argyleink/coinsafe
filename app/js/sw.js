importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  'index.html',
  'index.js',
  '/home/index.html',
  '/home/index.js',
  '/buy/index.html',
  '/buy/index.js',
  '/ethereum/index.html',
  '/ethereum/index.js',
  '/preview/index.html',
  '/preview/index.js',
  '/home/index.html',
  '/home/index.js',
  '/common.bundle.css',
  '/common.bundle.js',
])

workbox.routing.registerRoute(
  /(.*)articles(.*)\.(?:png|gif|jpg)/,
  workbox.strategies.cacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      })
    ]
  })
)