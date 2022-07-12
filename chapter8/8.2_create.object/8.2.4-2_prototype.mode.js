/**
 * 8.2.4 原型模式
 * 
 * 1.原型层级
 * 
 * 在通过对象访问属性时, 会按照这个属性的名称开始搜索
 * 搜索开始于对象实例本身
 * 
 * 如果这个实例上发现了给定的名称, 则返回该名称对应的值
 * 如果没有找到这个属性, 则搜索会沿着指针进入原型对象, 然后在原型对象上找到属性后, 再返回对应的值
 * 
 * 前面提到constructor属性只存在于原型对象, 因此通过实例对象也是可以访问到的
 * 
 * ESMAScript的Object.getOwnPropertyDescriptor()方法只对实例属性有效
 * 要取得原型属性的描述符, 就必须直接在原型对象上调用Object.getOwnPropertyDescriptor()
 */
function Person() {}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name);
};

let person1 = new Person();
let person2 = new Person();

person1.name = "Greg";

console.log(`person1.name = ${person1.name}`);
console.log(`person2.name = ${person2.name}`);

// 即使在对象上将该属性置为null
// 也不会恢复它和原型的联系
person1.name = null;
console.log(`person1.name = ${person1.name}`);

// delete可以完全删除对象的属性
delete person1.name;
console.log(`person1.name = ${person1.name}`);

/**
 * hasOwnProperty()方法用于确定某个属性是在实例上还是在原型上
 * 这个方法继承自Object, 会在属性存在于调用它的对象实例上时返回true
 */
console.log(`person1.hasOwnProperty("name") = ${person1.hasOwnProperty("name")}`);

person1.name = "Greg";
console.log(`person1.name = ${person1.name}`);
console.log(`person1.hasOwnProperty("name") = ${person1.hasOwnProperty("name")}`);

console.log(`person2.name = ${person2.name}`);
console.log(`person2.hasOwnProperty("name") = ${person2.hasOwnProperty("name")}`);

delete person1.name;
console.log(`person1.name = ${person1.name}`);
console.log(`person1.hasOwnProperty("name") = ${person1.hasOwnProperty("name")}`);


