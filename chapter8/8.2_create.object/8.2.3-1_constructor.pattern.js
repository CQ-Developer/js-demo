/**
 * 8.2.3 构造函数模式
 * 
 * 1. 构造函数也是函数
 * 
 * 构造函数与普通函数唯一的却别就是调用方式不同
 * 除此之外, 构造函数也是函数
 * 并没有把某个函数定义为构造函数的特殊语法
 * 任何函数只要使用new操作符调用就是构造函数, 而不适用new操作符调用的函数就是普通函数
 */



/**
 * demo.1
 */

 function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    };
}

// 作为构造函数
let person = new Person("Nicholas", 29, "Software Engineer");
person.sayName();

// 作为函数调用
// 这时没有使用new操作符调用Person(), 结果会将属性和方法添加到window对象
// 在调用一个函数而没有明确设置this值的情况下, this始终指向Global对象
// 因此在调用之后, window对象上就有了一个sayName()方法, 调用它会返回"Greg"
// 没有明确设置this的值: 即没有作为对象的方法调用, 或没有使用call()/apply()调用
// Global对象: 在浏览器中就是window对象
Person("Greg", 27, "Doctor");
// window.sayName();

// 在另一个对象的作用域中调用
// 通过call()/apply()调用函数, 同时将特定对象指定为作用域
// 这里的调用将对象o指定为Person内部的this值, 因此执行完函数代码后, 所有属性和方法都会添加到对象o上
let o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName();
