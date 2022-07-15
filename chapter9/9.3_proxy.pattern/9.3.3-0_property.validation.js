/**
 * 9.3.3 属性验证
 * 
 * 因为所有赋值操作都会触发set()捕获器
 * 所以可以根据所赋的值决定是否允许
 */
let target = { onlyNumberGoHere: 0 };

let proxy = new Proxy(target, {
    set(target, property, value, receiver) {
        if (typeof value !== "number") {
            return false;
        } else {
            return Reflect.set(...arguments);
        }
    }
});

proxy.onlyNumberGoHere = 1;
console.log(proxy.onlyNumberGoHere);

proxy.onlyNumberGoHere = "2";
console.log(proxy.onlyNumberGoHere);
