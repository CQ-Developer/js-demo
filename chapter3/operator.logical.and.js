// 逻辑与

let obj = { id: 1 };
let otherObj = { id: 2};
console.log('true && obj =', true && obj);
console.log('false && obj =', false && obj);
console.log('obj && otherObj =', obj && otherObj);
console.log('null && true =', null && true);
console.log('NaN && true =', NaN && true);
console.log('undefined && true =', undefined && true);

// 短路特性
// someUndeclaredVariable 并未定义
// 若改为 true 则报错 ReferenceError
let found = false;
let result = found && someUndeclaredVariable;
console.log(result);
