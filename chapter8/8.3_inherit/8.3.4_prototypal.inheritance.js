// 8.3.4 原型式继承

// JavaScript中的原型式继承
// 这篇文章介绍了一种不涉及严格意义上构造函数的继承方法
// 出发点是即使不自定义类型也可以通过原型实现对象之间的信息共享

// 本质上, object()是对传入的对象执行了一次浅复制
function object(o) {
    // 创建一个临时构造函数
    function F() {}

    // 将传入的对象赋值给这个临时构造函数的原型
    F.prototype = o;

    // 返回这个临时类型的一个实例
    return new F();
}

let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

let yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

console.log(person.friends);

// ECMAScript5通过增加Object.create()方法将原型式继承的概念范化了

person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

console.log(person.friends);

// Object.create()第二个参数和Object.defineProperties()第二个参数相同

person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

anotherPerson = Object.create(person, {
    name: {
        value: "Greg"
    }
});

console.log(anotherPerson.name);
