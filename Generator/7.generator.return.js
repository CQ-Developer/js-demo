function * generator() {
    yield* [1, 2, 3];
}

const gen = generator();

// for-of 等内置语言结构会忽略状态为 done: true 的返回值
for (const x of gen) {
    if (x > 2) {
        return gen.return(4);
    }
    console.log(x);
}