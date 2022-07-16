/**
 * 10.6.1 扩展参数
 * 
 * 在给函数传参时, 有时候可能不需要传一个数组, 而是要分别传入数组中的元素
 * 假设有如下函数定义, 它会将所有传入的参数累加起来:
 */
let values = [1, 2, 3, 4];

function getSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

/**
 * 如果不适用扩展操作符, 想把定义在这个函数这面的数组拆分
 * 那么就得求助于apply()方法
 */
console.log(getSum.apply(null, values));

/**
 * 在ES6中, 可以通过扩展操作符极为简洁地实现这种操作
 * 可迭代对象应用扩展操作符, 并将其作为一个参数传入, 可以将可迭代对象拆分, 并将迭代返回的每个值单独传入
 */
console.log(getSum(...values));

/**
 * 因为数组的长度已知, 所以在使用扩展操作符传参的时候, 并不妨碍在其前面或后面再传其他的值
 * 包括使用扩展操作符传其他参数
 */
console.log(getSum(-1, ...values));
console.log(getSum(...values, 5));
console.log(getSum(-1, ...values, 5));
console.log(getSum(...values, ...[5, 6, 7]));

/**
 * 对函数中的arguments对象而言, 它并不知道扩展操作符的存在
 * 而是按照调用函数时传入的参数接收每一个值
 */
function countArguments() {
    console.log(arguments.length);
}

countArguments(-1, ...values);
countArguments(...values, 5);
countArguments(-1, ...values, 5);
countArguments(...values, ...[5, 6, 7]);

/**
 * arguments对象只是消费扩展操作符的一种方式
 * 在普通函数和箭头函数中, 也可以将扩展操作符用于命名参数, 当然同时也可以使用默认参数
 */
function getProduct(a, b, c = 1) {
    return a * b * c;
}

let getSumA = (a, b, c = 0) => {
    return a + b + c;
};

console.log(getProduct(...[1, 2]));
console.log(getProduct(...[1, 2, 3]));
console.log(getProduct(...[1, 2, 3, 4]));

console.log(getSumA(...[0, 1]));
console.log(getSumA(...[0, 1, 2]));
console.log(getSumA(...[0, 1, 2, 3]));

