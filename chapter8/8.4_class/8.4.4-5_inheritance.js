// 8.4.4 继承 - 5.类混入

// 把不同类的行为集中到一个类是一种常见的JavaScript模式
// 虽然ES6没有显示的支持多继承, 但通过现有特性可以轻松模拟这种行为
// Object.assign()方法是为了混入对象行为而设计的

// extends关键字后面是一个JavaScript表达式
// 任何可以解析为一个类或一个构造函数的表达式都是有效的
// 这个表达式会在求值类定义时被求值

class Vehicle {}

function getParentClass() {
    console.log("evaluated expression");
    return Vehicle;
}

// 可求值的表达式
class Bus extends getParentClass() {}

let bus = new Bus();
console.log(bus instanceof getParentClass);
console.log(bus instanceof Vehicle);




// 混入模式可以通过一个表达式中连缀多个混入元素来实现, 这个表达式最终会解析为一个可以被继承的类
// Person类需要组合A, B, C, 则让Person继承C, C继承B, B继承A, 从而把A, B, C组合到这个超类中
// 实现这种模式有不同的策略

// 一个策略是定义一组"可嵌套"的函数, 每个函数分别接收一个超类作为参数, 而将混入类定义为这个参数的子类, 并返回这个类
// 这些组合函数可以连缀调用, 最终组合成超类表达式
let FooMixin = (Superclass) => class extends Superclass {
    foo() {
        console.log("foo");
    }
};

let BarMixin = (Superclass) => class extends Superclass {
    bar() {
        console.log("bar");
    }
};

let BazMixin = (Superclass) => class extends Superclass {
    baz() {
        console.log("baz");
    }
};

class BusA extends FooMixin(BarMixin(BazMixin(Vehicle))) {}

let busA = new BusA();
busA.foo();
busA.bar();
busA.baz();

// 通过写一个辅助函数, 可以把嵌套调用展开
function mix(BaseClass, ...Mixins) {
    return Mixins.reduce((accumulator, current) => current(accumulator), BaseClass);
}

class BusB extends mix(Vehicle, FooMixin, BarMixin, BazMixin) {}

let busB = new BusA();
busB.foo();
busB.bar();
busB.baz();
