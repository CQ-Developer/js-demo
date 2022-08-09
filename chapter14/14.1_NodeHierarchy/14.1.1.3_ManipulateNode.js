/**
 * 14.1.1.3 操纵节点
 * 
 * 因为所有关系指针都是只读的, 所以 DOM 又提供了一些操纵节点的方法.
 * 最常用的方法是 appendChild(), 用于在 childNodes 列表末尾添加节点.
 * 添加新节点会更新相关的关系指针, 包括父节点和之前的最后一个子节点.
 * 添加新节点会更新相关的关系指针, 包括父节点和之前的最后一个子节点.
 * appendChild() 方法返回新添加的节点.
 */
let someNode = new Node(); // 伪代码
let newNode = new Node();  // 伪代码

let returnNodeA = someNode.appendChild(newNode);
console.log("returnNodeA == newNode");        //true
console.log("someNode.lastChild == newNode"); //true

/**
 * 如果把文档中已经存在的节点传给 appendChild(), 则这个节点会从之前的位置被移动到新位置.
 * 即使 DOM 数通过各种关系指针维系, 一个节点也不会在文档中同时出现在两个或多个地方.
 * 因此, 如果调用 appendChild() 传入父节点的第一个子节点, 则这个节点会成为父节点的最后一个节点.
 */
let returnNodeB = someNode.appendChild(someNode.firstChild);
console.log(returnNodeB == someNode.firstChild); // false
console.log(returnNodeB == someNode.lastChild);  // true

/**
 * 如果想把节点放到 childNodes 中的特定位置而不是末尾, 则可以使用 insertBefore() 方法.
 * 这个方法接收两个参数: 要出入的节点和参照节点.
 * 如果参照节点是 null, 则 insertBefore() 与 appendChild() 效果相同.
 */
let returnNodeC = someNode.insertBefore(newNode, null);
console.log(newNode == someNode.lastChild); // true

// 作为新的第一个子节点插入
let returnNodeD = someNode.insertBefore(newNode, someNode.firstChild);
console.log(returnNodeD == newNode);         // true
console.log(newNode == someNode.firstChild); // true

// 插入最后一个子节点前面
let returnNodeE = someNode.insertBefore(newNode, someNode.lastChild);
console.log(newNode == someNode.childNodes[someNode.childNodes.length - 2]); // true

/**
 * replaceChild() 方法接收两个参数: 要插入的节点和要替换的节点.
 * 要替换的节点会被返回并从文档树中完全移除, 要出入的节点会取而代之.
 * 
 * 使用 replaceChild() 插入一个节点后, 所有关系指针都会从被替换的节点复制过来.
 * 虽然被替换的节点从技术上说仍然会被同一个文档所拥有, 但文档中已经没有它的位置.
 */
let rpA = someNode.replaceChild(newNode, someNode.firstChild); // 替换第一个子节点
let rpB = someNode.replaceChild(newNode, someNode.lastChild);  // 替换最后一个子节点

/**
 * 要移除节点而不是替换节点, 可以使用 removeChild() 方法.
 * 这个方法接收一个参数, 即要移除的节点.
 * 被移除的节点会被返回.
 * 
 * 与 replaceChild() 方法一样, 通过 removeChild() 被移除的节点从技术上说仍然被同一个文档所拥有,
 * 但文档中已经没有它的位置.
 */
let rmA = someNode.removeChild(someNode.firstChild); // 删除第一个子节点
let rmB = someNode.removeChild(someNode.lastChild);  // 删除最后一个子节点
