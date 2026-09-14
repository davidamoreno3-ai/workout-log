var CACHE = "workout-log-v11";
var NET_TIMEOUT = 3000;
var ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-512-maskable.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

// Give up on the network after a moment so a dead gym connection doesn't
// leave the app hanging on a request that will never answer.
function fromNetwork(req) {
  return new Promise(function (resolve, reject) {
    var timer = setTimeout(function () { reject(new Error("timeout")); }, NET_TIMEOUT);
    // no-cache: revalidate with the server rather than trusting the HTTP
    // cache, which GitHub Pages holds for ten minutes
    fetch(req, { cache: "no-cache" }).then(function (res) {
      clearTimeout(timer);
      resolve(res);
    }, function (err) {
      clearTimeout(timer);
      reject(err);
    });
  });
}

// Network first: a new version has to show up the moment the app is reopened
// with a connection. The cache is the fallback that keeps it working without.
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fromNetwork(req).then(function (res) {
      if (res && res.ok) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (hit) {
        if (hit) return hit;
        return req.mode === "navigate" ? caches.match("./index.html") : Response.error();
      });
    })
  );
});
