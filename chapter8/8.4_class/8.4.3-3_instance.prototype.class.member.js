// 8.4.3 实例, 原型和类成员 - 3.静态类方法

// 可以在类上定义静态方法
// 这些方法通常用于执行不特定于实例的操作, 也不要求存在类的实例
// 静态成员每个类上只能有一个
// 在静态成员中, this引用类自身
// 其他所有约定和原型成员一样

class Person {
    /**
     * 添加到this的所有内容都会存在于不同的实例上
     */
    constructor() {
        this.locate = () => console.log("instance", this);
    }

    /**
     * 定义在类的原型对象上
     */
    locate() {
        console.log("prototype", this);
    }

    /**
     * 定义在类本身上
     */
    static locate() {
        console.log("class", this);
    }
}

let p = new Person();

p.locate();
Person.prototype.locate();
Person.locate();

// 静态方法非常适合作为实例工厂

class Aoo {
    constructor(age) {
        this.age_ = age;
    }

    sayAge() {
        console.log(this.age_);
    }

    static create() {
        return new Aoo(Math.floor(Math.random() * 100));
    }
}

console.log(Aoo.create());
