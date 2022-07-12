/**
 * 访问器属性
 * 
 * [[Configurable]]
 * 默认: 所有直接定义在对象上的属性的该特性都是true
 * 意义:
 * 是否可以通过delete删除并重新定义
 * 是否可以修改它的特性
 * 是否可以把它改为数据属性
 * 
 * [[Enumerable]]
 * 默认: 所有直接定义在对象上的属性该特性都是true
 * 意义:
 * 是否可以通过for-in循环返回
 * 
 * [[Get]]
 * 默认: undefined
 * 意义:
 * 在读取属性时调用
 * 
 * [[Set]]
 * 默认: undefined
 * 意义:
 * 在写入属性时调用
 * 
 * 获取函数和设置函数不一定都要定义
 * 只定义获取函数意味着属性是只读的, 尝试修改属性会被忽略
 * 只有一个设置函数的属性是不能读取的
 */



// 访问器属性是不能直接定义的, 必须使用Object.defineProperty()
// 定义一个对象, 包含伪私有成员year_和公共成员edition
let book = {
    year_: 2017,
    edition: 1
};
Object.defineProperty(book, "year", {
    get() {
        return this.year_;
    },
    // 这是访问器属性的典型使用场景
    // 设置一个属性值会导致一些其它变化发生
    set(newValue) {
        if (newValue > 2017) {
            this.year_ = newValue;
            this.edition += newValue - 2017;
        }
    }
});
book.year = 2018;
console.log(book.edition);
