/**
 * 11.2.5_1 期约取消
 * 
 * 我们经常会遇到Promise正在处理过程中, 程序却不再需要其结果的情形
 * 这时候如果能够取消Promise就好了
 * ES6的Promise被认为是激进的: 只要Promise的逻辑开始执行, 就没有办法阻止它执行到完成
 * 
 * 可以在现有实现基础上提供一种临时性的封装, 以实现取消Promise的功能
 * 生成的令牌实例提供了一个接口, 利用这个接口可以取消Promise
 * 同时也提供了一个Promise的实例, 可以用来触发取消后的操作并求值取消状态
 */
class CancelToken {
    constructor(cancelFn) {
        this.promise = new Promise((resolve, reject) => cancelFn(resolve));
    }
}

/**
 * 这个类包装一个Promise, 把解决方法暴露给了cancelFn参数
 * 这样, 外部代码就可以向构造函数中传入一个函数, 从而控制什么情况下可以取消Promise
 * 这里Promise是令牌类的公共成员, 因此可以给它添加处理程序以取消Promise
 */
// <button id="start">Start</button>
// <button id="cancel">Cancel</button>
// <script>代码如下</script>
class CancelToken {
    constructor(cancelFn) {
        this.promise = new Promise((resolve, reject) => {
            cancelFn(() => {
                setTimeout(console.log, 0, "delay cancelled");
                resolve();
            });
        });
    }
}

let startButton = document.querySelector("#start");
let cancelButton = document.querySelector("#cancel");

function cancellableDelayResolve(delay) {
    setTimeout(console.log, 0, "set delay");
    return new Promise((resolve, reject) => {
        const id = setTimeout(() => {
            setTimeout(console.log, 0, "delayed resolve");
            resolve();
        }, delay);
        const cancelToken = new CancelToken(cancelCallback => cancelButton.addEventListener("click", cancelCallback));
        cancelToken.promise.then(() => clearTimeout(id));
    });
}
