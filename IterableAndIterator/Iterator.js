// Iterator是一种一次性使用的对象

// 使用next()在Iterable对象中遍历数据
// next()返回IteratorResult对象
// IteratorResult对象包含2个属性: done, value

// done
// 布尔值, 表示是否还可以再次调用next()

// value
// 包含可迭代对象的下一个值或undefined

let arr = [1, 2, 3];
console.log(arr[Symbol.iterator]);

let iterator = arr[Symbol.iterator]();
console.log(iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// 只要迭代器达到done=true状态
// 后续调用next()就返回相同的值
console.log(iterator.next());
console.log(iterator.next());

// 不同迭代器之间互不影响

// 迭代器仅仅是使用游标来记录遍历Iterable对象的历程
// 如果Iterable对象在迭代期间被修改了, 迭代器也会反映相应的变化

iterator = arr[Symbol.iterator]();
console.log(iterator.next());
// 在索引1处插入数值4
arr.splice(1, 0, 4);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 迭代器持有Iterable对象的引用
// 因此会阻止垃圾回收

let iter1 = arr[Symbol.iterator]();
// 以这种方式创建的Iterator对象也实现了Iterable接口, 可以返回相同的Iterator
let iter2 = iter1[Symbol.iterator]();
console.log(iter1 === iter2);

// 可以将Iterator对象用在期待Iterable对象的地方
for (let item of iter1) {
    console.log(item);
}

// 没有关闭的Iterator可以继续之前的迭代
// 比如, 数组的Iterator就是不能关闭的

// 并非所有Iterator都是可关闭的
// 通过测试Iterator的return属性是不是一个函数, 可以得知是否可关闭
console.log(arr[Symbol.iterator]().return);