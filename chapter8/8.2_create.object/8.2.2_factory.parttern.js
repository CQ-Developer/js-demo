/**
 * 8.2.2 工厂模式
 * 
 * 工厂模式是一种众所周知的设计模式, 广泛应用于软件工程领域
 * 用于抽象创建特定对象的过程
 */

function createPerson(name, age, job) {
    let o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    };
    return o;
}

let person1 = createPerson("Nicholas", 29, "Software Engineer");
let person2 = createPerson("Greg", 27, "Doctor");
