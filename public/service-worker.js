const excludedPaths = new Set(['/', '/index.html'])
let origin;
self.addEventListener('message', e => {
  console.log('Origin: ', origin);
  origin = e.data;
})
self.addEventListener('fetch', e => {
  let url = new URL(e.request.url);
  console.log('Intercepted request for:', url.host, url.pathname);
  if (url.host !== location.host) {
    e.respondWith(fetch('/proxy/' + encodeURIComponent(url.href)));
  } else if (!excludedPaths.has(url.pathname) && origin) {
    e.respondWith(fetch('/proxy/' + encodeURIComponent(origin + url.pathname)));
  }
});
