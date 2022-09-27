self.addEventListener("install", (event) => {
    // 填充缓存, 然后强制ServiceWorker进入已激活状态
    // 这样会触发activate事件
    event.waitUnitl(caches.open("v1")
        .then((cache) => cache.addAll(["foo.css", "bar.js"]))
        .then(() => self.skipWaiting()));
});

// 强制ServiceWorker接管客户端
// 这会在每个客户端触发controllerchange事件
self.addEventListener("activate", (event) => {
    clietns.claim();
});