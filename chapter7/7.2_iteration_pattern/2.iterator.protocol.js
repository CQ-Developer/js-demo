// 7.2.2 迭代器协议

// 迭代器是一种一次性使用的对象, 用于迭代与其关联的可迭代对象
// 迭代器API使用next()方法在可迭代对象中遍历数据
// 每次成功调用next(), 都会返回一个IteratorResult对象, 其中包含迭代器返回的下一个值
// 若不调用next()则无法知道迭代器当前的位置

// next()方法返回的迭代器对象IteratorResult包含两个属性: done和value
// done是一个布尔值, 表示是否还可以再次调用next()取得下一个值
// value包含可迭代对象的下一个值
// 存在下一个值则done=false, 否则done=true, value=undefined
// done=true的状态成为"耗尽"

// 可迭代对象
let arr = ["foo", "bar"];

// 迭代器工厂函数
console.log(arr[Symbol.iterator]);

// 调用迭代器工厂函数获取迭代器
let iter = arr[Symbol.iterator]();
console.log(iter);

// 执行迭代
console.log(`
// 迭代器执行过程中的属性变化`);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// 以上通过创建迭代器对象并调用next()方法按顺序迭代了数组, 直至不再产生新值
// 迭代器并不知道怎么从可迭代对象中取得下一个值, 也不知道可迭代对象有多大
// 只要迭代器到达done=true状态, 后续调用next()就一直返回同样的值
arr = ["foo"];
iter = arr[Symbol.iterator]();

console.log(`
// 只要迭代器状态达到done=true, 后续的调用就一直返回同样的值了`);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// 每个迭代器都表示可迭代对象的一次性有序遍历
// 不同迭代器对象的实例互相之间没有关系, 各自独立的遍历可迭代对象
arr = ["foo", "bar"];
let iter1 = arr[Symbol.iterator]();
let iter2 = arr[Symbol.iterator]();

console.log(`
// 迭代器对象之间互不干扰`);
console.log(iter1.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter1.next());

// 迭代器并不与可迭代对象某个时刻的快照绑定, 仅是使用游标来记录遍历可迭代对象的过程
// 如果可迭代对象在迭代期间被修改了, 迭代器也会做出相应的反应
arr = ["foo", "bar"];
iter = arr[Symbol.iterator]();

console.log(`
// 在迭代过程中修改可迭代对象, 迭代器会做出反应`);
console.log(iter.next());

// 在数组中间插入值
arr.splice(1, 0, "bar");

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// !
// 迭代器对象维护了一个只想可迭代对象的引用
// 因此迭代器会组织垃圾回收程序回收可迭代对象

// 迭代器的概念比较模糊
// 它可以指通用的迭代, 也可以指接口, 还可以指正式的迭代器类型

// 比较一个显示的迭代器实现和原生的迭代器实现

// 这个类实现了可迭代接口Iterable
// 调用默认的迭代器工厂函数会返回一个实现迭代器接口的迭代器对象
class Foo {
    [Symbol.iterator]() {
        return {
            next() {
                return { done: false, value: "foo" };
            }
        }
    }
}
let f = new Foo();
console.log(`
// 打印出实现了迭代器接口的对象`);
console.log(f[Symbol.iterator]());

// Array类型实现了可迭代接口(Iterable)
// 调用Array类型的默认迭代器工厂函数会创建一个ArrayIterator的实例
let a = new Array();
console.log(`
// 打印出ArrayIterator的实例`);
console.log(a[Symbol.iterator]());

