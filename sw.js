const CACHE='sub2-daily-v3';
const FILES=['./','./index.html','./app.css','./app.js','./data.js','./manifest.webmanifest'];
/* Network-first, and the network fetch must skip the browser's HTTP cache:
   GitHub Pages serves everything with max-age=600, so a plain fetch() could
   hand back a 10-minute-old data.js and the worker would then store that
   stale copy as its offline fallback. 'no-cache' revalidates with the server
   every time (cheap 304 when nothing changed). */
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('sub2-daily-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(fetch(e.request,{cache:'no-cache'}).then(r=>{if(r.ok){const copy=r.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(e.request,copy)))}return r}).catch(()=>caches.match(e.request).then(r=>r||(e.request.mode==='navigate'?caches.match('./index.html'):Response.error()))))});
