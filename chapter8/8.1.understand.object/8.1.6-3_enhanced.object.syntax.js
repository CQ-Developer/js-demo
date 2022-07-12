/**
 * 8.1.6 增强的对象语法
 * 
 * 3.简写方法名
 * 
 * 在给对象定义方法时, 通常都要写一个方法名, 冒号, 然后再引用一个匿名函数表达式
 * 
 * 新的简写方法的语法遵循同样的模式, 但开发者要放弃给函数表达式命名
 * 相应的, 这样也可以明显缩短方法声明
 * 
 * 简写方法名对获取函数和设置函数也是适用的
 * 
 * 简写方法名与可计算属性键互相兼容
 * 
 * 简写方法名对于本章后面介绍的ES6的类更有用
 */

console.log(`
// 原始定义方法的方式`);
let person = {
    sayName: function(name) {
        console.log(`My name is ${name}`);
    }
};
person.sayName("Matt");

console.log(`
// 放弃函数表达式命名, 简写
// 和上面的方法定义是等价的`);
let personA = {
    sayName(name) {
        console.log(`My name is ${name}`);
    }
};
personA.sayName("Matt");

console.log(`
// 简写方法名同样适合获取函数和设置函数`);
let personB = {
    name_: "",
    get name() {
        return this.name_;
    },
    set name(name) {
        this.name_ = name;
    },
    sayName() {
        console.log(`My name is ${this.name_}`);
    }
};
personB.name = "Matt";
personB.sayName();

console.log(`
// 简写方法名与可计算属性键互相兼容`);
const methodKey = "sayName";
let personC = {
    [methodKey](name) {
        console.log(`My name is ${name}`);
    }
};
personC.sayName("Matt");
