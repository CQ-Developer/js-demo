self.addEventListener("message", ({data}) => {
    const view = new Uint8Array(data);
    console.log(`buffer value before worker modification: ${view[0]}`);
    // 工作者线程为共享缓冲区赋值
    view[0] += 1;
    // 发送空消息通知赋值完成
    self.postMessage(null);
});