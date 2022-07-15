/**
 * 9.2.11 prventExtensions()
 * 
 * prventExtensions()捕获器会在Object.prventExtensions()中被调用
 * 对应的反射API方法为Reflect.prventExtensions()
 */
let myTarget = {};

let proxy = new Proxy(myTarget, {
    preventExtensions(target) {
        console.log("preventExtensions()");
        return Reflect.preventExtensions(...arguments);
    }
});

let result = Object.preventExtensions(proxy);
console.log(result);
