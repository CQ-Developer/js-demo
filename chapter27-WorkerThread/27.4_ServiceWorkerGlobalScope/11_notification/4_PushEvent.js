// 受到推送事件后, 在通知中已文本形式显示数据
self.addEventListener("push", (event) => {
    // 保持ServiceWroker活动到通知Promise被resolve
    event.waitUntil(self.registration.showNotification(event.data.text()));
});

// 如果用户点击通知, 则打开响应的应用程序页面
self.addEventListener("notificationclick", ({ notification }) => {
    clients.openWindow("https://example.com/click-notification");
});