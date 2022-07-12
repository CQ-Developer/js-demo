// 7.2.3 自定义迭代器

// 与Iterable接口类似, 任何实现Iterator接口的对象都可以作为迭代器使用

class Counter {
    // Counter的实例应该迭代limit次
    constructor(limit) {
        this.count = 1;
        this.limit = limit;
    }

    next() {
        if (this.count <= this.limit) {
            return { done: false, value: this.count++ };
        } else {
            return { done: true, value: undefined };
        }
    }

    [Symbol.iterator]() {
        return this;
    }
}

console.log(`
// counter只能被迭代一定的次数`);
let counter = new Counter(3);
for (const i of counter) {
    console.log(i);
}

// 这个类实现了Iterator接口, 但不理想
// 因为每个实例只能被迭代一次

console.log(`
// 再次对counter进行迭代`);
for (const i of counter) {
    console.log(i);
}

// 为了让一个可迭代对象能够创建多个迭代器, 必须每创建一个迭代器就对应一个新的计数器
// 为此, 可以把计数器变量放到闭包里, 然后通过闭包返回迭代器

class CounterNew {
    constructor(limit) {
        this.limit = limit;
    }

    [Symbol.iterator]() {
        let count = 1;
        let limit = this.limit;
        return {
            next() {
                if (count <= limit) {
                    return { done: false, value: count++ };
                } else {
                    return { done: true, value: undefined };
                }
            }
        };
    }
}

let counterNew = new CounterNew(3);

console.log(`
// 可重复进行迭代`);
for (const i of counterNew) {
    console.log(i);
}
for (const i of counterNew) {
    console.log(i);
}

// 每个以这种方式创建的迭代器也实现了Iterator接口
// Symbol.iterator属性引用的工厂函数会返回相同的迭代器

console.log(`
// Symbol.iterator属性引用的工厂函数会返回相同的迭代器`);
let arr = ["foo", "bar", "baz"];

let iter1 = arr[Symbol.iterator]();
console.log(iter1[Symbol.iterator]);

let iter2 = iter1[Symbol.iterator]();
console.log(iter1 === iter2);

// 因为每个迭代器也实现了Iterable接口
// 所以它们可以用在任何期待可迭代对象的地方

arr = [3, 1, 4];
let iter = arr[Symbol.iterator]();
console.log(`
// 迭代器本身也是Iterable的实现`);
for (const i of arr) {
    console.log(i);
}
for (const i of iter) {
    console.log(i);
}
