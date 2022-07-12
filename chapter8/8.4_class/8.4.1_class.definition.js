// 8.4.1 类定义

// 与函数类型相似, 定义类也有两种主要方式: 类声明和类表达式
// 这两种方式都使用class关键字加大括号

// 类声明
class Person {}

// 类表达式
const Animal = class {};

// 与函数表达式类似, 类表达式在它们被求值前也不能引用
// 不过, 与函数定义不同的是, 虽然函数声明可以提升, 但类定义不能

console.log("// 类表达式在求值前不能被引用");
console.log(FunctionExpression);
var FunctionExpression = function() {};
console.log(FunctionExpression);

console.log("// 函数声明可以提升");
console.log(FunctionDeclaration);
function FunctionDeclaration() {}
console.log(FunctionDeclaration);

console.log("// 类表达式在求值前不能被引用");
console.log(ClassExpression);
var ClassExpression = class {};
console.log(ClassExpression);

console.log("// 类声明不能提升");
// ReferenceError: Cannot access 'ClassDeclaration' before initialization
// console.log(ClassDeclaration);
class ClassDeclaration {}
console.log(ClassDeclaration);

// 另一个跟函数声明不同的地方是
// 函数受函数作用域限制
// 类受块作用域限制

{
    function FunctionDeclarationInBlock() {}
    class ClassDeclarationInBlock {}
}

console.log("// 不同的作用域限制");
console.log(FunctionDeclarationInBlock);
// ReferenceError: ClassDeclarationInBlock is not defined
// console.log(ClassDeclarationInBlock);

// 类的构成
// 类可以包含构造函数, 实例方法, 获取函数, 设置函数, 静态方法
// 但这些都不是必须的, 空的类定义照样有效
// 默认情况下, 类定义中的代码都在严格模式下执行

// 空类定义, 有效
class Foo {}

// 有构造函数的类, 有效
class Bar {
    constructor() {}
}

// 有获取函数的类, 有效
class Baz {
    get myBaz() {}
}

// 有静态方法的类, 有效
class Qux {
    static myQux() {}
}

// 类表达式的名称是可选的
// 在把类表达式负值给变量后, 可以通过name属性取得类表达式的名称字符串
// 但不能在类表达式作用域外部访问这个标识符

let People = class PeopleName {
    identify() {
        console.log(People.name, PeopleName.name);
    }
};

console.log("// 表达式名称不能在表达式作用域外部访问, 注意PeopleName是表达式名称");

let p = new People();
p.identify();

console.log(People.name);
// ReferenceError: PeopleName is not defined
// console.log(PeopleName.name);
