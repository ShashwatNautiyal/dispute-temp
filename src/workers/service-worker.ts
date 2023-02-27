import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from "workbox-precaching";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { NavigationRoute, registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";

declare let self: ServiceWorkerGlobalScope;

self.addEventListener("message", (event) => {
  // Message from `vite-plugin-pwa/client` to skip waiting and update the SW.
  if (event.data && event.data.type === "SKIP_WAITING")
    self.skipWaiting();
});

// `self.__WB_MANIFEST` is default injection point.
precacheAndRoute(self.__WB_MANIFEST);

// Clean old assets.
cleanupOutdatedCaches();

// To allow work offline.
registerRoute(new NavigationRoute(createHandlerBoundToURL("index.html")));

// Cache the Google Fonts stylesheets with a SWR strategy.
registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets"
  })
);

// Cache the underlying font files with a SWR strategy for 1 week.
registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new StaleWhileRevalidate({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7
      })
    ]
  })
);
