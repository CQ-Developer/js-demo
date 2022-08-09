/**
 * 14.1.1_2 节点关系
 * 
 * 文档中所有节点都与其他节点有关系.
 * 这些关系可以形容为家族关系, 相当于把文档树比作家谱.
 * 
 * 每个节点都有一个 childNodes 属性, 其中包含一个 NodeList 实例.
 * NodeList 是一个类数组对象, 用于存储可以按位置存取的有序节点.
 * 注意, NodeList 并不是 Array 的实例, 但可以使用中括号访问它的值, 而且它也有 length 属性.
 * NodeList 对象独特的地方在于, 它其实是一个对 DOM 结构的查询, 因此 DOM 结构的变化会自动地在 NodeList 中反应出来.
 * 我们通常说 NodeList 是实时的活动对象, 而不是第一次访问时所获得内容的快照.
 * 
 * 下面的例子展示了如何使用中括号或使用 item() 方法访问 NodeList 中的元素
 */
let someNode = new Node();

let firstChild = someNode.childNodes[0];
let secondChild = someNode.childNodes.item(1);
let count = someNode.childNodes.length;

/**
 * 使用 Array.prototype.slice() 可以把 NodeList 对象转换为数组.
 */
let arrayOfNodesA = Array.prototype.slice.call(someNode.childNodes, 0);

/**
 * 也可以使用 ES6 的 Array.from() 静态方法.
 */
let arrayOfNodesB = Array.from(someNode.childNodes);

/**
 * 每个节点都有一个 parentNode 属性指向其 DOM 树中的父节点.
 * 使用 previousSibling 和 nextSibling 可以在这个列表的节点间导航.
 * 这个列表中第一个节点的 previousSibling 属性是 null, 最后一个节点的 nextSibling 属性是 null.
 */
if (someNode.nextSibling === null) {
    alert("Last node in the parent's childNodes list.");
} else if (someNode.previousSibling === null) {
    alert("First node in the parent's childNodes list.");
}

/**
 * 父节点和它的第一个及最后一个子节点也有专门的属性: firstChild 和 lasChild 分别指向 childNodes 中的第一个和最后一个子节点.
 * 如果只有一个子节点, 则 firstChild 和 lastChild 指向同一个节点.
 * 如果没有子节点, 则 firstChild 和 lastChild 都是 null.
 */
let firstC = someNode.firstChild;
let lastC = someNode.lastChild;
console.log(firstC === someNode.childNodes[0]);
console.log(lastC === someNode.childNodes[someNode.childNodes.length - 1]);
