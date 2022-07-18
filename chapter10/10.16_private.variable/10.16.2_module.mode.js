/**
 * 10.16.2 模块模式
 * 
 * 前面的模式通过自定义类型创建了私有变量和特权方法
 * 而下面讨论的模块模式, 则在一个单例对象上实现了相同的隔离和封装
 * 
 * 模块模式是在单例对象基础上加以扩展, 使其通过作用域链来关联私有变量和特权方法
 * 
 * 模块模式的样板代码如下
 */
let singleton = function() {
    // 私有变量
    let privateVariable = 10;

    // 私有方法
    function privateFunction() {
        return false;
    }

    // 特权/公有方法和属性
    return {
        publicProperty: true,
        publicMethod() {
            privateVariable++;
            return privateFunction();
        }
    };
}();

/**
 * 模块模式使用了匿名函数返回一个对象
 * 
 * 在匿名函数内部, 首先定义私有变量和私有函数
 * 之后, 创建一个要通过匿名函数返回的对象字面量
 * 这个对象字面量中只包含可以公开访问的属性和方法
 * 因为这个对象定义在匿名函数内部, 所以他的所有共有方法都可以访问同一个作用域的私有变量和私有函数
 * 
 * 本质上, 对象字面量定义了单例对象的公共接口
 * 
 * 如果单例对象需要进行某种初始化, 并且需要访问私有变量时, 那么可以采用这种模式:
 */
let application = function() {
    // 私有变量和私有函数
    let components = new Array();

    // 初始化
    // BaseComponent是什么并不重要
    // components.push(new BaseComponent());

    // 公共接口
    return {
        getComponentCount() {
            return components.length;
        },
        registerComponent(component) {
            if (typeof component == "object") {
                components.push(component);
            }
        }
    };
}();
