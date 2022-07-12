// 7.3.2 通过yield中断执行

// yield关键字可以让生成器停止和开始执行, 也是生成器最有用的地方
// 生成器函数在遇到yield关键字之前会正常执行
// 遇到这个关键字之后, 就会停止, 函数作用域的状态会被保留
// 停止执行的生成器函数只能通过在生成器对象上调用next()方法来恢复执行

function* generatorFnA() {
    yield;
}

let generatorFnAObject = generatorFnA();

console.log(`
// 通过调用next()方法让生成器回复执行`);

console.log(generatorFnAObject.next());
console.log(generatorFnAObject.next());

// 此时的yield关键字有点像函数的中间返回语句
// 它生成的值会出现在next()方法返回的对象里
// 通过yield关键字退出的生成器函数会出在 done=false 状态
// 通过return关键字退出的生成器会处于 done=true 状态

function* generatorFnB() {
    yield "foo";
    yield "bar";
    return "baz";
}

let generatorFnBObject = generatorFnB();

console.log(`
// 通过return关键词退出的生成器函数状态`);

console.log(generatorFnBObject.next());
console.log(generatorFnBObject.next());
console.log(generatorFnBObject.next());

// 生成器函数内部的执行流程会针对每个生成器对象区分作用域
// 在一个生成器对象上调用next()不会影响其他生成器

function* generatorFnC() {
    yield "foo";
    yield "bar";
    return "baz";
}

let generatorFnCObject1 = generatorFnC();
let generatorFnCObject2 = generatorFnC();

console.log(`
// 生成器之间不会互相影响`);

console.log(generatorFnCObject1.next());
console.log(generatorFnCObject2.next());
console.log(generatorFnCObject2.next());
console.log(generatorFnCObject1.next());

// yield关键字只能在生成器函数内部试用, 用在其他地方会抛出错误
// 类似函数的return关键字, yield关键字必须直接位于生成器函数定义中
// 出现在嵌套的非生成器函数中会抛出语法错误

// 有效
function* validGeneratorFnA() {
    yield;
}

// 无效
function* invalidGeneratorFnA() {
    function a() {
        yield;
    }
}

// 无效
function* invalidGeneratorFnB() {
    const b = () => {
        yield;
    }
}

// 无效
function* invalidGeneratorFnC() {
    (() => {
        yield;
    })();
}
