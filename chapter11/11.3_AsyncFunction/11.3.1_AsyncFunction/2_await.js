/**
 * 11.3.1_2 await
 * 
 * 因为异步函数主要针对不会马上完成的任务, 所以自然需要一种暂停和恢复执行的能力
 * 使用await关键字可以暂停异步函数代码的执行, 等待Promise解决
 */
let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
p.then(x => console.log(x));

/**
 * 使用async/await可以写成这样
 */
async function aoo() {
    let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
    console.log(await p);
}
aoo();

/**
 * 注意, await关键字会暂停执行异步函数后面的代码, 让出JS运行时的执行线程
 * 这个行为与生成器函数中的yield关键字是一样的
 * await关键字同样是尝试"解包"对象的值, 然后将这个值传给表达式, 再异步恢复异步函数的执行
 * 
 * await关键的用法与JS的一元操作一样
 * 可以单独使用, 也可以在表达式中使用
 */
// 异步打印"boo"
async function boo() {
    console.log(await Promise.resolve("boo"));
}
boo();

// 异步打印"coo"
async function coo() {
    return await Promise.resolve("coo");
}
coo().then(console.log, null);

// 1000ms后异步打印"doo"
async function doo() {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    console.log("doo");
}
doo();

/**
 * await关键字期待一个实现thenable接口的对象, 但常规的值也可以
 * 如果是实现thenable接口的对象, 则这个对象可以由await来"解包"
 * 如果不是, 则这个值就被当作已经解决的期约
 */
// 等待一个原始值
async function eoo() {
    console.log(await "eoo");
}
eoo();

// 等待一个没有实现thenable接口的对象
async function foo() {
    console.log(await ["foo"]);
}
foo();

// 等待一个实现了thenable接口的非Promise对象
async function goo() {
    const thenable = {
        then(callback) {
            callback("goo");
        }
    };
    console.log(await thenable);
}
goo();

// 等待一个Promise
async function hoo() {
    console.log(await Promise.resolve("hoo"));
}
hoo();

/**
 * 等待会抛出错误的同步操作, 会返回拒绝的Promsie
 */
async function ioo() {
    console.log(1);
    await (() => {
        throw 3;
    })();
}

// 给返回的Promise添加一个拒绝的处理程序
ioo().catch(console.log);
console.log(2);

/**
 * 单独的Promise.reject()不会被异步函数捕获, 而会抛出未捕获错误
 * 不过, 对拒绝的Promise使用await则会释放错误值, 将拒绝Promise返回
 */
async function joo() {
    console.log(1);
    await Promise.reject(3);

    // 这行代码不会执行
    console.log(4);
}

// 给返回的Promise添加一个拒绝处理程序
joo().catch(console.log);
console.log(2);
