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
