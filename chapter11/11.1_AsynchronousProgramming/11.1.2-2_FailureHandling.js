/**
 * 11.1.2_2 失败处理
 * 
 * 异步操作的失败处理在回调模型中也要考虑, 因此自然就出现了成功回调和失败回调
 * 
 * 这种模式已经不可取了, 以为必须在初始化异步操作时定义回调
 * 异步函数的返回值只在短时间内存在, 只有预备好将这个短时间内存在的值作为参数的回调才能接收到它
 */
function double(value, success, failure) {
    setTimeout(() => {
        try {
            if (typeof value !== "number") {
                throw "Must provide number as first argument";
            }
            success(2 * value);
        }
        catch(e) {
            failure(e);
        }
    }, 1000);
}

let successCallback = x => console.log(`Success: ${x}`);
let failureCallback = e => console.log(`Failure: ${e}`);

double(3, successCallback, failureCallback);
double("b", successCallback, failureCallback);
