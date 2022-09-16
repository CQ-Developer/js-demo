/**
 * 23.2.2 1.过滤结果
 * 
 * 如果第二个参数是一个数组
 * 那么JSON.stringify()返回的结果只会包含改数组种列出的对象属性
 * 
 * 如果第二个参数是一个函数
 * 函数接收两个参数: 属性名, 属性值
 * 可以根据属性名决定要对相应的属性执行什么操作
 * 属性名始终是字符串, 只是在值不属于某个键值对时会是空字符串
 * 为了改变对象的序列化, 返回的值就是相应key应该包含的结果
 * 
 * 注意, undefined会导致属性被忽略
 * 注意, 函数过滤器会应用到要序列化的对象所包含的所有对象
 * 因此如果数组中包含多个具有这些属性的对象, 则序列化之后每个对象都只会剩下上面这些属性
 */
 let book = {
    title: "Professional JavaScript",
    edition: 4,
    year: 2017,
    authors: [
        "Nicholas C. Zakas",
        "Matt Frisbie"
    ]
};

// 第二个参数是一个数组
let jsonText = JSON.stringify(book, ["title", "edition"]);
console.log(jsonText);

// 第二个参数是一个函数
jsonText = JSON.stringify(book, (key, value) => {
    switch (key) {
        case "authors":
            return value.join(",");
        case "year":
            return 5000;
        case "edition":
            return undefined;
        default:
            return value;
    }
});
console.log(jsonText);