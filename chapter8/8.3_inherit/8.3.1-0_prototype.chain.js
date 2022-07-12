// 8.3.1 原型链

// ECMA-262把原型链定义为ECMAScript的主要继承方式
// 其基本思想就是通过原型继承多个引用类型的属性和方法

// 构造函数, 原型, 实例
// 三者之间的关系
// 每个构造函数都有一个原型对象
// 原型有一个属性指回构造函数
// 实例有一个内部指针指向原型

// 如果原型是另一个类型的实例
// 那就意味着这个原型本身有一个内部指针指向另外一个原型
// 相应的另一个原型也有一个指针指向另外一个构造函数
// 这样就在实例和原型之间构造了一条原型链
// 这就是原型链的基本思想

// 实现原型链涉及如下代码
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

// 继承SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
    return this.subproperty;
}

let instance = new SubType();
console.log(instance.getSuperValue());
