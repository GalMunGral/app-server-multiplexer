const excludedPaths = new Set(['/', '/index.html'])
let origin;
self.addEventListener('message', e => {
  origin = e.data;
})
self.addEventListener('fetch', e => {
  let url = new URL(e.request.url);
  let path;
  if (url.host !== location.host) {
    path = encodeURIComponent(url.href)
  } else if (!excludedPaths.has(url.pathname) && origin) {
    path = encodeURIComponent(origin + url.pathname);
  }
  if (path) {
    e.respondWith(
      fetch('/proxy/' + path, {
        method: e.request.method,
        headers: e.request.headers
      })
    );
  }
});
