/**
 * 10.15 立即调用的函数表达式
 * 
 * 立即调用的匿名函数又被称作立即调用的函数表达式
 * 它类似于函数声明, 但由于被包含在括号中, 所以会被解释为函数表达式
 * 紧跟在第一组括号后面的第二组括号会立即调用前面的函数表达式
 */
(function() {})();

/**
 * 使用IIFE可以模拟块级作用域, 即再一个函数表达式内部声明变量, 然后立即调用这个函数
 * 这样位于函数体作用域的变量就像是在块级作用域中一样
 * ES5尚未支持块级作用域, 使用IIFE模拟块级作用域是相当普遍的
 * 
 * 
 */
(function() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
})();

/**
 * 代码执行到外部的console.log(i)时会出错, 因为它访问的变量在IIFE内部, 在外部访问不到
 * 在ES5及之前, 为了防止变量外泄, IIFE是个非常有效的方式
 * 这样也不会导致闭包相关的内存问题, 因为不存在对这个匿名函数的引用
 * 为此, 只要函数执行完毕, 其作用域链就可以被销毁
 * 
 * 在ES6之后, IIFE就没有那么必要了, 因为块级作用域中的变量无须IIFE就可以实现同样的隔离
 */

// console.log(i); ReferenceError: i is not defined

// 内嵌块级作用域
{
    let i;
    for (i = 0; i < 10; i++) {
        console.log(i);
    }
}
// console.log(i); ReferenceError: i is not defined

// 循环块级作用域
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i); ReferenceError: i is not defined
