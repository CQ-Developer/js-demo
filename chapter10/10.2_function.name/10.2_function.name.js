/**
 * 10.2 函数名
 * 
 * 因为函数名就是指向函数的指针, 所以它们跟其他包含对象指针的变量具有相同的行为
 * 这意味着一个函数可以有多个名称
 */
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(10, 10));

// 使用不带括号的函数名会访问函数指针, 而不是执行函数
let anotherSum = sum;
console.log(anotherSum(10, 10));

// 将sum设置为null就切断了它与函数之间的关联
sum = null;
console.log(anotherSum(10, 10));

/**
 * ES6的所有函数对象都会暴露一个只读的name属性, 其中包含关于函数的信息
 * 这个属性中保存的就是一个函数标识符, 或者说是一个字符串化的变量名
 * 如果它使用Function构造函数创建, 则会标识成anonymous
 */
function foo() {}
let bar = function() {};
let baz = () => {};

console.log(foo.name);
console.log(bar.name);
console.log(baz.name);

console.log((() => {}).name);
console.log((new Function()).name);

/**
 * 如果函数是一个获取函数, 设置函数, 或使用bind()实例化
 * 那么标识符前面会加上一个前缀
 */
console.log(foo.bind(null).name);

let dog = {
    years: 1,
    get age() {
        return this.years;
    },
    set age(newAge) {
        this.years = newAge;
    }
};

let propertyDescriptor = Object.getOwnPropertyDescriptor(dog, "age");

console.log(propertyDescriptor.get.name);
console.log(propertyDescriptor.set.name);
