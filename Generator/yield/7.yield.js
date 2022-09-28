class Foo {
    constructor() {
        this.values = [1, 2, 3];
    }
    /**
     * 因为Generator对象实现了Iterable接口
     * 而且生成器函数和默认Iterator被调用之后都产生Iterator对象
     * 所有Generato格外适合作为默认Iterator
     */
    * [Symbol.iterator]() {
        yield* this.values;
    }
}

const foo = new Foo();
for (const x of foo) {
    console.log(x);
}
