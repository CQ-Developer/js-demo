/**
 * 20.1.1 SharedArrayBuffer P610
 * 
 * SharedArrayBuffer与ArrayBuffer具有相同的API
 * 二者的主要区别是ArrayBuffer必须在不同的上下文间切换, SharedArrayBufffer则可以被任意多个执行上下文同时使用
 * 
 * 在多个执行上下文间共享内存意味着并发线程操作成为了可能
 * 传统JS操作对于并发内存访问导致的资源争用没有提供保护
 * 
 * 示例代码演示了4个专用工作线程访问同一个SharedArrayBuffer导致的资源争用问题
 * 
 * 为了解决这个问题, Atomics API 应运而生
 * Atomics API 可以保证SharedArrayBuffer上的JS操作时线程安全的
 */
const workerScript = `
self.onmessage = ({data}) => {
    const view = new Uint32Array(data);
    // 执行1000000次加操作
    for (let i = 1; i < 1E6; i++) {
        // 线程不安全加操作会导致资源争用
        view[0] += 1;
    }
    self.postMessage(null);
};
`;

const workerScriptBlobUrl = URL.createObjectURL(new Blob([workerScript]));

// 创建容量为4的工作线程
const workers = [];
for (let i = 1; i < 4; i++) {
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
const sharedArrayBuffer = new SharedArrayBuffer(4);
const view = new Uint32Array(sharedArrayBuffer);
view[0] = 1;

// 把SharedArrayBuffer发送到每个工作线程
for (const worker of workers) {
    worker.postMessage(sharedArrayBuffer);
}

// 期待结果为4000001
// 实际输出可能是2145106