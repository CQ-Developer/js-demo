/**
 * 27.4.10 拦截fetch事件
 * 
 * 1.从缓存返回
 * https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent
 * 
 * 这个策略其实就是缓存检查
 * 对于任何肯定有缓存的资源, 可以采用该策略, 如在安装阶段缓存的资源
 */
self.addEventListener("fetch", (event) => {
    event.respondWith(caches.match(event.request));
});