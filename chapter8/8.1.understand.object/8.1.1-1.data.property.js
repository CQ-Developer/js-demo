/**
 * 数据属性
 * 
 * [[Configurable]] 默认true
 * 表示属性是否可以通过delete删除并重新定义
 * 是否可以修改它的特性
 * 是否可以把它改为访问属性
 * 
 * [[Enumerable]] 默认true
 * 表示属性是否可以通过for-in循环返回
 * 
 * [[Writable]] 默认true
 * 表示属性的值是否可以被修改
 * 
 * [[Value]] 默认undefined
 * 包含属性实际的值
 * 读取和写入属性值的位置
 * 
 * 在调用Object.defineProperty()时, configurable, enumerable, writable的值如果不指定, 则默认为false
 * 多数情况下, 可能都不需要Object.defineProperty()提供的这些强大的设置
 * 但要理解JS对象, 就要理解这些概念
 */



// demo.1
console.log(`
// 尝试修改一个只读属性
// 修改行为不会生效`);

// 定义对象
let person = {};

// 通过Object.defineProperty()定义属性
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
});
console.log(person.name);

// 修改属性name
// name属性是一个只读属性
// 非严格模式下, 修改行为被忽略
// 严格模式下, 修改行为会抛出错误
person.name = "Greg";
console.log(person.name);



// demo.2
console.log(`
// 尝试删除一个不可配置属性
// 删除行为不会生效`);

let personA = {};
Object.defineProperty(personA, "name", {
    value: "Nicholas",
    configurable: false
});
console.log(personA.name);

// 删除属性name
// name属性是一个不可配置属性, 无法删除
// 非严格模式下, 删除行为会被忽略
// 严格模式下, 删除行为会抛出错误
delete personA.name;
console.log(personA.name);




// demo.3
console.log(`
// 尝试修改一个不可配置属性的属性
// 修改属性行为抛出错误`);

let personB = {};
Object.defineProperty(personB, "name", {
    configurable: false,
    value: "Nicholas"
});

// 抛出错误
// 一个属性被定义为不可配置之后, 就不能再便会可配置的了
// 再次调用Object.defineProperty()并修改任何非writable属性会导致错误
Object.defineProperty(personB, "name", {
    configurable: true,
    value: "Nicholas"
});
