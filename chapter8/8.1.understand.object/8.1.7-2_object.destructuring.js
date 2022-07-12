/**
 * 8.1.7 对象解构
 * 
 * 1.部分结构
 * 
 * 需要注意的是, 涉及多个属性的解构赋值是一个输出无关的顺序化操作
 * 如果一个结构表达式涉及多个赋值, 开始的赋值成功而后面的赋值出错, 则整个解构赋值只会完成一部分
 */

let person = {
    name: "Matt",
    age: 27
};

let personName, personBar, personAge;

try {
    // person.foo是undefined, 因此会抛出错误
    ({ name: personName, foo: { bar: personBar }, age: personAge } = person);
} catch(e) {

}

console.log(personName, personBar, personAge);
