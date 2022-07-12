// 8.3.6 寄生式组合继承

// 组合继承起始也存在效率问题
// 最主要的效率问题就是父类构造函数始终会被调用两次
// 一次是在创建子类原型时调用
// 另一次是在子类构造函数中调用

// 本质上, 子类原型始终要包含父类对象的所有实例属性
// 子类构造函数只要在执行时重写自己的原型就行了

// 组合继承的例子

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name); // 第2次调用SuperType()
    this.age = age;
}

SubType.prototype = new SuperType(); // 第1次调用SuperType()

SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
    console.log(this.age);
};

// 寄生式组合继承通过盗用构造函数继承属性, 但使用混合式原型链继承方法
// 基本思路是不通过调用父类构造函数给子类原型赋值, 而是取得父类原型的一个副本
// 说到底就是使用寄生式继承来继承父类原型, 然后将返回的新对象赋值给子类原型

function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function inheritPrototype(subType, superType) {
    // 创建对象
    let prototye = object(superType.prototye);

    // 增强对象
    prototye.constructor = subType;

    // 赋值对象
    subType.prototye = prototye;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function() {
    console.log(this.age);
};
