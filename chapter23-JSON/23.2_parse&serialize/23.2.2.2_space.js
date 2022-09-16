/**
 * 23.2.2 2.字符串缩进
 * 
 * JSON.stringify()方法的第三个参数控制缩进和空格
 * 在这个参数是数值时, 表示每一级缩进的空格数
 * 
 * 注意, 除了缩进, JSON.stringify()方法还为方便阅读插入了换行符
 * 这个行为对所有有效的缩进参数都会发生
 * 最大缩进为10, 大于10的值会自动设置为10
 * 
 * 如果缩进参数是一个字符串而非数值, 那么JSON字符串中就会使用这个字符串而不是空格来缩进
 * 使用字符串, 也可以将字符设置为Tab或任意字符
 * 
 * 使用字符串同样有10个字符的长度限制
 * 如果字符串长度超过10, 则会在第10个字符处截断
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

// 第三个参数是数字
let json = JSON.stringify(book, undefined, 4);
console.log(json);

// 第三个参数是字符串
json = JSON.stringify(book, undefined, "--");
console.log(json);