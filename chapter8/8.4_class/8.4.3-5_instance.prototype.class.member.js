// 8.4.3 实例, 原型和类成员 - 5.迭代器与生成器方法

// 类定义语法支持在原型和类本身上定义生成器

class Goo {
    /**
     * 在原型上定义生成器方法
     */
    *createNicknameIterator() {
        yield "Jack";
        yield "Jake";
        yield "J-Dog";
    }

    /**
     * 在类上定义生成器
     */
    static *createJobIterator() {
        yield "Butcher";
        yield "Baker";
        yield "Candlestick maker";
    }
}

console.log("// 定义在类上的生成器");
let jobIter = Goo.createJobIterator();
console.log(jobIter.next().value);
console.log(jobIter.next().value);
console.log(jobIter.next().value);

console.log("// 定义在原型上的生成器");
let g = new Goo();
let nicknameIter = g.createNicknameIterator();
console.log(nicknameIter.next().value);
console.log(nicknameIter.next().value);
console.log(nicknameIter.next().value);

// 因为支持生成器
// 所以可以通过添加一个默认的迭代器, 把类实例变成可迭代对象

class Ioo {
    constructor() {
        this.nicknames = ["Jack", "Jake", "J-Dog"];
    }

    *[Symbol.iterator]() {
        yield *this.nicknames.entries();
    }
}

console.log("// 给对象添加默认迭代器");
let i = new Ioo();
for (const [idx, nickname] of i) {
    console.log(nickname);
}

// 也可以值返回迭代器实例

class Too {
    constructor() {
        this.nicknames = ["Jack", "Jake", "J-Dog"];
    }

    [Symbol.iterator]() {
        return this.nicknames.entries();
    }
}

console.log("// 返回迭代器实例");
let t = new Too();
for (let [idx, nickname] of t) {
    console.log(nickname);
}
