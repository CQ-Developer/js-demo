/**
 * 10.14.1 this对象
 * 
 * 在闭包中使用this会让代码变复杂
 * 
 * 如果内部函数没有使用箭头函数定义, 则this对象会在运行时绑定到执行函数的上下文
 * 
 * 如果在全局函数中调用, 则this在非严格模式下等于window, 在严格模式下等于undefined
 * 
 * 如果作为某个对象的方法调用, 则this等于这个对象
 * 匿名函数在这种情况下不会绑定到某个对象, 这就意味着this会指向window, 除非在严格模式下this是undefined
 */
identity = "The window";

let object = {
    identity: "My Object",
    getIdentityFunc() {
        return function() {
            return this.identity;
        };
    }
};

console.log(object.getIdentityFunc()());

/**
 * 每个函数在被调用时都会自动创建两个特殊变量: this, arguments
 * 内部函数永远不可能直接访问外部函数的这两个变量
 * 但是, 如果把this保存到闭包可以访问的另一个变量中, 则是行得通的
 * 
 * 在定义匿名函数之前, 先把外部函数的this保存到变量a中
 * 然后在定义闭包时, 就可以让它访问a, 因为这是包含函数中名称没有任何冲突的一个变量
 * 即使在外部函数返回之后, a仍然指向object
 */

let objectA = {
    identity: "My Object",
    getIdentityFunc() {
        // 注意这个a变量
        let a = this;
        return function() {
            return a.identity;
        };
    }
};

console.log(objectA.getIdentityFunc()());

/**
 * 在一些特殊情况下, this值可能并不是我们所期待的值
 */
let objectB = {
    identity: "My Object",
    getIdentityFunc() {
        return this.identity;
    }
};

// 调用objectB.getIdentityFunc()是正常调用, 会返回"My Object"
// 因为this.identity就是object.identity
console.log(objectB.getIdentityFunc());

// 调用时把object.identity放在括号里
// 虽然加了括号之后看起来是对一个函数的引用, 但this值没有变
console.log((objectB.getIdentityFunc)());

// 执行了一次赋值, 然后再调用赋值后的结果
// 因为赋值表达式的值是函数本身, this值不再与任何对象绑定, 所有饭的是"The Window"
console.log((objectB.getIdentityFunc = objectB.getIdentityFunc)());
