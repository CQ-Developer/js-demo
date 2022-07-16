/**
 * 10.6.2 收集参数
 * 
 * 在构思函数定义时, 可以使用扩展操作符把不同长度的独立参数组合为一个数组
 * 这点类似arguments对象的构造机制, 只不过收集参数的结果会得到一个Array实例
 */
function getSum(...values) {
    return values.reduce((x, y) => x + y, 0);
}
console.log(getSum(1, 2, 3));

/**
 * 收集参数的前面如果还有命名参数, 则只会收集其余的参数
 * 如果没有则会得到空数组
 * 因为收集参数的结果可变, 所以只能把它作为最后一个参数
 */
// 不可以
// function getProduct(...values, lastValue) {}

// 可以
function ignoreFirst(firstValue, ...values) {
    console.log(values);
}

ignoreFirst();
ignoreFirst(1);
ignoreFirst(1, 2);
ignoreFirst(1, 2, 3);

/**
 * 箭头函数虽然不支持arguments对象, 但支持收集参数的定义方式
 * 因此也可以实现与使用arguments一样的逻辑
 */
let getSumB = (...values) => {
    return values.reduce((x, y) => x + y, 0);
};

console.log(getSumB(1, 2, 3));

/**
 * 另外, 使用收集参数并不影响arguments对象
 * 它仍然反映调用时传给函数的参数
 */
function getSumC(...values) {
    console.log(arguments.length);
    console.log(arguments);
    console.log(values);
}

getSumC(1, 2, 3);
