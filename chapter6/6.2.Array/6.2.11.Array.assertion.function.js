// 断言函数
// 断言函数接收3个参数: 元素, 索引, 数组本身
// 断言函数返回真值, 表示是否匹配

// find()
// 返回第一个匹配的元素
// 接收第二个参数: 用于指定断言函数内部this的值

// findIndex()
// 返回第一个匹配元素的索引
// 接收第二个参数: 用于指定断言函数内部this的值

const people = [
    { name: "Matt", age: 27},
    { name: "Nicholas", age: 29}
];
console.log("// 原数组");
console.log(people);

console.log("// 找到年纪小于28的人");
console.log(people.find((e, i, arr) => e.age < 28));

console.log("// 找到年纪小于28的人在数组中的位置");
console.log(people.findIndex((e, i, arr) => e.age < 28));

// 找到匹配项后, 这两个方法都不在继续搜索

console.log("// 找到匹配项后不再继续搜索");
const evens = [2, 4, 6];
evens.find((e, i, arr) => {
    console.log(`当前索引: ${i}, 当前元素: ${e}, 当前数组: ${arr}`);
    return e === 4;
});
