var browserSupportSW = navigator.userAgent.includes('SamsungBrowser') ? false : true;

if (browserSupportSW) {
  // The service worker need to call `event.waitUntil` asynchronously.
  // If the browser is based on Chromium, It would require version >= 60.
  // See the Chromium Bug report here: https://bugs.chromium.org/p/chromium/issues/detail?id=621440
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

  workbox.setConfig({
    debug: false
  });

  workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.staleWhileRevalidate({
      // Use a custom cache name
      cacheName: 'js-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache for a maximum of a week
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    // Cache CSS files
    new RegExp('.*\.css'),
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
      // Use a custom cache name
      cacheName: 'css-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache for a maximum of a week
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    // Cache image files
    new RegExp('.*\.(?:png|jpg|jpeg|svg|gif)'),
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache only 60 images
          maxEntries: 60,
          // Cache for a maximum of a month
          maxAgeSeconds: 30 * 24 * 60 * 60,
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    // Cache fonts
    new RegExp('.*\.woff'),
    // Simply use the cache, no need to update the font files
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'fonts-cache'
    })
  );
}
