// 8.4.4 继承 - 1.继承基础

// 虽然类继承使用的是新语法, 但背后依旧使用的是原型链
// ES6类支持单继承
// 使用extends关键字, 就可以继承任何拥有[[Construct]]和原型的对象
// 这意味着不仅可以继承一个类, 也可以继承普通的构造函数(保持向后兼容)

class Vehicle {}
class Bus extends Vehicle {}

console.log("// 继承类");
let b = new Bus();
console.log(b instanceof Bus);
console.log(b instanceof Vehicle);

function Person() {}
class Engineer extends Person {}

console.log("// 继承普通构造函数");
let e = new Engineer();
console.log(e instanceof Engineer);
console.log(e instanceof Person);

// 派生类都会通过原型链访问到类和原型上定义的方法
// this的值会反映调用相应方法的实例或类

class Aoo {
    identifyPrototype(id) {
        console.log(id, this);
    }

    static identifyClass(id) {
        console.log(id, this);
    }
}

class Boo extends Aoo {}

let aoo = new Aoo();
let boo = new Boo();

boo.identifyPrototype("boo");
aoo.identifyPrototype("aoo");

Boo.identifyClass("boo");
Aoo.identifyClass("aoo");

// extends关键字也可以在类表达式中使用
let Coo = class extends Boo {};
