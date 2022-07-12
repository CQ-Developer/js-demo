// 8.2.5 对象迭代

// ECMAScript2017新增了两个静态方法, 用于将对象内容转换为序列化的, 可迭代的格式
// Object.values()返回对象值的数组
// Object.entries()返回键值对的数组

const o = {
    foo: "bar",
    baz: 1,
    qux: {}
};

console.log(`
// Object.values()返回对象值的数组`);
console.log(Object.values(o));

console.log(`
// Object.entries()返回键值对的数组`);
console.log(Object.entries(o));

// 非字符串属性会被转换为字符串输出
// 这两个方法执行对象的浅复制

console.log(`
// 这两个方法都会执行对象的浅复制`);
console.log(Object.values(o)[2] === o.qux);
console.log(Object.entries(o)[2][1] === o.qux);

// 符号属性会被忽略

const sym = Symbol();
const o1 = {
    [sym]: "foo"
};

console.log(`
// 符号属性会被忽略`);
console.log(Object.values(o1));
console.log(Object.entries(o1));
