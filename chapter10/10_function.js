/**
 * 函数实际上是对象
 * 
 * 每个函数都是Function类型的实例, 而Function也有属性和方法, 跟其他引用类型一样
 * 
 * 因为函数是对象, 所以函数名就是指向函数对象的指针, 而且不一定与函数本身紧密绑定
 */

/**
 * 以函数声明的方式定义
 */
function sum(num1, num2) {
    return num1 + num2;
}

/**
 * 以函数表达式的方式定义
 */
let sum = function(num1, num2) {
    return num1 + num2;
};

/**
 * 以箭头函数的方式定义
 */
let sum = (num1, num2) => {
    return num1 + num2;
};

/**
 * 最后这种定义函数的方式是使用Function构造函数
 * 这个构造函数接收任意多个字符串参数, 最后一个参数始终会被当成函数体, 而之前的参数都是新函数的参数
 * 
 * 不推荐!
 */
let sum = new Function("num1", "num2", "return num1 + num2");
