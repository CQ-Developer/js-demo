/**
 * 8.2.4 原型模式
 * 
 * 1.理解原型
 * 
 */

/**
 * 构造函数可以是函数表达式也可以是函数声明, 因此一下两种形式都可以
 * function Person() {}
 * let Person = function() {}
 */
function Person() {}
Person.prototype.name = "Nicholas";

/**
 * 声明之后, 构造函数就有了一个与之关联的原型对象
 */
console.log(Person.prototype);
console.log(typeof Person.prototype);

/**
 * 若前所述, 构造函数有一个prototype属性引用其原型对象
 * 而这个原型对象也有一个constructor属性, 引用这个构造函数
 * 换句话说, 两者循环引用
 */
console.log(Person.prototype.constructor === Person);

/**
 * 正常的原型链都会终止于Object的原型对象
 * Object原型的原型是null
 */
// function Person() {}
// console.log(Person.prototype.__proto__ === Object.prototype);
// console.log(Person.prototype.__proto__.constructor === Object);
// console.log(Person.prototype.__proto__.__proto__ === null);
// console.log(Person.prototype.__proto__);

let person1 = new Person();
let person2 = new Person();

/**
 * 构造函数, 原型对象和实例
 * 是3个完全不同的对象
 */
console.log(person1 !== Person);
console.log(person1 !== Person.prototype);
console.log(Person.prototype !== Person);

/**
 * 实例通过__proto__链接到原型对象
 * 它实际上执行隐藏特性[[Protorype]]
 * 
 * 构造函数通过prototype属性链接到原型对象
 * 
 * 实例与构造函数没有直接联系, 与原型对象有直接联系
 */
// console.log(person1.__proto__ === Person.prototype);
// console.log(person1.__proto__.constructor === Person);

/**
 * 同一个构造函数创建的两个实例
 * 共享同一个原型对象
 */
// console.log(person1.__proto__ === person2.__proto__);

/**
 * instanceof 检查实例的原型链中
 * 是否包含指定构造函数的原型
 */
console.log(person1 instanceof Person);
console.log(person1 instanceof Object);
console.log(Person.prototype instanceof Object);

/**
 * 可以使用isPrototypeOf()方法确定两个对象之间的这种关系
 */
console.log(Person.prototype.isPrototypeOf(person1));
console.log(Person.prototype.isPrototypeOf(person2));

/**
 * ES的Object类型有一个方法叫Object.getPrototypeOf(), 返回参数的内部特性[[Prototype]]的值
 */
console.log(Object.getPrototypeOf(person1) == Person.prototype);
console.log(Object.getPrototypeOf(person1).name);

/**
 * Object类型还有一个setPrototypeOf()方法
 * 可以向实例的私有特性[[Prototype]]写入一个新值
 * 这样就可以重写一个对象的原型继承关系
 */
let biped = { numLegs: 2 };
let person = { name: "Matt" };
Object.setPrototypeOf(person, biped);
console.log(person.name);
console.log(person.numLegs);
console.log(Object.getPrototypeOf(person) === biped);

/**
 * 为了避免使用Object.setPrototypeOf()可能造成的性能下降
 * 可以通过Object.create()来创建一个新对象, 同时为其指定原型
 */
person = Object.create(biped);
person.name = "Matt";
console.log(person.name);
console.log(person.numLegs);
console.log(Object.getPrototypeOf(person) === biped);
