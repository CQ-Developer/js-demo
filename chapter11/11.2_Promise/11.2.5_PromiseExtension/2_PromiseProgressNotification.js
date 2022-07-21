/**
 * 11.2.5_2 期约进度通知
 * 
 * 执行中的Promise可能会有不少离散的阶段, 在最终解决之前必须依次经过
 * 某些情况下, 监控Promise的执行进度会很有用
 * ES6的Promise并不支持进度追踪, 但是可以通过扩展来实现
 * 
 * 一种实现方式是扩展Promise类, 为它添加notify()方法
 */
class TrackablePromise extends Promise {
    constructor(executor) {
        const notifyHandlers = [];
        
        super((resolve, reject) => {
            return executor(resolve, reject, status => notifyHandlers.map(handler => handler(status)));
        });

        this.notifyHandlers = notifyHandlers;
    }

    notify(notifyHandler) {
        this.notifyHandlers.push(notifyHandler);
        return this;
    }
}

/**
 * 这样, TrackablePromise就可以在执行函数中使用notify()函数了
 * 可以像下面这样使用这个函数来实例化一个期约
 */
let p = new TrackablePromise((resolve, reject, notify) => {
    function countdown(x) {
        if (x > 0) {
            notify(`${20 * x}% remaining`);
            setTimeout(() => countdown(x - 1), 1000);
        } else {
            resolve();
        }
    }

    countdown(5);
});

/**
 * 这个期约会连续5次递归地设置1000毫秒的超时
 * 每个超时回调都会调用notify()并传入状态值
 * 假设通知处理程序简单的这样写
 */
p.notify(x => setTimeout(console.log, 0, "progress", x));
p.then(() => setTimeout(console.log, 0, "completed"));

/**
 * notify()函数会返回Promise, 所以可以连缀调用, 连续添加处理器程序
 * 多个处理程序会针对收收到的每条消息分别执行一遍
 */
p.notify(x => setTimeout(console.log, 0, "a:", x))
 .notify(x => setTimeout(console.log, 0, "b:", x))
 .then(() => setTimeout(console.log, 0, "completed"));
