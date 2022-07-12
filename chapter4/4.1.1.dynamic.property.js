// 动态属性

// person 是引用值
let person = new Object();
person.name = 'Chen';
console.log(`persion's name is ${person.name}`);

// 原始值不能有属性
// 但给原始值添加属性不会报错
let name = 'Chen';
name.age = 31;
console.log(`the property for name is ${name.age}`);

// 使用字面量形式
let n1 = 'Chen';
n1.age = 31;
console.log(`type of n1 is ${typeof n1}`);
console.log(`age of n1 is ${n1.age}`);

// 使用 new 关键字
let n2 = new String('Chen');
n2.age = 31;
console.log(`type of n2 is ${typeof n2}`);
console.log(`age of n2 is ${n2.age}`);
