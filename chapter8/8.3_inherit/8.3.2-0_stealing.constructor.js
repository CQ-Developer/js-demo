// 8.3.2 盗用构造函数

// 为了解决原型包含引用值导致的继承问题， 一种叫作"盗用构造函数"的技术在开发中流行起来
// 基本思路: 在子类构造函数中调用父类构造函数
// 因为毕竟函数就是在特定上下文中执行代码的简单对象, 所以可以使用apply()和call()方法以新创建的对象为上下文执行构造函数
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

// 继承SuperType
function SubType() {
    SuperType.call(this);
}

let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);

let instance2 = new SubType();
console.log(instance2.colors);
