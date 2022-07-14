/**
 * 9.2.1 get()
 * 
 * get()捕获器会在获取属性值的操作中被调用
 * 对应的反射API方法为Reflect.get()
 */
let target = {};

let proxy = new Proxy(target, {
    get(target, property, receiver) {
        console.log("get()");
        console.log(arguments);
        return Reflect.get(...arguments);
    }
});

proxy.foo;
