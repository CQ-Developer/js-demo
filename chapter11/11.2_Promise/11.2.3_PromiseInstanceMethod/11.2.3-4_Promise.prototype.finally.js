/**
 * 11.2.3_4 Promise.prototype.finally()
 * 
 * Promise.prototype.finally()方法用于给Promise添加onFinally处理程序, 这个处理程序在Promise转换为resolved或rejected状态时都会执行
 * 但onFinally处理程序没有办法知道Promise的状态是resolved还是rejected, 所以这个方法主要用于添加清理代码
 */
let onFinally = function() {
    setTimeout(console.log, 100, "Finally");
};

let p1 = Promise.resolve();
p1.finally(onFinally);

// let p2 = Promise.reject();
// p2.finally(onFinally);

/**
 * Promise.prototype.finally()方法返回一个新的Promise实例
 */
let p3 = new Promise(() => {});
let p4 = p3.finally();
setTimeout(console.log, 200, p3);
setTimeout(console.log, 200, p4);
setTimeout(console.log, 200, p3 === p4);

/**
 * 这个新Promise实例不同于then()或catch()方式返回的实例
 * 因为onFinally被设计为一个状态无关的方法, 所以在大多数情况下它将表现为父Promise的传递
 * 对于已resolved和被rejected状态都是如此
 */
let p11 = Promise.resolve("foo");

// 这里都会原样后传
let p12 = p11.finally();
let p13 = p11.finally(() => undefined);
let p14 = p11.finally(() => {});
let p15 = p11.finally(() => Promise.resolve());
let p16 = p11.finally(() => "bar");
let p17 = p11.finally(() => Promise.resolve("bar"));
let p18 = p11.finally(() => Error("qux"));

setTimeout(console.log, 300, p12);
setTimeout(console.log, 300, p13);
setTimeout(console.log, 300, p14);
setTimeout(console.log, 300, p15);
setTimeout(console.log, 300, p16);
setTimeout(console.log, 300, p17);
setTimeout(console.log, 300, p18);

/**
 * 如果返回的是一个待定的Promise, 或者onFinally处理程序抛出错误
 * 则会返回相应的Promise
 */
let p21 = new Promise(() => {});

let p22 = p21.finally(() => new Promise(() => {}));
setTimeout(console.log, 400, p22);

let p23 = p21.finally(() => Promise.reject());
setTimeout(console.log, 400, p23);

let p24 = p21.finally(() => { throw "baz"; });
setTimeout(console.log, 400, p24);

/**
 * 返回待定Promise的情形并不常见, 这是因为只要Promise一resolved
 * 新Promise仍然会原样后传初始的Promise
 */
let p31 = Promise.resolve("foo");

// 忽略resolved的值
let p32 = p31.finally(() => new Promise((resovle, reject) => setTimeout(() => resovle("bar"), 100)));
setTimeout(console.log, 500, p32);
setTimeout(() => setTimeout(console.log, 0, p32), 500);
