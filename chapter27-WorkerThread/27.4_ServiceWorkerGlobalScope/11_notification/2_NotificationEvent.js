/**
 * 27.4.11 推送通知
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event
 * https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event
 * https://developer.mozilla.org/en-US/docs/Web/API/Clients/openWindow
 * 
 * 2.处理通知事件
 * 
 * 通过 ServiceWorkerRegistration 对象创建的通知会向 ServiceWoker 发送 notificationclick 和 notificationclose 事件
 * 
 * 在本例中, 与通知的两种交互操作都在 ServiceWorker 中注册了处理程序
 * 这里的 NotificationEvent 对象暴露了 notification 属性, 其中包含着生成该事件 Notification 对象
 * 这些处理程序可以决定互操作之后的响应方式
 * 
 * 一般来说, 单机通知意味着用户希望转到某个具体的页面
 * 在服务工作者线程处理程序中, 可以通过 clients.openWindow()打开响应的URL
 */
self.addEventListener("notificationclick", ({ notification }) => {
    console.log("notification click", notification);
    clients.openWindow("https://foo.com");
});

self.addEventListener("notificationclose", ({ notification }) => {
    console.log("notification close", notification);
});