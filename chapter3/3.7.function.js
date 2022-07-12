// 函数
function sayHi(name, message) {
    console.log(`hello ${name}, ${message}`);
}
sayHi('Nicholas', 'how are you today?');

// 通过 return 表示函数有返回值
function sum(n1, n2) {
    return n1 + n2;
}
const r1 = sum(1, 2);
console.log(`1 + 2 = ${r1}`);

function diff(n1, n2) {
    if(n1 < n2) {
        return n2 - n1;
    }
    else {
        return n1 - n2;
    }
}
const r2 = diff(13, 22);
console.log(`diff between 13 and 22 is ${r2}`);

function voidFunction(name) {
    console.log(`print in void function : ${name}`);
}
const r3 = voidFunction('chen');
console.log(`return from void function : ${r3}`);
