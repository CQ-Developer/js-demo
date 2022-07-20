/**
 * 11.2.3_7 传递解决值和拒绝理由
 * 
 * 在执行函数中, 解决的值和拒绝的理由是分别作为 resolve() 和 reject() 的第一个参数往后传的
 * 然后, 这些值又会传给它们各自的处理程序, 作为 onResolved 和 onRejected 处理程序的唯一参数
 */
let p1 = new Promise((resolve, reject) => resolve("foo"));
p1.then(value => console.log(value));

let p2 = new Promise((resolve, reject) => reject("bar"));
p2.catch(reason => console.log(reason));

/**
 * Promise.resolve() 和 Promise.reject() 在被调用时就会接收解决值和拒绝理由
 * 同样地, 它们返回的 Promise 也会像执行器一样把这些值传给 onResolved 或 onRejected 处理程序
 */
let p3 = Promise.resolve("foo");
p3.then(value => console.log(value));

let p4 = Promise.reject("bar");
p4.catch(reason => console.log(reason));
