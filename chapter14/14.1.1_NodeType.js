/**
 * 14.1.1 Node类型
 * 
 * DOM Level 1 描述了名为 Node 的接口, 这个接口是所有 DOM 节点类型都必须实现的.
 * Node 接口在 JS 中被实现为 Node 类型, 在除 IE 之外的所有浏览器中都可以直接访问这个类型.
 * 在 JS 中, 所有节点类型都继承 Node 类型, 因此所有类型都共享相同的基本属性和方法.
 * 
 * 每个节点都有 nodeType 属性, 表示该节点的类型. 节点类型由定义在 Node 类型上的 12 个数值常量表示.
 */
console.log(Node.ELEMENT_NODE);
console.log(Node.ATTRIBUTE_NODE);
console.log(Node.CDATA_SECTION_NODE);
console.log(Node.ENTITY_REFERENCE_NODE);
console.log(Node.ENTITY_NODE);
console.log(Node.PROCESSING_INSTRUCTION_NODE);
console.log(Node.COMMENT_NODE);
console.log(Node.DOCUMENT_NODE);
console.log(Node.DOCUMENT_TYPE_NODE);
console.log(Node.DOCUMENT_FRAGMENT_NODE);
console.log(Node.NOTATION_NODE);

/**
 * 节点类型可以通过与这些常量比较来确定.
 * 
 * 比较 someNode.nodeType 与 Node.ELEMENT_NODE 常量.
 * 如果两者相等, 则意味着 someNode 是一个元素节点.
 */
function isEllementNode(node) {
    return node.nodeType == Node.ELEMENT_NODE;
}
