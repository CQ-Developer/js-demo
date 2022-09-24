/**
 * 这里, 每个工作者线程都顺序执行了100万次加操作, 每次都读取共享数组的索引, 执行一次加操作, 然后再把值写回数组索引
 * 在所有工作者线程读写操作交织的过程中就会发生资源争用
 * 例如:
 * 1.线程A读取到值1
 * 2.线程B读取到值1
 * 3.线程A加1并将2写回数组
 * 4.线程B仍然使用陈旧的数值1, 同样把2写会数组
 */
self.addEventListener("message", ({data}) => {
    const view = new Uint32Array(data);
    // 执行100万次加操作
    for (let i = 0; i < 1E6; i++) {
        view[0] += 1;
    }
    self.postMessage(null);
});