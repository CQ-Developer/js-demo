/**
 * 10.1 箭头函数
 * 
 * ES6新增了使用胖箭头=>语法定义函数表达式的能力
 * 很大程度上, 箭头函数实例化的函数对象与正式的函数表达式创建的函数对象行为是相同的
 * 
 * 箭头函数虽然语法简洁, 但有很多场景不适合
 * 箭头函数不能使用arguments, super和new.target, 也不能用作构造函数
 * 此外, 箭头函数也没有prototype属性
 * 
 * 任何使用函数表达式的地方, 都可以使用箭头函数
 */
let arrowSum = (a, b) => {
    return a + b;
};

let functionExpressionSum = function(a, b) {
    return a + b;
};

console.log(arrowSum(5, 8));
console.log(functionExpressionSum(5, 8));

/**
 * 箭头函数简洁的语法非常适合嵌入函数的场景
 */
let ints = [1, 2, 3];

console.log(ints.map(function(i) {
    return i + 1;
}));

console.log(ints.map((i) => {
    return i + 1;
}));

/**
 * 如果只有一个参数, 那也可以不用括号
 * 只有没有参数, 或者多个参数的情况下, 才需要使用括号
 * 以下两种写法都有效
 */
let double = (x) => {
    return x * 2;
};

let triple = x => {
    return x * 3;
};

/**
 * 没有参数需要括号
 */
let getRandom = () => {
    return Math.random();
};

/**
 * 多个参数需要括号
 */
let sum = (a, b) => {
    return a + b;
};

/**
 * 箭头函数也可以不用大括号, 但这样会改变函数的行为
 * 使用大括号就说明包含"函数体", 可以在一个函数中包含多条语句, 跟常规函数一样
 * 如果不适用大括号, 那么箭头函数后面就只能有一行代码, 比如一个赋值操作, 或者一个表达式
 * 而且, 省略大括号会隐式返回这行代码的值
 * 
 * 以下两种写法都有效, 而且返回相应的值
 */
let doubleA = x => { return 2 * x; };
let tripleA = x => 3 * x;

/**
 * 可以赋值
 */
let value = {};
let setName = x => x.name = "Matt";
setName(value);
console.log(value);
