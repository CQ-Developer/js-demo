/**
 * 11.1.2_1 异步返回值
 * 
 * 假设setTimeout操作会返回一个有用的值
 * 广泛采用的一个策略是给异步操作提供一个回调, 这个回调中包含要使用异步返回值的代码, 作为回调的参数
 */
function double(value, callback) {
    // 这里setTimeout告诉JS运行时在1000ms后把一个函数推到消息队列上
    // 这个函数会由运行时负责异步调度执行
    // 而位于函数闭包中的回调及参数在异步执行时仍然是可用的
    setTimeout(() => callback(value * 2), 1000);
}

double(3, x => console.log(`I was given: ${x}`));
