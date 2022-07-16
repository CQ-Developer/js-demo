/**
 * 10.9.1 arguments
 * 
 * arguments对象是一个类数组对象, 包含调用函数时传入的所有参数
 * 这个对象只有以function关键字定义函数时才会有
 * 虽然主要用于包含函数参数, 但arguments对象其实还有一个callee属性, 是一个指向arguments对象所在函数的指针
 * 
 * 经典的阶乘函数:
 */
function factorialA(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorialA(num - 1);
    }
}

/**
 * 阶乘函数一般定义成递归调用
 * 只要给函数一个名称, 而且这个名称不会变, 这样定义就没问题
 * 但是, 这个函数要正确执行就必须保证函数名是 factorial, 从而导致了紧密耦合
 * 使用arguments.callee就可以让函数逻辑与函数名解耦
 */
function factorialB(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}

/**
 * 考虑下面情况
 * 
 * 这里, trueFactorial变量被赋值为factorialB, 实际上把同一个函数指针又保存到了另一个位置
 * 如果像factorialA那样不使用arguments.callee, 那么就会返回0
 */
let trueFactorial = factorialB;

factorialB = function() {
    return 0;
};

console.log(trueFactorial(5));
console.log(factorialB(5));
