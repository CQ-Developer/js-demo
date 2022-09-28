function* generatorA() {
    // yield* 的值是关联Iterator返回done=true时的值
    // 对于普通Iterator来说, 这个值是undefined
    console.log("iterator value:", yield* [1, 2, 3]);
}
// 迭代generatorA
for (const x of generatorA()) {
    console.log("from generatorA:", x);
}

function* generator() {
    yield "aoo";
    return "boo";
}
function* generatorB() {
    // 对于生成器函数产生的Iterator来说, 这个值就是生成器函数的返回值
    // 当然没有返回值的生成器函数也是undefined
    console.log("iterator value:", yield* generator());
}
for (const x of generatorB()) {
    console.log("from generatorB:", x);
}