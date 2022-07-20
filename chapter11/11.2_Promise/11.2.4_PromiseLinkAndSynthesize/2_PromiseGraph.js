/**
 * 11.2.4_2 期约图
 * 
 * 因为一个 Promise 可以有任意多个处理程序, 所以 Promise 连锁可以构建有向非循环的结构
 * 每个 Promise 都是图中的一个节点, 而使用实例方法添加的处理程序则是有向顶点
 * 因为图中的每个节点都会等待前一个节点落定, 所以图的方向就是 Promise 的解决或拒绝顺序
 * 
 * 下面展示了一种 Promise 有向图, 也就是二叉树
 */
let A = new Promise((resolve, reject) => {
    console.log("A");
    resolve();
});

let B = A.then(() => console.log("B"));
let C = A.then(() => console.log("C"));

B.then(() => console.log("D"));
B.then(() => console.log("E"));

C.then(() => console.log("F"));
C.then(() => console.log("G"));
