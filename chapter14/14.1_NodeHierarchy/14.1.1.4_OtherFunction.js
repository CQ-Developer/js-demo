/**
 * 14.1.1.4 其他方法
 * 
 * 所有节点类型还共享两个方法.
 * 第一个是 cloneNode(), 会返回与调用它的节点一摸一样的节点.
 * cloneNode() 方法接收一个布尔值参数, 表示是否深复制.
 * 在传入 true 参数时, 会进行深复制, 即复制节点及其整个子 DOM 树.
 * 如果传入 false, 则只会复制调用该方法的节点.
 * 复制返回的节点属于文档所有, 但尚未指定父节点, 所以可以成为孤儿节点.
 * 
 * 第二个方法是 normalize().
 * 这个方法唯一的任务就是处理文档子树中的文本节点.
 * 由于解析器实现的差异或 DOM 操作等原因, 可能会出现并不包含文本的文本节点, 或者文本节点之间互为同胞关系.
 * 在节点上调用 normalize() 方法会检测这个节点的所有后代, 从中搜索上述两种情形.
 * 如果发现空文本节点, 则将其删除; 如果两个同胞节点是相邻的, 则将其合并为一个文本节点.
 * 
 * <ul>
 *  <li>item 1</li>
 *  <li>item 2</li>
 *  <li>item 3</li>
 * </ul>
 */
let someNode = new Node(); // 伪代码

let deepList = someNode.cloneNode(true);
console.log(deepList.childNodes.length); // 3

let shallowList = someNode.cloneNode(false);
console.log(shallowList.childNodes.length); // 0
