/**
 * 20.1.2.2 原子读和写
 * 
 * 浏览器的JS编译器和CPU架构本身都有权限重排指令以提升程序执行效率
 * 正常情况下, JS的单线程环境是可以随时进行这种优化的
 * 但多线程下的指令重排可能导致资源争用, 而且极难排错
 * 
 * Atomics API 通过两种主要方式解决了这个问题
 * 1.所有原子指令相互之间的顺序永远不会重排
 * 2.使用原子读或原子写保证所有指令都不会相对原子读/写重排序
 * 
 * 这意味着位于原子读/写之前的所有指令会在原子读/写发生前完成
 * 而位于原子读/写之后的所有指令会在原子读/写完成后才会开始
 * 
 * 除了读写缓冲区的值, Atomics.load()和Atomics.store()还可以构建"代码围栏"
 * JS引擎保证非原子指令可以相对于load()或store()本地重排, 但这个重排不会侵犯原子读/写的边界
 */



const sharedArrayBuffer = new SharedArrayBuffer(4);
const view = new Uint32Array(sharedArrayBuffer);

// 执行非原子写
view[0] = 1;

// 非原子写可以保证在这个读操作之前完成
// 因此这里一定会读到1
console.log(Atomics.load(view, 0));

// 执行原子写
Atomics.store(view, 0, 2);

// 非原子读可以保证在原子写完成之后发生
// 因此这里一定会读到2
console.log(view[0]);