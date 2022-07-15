/**
 * 10.5 默认参数作用域与暂时性死区
 * 
 * 因为在求值默认参数时可以定义多个对象, 也可以动态调用函数
 * 所以函数参数肯定是在某个作用域中求值的
 * 
 * 给多个参数定义默认值实际上跟使用let关键字顺寻声明变量是一样的
 */
function makeKingA(name = "Honry", numerals = "VIII") {
    return `King ${name} ${numerals}`;
}
console.log(makeKingA());

/**
 * 这个的默认参数会按照定义的顺序依次被初始化
 * 可以依照如下代码想象一下这个过程
 */
function makeKingB() {
    let name = "Henry";
    let numerals = "VIII";
    return `King ${name} ${numerals}`;
}

/**
 * 因为参数是按顺序初始化的
 * 所以后定义默认值的参数可以引用先定义的参数
 */
function makeKingC(name = "Henry", numerals = name) {
    return `King ${name} ${numerals}`;
}
console.log(makeKingC());

/**
 * 参数初始化顺序遵循"暂时性死区"规则
 * 即前面定义的参数不能引用后面定义的
 * 
 * 调用时不传第一个参数就会报错
 */
function makeKingD(name = numerals, numerals = "VIII") {
    return `King ${name} ${numerals}`;
}

/**
 * 参数也存在于自己的作用域中, 它们不能引用函数体的作用
 * 
 * 调用时不传第二个参数会报错
 */
function makeKingE(name = "Henry", numerals = defaultNumerals) {
    const defaultNumerals = "VIII";
    return `King ${name} ${numerals}`;
}
