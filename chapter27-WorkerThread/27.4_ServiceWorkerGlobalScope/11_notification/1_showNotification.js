// 在ServiceWorker内部可以使用全局registration属性触发通知
self.addEventListener("activate", () => {
    self.ServiceWorkerRegistration.showNotification("bar");
});