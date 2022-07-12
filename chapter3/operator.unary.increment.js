// 递增 递减

let age = 29;

++age;
console.log(age);
--age;
console.log(age);

let anotherAge = --age + 2;
console.log(age);
console.log(anotherAge);

let num1 = 2;
let num2 = 20;
let num3 = --num1 + num2;
let num4 = num1 + num2;
console.log(num3);
console.log(num4);

num1 = 2;
num2 = 20;
num3 = num1-- + num2;
num4 = num1 + num2;
console.log(num3);
console.log(num4);

let s1 = '2';
let s2 = 'z';
let b = false;
let f = 1.1;
let o = {
    valueOf() {
        return -1;
    }
};
s1++;
s2++;
b++;
f--;
o--;
console.log(s1);
console.log(s2);
console.log(b);
console.log(f);
console.log(o);
