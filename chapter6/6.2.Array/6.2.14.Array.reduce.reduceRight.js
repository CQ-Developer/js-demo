// 归并方法 reduce() reduceRight()
// 接收2个参数: 对每一项都会运行的归并函数, 归并起点的初始值(可选)
// 传给归并函数的4个参数: 上一个归并值, 当前项, 当前项索引, 数组本身
// 这个函数返回的任何值都会作为下一次调用同一个函数的第一个参数
// 如果没有给这两个方法传入可选的第二个参数作为归并的起始值, 则第一次迭代将从数组的第二项开始
// 因此传给归并函数的第一个参数是数组的第一项, 第二个参数是数组的第二项

let values = [1, 2, 3, 4, 5];
console.log("// 原始数组");
console.log(values);

console.log("// 使用reduce计算总和");
let sum = values.reduce((prev, cur, idx, array) => prev + cur);
console.log(sum);

console.log("// 使用reduceRight计算总和");
sum = values.reduceRight((prev, cur, idx, array) => {
    console.log(`prev=${prev}, cur=${cur}, idx=${idx}`);
    return prev + cur;
}, 0);
console.log(sum);