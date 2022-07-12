// 加法操作符

let result = 1 + 2;
console.log(`1 + 2 = ${result}`);

let n1 = NaN + 1;
console.log(`NaN + 1 = ${n1}`);

let n2 = Infinity + Infinity;
console.log(`Infinity + Infinity = ${n2}`);

let n3 = -Infinity + -Infinity;
console.log(`-Infinity + -Infinity = ${n3}`);

let n4 = -Infinity + Infinity;
console.log(`-Infinity + Infinity = ${n4}`);

let n5 = 0 + 0;
console.log(`0 + 0 = ${n5}`);

let n6 = +0 + +0;
console.log(`+0 + +0 = ${n6}`);

let n7 = -0 + +0;
console.log(`-0 + +0 = ${n7}`);

let n8 = -0 + -0;
console.log(`-0 + -0 = ${n8}`);

let n9 = '1' + '2';
console.log(`'1' + '2' = ${n9}`);

let n10 = 1 + '2';
console.log(`1 + '2' = ${n10}`);

let n11 = null + 1;
console.log(`null + 1 = ${n11}`);

let n12 = undefined + 1;
console.log(`undefined + 1 = ${n12}`);

let t1 = 5;
let t2 = 10;
let m1 = 'the number of 5 and 10 is ' + t1 + t2;
console.log(m1);
let m2 = 'the number of 5 and 10 is ' + (t1 + t2);
console.log(m2);
