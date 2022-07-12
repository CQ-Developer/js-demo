// const - 常量声明

const o1 = {};
o1.name = 'jack';
console.log(o1.name);

// TypeError: Assignment to constant variable
// o1 = {};

// Object.freeze() 使对象不能再修改
const o2 = Object.freeze({});
o2.name = 'jack';
// undefined
console.log(o2.name);