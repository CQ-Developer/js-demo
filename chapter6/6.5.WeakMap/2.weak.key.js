// 6.5.2 弱键

// weak表示WeakMap中的键是"弱弱地"拿着的
// 这些键不属于正式的引用, 不会阻止垃圾回收
// 注意WeakMap中值的引用并不是"弱弱地"拿着的
// 只要键存在, 键值对就会存在于WeakMap中, 并被当作对值的引用, 因此就不会当作垃圾回收

// set()方法初始化了一个新对象并将它用作一个字符串的键
// 因为没有指向这个对象的其他引用, 所以当这行代码执行完毕后, 这个对象键就会被当作垃圾回收掉
// 然后这个键值对就从WeakMap中消失了, 使其成为一个空WeakMap
// 因为值也没有被引用, 所以这个键值对被破坏以后, 值本身也会成为垃圾回收的目标
const wm = new WeakMap();
wm.set({}, "val");

// container对象维护着对WeakMap键的引用
// 因此键不会成为垃圾回收的目标
// 如果调用removeReference()方法
// 就会摧毁键的最后一个引用
// 垃圾回收程序就可以把这个键值对清理掉
const container = {
    key: {}
};
wm.set(container.key, "val");
function removeReference() {
    container.key = null;
}
