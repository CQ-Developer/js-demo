/**
 * 11.2.3_2 Promise.prototype.then()
 * 
 * Promise.prototype.then()是为Promise实例添加处理器程序的主要方法
 * 这个then()方法接收最多两个参数: onResolved()处理程序, onRejected处理程序
 * 两个参数都是可选的
 */
function onResolved(id) {
    setTimeout(console.log, 0, id, "resolved");
}

function onRejected(id) {
    setTimeout(console.log, 0, id, "rejected");
}

let p1 = new Promise((resolved, rejected) => setTimeout(resolved, 3000));
let p2 = new Promise((resolved, rejected) => setTimeout(rejected, 3000));

p1.then(() => onResolved("p1"), () => onRejected("p1"));
p2.then(() => onResolved("p2"), () => onRejected("p2"));

/**
 * 因为Promise只能转换为最终状态一次, 所以这两个操作一定是互斥的
 * 
 * 如前所述, 两个处理程序参数都是可选的
 * 而且, 传给then()的任何非函数类型的参数都会被静默忽略
 * 如果想只提供onRejected参数, 那就要在onResolved参数的位置上传入undefined
 * 这样有助于避免在内存中创建多余的对象, 对期待函数参数的类型系统也是一个交代
 */
 let p3 = new Promise((resolved, rejected) => setTimeout(resolved, 3000));
 let p4 = new Promise((resolved, rejected) => setTimeout(rejected, 3000));

// 分函数处理程序会被静默忽略, 不推荐
p3.then("gobbeltygook");

// 不传onResolved处理器程序的规范写法
p4.then(null, () => onRejected("p4"));

/**
 * Promise.prototype.then()方法返回一个新的契约实例
 */
let p5 = new Promise(() => {});
let p6 = p5.then();

setTimeout(console.log, 0, p5);
setTimeout(console.log, 0, p6);
setTimeout(console.log, 0, p5 === p6);

/**
 * 这个新Promise实例基于onResolved处理程序的返回值构建
 * 换句话说, 该处理程序的返回值会通过Promise.resolve()包装起来生成新Promise
 * 如果没有提供这个处理器程序, 则Promise.resolve()就会包装上一个Promise解决之后的值
 * 如果没有显示的返回语句, 则Promise.resolve()会包装默认的返回值undefined
 */
let p7 = Promise.resolve("foo");

// 若调用then()时不传处理程序, 则原样向后传
let p8 = p7.then();
setTimeout(console.log, 0, p8);

// 这些都一样
let p9 = p7.then(() => undefined);
let p10 = p7.then(() => {});
let p11 = p7.then(() => Promise.resolve());

setTimeout(console.log, 0, p9);
setTimeout(console.log, 0, p10);
setTimeout(console.log, 0, p11);

/**
 * 如果有显示的返回值, 则Promise.Resolve()会包装这个值
 */
let p12 = p7.then(() => "bar");
let p13 = p7.then(() => Promise.resolve("bar"));

setTimeout(console.log, 0, p12);
setTimeout(console.log, 0, p13);

// Promise.resolve()保留返回的Promise
let p14 = p7.then(() => new Promise(() => {}));
setTimeout(console.log, 0, p14);

// let p15 = p7.then(() => Promise.reject());
// setTimeout(console.log, 0, p15);

/**
 * 抛出异常会返回拒绝的Promise
 */
// let p16 = p7.then(() => { throw "baz"; });
// setTimeout(console.log, 0, p16);

/**
 * 返回错误值不会触发上面的拒绝行为, 而会把错误对象包装在一个解决的契约中
 */
let p17 = p7.then(() => Error("qux"));
setTimeout(console.log, 0, p17);

/**
 * onRejected处理程序也与之类似: onRejected处理程序返回的值也被Promise.resolve()包装
 * 乍一看这可能有点违反直觉, 但是onRejected处理程序的任务不久i是捕获异常错误吗
 * 因此, 拒绝处理程序在捕获异常后不抛出异常是符合Promise的行为, 因该返回一个解决Promise
 */
let p20 = Promise.reject("foo");

// 调用then()时不传入处理程序则原样向后传
// let p21 = p20.then();
// setTimeout(console.log, 0, p21);

// 这些都一样
let p22 = p20.then(null, () => undefined);
let p23 = p20.then(null, () => {});
let p24 = p20.then(null, () => Promise.resolve());

setTimeout(console.log, 0, p22);
setTimeout(console.log, 0, p23);
setTimeout(console.log, 0, p24);

// 这些都一样
let p25 = p20.then(null, () => "bar");
let p26 = p20.then(null, () => Promise.resolve("bar"));

setTimeout(console.log, 0, p25);
setTimeout(console.log, 0, p26);

// Promise.resolve()保留返回的Promise
let p27 = p20.then(null, () => new Promise(() => {}));
setTimeout(console.log, 0, p27);

// let p28 = p20.then(null, () => Promise.reject());
// setTimeout(console.log, 0, p28);

// let p29 = p20.then(null, () => { throw "baz"; });
// setTimeout(console.log, 0, p29);

let p30 = p20.then(null, () => Error("qux"));
setTimeout(console.log, 0, p30);
