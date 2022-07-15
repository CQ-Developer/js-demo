/**
 * 10.5 默认参数值
 * 
 * 在ES5.1及以前, 实现默认参数的一种常用方式就是检测某个参数是否等于undefined
 * 如果是则意味着没有传递这个参数, 那就给他赋一个值
 */
function makeKing(name) {
    name = (typeof name !== "undefined") ? name : "Henry";
    return `King ${name} VIII`;
}

console.log(makeKing());
console.log(makeKing("Louis"));

/**
 * ES6之后就不用这么麻烦了, 它支持显示定义默认参数
 * 只要在函数定义中的参数后面用=号就可以给参数赋默认值
 */
function makeKing(name = "Henry") {
    return `King ${name} VIII`;
}

console.log(makeKing());
console.log(makeKing("Louis"));

/**
 * 给参数传undefined相当于没有传值
 * 不过这样可以利用多个独立默认值
 */
function makeKing(name = "Henry", numerals = "VIII") {
    return `King ${name} ${numerals}`;
}

console.log(makeKing());
console.log(makeKing("Louis"));
console.log(makeKing(undefined, "VI"));

/**
 * 在使用默认参数时, arguments对象的值不反映参数的默认值, 值反映传给函数的参数
 * 修改命名参数也不影响arguments对象, 它始终以调用函数时传入的值为准
 */
function makeKing(name = "Henry") {
    name = "Louis";
    return `King ${arguments[0]}`;
}

console.log(makeKing());
console.log(makeKing("Louis"));

/**
 * 默认参数值并不限于原始值或对象类型
 * 也可以使用调用函数返回的值
 */
let romanNumerals = ["I", "II", "III", "IV", "V", "VI"];
let ordinality = 0;

function getNumerals() {
    return romanNumerals[ordinality++];
}

// 只有在函数被调用时才会求值, 不会在函数定义时求值
// 计算默认值的函数只有在调用函数但未传相应参数时参会被调用
function makeKingA(name = "Henry", numerals = getNumerals()) {
    return `King ${name} ${numerals}`;
}

console.log(makeKingA());
console.log(makeKingA("Louis", "XVI"));
console.log(makeKingA());
console.log(makeKingA());

/**
 * 箭头函数同样也可以这样使用默认参数
 * 但不能省略括号
 */
let makeKingB = (name = "Henry") => `King ${name}`;
console.log(makeKingB());
