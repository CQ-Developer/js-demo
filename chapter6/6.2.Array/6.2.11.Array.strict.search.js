// 严格搜索
// indexOf() lastIndexOf() includes()
// includes()是ES7新增方法
// 这些方法都接收2个参数: 要查找的元素、起始搜索位置(可选)
// indexOf()和lastIndexOf()返回要查找元素在数组中的位置, 没找到返回-1
// includes()返回布尔值表示是否找到
// 使用全等(===)进行比较

let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log("// 原始数组");
console.log(numbers);

console.log("// 4出现的位置");
console.log(numbers.indexOf(4));

console.log("// 4最后出现的位置");
console.log(numbers.lastIndexOf(4));

console.log("// 是否包含4");
console.log(numbers.includes(4));

console.log("// 从位置4开始搜索4出现的位置");
console.log(numbers.indexOf(4, 4));

console.log("// 从反向4开始搜索4出现的位置");
console.log(numbers.lastIndexOf(4, 4));

console.log("// 从位置7开始搜索4是否存在");
console.log(numbers.includes(4, 7));

let people = [{ name: "Nicholas" }];

let person = { name: "Nicholas" };
let morePeople = [person];

console.log("// people.indexOf(person)");
console.log(people.indexOf(person));

console.log("// morePeople.indexOf(person)");
console.log(morePeople.indexOf(person));

console.log("// people.includes(person)");
console.log(people.includes(person));

console.log("// morePeople.includes(person)");
console.log(morePeople.includes(person));
