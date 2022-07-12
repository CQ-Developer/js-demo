// 操作方法

// concat()
// 可以在现有数组全部元素基础上创建一个新数组
// 首先会创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这个新构建的数组
// 如果传入一个或多个数组，则concat()会把这些数组的每一项都添加到结果数组中
// 如果参数不是数组，则直接把它们添加到结果数组的末尾

// concat()方法的使用
let colors = ["red", "green", "blue"];
let colors1 = colors.concat("yellow", ["black", "brown"]);
console.log("// concat()");
console.log(colors);
console.log(colors1);

// 打平数组参数的行为可以重写
// 方法是再参数数组上指定一个特殊符号：Symbol.isConcatSpreadable
// 这个符号能够阻止concat()打平参数数组
// 相反，把这个值设置为true可以强制打平类数组对象

// 将数组设置为不打平
let newColors = ["black", "brown"];
newColors[Symbol.isConcatSpreadable] = false;

// 类数组对象
let moreNewColors = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: "pink",
    1: "cyan"
};

console.log("// 强制不打平数组");
let colors2 = colors.concat("yellow", newColors);
console.log(colors2);

console.log("// 强制打平类数组对象");
let colors3 = colors.concat(moreNewColors);
console.log(colors3);
