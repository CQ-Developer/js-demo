// 相等操作符
// 等于和不等于

let n1 = true == 1;
console.log(`true == 1 -> ${n1}`);

let n2 = false == 0;
console.log(`false == 0 -> ${n2}`);

let n3 = '3' == 3;
console.log(`'3' == 3 -> ${n3}`);

let n4 = '' == 0;
console.log(`'' == 0 -> ${n4}`);

let n5 = 'a' == 97;
console.log(`'a' == 97 -> true`);

let o1 = {};
let n6 = o1 == 3;
console.log(`o1 = ${o1}, o1 == 3 -> ${n6}`);
let n7 = o1 != 3;
console.log(`o1 = ${o1}, o1 != 3 -> ${n7}`);

let o2 = {
    valueOf() {
        return 3;
    }
};
let n8 = o2 == 3;
console.log(`o2 = ${o2}, o2 == 3 -> ${n8}`);
let n9 = o2 != 3;
console.log(`o2 = ${o2}, o2 != 3 -> ${n9}`);

let o3 = {
    toString() {
        return '3';
    }
};
let n10 = o3 == 3;
console.log(`o3 = ${o3}, o3 == 3 -> ${n10}`);
let n11 = o3 != 3;
console.log(`o3 = ${o3}, o3 != 3 -> ${n11}`);

let n12 = null == undefined;
console.log(`null == undefined -> ${n12}`);

let n13 = null == 1;
console.log(`null == 1 -> ${n13}`);

let n14 = null == 0;
console.log(`null == 0 -> ${n14}`);

let n15 = NaN == 0;
console.log(`NaN == 0 -> ${n15}`);

let n16 = NaN != 0;
console.log(`NaN != 0 -> ${n16}`);

let n17 = NaN == NaN;
console.log(`NaN == NaN -> ${n17}`);

let n18 = NaN != NaN;
console.log(`NaN != NaN -> ${n18}`);

class C {};
let o4 = new C();
let o5 = o4;
let n19 = o4 == o5;
console.log(`o4 == o5 -> ${n19}`);

let o6 = new C();
let n20 = o4 == o6;
console.log(`o4 == o6 -> ${n20}`);
