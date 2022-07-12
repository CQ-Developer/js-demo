// 单例内置对象

// Global
// 在全局作用域定义的变量和函数都会成为Global的属性
// isNaN() isFinite() parseInt() parseFloat()

// URL编码方法 encodeURI() encodeURIComponent()
// 主要区别
// encodeURI()不会编码属于URL组件的特殊字符
// encodeURIComponent()会编码发现的所有非标准字符
let uri = "http://www.wrox.com/illegal value.js";
console.log(`uri = ${uri}`);
console.log(`encodeURI(uri) = ${encodeURI(uri)}`);
console.log(`encodeURIComponent(uri) = ${encodeURIComponent(uri)}`);

// URL解码方法 decodeURI() decodeURIComponent()
// 主要区别
// decodeURI()只对使用encodeURI()编码过的字符解码
// decodeURIComponent()解码所有被encodeURIComponent()编码的字符，基本上就是解码所有的特殊字符
uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start";
console.log(`uri = ${uri}`);
console.log(`decodeURI(uri) = ${decodeURI(uri)}`);
console.log(`decodeURIComponent(uri) = ${decodeURIComponent(uri)}`);

// eval()
// 整个ECMAScript中最强大的，这个方法就是一个完整的ECMAScript解释器
// 它接收一个参数，即一个要执行的JS字符串
// 在严格模式下，eval()内部创建的变量和函数，在外部无法访问
eval("console.log('hi');");
// 上面这行代码相当于执行了
console.log("hi");

// eval()执行的代码属于该调用所在上下文
// 被执行的代码与该上下文拥有相同的作用域
// 这意味着定义在包含上下文中的变量可以在eval()调用内部被应用
let msg = "hello world";
eval("console.log(msg);");

// 可以在eval()内部定义函数或变量
// 然后在外部代码中引用
eval("function sayHi() { console.log('hi'); }");
sayHi();

// 通过eval()定义的变量和函数不会被提升
// 因为在解析代码的时候它们被包含在字符串中
// 只是在eval()执行的时候才会被创建
eval("let msg1 = 'hello world';");
// ReferenceError: msg1 is not defined
// console.log(msg1);

// Global对象属性
// 一些特殊值和构造器函数

// window对象
// 浏览器将window对象实现为Global对象的代理
// 这段代码在浏览器中执行
// var color = "red";
// function sayColor() {
//     console.log(window.color);
// }
// window.sayColor();

// 获取Global对象的通用方式
// 这段代码创建了一个立即调用的函数表达式
let global = function() {
    return this;
}();

// Math
// 作为保存数学公式、信息和计算的地方
// Math对象属性
// Math.E - 自然对数的基数e的值
// Math.LN10 - 10位底的自然对数
// Math.LN2 - 2为底的自然对数
// Math.LOG2E - 以2为底的对数
// Math.LOG10E - 以10为底e的对数
// Math.PI - Π的值
// Math.SQRT1_2 - 1/2的平方根
// Math.SQRT2 - 2的平方根

// min()
// 接收任意多个参数确定最小值
let min = Math.min(3, 54, 32, 16);
console.log(`min = ${min}`);

// max()
// 接收任意多个参数确定最大值
let max = Math.max(3, 54, 32, 16);
console.log(`max = ${max}`);

// 使用扩展操作符求数组中的最大值
let values = [1, 2, 3, 4, 5, 6, 7, 8];
max = Math.max(...values);
console.log(`max = ${max}`);

// 将小数值舍入位整数的4个方法
// Math.ceil() - 始终向上舍入为最接近的整数
console.log(`Math.ceil(25.9) = ${Math.ceil(25.9)}`);
console.log(`Math.ceil(25.5) = ${Math.ceil(25.5)}`);
console.log(`Math.ceil(25.1) = ${Math.ceil(25.1)}`);

// Math.round() - 四舍五入
console.log(`Math.round(25.9) = ${Math.round(25.9)}`);
console.log(`Math.round(25.5) = ${Math.round(25.5)}`);
console.log(`Math.round(25.1) = ${Math.round(25.1)}`);

// Math.fround() - 返回数值最接近的单精度(32位)浮点值
console.log(`Math.fround(0.4) = ${Math.fround(0.4)}`);
console.log(`Math.fround(0.5) = ${Math.fround(0.5)}`);
console.log(`Math.fround(25.9) = ${Math.fround(25.9)}`);


// Math.floor() - 始终向下舍入为最接近的整数
console.log(`Math.floor(25.9) = ${Math.floor(25.9)}`);
console.log(`Math.floor(25.5) = ${Math.floor(25.5)}`);
console.log(`Math.floor(25.1) = ${Math.floor(25.1)}`);

// Math.random()
// 返回一个 0-1 范围内的随机数，包含0但不包含1
// 从一组整数中随机选择一个数的公式
// let number = Math.floor(Math.random() * total_number_of_choices + first_possible_value);

// 1-10 范围内随机选择一个数
let num = Math.floor(Math.random() * 10 + 1);
console.log(`1-10 random = ${num}`);

// 2-10 范围内的随机数，包括2和10
// 2-10 只有9个数，最小可能值是2
num = Math.floor(Math.random() * 9 + 2);
console.log(`2-10 random = ${num}`);

// 公式化
function selectFrom(lowerValue, upperValue) {
    let choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}
num = selectFrom(2, 10);
console.log(`2-10 random = ${num}`);

// 使用selectFrom()从数组中随机选择一个元素
let colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
let color = colors[selectFrom(0, colors.length - 1)];
console.log(`color = ${color}`);

// 为了加密需要生成随机数，建议使用window.crypto.getRandomValues()
// 随机数需要较高的不确定性
// console.log(window.crypto.getRandomValues());
// Math提供的其它方法参考134页