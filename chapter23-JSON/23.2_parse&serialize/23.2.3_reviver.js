/**
 * 23.2.3 解析选项
 * 
 * JSON.parse()方法也可以接收一个额外的参数, 这个函数会针对每个键值对都调用一次
 * 为区别于传给JSON.stringify()的起过滤作用的替代函数replacer, 这个函数被成为还原函数reviver
 * 实际上它们的格式完全一样, 即还原函数也接收两个参数, 属性名和属性值, 另外也需要返回值
 * 
 * 如果还原函数返回undefined, 则结果中就会删除相应的键
 * 如果返回了其他任何值, 则改值就会成为相应键的值插入到结果中
 * 还原函数经常被用于把日期字符串转换为Date对象
 */
let book = {
    title: "Professional JavaScript",
    edition: 4,
    year: 2017,
    authors: [
        "Nicholas C. Zakas",
        "Matt Frisbie"
    ],
    releaseDate: new Date(2017, 11, 1)
};

let json = JSON.stringify(book);
console.log(json);

let object = JSON.parse(json, (key, value) => key === "releaseDate" ? new Date(value) : value);
console.log(object);
