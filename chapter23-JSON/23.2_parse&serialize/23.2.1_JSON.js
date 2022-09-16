/**
 * 23.2.1 JSON对象
 * 
 * 早期的JSON解析器基本上就相当于JS的eval()函数
 * 因为JSON是JS语法的子集, 所以eval()可以解析, 解释, 并将其作为JS对象和数组返回
 * 
 * ES5增加了JSON全局对象, 正式引入解析JSON的能力
 * 这个对象在所有主流浏览器种都得到了支持
 * 
 * JSON对象有两个方法: stringify(), parse()
 * 在简单的情况下, 这两个方法分别可以将JS序列化为JSON字符串
 * 以及将JSON解析为原生JS值
 * 
 * 在序列化JS对象时, 所有函数和原型成员都会有意地在结果种省略
 * 此外, 值为undefined的任何属性也会被跳过
 * 最终得到的就是所有实例属性均为有效JSON数据类型的表示
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

// 使用JSON.stringify()把一个JS对象序列化为一个JSON字符串
// 默认情况下, JSON.stringify()会输出不包含空格或缩进的JSON字符串
let jsonText = JSON.stringify(book);
console.log(jsonText);

// JSON字符串可以直接传给JSON.parse()然后得到相应JS值
// 注意book和bookCopy是完全不同的对象没有任何关系
// 如果给JSON.parse()的参数无效则抛出错误
let bookCopy = JSON.parse(jsonText);
console.log(bookCopy);