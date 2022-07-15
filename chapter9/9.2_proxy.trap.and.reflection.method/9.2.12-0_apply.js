/**
 * 9.2.12 apply()
 * 
 * apply()捕获器会在调用函数时中被调用
 * 对应的反射API方法为Reflect.apply()
 */
let myTarget = (name) => {
    console.log(name);
};

let proxy = new Proxy(myTarget, {
    apply(target, thisArg, argArray) {
        console.log("// 参数target");
        console.log(target);

        console.log("// 参数thisArg");
        console.log(thisArg);

        console.log("// 参数argArray");
        console.log(argArray);
        
        console.log("// 参数对象arguments");
        console.log(arguments);

        return Reflect.apply(...arguments);
    }
});

proxy("Chen");
