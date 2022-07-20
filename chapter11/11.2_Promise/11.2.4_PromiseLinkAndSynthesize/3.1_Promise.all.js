/**
 * 11.2.4_3_1 Promise.all()
 * 
 * Promise.all() 静态方法创建的 Promise 会在一组 Promise 全部解决之后再解决
 * 这个静态方法接收一个可迭代对象, 返回一个新 Promise
 */
let p1 = Promise.all([ Promise.resolve(), Promise.resolve() ]);

// 可迭代对象中的元素会通过Promise.resolve()转换为Promise
let p2 = Promise.all([3, 4]);

// 空的可迭代对象等价于Promise.resolve()
let p3 = Promise.all([]);

// 无效语法(TypeError: undefined is not iterable)
// let p4 = Promise.all();

/**
 * 合成的 Promise 只会在每个包含的 Promise 都解决之后解决
 */
let p5 = Promise.all([
    Promise.resolve(),
    new Promise((resolve, reject) => setTimeout(resolve, 1000))
]);
setTimeout(console.log, 0, p5);

p5.then(() => setTimeout(console.log, 0, "all() resolved"));

/**
 * 如果至少有一个包含的 Promise 待定, 则合成的 Promise 也会待定
 * 如果有一个包含的 Promise 拒绝, 则合成的 Promise 也会拒绝
 */
let p6 = Promise.all([ new Promise(() => {}) ]);
setTimeout(console.log, 0, p6);

// 一次拒绝会导致最终Promise拒绝
let p7 = Promise.all([
    Promise.resolve(),
    Promise.reject(),
    Promise.resolve()
]);
setTimeout(console.log, 0, p7);

/**
 * 如果所有 Promise 都成功解决, 则合成 Promise 的解决值就是所有包含 Promise 解决值的数组
 * 按照迭代器顺序
 */
let p8 = Promise.all([
    Promise.resolve(3),
    Promise.resolve(),
    Promise.resolve(4)
]);

p8.then(values => setTimeout(console.log, 0, values));

/**
 * 如果有 Promise 拒绝, 则第一个拒绝的 Promise 会将自己的理由作为合成 Promise 的拒绝理由
 * 之后再拒绝的 Promise 不会影响最终 Promise 的拒绝理由
 * 不过, 这并不影响所有包含 Promise 正常的拒绝操作
 * 合成的 Promise 会静默处理所有包含 Promise 的拒绝操作
 */
// 虽然只有第一个Promise的拒绝理由会进入拒绝处理程序
// 第二个Promise的拒绝也会被静默处理
// 不会有错误跑掉
let p9 = Promise.all([
    Promise.reject(3),
    new Promise((resolve, reject) => setTimeout(reject, 1000))
]);

p9.catch(e => setTimeout(console.log, 0, e));
