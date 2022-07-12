// 6.6.2 顺序与迭代

// Set会维护值插入时的顺序, 因此支持按顺序迭代
// 集合实例可以提供一个迭代器, 能以插入顺序生成集合内容
// 可以通过values()方法及其别名方法keys()取得这个迭代器
// 也可以通过Symbol.iterator属性取得迭代器, 它引用values()
const s = new Set(["v1", "v2", "v3"]);

console.log(`
// Symbol.iterator属性引用values方法, keys方法`);
console.log(s.values === s[Symbol.iterator]);
console.log(s.keys === s[Symbol.iterator]);

console.log(`
// 使用for-of循环通过values()迭代Set`);
for (let value of s.values()) {
    console.log(value);
}

console.log(`
// 使用for-of循环通过Symbol.iterator迭代Set`);
for (let value of s[Symbol.iterator]()) {
    console.log(value);
}

// values()是默认迭代器
// 可以直接对集合实例使用扩展操作, 把集合转换为数组
console.log(`
// 通过扩展操作将Set转换为Array`);
console.log([...s]);

// entries()方法返回一个迭代器
// 可以按照插入顺序产生包含两个元素的数组
// 这两个值是集合中每个值的重复出现
console.log(`
// 使用for-of循环通过entries()迭代Set`);
for(let pair of s.entries()) {
    console.log(pair);
}

// 如果不使用迭代器, 可以通过forEach()方法并传入回调依次迭代每个键值对
// 回调接收可选的第二个参数, 这个参数用于重写回调内部this的值
console.log(`
// 通过forEach遍历Set`);
s.forEach((k, v, set) => console.log(`${k}: ${v}`));

// 修改Set中值的属性不会影响其作为集合值的身份
const s1 = new Set(["v1"]);
console.log(`
// 字符串原始值作为值不会被修改`);
for(let value of s1.values()) {
    value = "newValue";
    console.log(value);
    console.log(s1.has("v1"));
}

const valObj = { id: 1 };
const s2 = new Set([valObj]);
console.log(`
// 修改值对象的属性, 但对象仍然存在于集合中`);
for(let value of s2.values()) {
    value.id = "newValue";
    console.log(value);
    console.log(s2.has(valObj));
}
console.log(valObj);
