self.addEventListener("message", ({ data, source }) => {
    console.log("service worker heard:", data);
    source.postMessage("bar");
});

// 前面的例子在每次夜间重新加载时都会运行
// 这是因为ServiceWorker会回应每次刷新客户端脚本发送的消息
// 在通过新标签页打开这个页面时也一样
// 如果服务工作者线程需要率先发送消息, 可以像下面这样获得客户端的引用
self.addEventListener("active", () => {
    self.clients.matchAll({includeUncontrolled: true}).then((clientMatches) => {
        clientMatches[0].postMessage("foo");
    });
});