/**
 * 8.1.7 对象解构
 * 
 * ES6新增了对象解构语法, 可以再一条语句中使用嵌套数据实现一个或多个赋值操作
 * 简单地说, 对象解构就是使用与对象匹配的解构来实现对象属性赋值
 * 
 * 使用解构, 可以在一个类似对象字面量的结构中, 声明多个变量, 同时执行多个赋值操作
 * 如果想让变量直接使用属性的名称, 那么可以使用简写语法
 * 
 * 解构赋值不一定与对象的属性匹配
 * 赋值的时候可以忽略某些属性, 而如果引用的属性不存在, 则该变量的值就是undefined
 * 
 * 也可以在解构赋值的同时定义默认值, 这适用于前面刚提到的引用的属性不存在与源对象中的情况
 * 
 * 解构在内部使用函数ToObject()把源数据结构转换为对象
 * 这意味着在对象解构的上下文中, 原始值会被当成对象
 * 这也意味着, null和undefined不能被解构, 否则会抛出错误
 * ToObject()函数不能在运行环境中直接访问
 * 
 * 解构并不要求变量必须在解构表达式中声明
 * 不过, 如果是给实现声明的变量赋值, 则赋值表达式必须包含在一对括号中
 */

console.log(`
// 不使用对象解构`);
let person = {
    name: "Matt",
    age: 27
};
let personName = person.name,
    personAge = person.age;
console.log(personName);
console.log(personAge);

console.log(`
// 使用对象解构`);
let personA = {
    name: "Matt",
    age: 27
};
let { name: personAName, age: personAAge } = personA;
console.log(personAName);
console.log(personAAge);

console.log(`
// 直接使用属性名作为变量名, 可以进一步简写`);
let personB = {
    name: "Matt",
    age: 27
};
let { name, age } = personB;
console.log(name);
console.log(age);

console.log(`
// 解构赋值不一定与对象的属性匹配`);
let personC = {
    nameC: "Matt",
    age: 27
};
let { nameC, job } = personC;
console.log(nameC);
console.log(job);

console.log(`
// 在解构赋值同时定义默认值`);
let personD = {
    nameD: "Matt",
    ageD: 27
};
let { nameD = "Chen", jobD = "Software engineer" } = personD;
console.log(nameD);
console.log(jobD);

console.log(`
// null和undefined不能被机构`);
let { length } = "foobar";
console.log(length);

let { constructor: c } = 4;
console.log(c === Number);

// TypeError: Cannot destructure property '_' of 'null' as it is null
// let { _ } = null;
// let { _ } = undefined;

console.log(`
// 事先声明变量进行解构赋值`);
let personEName, personEAge;
let personE = {
    name: "Matt",
    age: 27
};
({ name: personEName, age: personEAge } = personE);
console.log(personEName);
console.log(personEAge);
