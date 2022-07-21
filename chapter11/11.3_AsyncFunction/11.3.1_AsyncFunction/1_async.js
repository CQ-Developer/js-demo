/**
 * 11.3.1_1 async
 * 
 * async关键字用于声明异步函数
 * 这个关键字可以用在: 函数声明, 函数表达式, 箭头函数, 方法
 */
async function aoo() {}

let boo = async function() {};

let coo = async () => {};

class Doo {
    async doo() {}
}

/**
 * 使用async关键字可以让函数具有异步特征, 但总体上其代码仍然是同步求值的
 * 而在参数或闭包方面, 异步函数仍然具有普通JS函数的正常行为
 */
async function eoo() {
    console.log(1);
}

// eoo()仍然会在后面的指令之前被求值
eoo();
console.log(2);

/**
 * 不过, 异步函数如果使用return关键字返回了值, 这个值会被Promise.resolve()包装成一个Promise对象
 * 如果没有return则会返回undefined
 * 异步函数始终返回Promise对象
 * 在函数外部调用这个函数可以得到它返回的期约
 */
async function foo() {
    console.log(3);
    return 5;
}

// 给返回的Promise添加一个解决处理程序
foo().then(console.log, null);
console.log(4);

/**
 * 直接返回一个Promise对象也是一样的
 */
async function goo() {
    console.log(6);
    return Promise.resolve(8);
}

// 给返回的Promise添加一个解决处理程序
goo().then(console.log, null);
console.log(7);

/**
 * 异步函数的返回值期待一个实现thenable接口的对象, 但常规的值也可以
 * 如果返回的是实现thenable接口的对象, 则这个对象可以由提供给then()的处理程序"解包"
 * 如果不是, 则返回值就被当做已经解决的Promise
 */
// 返回一个原始值
async function hoo() {
    return "foo";
}
hoo().then(console.log);

// 返回一个没有实现thenable接口的对象
async function ioo() {
    return ["ioo"];
}
ioo().then(console.log);

// 返回一个实现了thenable接口的非Promise对象
async function joo() {
    const thenable = {
        then(callback) {
            callback("joo");
        }
    };
    return thenable;
}
joo().then(console.log);

// 返回一个Promise
async function koo() {
    return Promise.resolve("koo");
}
koo().then(console.log);

/**
 * 与在Promise处理程序中一样, 在异步函数中抛出错误会返回拒绝的期约
 */
async function loo() {
    console.log(9);
    throw 11;
}

// 给返回的Promise添加一个拒绝处理程序
loo().catch(console.log);
console.log(10);

/**
 * 不过, 拒绝Promise的错误不会被异步函数捕获
 */
async function moo() {
    console.log(12);
    Promise.reject(14);
}

moo().catch(console.log);
console.log(13);
