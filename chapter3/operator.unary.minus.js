// 一元减操作符

let num = 25;
console.log(-num);

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
console.log(-s1);
console.log(-s2);
console.log(-s3);
console.log(-b);
console.log(-f);
console.log(-o);
