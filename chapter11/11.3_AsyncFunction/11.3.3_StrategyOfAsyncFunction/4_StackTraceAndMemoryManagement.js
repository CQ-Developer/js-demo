/**
 * 11.3.3_4 栈追踪和内存管理
 * 
 * Promise和异步函数的功能由相当程度的重叠, 但它们子啊内存中的表现则差别较大
 */
function fooPromiseExecutor(resolve, reject) {
    setTimeout(reject, 1000, "bar");
}

function foo() {
    new Promise(fooPromiseExecutor);
}

foo();

/**
 * 换用异步函数
 */
 function booPromiseExecutor(resolve, reject) {
    setTimeout(reject, 1000, "bar");
}

async function boo() {
    new Promise(booPromiseExecutor);
}

boo();
