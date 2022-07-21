/**
 * 11.3.1_3 await的限制
 * 
 * await关键字必须在异步函数中使用, 不能在顶级上下文或模块中使用
 * 不过, 定义并立即调用异步函数是没问题的
 * 
 * 下面两端代码实际是相同的
 */
async function aoo() {
    console.log(await Promise.resolve(3));
}
aoo();

// 立即调用的异步函数表达式
(async function () {
    console.log(await Promise.resolve(3));
})();

/**
 * 此外, 异步函数的特质不会扩展到嵌套函数
 * 因此, await关键字也只能直接出现在异步函数的定义中
 * 在同步函数内部使用await会抛出SyntaxError
 * 
 * 下面展示了一些会出错的例子
 */
function coo() {
    const syncFn = () => {
        // 不允许: await出现在了箭头函数中
        return await Promise.resolve("coo");
    };
    console.log(syncFn());
}

function doo() {
    function syncFn() {
        // 不允许: await出现在了同步函数声明中
        return await Promise.resolve("doo");
    }
    console.log(syncFn());
}

function eoo() {
    const syncFn = function() {
        // 不允许: await出现在了同步函数表达式中
        return await Promise.resolve("eoo");
    };
    console.log(syncFn());
}

function foo() {
    // 不允许: IIFE使用同步函数表达式
    (function () {
        console.log(await Promise.resolve("foo"));
    })();
    // 不允许: IIFE使用箭头函数
    (() => {
        console.log(await Promise.resolve("foo"));
    })();
}
