/**
 * 11.2.2_5 Promise.reject()
 * 
 * 与Promise.resolve()类似, Promise.reject()会实例化一个拒绝的Promise并抛出一个异步错误
 * 这个错误不能通过try/catch捕获, 而只能通过拒绝处理程序捕获
 * 
 * 下面两个Promise实际上是一样的
 */
let p1 = new Promise((res, rej) => rej());
let p2 = Promise.reject();

/**
 * 这个拒绝的Promise的理由就是传给Promise.reject()的第一个参数
 * 这个参数也会传给后续的拒绝处理程序
 */
let p3 = Promise.reject(3);
setTimeout(console.log, 0, p3);
p3.then(null, e => setTimeout(console.log, 0, e));

/**
 * 关键在于, Promise.reject()并没有照搬Promise.resolve()的幂等逻辑
 * 如果给它传一个Promise对象, 则这个Promise会成为它返回的拒绝Promise的理由
 */
setTimeout(console.log, 0, Promise.reject(Promise.resolve()));
