// 7.1 理解迭代

console.log(`
// 在JS中循环就是一种最简单的迭代`);
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log(`
// 迭代会在一个有序集合上进行
// 数组就是JS中有序集合的最典型例子`);
let collection = ["foo", "bar", "baz"];
for (let index = 0; index < collection.length; index++) {
    console.log(collection[index]);
}

console.log(`
// ES5新增了Array.prototype.forEach()方法`);
collection.forEach((item) => console.log(item));
