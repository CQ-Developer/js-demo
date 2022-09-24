self.addEventListener("message", ({data}) => {
    const view = new Uint32Array(data);
    // 执行100万次加操作
    for (let i = 0; i < 1E6; i++) {
        Atomics.add(view, 0, 1);
    }
    self.postMessage(null);
});