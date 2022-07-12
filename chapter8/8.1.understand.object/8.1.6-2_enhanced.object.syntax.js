/**
 * 8.1.6 增强的对象语法
 * 
 * 2.可计算属性
 * 
 * 在引入可计算属性之前, 如果想使用变量的值作为属性, 那么必须先声明对象, 然后使用中括号语法来添加属性
 * 换句话说, 不能再对象字面量中直接动态命名属性
 * 
 * 有了可计算属性, 就可以在对象字面中完成动态属性赋值
 * 中括号包围的对象属性键告诉运行时将其作为JS表达式而不是字符串来求职
 * 
 * 因为被当作JS表达式求值, 所以可计算属性本身可以是复杂的表达式, 在实例化时再求值
 * 
 * 可计算属性表达式中抛出任何错误都会中断对象创建
 * 如果计算属性的表达式有副作用, 那就要小心了, 因为如果表达式抛出错误, 那么之前完成的计算是不能回滚的
 */

const nameKey = "name";
const ageKey = "age";
const jobKey = "job";

console.log(`
// 使用中括号语法访问变量值作为属性名`);
let personA = {};
personA[nameKey] = "Matt";
personA[ageKey] = 27;
personA[jobKey] = "Software engineer";
console.log(personA);

console.log(`
// 使用可计算属性在对象字面量中完成动态属性赋值`);
let personB = {
    [nameKey]: "Matt",
    [ageKey]: 27,
    [jobKey]: "Software engineer"
};
console.log(personB);

console.log(`
// 计算属性本身可以是复杂的表达式`);
let uniqueToken = 0;
function getUniqueKey(key) {
    return `${key}_${uniqueToken++}`;
}
let personC = {
    [getUniqueKey(nameKey)]: "Matt",
    [getUniqueKey(ageKey)]: 27,
    [getUniqueKey(jobKey)]: "Software engineer"
};
console.log(personC);
