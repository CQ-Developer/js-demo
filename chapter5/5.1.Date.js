// 1970-1-1 00:00:00 至今的毫秒数
let now = new Date();
console.log(now);
console.log(`now = ${now}`);

// Date.parse(String)
// 接收一个表示日期的字符串参数，将其转换为毫秒数
// 支持的日期格式
// '月/日/年'   ->   '6/29/2022'
// '月名 日, 年'   ->   'June 29, 2022'
// '周几 月名 日 年 时:分:秒 时区'   ->   'Tue May 23 2019 00:00:00 GMT-0700'
// 'YYYY-MM-DDTHH:mm:ss.sssZ'   ->   '2019-05-23T00:00:00'
let p1 = Date.parse('2022-06-29T10:15:32.484Z');
console.log(p1);
console.log(typeof p1);
console.log(`p1 = ${p1}`);

// 创建 2019年5月23日
let d1 = new Date(Date.parse('5/23/2019'));
console.log(d1);
console.log(`d1 = ${d1}`);
// 可以直接传递字符串，后台自动调用 Date.parse(String)
let d2 = new Date('5/23/2019');
console.log(d2);
console.log(`d2 = ${d2}`);
// 使用别的日期格式
let d3 = new Date('May 23, 2019');
console.log(d3);
console.log(`d3 = ${d3}`);

// Date.UTC()
// 月从0开始，而不是从1开始
let u1 = Date.UTC(2022, 5, 29, 10, 20, 37);
console.log(u1);
console.log(typeof u1);
console.log(`u1 = ${u1}`);

// 由于转换的后也是毫秒值，所以可以被 Date 构造器接收
// 不指定的值使用默认值，比如日期默认1，小时默认0
let d4 = new Date(Date.UTC(2022, 5, 22));
console.log(d4);
console.log(`d4 = ${d4}`);

let d5 = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
console.log(d5);
console.log(`d5 = ${d5}`);

// 和 Date.parse() 相同，Date.UTC() 也会被 Date 构造函数隐式调用
// 但这种情况下使用的时本地时间，而不是 UTC 时间
let d6 = new Date(2022, 5, 22);
console.log(d6);
console.log(`d6 = ${d6}`);

let d7 = new Date(2005, 4, 5, 17, 55, 55);
console.log(d7);
console.log(`d7 = ${d7}`);

// Date.now()
// 返回当前日期和时间的毫秒数
let n1 = Date.now();
console.log(n1);
console.log(typeof n1);
console.log(`n1 = ${n1}`);

// toString() 和 toLocalString()
let d8 = new Date();
console.log(`toString(): ${d8.toString()}`);
console.log(`toLocaleString(): ${d8.toLocaleString()}`);

// valueOf() 返回毫秒值
let v1 = d1.valueOf();
console.log(v1);
console.log(typeof v1);

// valueOf() 可以用于比较日期的大小
let d9 = new Date(2022, 0, 1);
let d10 = new Date(2022, 1, 1);
console.log(`d9 > d10 : ${d9 > d10}`);
console.log(`d9 < d10 : ${d9 < d10}`);

// 日期格式化方法
let d11 = new Date();
console.log(`toDateString(): ${d11.toDateString()}`);
console.log(`toTimeString(): ${d11.toTimeString()}`);
console.log(`toLocaleDateString(): ${d11.toLocaleDateString()}`);
console.log(`toLocaleTimeString(): ${d11.toLocaleTimeString()}`);
console.log(`toUTCString(): ${d11.toUTCString()}`);
console.log(`toGMTString(): ${d11.toGMTString()}`);

// getTime()
// 返回日期毫秒数，与 valueOf() 方法相同
console.log(`getTime(): ${d11.getTime()}`);

// setTime(milliseconds)
// 设置日期的毫秒表示，从而修改整个日期
d11.setTime(new Date().getTime() - (1 * 24 * 60 * 60 * 1000));
console.log(`setTime(): ${d11}`);

// getFullYear()
// 返回4位的年数
console.log(`getFullYear(): ${d11.getFullYear()}`);

// getUTCFullYear
// 返回 UTC 日期的4位年数
console.log(`getUTCFullYear(): ${d11.getUTCFullYear()}`);

// setFullYear(Number)
// 设置年数，必须4位年数
d11.setFullYear(2019);
console.log(`setFullYear(): ${d11}`);

// setUTCFullYear(Number)
// 设置UTC年数，必须4位年数
d11.setUTCFullYear(2020);
console.log(`setUTCFullYear(): ${d11}`);

// getMonth()
// 返回月份，0表示1月
console.log(`getMonth(): ${new Date().getMonth()}`);

// getUTCMonth()
// 返回UTC月份，0表示1月
console.log(`getUTCMonth(): ${new Date().getUTCMonth()}`);

// setMonth(Number)
// 设置日期的月
d11.setMonth(0);
console.log(`setMonth(): ${d11}`);

// setUTCMonth(Number)
// 设置UTC日期的月
d11.setUTCMonth(0);
console.log(`setUTCMonth(): ${d11}`);

// getDate()
// 返回日期中的日
console.log(`getDate(): ${d11.getDate()}`);

// getUTCDate()
// 返回UTC日期中的日
console.log(`getUTCDate(): ${d11.getUTCDate()}`);

// setDate(Number)
// 设置日期中的日
d11.setDate(12);
console.log(`setDate(): ${d11}`);

// setUTCDate(Number)
// 设置UTC日期中的日
d11.setUTCDate(12);
console.log(`setUTCDate(): ${d11}`);

// getDay()
// 返回日期中表示周几的数值
// 0表示周日，6表示周六
console.log(`getDay(): ${d11.getDay()}`);

// getUTCDay()
// 返回UTC日期中表示周几的数值
// 0表示周日，6表示周六
console.log(`getUTCDay(): ${d11.getUTCDay()}`);

// getHours()
// 返回日期中的小时
console.log(`getHours(): ${d11.getHours()}`);

// getUTCHours()
// 返回UTC日期中的小时
console.log(`getUTCHours(): ${d11.getUTCHours()}`);

// setHours(Number)
// 设置日期中的时
// 大于23加天
d11.setHours(3);
console.log(`setHours(): ${d11}`);

// setUTCHours(Number)
// 设置UTC日期中的时
// 大于23加天
d11.setUTCHours(3);
console.log(`setUTCHours(): ${d11}`);

// getMinutes()
// 返回日期中分
console.log(`${d11.getMinutes()}`);

// getUTCMinutes()
// 返回UTC日期中分
console.log(`${d11.getUTCMinutes()}`);


// setMinutes(Number)
// 设置日期中的分
// 大于59加时
d11.setMinutes(10);
console.log(`setMinutes(): ${d11}`);

// setUTCMinutes(Number)
// 设置UTC日期中的分
// 大于59加时
d11.setUTCMinutes(10);
console.log(`setUTCHours(): ${d11}`);

// getSeconds()
// 返回日期中的秒
console.log(`getSeconds(): ${d11.getSeconds()}`);

// getUTCSeconds()
// 返回UTC日期中的秒
console.log(`getUTCSeconds(): ${d11.getUTCSeconds()}`);

// setSeconds(Number)
// 设置日期中的秒
// 大于59加分
d11.setSeconds(15);
console.log(`setSeconds(): ${d11}`);

// setUTCSeconds(Number)
// 设置UTC日期中的秒
// 大于59加分
d11.setUTCSeconds(15);
console.log(`setUTCSeconds(): ${d11}`);

// getMilliseconds()
// 返回日期中的毫秒
console.log(`getMilliseconds(): ${d11.getMilliseconds()}`);

// getUTCMilliseconds()
// 返回UTC日期中的毫秒
console.log(`getUTCMilliseconds(): ${d11.getUTCMilliseconds()}`);

// setMilliseconds(Number)
// 设置日期中的毫秒
d11.setMilliseconds(888);
console.log(`setMilliseconds(): ${d11}`);

// setUTCMilliseconds(Number)
// 设置UTC日期中的毫秒
d11.setUTCMilliseconds(888);
console.log(`setUTCMilliseconds(): ${d11}`);

// getTimezoneOffset()
// 返回以分钟计算的UTC与本地偏移量
console.log(`getTimezoneOffset(): ${d11.getTimezoneOffset()}`);
