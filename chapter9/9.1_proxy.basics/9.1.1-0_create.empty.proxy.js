/**
 * 9.1.1 创建空代理
 * 
 * 最简单的代理时空代理, 即除了作为一个抽象的目标对象, 什么也不做
 * 因此, 在任何可以使用目标对象的地方, 都可以通过同样的方式来使用与之关联的代理对象
 * 
 * 代理是使用Proxy构造函数创建的
 * 这个构造函数接收两个参数: 目标对象和处理程序对象
 * 要创建空代理, 可以传一个简单的对象字面量作为处理程序对象, 从而让所有操作畅通无阻的抵达目标对象
 */
const target = { id: "target" };
const handler = {};
const proxy = new Proxy(target, handler);

console.log("// id属性会访问同一个值");
console.log(target.id);
console.log(proxy.id);

console.log("// 给目标属性赋值会反映在两个对象上, 因为两个对象访问的是同一个值");
target.id = "foo";
console.log(target.id);
console.log(proxy.id);

console.log("// 给代理对象属性赋值会反映在两个对象上, 因为这个赋值会转移到目标对象");
proxy.id = "bar";
console.log(target.id);
console.log(proxy.id);

console.log("// hasOwnProperty()方法在两个地方都会应用到目标对象");
console.log(target.hasOwnProperty("id"));
console.log(proxy.hasOwnProperty("id"));

// Proxy.prototype是undefined
// 因此不能使用instanceof操作符
// console.log(target instanceof Proxy); // TypeError: Function has non-object prototype 'undefined' in instanceof check
// console.log(proxy instanceof Proxy); // TypeError: Function has non-object prototype 'undefined' in instanceof check

console.log("// 严格相等可以区分代理和目标");
console.log(target == proxy);
console.log(target === proxy);
