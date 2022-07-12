// 8.3.2 盗用构造函数

// 1.传递参数

// 相比于使用原型链
// 盗用构造函数的一个优点就是可以在子类构造函数中向父类构造函数传参

function SuperType(name) {
    this.name = name;
}

function SubType() {
    SuperType.call(this, "Nicholas");
    this.age = 29;
}

let instance = new SubType();
console.log(instance.name);
console.log(instance.age);
