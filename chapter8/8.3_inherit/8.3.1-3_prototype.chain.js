// 8.3.1 原型链

// 3.关于方法

// 子类有时候需要覆盖父类的方法, 或增加父类没有的方法
// 为此, 这些方法必须在原型赋值之后再添加到原型上

function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

// 继承SuperType
SubType.prototype = new SuperType();

// 新方法
SubType.prototype.getSubValue = function() {
    return this.subproperty;
};

// 覆盖已有的方法
SubType.prototype.getSuperValue = function() {
    return false;
};

// 重点在于上述两个方法都是在把原型赋值为SuperType的实例之后, 定义的
let instance = new SubType();
console.log(instance.getSuperValue());

// 另一个重点
// 以对象字面量方式创建原型方法会破坏之前的原型链
// 因为这相当于重写了原型链
SubType.prototype = {
    getSubValue() {
        return this.subproperty;
    },
    sonmeOtherMethod() {
        return false;
    }
};

instance = new SubType();
// TypeError: instance.getSuperValue is not a function
// console.log(instance.getSuperValue());
