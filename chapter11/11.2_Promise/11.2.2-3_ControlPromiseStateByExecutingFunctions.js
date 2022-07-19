/**
 * 11.2.2_3 通过执行函数控制契约状态
 * 
 * 由于Promise的状态是私有的, 所以只能在内部进行操作
 * 内部操作在Promise的执行函数中完成
 * 执行器函数主要有两项职责: 初始化Promise的异步行为, 控制状态的最终转换
 * 控制Promise状态的转换是通过调用它的两个函数参数实现的
 * 这两个函数参数通常都命名为resolve()和reject()
 */

// Promise {<fulfilled>: undefined}
let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1);

// Uncaught (in promise) undefined
// Promise {<rejected>: undefined}
// let p2 = new Promise((resolve, reject) => reject());
// setTimeout(console.log, 0, p2);

/**
 * 在前面的例子中, 并没有什么异步操作, 因为在初始化Promise时, 执行器函数已经改了每个Promise的状态
 * 关键在于, 执行器函数是同步执行的
 * 这是因为执行器函数是契约的初始化程序
 */
new Promise(() => setTimeout(console.log, 0, "executor"));
setTimeout(console.log, 0, "promise initialized");

/**
 * 添加setTimeout可以推迟切换状态
 */
let p3 = new Promise((res, rej) => setTimeout(res, 1000));

// 在console.log打印Promise实例的时候
// 还不会执行超时回调, 即resolve
setTimeout(console.log, 0, p3);

/**
 * 无论resolve()和reject()中哪个被调用, 状态转换都不可撤销
 * 于是继续就该状态会静默失败
 */
let p4 = new Promise((res, rej) => {
    res();

    // 无效
    rej();
});
setTimeout(console.log, 0, p4);

/**
 * 为了避免契约卡在待定状态, 可以添加一个定时退出功能
 * 比如, 可以通过setTimeout设置一个10秒钟后无论如何都会拒绝契约的回调
 * 
 * 因为Promise的状态只能改变一次, 所以这里的超时拒绝逻辑中可以放心地设置让Promise处于待定状态的最长时间
 * 如果执行器中的代码在超时之前已经解决或拒绝, 那么超时回调再尝试拒绝也会静默失败
 */
let p5 = new Promise((res, rej) => {
    // 10秒后调用reject()
    setTimeout(rej, 10000);

    // 执行函数逻辑
});

setTimeout(console.log, 0, p5);
setTimeout(console.log, 11000, p5);
