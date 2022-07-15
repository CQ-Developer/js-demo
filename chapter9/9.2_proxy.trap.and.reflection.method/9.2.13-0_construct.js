/**
 * 9.2.13 construct()
 * 
 * construct()捕获器会在new操作符中被调用
 * 对应的反射API方法为Reflect.construct()
 */
let myTarget = function() {};

let proxy = new Proxy(myTarget, {
    construct(target, argArray, newTarget) {
        console.log("// target");
        console.log(target);

        console.log("// argArray");
        console.log(argArray);

        console.log("// newTarget");
        console.log(newTarget);

        console.log("// arguments");
        console.log(arguments);

        return Reflect.construct(...arguments);
    }
});

let result = new proxy();
console.log(result);
