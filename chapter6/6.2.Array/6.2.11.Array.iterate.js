// 迭代
// ES为数组定义了5个迭代方法: 每个方法接收2个参数, 以每一项为参数运行的函数,以及可选的作为函数运行上下文的作用域对象
// 传给每个方法的函数接收3个参数: 数组元素, 元素索引, 数组本身

// every() 对数组每一项都运行传入的函数, 如果对每一个项函数都返回true, 则这个方法返回true
// filter() 对数组每一项都运行传入的函数, 函数返回true的项会组成数组之后返回
// forEach() 对数组每一项都运行传入的函数, 没有返回值
// map() 对数组每一项都运行传入的函数, 返回由每次函数调用的结果构成的数组
// some() 对数组每一项都运行传入的函数, 如果有一项函数返回true, 则这个方法返回true
// 这些方法都不会改变调用它们的数组

let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

let everyResult = numbers.every((e, i, arr) => e > 2);
console.log("// every每一项都符合才返回true");
console.log(everyResult);

let someResult = numbers.some((e, i, arr) => e > 2);
console.log("// some只要一个符合就返回true");
console.log(someResult);

let filterResult = numbers.filter((value, index, array) => value > 2);
console.log("// filter返回符合条件元素组成的数组");
console.log(filterResult);

let mapResult = numbers.map((e, i, array) => e * 2);
console.log("// map的每一项执行函数操作");
console.log(mapResult);

console.log("// forEach每一项");
numbers.forEach((e, i, arr) => {
    console.log(`当前操作的元素: ${e}, 索引位置: ${i}`);
});
