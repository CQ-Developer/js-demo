/**
 * 10.13.2 尾调用优化的代码
 * 
 * 可以通过把简单的递归函数转换为待优化的代码来加深对尾调用优化的理解
 * 下面是一个通过递归计算斐波那契数列的函数
 */
function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));

/**
 * 显然这部符合尾调用优化的条件, 因为返回语句中有一个相加操作
 * 
 * 当然, 解决这个问题也有不同的策略, 比如把递归改写成迭代循环形式
 * 不过, 也可以保持递归实现, 但将其重构为满足优化条件的形式
 * 为此可以使用两个嵌套的函数, 外部函数作为基础框架, 内部函数执行递归
 * 
 * 在严格模式下执行: "use strict"
 */
function fibo(n) {
    return fiboImpl(0, 1, n);
}
function fiboImpl(a, b, n) {
    if (n === 0) {
        return a;
    }
    return fiboImpl(b, a + b, n - 1);
}
