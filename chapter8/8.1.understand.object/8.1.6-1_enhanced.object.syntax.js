/**
 * 8.1.6 增强的对象语法
 * 
 * 1.属性简写
 * 
 * 在给对象添加变量的时候, 开发者经常会发现属性名和变量名是一样的
 * 为此, 简写属性名语法出现了
 * 简写属性名只要使用变量名就会自动被解释为同名属性的键
 * 如果没有找到变量名, 则会抛出ReferenceError
 * 代码压缩程序会在不同作用域保留属性名, 以防止找不到引用
 * 在这里, 即使参数标识符只现定于函数作用域, 编译器也会保留初始的name标识符
 * 如果使用Google Closure编译器压缩, 那么函数参数会被缩短, 而属性名不变
 */

console.log(`
// 属性名和变量名同名, 原始语法`);
let name = "Matt";
let personA = {
    name: name
};
console.log(personA);

console.log(`
// 属性名和变量名同名, 简写`);
let personB = { name };
console.log(personB);

console.log(`
// 代码压缩程序会在不同作用域保留属性名`);
function makePerson(name) {
    return { name };
}
let personC = makePerson("Matt");
console.log(personC.name);

console.log(`
// 使用Google Clousure编译器压缩, 那么函数参数会被缩短, 而属性名不变`);
function makePersonB(a) {
    return { name: a };
}
let personD = makePersonB("Matt");
console.log(personD.name);
