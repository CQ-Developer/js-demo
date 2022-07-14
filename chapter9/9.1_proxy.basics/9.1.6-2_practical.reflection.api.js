/**
 * 9.1.6 使用反射API
 * 
 * 2.状态标记
 * 
 * 很多反射方法返回称作"状态标记"的布尔值, 表示意图执行的操作是否成功
 * 有时候, 状态标记比那些返回修改后的对象或抛出错误的反射API方法更有用
 */
const o = {};

try {
    Object.defineProperty(o, "foo", "bar");
} catch(e) {
    console.log("failure");
}

/**
 * 使用反射API对上面的代码进行重构
 * 
 * 在定义新属性时如果发生问题, Reflect.defineProperty()返回false, 而不是抛出错误
 * 因此使用这个反射方法可以重构上面代码
 * 
 * 以下反射方法都会提供状态标记
 * Reflect.defineProperty()
 * Reflect.preventExtensions()
 * Reflect.setPropertyOf()
 * Reflect.set()
 * Reflect.deleteProperty()
 */
if (Reflect.defineProperty(o, "foo", { value: "bar" })) {
    console.log("success");
} else {
    console.log("failure");
}
