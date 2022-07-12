// 上溢和下溢
// 定型数组中值的上溢和下溢不会影响到其他索引, 但仍然需要考虑数组的元素应该是什么类型
// 定型数组对于可以存储的每个索引只接收一个相关为, 而不考虑它们对实际数值的影响

// 长度为2的有符号整数数组
// 每个索引保存一个二补数形式的有符号整数
// 范围是 -128 ~ 127
const ints = new Int8Array(2);

// 长度为2的无符号整数数组
// 每个索引保存一个无符号整数
// 范围是 0 ~ 255
const unsignedInts = new Uint8Array(2);

console.log(`
// 上溢的位不会影响相邻索引
// 索引只取最低有效位上的8位`);
unsignedInts[1] = 256; // 256 = 0x0100 = 0000 0001 0000 0000
console.log(unsignedInts);
unsignedInts[1] = 511; // 511 = 0x01FF = 0000 0001 1111 1111
console.log(unsignedInts);

console.log(`
// 下溢的位会被转为其无符号的等价值
// 0xFF是以二补数形式表示的-1(截取到8位)
// 但255是一个无符号整数`);
unsignedInts[1] = -1; // -1 = 0xFF
console.log(unsignedInts);

console.log(`
// 上溢自动变成二补数形式
// 0x80是无符号整数的128, 是二补数形式的-128`);
// 128 = 0000 0000 1000 0000
//       1111 1111 0111 1111
//       1111 1111 1000 0000 = -128
ints[1] = 128;
console.log(ints);

console.log(`
// 下溢自动变成二补数形式
// 0xFF是无符号整数的255, 是二补数形式的-1`);
// 255 = 0000 0000 1111 1111
//       1111 1111 0000 0000
//       1111 1111 0000 0001 = -1
ints[1] = 255;
console.log(ints);

// 还有一种"夹板"数组类型 Uint8ClampedArray, 不允许任何方向溢出
// 超出最大值255的值会向下舍入255, 而小于最小值0的值会被向上舍入为0
// 完全是HTML5canvas元素的历史留存
console.log(`
// 夹板数组类型`);
const clampedInts = new Uint8ClampedArray([-1, 0, 255, 256]);
console.log(clampedInts);
