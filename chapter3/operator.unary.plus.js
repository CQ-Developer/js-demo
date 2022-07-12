// 一元加减操作符

let num = 25;
num = +num;
console.log(num);

let s1 = '01';
let s2 = '1.1';
let s3 = 'z';
let b = false;
let f = 1.1;
let o = {
    valueOf() {
        return -1;
    }
};
s1 = +s1;
s2 = +s2;
s3 = +s3;
b = +b;
f = +f;
o = +o;
console.log(s1);
console.log(s2);
console.log(s3);
console.log(b);
console.log(f);
console.log(o);
