/**
 * 11.2.3_5 非重入Promis方法
 * 
 * 当 Promise 进入落定状态时, 与该状态相关的处理程序仅仅会被排期, 而非立即执行
 * 跟在添加这个处理程序的代码之后的同步代码一定会在处理程序之前先执行
 * 即使 Promise 一开始就是与附加处理程序关联的状态, 执行顺序也是这样的
 * 这个特性由 JS 运行时保证, 被成为"非重入"特性
 */
let p = Promise.resolve();

// 添加 resolve 处理程序
// 直觉上, 这个处理程序会等 Promise一resolve 就执行
p.then(() => console.log("onResolved handler"));

// 同步输出, 证明 then 已经返回
console.log("then() returns");

/**
 * 在一个 resolved Promise 上调用 then() 会把 onResolved 处理程序推进消息队列
 * 但这个处理程序在当前线程上的同步代码执行完成前不会执行
 * 因此, 跟在 then() 后面的同步代码一定先于处理程序执行
 * 
 * 先添加处理程序后 resolve Promise 也是一样的
 * 如果添加处理程序后, 同步代码才改变 Promise 状态, 那么处理程序仍然会基于该状态变化表现出非重入特性
 * 即使先添加了 onResolved 处理程序, 再同步调用 resolve(), 处理程序也不会进入同步线程执行
 */
let syncResolve;

// 创建一个 Promise 并将 resolve 函数保存在一个局部变量中
let p1 = new Promise((resolve) => {
    syncResolve = function() {
        console.log("1: invoking resovle()");
        resolve();
        console.log("2: resolve() returns");
    };
});

p1.then(() => console.log("4: then() handler execute"));

syncResolve();
console.log("3: syncResolve() returns");

/**
 * 即使 Promise 状态变化发生在添加处理程序之后, 处理程序也会等到运行的消息队列让它出列时才会执行
 * 
 * 非重入适用于 onResolved/onRejected 处理程序, catch() 处理程序和 finally() 处理程序
 * 这些处理程序都只能异步执行
 */
let p11 = Promise.resolve();
p11.then(() => console.log("p11.then() onResolved"));
console.log("p11.then() returns");

let p12 = Promise.reject();
p11.then(() => console.log("p12.then() onRejected"));
console.log("p12.then() returns");

let p13 = Promise.reject();
p11.catch(() => console.log("p13.catch() onRejected"));
console.log("p13.catch() returns");

let p14 = Promise.resolve();
p14.finally(() => console.log("p14.finally() onFinally"));
console.log("p14.finally() returns");
