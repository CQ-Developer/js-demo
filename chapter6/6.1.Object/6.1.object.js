// Object

// 创建Object实例的两种方式

// new操作符和Object构造函数
let person1 = new Object();
person1.name = "Chen";
person1.age = 29;
console.log("// 使用new关键字创建对象")
console.log(person1);

console.log();

// 对象字面量表示法
// 使用字面量表示法定义对象时，并不会实际调用Object的构造函数
// 左大括号"{"出现在表达式上下文中，表示期待一个返回值
// 左大括号"{"出现在语句上下文中，表示一个代码块
let person2 = {
    name: "Chen",
    age: 29
};
console.log("// 使用字面量表示法创建对象")
console.log(person2);

console.log();

// 属性名可以是字符串或者数值
// 数字属性会自动转换位字符串
console.log("// 在对象字面量表示法中，属性名可以是字符串或者数值");
let person3 = {
    "name": "Chen",
    "age": 29,
    5: true
};
console.log(person3);

console.log();

// 可以使用对象字面量表示法创建一个只有默认属性和方法的对象
let person4 = {};
person4.name = "Chen";
person4.age = 29;
console.log("// 使用字面量表示法创建空对象再进行属性的添加");
console.log(person4);

console.log();

// 对象字面量可以用来给函数传递大量参数
// 推荐必选参数使用命名参数，可选参数使用对象字面量
function displayInfo(args) {
    let output = "";
    if(typeof args.name == "string") {
        output += "Name: " + args.name + "\n";
    }
    if(typeof args.age == "number") {
        output += "Age: " + args.age + "\n";
    }
    console.log(output);
}
console.log("// 使用对象字面量表示法传递多个参数");
displayInfo({ name: "Chen", age: 29 });
console.log("// 使用对象字面量表示法传递多个参数");
displayInfo({ "name": "Greg" });

console.log();

// 可以使用点来存取对象属性
console.log("// 使用点存取对象属性");
console.log(person4.name);

// 同样也可以使用中括号存取对象属性
// 中括号内的属性名必须使用字符串表示
console.log("// 使用中括号存取对象属性");
console.log(person4["name"]);

// 两种存取对象属性的方式没有区别
// 使用中括号的优势是可以通过变量访问属性
console.log("// 中括号可以使用变量的方式存取对象属性");
let propertyName = "name";
console.log(person4[propertyName]);

// 属性名中有特殊字符的情况可以使用中括号形式
console.log("// 属性名中包含特殊字符");
person4["first name"] = "Qiang";
console.log(person4["first name"]);
