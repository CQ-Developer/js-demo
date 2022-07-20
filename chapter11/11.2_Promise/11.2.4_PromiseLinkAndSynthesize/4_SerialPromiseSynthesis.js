/**
 * 11.2.4_5 串行期约合成
 * 
 * 到目前为止, 我们讨论 Promise 连锁一直围绕 Promise 的串行执行, 忽略了 Promise 的另一个主要特征: 异步产生值并将其传给处理程序
 * 基于后续 Promise 使用之前 Promise 的返回值来串联 Promise 是 Promise 的基本功能
 * 这很像函数合成, 即将多个函数合成为一个函数
 */
function addTwo(x) {
    return x + 2;
}
function addThree(x) {
    return x + 3;
}
function addFive(x) {
    return x + 5;
}

function addTen(x) {
    return addFive(addThree(addTwo(x)));
}

console.log(addTen(7));

/**
 * 上面的例子中, 将3个函数基于一个值合成为一个值
 * 类似地, Promise 也可以像这样合成起来, 渐进的消费一个值, 并返回一个结果
 */
function addTenA(x) {
    return Promise.resolve(x)
                  .then(addTwo)
                  .then(addThree)
                  .then(addFive);
}
addTenA(8).then(console.log);

/**
 * 使用 Array.prototype.reduce() 可以写成更简洁的形式
 */
function addTenB(x) {
    return [addTwo, addThree, addFive].reduce((promise, fn) => promise.then(fn), Promise.resolve(x));
}
addTenB(9).then(console.log);

/**
 * 这种模式可以提炼出一个通用函数
 * 可以把任意多个函数作为处理程序合成一个连续传值的 Promise 连锁
 */
function compose(...fns) {
    return x => fns.reduce((p, f) => p.then(f), Promise.resolve(x));
}
let addTenC = compose(addTwo, addThree, addFive);
addTenC(5).then(console.log);
