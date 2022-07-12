// 8.3.5 寄生式继承

// 与原型式继承比较接近的一种继承方式是寄生式继承
// 寄生式继承背后的思路类似于寄生构造函数和工厂模式: 创建一个实现继承的函数, 以某种方式增强对象, 然后返回这个对象

function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function createAnthor(original) {
    // 通过调用函数创建一个新对象
    let clone = object(original);

    // 以某种方式增强对象
    clone.sayHi = function() {
        console.log("hi");
    };

    // 返回这个对象
    return clone;
}

let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

let anthorPerson = createAnthor(person);
anthorPerson.sayHi();
