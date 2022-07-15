/**
 * 10.3 理解参数
 * 
 * ECMAScript函数既不关心传入的参数个数, 也不关心这些参数的数据类型
 * 定义函数时要接收两个参数, 并不意味着调用时就要传两个参数
 * 可以传一个, 三个, 甚至一个也不传, 解释器不会报错
 * 
 * 之所以会这样, 主要是因为函数的参数在内部表现为一个数组
 * 函数被调用时总会接收一个数组, 但函数并不关心这个数组中包含什么
 * 事实上, 在使用function关键字定义非箭头函数时, 可以在函数内部访问arguments对象, 从中取得传进来的每个参数值
 * 
 * arguments对象是一个类数组对象, 但不是Array的实例, 因此可以使用中括号语法访问其中的元素
 * 而要确定传进来多少个参数, 可以访问arguments.length属性
 */
function sayHi(name, message) {
    console.log(`Hello ${name}, ${message}`);
}

/**
 * 将函数写成不声明参数也是可以的
 * 
 * ECMAScript函数的参数只是为了方便才写出来, 并不是必须写出来的
 * 在ECMAScript中的命名参数不会创建让之后的调用必须匹配的函数签名
 * 因为根本不存在验证命名参数的机制
 */
function sayHiNoArgs() {
    console.log(`Hello ${arguments[0]}, ${arguments[1]}`);
}

/**
 * 可以通过arguments对象的length属性检查传入参数的个数
 */
function howManyArgs() {
    console.log(arguments.length);
}

howManyArgs("string", 45);
howManyArgs();
howManyArgs(12);

/**
 * 随意传递任意数量的参数
 */
function doAdd() {
    if (arguments.length === 1) {
        console.log(arguments[0] + 10);
    } else if (arguments.length === 2) {
        console.log(arguments[0] + arguments[1]);
    }
}

doAdd(10);
doAdd(20, 30);

/**
 * arguments对象可以和命名参数一起使用
 */
function doAddA(num1, num2) {
    if (arguments.length === 1) {
        console.log(num1 + 10);
    } else if (arguments.length === 2) {
        console.log(arguments[0] + num2);
    }
}

/**
 * arguments的值始终会与对应的命名参数同步
 * num2和arguemnts[1]自动同步
 */
function doAddB(num1, num2) {
    arguments[1] = 10;
    console.log(arguments[0] + num2);
}
doAddB(1, 2);

/**
 * 如果只传入一个参数, 然后把arguments[1]设置为某个值, 那么这个值不会反映到第二个命名参数
 * 因为arguments对象的长度时根据传入的参数个数, 而非定义函数时给出的命名参数个数确定的
 * 
 * 对于命名参数, 如果调用函数时没有传这个参数, 那么它的值就是undefined
 * 这类似于定义了变量没有初始化
 */
function doAddC(num1, num2) {
    arguments[1] = 10;
    console.log(arguments[0] + num2);
}
doAddC(1);

/**
 * 箭头函数中的参数
 * 
 * 如果函数时使用箭头语法定义的
 * 那么传给函数的参数将不能使用arguments关键字访问, 而只能通过定义的命名参数访问
 */
function foo() {
    console.log(arguments[0]);
}
foo(5);

let bar = () => {
    console.log(arguments[0]);
};
// 在浏览器中执行
// Uncaught ReferenceError: arguments is not defined
bar(5);

/**
 * 虽然箭头函数中没有arguments对象
 * 但可以在包装函数中把它提供给箭头函数
 */
function arrowFunctionWrapper() {
    let foo = () => console.log(arguments[0]);
    foo();
}
arrowFunctionWrapper(5);
