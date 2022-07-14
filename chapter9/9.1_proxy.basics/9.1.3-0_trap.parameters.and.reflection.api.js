/**
 * 9.1.3 捕获器参数和反射API
 * 
 * 所有捕获器都可以访问相应的参数, 基于这些参数可以重建被不会方法的原始行为
 * 比如, get()捕获器会接收到目标对象, 要查询的属性和代理对象三个参数
 */
const target = { foo: "bar" };
const handler = {
    get(trapTarget, property, recevier) {
        console.log(trapTarget === target);
        console.log(property);
        console.log(recevier === proxy);
    }
};

const proxy = new Proxy(target, handler);

proxy.foo;

/**
 * 有了这些参数, 就可以重建被捕获方法的原始行为
 */
const handlerA = {
    get(tar, prop, px) {
        return tar[prop];
    }
};

const proxyA = new Proxy(target, handlerA);

console.log(target.foo);
console.log(proxyA.foo);

/**
 * 实际上, 开发者并不需要手动重建原始行为, 而是可以通过调用全局Reflect对象上的同名方法来轻松重建
 * 
 * 处理程序对象中所偶可以捕获的方法都有对应的反射API方法
 * 这些方法与捕获器拦截的方法具有相同的名称和函数签名, 而且也具有与被拦截方法相同的行为
 * 因此, 使用反射API也可以像下面这样定义出空代理对象
 */
const handlerB = {
    get() {
        return Reflect.get(...arguments);
    }
};

const proxyB = new Proxy(target, handlerB);

console.log(target.foo);
console.log(proxyB.foo);

/**
 * 甚至还可以写的更简介
 */
const handlerC = {
    get: Reflect.get
};

const proxyC = new Proxy(target, handlerC);

console.log(target.foo);
console.log(proxyC.foo);

/**
 * 事实上, 如果真想创建一个可以捕获所有方法
 * 然后将每个方法转发给对应反射API的空代理
 * 那么甚至不需要定义处理器程序
 */
const proxyD = new Proxy(target, Reflect);

console.log(target.foo);
console.log(proxyD.foo);

/**
 * 反射API为开发者准备好了样板代码, 在此基础上开发者可以用最少的代码修改捕获器的方法
 * 比如, 下面的代码在某个属性被访问时, 会对返回的值进行一番修饰
 */
const targetE = {
    foo: "bar",
    baz: "qux"
};

const handlerE = {
    get(trapTarget, property, receiver) {
        let decoration = "";
        if (property === "foo") {
            decoration = "!!!";
        }
        return Reflect.get(...arguments) + decoration;
    }
};

const proxyE = new Proxy(targetE, handlerE);

console.log(targetE.foo);
console.log(proxyE.foo);

console.log(targetE.baz);
console.log(proxyE.baz);
