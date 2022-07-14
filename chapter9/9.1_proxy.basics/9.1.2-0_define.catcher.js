/**
 * 9.1.2 定义捕获器
 * 
 * 使用代理的主要目的是可以定义捕获器
 * 捕获器就是在处理程序对象中定义的"基本操作的拦截器"
 * 每个处理程序对象可以包含零个或多个捕获器, 每个捕获器都对应一种基本操作, 可以直接或间接在代理对象上调用
 * 每次在代理对象上调用这些基本操作时, 代理可以在这些操作传播到目标对象之前先调用捕获器函数, 从而拦截并修改相应的行为
 */
const target = { foo: "bar" };
const handler = {
    /**
     * 捕获器在处理程序对象中以方法名为键
     */
    get() {
        return "handler override";
    }
};

const proxy = new Proxy(target, handler);

/**
 * 当通过代理对象执行get()操作时, 就会触发定义的get()捕获器
 * 当然, get()不是ECMAScript对象可以调用的方法
 * 这个操作在JavaScript代码中可以通过多种形式触发并被get()捕获器拦截到
 * 只有在代理对象上执行这些操作才会触发捕获器, 在目标对象上执行这些操作仍然会产生正常行为
 */
console.log(target.foo);
console.log(proxy.foo);

console.log(target["foo"]);
console.log(proxy["foo"]);

console.log(Object.create(target)["foo"]);
console.log(Object.create(proxy)["foo"]);
