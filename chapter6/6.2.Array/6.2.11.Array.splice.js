// splice()
// 主要目的是在数组中间插入元素
// 有3中不同的使用方式

// 删除
// 传入2个参数：要删除的第一个元素的位置和要删除元素的数量
// 可以从数组中删除任意多个元素

// 插入
// 传入3个参数：开始位置、0(要删除元素的数量)、要插入的元素，可以在数组中指定的位置插入元素
// 第3个参数之后还可以传入第4个、第5个，乃至任意多个要插入的元素

// 替换
// 同样传入3个元素：开始位置、要删除元素的数量、要插入的任意多个元素
// 要出入元素的数量和要删除元素数量不用一致

// splice()方法始终返回会这样一个数组，它包含从数组删除被删除的元素
// 如果没有删除元素则返回空数组

let colors = ["red", "green", "blue"];
console.log("// 原数组");
console.log(colors);

let removed = colors.splice(0, 1);
console.log("// 删除第一个元素");
console.log(colors);
console.log(removed);

removed = colors.splice(1, 0, "yellow", "orange");
console.log("// 在位置1插入两个元素");
console.log(colors);
console.log(removed);

removed = colors.splice(1, 1, "red", "purple");
console.log("// 在位置1删除1个元素, 删除2个元素");
console.log(colors);
console.log(removed);
