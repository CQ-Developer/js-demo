// 使用 yield* 实现递归算法

// yield* 最有用的地方是实现递归操作
// 此时生成器可以产生自身

// 这个例子中
// 每个生成器首先都会从新创建的生成器对象产出每个值, 然后再产出一个整数
// 结果就是生成器函数会递归地减少计数值, 并实例化另一个生成器对象
// 从顶层来看, 这就相当于创建一个可迭代对象并返回递增的整数
function* nTimes(n) {
    if (n > 0) {
        yield* nTimes(n - 1);
        yield n - 1;
    }
}

for (const x of nTimes(3)) {
    console.log(x);
}

// 使用递归生成器结构和 yield* 可以优雅地表达递归算法
// 下面是一个图的实现, 用于生成一个随机的双向图

class Node {
    constructor(id) {
        this.id = id;
        this.neighbors = new Set();
    }

    connect(node) {
        if (node != this) {
            this.neighbors.add(node);
            node.neighbors.add(this);
        }
    }
}

class RandomGraph {
    constructor (size) {
        this.nodes = new Set();

        // 创建节点
        for (let i = 0; i < size; i++) {
            this.nodes.add(new Node(i));
        }

        // 随机连接节点
        const threshold = 1 / size;
        for (const x of this.nodes) {
            for (const y of this.nodes) {
                if (Math.random() < threshold) {
                    x.connect(y);
                }
            }
        }
    }

    print() {
        for (const node of this.nodes) {
            const ides = [...node.neighbors].map((n) => n.id).join(",");
            console.log(`${node.id}: ${ides}`);
        }
    }

    isConnected() {
        const visitedNodes = new Set();

        function* traverse(nodes) {
            for (const node of nodes) {
                if (!visitedNodes.has(node)) {
                    yield node;
                    yield* traverse(node.neighbors);
                }
            }
        }

        // 取得集合中的第一个节点
        const firstNode = this.nodes[Symbol.iterator]().next().value;

        // 使用递归生成器迭代每一个节点
        for (const node of traverse([firstNode])) {
            visitedNodes.add(node);
        }

        return visitedNodes.size === this.nodes.size;
    }
}

console.log(`
// 图算法`);

const g = new RandomGraph(6);
g.print();
