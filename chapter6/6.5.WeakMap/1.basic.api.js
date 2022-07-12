// 6.5.1 基本API

console.log(`
// 使用new关键字实例化一个空WeakMap`);
const wm = new WeakMap();
console.log(wm);

// WeakMap中的键只能是Object或继承自Object的类型
// 使用非对象设置键会抛出TypeError
// 值的类型无限制

// 构造函数接收一个可迭代对象, 可在初始化时进行填充
// 其中需要包含键值对数组
// 可迭代对象中的每个键值对都会按照迭代顺序插入新实例

console.log(`
// 使用嵌套数组初始化WeabMap`);
const key1 = { id: 1 },
      key2 = { id: 2 },
      key3 = { id: 3 };
const wm1 = new WeakMap([
    [key1, "val1"],
    [key2, "val2"],
    [key3, "val3"]
]);
console.log(wm1.get(key1));
console.log(wm1.get(key2));
console.log(wm1.get(key3));

console.log(`
// 初始化是全有或全无的操作
// 只要有一个键无效就会抛出错误, 导致整个初始化失败
// TypeError: Invalid value used as weak map key`);
// const wm2 = new WeakMap([
//     [key1, "val1"],
//     ["BADKEY", "val2"],
//     [key3, "val3"]
// ]);

console.log(`
// 原始值可以先包装成对象再用作键`);
const stringKey = new String("key1");
const wm3 = new WeakMap([
    [stringKey, "val1"]
]);
console.log(wm3.get(stringKey));

// set() get() has() delete()

console.log(`
// 使用has()判断是否存在指定key
// 使用get()获取指定key`);
console.log(wm.has(key1));
console.log(wm.get(key1));

console.log(`
// 使用set()设置键值对`);
wm.set(key1, "Matt")
  .set(key2, "Frisbie");
console.log(wm.has(key1));
console.log(wm.get(key1));

console.log(`
// 使用delete()删除键值对`);
wm.delete(key1);
console.log(wm.has(key1));
console.log(wm.has(key2));

console.log(`
// set()方法会返回WeakMap的实例, 可以连写`);
const wm4 = new WeakMap()
    .set(key1, "val1")
    .set(key2, "val2")
    .set(key3, "val3");
console.log(wm4.get(key1));
console.log(wm4.get(key2));
console.log(wm4.get(key3));
