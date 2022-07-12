// 7.3.3 生成器作为默认迭代器

// 因为生成器对象实现了Iterable接口
// 而且生成器函数和默认迭代器被调用之后都产生迭代器
// 所以生成器格外适合作为默认迭代器

// 下面一个简单的例子, 这个类的默认迭代器可以用一行代码产出类的内容

class Foo {
    constructor() {
        this.values = [1, 2, 3];
    }

    * [Symbol.iterator]() {
        yield* this.values;
    }
}

const f = new Foo();

// 这里, for-of循环调用了默认迭代器并产生了一个生成器对象
// 默认迭代器恰好是一个生成器函数
// 这个生成器对象是可迭代的, 所以完全可以在迭代中使用
for (const x of f) {
    console.log(x);
}
