// 8.4.2 类构造器函数 1.实例化

// 使用new操作符实例化Person的操作等于使用new调用其构造函数
// 唯一可感知的不同之处就是, JavaScript解释器知道使用new和类意味着应该使用constructor函数进行实例化

// 使用new调用类的构造函数会执行如下操作
// 1.在内存中创建一个新对象
// 2.这个新对象内部的[[Prototype]]指针被赋值为构造函数的prototype属性
// 3.执行函数内部的this被赋值为这个新对象
// 4.执行构造函数内部的代码
// 5.如果构造函数返回非空对象, 则返回该对象, 否则返回刚创建的新对象

class Animal {}

class Person {
    constructor() {
        console.log("person constructor");
    }
}

class Vegetable {
    constructor() {
        this.color = "orange";
    }
}

let a = new Animal();

let p = new Person();

let v = new Vegetable();
console.log(v.color);

// 类实例化时传入的参数会用作构造器参数
// 如果不需要参数, 则类名后面的括号可以省略

class Poo {
    constructor(name) {
        console.log(arguments.length);
        this.name = name || null;
    }
}

let p1 = new Poo;
console.log(p1.name);

let p2 = new Poo();
console.log(p2.name);

let p3 = new Poo("Jake");
console.log(p3.name);

// 默认情况下, 类构造函数会在执行之后返回this对象
// 不过, 如果返回的不是this对象, 而是其它对象, 那么这个对象不会通过instanceof操作符检测出跟类有关联
// 因为这个对象的原型指针并没有被修改

class Aoo {
    constructor(override) {
        this.foo = "foo";
        if (override) {
            return { bar: "bar" };
        }
    }
}

let a1 = new Aoo();
console.log(a1);
console.log(a1 instanceof Aoo);

let a2 = new Aoo(true);
console.log(a2);
console.log(a2 instanceof Aoo);

// 类构造函数与构造函数主要区别是: 调用类构造函数必须使用new操作符
// 而普通构造函数如果不适用new调用, 那么就会以全局的this作为内部对象, 全局this通常是window
// 调用类构造函数时如果不适用new则会抛出错误

function BooFunction() {}
class BooClass {}

// 将window作为this来构建实例
let b1 = BooFunction();

// TypeError: Class constructor BooClass cannot be invoked without 'new'
// let b2 = BooClass();


// 类构造函数没有什么特殊之处, 实例化之后, 它会成为普通的实例方法
// 但作为类构造函数, 仍然要使用new调用
// 因此实例化之后可以在实例上引用它

class Coo {}

// 使用类创建一个新实例
let c1 = new Coo();

// TypeError: Class constructor Coo cannot be invoked without 'new'
// c1.constructor();

// 使用对类构造函数的引用创建一个新实例
let c2 = new c1.constructor();
