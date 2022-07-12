// 减法操作符

let result = 2 - 1;
console.log(`2 - 1 = ${result}`);

let n1 = 2 -NaN;
console.log(`2 - NaN = ${n1}`);

let n2 = Infinity - Infinity;
console.log(`Infinity - Infinity = ${n2}`);

let n3 = Infinity - -Infinity;
console.log(`Infinity - -Infinity = ${n3}`);

let n4 = -Infinity - Infinity;
console.log(`-Infinity - Infinity = ${n4}`);

let n5 = +0 - +0;
console.log(`+0 - +0 = ${n5}`);

let n6 = +0 - -0;
console.log(`+0 - -0 = ${n6}`);

let n7 = -0 - -0;
console.log(`-0 - -0 = ${n7}`);

let n8 = '3' - 1;
console.log(`'3' - 1 = ${n8}`);

let n9 = 'h' - 1;
console.log(`'h' - 1 = ${n9}`);

let n10 = true - 1;
console.log(`true - 1 = ${n10}`);

let n11 = false - 1;
console.log(`false - 1 = ${n11}`);

let n12 = null - 1;
console.log(`null - 1 = ${n12}`);

let n13 = undefined - 1;
console.log(`undefined - 1 = ${n13}`);

let o1 = { id: 1 };
let n14 = 8 - o1;
console.log(`o1 = ${o1}, 8 - o1 = ${n14}`);

let o2 = {
    valueOf() {
        return 1;
    }
};
let n15 = 8 - o2;
console.log(`o2 = ${o2}, 8 - o2 = ${n15}`);

let o3 = {
    toString() {
        return '1';
    }
};
let n16 = 7 - o3;
console.log(`o3 = ${o3}, 7 - o3 = ${n16}`);

let n17 = '' - 1;
console.log(`'' - 1 = ${n17}`);
