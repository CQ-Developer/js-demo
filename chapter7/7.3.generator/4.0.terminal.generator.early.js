// 7.3.4 提前终止生成器

// 与迭代器类似, 生成器也支持"可关闭"的概念
// 一个实现Iterator接口的对象一定有next()方法, 还有一个可选的return()方法用于提前终止迭代器
// 生成器对象除了有两个方法, 还有第三个方法throw()

// return()和throw()方法都可以用于强制生成器进入关闭状态

function* generatorFn() {}

const g = generatorFn();

console.log(g);
console.log(g.next);
console.log(g.return);
console.log(g.throw);
