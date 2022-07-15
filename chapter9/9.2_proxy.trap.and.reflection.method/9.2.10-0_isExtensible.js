/**
 * 9.2.10 isExtensible()
 * 
 * isExtensible()捕获器会在Object.isExtensible()中被调用
 * 对应的反射API方法为Reflect.isExtensible()
 */
let myTarget = {};

let proxy = new Proxy(myTarget, {
    isExtensible(target) {
        console.log("isExtensible()");
        return Reflect.isExtensible(...arguments);
    }
});

let result = Object.isExtensible(proxy);
console.log(result);
