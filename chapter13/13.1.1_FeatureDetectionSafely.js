/**
 * 13.1.1 安全能力检测
 * 
 * 能力检测最有效的场景是检测能力是否存在的同时, 验证其是否能过够展现出预期的行为.
 * 之前的例子依赖测试对象的成员转换类型, 然后再确定它是否存在.
 * 虽然这样能够确定检测的对象成员存在, 但不能确定它就是你想要的.
 */
function isSortable(object) {
    // 不要这样做, 错误的能力检测, 只能检测到能力是否存在
    return !!object.sort;
}

/**
 * 上面的函数尝试通过检测对象上是否有sort()方法来确认它是否支持排序.
 * 问题在于, 只要这个对象上有一个sort属性, 这个函数就会返回true.
 */
let result = isSortable({ sort: true });

/**
 * 简单的测试一个属性存在并不代表这个对象就可以排序.
 * 更好的方式是检测sort是不是函数:
 */
function isSortable(object) {
    return typeof object.sort == "function";
}

/**
 * 进行能力检测时应该尽量使用typeof操作符, 但光有它还不够.
 * 尤其是某些宿主对象并不保证对typeof测试返回合理的值.
 * 最有名的例子就是IE.
 * 在多数浏览器中, 下面代码都会在docuemnt.createElement()存在时返回true
 * 
 * 但在IE8及更低版本, 这个函数会返回false.
 * 这是因为typeof document.createElement返回object而非function.
 * DOM对象时宿主对象, 而宿主对象在IE8及更低版本中时通过COM而非JS实现的.
 * 因此, document.createElement()函数被实现为COM对象.
 */
function hasCreateElement() {
    return typeof document.createElement == "function";
}
