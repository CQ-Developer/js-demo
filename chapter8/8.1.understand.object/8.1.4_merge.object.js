/**
 * 8.1.4 合并对象
 * 
 * ES6提供了Object.assign()方法用于合并对象
 * 将原对象中可枚举和自有属性复制到目标对象
 * 以字符串和符号为键的属性会被复制
 * 对于每个符合条件的属性, 这个方法都会使用原对象上的[[Get]]取得属性的值, 使用目标对象上的[[Set]]设置属性的值
 * 
 * 可枚举: Object.propertyIsEnumerable()返回true
 * 自有: Object.hasOwnProperty()返回true
 * 
 * Object.assing()实际上对每个源对象执行的是浅复制
 * 如果多个源对象都有相同的属性, 则使用最后一个赋值的值
 * 此外, 在源对象访问器属性取得的值, 比如获取函数, 会作为一个静态之赋给目标对象
 * 换句话说, 不能在两个对象间转移获取函数和设置函数
 * 
 * 如果赋值期间出错, 则操作会终止并退出, 同时抛出错误
 * Object.assign()没有回滚之前赋值的概念, 因此它是一个尽力而为, 可能只会完成部分复制的方法
 */

let dest, src, result;

console.log(`
// 简单复制`);
dest = {};
src = { id: "src" };
result = Object.assign(dest, src);

// Object.assign()修改目标对象
// 也会返回修改后的目标对象
console.log(dest === result);
console.log(dest !== src);
console.log(result);
console.log(dest);

console.log(`
// 多个源对象`);
dest = {};
result = Object.assign(dest, { a: "foo" }, { b: "bar" });
console.log(result);

console.log(`
// 获取函数与设置函数`);
dest = {
    set a(val) {
        console.log(`Invoked dest setter with param ${val}`);
    }
};
src = {
    get a() {
        console.log("Invoked src getter");
        return "foo";
    }
};
// 调用src的获取方法
// 调用dest的设置方法并传入参数foo
// 因为这里的设置函数不执行赋值操作
// 所以实际上并没有把值转移过来
Object.assign(dest, src);
console.log(dest);

console.log(`
// 覆盖属性`);
dest = { id: "dest" };
result = Object.assign(dest, { id: "src1", a: "foo" }, { id: "src2", a: "bar" });
console.log(result);

console.log(`
// 可以通过目标对象上的设置函数观察到覆盖过程`);
dest = {
    set id(x) {
        console.log(x);
    }
};
Object.assign(dest, { id: "first" }, { id: "second" }, { id: "third" });

console.log(`
// 对象引用
// 浅复制意味着只会复制对象的引用`);
dest = {};
src = { a: {} };
Object.assign(dest, src);
console.log(dest);
console.log(dest.a === src.a);

console.log(`
// 错误处理
// Object.assign()没办法回滚已经完成的修改
// 因此在抛出错误之前, 目标对象上已经完成的修改会继续存在`);
dest = {};
src = {
    a: "foo",
    get b() {
        throw new Error();
    },
    c: "bar"
};
try {
    Object.assign(dest, src);
} catch(e) {

}
console.log(dest);
