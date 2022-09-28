// yield关键子可以让生成器函数停止和开始执行
// 生成器函数在遇到yield之前正常执行
// 生成器函数在遇到yield之后执行停止, 函数作用域的状态被保留
// 停止执行的生成器函数只能通过在Generator上调用next()恢复执行
function * generator() {
    // yield关键字类似函数的中间返回语句, 它生成的值会出现在next()返回的对象里
    // 通过yield退出, 处于done=false状态
    // 通过return退出, 处于done=true状态
    yield 1;
    yield 2;
    return 3;
}
let gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// 生成器桉树内部的执行流程会针对每个Generator区分作用域
// 在一个Generator对象上调用next()不会影响其他Generator
let gen1 = generator();
let gen2 = generator();
console.log(gen1.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen1.next());