/**
 * 10.4 没有重载
 * 
 * ECMAScript函数不能像传统变成那样重载
 * 函数没有签名, 因为参数是由包含零个或多个值的数组表示的
 * 没有函数签名, 自然也就没有重载
 * 
 * 如果在ECMAScript中定义了两个同名函数, 则后定义的会覆盖先定义的
 */
function addSomeNumber(num) {
    return num + 100;
}

function addSomeNumber(num) {
    return num + 200;
}

let result = addSomeNumber(100);
console.log(result);

/**
 * 把函数名当成指针也有助于理解为什么ES没有函数重载
 * 在上面的例子中, 定义两个同名函数显然会导致后定义的重写先定义的
 * 和下面的这种方式是一样的
 */
let addNum = function(num) {
    return num + 100;
};

// 这种写法更容易理解发生了什么
// 在创建第二个函数是, 变量addNum被重写成保存第二个函数对象
addNum = function(num) {
    return num + 200;
};

result = addNum(100);
console.log(result);
