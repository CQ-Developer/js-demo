/**
 * 9.3.4 函数与构造函数参数验证
 * 
 * 跟保护和验证对象属性类似, 也可以对函数和构造函数参数进行审查
 * 比如, 可以让函数只接收某种类型的值
 */
function median(...nums) {
    return nums.sort()[Math.floor(nums.length / 2)];
}

let proxy = new Proxy(median, {
    apply(target, thisArg, argArray) {
        for (const arg of argArray) {
            if (typeof arg !== "number") {
                throw "non-number argument provided";
            }
        }
        return Reflect.apply(...arguments);
    }
});

// console.log(proxy(4, "7", 1));
console.log(proxy(4, 7, 1));

/**
 * 类似的, 可以要求实例化时必须给构造函数传参
 */
class User {
    constructor(id) {
        this.id_ = id;
    }
}

let UserProxy = new Proxy(User, {
    construct(target, argArray, newTarget) {
        if (argArray[0] === undefined) {
            throw "User cannot be instantiated without id";
        }
        return Reflect.construct(...arguments);
    }
});

// new UserProxy();
new UserProxy(1);