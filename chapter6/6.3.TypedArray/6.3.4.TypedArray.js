// 定型数组
// 时另一种形式的ArrayBuffer的视图
// 和DataView的区别在于: 它特定于一种ElementType且遵循操作系统原生的字节序
// 设计定型数组的主要目的: 提高与WebGL等原生库交换二进制数据的效率
// 创建定型数组的方式: 读取已有的缓冲, 使用自有的缓冲, 填充可迭代结构, 填充基于任意类型的定型数组
// 创建顶数组的其他方式: <ElementType>.from(), <ElementType>.of()

console.log(`
// 创建一个12字节的缓冲
// 创建一个引用该缓冲的Int32Array
// 这个定型数组知道自己的每个元素需要4字节, 因此长度为3
// 12 ÷ 4 = 3`);
const buff1 = new ArrayBuffer(12);
const ints1 = new Int32Array(buff1);
console.log(ints1.length);

console.log(`
// 创建一个长度为6的Int32Array
// 每个数值使用4个字节, 因此ArrayBuffer是24个字节
// 6 * 4 = 24
// 类似DataView, 定性数组也有一个指向关联缓冲的引用`);
const ints2 = new Int32Array(6);
console.log(ints2.length);
console.log(ints2.byteLength);
console.log(ints2.buffer.byteLength);

console.log(`
// 创建一个包含[2, 4, 6, 8]的Int32Array`);
const ints3 = new Int32Array([2, 4, 6, 8]);
console.log(ints3.length);
console.log(ints3.buffer.byteLength);
console.log(ints3[2]);

console.log(`
// 通过复制ints3的值创建一个Int16Array
// 这个新类型数组会分配自己的缓冲
// 对应索引的每个值会相应的转换为新格式`);
const ints4 = new Int16Array(ints3);
console.log(ints4.length);
console.log(ints4.byteLength);
console.log(ints4[2]);

console.log(`
// 基于普通数组来创建一个Int16Array`);
const ints5 = Int16Array.from([3, 5, 7, 9]);
console.log(ints5.length);
console.log(ints5.byteLength);
console.log(ints5[2]);

console.log(`
// 基于传入的参数创建一个Float32Array`);
const floats1 = Float32Array.of(3.14, 2.718, 1.618);
console.log(floats1.length);
console.log(floats1.byteLength);
console.log(floats1[2]);

console.log(`
// 定型数组的构造函数和实例都有一个BYTES_PER_ELEMENT属性
// 返回该类型数组中每个元素的大小`);
console.log(Int16Array.BYTES_PER_ELEMENT);
console.log(Int32Array.BYTES_PER_ELEMENT);
const ints6 = new Int32Array(1),
      floats2 = new Float64Array(1);
console.log(ints6.BYTES_PER_ELEMENT);
console.log(floats2.BYTES_PER_ELEMENT);

console.log(`
// 如果定型数组没有用任何值初始化
// 其关联的缓冲会以0填充`);
const ints7 = new Int32Array(4);
console.log(ints7[0]);
console.log(ints7[1]);
console.log(ints7[2]);
console.log(ints7[3]);
