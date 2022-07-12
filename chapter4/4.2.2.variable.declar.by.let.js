// let - 块级作用域

// var 声明的迭代变量会泄露到外部
for(var i = 0; i < 10; i++) {}
console.log(`i = ${i}`);

// ReferenceError: j is not defined
for(let j = 0; j < 10; j++) {}
console.log(`j = ${j}`);
