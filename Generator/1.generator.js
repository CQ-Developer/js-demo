function * generator() {}
// 调用生成器函数会产生一个Generator对象
const gen = generator();
// Generator对象一开始处于suspended状态
console.log(gen);
// Generator对象也实现了Iterator接口, 因此有next()
console.log(gen.next);
// 调用next()会让Generator开始或恢复执行, next()的返回值类似于Iterator, 有done和value属性
console.log(gen.next());