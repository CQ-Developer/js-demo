/**
 * 9.2.7 ownKeys()
 * 
 * ownKeys()捕获器会在Object.keys()及类似方法中被调用
 * 对应的反射API方法为Reflect.ownKeys()
 */
let myTarget = { foo: "hello" };

let proxy = new Proxy(myTarget, {
    ownKeys(target) {
        console.log("ownKeys()");
        return Reflect.ownKeys(...arguments);
    }
});

let result = Object.keys(proxy);
console.log(result);
