// 8.3.1 原型链

// 4.原型链的问题

// 主要问题出现在原型中包含引用值的时候
// 原型中包含的引用值会在所有实例间共享, 这也是为什么属性通常会在构造器中定义而不会定义在原型上的原因
// 在使用原型实现继承时, 原型实际上变成了另一个类型的实例
// 这意味着原先的实例属性摇身一变成为了原型属性
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {}

// 继承SuperType
SubType.prototype = new SuperType();

let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);

let instance2 = new SubType();
console.log(instance2.colors);
