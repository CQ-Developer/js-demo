/**
 * 11.2.3_8 拒绝期约与决绝错误处理
 * 
 * 拒绝 Promise 类似于 throw() 表达式, 因为它们都代表一种程序状态, 即需要中断或特殊处理
 * 在 Promiese 的执行函数或处理程序中抛出错误会导致拒绝, 对应的错误对象会成为拒绝的理由
 */
let p1 = new Promise((resolve, reject) => reject("foo"));
let p2 = new Promise((resolve, reject) => { throw Error("foo"); });
let p3 = Promise.resolve().then(() => { throw Error("foo"); });
let p4 = Promise.reject(Error("foo"));

setTimeout(console.log, 0, p1);
setTimeout(console.log, 0, p2);
setTimeout(console.log, 0, p3);
setTimeout(console.log, 0, p4);

/**
 * 正常情况下, 在通过 throw() 关键字抛出错误时, JS 运行时的错误处理机制会停止执行抛出错误之后的任何指令
 * 但是, 在 Promise 中抛出错误时, 因为错误实际上是从消息队列中抛出的, 所以并不会阻止运行时继续执行同步指令
 */
console.log("bar");

/**
 * then() 和 catch() 的 onRejected 处理程序在语义上相当于 tyy/catch
 * 出发点都是捕获错误之后将其隔离, 同时不影响正常逻辑
 * 为此, onRejected 处理程序的任务应该是在捕获异步错误之后返回一个解决的期约
 */
new Promise((resolve, reject) => {
    console.log("begin async exe");
    reject(Error("bar"));
})
.catch(e => {
    console.log("caught error", e);
})
.then(() => {
    console.log("continue async exe");
});
