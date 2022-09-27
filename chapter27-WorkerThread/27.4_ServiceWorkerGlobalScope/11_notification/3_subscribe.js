// 来自服务器的公钥
let key = "123";
// ServiceWorker 可以使用全局的 registration 属性自己订阅
self.addEventListener("activate", () => {
    self.ServiceWorkerRegistration.pushManager.subscribe({ applicationServerKey: key, userVisibleOnly: true });
});