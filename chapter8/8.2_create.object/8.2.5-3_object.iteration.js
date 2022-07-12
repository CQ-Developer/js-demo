// 8.2.5 对象迭代

// 3.原生对象原型

console.log(`
// 数组实例的sort()方法是在Array.prototype上定义的`);
console.log(`typeof Array.prototype.sort = ${typeof Array.prototype.sort}`);

console.log(`
// 字符串包装对象的substring()方法是在String.prototype上定义的`);
console.log(`typeof String.prototye.substring = ${typeof String.prototype.substring}`);

console.log(`
// 可以像修改自定义对象原型一样修改原生对象原型`);
String.prototype.startsWith = function(text) {
    return this.indexOf(text) === 0;
};
let msg = "Hello World";
console.log(msg.startsWith("Hello"));
