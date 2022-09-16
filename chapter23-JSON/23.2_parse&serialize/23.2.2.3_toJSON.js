/**
 * 23.2.2 3.toJSON()方法
 * 
 * 有时候, 对象需要在JSON.stringify()之上自定义JSON序列化
 * 此时, 可以在要序列化的对象中添加toJSON()方法, 序列化时会基于这个方法返回适当的JSON表示
 * 
 * toJSON()方法可以返回任意序列化值, 都可以起到相应的作用
 * 如果对象被嵌入在另一个对象中, 返回undefined会导致值编程null
 * 或者如果时顶级对象, 则本身就是undefined
 * 
 * 注意, 箭头函数不能用来定义toJSON()方法
 * 主要原因是箭头函数的词法作用域是全局作用域, 在这种情况下不合适
 * 
 * toJSON()方法可以与过滤函数一起使用, 因此理解不同序列化流程的顺序非常重要
 * 在把对象传给JSON.stringify()时会执行如下步骤
 * 1.如果可以获取实际的值, 则调用toJSON()方法获取实际的值, 否则使用默认的序列化
 * 2.如果提供了第二个参数, 则应用过滤, 传入过滤函数的值就是第1步返回的值
 * 3.第2步返回的每个值都会相应的进行序列化
 * 4.如果提供第三个参数, 则相应的进行缩进
 * 
 * 理解这个顺序有助于决定是创建toJSON()方法, 还是使用过滤函数, 抑或是两者都用
 */
let book = {
    title: "Professional JavaScript",
    edition: 4,
    year: 2017,
    authors: [
        "Nicholas C. Zakas",
        "Matt Frisbie"
    ],
    toJSON: function() {
        return this.title;
    }
};

let jsonText = JSON.stringify(book);
console.log(jsonText);