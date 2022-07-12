/**
 * 8.2.3 构造函数模式
 * 
 * 2. 构造函数的问题
 * 
 * 构造函数虽然有用, 但也不是没有问题
 * 构造函数的主要问题在于, 其定义的方法会在每个实例上都创建一边
 * 因此对前面的例子而言, person1和person2都有名为sayName()的方法, 但这两个方法不是同一个Function实例
 * ECMAScript中的函数是对象, 因此每次定义函数时, 都会初始化一个对象
 */

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    // 逻辑等价
    this.sayName = new Function("console.log(this.name)");
}

/**
 * 这样理解这个构造函数可以更清楚地知道, 每个Person实例都会有自己的Function实例用于显示name属性
 * 当然了, 以这种方式创建函数会带来不同的作用域链和标识符解析
 * 但创建新Function实例的机制是一样的
 * 因此不同实例上的函数虽然同名却不相等
 */


let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");

console.log(`
// 不同实例上的函数虽然同名却不相等
person1.sayName == person2.sayName ? ${person1.sayName == person2.sayName}`);

/**
 * 因为都是做一样的事情, 所以没有必要定义两个不同的Function实例
 * 况且, this对象可以把函数与对象的绑定推迟到运行时
 * 可以通过把函数定义转移到构造函数外部来解决这个问题
 */

function PersonA(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayNameA = sayNameA;
}

function sayNameA() {
    console.log(this.name);
}

let pa1 = new PersonA("Nicholas", 29, "Software Engineer");
let pa2 = new PersonA("Greg", 27, "Doctor");

console.log(`// 将函数定义提取到构造函数外部`);

pa1.sayNameA();
pa2.sayNameA();

