/**
 * 9.2.8 getPrototypeOf()
 * 
 * getPrototypeOf()捕获器会在Object.getPrototypeOf()中被调用
 * 对应的反射API方法为Reflect.getPrototypeOf()
 */
let myTarget = {};

let proxy = new Proxy(myTarget, {
    getPrototypeOf(target) {
        console.log("getPrototype()");
        return Reflect.getPrototypeOf(...arguments);
    }
});

let result = Object.getPrototypeOf(proxy);
console.log(result);
