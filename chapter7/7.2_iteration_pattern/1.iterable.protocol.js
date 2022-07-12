// 7.2.1 可迭代协议

// 实现Iterable接口要求同时具备两种能力: 支持迭代的自我识别能力和创建实现Iterator接口的对象的能力
// 在ES中这意味着必须暴露一个属性作为"默认迭代器", 而且这个属性必须使用Symbol.iterator作为键
// 这个默认迭代器属性必须引用一个迭代器工厂函数, 调用这个工厂函数必须返回一个新迭代器

// 实现了Iterable接口的内置类型
// String
// Array
// Map
// Set
// arguments对象
// NodeList等DOM集合类型

// 检查是否存在默认迭代器属性可以暴露这个工厂函数

console.log(`
// Number字面量的[Symbol.iterator]属性`);
let num = 1;
console.log(num[Symbol.iterator]);

console.log(`
// 自定义对象的[Symbol.iterator]属性`);
let obj = {};
console.log(obj[Symbol.iterator]);

console.log(`
// String类型的迭代器工厂函数和返回的迭代器对象`);
let str = "abc";
console.log(str[Symbol.iterator]);
console.log(str[Symbol.iterator]());

console.log(`
// Array类型的迭代器工厂函数和返回的迭代器对象`);
let arr = ["a", "b", "c"];
console.log(arr[Symbol.iterator]);
console.log(arr[Symbol.iterator]());

console.log(`
// Map类型的迭代器工厂函数和返回的迭代器对象`);
let map = new Map().set("a", 1).set("b", 2).set("c", 3);
console.log(map[Symbol.iterator]);
console.log(map[Symbol.iterator]());

console.log(`
// Set类型的迭代器工厂函数和返回的迭代器对象`);
let set = new Set().add("a").add("b").add("c");
console.log(set[Symbol.iterator]);
console.log(set[Symbol.iterator]());

// let els = document.querySelectorAll("div");
// console.log(els[Symbol.iterator]);
// console.log(els[Symbol.iterator]());

// 实际写代码过程中, 不需要显示调用这个工厂方法来生成迭代器
// 实现Iterable的所有类型都会自动兼容接收可迭代对象的任何语言特性
// 接收可迭代对象的原生语言特性包括
// for-of循环
// 数组结构
// 扩展操作符
// Array.from()
// 创建Set
// 创建Map
// Promise.all()接收由Promise组成的可迭代对象
// Promise.race()接收由Promise组成的可迭代对象
// yield*操作符, 在生成器中使用

// 这些原生语言结构会在后台调用提供的可迭代对象的这个工厂函数, 从二创建一个迭代器
arr = ["foo", "bar", "baz"];

console.log(`
// for-of 循环`);
for (let el of arr) {
    console.log(el);
}

console.log(`
// 数组结构`);
let [a, b, c] = arr;
console.log(a, b, c);

console.log(`
// 扩展操作符`);
let arr2 = [...arr];
console.log(arr2);

console.log(`
// Array.from()`);
let arr3 = Array.from(arr);
console.log(arr3);

console.log(`
// Set 构造函数`);
set = new Set(arr);
console.log(set);

console.log(`
// Map 构造函数`);
let pairs = arr.map((v, i) => [v, i]);
console.log(pairs);
map = new Map(pairs);
console.log(map);

// 如果对象原型链上的父类实现了Iterable接口
// 那么这个对象也就实现了这个接口
class FooArray extends Array {}
let fooArr = new FooArray("foor", "bar", "baz");
console.log(`
// 父类实现了Iterable`);
for (const el of fooArr) {
    console.log(el);
}
