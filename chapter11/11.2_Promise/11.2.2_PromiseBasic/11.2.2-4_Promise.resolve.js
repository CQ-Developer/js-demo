/**
 * 11.2.2_4 Promise.resolve()
 * 
 * Promise并非一开始就必须处于待定状态, 然后通过执行器函数才能转换为落定状态
 * 通过调用Promise.resolve()静态方法, 可以实例化一个解决的Promise
 * 
 * 下面两个Promise实际上是一样的
 */
let p1 = new Promise((res, rej) => res());
let p2 = Promise.resolve();

/**
 * 这个解决的Promise的值对应着传给Promise.resolve()的第一个参数
 * 使用这个静态方法, 实际上可以把任何值都转换为一个Promise
 */
setTimeout(console.log, 0, Promise.resolve());
setTimeout(console.log, 0, Promise.resolve(3));

// 多余的参数会忽略
setTimeout(console.log, 0, Promise.resolve(4, 5, 6));

/**
 * 对这个静态方法而言, 如果传入的参数本身是一个契约, 那它的行为就类似于一个空包装
 * 因此, Promise.resolve()可以说是一个幂等方法
 */
let p3 = Promise.resolve();

setTimeout(console.log, 0, p3 === Promise.resolve(p3));
setTimeout(console.log, 0, p3 === Promise.resolve(Promise.resolve(p3)));

/**
 * 这个幂等会保留传入契约的状态
 */
let p4 = new Promise(() => {});

setTimeout(console.log, 0, p4);
setTimeout(console.log, 0, Promise.resolve(p4));

setTimeout(console.log, 0, p4 === Promise.resolve(p4));

/**
 * 注意, 这个静态方法能够包装任何非Promise值, 包括错误对象, 并将其转换为解决的Promise
 * 因此, 也可能导致不符合预期的行为
 */
let p5 = Promise.resolve(new Error("foo"));
setTimeout(console.log, 0, p5);
