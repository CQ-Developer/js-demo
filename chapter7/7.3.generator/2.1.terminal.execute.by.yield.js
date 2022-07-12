// 生成器对象作为可迭代对象

// 在生成器对象上显式调用next()方法的用处并不大
// 把生成器对象当作可迭代对象, 那么使用起来会更方便

function* generatorFn() {
    yield 1;
    yield 2;
    yield 3;
}

console.log(`
// 将生成器作为迭代器使用`);

for (const x of generatorFn()) {
    console.log(x);
}

// 在需要自定义迭代对象时, 这样使用生成器对象会特别有用
// 比如, 需要定义一个可迭代对象, 而它会产生一个迭代器, 这个迭代器会执行指定次数
// 使用生成器, 可以通过一个简单的循环来实现

function* nTimes(n) {
    while (n--) {
        yield;
    }
}

console.log(`
// 使用生成器模拟执行指定次数`);

for(let _ of nTimes(3)) {
    console.log("foo");
}
