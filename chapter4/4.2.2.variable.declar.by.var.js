// 使用 var 的函数作用域声明
// s1 在函数外部是无法访问到的
// ReferenceError: s1 is not defined
function add_1(n1, n2) {
    var s1 = n1 + n2;
    return s1;
}
let r1 = add_1(10, 20);
// console.log(s1);

// 不适用 var 声明 s2
// 直接初始化 s2 会使其被自动添加到全局上下文
// 严格模式下会报错
// 不推荐这种用法
function add_2(n1, n2) {
    s2 = n1 + n2;
    return s2;
}
let r2 = add_2(10, 20);
console.log(s2);

// var 是的变量被提升到函数或全局作用域的顶部

var name = 'jack';
// 等价于
name = 'jack';
var name;

function f1() {
    var name = 'jack';
}
// 等价于
function f2() {
    var name;
    name = 'jack';
}

// 不会导致 ReferenceError
// 而只是 undefined
console.log(jack);
var jack;

// 不会导致 ReferenceError
// 而只是 undefined
function f3() {
    console.log(tom);
    var tom;
}
f3();
