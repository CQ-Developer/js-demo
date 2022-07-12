// 8.2.5 对象迭代

// 2.原型的动态性

// 因为从原型上搜索值的过程是动态的
// 所以即使实例在修改原型之前已经存在, 任何时候对原型对象所做的修改也会在实例上反应出来
function Person() {}

let friend = new Person();

Person.prototype.sayHi = function() {
    console.log("hi");
};

friend.sayHi();

// 虽然随时能给原型添加属性和方法, 并能够立即反映在所有对象实例上, 但这跟重写整个原型是不一样的
// 实例的[[Prototype]]指针是在调用构造函数时自动赋值的, 这个指针即使把原型修改为不同的对象也不会变
// 重写整个原型会切断最初原型与构造函数的联系, 但实例引用的仍然是最初的原型
// 实例只有指向原型的指针, 没有指向构造函数的指针
Person.prototype = {
    constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};

// 这个例子中, Person的新实例实在重写原型对象前创建的
// 在调用firend.sayName()的时候, 会导致错误
// 因为firend指向的原型还是最初的原型
// TypeError: friend.sayName is not a function
// friend.sayName();
