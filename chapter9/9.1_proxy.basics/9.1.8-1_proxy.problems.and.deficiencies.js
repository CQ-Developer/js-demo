/**
 * 9.1.8 代理的问题与不足
 * 
 * 1.代理中的this
 * 
 * 代理潜在的一个问题来源是this值
 * 我们知道, 方法中的this通常指向调用这个方法的对象
 */
let target = {
    thisValEqualsProxy() {
        return this === proxy;
    }
};

let proxy = new Proxy(target, {});

console.log(target.thisValEqualsProxy());
console.log(proxy.thisValEqualsProxy());

/**
 * 从直觉上讲, 这样完全没问题: 调用代理上的任何方法, 比如proxy.outerMethod()
 * 而这个方法进而又会调用另一个方法, 比如this.innerMethod(), 实际上都会调用proxy.innerMethod()
 * 
 * 多数情况下, 这是符合预期的行为
 * 可是, 如果目标对象依赖于对象表示, 那就可能碰到意料之外的问题
 * 
 * WeakMap保存私有变量的例子
 */
let wm = new WeakMap();

class User {
    constructor(userId) {
        wm.set(this, userId);
    }

    set id(userId) {
        wm.set(this, userId);
    }

    get id() {
        return wm.get(this);
    }
}

/**
 * 由于这个实现依赖于User实例的对象标识
 * 在这个实例被代理的情况下就会出现问题
 */
let user = new User(123);
console.log(user.id);

let userInstanceProxy = new Proxy(user, {});
console.log(userInstanceProxy.id);

/**
 * 因为User实例一开始使用目标对象作为WeakMap的键, 代理对象却尝试从自身取得这个实例
 * 要解决这个问题, 就需要重新配置代理, 把代理User实例改为代理User类本身
 * 之后再创建代理的实例就会以代理实例作为WeakMap的键了
 */
let UserClassProxy = new Proxy(User, {});
let proxyUser = new UserClassProxy(456);
console.log(proxyUser.id);
