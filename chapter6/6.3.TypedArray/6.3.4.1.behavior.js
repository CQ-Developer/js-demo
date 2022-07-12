// 定型数组的行为
// 支持如下操作符, 方法, 属性
// []
// copyWithin()
// entries()
// every()
// fill()
// filter()
// find()
// findIndex()
// forEach()
// indexOf()
// join()
// keys()
// lastIndexOf()
// length
// map()
// reduce()
// reduceRight()
// reverse()
// slice()
// some()
// sort()
// toLocaleString()
// toString()
// values()

console.log(`
// 返回新数组的方法, 会返回包含相同元素类型的新定型数组`);
const ints = new Int16Array([1, 2, 3]);
const doubleInts = ints.map(x => x * 2);
console.log(doubleInts instanceof Int16Array);

console.log(`
// 定型数组有一个Symbol.iterator符号属性, 因此可以通过for..of循环来操作`);
for(const int of ints) {
    console.log(int);
}

console.log(`
// 定型数组有一个Symbol.iterator符号属性, 因此可以通过扩展操作符来操作`);
console.log(Math.max(...ints));
