/**
 * 9.2.3 has()
 * 
 * has()捕获器会在in操作符中被调用
 * 对应的反射API方法为Relfect.has()
 */
let target = {};

let proxy = new Proxy(target, {
    has(target, property) {
        console.log(arguments);
        console.log("has()");
        return Reflect.has(...arguments);
    }
});

let result = "foo" in proxy;
console.log(result);
