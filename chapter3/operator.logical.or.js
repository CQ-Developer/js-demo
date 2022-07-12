// 逻辑或
let obj1 = { id: 1 };

// 如果第一个操作数是对象，则返回第一个操作数
console.log('obj1 || true =', obj1 || true);
console.log('obj1 || false =', obj1 || false);

// 如果第一个操作数是false，则返回第二个操作数
console.log('false || obj1 =', false || obj1);
console.log('true || obj1 =', true || obj1);

// 如果两个操作数都是对象则返回第一个操作数
let obj2 = { id: 2 };
console.log('obj1 || obj2 =', obj1 || obj2);
console.log('obj2 || obj1 =', obj2 || obj1);

// 如果两个操作数都是null则返回null
console.log('null || null =', null || null);
console.log('null || obj1 =', null || obj1);
console.log('null || 1 =', null || 1);
console.log('null || "" =', null || '');
console.log('null || undefined =', null || undefined);

// 如果两个操作数都是NaN则返回NaN
console.log('NaN || NaN =', NaN || NaN);
console.log('NaN || 1 =', NaN || 1);
console.log('NaN || obj1 =', NaN || obj1);
console.log('NaN || "t" =', NaN || 't');

// 如果两个操作数都是undefined则返回undefined
console.log('undefined || undefined =', undefined || undefined);
console.log('undefined || 1 =', undefined || 1);
console.log('undefined || obj1 =', undefined || obj1);
console.log('undefined || "t" =', undefined || 't');
console.log('undefined || null =', undefined || null);

// 短路特性
// nothing 并未定义
// 若改为 false 则报错 ReferenceError
// 可以使用此特性位变量赋值，防止出现null或undefined
let found = true;
let result = found || nothing;
console.log('result =', result);
