/**
 * 9.3.5 数据绑定与可观察对象
 * 
 * 通过代理可以把运行时中原本不想管的部分联系到一起
 * 这样就可以实现各种模式, 从而让不同的代码互操作
 * 
 * 比如, 可以将被代理的类绑定到一个全局实例集合, 让所有创建的实例都被添加到这个集合中
 */
let userList = [];

class User {
    constructor(name) {
        this.name_ = name;
    }
}

let UserProxy = new Proxy(User, {
    construct(target, argArray, newTarget) {
        const newUser = Reflect.construct(...arguments);
        userList.push(newUser);
        return newUser;
    }
});

new UserProxy("John");
new UserProxy("Jacob");
new UserProxy("Jingleheimerschmidt");

console.log(userList);

/**
 * 另外, 还可以把集合绑定到一个事件分派程序
 * 每次插入新实例时都会发送消息
 */
function emit(newValue) {
    console.log(newValue);
}

let emitProxy = new Proxy(userList, {
    set(target, property, value, receiver) {
        const result = Reflect.set(...arguments);
        if (result) {
            emit(Reflect.get(target, property, receiver));
        }
        return result;
    }
});

emitProxy.push("John");
emitProxy.push("Jacob");
