/**
 * 27.4.10 拦截fetch事件
 * 
 * 1.从缓存返回
 * https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent
 * 
 * 这个策略有限考虑响应速度, 但仍会在没有缓存的情况下发送网络请求
 * 这是大多数渐进式Web应用程序采取的首选策略
 */
self.addEventListener("fetch", (event) => {
    event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
});