// 关系操作符

let n1 = 5 > 3;
console.log(`5 > 3 = ${n1}`);

let n2 = 5 < 3;
console.log(`5 < 3 = ${n2}`);

let n3 = 'a' > 'b';
console.log(`'a' > 'b' = ${n3}`);

let n4 = '1' < 3;
console.log(`'1' < 3 = ${n4}`);

let o1 = { id: 0 };
let n5 = o1 > 1;
console.log(`o1 = ${o1}, o1 > 1 = ${n5}`);

let o2 = {
    valueOf() {
        return 13;
    }
};
let n6 = o2 > 10;
console.log(`o2 = ${o2}, o2 > 10 = ${n6}`);

let o3 = {
    toString() {
        return '10';
    }
};
let n7 = o3 < 9;
console.log(`o3 = ${o3}, o3 < 9 = ${n7}`);

let n8 = true > 0;
console.log(`true > 0 = ${n8}`);

let n9 = false < 1;
console.log(`false < 1 = ${n9}`);

let n10 = 'Brick' < 'alphabet';
console.log(`'Brick' < 'alphabet' = ${n10}`);

let n11 = 'Brick'.toLowerCase() < 'alphabet'.toLowerCase();
console.log(`'Brick'.toLowerCase() < 'alphabet'.toLowerCase() = ${n11}`);

let n12 = '23' < '3';
console.log(`'23' < '3' = ${n12}`);

let n13 = '23' < 3;
console.log(`'23' < 3 = ${n13}`);

let n14 = 'a' < 3;
console.log(`'a' < 3 = ${n14}`);

let n15 = NaN < 3;
console.log(`NaN < 3 = ${n15}`);

let n16 = NaN >= 3;
console.log(`NaN >= 3 = ${n16}`);

