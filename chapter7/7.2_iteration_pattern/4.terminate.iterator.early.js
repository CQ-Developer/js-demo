// 7.2.4 提前终止迭代器

// 可选的return()方法用于指定在迭代器提前关闭时执行的逻辑
// 执行迭代的结构在想让迭代器感知它不想遍历到可迭代对象耗尽时, 就可以关闭迭代器
// for-of循环通过bread, continue, return和throw提前退出
// 解构操作并未消费所有值

// return()方法必须返回一个有效的IteratorResult对象
// 简单情况下可以只返回{done:true}
// 因为这个返回值只会用在生成器的上下文中, 所以后面再讨论这种情况

// 内置语言结构在发现还有更多值可以迭代, 但不会消费这些值时
// 会自动调用return()方法

class Counter {
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
                    return { done: true };
                }
            },

            return() {
                console.log("Exiting early");
                return { done: true };
            }
        };
    }
}

console.log(`
// 通过break提前退出迭代`);
let counter1 = new Counter(5);
for (const i of counter1) {
    if (i > 2) {
        break;
    }
    console.log(i);
}

console.log(`
// 通过throw提前退出迭代`);
let counter2 = new Counter(5);
try {
    for (const i of counter2) {
        if (i > 2) {
            throw "err";
        }
        console.log(i);
    }
} catch(e) {
    console.log("手动抛出异常", e);
}

console.log(`
// 通过结构语法提前退出迭代`);
let counter3 = new Counter(5);
let [a, b] = counter3;
console.log(a, b);

// 如果迭代器没有关闭, 则还可以继续从上次离开的地方继续迭代
// 比如, 数组的迭代器就是不能关闭的

let array = [1, 2, 3, 4, 5];
let iterator = array[Symbol.iterator]();

console.log(`
// 提前退出的迭代`);
for (const i of iterator) {
    console.log(i);
    if (i > 2) {
        break;
    }
}

console.log(`
// 从上次离开的地方继续迭代`);
for (const i of iterator) {
    console.log(i);
}

// 因为return()方法是可选的, 所以并非所有迭代器都是可关闭的
// 要知道某个迭代器是否可关闭, 可以测试这个迭代器实例的return属性是不是函数对象
// 不过, 仅仅给一个不可关闭的迭代器增加这个方法并不能让它变成可关闭的
// 这是因为调用return()不会强制迭代器进入关闭状态
// 即便如此, return()方法还是会被调用

let arr = [1, 2, 3, 4, 5];
let iter = arr[Symbol.iterator]();

console.log(`
// 迭代器的return属性`);
console.log(iter);
console.log(iter instanceof Function);

iter.return = function() {
    console.log("Exiting Early");
    return { done: true };
};

console.log(`
// 提前退出的迭代`);
for (const i of iter) {
    console.log(i);
    if (i > 2) {
        break;
    }
}

console.log(`
// 从上次离开的地方继续迭代`);
for (const i of iter) {
    console.log(i);
}
