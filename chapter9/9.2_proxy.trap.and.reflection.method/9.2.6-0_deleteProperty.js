/**
 * 9.2.6 deleteProperty()
 * 
 * deleteProperty()捕获器会在delete操作符中被调用
 * 对应的反射API方法为Reflect.deleteProperty()
 */
let myTarget = { foo: "fooValue" };

let proxy = new Proxy(myTarget, {
    deleteProperty(target, property) {
        console.log("// 参数target");
        console.log(target);

        console.log("// 参数property");
        console.log(property);

        console.log("// 参数对象arguments");
        console.log(arguments);

        return Reflect.deleteProperty(...arguments);
    }
});

let result = delete proxy.foo;
console.log("// 返回值");
console.log(result);
