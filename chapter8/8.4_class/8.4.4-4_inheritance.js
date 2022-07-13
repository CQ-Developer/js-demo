// 8.4.4 继承 - 4.继承内置类型



// ES6类为继承内置引用类型提供了顺畅的机制
// 开发者可以方便的扩展内置类型
class SuperArray extends Array {
    /**
     * 洗牌算法
     */
    shuffle() {
        for (let i = this.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this[i], this[j]] = [this[j], this[i]];
        }
    }
}

let a = new SuperArray(1, 2, 3, 4, 5);

console.log(a instanceof Array);
console.log(a instanceof SuperArray);

console.log(a);

a.shuffle();
console.log(a);



// 有些内置类型的方法会返回新实例
// 默认情况下, 返回实例的类型与原始实例的类型是一致的
class SuperArrayA extends Array {}

let a1 = new SuperArrayA(1, 2, 3, 4, 5);
let a2 = a1.filter(x => !!(x % 2));

console.log(a1);
console.log(a2);

console.log(a1 instanceof SuperArrayA);
console.log(a2 instanceof SuperArrayA);



// 如果想覆盖这个默认行为, 则可以覆盖Symbol.species访问器
// 这个访问器决定在创建返回的实例时使用的类
class SuperArrayB extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

a1 = new SuperArrayB(1, 2, 3, 4, 5);
a2 = a1.filter(x => !!(x % 2));

console.log(a1);
console.log(a2);

console.log(a1 instanceof SuperArrayB);
console.log(a2 instanceof SuperArrayB);
