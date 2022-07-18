/**
 * 10.16.3 模块怎强模式
 * 
 * 另一个利用模块模式的做法是在返回对象之前对其进行怎强
 * 这适合单例对象需要是某个特定类型的实例, 但又必须给它添加额外属性和方法的场景
 */
let singleton = function() {
    // 私有变量
    let privateVariable = 10;

    // 私有函数
    function privateFunction() {
        return false;
    }

    // 创建对象
    let object = new CustomType();

    // 添加特权/共有属性
    object.publicProperty = true;

    // 添加特权/共有方法
    object.publicMethod = function() {
        privateVariable++;
        return privateFunction();
    };

    // 返回对象
    return object;
}();

/**
 * 如果前一节的application对象必须是BaseComponent的实例, 那么就可以使用下面的代码来创建它
 */
let application = function() {
    // 私有变量和私有函数
    let components = new Array();

    // 初始化
    components.push(new BaseComponent());

    // 创建局部变量保存实例
    let app = new BaseComponent();

    // 公共接口
    app.getComponent = function() {
        return components.length;
    };

    // 公共接口
    app.registerComponent = function(component) {
        if (typeof component == "object") {
            components.push(component);
        }
    };

    // 返回实例
    return app;
}();
