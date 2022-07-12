// 基本API

console.log(`
// 使用new关键字和Map构造函数可以创建一个空映射`);
const m = new Map();
console.log(m);

console.log(`
// 传入一个可迭代对象, 在创建同时初始化
// 需要包含键值对数组, 可迭代对象中的每个键值对按照迭代顺序插入到新映射中
// 使用嵌套数组初始化映射:`);
const m1 = new Map([
    ["k1", "v1"],
    ["k2", "v2"],
    ["k3", "v3"]
]);
console.log(`size = ${m1.size}`);
console.log(m1);

console.log(`
// 使用自定义迭代器初始化映射`);
const m2 = new Map({
    [Symbol.iterator]: function*() {
        yield ["k1", "v1"];
        yield ["k2", "v2"];
        yield ["k3", "v3"];
    }
});
console.log(`size = ${m2.size}`);
console.log(m2);

console.log(`
// 映射期待的键值对, 无论是否提供`);
const m3 = new Map([]);
console.log(m3.has(undefined));
console.log(m3.get(undefined));

// 初始化之后
// 可以使用set()方法再添加键值对
// 可以使用get()和has()进行查询
// 可以通过size属性获取键值对的数量
// 可以通过delete()和clear()删除值

console.log(`
// 通过has()获取进行查询`);
console.log(m.has("firstName"));

console.log(`
// 通过get()获取进行查询`);
console.log(m.get("firstName"));

console.log(`
// 通过size属性获取键值对的数量`);
console.log(m.size);

console.log(`
// 通过set()添加键值对`);
m.set("firstName", "Matt")
 .set("lastName", "Frisbie");
console.log(m);

console.log(`
// 通过has()获取进行查询firstName`);
console.log(m.has("firstName"));

console.log(`
// 通过get()获取进行查询firstName`);
console.log(m.get("firstName"));

console.log(`
// 通过size属性获取键值对的数量`);
console.log(m.size);

console.log(`
// 通过delete()删除firstName`);
m.delete("firstName");
console.log(m);

console.log(`
// 通过has()获取进行查询firstName`);
console.log(m.has("firstName"));

console.log(`
// 通过has()获取进行查询lastName`);
console.log(m.has("lastName"));

console.log(`
// 通过size属性获取键值对的数量`);
console.log(m.size);

console.log(`
// 通过clear()清空实例中的所有键值对`);
m.clear();
console.log(m);

console.log(`
// 通过has()获取进行查询firstName`);
console.log(m.has("firstName"));

console.log(`
// 通过has()获取进行查询lastName`);
console.log(m.has("lastName"));

console.log(`
// 通过size属性获取键值对的数量`);
console.log(m.size);

console.log(`
// set()方法返回映射实例
// 因此可以将多个操作连起来, 包括初始化声明`);
const m4 = new Map().set("k1", "v1");
m4.set("k2", "v2")
  .set("k3", "v3");
console.log(m4);

// 与Object只能使用数字, 字符串或符号作为键不同
// Map可以使用任何JS数据类型作为键
// Map内部使用SameValueZero比较操作
// 相当于使用严格对象相等的标准来检查键的匹配性
// 与Object类似, 映射的值没有限制
m.clear();

const functionKey = function() {};
const symbolKey = Symbol();
const objectKey = new Object();

m.set(functionKey, "functionValue")
 .set(symbolKey, "symbolValue")
 .set(objectKey, "objectValue");

console.log(`
//  获取使用函数最为键的值`);
console.log(m.get(functionKey));

console.log(`
//  获取使用符号最为键的值`);
console.log(m.get(symbolKey));

console.log(`
//  获取使用对象最为键的值`);
console.log(m.get(objectKey));

console.log(`
// SameValueZero比较意味着独立实例不冲突`);
console.log(m.get(function() {}));

// 与严格相等一样, 在映射中用作键和值的对象及其他"集合"类型
// 在自己的内容或属性被修改时, 仍然保持不变
m.clear();

const objKey = {},
      objVal = {},
      arrKey = [],
      arrVal = [];
m.set(objKey, objVal)
 .set(arrKey, arrVal);

objKey.foo = "foo";
objVal.bar = "bar";
arrKey.push("foo");
arrVal.push("bar");

console.log(`
// 键值对在自己内容或属性被修改时, 仍然保持不变`);
console.log(m.get(objKey));
console.log(m.get(arrKey));

// SameValueZero比较可能导致意想不到的冲突
// SameValueZero是ECMAScript规范新增的相等性比较算法
m.clear();

const a = 0 / "",
      b = 0 / "",
      pz = +0,
      nz = -0;
console.log(`
// 键之间的相等关系`);
console.log(a === b);
console.log(pz === nz);
m.set(a, "foo")
 .set(pz, "bar");

console.log(`
// 通过不同的键进行获取值`);
console.log(m.get(b));
console.log(m.get(nz));
