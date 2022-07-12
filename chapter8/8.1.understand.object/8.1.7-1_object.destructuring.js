/**
 * 8.1.7 对象解构
 * 
 * 1.嵌套解构
 * 
 * 解构对于引用嵌套的属性或赋值目标没有限制
 * 为此, 可以通过解构来复制对象的属性
 * 
 * 解构赋值可以使用嵌套解构, 以匹配嵌套的属性
 * 
 * 在外城属性没有定义的情况下不能使用嵌套解构
 * 无论源对象还是目标对象都一样
 */



// demo.1

console.log(`
// 使用解构来复制对象属性`);

let person = {
    name: "Matt",
    age: 27,
    job: {
        title: "Software engineer"
    }
};

let personCopy = {};

({
    name: personCopy.name,
    age: personCopy.age,
    job: personCopy.job
} = person);

// 因为一个对象的引用被赋值给personCopy, 所以修改
// person.job对象的属性也会影响personCopy
person.job.title = "Hacker";

console.log(person);
console.log(personCopy);



// demo.2

console.log(`
// 解构赋值可以使用嵌套解构, 以匹配嵌套的属性`);

person = {
    name: "Matt",
    age: 27,
    job: {
        title: "Software engineer"
    }
};

// 声明title变量并将person.job.title的值赋值给它
let { job: { title } } = person;

console.log(title);



// demo.3

console.log(`
// 源对象和目标对象上未定义的属性无法进行嵌套解构`);
person = {
    job: {
        title: "Software engineer"
    }
};

personCopy = {};

// foo在源对象上是undefined
// TypeError: Cannot read properties of undefined (reading 'bar')
// ({ foo: { bar: personCopy.bar } } = person);

// job在目标对象上是undefined
// TypeError: Cannot set properties of undefined (setting 'title')
// ({ job: { title: personCopy.job.title } } = person);
