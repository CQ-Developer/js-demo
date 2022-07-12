/**
 * 读取属性的特性
 * 
 * 使用Object.getOwnPropertyDescriptor()方法可以取得指定属性的描述符
 * 这个方法接收两个参数: 属性所在的对象, 描述符关联的属性名
 * 返回值是一个对象
 * 对于访问器属性包含: configurable, enumerable, get, set
 * 对于数据属性包含: configurable, enumerable, writable, value
 * 
 * ECMAScript2017新增了Object.getOwnPropertyDescriptors()静态方法
 * 这个方法实际上会在每个自有属性上调用Object.getOwnPropertyDescriptor()并在一个对象中返回它们
 */



// demo.1
let book = {};
Object.defineProperties(book, {
    year_: {
        value: 2017
    },
    edition: {
        value: 1
    },
    year: {
        get: function() {
            return this.year_;
        },
        set: function(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});

let descriptor1 = Object.getOwnPropertyDescriptor(book, "year_");
console.log(descriptor1.value);
console.log(descriptor1.configurable);
console.log(typeof descriptor1.get);

let decriptor2 = Object.getOwnPropertyDescriptor(book, "year");
console.log(decriptor2.value);
console.log(decriptor2.enumerable);
console.log(typeof decriptor2.get);

console.log(Object.getOwnPropertyDescriptors(book));
