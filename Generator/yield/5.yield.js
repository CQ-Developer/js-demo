function * generatorA() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}

for (const x of generatorA()) {
    console.log("from generator A:", x);
}

// 和generatorA等价
function * generatorB() {
    // 使用星号增强yield行为, 让他能够迭代一个Iterabled对象
    // yield * 实际上只是将一个可迭代对象序列化为一连串可以单独产出的值
    yield * [1, 2, 3];
}

for (const x of generatorB()) {
    console.log("from generator B:", x);
}