// 合并, 复制, 修改定型数组

// 定型数组使用数组缓冲来存储数据, 而数组缓冲无法调整大小
// 因此, 下列方法不适用于定型数组
// concat()
// pop()
// push()
// shift()
// splice()
// unshift()

// 定型数组提供了两个新方法, 可以快速向外或向内复制数据
// set()
// subarray()

// set()从提供的数组或定型数组中把值赋值到当前定型数组中指定的索引位置
const container = new Int16Array(8);

console.log(`
// 创建长度为8的int16数组
// 把定型数组赋值为前4个值
// 偏移量默认为索引0`);
container.set(Int8Array.of(1, 2, 3, 4));
console.log(container);

console.log(`
// 把普通数组复制为后4个值
// 偏移量4表示从索引4开始插入`);
container.set([5, 6, 7, 8], 4);
console.log(container);

console.log(`
// 溢出会抛出错误
// RangeError: offset is out of bounds
container.set([5, 6, 7, 8], 7)`);
// container.set([5, 6, 7, 8], 7);

// subarray()执行与set()相反的操作
// 它会基于从原始定型数组中复制的值返回一个新定型数组
// 复制值时的开始索引和结束索引是可选的
const source = Int16Array.of(2, 4, 6, 8);

console.log(`
// 把整个数组复制为一个同类型的数组`);
const fullCopy = source.subarray();
console.log(fullCopy);

console.log(`
// 从索引2开始复制数组`);
const halfCopy = source.subarray(2);
console.log(halfCopy);

console.log(`
// 从索引1开始复制到索引3`);
const partialCopy = source.subarray(1, 3);
console.log(partialCopy);

// 定型数组没有原生的拼接能力
// 但使用定型数组API提供的很多工具可以手动构建

console.log(`
// 自定义定型数组的拼接函数
// 第一个参数时应该返回的数组类型
// 其余参数是应该拼接再一起的定型数组`);
function typedArrayConcat(typedArrayConstructor, ...typedArrays) {
    // 计算所有数组中包含的元素总数
    // x.length || x
    // 如果 x 是空数组, 则 x.length || x => 0 || x => false || x,
    // x 是一个不为null的对象, false || x = x
    // x + y.length => [] + y.length = y.length
    // 空数组被作为0处理
    const numElement = typedArrays.reduce((x, y) => (x.length || x) + y.length);

    // 按照提供的类型传一个数组, 为所有的元素留出空间
    const resultArray = new typedArrayConstructor(numElement);

    // 一次转移数组
    let currentOffset = 0;
    typedArrays.map(x => {
        resultArray.set(x, currentOffset);
        currentOffset += x.length;
    });

    return resultArray;
}
const concatArray = typedArrayConcat(Int32Array,
    Int8Array.of(1, 2, 3), Int16Array.of(4, 5, 6), Float32Array.of(7, 8, 9));
console.log(concatArray);
console.log(concatArray instanceof Int32Array);

console.log(`
// 观察如下输出
// console.log(0 || [])
// console.log(Number(0 || []))`);
console.log(0 || []);
console.log(Number(0 || []));

console.log(`
// 观察如下输出
// console.log(2 || [1, 2])
// console.log(Number(2 || [1, 2])`);
console.log(2 || [1, 2]);
console.log(Number(2 || [1, 2]));
