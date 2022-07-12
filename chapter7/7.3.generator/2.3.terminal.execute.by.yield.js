// 产生可迭代对象

// 可以使用星号增强yield的行为
// 让它能够迭代一个可迭代对象, 从而一次产生一个值

function* generatorFnA() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}

// 与 generatorFnA 等价
function* generatorFnB() {
    yield* [1, 2, 3];
}

console.log(`
// 使用星号增强 yield 的行为`)

for (const x of generatorFnB()) {
    console.log(x);
}

// 与生成器函数的星号类似
// yield 星号两侧的空格不影响其行为

function* generatorFnC() {
    yield* [1, 2];
    yield *[3, 4];
    yield * [5, 6];
}

console.log(`
// 星号两侧空格不会影响 yield 的行为`);

for (const x of generatorFnC()) {
    console.log(x);
}

// 因为 yield* 实际上只是将一个可迭代对象序列化为一连串可以单独产出的值
// 这跟把 yield 放到一个循环中没有什么不同

function* generatorFnD() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
function* generatorFnE() {
    yield* [1, 2, 3];
}

console.log(`
// generatorFnD 和 generatorFnE 两个方法是等价的`);

for (const x of generatorFnD()) {
    console.log(x);
}
for (const x of generatorFnE()) {
    console.log(x);
}

// yield* 的值是关联迭代器返回 done: true 时的 value 属性
// 对于普通迭代器来说, 这个值是 undefined

function* generatorFnF() {
    console.log("iterator value:", yield* [1, 2, 3]);
}

console.log(`
// yield* 在普通迭代器状态 done: true 时的值`);

for (const x of generatorFnF()) {
    console.log("value:", x);
}

// 对于生成器函数产生的迭代器来说
// 这个值就是生成器函数返回的值

function* innerGeneratorFn() {
    yield "foo";
    return "bar";
}

function* outerGeneratorFn() {
    console.log("interator value:", yield* innerGeneratorFn());
}

console.log(`
// yield* 在生成器产生的迭代器状态 done: true 时, 取生成器函数的返回值`);

for (const x of outerGeneratorFn()) {
    console.log(x);
}
