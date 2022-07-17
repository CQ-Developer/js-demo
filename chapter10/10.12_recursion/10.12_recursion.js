/**
 * 10.12 递归
 * 
 * 递归函数通常的形式是一个函数通过名称调用自己
 */
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

/**
 * 这是经典的递归阶乘函数
 * 虽然这样写是可以的, 但如果把这个函数赋值给其他变量, 就会出问题
 */
let anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4));

/**
 * arguments.callee就是一个指向正在执行的函数的指针, 因此可以在函数内部递归调用
 */
function factorial1(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}

/**
 * 在严格模式下不能访问arguments.callee
 * 此时, 可以使用命名函数表达式
 */
let factorial2 = (function f(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
});
