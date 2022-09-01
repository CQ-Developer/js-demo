/** 
 * 20.1.2.4 原子Futex操作与加锁
 * 
 * 没有锁机制, 多线程程序就无法支持复杂需求
 * 为此, Atomics API提供了模仿 Linux Futex 的方法
 * 这些方法本身虽然非常简单, 但可以作为更复杂的锁机制的基本组件
 * 
 * 注意: 所有原子Futex操作只能用于Int32Array试图, 并且只能用在工作线程内部
 * 
 * Atomics API 还提供了Atomics.isLockFree()方法
 * 不过基本应该用不到
 * 这个方法在高性能计算中可以用来确定是否有必要获取锁
 */
const workerScript = `
self.onmessage = ({data}) => {
    const view = new Int32Array(data);
    console.log("Waiting to obtain lock");

    // 遇到初始值则停止, 10000mm超时
    Atomics.wait(view, 0, 0, 1E5);
    console.log("Obtain lock");

    // 在索引0处加1
    Atomics.add(view, 0, 1);
    console.log("Releasing lock");

    // 只允许1个工作线程继续执行
    Atomics.notify(view, 0, 1);
    
    self.postMessage(null);
};
`;

const workerScriptBlobUrl = URL.createObjectURL(new Blob([workerScript]));

const workers = [];
for (let i = 0; i < 4; i++) {
    workers.push(new Worker(workerScriptBlobUrl));
}

// 在最后一个工作线程完成后打印出最终值
let responseCount = 0;
for (const worker of workers) {
    worker.onmessage = () => {
        if (++responseCount == workers.length) {
            console.log(`Final buffer value: ${view[0]}`);
        }
    };
}

// 初始化SharedArrayBuffer
const buffer = new SharedArrayBuffer(8);
const view = new Int32Array(buffer);

// 把SharedArrayBuffer发送到每个工作线程
for (const worker of workers) {
    worker.postMessage(buffer);
}

// 1000mm后释放第一个锁
setTimeout(() => Atomics.notify(view, 0, 1), 1000);