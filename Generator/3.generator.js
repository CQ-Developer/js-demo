function * generator() {}

console.log(generator);

console.log(generator()[Symbol.iterator]);

console.log(generator());

console.log(generator()[Symbol.iterator]());

const gen = generator();

// Generator对象实现了Iterator
// 默认Iterator是自引用的
console.log(gen === gen[Symbol.iterator]());