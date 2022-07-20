/**
 * 11.2.4_1  期约连锁
 * 
 * 把 Promise 逐个地串联起来是一种非常有用的编程模式
 * 之所以可以这样做, 是因为每个 Promise 实例的方法都会返回一个新的 Promise 对象, 而这个新 Promise 又有自己的实例方法
 * 这样连缀方法调用就可以构成"期约连锁"
 */
console.log("// 连缀方法调用");

let p = new Promise((resolve, reject) => {
    console.log("first");
    resolve();
});

p.then(() => console.log("second"))
 .then(() => console.log("third"))
 .then(() => console.log("fourth"));

/**
 * 这个实现最终实现了一连串同步任务
 * 
 * 要真正执行异步任务, 可以改写前面的例子, 让每个执行器都返回一个 Promise 实例
 * 这样就可以让每个后续 Promise 都等待之前的 Promise, 也就是串行化异步任务
 */
console.log("// 让每个Promise在一定时间后解决");

let p1 = new Promise((resolve, reject) => {
    console.log("p1 exe");
    setTimeout(resolve, 1000);
});

p1.then(() => new Promise((resolve, reject) => {
    console.log("p2 exe");
    setTimeout(resolve, 1000);
}))
.then(() => new Promise((resolve, reject) => {
    console.log("p3 exe");
    setTimeout(resolve, 1000);
}))
.then(() => new Promise((resolve, reject) => {
    console.log("p4 exe");
    setTimeout(resolve, 1000);
}));

/**
 * 把生成 Promise 的代码提取到一个工厂函数中
 */
console.log("// 试用工厂函数");

function delayResolve(str) {
    return new Promise((resolve, reject) => {
        console.log(str);
        setTimeout(resolve, 1000);
    });
}

delayResolve("p1 exe")
    .then(() => delayResolve("p2 exe"))
    .then(() => delayResolve("p3 exe"))
    .then(() => delayResolve("p4 exe"));

/**
 * 因为 then(), catch() 和 finally() 都返回 Promise
 * 所以串联这些方法也很直观
 */
console.log("// 串联实例方法");

let p2 = new Promise((resolve, reject) => {
    console.log("initial promise rejects");
    reject();
});

p2.catch(() => console.log("reject handler"))
  .then(() => console.log("resolve handler"))
  .finally(() => console.log("finally handler"));
