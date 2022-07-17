/**
 * 10.11 函数表达式
 * 
 * 定义函数有两种方式: 函数声明, 函数表达式
 * 
 * 函数声明的关键特定是函数声明提升, 即函数声明会在代码执行之前获得定义
 * 这意味着可以出现在调用它的代码之后
 * 
 * 函数表达式看起来就像一个普通的变量定义和赋值, 即创建一个函数再把它赋值给一个变量
 * 这样创建的函数叫作匿名函数, 因为function关键字后面没有标识符
 * 未赋值给其他变量的匿名函数的name属性是空字符串
 * 
 * 创建函数并赋值给变量的能力也可以用于在一个函数中把另一个函数当作值返回
 */
function createComparisonFunction(propertyName) {
    return function(object1, object2) {
        let value1 = object1[propertyName];
        let value2 = object2[propertyName];

        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}

function foo() {}
console.log(foo.name);

let boo = function() {};
console.log(boo.name);

let coo = function doo() {};
console.log(coo.name);
