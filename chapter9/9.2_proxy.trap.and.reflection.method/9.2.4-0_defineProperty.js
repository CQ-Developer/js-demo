/**
 * 9.2.4 defineProperty()
 * 
 * defineProperty()捕获器会在Object.defineProperty()中被调用
 * 对应的反射API方法为Reflect.defineProperty()
 */
let myTarget = {};

let proxy = new Proxy(myTarget, {
    defineProperty(target, property, descriptor) {
        console.log(arguments);
        console.log("defineProperty()");
        return Reflect.defineProperty(...arguments);
    }
});

let result = Object.defineProperty(proxy, "foo", { value: "bar" });

console.log(result.foo);
console.log(myTarget.foo);
console.log(result.foo);

console.log(result === myTarget);
console.log(result === proxy);
