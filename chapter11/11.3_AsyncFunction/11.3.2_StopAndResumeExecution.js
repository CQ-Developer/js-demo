/**
 * 11.3.2 停止和恢复执行
 * 
 * 使用await关键字之后的区别其实比看上去的还要微妙一些
 * 比如, 下面的例子中按照顺序调用3个函数, 但它们的输出结果顺序是相反的
 */
async function aoo() {
    console.log(await Promise.resolve("aoo"));
}
async function boo() {
    console.log(await "boo");
}
async function coo() {
    console.log("coo");
}
aoo();
boo();
coo();

/**
 * async/await中真正起作用的是await
 * async关键字, 无论从哪个方面来看, 都不过是一个标识符
 * 毕竟, 异步函数如果不不包含await关键字, 其执行基本上跟普通函数没什么区别
 */
async function doo() {
    console.log(2);
}
console.log(1);
doo();
console.log(3);

/**
 * 要完全理解await关键字, 必须知道它并非只是等待一个值可用那么简单
 * 
 * JS运行时在碰到await关键字时, 会记录在哪里暂停执行
 * 等到await右边的值可用了, JS运行时会向消息队列中推送一个任务, 这个任务会恢复异步函数的执行
 * 
 * 因此, 即使await后面跟着一个立即可用的值, 函数的其余部分也会被异步求值
 */
async function eoo() {
    console.log(2);
    await null;
    console.log(4);
}
console.log(1);
eoo();
console.log(3);

/**
 * 如果await后面是一个Promise, 则问题会稍微有些复杂
 * 此时, 为了执行异步函数, 实际上会有两个任务被添加到消息队列并被异步求值
 * 
 * TC39对await后面是Promise的情况如何处理做过一次修改
 * 修改后, 本例中的Promise.resolve(8)只会生成一个异步任务
 */
async function foo() {
    console.log(2);
    console.log(await Promise.resolve(6));
    console.log(7);
}

async function goo() {
    console.log(4);
    console.log(await 8);
    console.log(9);
}

console.log(1);
foo();
console.log(3);
goo();
console.log(5);
