/**
 * 10.7 函数声明和函数表达式
 * 
 * JavaScript引擎在加载数据时对它们是区别对待的
 * JavaScript引擎在任何代码执行之前, 会先读取函数声明, 并在执行上下文中生成函数定义
 * 而函数表达式必须等到代码执行到它那一行, 才会在执行上下文中生成函数定义
 * 
 * 除了什么时候定真正有定义这个区别外, 两种语法是等价的
 * 
 * 这段代码可以正常运行, 因为函数声明会在任何代码执行之前先被读取并添加到执行上下文
 * 这个过程叫作[函数声明提升]
 * 
 * 在执行代码时, JavaScript引擎会先执行一遍扫描, 把发现的函数声明提升到源代码树的顶部
 * 因此即使函数定义出现在调用它们的代码之后, 引擎也会把函数声明提升到顶部
 */
console.log(sumA(10, 10));

function sumA(num1, num2) {
    return num1 + num2;
}

/**
 * 如果将其改为等价的函数表达式, 那么执行的时候就会报错
 * ReferenceError: Cannot access 'sumB' before initialization
 */
// console.log(sumB(10, 10));
// let sumB = function(num1, num2) {
//     return num1 + num2;
// };

/**
 * 之所以出错是因为这个函数定义包含在一个变量初始化语句中, 而不是函数声明中
 * 这意味着代码如果没有执行到这一行, 那么执行上下文中就没有函数的定义, 所以代码会报错
 * 和使用let关键字定义或var关键字定义无关
 */
console.log(sumC(10, 10));
var sumC = function(num1, num2) {
    return num1 + num2;
};
