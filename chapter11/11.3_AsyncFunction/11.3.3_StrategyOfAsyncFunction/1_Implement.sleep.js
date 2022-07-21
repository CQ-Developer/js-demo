/**
 * 11.3.3_1 实现sleep()
 * 
 * 实现一个类似Java中Thread.sleep()的函数, 在程序中加入非阻塞的暂停
 * 以前, 这个需求基本上都通过setTimeout()利用JS运行时的行为来实现
 * 
 * 有了异步函数之后, 就不一样了
 * 一个简单的箭头函数就可以实现sleep()
 */
async function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

async function foo() {
    const start = Date.now();
    await sleep(1500);
    console.log(Date.now() - start);
}

foo();
