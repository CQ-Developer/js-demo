/**
 * 27.4.10 拦截fetch事件
 * 
 * 1.从网络返回
 * https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent
 * 
 * 这个策略就是简单地转发fetch事件
 * 那些绝对需要发送到服务器的请求例如POST请求就适合该策略
 */
self.addEventListener("fetch", (event) => {
    event.respondWith(fetch(event.request));
});