// slice()
// 用于创建一个包含原有数组中一个或多个元素的新数组
// 可以接收一个或两个参数：返回元素的开始索引和结束索引
// 如果只有一个参数，则返回该索引到数组末尾的所有元素
// 该操作不影响原始数组

console.log("// 原始数组");
let colors = ["red", "green", "blue", "yellow", "purple"];
console.log(colors);

console.log("// slice(1)");
let color2 = colors.slice(1);
console.log(color2);

console.log("// slice(1, 4)");
let color3 = colors.slice(1, 4);
console.log(color3);

// 如果slice()的参数有负值，那么就以数值长度加上这个负值的结果确定位置
// 5个元素：slice(-2, -1) 相当于 slice(3, 4)
// 如果结果位置小于开始位置，返回空数组

console.log("// slice(-2, -1)");
let color4 = colors.slice(-2, -1);
console.log(color4);

console.log("// slice(2, 1)");
let color5 = colors.slice(2, 1);
console.log(color5);
