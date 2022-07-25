/**
 * 11.3.3_3 串行执行期约
 * 
 * 在11.2节, 讨论过如何串行执行Promise并把值传给后续的Promise
 * 使用async/await, Promise连锁会变得很简单
 * 
 * 这里, await直接传递了每个函数的返回值, 结果通过迭代产生
 * 当然, 这个例子并没有使用Promise, 如果要使用Promise, 则可以把所有函数都改成异步函数
 * 这样它们就都返回Promise了
 */
async function addTwo(x) {
    return x + 2;
}
async function addThree(x) {
    return x + 3;
}
async function addFive(x) {
    return x + 5;
}

async function addTen(x) {
    for (const fn of [addTwo, addThree, addFive]) {
        x = await fn(x);
    }
    return x;
}

addTen(9).then(console.log);
