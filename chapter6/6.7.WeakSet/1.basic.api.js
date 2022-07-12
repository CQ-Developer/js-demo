// 6.7.1 基本API

console.log(`
// 使用new关键字实例化一个空WeakSet`);
const ws = new WeakSet();
console.log(ws);

// WeakSet中的值只能是Object或继承自Object类型, 尝试使用非对象作为值会抛出TypeError
// 构造函数接收一个可迭代对象, 需要包含有效的值
// 可迭代对象中每个值都会按照迭代顺序插入到WeakSet中
const v1 = { id: 1 };
const v2 = { id: 2 };
const v3 = { id: 3 };

console.log(`
// 使用数组初始化WeakSet`);
const ws1 = new WeakSet([v1, v2, v3]);
console.log(ws1.has(v1));
console.log(ws1.has(v2));
console.log(ws1.has(v3));

// 初始化是全有或全无的操作
// 只要有一个值无效就会抛出错误, 导致整个初始化失败
console.log(`
// 初始化时传递非对象类型
TypeError: Invalid value used in weak set`);
// const ws2 = new WeakSet([v1, "BAD", v3]);

console.log(`
// 原始值可以先包装成对象再用作值`);
const stringValue = new String("v1");
const ws3 = new WeakSet([stringValue]);
console.log(ws3.has(stringValue));

console.log(`
// 初始化之后通过add()方法添加新值`);
ws.add(v1)
  .add(v2);
console.log(ws.has(v1));
console.log(ws.has(v2));

console.log(`
// 通过delete()删除`);
ws.delete(v1);
console.log(ws.has(v1));
console.log(ws.has(v2));
