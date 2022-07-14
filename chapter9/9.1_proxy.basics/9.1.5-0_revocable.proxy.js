/**
 * 9.1.5 可撤销代理
 * 
 * 有时候肯恩需要中断代理对象与目标对象之间的联系
 * 对于使用new Proxy()创建的普通代理来说, 这种联系会在代理对象的生命周期内一直持续存在
 * 
 * Proxy也暴露了revocable()方法
 * 这个方法支持撤销代理对象与目标对象的关联
 * 撤销代理操作是不可逆的
 * 撤销函数revoke()是幂等的, 调用多少次的结果都是一样的
 * 撤销代理之后再调用代理会抛出TypeError
 * 
 * 撤销函数和代理对象是在实例化同时生成的
 */
const target = { foo: "bar" };

const handler = {
    get() {
        return "intercepted";
    }
};

const { proxy, revoke } = Proxy.revocable(target, handler);

console.log(target.foo);
console.log(proxy.foo);

revoke();

// TypeError: Cannot perform 'get' on a proxy that has been revoked
console.log(proxy.foo);
