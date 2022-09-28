function * generator() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}

const gen = generator();

console.log(gen.next());

// 通过return()进入关闭状态无法恢复
console.log(gen.return(4));

// 后续调用next()会显示 done: true
// 提供的任何返回值都不会被存储或传播
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());