// 1 return()

// return()方法会强制生成器进入关闭状态
// 提供给return()方法的值, 就是终止迭代器对象的值

function* generatorFnA() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}

const gA = generatorFnA();

console.log(`
// return方法的值就是终止迭代器对象的值`);

console.log(gA);
console.log(gA.return(4));
console.log(gA);

// 与迭代器不同, 所有生成器对象都有return()方法, 只要通过它进入关闭状态, 就无法恢复了
// 后续调用next()会显示done=true状态, 而提供的任何返回值都不会被存储或传播

function* generatorFnB() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}

const gB = generatorFnB();

console.log(`
// 生成器进入关闭状态无法恢复`);

console.log(gB.next());
console.log(gB.return(4));
console.log(gB.next());
console.log(gB.next());
console.log(gB.next());

// for-of循环等内置语言结构会忽略状态为done=true的IteratorObject内部返回的值

function* generatorFnC() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}

const gC = generatorFnC();

console.log(`
// 内置语言结构会忽略终止状态的值`);

for (const x of gC) {
    if (x > 1) {
        gC.return(4);
    }
    console.log(x);
}
