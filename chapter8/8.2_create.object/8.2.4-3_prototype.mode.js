/**
 * 8.2.4 原型模式
 * 
 * 3.原型和in操作符
 * 
 * 有两种方式使用in操作符: 单独使用和在for-in循环中使用
 * 在单独使用时, in操作符会在可以通过对象访问指定属性时返回true, 无论该属性是在实例上还是在原型上
 */
function Person() {}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name);
};

console.log(`
// Person的原型对象`);
console.log(Person.prototype);

let person1 = new Person();
let person2 = new Person();

console.log(`
// person1访问name属性`);
console.log(`person1.hasOwnProperty("name") = ${person1.hasOwnProperty("name")}`);
console.log(`"name" in person1= ${"name" in person1}`);

console.log(`
// person1添加name属性后再次访问`)
person1.name = "Greg";
console.log(`person1.name = ${person1.name}`);
console.log(`person1.hasOwnProperty("name") = ${person1.hasOwnProperty("name")}`);
console.log(`"name" in person1 = ${"name" in person1}`);

console.log(`
// person2访问name属性`);
console.log(`person2.name = ${person2.name}`);
console.log(`person2.hasOwnProperty("name") = ${person2.hasOwnProperty("name")}`);
console.log(`"name" in person2 = ${"name" in person2}`);

console.log(`
// person1删除name属性再次访问`);
delete person1.name;
console.log(`person1.name = ${person1.name}`);
console.log(`person1.hasOwnProperty("name") = ${person1.hasOwnProperty("name")}`);
console.log(`"name" in person1 = ${"name" in person1}`);

/**
 * 确定某个属性是否存在于原型上
 */
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}

console.log(`
// 判断属性是否在原型对象上`);
console.log(`hasPrototypeProperty(person1, "name") = ${hasPrototypeProperty(person1, "name")}`);

console.log(`
// 为对象添加属性再次判断`);
person1.name = "Greg";
console.log(`hasPrototypeProperty(person1, "name") = ${hasPrototypeProperty(person1, "name")}`);

/**
 * Object.keys()可以获得对象上所有可枚举的实例属性
 */
console.log(`
// Person原型对象上的所有可枚举的实例属性`);
let keys = Object.keys(Person.prototype);
console.log(keys);

person1.name = "Rob";
person1.age = 31;

console.log(`
// person1对象上所有可枚举的实例属性`);
let person1Keys = Object.keys(person1);
console.log(person1Keys);

/**
 * 如果想列出所有实例属性, 无论是否可以枚举
 * 都可以使用Object.getOwnPropertyNames()
 */
console.log(`
// 列出所有实例属性`);
keys = Object.getOwnPropertyNames(Person.prototype);
console.log(keys);

/**
 * 在ES6新增符号类型后, 怎加了Object.getOwnPropertySymbols()方法, 因为以符号为键的属性没有名称的概念
 * 该方法于Object.getOwnPropertyNames(), 只是针对符号而已
 */
console.log(`
// 返回以符号为键的属性`);
let k1 = Symbol("k1"), k2 = Symbol("k2");
let o = {
    [k1]: "k1",
    [k2]: "k2"
};
console.log(Object.getOwnPropertySymbols(o));
