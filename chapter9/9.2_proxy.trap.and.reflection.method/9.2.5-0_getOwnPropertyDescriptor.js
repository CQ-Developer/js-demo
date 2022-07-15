/**
 * 9.2.5 getOwnPropertyDescriptor()
 * 
 * getOwnPropertyDescriptor()捕获器会在Objet.getOwnPropertyDescriptor()中被调用
 * 对应的反射API方法为Reflect.getOwnPropertyDescriptor()
 */
let myTarget = { foo: "foo" };

let proxy = new Proxy(myTarget, {
    getOwnPropertyDescriptor(target, property) {
        console.log("// 参数target");
        console.log(target);

        console.log("// 参数property");
        console.log(property);

        console.log("getOwnPropertyDescriptor()");

        console.log("// 参数对象 arguments");
        console.log(arguments);
        
        return Reflect.getOwnPropertyDescriptor(...arguments);
    }
});

let result = Object.getOwnPropertyDescriptor(proxy, "foo");

console.log("// 调用结果");
console.log(result);
