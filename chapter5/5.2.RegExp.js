// 正则表达式
// RegExp = regular expression
// let expression = /pattern/flags;

// flag可以带0个或多个
// g: 全局模式
// i: 不区分大小写
// m: 多行模式
// y: 粘附模式
// u: Unicode模式
// s: dotAll模式

// 元字符必须转义
// ( [ { \ ^ $ | } ] ) ? * + .

// 5.2.1 RegExp 属性
// global: Boolean
// ignoreCase: Boolean
// unicode: Boolean
// sticky: Boolean
// lastIndex: Number
// multiline: Boolean
// dotAll: Boolean
// source: 正则表达式字面量
// flags: 正则表达式标记字符串

// 5.2.2 RegExp 实例方法
// exec(String): Array(index, input)
// test(String): Boolean

// 5.2.3 RegExp 静态属性
// input: 简写($_) 最后搜索的字符串
// lastMatch: 简写($&) 最后匹配的文本
// lastParen: 简写($+) 最后匹配的捕获组
// leftContext: 简写($`) input字符串中出现在lastMatch前面的文本
// rightContext: 简写($') input字符串中出现在lastMatch后面的文本
// $1 到 $9 存储捕获组的匹配项

// 匹配字符串中的所有'at'
let p1 = /at/g;

// 匹配第一个'bat'或'cat'，忽略大小写
let p2 = /[bc]at/i;

// 匹配所有以'at'结尾的三字符组合，忽略大小写
let p3 = /.at/gi;

// 匹配第一个'bat'或'cat'，忽略大小写
let p4 = /[bc]at/i;
// 匹配第一个'[bc]at'，忽略大小写
let p5 = /\[bc\]at/i;

// 匹配所有以'at'结尾的三字符组合，忽略大小写
let p6 = /.at/gi;
// 匹配所有'.at'，忽略大小写
let p7 = /\.at/gi;

// 匹配第一个'bat'或'cat'，忽略大小写
let p8 = /[bc]at/i;
// 使用 RegExp 构造函数创建，和p8等效
let r1 = new RegExp('[bc]at', 'i');

console.log();

// 转义字符/在字符串下模式下也需要转移
let p9 = /\[bc\]at/;
let r2 = new RegExp('\\[bc\\]at');

let p10 = /\.at/;
let r3 = new RegExp('\\.at');

let p11 = /name\/age/;
let r4 = new RegExp('name\\/age');

let p12 = /\d.\d{1,2}/;
let r5 = new RegExp('\\d.\\d{1,2}');

let p13 = /\w\\hello\\123/;
let r6 = new RegExp('\\w\\\\hello\\\\123');

console.log();

// 基于现有正则表达式创建，并可以修改它们的标记
const p14 = /cat/g;
console.log(`p14 = ${p14}`);
const r7 = new RegExp(p14);
console.log(`r7 = ${r7}`);
const r8 = new RegExp(p14, 'i');
console.log(`r8 = ${r8}`);

console.log();

// RegExp 属性：
let p15 = /\[bc\]at/i;
console.log(`p15.global = ${p15.global}`);
console.log(`p15.ignoreCase = ${p15.ignoreCase}`);
console.log(`p15.multiline = ${p15.multiline}`);
console.log(`p15.lastIndex = ${p15.lastIndex}`);
console.log(`p15.source = ${p15.source}`);
console.log(`p15.flags = ${p15.flags}`);

let p16 = new RegExp('\\[bc\\]at', 'i');
console.log(`p16.global = ${p16.global}`);
console.log(`p16.ignoreCase = ${p16.ignoreCase}`);
console.log(`p16.multiline = ${p16.multiline}`);
console.log(`p16.lastIndex = ${p16.lastIndex}`);
console.log(`p16.source = ${p16.source}`);
console.log(`p16.flags = ${p16.flags}`);

console.log();

// exec(String)
let t1 = 'mom and dad and baby';
let p17 = /mom( and dad( and baby)?)?/gi;
let m1 = p17.exec(t1);
console.log(`m1.index = ${m1.index}`);
console.log(`m1.input = ${m1.input}`);
for(let i = 0; i < m1.length; i++) {
    console.log(`m1[${i}] = '${m1[i]}'`);
}

console.log();

// 如果没有设置全局标记(g)
// 则无论对同一个字符串调用多少次exec()
// 也只返回第一个匹配的信息
let t2 = 'cat, bat, sat, fat';
let p18 = /.at/;
let m2 = p18.exec(t2);
console.log(`m2.index = ${m2.index}`);
console.log(`m2[0] = ${m2[0]}`);
console.log(`p18.lastIndex = ${p18.lastIndex}`);
m2 = p18.exec(t2);
console.log(`m2.index = ${m2.index}`);
console.log(`m2[0] = ${m2[0]}`);
console.log(`p18.lastIndex = ${p18.lastIndex}`);

console.log();

// 如果设置了全局标记(g)
// 则每次调用exec()方法返回一个匹配信息
// 直到搜索到字符串末尾
let t3 = 'cat, bat, sat, fat';
let p19 = /.at/g;
let m3 = p19.exec(t3);
console.log(`m3.index = ${m3.index}`);
console.log(`m3[0] = ${m3[0]}`);
console.log(`p19.lastIndex = ${p19.lastIndex}`);
m3 = p19.exec(t3);
console.log(`m3.index = ${m3.index}`);
console.log(`m3[0] = ${m3[0]}`);
console.log(`p19.lastIndex = ${p19.lastIndex}`);
m3 = p19.exec(t3);
console.log(`m3.index = ${m3.index}`);
console.log(`m3[0] = ${m3[0]}`);
console.log(`p19.lastIndex = ${p19.lastIndex}`);

console.log();

// 如果设置了粘附标记(y)
// 则每次调用exec()就只会在lastIndex的位置上寻找匹配项
// 粘附标记覆盖全局标记
let t4 = 'cat, bat, sat, fat';
let p20 = /.at/y;
let m4 = p20.exec(t3);
console.log(`m4.index = ${m4.index}`);
console.log(`m4[0] = ${m4[0]}`);
console.log(`p20.lastIndex = ${p20.lastIndex}`);
// 以索引3开头的字符串找不到匹配项，返回null
// 没有找到匹配项，将lastIndex设置为0
m4 = p20.exec(t3);
console.log(`m4 = ${m4}`);
console.log(`p20.lastIndex = ${p20.lastIndex}`);
// 向前设置lastIndex可以让粘附模式找到下一个匹配项
p20.lastIndex = 5;
m4 = p20.exec(t3);
console.log(`m4.index = ${m4.index}`);
console.log(`m4[0] = ${m4[0]}`);
console.log(`p20.lastIndex = ${p20.lastIndex}`);

console.log();

// test(String)
// 验证正则表达式是否匹配
// 而不实际进行匹配
let t5 = '000-00-0000';
let p21 = /\d{3}-\d{2}-\d{4}/;
if(p21.test(t5)) {
    console.log('the pattern was matched');
}

console.log();

// toString() 和 toLocaleString()
// 无论正则表达式是如何创建的，都返回正则表达式的字面量
let p22 = new RegExp('\\[bc\\]at', 'gi');
console.log(`p22.toString() = ${p22.toString()}`);
console.log(`p22.toLocaleString() = ${p22.toLocaleString()}`);

console.log();

// valueOf()
// 返回正则表达式本身
let v1 = p22.valueOf();
console.log(`typeof v1 = ${typeof v1}`);
console.log(`v1 instanceof RegExp = ${v1 instanceof RegExp}`);
console.log(`v1.toString() = ${v1.toString()}`);
console.log(`v1.toLocaleString() = ${v1.toLocaleString()}`);

console.log();

// 静态属性
let t6 = 'this has been a short summer';
let p23 = /(.)hort/g;
if(p23.test(t6)) {
    console.log(`RegExp.input = '${RegExp.input}'`);
    console.log(`RegExp.leftContext = '${RegExp.leftContext}'`);
    console.log(`RegExp.rightContext = '${RegExp.rightContext}'`);
    console.log(`RegExp.lastMatch = '${RegExp.lastMatch}'`);
    console.log(`RegExp.lastParen = '${RegExp.lastParen}'`);
    console.log(`简写 RegExp.input = '${RegExp['$_']}'`);
    console.log(`简写 RegExp.leftContext = '${RegExp['$`']}'`);
    console.log(`简写 RegExp.rightContext = '${RegExp["$'"]}'`);
    console.log(`简写 RegExp.lastMatch = '${RegExp['$&']}'`);
    console.log(`简写 RegExp.lastParen = '${RegExp['$+']}'`);
}

// $1 - $9
let t7 = 'this has been a short summer';
let p24 = /(..)or(.)/g;
if(p24.test(t7)) {
    console.log(`RegExp.$1 = ${RegExp.$1}`);
    console.log(`RegExp.$2 = ${RegExp.$2}`);
}
