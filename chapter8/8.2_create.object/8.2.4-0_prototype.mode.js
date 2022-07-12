/**
 * 8.2.4 原型模式
 * 
 * 每个函数都会创建一个prototye属性, 这个属性是一个对象, 包含应该由特定引用类型的实例共享的属性和方法
 * 实际上, 这个对象就是通过调用调用构造函数创建的对象的原型
 * 使用原型对象的好处是, 在它上面定义的属性和方法可以被对象实例共享
 * 原来在构造函数中直接赋给对象实例的值, 可以直接赋值给它们的原型
 */

function Person() {}
// 使用函数表达式也可以
// let Person = function() {};

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name);
};

let person1 = new Person();
person1.sayName();

let person2 = new Person();
person2.sayName();

console.log(person1.sayName == person2.sayName);
