/**
 * 8.1.5 对象标识及相等判定
 * 
 * 在ES6之前有些特殊情况即使是===操作符也无能为力
 * 为了改善这种情况, ES6规范新增了Object.is(), 这个方法与===很像, 但同时也考虑到了特殊边界情形
 */

console.log(`
// 这些是 === 符合预期的情况`);
console.log(true === 1);
console.log({} === {});
console.log("2" === 2);

console.log(`
// 这些情况在不同JavaScript引擎中表现不同, 但仍被认为相等`);
console.log(+0 === -0);
console.log(+0 === 0);
console.log(-0 === 0);

console.log(`
// 要确定NaN的相等性, 必须使用isNaN()`);
console.log(NaN === NaN);
console.log(isNaN(NaN));

console.log(`
// Object.is()方法`);
console.log(Object.is(true, 1));
console.log(Object.is({}, {}));
console.log(Object.is("2", 2));

console.log(`
// 正确0, -0, +0相等/不等判定`);
console.log(Object.is(+0, -0));
console.log(Object.is(+0, 0));
console.log(Object.is(-0, 0));

console.log(`
// 正确NaN相等判定`);
console.log(Object.is(NaN, NaN));

// 要检查超过两个值, 递归地利用相等性传递即可
function recursivelyCheckEqual(x, ...rest) {
    return Object.is(x, rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest));
}
