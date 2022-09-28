// yield可以作为函数的之间参数
function * generator(item) {
    console.log(item);
    console.log(yield);
    console.log(yield);
}

let gen = generator(0);

// 第一次调用next()传入的值不会被使用
// 因为这一次调用是为了开始执行生成器函数
let r1 = gen.next("a");
console.log(r1);

// 上一次让生成器函数暂停的yield会接收到传给next()的第一个值
let r2 = gen.next("b");
console.log(r2);

// 上一次让生成器函数暂停的yield会接收到传给next()的第一个值
let r3 = gen.next("c");
console.log(r3);