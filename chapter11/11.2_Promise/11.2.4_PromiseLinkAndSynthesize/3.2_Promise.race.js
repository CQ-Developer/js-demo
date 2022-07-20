/**
 * 11.2.4_3_1 Promise.race()
 * 
 * Promise.race() 静态方法返回一个包装 Promise, 是一组集合中最先解决或拒绝的 Promise 的镜像
 * 这个方法接收一个可迭代对象, 返回一个新 Promise
 */
let p1 = Promise.race([
    Promise.resolve(),
    Promise.resolve()
]);

// 可迭代对象中的元素会通过Promise.resolve()转换为Promise
let p2 = Promise.race([3, 4]);

// 空的可迭代对象等价于new Promise(() => {})
let p3 = Promise.race([]);

// 无效语法(TypeError: undefined is not iterable)
let p4 = Promise.race();

/**
 * Promise.race() 不会对解决或拒绝的 Promise 区别对待
 * 无论是解决还是拒绝, 只要是第一个落定的 Promise, Promise.race() 就会包装其解决值或拒绝理由并返回新 Promise
 */
let p5 = Promise.race([
    Promise.resolve(3),
    new Promise((resolve, reject) => setTimeout(reject, 1000))
]);
setTimeout(console.log, 0, p5);

// 拒绝先发生, 超时后的解决被忽略
let p6 = Promise.race([
    Promise.reject(4),
    new Promise((resolve, reject) => setTimeout(resolve, 1000))
]);
setTimeout(console.log, 0, p6);

// 迭代顺序决定了落定顺序
let p7 = Promise.race([
    Promise.resolve(5),
    Promise.resolve(6),
    Promise.resolve(7)
]);
setTimeout(console.log, 0, p7);

/**
 * 如果有一个 Promise 拒绝, 只要它是第一个落定的, 就会成为拒绝合成 Promise 的理由
 * 之后再拒绝的 Promise 不会影响最终 Promise 的拒绝理由
 * 不过这并不影响所有包含 Promise 正常的拒绝操作
 * 与 Promise.all() 类似, 合成的 Promise 会静默处理所有包含 Promise 的拒绝操作
 * 
 * 虽然只有一个 Promise 的拒绝理由会进入拒绝处理程序
 * 第二个 Promise 的拒绝也会被静默处理
 * 不会有错误跑掉
 */
let p8 = Promise.race([
    Promise.reject(3),
    new Promise((resolve, reject) => setTimeout(reject, 1000))
]);
p8.catch(e => setTimeout(console.log, 0, e));
