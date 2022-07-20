/**
 * 11.2.2 Promise基础
 * 
 * ES6新增的引用类型Promise, 可以通过new操作符来实例化
 * 创建新Promise需要传入执行器(executor)函数作为参数
 * 
 * 如果不提供执行器函数, 就会抛出SyntaxError
 */
let p = new Promise(() => {});
setTimeout(console.log, 0, p);