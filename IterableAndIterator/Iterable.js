// 实现Iterable接口要求具备两种能力
// 1.支持迭代的自我识别能力
// 2.创建Iterator对象的能力

// 必须暴露一个属性作为默认迭代器
// 属性必须使用特殊的Symbol.iterator作为键
// 属性必须引用一个迭代器工程函数
// 迭代器工厂函数必须返回一个新迭代器

let num = 1;
// 通过访问迭代器属性访问迭代器工厂函数
console.log(num[Symbol.iterator]);

let str = "abc";
// 通过访问迭代器属性访问迭代器工厂函数
console.log(str[Symbol.iterator]);
// 通过调用迭代器工厂函数获得迭代器对象
console.log(str[Symbol.iterator]());

let arr = [1, 2, 3];
// 通过访问迭代器属性访问迭代器工厂函数
console.log(arr[Symbol.iterator]);
// 通过调用迭代器工厂函数获得迭代器对象
console.log(arr[Symbol.iterator]());

let set = new Set([1, 2, 3]);
// 通过访问迭代器属性访问迭代器工厂函数
console.log(set[Symbol.iterator]);
// 通过调用迭代器工厂函数获得迭代器对象
console.log(set[Symbol.iterator]());