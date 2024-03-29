// 在监听器中存储全局messagePort
let messagePort = null;

function factorial(n) {
    let result = 1;
    while (n) {
        result *= n--;
    }
    return result;
}

// 在全局对象上添加消息处理程序
self.onmessage = ({ports}) => {
    // 值设置一次端口
    if (!messagePort) {
        // 初始化消息发送端口
        messagePort = ports[0];
        // 给变量赋值并重置监听器
        self.onmessage = null;
        // 在全局对象上设置消息处理程序
        messagePort.onmessage = ({data}) => {
            // 收到消息后发送数据
            messagePort.postMessage(`${data}! = ${factorial(data)}`);
        };
    }
};