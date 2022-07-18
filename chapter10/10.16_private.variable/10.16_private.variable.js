/**
 * 10.16 私有变量
 * 
 * 严格来讲, JS没有私有成员的概念, 所有对象属性都共有的
 * 不过, 倒是有私有变量的概念
 * 任何定义在函数或块中的变量, 都可以认为是私有的, 因为在这个函数或块的外部无法访问其中的变量
 * 私有变量包括函数参数, 局部变量, 以及函数内部定义的其他函数
 */
function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

/**
 * 在上面这个函数add()中有三个私有变量: num1, num2 sum
 * 这几个变量只能在函数内部使用, 不能在函数外部访问
 * 如果这个函数中创建了一个闭包, 则这个闭包能通过其作用域链访问其外部的这三个变量
 * 基于这一点, 就可以创建出能够访问私有变量的共有方法
 * 
 * 特权方法是能够访问函数私有变量及私有函数的共有方法
 * 在对象上有两种方式创建特权方法
 * 
 * 第一种是在构造函数中实现
 */
function MyObject() {
    // 私有变量
    let privateVariable = 10;

    // 私有函数
    function privateFunction() {
        return false;
    }

    // 特权方法
    this.publicMethod = function() {
        privateVariable++;
        return privateFunction();
    };
}

/**
 * 这个模式把所有私有变量和私有函数都定义在构造函数中
 * 然后, 再创建一个能够访问这些私有成员的特权方法
 * 这样做之所以可行, 是因为定义再构造函数中的特权方法其实是一个闭包, 它具有访问构造函数中定义的所有变量和函数的能力
 * 
 * 可以通过定义私有变量和特权方法, 以隐藏不能被直接修改的数据
 */
function Person(name) {
    this.getName = function() {
        return name;
    };

    this.setName = function(value) {
        name = value;
    };
}

let person = new Person("Nicholas");
console.log(person.getName());

person.setName("Greg");
console.log(person.getName());
