// 按位非
let n1 = 25;
let n2 = ~n1;
console.log('~25 =', n2);

// 等同于按位非
// 但位运算的速度快很多
let n11 = 25;
let n22 = -n11 - 1;
console.log('-25 - 1 =', n22);

// 按位与
let andResult = 25 & 3;
console.log('25 & 3 =', andResult);

// 按位或
let orResult = 25 | 3;
console.log('25 | 3 =', orResult);

// 按位异或
let xorResult = 25 ^ 3;
console.log('25 ^ 3 =', xorResult);

// 左移 = x * 2的n次方
let oldValue = 2;
let newValue = oldValue << 5;
console.log('2 << 5 =', newValue);
console.log('-2 << 5 =', -2 << 5);

// 有符号右移
let goRight = 64;
let newGoRight = goRight >> 5;
console.log('64 >> 5 =', newGoRight);

// 无符号右移
let n3 = 64;
let n33 = n3 >>> 5;
console.log('64 >>> 5 =', n33);
let n4 = -64;
let n44 = n4 >>> 5;
console.log('-64 >>> 5 =', n44);
