/**
 * 9.2.9 setPrototypeOf()
 * 
 * setPrototypeOf()捕获器会在Object.setPrototypeOf()中被调用
 * 对应的反射API方法为Reflect.setPrototypeOf()
 */
let myTarget = {};

let proxy = new Proxy(myTarget, {
    setPrototypeOf(target, prototype) {
        console.log("setPrototypeOf()");
        return Reflect.setPrototypeOf(...arguments);
    }
});

let result = Object.setPrototypeOf(proxy, Object);
console.log(result);
