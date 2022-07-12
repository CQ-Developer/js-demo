// 3 throw()

// throw方法会在暂停的时候将一个提供的错误注入到生成器对象中
// 如果错误未被处理, 生成器就会关闭

function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
const g = generatorFn();

console.log(`
// 异常会终止生成器`);

console.log(g);
try {
    g.throw("foo");
} catch(e) {
    console.log(e);
}
console.log(g);

// 不过, 假如生成器函数内部处理了这个错误, 那么生成器就不会关闭, 而且还可以恢复执行
// 错误处理会跳过对应的yield, 因此在这个例子中会跳过一个值

function* generatorFnA() {
    for (const x of [1, 2, 3]) {
        try {
            yield x;
        } catch(e) {
            // ...
        }
    }
}
const gA = generatorFnA();

console.log(`
// 生成器可以从错误中恢复`);

console.log(gA.next());
gA.throw("foo");
console.log(gA.next());

// 如果生成器对象还没有开始执行
// 那么调用throw()抛出的错误不会在函数内部被捕获
// 因为这相当于在函数块外部抛出了错误
