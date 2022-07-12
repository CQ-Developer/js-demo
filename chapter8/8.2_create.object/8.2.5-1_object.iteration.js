// 8.2.5 对象迭代

// 1.其他原型语法

// 为了减少代码冗余, 也为了视觉上更好的封装原型功能
// 直接通过一个包含所有属性和方法的对象字面量来重写原型成为了一种常见的做法
function Person() {}

Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};

let friend = new Person();

// 像这样重写原型对象
// 会使得默认的prototype对象被重写, 使其指向了完全不同的新对象(Object构造函数)
// 虽然instanceof操作符还能可靠地返回值, 但不能再依靠constructor属性来识别类型了
console.log(`friend instanceof Object ? ${friend instanceof Object}`);
console.log(`friend instanceof Person ? ${friend instanceof Person}`);

console.log(`friend.constructor == Person ? ${friend.constructor == Person}`);
console.log(`friend.constructor == Object ? ${friend.constructor == Object}`);

// 可以像下面这样特意设置一下constructor的值
Person.prototype = {
    constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};

// 上面的方式恢复constructor属性会创建一个[[Enumerable]]为true的属性
// 而原生constructor属性默认是不可枚举的
// 可以使用Object.defineProperty()方法单独定义contructor属性
Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};

// 恢复contructor属性
Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person
});