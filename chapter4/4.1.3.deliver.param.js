// 传递参数

// 值传递
function addTen(num) {
    num += 10;
    return num;
}
let count = 20;
let result = addTen(count);
console.log(`count = ${count}, result = ${result}`);

// 对象值传递
function setName(obj) {
    obj.name = 'Chen';
}
let person = new Object();
setName(person);
console.log(`person name is ${person.name}`);

// 变量有按值访问和按引用访问两种
// 传参只有按值传递
// 如果是按应用传递，那在方法内部修改了引用指向的地址
// 外部的引用地址也会改变，这里很明显不会
function setNameAndChangeObj(obj) {
    obj.name = 'Chen';
    obj = new Object();
    obj.name = 'HuHu';
}
let obj = new Object();
setNameAndChangeObj(obj);
console.log(`reference changed, person name is ${person.name}`);
