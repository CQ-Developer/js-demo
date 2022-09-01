/** 20.1.2.3 原子交换 */



/**
 * 为了保证连续, 不间断的先读后写, Atomics API 提供了两种方法: exchange(), compareExchange()
 * 
 * Atomics.exchange()执行简单的交换, 以保证其他线程不会中断值的交换
 */
const sharedArrayBuffer_A = new SharedArrayBuffer(4);
const view_A = new Uint32Array(sharedArrayBuffer_A);

// 在索引0处写入3
Atomics.store(view_A, 0, 3);

// 从索引0处读取值, 然后在索引0处写入4
console.log(`使用exchange交换出的值: ${Atomics.exchange(view_A, 0, 4)}`);

// 从索引0处读取值
console.log(`使用load从索引0处读取当前值: ${Atomics.load(view_A, 0)}`);



/**
 * 在多线程程序中, 一个线程可能只希望在上次读取某个值之后没有其他线程修改该值的情况下才对共享缓冲区执行写操作
 * 
 * 如果这个值没有被修改, 这个线程就可以安全地写入更新后的值
 * 如果这个值被修改了, 那么执行写操作会破坏其他线程计算的值
 * 
 * 对于这种任务, Atomics API 提供了compareExchange()方法
 * 该方法只在目标索引处的值与预期值匹配时才会执行写操作
 */
const sharedArrayBuffer_B = new SharedArrayBuffer(4);
const view_B = new Uint32Array(sharedArrayBuffer_B);

// 从索引0处写入5
Atomics.store(view_B, 0, 5);

// 从缓冲区读取值
let initial_B = Atomics.load(view_B, 0);

// 对这个值执行非原子操作
let result_B = initial_B ** 2;

// 只在缓冲区未被修改的情况下才会向缓冲寄过去写入新值
Atomics.compareExchange(view_B, 0, initial_B, result_B);

// 检查写入成功
console.log(`使用compareExchange交换值: ${Atomics.load(view_B, 0)}`);


const sharedArrayBuffer_C = new SharedArrayBuffer(4);
const view_C = new Uint32Array(sharedArrayBuffer_C);

// 从索引0处写入5
Atomics.store(view_C, 0, 5);

// 从缓冲区读取值
let initial_C = Atomics.load(view_B, 0);

// 对这个值执行非原子操作
let result_C = initial_C ** 2;

// 只在缓冲区未被修改的情况下才会向缓冲寄过去写入新值
Atomics.compareExchange(view_C, 0, -1, result_C);

// 检查写入成功
console.log(`使用compareExchange交换值: ${Atomics.load(view_C, 0)}`);