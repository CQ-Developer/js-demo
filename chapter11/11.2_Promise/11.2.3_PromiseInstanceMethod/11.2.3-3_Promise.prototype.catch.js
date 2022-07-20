/**
 * 11.2.3_3 Promise.prototype.catch()
 * 
 * Promise.prototype.catch()方法用于给Promise添加拒绝处理程序
 * 这个方法只接收一个参数: obRejected处理程序
 * 事实上, 这个方法就是一个语法糖, 调用它就相当于调用Promise.prototype.then(null, onRejected)
 */
let p1 = Promise.reject();

let onRejected = function(e) {
    setTimeout(console.log, 0, "rejected");
};

// 这两种添加拒绝处理程序的方式是一样的
p1.then(null, onRejected);
p1.catch(onRejected);

/**
 * Promise.prototype.catch()返回一个新的Promise实例
 * 
 * 在返回新Promise实例方面, Promise.prototype.catch()的行为与Promise.prototype.then()的onRejected处理程序是一样的
 */
let p2 = new Promise(() => {});
let p3 = p2.catch();

setTimeout(console.log, 1000, p2);
setTimeout(console.log, 1000, p3);
setTimeout(console.log, 1000, p2 === p3);
