/**
 * 8.2.4 原型模式
 * 
 * 4.属性枚举顺序
 * 
 * for-if循环, Object.keys(), Object.getOwnPropertyNames(), Object.getOwnPropertySymbols(), Object.assign()
 * 在属性枚举顺序方法有很大不同
 * 
 * for-in循环和Object.keys()的枚举顺序是不确定的, 取决于JavaScript引擎
 * 
 * Object.getOwnPropertyNames(), Object.getOwnPropertySymbols(), Object.assign()
 * 的枚举顺序是确定的
 * 先以升序枚举数值键, 然后以插入顺序枚举字符串和符号键
 * 在对象字面量中定义的键以逗号分隔的顺序插入
 */
let k1 = Symbol("k1"),
    k2 = Symbol("k2");

let o = {
    1: 1,
    first: "first",
    [k1]: "sym2",
    second: "second",
    0: 0
};

o[k2] = "sym2";
o[3] = 3;
o.third = "third";
o[2] = 2;

console.log(Object.getOwnPropertyNames(o));

console.log(Object.getOwnPropertySymbols(o));
