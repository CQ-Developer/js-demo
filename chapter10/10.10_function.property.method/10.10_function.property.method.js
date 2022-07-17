/**
 * 10.10 函数属性和方法
 * 
 * ES中的方法也是对象， 因此有属性和方法
 * 每个函数都有两个属性: length和prototype
 * 
 * 其中length保存了命名参数的个数
 * prototype是保存引用类型所有实例方法的地方, 如toString()等, 由所有实例共享
 * 在ES5中, prototype是不可枚举的
 */
function sayName(name) {
    console.log(name);
}

function sum(num1, num2) {
    return num1 + num2;
}

function sayHi() {
    console.log("hi");
}

console.log(sayName.length);
console.log(sum.length);
console.log(sayHi.length);

/**
 * 函数还有两个方法: apply()和call()
 * 这两个方法都会以指定的this值来调用函数, 即会设置调用函数时函数体内this对象的值
 * 
 * apply接收两个参数: 函数内部this值, 参数数组
 * 参数数组可以是Array对象, 也可以是arguments对象
 */
function callSum1(num1, num2) {
    return sum.apply(this, arguments);
}

function callSum2(num1, num2) {
    return sum.apply(this, [num1, num2]);
}

console.log(callSum1(10, 10));
console.log(callSum2(10, 10));

/**
 * call()和apply()的作用一样, 只是传参的形式不同
 * 第一个参数也是this值
 * 而剩下的要传给被调用函数的参数则是逐个传递
 */
function callSum3(num1, num2) {
    return sum.call(this, num1, num2);
}

console.log(callSum3(10, 10));

/**
 * ES5出于同样的目的定义了一个新方法: bind()
 * bind()方法会创建一个新的函数实例, this值会被绑定到传给bind()的对象
 */
color = "red";
var o = { color: "blue" };
function sayColor() {
    console.log(this.color);
}
let oSayColor = sayColor.bind(o);
oSayColor();
