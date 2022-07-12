// with
// 将代码的作用域设置为特定的对象
// 主要场景是针对一个对象反复操作
// 严格模式会不允许使用
// 不推荐使用with
let obj = new Object();
obj.id = 1;
obj.name = 'chen';

with(obj) {
    let a = id + 1;
    console.log(`in with, id = ${a}`);
    let b = name.toUpperCase();
    console.log(`in with, name = ${b}`);
}

console.log(`out with, id = ${obj.id}`);
console.log(`out with, name = ${obj.name}`);
