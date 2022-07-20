/**
 * 11.2.2_6 同步/异步执行的二元性
 * 
 * Promise的设计很大程度上会导致一种完全不同于JS的计算模式
 * 
 * 下面的例子完美的展示了这一点, 其中包含了两种模式下抛出错误的情形
 */
try {
    throw new Error("foo");
} catch(e) {
    console.log(e);
}

try {
    Promise.reject(new Error("bar"));
} catch(e) {
    console.log(e);
}
