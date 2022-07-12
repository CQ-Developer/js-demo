// 6.4.2 顺序与迭代

// Map与Object的主要区别是: Map会维护键值对的插入顺序
// 因此可以根据插入顺序执行迭代

// Map可以提供一个迭代器, 以插入顺序生成[key, value]形式的数组
// 通过entries()或Symbol.iterator方法取得这个迭代器

const m = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"]
]);

console.log(`
// Symbol.iterator属性就是引用entries方法`);
console.log(m.entries == m[Symbol.iterator]);

console.log(`
// 使用entries()进行遍历`);
for(let pair of m.entries()) {
    console.log(pair);
}

console.log(`
// 使用Symbol.iterator进行遍历`);
for(let pair of m[Symbol.iterator]()) {
    console.log(pair);
}

// 因为entries()是默认迭代器
// 所以可以直接对Map实例使用扩展操作符

console.log(`
// 使用扩展操作符将Map转换为Array`);
let arr = [...m];
console.log(arr);

console.log(`
// 使用forEach进行遍历`);
m.forEach((k, v, m) => console.log(`${k} -> ${v}`));

// keys()返回所有的key
// values()返回所有的value

console.log(`
// 使用keys()遍历所有的键`);
let keys = m.keys();
console.log(keys);
for(let key of m.keys()) {
    console.log(key);
}

console.log(`
// 使用values()遍历所有的值`);
let values = m.values();
console.log(values);
for(let value of m.values()) {
    console.log(value);
}

// 键和值再迭代器遍历时可以修改
// 但Map内部的引用无法修改
// 但并不妨碍修改作为键或值的对象的内部属性
// 因为并不影响它们在Map内部的身份
const m1 = new Map([
    ["key1", "val1"]
]);

console.log(`
// 作为键的字符串原始值是不能修改的`);
for(let key of m1.keys()) {
    key = "newKey";
    console.log(key);
    console.log(m1.get("key1"));
}

console.log(`
// 修改作为键的对象的属性
// 但对象在Map内部仍然引用相同的值`);
const keyObj = { id: 1 };
const m2 = new Map([
    [keyObj, "val1"]
]);
for(let key of m2.keys()) {
    key.id = "newKey";
    console.log(key);
    console.log(m2.get(key));
}
console.log(keyObj);
