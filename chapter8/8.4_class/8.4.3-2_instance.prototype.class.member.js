// 8.4.3 实例, 原型和类成员 - 2.原型方法和访问器

// 为了在实例间共享方法
// 类定义语法把在类块中定义的语法作为原型方法

class Person {
    constructor() {
        // 添加到this的所有内容都会存在于不同的实例上
        this.locate = () => console.log("instance");
    }

    /**
     * 在类块中定义的所有内容都会定义在类的原型上
     */
    locate() {
        console.log("proptotype");
    }
}

let p = new Person();

console.log("// 实例方法与原型方法");

p.locate();
Person.prototype.locate();

// 可以把方法定义在类构造函数中或类块中
// 但不能在类块中给原型添加原始值或对象作为成员数据

// SyntaxError: Unexpected identifier
// class Poo {
//     name: "Jake"
// }

// 类方法等同于对象属性
// 因此可以使用字符串, 符号或计算属性的值作为键

const symbolKey = Symbol("symbolKey");

class Aoo {
    stringKey() {
        console.log("invoked stringKey");
    }

    [symbolKey]() {
        console.log("invoked symbolKey");
    }

    ["computed" + "Key"]() {
        console.log("invoked computedKey");
    }
}

let a = new Aoo();

console.log("// 类方法等同于对象属性可以使用任何值作为建");

a.stringKey();
a[symbolKey]();
a.computedKey();

// 类定义也支持获取和设置访问器
// 语法与行为跟普通对象一样

class Boo {
    set name(newName) {
        this.name_ = newName;
    }

    get name() {
        return this.name_;
    }
}

let b = new Boo();

console.log("// 类定义支持访问器");

b.name = "Jake";
console.log(b.name);
