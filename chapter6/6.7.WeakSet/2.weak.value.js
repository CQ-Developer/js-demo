// 6.7.2 弱值

// WeakSet中weak意思是: 集合中的值没有被正式引用, 不会组织垃圾回收

// 在add方法结束后, 空对象将被垃圾回收
// 因为空对象没有任何外部引用, 而在WeakSet内部不算是正式的引用
const ws = new WeakSet();
ws.add({});

// 在add方法结束后, 空对象不会被垃圾回收, 因为container对象保持这对此对象的引用
// 如果调用removeReference方法销毁对空对象的引用, 此对象将被垃圾回收
const container = {
    val: {}
};

ws.add(container.val);

function removeReference() {
    container.val = null;
}
