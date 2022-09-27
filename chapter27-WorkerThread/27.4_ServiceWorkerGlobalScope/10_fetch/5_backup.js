/**
 * 27.4.10 拦截fetch事件
 * 
 * 1.从缓存返回
 * https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent
 * 
 * 应用程序需要考虑缓存和网络都不可用的情况
 * 服务工作者线程可以在安装时缓存后备资源, 然后再缓存和网络都失败时返回它们
 */
self.addEventListener("fetch", (event) => {
    event.respondWith(caches.match(event.request)
        .then((response) => response || fetch(event.request))
        .catch(() => caches.match("/fallback.html")));
});