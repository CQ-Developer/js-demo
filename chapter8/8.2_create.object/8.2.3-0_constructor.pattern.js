/**
 * 8.2.3 构造函数模式
 * 
 * 前面提到过, ES中的构造函数是用于创建特定类型对象的
 * 像Object和Array这样的原生构造函数, 运行时可以直接在执行环境中使用
 * 当然也可以自定义构造函数, 以函数的形式为自己的对象类型定义属性和方法
 */



/** 
 * demo.1
 * 
 * 在这个例子中, Person()构造函数代替了createPerson()工厂函数
 * 实际上, Person()内部的代码跟createPerson()基本是一样的, 只有如下区别:
 * 没有显示地创建对象
 * 属性和方法直接赋值给了this
 * 没有return
 * 另外, 要注意函数名Person的首字母大写了
 * 按照惯例, 构造函数名称的首字母都是要大写的, 非构造函数则以小写字母开头
 * ECMAScript的构造函数就是能创建对象的函数
 * 
 * 要创建Person的实例, 应该使用new操作符
 * 以这种方式调用构造函数会执行如下操作
 * 1.在内存中创建一个新对象
 * 2.这个新对象内部的[[Prototype]]特性被赋值为构造函数的prototype属性
 * 3.构造函数内部的this被赋值为这个新对象, 即this指向新对象
 * 4.执行构造函数内部的代码, 给新对象添加属性
 * 5.如果构造函数返回非空对象, 则返回该对象; 否则, 返回刚创建的新对象
 */ 

console.log(`
// 以函数的形式自定义构造函数`);

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    };
}

let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");

person1.sayName();
person2.sayName();



/**
 * demo.2
 * 
 * 上一个例子中, person1和person2分别保存着Person的不同实例
 * 这两个对象都有一个constructor属性执行Person
 */

console.log(`
// 构造器属性指向Person构造器方法`);

console.log(person1.constructor == Person);
console.log(person2.constructor == Person);



/**
 * demo.3
 * 
 * constructor本来是用于标识对象类型的
 * 不过, 一般认为instanceof操作符是确定对象类型更可靠的方式
 * 前面例子中的每个对象都是Object的实例, 同时也是Person的实例
 */

console.log(`
// 使用instanceof关键字确认对象类型`);

console.log(person1 instanceof Object);
console.log(person1 instanceof Person);

console.log(person2 instanceof Object);
console.log(person2 instanceof Person);



/**
 * demo.4
 * 
 * 定义自定义构造函数可以确保实例被标识为特定类型, 相比于工厂模式这是一个很大的好处
 * 在这个例子中, person1和person2之所以也被认为是Object的实例, 是因为所有自定义对象都继承自Object
 * 
 * 构造函数不一定要写成函数声明的形式
 * 赋值给变量的函数表达式也可以表示构造函数
 */

console.log(`
// 使用函数表达式定义构造函数`);

let People = function(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    };
};

let people1 = new People("Nicholas", 29, "Software Engineer");
let people2 = new People("Greg", 27, "Doctor");

people1.sayName();
people2.sayName();

console.log(people1 instanceof Object);
console.log(people1 instanceof People);

console.log(people2 instanceof Object);
console.log(people2 instanceof People);



/**
 * demo.5
 * 
 * 在实例化时, 如果不想传入参数, 那么构造函数后面的括号可以不加
 * 只要有new操作符, 就可以调用相应的构造函数
 */

console.log(`
// 调用构造函数不加括号`);

function PersonA() {
    this.name = "Jake";
    this.sayName = function() {
        console.log(this.name);
    };
}

let pa1 = new PersonA();
let pa2 = new PersonA;

pa1.sayName();
pa2.sayName();

console.log(pa1 instanceof Object);
console.log(pa1 instanceof PersonA);

console.log(pa2 instanceof Object);
console.log(pa2 instanceof PersonA);
