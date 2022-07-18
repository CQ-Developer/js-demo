/**
 * 11.1.2_3 嵌套异步回调
 * 
 * 如果异步返回值依赖另一个异步返回值, 那么回调的情况还会进一步变复杂
 * 
 * 显然, 随着代码越来越复杂, 回调策略时不具有扩展性的
 */
function double(value, success, failure) {
    setTimeout(() => {
        try {
            if (typeof value !== "number") {
                throw "Must provide number as first arguemtn";
            }
            success(2 * value);
        }
        catch(e) {
            failure(e);
        }
    }, 1000);
}

let successCallback = x => double(x, y => console.log(`Success: ${y}`));
let failureCallback = e => console.log(`Failure: ${e}`);

double(3, successCallback, failureCallback);
