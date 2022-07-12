// 6.5.4 使用WeakMap

// 1. 私有变量
// WeakMap造就了在JS中实现真正私有变量的一种方式
// 私有变量会存储在WeakMap中, 以对象实例为键, 以私有成员的字典为值
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

    getId() {
        return this.getPrivate(this.idProperty);
    }
}

const user = new User(123);
console.log(user.getId());
user.setId(456);
console.log(user.getId());

// 并不是真正私有的
console.log(wm.get(user)[user.idProperty]);
