// 使用yield实现输入和输出

// 除了可以作为函数的中间返回语句使用, yield关键字还可以作为函数的中间参数使用
// 上一次让生成器暂停的yield关键字会接收到传给next()方法的第一个值
// 第一次调用next()传入的值不会被使用, 因为这一次调用是为了开始执行生成器函数

console.log(`
// yield作为参数使用`);

function* generatorFn(initial) {
    console.log(initial);
    console.log(yield);
    console.log(yield);
}

let generatorObject = generatorFn("foo");

generatorObject.next("bar");
generatorObject.next("baz");
generatorObject.next("qux");

// yield关键字可以同时用于输入和输出

// 因为函数必须对整个表达式求值才能确定要返回的值
// 所以当遇到yield关键字时暂停执行并计算要产生的值"foo"
// 下次再调用next()传入了"bar", 作为交给同一个yield的值
// 然后这个值被确定为本次生成器函数要返回的值

console.log(`
// yield作为输入和输出`);

function* generatorFnA() {
    return yield "foo";
}

let generatorFnAObject = generatorFnA();

console.log(generatorFnAObject.next());
console.log(generatorFnAObject.next("bar"));

// yield关键字并非只能使用一次

console.log(`
// yield可以重复使用`);

function* generatorFnB() {
    for (let i = 0;; i++) {
        yield i;
    }
}

let generatorFnBObject = generatorFnB();

console.log(generatorFnBObject.next().value);
console.log(generatorFnBObject.next().value);
console.log(generatorFnBObject.next().value);
console.log(generatorFnBObject.next().value);
console.log(generatorFnBObject.next().value);
console.log(generatorFnBObject.next().value);

// 定义一个生成器函数, 根据配置的值迭代响应次数并产生迭代的索引
// 初始化一个新数组可以实现这个需求, 但不用数组也可以实现同样的行为

console.log(`
// 使用for循环生成迭代索引`);
function* nTimesFor(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}
for (const x of nTimesFor(3)) {
    console.log(x);
}

console.log(`
// 使用while循环生成迭代索引`);
function* nTimesWhile(n) {
    let i = 0;
    while(n--) {
        yield i++;
    }
}
for (const x of nTimesWhile(3)) {
    console.log(x);
}

// 使用生成器实现范围和填充数组

console.log(`
// 实现范围`);
function* range(start, end) {
    while (end > start) {
        yield start++;
    }
}
for (const x of range(4, 7)) {
    console.log(x);
}

console.log(`
// 填充数组`);
function* zeroes(n) {
    while (n--) {
        yield 0;
    }
}
console.log(Array.from(zeroes(8)));