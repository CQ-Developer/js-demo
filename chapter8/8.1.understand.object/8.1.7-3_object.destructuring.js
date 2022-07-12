/**
 * 8.1.7 对象解构
 * 
 * 1.参数上下文匹配
 * 
 * 在函数参数列表中也可以进行解构赋值
 * 对参数的解构赋值不会影响arguments对象, 但可以在函数签名中声明在函数体内使用局部变量
 */

let person = {
    name: "Matt",
    age: 27
};

function printPerson(foo, { name, age }, bar) {
    console.log(arguments);
    console.log(name, age);
}

function printPerson2(foo, { name: personName, age: personAge }, bar) {
    console.log(arguments);
    console.log(personName, personAge);
}

printPerson("1st", person, "2nd");

printPerson2("1st", person, "2nd");
