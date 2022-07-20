/**
 * 11.2.3_6 邻近处理程序的执行顺序
 * 
 * 如果给 Promise 添加了多个处理程序, 当 Promise 状态变化时, 相关处理程序会按照添加它们的顺序依次执行
 * 无论是 then(), catch() 还是 finally() 添加的处理程序都是如此
 * 
 * 在浏览器中执行
 */
let p1 = Promise.resolve();
let p2 = Promise.reject();

p1.then(() => setTimeout(console.log, 0, 1));
p2.then(() => setTimeout(console.log, 0, 2));

p2.then(null, () => setTimeout(console.log, 0, 3));
p2.then(null, () => setTimeout(console.log, 0, 4));

p2.catch(() => setTimeout(console.log, 0, 5));
p2.catch(() => setTimeout(console.log, 0, 6));

p1.finally(() => setTimeout(console.log, 0, 7));
p1.finally(() => setTimeout(console.log, 0, 8));
