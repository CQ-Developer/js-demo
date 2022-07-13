// 8.4.4 继承 - 2.构造函数, HomeObject和super()

// 派生类的方法可以通过super关键字引用它们的原型
// 这个关键字只能在派生类中使用, 而且仅限于类构造函数, 实例方法和静态方法内部
// 在类构造函数中使用super可以调用父类构造函数

class Vehicle {
    constructor() {
        this.hasEngine = true;
    }
}

class Bus extends Vehicle {
    constructor() {
        // 不要在调用super()之前引用this, 否则会抛出ReferenceError
        // 相当于super.constructor()
        super();
        console.log(this instanceof Vehicle);
        console.log(this);
    }
}

console.log("// 在构造函数中用super调用父类构造函数");
new Bus();

// 在静态方法中可以通过super调用继承的类上定义的静态方法

class Aoo {
    static identify() {
        console.log("aoo");
    }
}

class Boo extends Aoo {
    static identify() {
        super.identify();
    }
}

console.log("// 在静态方法中使用super调用父类静态方法");
Boo.identify();

// ES6给类构造函数和静态方法添加了内部特性[[HomeObject]]
// 这个特性是一个指针, 指向定义该方法的对象
// 这个指针式自动赋值的, 而且只能在JavaScript引擎内部访问
// super始终会定义为[[HomeObject]]的原型

// 在使用super时要注意的问题
// 1.super只能在派生类构造函数和静态方法中使用
// class Coo {
//     constructor() {
//         // SyntaxError: 'super' keyword unexpected here
//         super();
//     }
// }

// 在使用super时要注意的问题
// 2.不能单独引用super关键字, 要么用它调用构造函数, 要么用它引用静态方法
// SyntaxError: 'super' keyword unexpected here
// class Doo extends Aoo {
//     constructor() {
//         console.log(super);
//     }
// }

// 在使用super时要注意的问题
// 3.调用super()会调用父类构造函数, 并将返回的实例赋值给this
class Eoo {}
class Foo extends Eoo {
    constructor() {
        super();
        console.log(this instanceof Eoo);
    }
}
new Foo();

// 在使用super时要注意的问题
// 4.super()的行为如同调用构造函数, 如果需要给父类构造函数传参, 则需要手动传入
class Goo {
    constructor(licensePlate) {
        this.licensePlate = licensePlate;
    }
}
class Hoo extends Goo {
    constructor(licensePlate) {
        super(licensePlate);
    }
}
console.log(new Hoo("1337H4X"));

// 在使用super时要注意的问题
// 5.如果没有定义类构造函数, 在实例化派生类时会调用super(), 而且会传入所有传给派生类的参数
class Qoo {
    constructor(param) {
        this.param = param;
    }
}
class Woo extends Qoo {}
console.log(new Woo("1337H4X"));

// 在使用super时要注意的问题
// 6.在类构造函数中, 不能在调用super()之前引用this
class Roo {}
class Too extends Roo {
    constructor() {
        console.log(this);
    }
}
// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// new Too();

// 在使用super时要注意的问题
// 7.如果在派生类中显示定义了构造函数, 则要么必须在其中调用super(), 要么必须在其中返回一个对象
class Joo {}
class Koo extends Joo {}
class Loo extends Joo {
    constructor() {
        super();
    }
}
class Moo extends Joo {
    constructor() {
        return {};
    }
}
console.log(new Koo());
console.log(new Loo());
console.log(new Moo());
