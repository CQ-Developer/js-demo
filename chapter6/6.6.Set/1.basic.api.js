// 6.6.1 基本API

console.log(`
// 使用new关键字和Set构造函数创建一个空集合`);
const m = new Set();
console.log(m);

// 在创建的同时初始化实例
// 给Set构造函数传入一个可迭代对象

console.log(`
// 使用数组初始化集合`);
const s1 = new Set(["value1", "value2", "value3"]);
console.log(`set.size = ${s1.size}`);
console.log(s1);

console.log(`
// 使用自定义迭代器初始化集合`);
const s2 = new Set({
    [Symbol.iterator]: function*() {
        yield "value1";
        yield "value2";
        yield "value3";
    }
});
console.log(`set.size = ${s2.size}`);
console.log(s2);

// 使用add()增加值
// 使用has()查询
// 使用delete()删除
// 使用clear()清空
// 使用size取得元素数量

const s = new Set();

console.log(`
// 使用has()判断元素是否存在`);
console.log(`set.size = ${s.size}`);
console.log(s.has("Matt"));

console.log(`
// 使用add()添加元素`);
s.add("Matt")
 .add("Frisbie");
console.log(s);

console.log(`
// 使用delete()删除元素`);
s.delete("Matt");
console.log(s);

console.log(`
// 使用clear()清空Set`);
s.clear();
console.log(s);

console.log(`
// add()返回Set的实例
// 可以将多个add()操作连写`);
const s3 = new Set()
    .add("value1")
    .add("value2")
    .add("value3");
s3.add("value4")
  .add("value5");
console.log(s3);

// 与Map类似, Set可以包含任何JS数据类型作为值
// 集合也使用SameValueZero操作, 基本上相当于使用严格对象相等的标准来检查值的匹配性
const s4 = new Set();

const functionVal = function() {};
const symbolVal = Symbol();
const objectVal = new Object();

s4.add(functionVal)
  .add(symbolVal)
  .add(objectVal);

console.log(`
// 使用特殊类型作为Set的元素`);
console.log(s4.has(functionVal));
console.log(s4.has(symbolVal));
console.log(s4.has(objectVal));

console.log(`
// SameValueZero检查意味着独立的实例不会冲突`);
console.log(s4.has(function() {}));

// 与严格相等一样
// 用作值的对象和其他"集合"类型在自己的内容或属性被修改时也不会改变
const s5 = new Set();

const objVal = {},
      arrVal = [];

s5.add(objVal)
  .add(arrVal);

objVal.bar = "bar";
arrVal.push("bar");

console.log(`
// 修改Set中对象元素的属性或值不会改变`);
console.log(s5.has(objVal));
console.log(s5.has(arrVal));

// add()和delete()操作是幂等的
// delete()返回一个布尔值, 表示集合中是否存在要删除的值
const s6 = new Set();

console.log(`
// add()操作的幂等性`);
s6.add("foo");
console.log(s6.size);
s6.add("foo");
console.log(s6.size);

console.log(`
// delete()操作的幂等性`);
console.log(s6.delete("foo"));
console.log(s6.delete("foo"));
