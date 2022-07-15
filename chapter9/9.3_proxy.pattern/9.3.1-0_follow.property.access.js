/**
 * 9.3.1 跟踪属性访问
 * 
 * 通过捕获get, set和has等操作, 可以知道对象属性什么时候被访问, 被查询
 * 把实现相应捕获器的某个对象代理放到应用中, 可以监控这个对象何时在何处被访问过
 */
let user = { name: "Jake" };

let proxy = new Proxy(user, {
    get(target, property, receiver) {
        console.log(`getting ${property}`);
    },
    set(target, property, value, receiver) {
        console.log(`setting ${property}=${value}`);
    }
});

proxy.name;
proxy.age = 27;
