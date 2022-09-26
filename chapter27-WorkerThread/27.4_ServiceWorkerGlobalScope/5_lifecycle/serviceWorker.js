// 1.安装中状态
self.addEventListener("install", event => {
    console.log("Service worker is in the installing state");
    // 延迟5秒再将状态过度到installed状态
    event.waitUntil(new Promise((resolve, reject) => setTimeout(resolve, 5000)));
    // 更接近的实际的例子是通过Cache.addAll()缓存一组资源之后再过度
    // 如果没有错误发生或者没有reject, 服务工作者线程就会前进到installed状态
    event.waitUntil(caches.open("v1").then((cache) => cache.addAll(["foo.js", "bar.html", "baz.css"])));
});
