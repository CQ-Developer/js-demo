/**
 * 20.1.2.1 算数及位操作方法
 * 
 * Atomics API 提供了一套简单的方法用以执行就地修改操作
 * 
 * 在ECMA规范中, 这些方法被定义为AtomicReadModifyWrite操作
 * 在底层, 这些方法都会从SharedArrayBuffer中某个位置读取, 然后执行算数或位操作, 最后再把计算结果写回相同的位置
 * 
 * 这些操作的原子本质意味着上述读取, 修改, 写回操作会按照顺序执行, 不会被其他线程中断
 */



// 创建大小为1的缓冲区
let sharedArrayBuffer = new SharedArrayBuffer(1);

// 基于缓冲创建Uint8Array
let typedArray = new Uint8Array(sharedArrayBuffer);

// 所有ArrayBuffer全部初始化为0
console.log(typedArray);

const index = 0;
const increment = 5;

// 对索引0处的值执行原子加5
Atomics.add(typedArray, index, increment);
console.log(typedArray);

// 对索引0处的值执行原子减5
Atomics.sub(typedArray, index, increment);
console.log(typedArray);

// 对索引0处的值执行原子或0b1111
Atomics.or(typedArray, index, 0b1111);
console.log(typedArray);

// 对索引0处的值执行原子与0b1100
Atomics.and(typedArray, index, 0b1100);
console.log(typedArray);

// 对索引0处的值执行原子异或0b1111
Atomics.xor(typedArray, index, 0b1111);
console.log(typedArray);
