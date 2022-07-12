// 8.3.3 组合继承

// 组合继承有时候也叫伪经典继承, 综合了原型链和盗用构造函数, 将两者的有点集中起来
// 基本的思路是: 使用原型链继承原型上的属性和方法, 而通过盗用构造函数继承实例属性
// 这样既可以把方法定义在原型上以实现重用, 又可以让每个实例都有自己的属性

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
};

function SubType(name, age) {
    // 继承属性
    SuperType.call(this, name);
    this.age = age;
}

// 继承方法
SubType.prototype = new SuperType();

SubType.prototype.sayAge = function() {
    console.log(this.age);
};

let instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();

let instance2 = new SubType("Greg", 27);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();
