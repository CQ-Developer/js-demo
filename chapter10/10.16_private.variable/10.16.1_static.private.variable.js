/**
 * 10.16.1 静态私有变量
 * 
 * 特权方法也可以通过使用私有作用域定义私有变量和函数来实现
 * 
 * 在这个模式中, 匿名函数表达式创建了一个包含构造函数及其方法的私有作用域
 * 注意, 这个模式定义的构造函数没有使用函数声明, 使用的是函数表达式
 * 
 * 这里的MyObject没有使用任何关键字
 * 因为不适用故那件字声明的变量会创建再全局作用域中, 所以MyObject变成了全局变量, 可以在这个私有作用域外部被访问
 * 
 * 这个模式与前一个模式的主要区别就是, 私有变量和私有函数是由实例共享的
 * 因为特权方法定义在原型上, 所以同样是由实例共享的
 * 特权方法作为一个闭包, 始终引用着包含它的作用域
 */
(function() {
    // 私有变量
    let privateVariable = 10;

    // 私有函数
    function privateFunction() {
        return false;
    }

    // 构造函数
    MyObject = function() {};

    // 公有和特权方法
    MyObject.prototype.publicMethod = function() {
        privateVariable++;
        return privateFunction();
    };
})();

/**
 * 使用这种模式, name变成了静态变量, 可供所有实例使用
 * 这意味着在任何实例上调用setName()修改这个变量都会影响其他实例
 * 调用setName()或创建新的Person实例都要把name变量为一个新值
 * 而所有实例都会返回相同的值
 */
(function() {
    let name = "";

    Person = function(value) {
        name = value;
    };

    Person.prototype.getName = function() {
        return name;
    };

    Person.prototype.setName = function(value) {
        name = value;
    };
})();

let person1 = new Person("Nicholas");
console.log(person1.getName());
person1.setName("Matt");
console.log(person1.getName());

let person2 = new Person("Michael");
console.log(person1.getName());
console.log(person2.getName());
