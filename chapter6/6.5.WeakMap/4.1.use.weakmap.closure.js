// 6.5.4 使用WeakMap

// 1. 私有变量
// WeakMap造就了在JS中实现真正私有变量的一种方式
// 私有变量会存储在WeakMap中, 以对象实例为键, 以私有成员的字典为值

// 对于之前的实现
// 外部代码只需要拿到对象实例的引用和WeakMap, 就可以取得"私有"变量
// 为了避免这种访问, 可以用一个闭包把WeakMap包装起来
// 这样就可以把WeakMap与外界完全隔离开
const User = (() => {
    const wm = new WeakMap();

    class User {
        constructor(id) {
            this.idProperty = Symbol("id");
            this.setId(id);
        }

        setPrivate(property, value) {
            const privateMembers = wm.get(this) || {};
            privateMembers[property] = value;
            wm.set(this, privateMembers);
        }

        getPrivate(property) {
            return wm.get(this)[property];
        }

        setId(id) {
            this.setPrivate(this.idProperty, id);
        }

        getId(id) {
            return this.getPrivate(this.idProperty);
        }
    }
    return User;
})();

// 这样就拿不到WeakMap中的键, 也就无法取得WeakMap中的值
// 虽然这防止了前面提到的访问, 但整个代码也完全陷入ES6之前的闭包私有变量模式
const user = new User(123);
console.log(user.getId());
user.setId(456);
console.log(user.getId());
