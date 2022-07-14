/**
 * 9.2.2 set()
 * 
 * set()捕获器会在设置属性值的操作中被调用
 * 对应的反射API方法为Reflect.set()
 */
let target = { id: 1 };

let proxy = new Proxy(target, {
    set(target, property, value, receiver) {
        console.log(arguments);
        console.log("set()");
        return Reflect.set(...arguments);
    }
});

proxy.foo = "bar";
