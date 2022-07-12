// 8.2.5 对象迭代

// 4.原型的问题

// 首先它弱化了向构造函数传递初始化参数的能力, 会导致所有实例默认都取得相同的属性值
// 其次最主要问题源自它的共享特性

// 原型上的属性是在是实例间共享的
// 真正的问题来自包含引用值的属性
function Person() {}

Person.prototype = {
    constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    friends: ["Shelby", "Court"],
    sayName() {
        console.log(this.name);
    }
};

let person1 = new Person();
let person2 = new Person();

person1.friends.push("Van");

console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends === person2.friends);
