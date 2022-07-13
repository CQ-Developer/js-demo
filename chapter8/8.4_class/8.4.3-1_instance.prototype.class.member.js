// 8.4.3 实例, 原型和类成员 - 1.实例成员

// 每次通过new调用类标识符, 都会执行类构造函数
// 在构造函数执行完毕后, 仍然可以给实例继续添加新成员
// 每个实例都对应一个唯一的成员对象, 这意味着所有成员都不会在原型上共享

class Person {
    constructor() {
        // 先使用对象包装类型定义一个字符串
        // 为的是在下面测试两个对象的相等性
        this.name = new String("Jack");
        this.sayName = () => console.log(this.name);
        this.nickName = ["Jake", "J-Dog"];
    }
}

let p1 = new Person();
let p2 = new Person();

p1.sayName();
p2.sayName();

console.log(p1.name === p2.name);
console.log(p1.sayName === p2.sayName);
console.log(p1.nickName === p2.nickName);

p1.name = p1.nickName[0];
p2.name = p2.nickName[1];

p1.sayName();
p2.sayName();
