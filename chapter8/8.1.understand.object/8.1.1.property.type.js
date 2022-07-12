// 0.理解对象

// 创建自定义对象的通常方式是创建Object的一个新实例
// 然后再给它添加属性和方法

// 这个例子中创建了一个名为person的对象
// 包含三个属性: name, age, job
// 包含一个方法: sayName()
// sayName()方法会显示this.name的值, 这个属性会被解析为person.name
// 早期JS开发者频繁使用这种方式创建新对象
// 之后对象字面量变成了更流行的方式
let personA = new Object();
personA.name = "Nicholas";
personA.age = 29;
personA.job = "Software Engineer";
personA.sayName = function() {
    console.log(this.name);
};

console.log(`
// 通过new Object()创建的person对象`);
console.log(personA);

// 这个例子中person对象跟上面例子中的person对象是等价的
// 他们的属性和方法都是一样的
// 这些属性都有自己的特征
// 而这些特征决定了他们在JS中的行为
let personB = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};

console.log(`
// 通过对象字面量创建的person对象`);
console.log(personB);
