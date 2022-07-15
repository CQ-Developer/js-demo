/**
 * 9.2.3 隐藏属性
 * 
 * 代理的内部实现对外部代码是不可见的
 * 因此要隐藏目标对象上的属性也轻而易举
 */
let hiddenProperties = ["foo", "bar"];

let targetObject = {
    foo: 1,
    bar: 2,
    baz: 3
};

let proxy = new Proxy(targetObject, {
    get(target, property, receiver) {
        if (hiddenProperties.includes(property)) {
            return undefined;
        } else {
            return Reflect.get(...arguments);
        }
    },
    has(target, property) {
        if (hiddenProperties.includes(property)) {
            return false;
        } else {
            return Reflect.has(...arguments);
        }
    }
});

console.log("// get()");
console.log(proxy.foo);
console.log(proxy.bar);
console.log(proxy.baz);

console.log("// has()");
console.log("foo" in proxy);
console.log("bar" in proxy);
console.log("baz" in proxy);
