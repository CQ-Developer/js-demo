// 8.4.2 类构造函数 - 2.把类当作特殊函数

// ECMAScript中没有正式的类这个类型
// ECMAScript类就是一种特殊函数
// 声明一个类之后, 通过typeof操作符检测类标识符, 表明它是一个函数

class Person {}

console.log("// 类就是一种特殊函数");
console.log(Person);
console.log(typeof Person);

// 类标识符有prototype属性
// 而这个原型也有一个constructor属性指向类自身

console.log("// 类的原型和构造函数");
console.log(Person.prototype);
console.log(Person.prototype.constructor === Person);

// 与普通构造函数一样
// 可以使用instanceof操作符检查构造函数原型是否存在于实例的原型链中

let p = new Person();

console.log("// 构造函数原型存在于实例的原型链中");
console.log(p instanceof Person);

// 类本身具有与普通构造函数一样的行为
// 在类的上下文中, 类本身在使用new调用时就会被当作构造函数
// 重点: 类中定义的constructor方法不会被当作构造函数, 对它使用instanceof操作符时会返回false
// 但: 如果在创建实例时直接将类构造函数当成普通构造函数来使用, 那么instanceof操作符的返回值会反转

let p1 = new Person();
console.log("// 类本身被当作构造函数调用");
console.log(`p1.constructor === Person ? ${p1.constructor === Person}`);
console.log(`p1 instanceof Person ? ${p1 instanceof Person}`);
console.log(`p1 instanceof Person.constructor ? ${p1 instanceof Person.constructor}`);

let p2 = new Person.constructor();
console.log("// 直接调用类的构造函数");
console.log(`p2.constructor === Person ? ${p2.constructor === Person}`);
console.log(`p2 instanceof Person ? ${p2 instanceof Person}`);
console.log(`p2 instanceof Person.constructor ? ${p2 instanceof Person.constructor}`);

// 类是JavaScript的一等公民
// 因此可以像其它对象或函数一样把类作为参数传递

// 类可以像函数一样在任何地方定义, 比如在数组中
let classList = [
    class {
        constructor(id) {
            this.id_ = id;
            console.log(`instance ${this.id_}`);
        }
    }
];

function createInstance(classDefinition, id) {
    return new classDefinition(id);
}

console.log("// 类可以作为参数传递");
let foo = createInstance(classList[0], 3141);

// 与立即调用函数表达式相似, 类也可以立即实例化

console.log("// 立即实例化");

// 因为是一个类表达式, 所以类名是可选的
let f = new class Foo {
    constructor(x) {
        console.log(x);
    }
}("bar");

console.log(f);
