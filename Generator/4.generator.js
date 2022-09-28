function* generator() {}

// 与Iterator类似, 生成器也支持可关闭的概念
const gen = generator();
console.log(gen);

// 一个实现Iterator接口的对象一定有next()
console.log(gen.next);

// 还有一个可选的return()
// return()可以强制Generator进入关闭状态
console.log(gen.return);

// Generator除了还有throw()
// throw()可以强制Generator进入关闭状态
console.log(gen.throw);