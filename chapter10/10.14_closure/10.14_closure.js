/**
 * 10.14 闭包
 * 
 * 匿名函数经常被人误认为是闭包
 * 
 * 闭包指的是那些引用了另一个函数作用域中变量的函数, 通常是在嵌套函数中实现的
 */
function createComparisonFunction(propertyName) {
    return function(obj1, obj2) {
        // 注意这两行代码, 引用了外部函数的propertyName
        let v1 = obj1[propertyName];
        let v2 = obj2[propertyName];

        if (v1 < v2) {
            return -1;
        } else if (v1 > v2) {
            return 1;
        } else {
            return 0;
        }
    };
}

/**
 * 在这个内部函数被返回并在其他地方被使用后, 它仍然引用着那个变量
 * 这是因为内部函数的作用域链包含createComparisonFunction()函数的作用域
 * 
 * 第四章介绍过作用域链的概念
 * 理解作用域链创建和使用的细节对理解闭包非常重要
 * 在调用一个函数时, 会为这个函数调用创建一个执行上下文, 并创建一个作用域链
 * 然后用arguments和其他命名参数来初始化这个函数的活动对象
 * 外部函数的活动对象是内部函数作用域链上的第二个对象
 * 这个作用域链一直向外串起了所有包含函数的活动对象, 知道全局执行上下文才终止
 * 
 * 在函数执行时, 要从作用域链中查找变量, 以便读写值
 */
function compare(v1, v2) {
    if (v1 < v2) {
        return -1;
    } else if (v1 > v2) {
        return 1;
    } else {
        return 0;
    }
}
let result = compare(5, 10);

/**
 * 函数执行时, 每个执行上下文中都会有一个包含其中变量的对象
 * 全局上下文中的叫变量对象, 它会在代码执行期间始终存在
 * 函数局部上下文中的叫活动对象, 会在函数执行期间存在
 * 
 * 在定义compare()函数时, 就会为它创建作用域链, 预装载全局变量对象, 并保存在内部的[[Scope]]中
 * 在调用这个函数时, 会创建相应的执行上下文, 然后通过复制函数的[[Scope]]来创建其作用域链
 * 接着会创建函数的活动对象并将其推入作用域链的前端
 * 
 * 在这个例子中, 这意味着compare()函数执行上下文的作用域链中有两个变量对象: 局部变量对象, 全局变量对象
 * 作用域链其实是一个包含指针的列表, 每个指针分别指向一个变量对象, 但物理上并不会包含相应的对象
 * 
 * 函数内部的代码在访问变量时, 就会使用给定的名称从作用域链中查找变量
 * 函数执行完毕后, 局部活动对象会被销毁, 内存中就只剩下全局作用域
 * 不过闭包就不一样了
 * 
 * 在一个函数内部定义的函数会把其包含函数的活动对象添加到自己的作用域链中
 * 因此, 在createComparisonFunction()函数中, 匿名函数的作用域链中实际上包含createComparisonFunction()的活动对象
 */
let nameComparisonFunction = createComparisonFunction("name");
let nameComparisonResult = nameComparisonFunction({ name: "Nicholas" }, { name: "Matt" });

/**
 * 在createComparisonFunction()返回匿名函数后, 它的作用域链就被初始化为包含createComparisonFunction()的活动对象和全局变量对象
 * 这样, 匿名函数就可以访问createComparisonFunction()可以访问的所有变量
 * 
 * 另一个有意思的是, createComparisonFunction()的活动对象并不能在它执行完毕后销毁, 因为匿名函数的作用域链中仍然有对它的引用
 * 在createComparisonFunction()执行完毕后, 其执行上下文的作用域链会销毁, 但它的活动对象仍然保留在内存中, 直到匿名函数被销毁后才会被销毁
 * 
 * 代码作用: 解除对函数的引用, 这样就可以释放内存了
 */
 nameComparisonFunction= null;
 