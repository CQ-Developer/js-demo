let messageProt = null;
let contextIdentifier = null;

function addContextAndSend(data, destination) {
    // 添加标识符以标识当前工作线程
    data.push(contextIdentifier);
    // 把数据发送到下一个目标
    destination.postMessage(data);
}

self.onmessage = ({data, ports}) => {
    // 如果消息里存在端口则初始化工作者线程
    if (ports.length) {
        // 记录标识符
        contextIdentifier = data;
        // 获取messageProt
        messageProt = ports[0];
        // 添加处理程序把接收的数据发回到父页面
        messageProt.onmessage = ({data}) => addContextAndSend(data, self);
    } else {
        addContextAndSend(data, messageProt);
    }
};