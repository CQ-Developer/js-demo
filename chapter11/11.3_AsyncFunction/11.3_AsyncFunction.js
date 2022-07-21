/**
 * 11.3 异步函数
 * 
 * 异步函数, 也称为"async/await", 是ES6的Promise模式在ES函数中的应用
 * async/await是ES8规范新增的
 * 这个特性从行为和语法上都增强了JS, 让以同步方式写的代码能够异步执行
 */
let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));

/**
 * 这个Promise在1000ms之后解决为数值3
 * 如果程序中的其他代码要在这个值可用时访问它, 则需要写一个解决处理程序
 */
p.then(x => console.log(x));

/**
 * 这其实是很不方便的, 因为其他代码都必须阻塞到Promise处理程序中
 * 不过可以把处理程序定义为一个函数
 * 
 * 这个改进其实也不大
 * 这是因为任何需要访问这个Promise所产生值的代码, 都需要以处理程序的形式来接收这个值
 * 也就是说, 代码照样还是要放到处理程序里
 * ES8为此提供了async/await关键字
 */
function handler(x) {
    console.log(x);
}

new Promise((resolve, reject) => setTimeout(resolve, 1000, 4)).then(handler);
