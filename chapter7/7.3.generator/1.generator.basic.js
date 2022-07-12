// 7.3.1 生成器基础

// 生成器的形式是一个函数, 函数名称前面加一个星号表示它是一个生成器
// 只要是可以定义函数的地方, 就可以定义生成器
// 注意, 箭头函数不能用来定义生成器

// 生成器函数声明
function* generatorFn() {}

// 生成器函数表达式
let generatorFn1 = function* () {}

// 作为对象字面量方法的生成器函数
let foo = {
    * generatorFn() {}
};

// 作为类实例方法的生成器函数
class Foo {
    * generatorFn() {}
}

// 作为类静态方法的生成器函数
class Bar {
    static * generatorFn() {}
}

// 表示生成器函数的星号不受两侧空格的影响
function* generatorFnA() {}
function * generatorFnA() {}
function *generatorFnA() {}
class Eoo {
    *generatorFnD() {}
    * generatorFnE() {}
}

// 调用生成器函数会产生一个生成器对象
// 生成器对象一开始处于暂停状态(suspended)
// 与迭代器类似, 生成器对象也实现了Iterator接口, 因此具有next()方法
// 调用这个方法会让生成器开始或恢复执行
const g = generatorFn();

console.log(`
// 生成器对象及生成器对象的next方法`);
console.log(g);
console.log(g.next);

// next()方法的返回值类似于迭代器, 有一个done属性和value属性
// 函数体为空的生成器中间不会停留, 调用一次next()就会让生成器到达done=true状态
let generatorObject = generatorFn();

console.log(`
// 调用生成器的next()方法`);
console.log(generatorObject);
console.log(generatorObject.next());

// value属性是生成器的返回值, 默认为undefined
// 可以通过生成器函数的返回值指定
// 生成器函数只会在初次调用next()后开始执行
function* generatorFnF() {
    return "foo";
}

// 初次调用生成器函数并不会打印日志
generatorObjectF = generatorFnF();

console.log(generatorObjectF);
console.log(generatorObjectF.next());

// 生成器对象实现了Iterable接口
// 它们默认的迭代器是自引用的
function* generatorFnG() {}

console.log(`
// 生成器函数 和 生成器对象的迭代器函数`);
console.log(generatorFnG);
console.log(generatorFnG()[Symbol.iterator]);

console.log(`
// 生成器对象 和 生成器对象的迭代器对象`);
console.log(generatorFnG());
console.log(generatorFnG()[Symbol.iterator]());

console.log(`
// 生成器对象 和 生成器对象的迭代器对象 是否为同一个对象`);
const generatorFromG = generatorFnG();
console.log(generatorFromG === generatorFromG[Symbol.iterator]());
