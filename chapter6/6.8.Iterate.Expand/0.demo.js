// ES6新增的迭代器和扩展操作符对集合引用类型特别有用
// 这些新特性让集合之间相互操作, 复制和修改变得异常方便

// 第7章将详细介绍

// 有4中原生集合类型定义了默认迭代器
// Array
// 所有定型数组
// Map
// Set

console.log(`
// 这意味着上述所有类型都支持顺序迭代, 都可以传入for-of循环`);
let iterableThings = [
    Array.of(1, 2),
    Int16Array.of(3, 4),
    new Map([[5, 6], [7, 8]]),
    new Set([9, 10])
];

for(const x of iterableThings) {
    console.log(x);
}

console.log(`
// 这也意味着所有这些类型都兼容扩展操作符
// 扩展操作符在对可迭代对象执行浅复制时特别有用
// 只需要简单的语法就可以复制整个对象`);
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);

console.log(`
// 对于期待可迭代对象的构造器函数
// 只要传入一个可迭代独享就可以实现复制`);
let map1 = new Map([[1, 2], [3, 4]]);
let map2 = new Map(map1);
console.log(map1);
console.log(map2);

console.log(`
// 当然也可以构建数组的部分元素`);
arr1 = [1, 2, 3];
arr2 = [0, ...arr1, 4, 5];
console.log(arr2);

console.log(`
// 浅复制意味着只会复制对象引用`);
arr1 = [{}];
arr2 = [...arr1];
arr1[0].foo = "bar";
console.log(arr2[0]);

// 以上类型都支持多种构建方法
// 比如Array.of()和Array.from()静态方法
// 在与扩展操作符一起使用时, 可以非常方便的实现互相操作
arr1 = [1, 2, 3];

console.log(`
// 把数组复制到定型数组`);
let typedArr1 = Int16Array.of(...arr1);
let typedArr2 = Int16Array.from(arr1);
console.log(typedArr1);
console.log(typedArr2);

console.log(`
// 把数组复制到Map`);
let map = new Map(arr1.map((x) => [x, "v" + x]));
console.log(map);

console.log(`
// 把数组复制到Set`);
let set = new Set(typedArr2);
console.log(set);

console.log(`
// 把Set复制回数组`);
arr2 = [...set];
console.log(arr2);
