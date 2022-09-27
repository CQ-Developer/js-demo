/**
 * 27.4.10 拦截fetch事件
 * 
 * 1.从缓存返回
 * https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent
 * 
 * 这个策略把从网络获取最新的数据作为首选, 但如果缓存中有值也会返回缓存的值
 * 如果应用程序需要尽可能展示最新数据, 但在离线的情况下仍要展示一些信息, 就可以采用该策略
 */
self.addEventListener("fetch", (event) => {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});