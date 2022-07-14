/**
 * 9.1.4 捕获器不变式
 * 
 * 使用捕获器几乎可以改变所有基本方法的行为, 但也不是没有限制
 * 根据ECMAScript规范, 每个捕获的方法都知道目标对象上下文, 捕获函数签名, 而捕获处理程序的行为必须遵循"捕获器不变式"
 * 捕获器不变式因为方法不同而异, 但通常都会防止捕获器定义出现过于反常的行为
 */

/**
 * 如果目标对象有一个不可配置且不可写的数据属性
 * 那么在捕获器返回一个与该属性不同的值时, 会抛出TypeError
 */
const target = {};
Object.defineProperty(target, "foo", {
    configurable: false,
    writable: false,
    value: "bar"
});

const handler = {
    get() {
        return "qux";
    }
};

const proxy = new Proxy(target, handler);

// TypeError: 'get' on proxy: property 'foo' is a read-only and non-configurable data property on the proxy target 
// but the proxy did not return its actual value (expected 'bar' but got 'qux')
console.log(proxy.foo);
