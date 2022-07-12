// 8.3.1 原型链
// 2.原型和继承关系

// 原型与实例的关系可以通过两种方式来确认

function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function() {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function() {
    return this.subproperty;
}

let instance = new SubType();

// 第一种方式是使用instanceof操作符
// 如果一个实例的原型中出现过相应的构造函数, 则instanceof返回true
console.log(instance instanceof Object);
console.log(instance instanceof SuperType);
console.log(instance instanceof SubType);

// 第二种方式是使用isPrototypeOf()方法
// 原型链中的每个原型都可以调用这个方法
console.log(Object.prototype.isPrototypeOf(instance));
console.log(SuperType.prototype.isPrototypeOf(instance));
console.log(SubType.prototype.isPrototypeOf(instance));
