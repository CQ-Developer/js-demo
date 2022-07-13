// 8.4.4 继承 - 3.抽象基类

// 有时候可能需要定义这样一个类
// 它可提供其他类继承, 但本身不能被实例化
// ECMAScript没有专门支持这种类的语法, 但通过new.target很容易实现
// new.target保存通过new关键字调用的类或函数
// 通过在实例化时检测new.target是不是抽象基类, 可以阻止对抽象基类的实例化

// 抽象基类
class Aoo {
    constructor() {
        console.log(new.target);
        if (new.target === Aoo) {
            throw new Error("Aoo cannot be directly instantiated");
        }
    }
}

// 派生类
class Aoosub extends Aoo {}

new Aoosub();

// Error: Aoo cannot be directly instantiated
// new Aoo();

// 通过在抽象基类构造函数中进行检查
// 可以要求派生类必须定义某个方法
// 因为原型方法在调用类构造函数之前就已经存在了
// 所以可以通过this关键字来检查相应的方法

// 抽象基类
class Vehicle {
    constructor() {
        if (new.target === Vehicle) {
            throw new Error("Vehicle cannot be directly instantiated");
        }
        if (!this.foo) {
            throw new Error("Inheriting class must difine foo()");
        }
        console.log("success!");
    }
}

// 派生类
class Bus extends Vehicle {
    foo() {}
}

// 派生类
class Van extends Vehicle {}

new Bus();

// Error: Inheriting class must difine foo()
// new Van();

