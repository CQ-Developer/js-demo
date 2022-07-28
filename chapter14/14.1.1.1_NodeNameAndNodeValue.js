/**
 * 14.1.1_1 nodeName 与 nodeValue
 * 
 * nodeName 与 nodeValue 保存着有关节点的信息.
 * 这两个属性的值完全取决于节点类型.
 * 在使用这两个属性前, 最好先校验节点类型.
 * 
 * 伪代码:
 * 先检查了节点是不是元素.
 * 如果是, 则将其 nodeName 的值赋给一个变量.
 * 对元素而言, nodeName 始终等于元素的标签名, 而 nodeValue 则始终为 null.
 */
if (someNode.nodeType == Node.ELEMENT_NODE) {
    let value = someNode.nodeName;
}
