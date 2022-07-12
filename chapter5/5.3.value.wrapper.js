/* 原始值包装类型 */

// 对原始值进行操作
// 后台回自动创建一个对应的包装类类型的对象
// 从而暴露出操作原始值的各种方法
// 这种行为可以让原始值拥有对象的行为
let s1 = "some text";
let s2 = s1.substring(2);

// 后台执行的伪代码相当于
let s11 = new String("some text");
let s22 = s11.substring(2);
s11 = null;

// 声明周期
// 通过new关键字实例化的引用类型实例，会在实例离开作用域时被销毁
// 自动创建的原始类型包装对象只存在于访问它的那行代码执行期间
// 这意味着不能在运行期间给原始值添加属性和方法
let s3 = "some text";
// 创建了1个String对象，但在代码执行完毕后就销毁了
s3.color = "red";
// 再次创建了1个新的String对象，但没有color属性
console.log(`s3.color = ${s3.color}`);

// 所有原始值的包装类型的对象都会被转换位true
if(new String("")) {
    console.log(true);
}
if(new Boolean(false)) {
    console.log(true);
}
if(new Number(0)) {
    console.log(true);
}

// Object构造函数能够根据传入值
// 返回相应的原始值包装类型的实例
let o1 = new Object("");
console.log(`o1 instanceof String = ${o1 instanceof String}`);
let o2 = new Object(1);
console.log(`o2 instanceof Number = ${o2 instanceof Number}`);
let o3 = new Object(true);
console.log(`o3 instanceof Boolean = ${o3 instanceof Boolean}`);

// 使用new关键创建原始值包装类型的构造函数
// 于调用同名的转换函数并不相同
// 转换函数只是将其转换成了对应的原始值
let v1 = "25";
let n1 = new Number(v1);
let n2 = Number(v1);
console.log(`new关键字 typeof n1 = ${typeof n1}`);
console.log(`转换函数 typeof n2 = ${typeof n2}`);

/* 5.3.1 Boolean */

// Boolean的构造函数
let b1 = new Boolean(true);

// valueOf() 返回原始值
let v2 = b1.valueOf();
console.log(`typeof v2 = ${typeof v2}`);

// toString() 返回字符串 true、false
console.log(`typeof b1.toString() = ${typeof b1.toString()}: ${b1.toString()}`);

// 在布尔表达式中使用Boolean对象，特别需要注意
// Boolean对象是一个对象，在布尔表达式中被作为true处理
let falseValue = false;
console.log(`falseValue && true = ${falseValue && true}`);
let falseObject = new Boolean(false);
console.log(`falseObject && true = ${falseObject && true}`);

// 在 typeof 关键字中的区别
console.log(`typeof falseValue = ${typeof falseValue}`);
console.log(`typeof falseObject = ${typeof falseObject}`);

// 在 instanceof 关键字中的区别
console.log(`falseValue instanceof Boolean = ${falseValue instanceof Boolean}`);
console.log(`falseObject instanceof Boolean = ${falseObject instanceof Boolean}`);

/* 5.3.2 Number */

let num1 = new Number(10);

// valueOf() 返回原始值
console.log(num1.valueOf());
console.log(`typeof num1.valueOf() = ${typeof num1.valueOf()}`);

// toLocaleString() 返回字符串
console.log(num1.toLocaleString());
console.log(`typeof num1.toLocaleString() = ${typeof num1.toLocaleString()}`);

// toString()
console.log(`默认十进制 ${num1.toString()}`);
console.log(`二进制 ${num1.toString(2)}`);
console.log(`八进制 ${num1.toString(8)}`);
console.log(`十进制 ${num1.toString(10)}`);
console.log(`十六进制 ${num1.toString(16)}`);

// toFix()
// 将数值格式化位字符串
// 可以指定位数，多余部分四舍五入
// 通常支持0-20位小数
let num2 = 10;
console.log(`10 toFixed(2) = ${num2.toFixed(2)}`);
let num3 = 10.256;
console.log(`10.256 toFix(2) = ${num3.toFixed(2)}`);

// 多个浮点数值的数学计算结果并议定准确
console.log(`0.1 + 0.2 = ${0.1 + 0.2}`);

// toExponential()
// 返回以科学计数法表示的数值的字符串
// 接收参数表示结果中小数的位数
console.log(`10 toExponential(1) = ${num2.toExponential(1)}`);

// toPrecision()
// 会根据情况返回最合理的输出结果
// 可能是固定长度，也可能是科学计数法形式
// 接收一个参数表示结果中数字的总位数
// 通常支持1-21位小数
let num4 = 99;
console.log(`num4.toPrecision(1) = ${num4.toPrecision(1)}`);
console.log(`num4.toPrecision(2) = ${num4.toPrecision(2)}`);
console.log(`num4.toPrecision(3) = ${num4.toPrecision(3)}`);

// Number原始值和包装类实例在关键字typeof中的区别
let numValue = 10;
let numObject = new Number(10);
console.log(`typeof numValue = ${typeof numValue}`);
console.log(`typeof numObject = ${typeof numObject}`);

// Number原始值和包装类实例在关键字instanceof中的区别
console.log(`numValue instanceof Number = ${numValue instanceof Number}`);
console.log(`numObject instanceof Number = ${numObject instanceof Number}`);

// Number.isInteger() - ES6
// 用于辨别一个数值是否保存为整数
console.log(`Number.isInteger(1) = ${Number.isInteger(1)}`);
console.log(`Number.isInteger(1.0) = ${Number.isInteger(1.0)}`);
console.log(`Number.isInteger(1.01) = ${Number.isInteger(1.01)}`);

// IEEE 754
// 安全整数最小值和安全整数最大值
console.log(`Number.MIN_SAFE_INTEGER = ${Number.MIN_SAFE_INTEGER}`);
console.log(`Number.MAX_SAFE_INTEGER = ${Number.MAX_SAFE_INTEGER}`);

// Number.isSafeInteger()
// 鉴别整数是否在上述的安全范围内
console.log(`(-1 * 2**53) is safe = ${Number.isSafeInteger(-1 * 2**53)}`);
console.log(`(-1 * 2**53 + 1) is safe = ${Number.isSafeInteger(-1 * 2**53 + 1)}`);
console.log(`(2**53) is safe = ${Number.isSafeInteger(2**53)}`);
console.log(`(2**53 - 1) is safe = ${Number.isSafeInteger(2**53 - 1)}`);

/* 5.3.3 String */

// toString() toLocaleString() valueOf()
// 上述3个方法均返回字符串原始值
let stringValue = "hello world";
console.log(`typeof stringValue.toString() = ${typeof stringValue.toString()}`);
console.log(`typeof stringValue.toLocaleString() = ${typeof stringValue.toLocaleString()}`);
console.log(`typeof stringValue.valueOf() = ${typeof stringValue.valueOf()}`);

// length属性表示字符串中字符的数量
// 双字节字符按照单字符计数
console.log(`stringValue.length = ${stringValue.length}`);
console.log(`'呼呼'.length = ${'呼呼'.length}`);

// charAt()
// 返回指定索引位置的字符
// 具体来说查找指定位置的16位码元，并返回该码元对应的字符
let abcde = "abcde";
console.log(`abcde.charAt(2) = ${abcde.charAt(2)}`);

// charCodeAt()
// 可以查看指定码元的字符编码
// 16位编码 U+000 ~ U+FFFF
console.log(`abcde.charCodeAt(2) = ${abcde.charCodeAt(2)}`);
// 十进制99等于十六进制63
console.log(`abcde.charCodeAt(2) == 0x63 ? ${abcde.charCodeAt(2) == 0x63}`);

// fromCharCode()
// 用于根据给定的UTF-16码元创建字符串中的字符
// 可以接收任意多个数值
console.log(`String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65 = ${String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65)}`);
console.log(`String.fromCharCode(97, 98, 99, 100, 101) = ${String.fromCharCode(97, 98, 99, 100, 101)}`);

// 代理对
// 每个字符使2个16位码元
let smiling = "ab😊de";
console.log(`smiling.length = ${smiling.length}`);

console.log(`smiling.charAt(1) = ${smiling.charAt(1)}`);
console.log(`smiling.charAt(2) = ${smiling.charAt(2)}`);
console.log(`smiling.charAt(3) = ${smiling.charAt(3)}`);
console.log(`smiling.charAt(4) = ${smiling.charAt(4)}`);

console.log(`smiling.charCodeAt(1) = ${smiling.charCodeAt(1)}`);
console.log(`smiling.charCodeAt(2) = ${smiling.charCodeAt(2)}`);
console.log(`smiling.charCodeAt(3) = ${smiling.charCodeAt(3)}`);
console.log(`smiling.charCodeAt(4) = ${smiling.charCodeAt(4)}`);

// 0x1F60A = 128522
console.log(`String.fromCodePoint(0x1F60A) = ${String.fromCodePoint(0x1F60A)}`);
console.log(`String.fromCharCode(97, 98, 55357, 56842, 100, 101) = ${String.fromCharCode(97, 98, 55357, 56842, 100, 101)}`);

// codePointAt()
// 可以正确的解析16位码元和代理对
// 接收16位码元额索引并返回该索引位置上的码点
// 码点是Unicode中一个字符的完整标识
console.log(`smiling.codePointAt(1) = ${smiling.codePointAt(1)}`);
console.log(`smiling.codePointAt(2) = ${smiling.codePointAt(2)}`);
console.log(`smiling.codePointAt(4) = ${smiling.codePointAt(4)}`);
// 如果传入的码元索引并非代理对的开头，就会返回错误的码点
// 在检测单个字符的时候比较容易出现
console.log(`smiling.codePointAt(3) = ${smiling.codePointAt(3)}`);
// 可以通过从左到右按正确的码元数遍历来规避
// 迭代字符串可以智能的识别代理对
let smilingArr = [...smiling];
console.log(smilingArr);
console.log(smilingArr[2].codePointAt(0));

// fromCodePoint()
// 接收任意数量的码点，返回对应字符拼接起来的字符串
console.log(`String.fromCharCode(97, 98, 55357, 56842, 100, 101) = ${String.fromCharCode(97, 98, 55357, 56842, 100, 101)}`);
console.log(`String.fromCodePoint(97, 98, 128522, 100, 101) = ${String.fromCodePoint(97, 98, 128522, 100, 101)}`);

// normalize()
// 有些字符可以通过一个BMP字符表示
// 也可以通过一个代理对表示
let a1 = String.fromCharCode(0x00C5);
let a2 = String.fromCharCode(0x212B);
let a3 = String.fromCharCode(0x0041, 0x030A);

// 大写拉丁字母Å
console.log(`String.fromCharCode(0x00C5) = ${a1}`);
// 长度单位埃
console.log(`String.fromCharCode(0x212B) = ${a2}`);
// 大写拉丁字母A U+004
// 上面加个圆圈 U+030A
console.log(`String.fromCharCode(0x0041, 0x030A) = ${a3}`);

// 比较操作符不在乎外观是否相同
console.log(`a1 = ${a1}, a2 = ${a2}, a3 = ${a3}`);
console.log(`a1 === a2 ? ${a1 === a2}`);
console.log(`a1 === a3 ? ${a1 === a3}`);
console.log(`a2 === a3 ? ${a2 === a3}`);

// 为了解决上面的问题，Unicode提供了4中规范化形式，可以将类似上面的字符串规范化为一致的格式，无论底层字符的代码是什么
// 4中规范化形式：
// NFD: Normalization From D
// NFC: Normalization From C
// NFKD: Normalization From KD
// NFKC: Normalization From KC
// 使用normaliza()接收参数："NDF", "NFC", "NFKD", "NFKC"

// 0x00C5是对0x212B的进行NFC/NFKC规范化后的结果
console.log(`a1 === a1.normalize("NFD") ? ${a1 === a1.normalize("NFD")}`);
console.log(`a1 === a1.normalize("NFC") ? ${a1 === a1.normalize("NFC")}`);
console.log(`a1 === a1.normalize("NFKD") ? ${a1 === a1.normalize("NFKD")}`);
console.log(`a1 === a1.normalize("NFKC") ? ${a1 === a1.normalize("NFKC")}`);

// 0x212B是未规范化的
console.log(`a2 === a2.normalize("NFD") ? ${a2 === a2.normalize("NFD")}`);
console.log(`a2 === a2.normalize("NFC") ? ${a2 === a2.normalize("NFC")}`);
console.log(`a2 === a2.normalize("NFKD") ? ${a2 === a2.normalize("NFKD")}`);
console.log(`a2 === a2.normalize("NFKC") ? ${a2 === a2.normalize("NFKC")}`);

// 0x0041/0x030A是对0x212B进行NFD/NFKD规范化之后的结果
console.log(`a3 === a3.normalize("NFD") ? ${a3 === a3.normalize("NFD")}`);
console.log(`a3 === a3.normalize("NFC") ? ${a3 === a3.normalize("NFC")}`);
console.log(`a3 === a3.normalize("NFKD") ? ${a3 === a3.normalize("NFKD")}`);
console.log(`a3 === a3.normalize("NFKC") ? ${a3 === a3.normalize("NFKC")}`);

// 选择同一种规范化形式可以让比较操作返回正确的结果
console.log(`a1.normalize("NFD") === a2.normalize("NFD") ? ${a1.normalize("NFD") === a2.normalize("NFD")}`);
console.log(`a2.normalize("NFD") === a3.normalize("NFD") ? ${a2.normalize("NFD") === a3.normalize("NFD")}`);
console.log(`a1.normalize("NFD") === a3.normalize("NFD") ? ${a1.normalize("NFD") === a3.normalize("NFD")}`);

// concat()
// 用于将一个或多个字符串拼接起来
let s4 = "hello";
let r4 = s4.concat(" world");
console.log(`s4 = ${s4}`);
console.log(`r4 = ${r4}`);

// concat() 可以接收多个参数
let s5 = "hello";
let r5 = s5.concat(" ", "world", "!");
console.log(`s5 = ${s5}`);
console.log(`r5 = ${r5}`);

// 从字符串中提取字符串的3中方法 slice() substr() substring()

// slice()
// 可以接收1个或2个参数
// 第1个参数表示截取字符串片段的起始位置
// 第2个参数表示截取字符串的结束位置
// 第2个参数不填，表示截取到字符串的结尾
// 当传入负数时，会将所有负数当作字符串长度加上负值
console.log(`"hello world".slice(3) = ${"hello world".slice(3)}`);
console.log(`"hello world".slice(-3) = ${"hello world".slice(-3)}`);
console.log(`"hello world".slice(3, 7) = ${"hello world".slice(3, 7)}`);
console.log(`"hello world".slice(3, -4) = ${"hello world".slice(3, -4)}`);

// substr()
// 可以接收1个或2个参数
// 第1个参数表示截取字符串片段的起始位置
// 第1个参数为负，当成字符串长度加上该负值
// 第2个参数表示截取字符串的长度
// 第2个参数为负，将其转换为0，这意味着空字符串，因为第2个参数表示截取的字符长度
// 第2个参数不填，表示截取到字符串的结尾
console.log(`"hello world".substr(3) = ${"hello world".substr(3)}`);
console.log(`"hello world".substr(-3) = ${"hello world".substr(-3)}`);
console.log(`"hello world".substr(3, 7) = ${"hello world".substr(3, 7)}`);
console.log(`"hello world".substr(3, -4) = ${"hello world".substr(3, -4)}`);

// substring()
// 可以接收1个或2个参数
// 第1个参数表示截取字符串片段的起始位置
// 第2个参数表示截取字符串的结束位置
// 第2个参数不填，表示截取到字符串的结尾
// 所有负数参数都被转换为0
// substring(3, 0) = substring(0, 3) 方法会从较小的参数作为起点
console.log(`"hello world".substring(3) = ${"hello world".substring(3)}`);
console.log(`"hello world".substring(-3) = ${"hello world".substring(-3)}`);
console.log(`"hello world".substring(3, 7) = ${"hello world".substring(3, 7)}`);
console.log(`"hello world".substring(3, -4) = ${"hello world".substring(3, -4)}`);

// 字符串定位方法 indexOf() lastIndexOf()
// 如果没有找到则返回-1
// 第2个参数表示起始的搜索位置
console.log(`"hello world".indexOf("o") = ${"hello world".indexOf("o")}`);
console.log(`"hello world".lastIndexOf("o") = ${"hello world".lastIndexOf("o")}`);
console.log(`"hello world".indexOf("o", 6) = ${"hello world".indexOf("o", 6)}`);
console.log(`"hello world".lastIndexOf("o", 6) = ${"hello world".lastIndexOf("o", 6)}`);

// 找到所有的目标子字符串
let s6 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
let arr6 = new Array();
let p6 = s6.indexOf("e");
while(p6 != -1) {
    arr6.push(p6);
    p6 = s6.indexOf("e", p6 + 1);
}
console.log(arr6);

// 字符串包含方法 startsWith() endsWith() includes()
// startsWith()从索引0开始匹配字符串
// endsWith()开始于索引string.length - substring.length
// includes()检索整个字符串
let message_1 = "foobarbaz";
console.log(`"foobarbaz".startsWith("foo") = ${message_1.startsWith("foo")}`);
console.log(`"foobarbaz".startsWith("bar") = ${message_1.startsWith("bar")}`);
console.log(`"foobarbaz".endsWith("baz") = ${message_1.endsWith("baz")}`);
console.log(`"foobarbaz".endsWith("bar") = ${message_1.endsWith("bar")}`);
console.log(`"foobarbaz".includes("bar") = ${message_1.includes("bar")}`);
console.log(`"foobarbaz".includes("qux") = ${message_1.includes("qux")}`);

// startsWith() includes() 第2个参数表示开始搜索的位置
console.log(`"foobarbaz".startsWith("foo, 1") = ${message_1.startsWith("foo, 1")}`);
console.log(`"foobarbaz".includes("bar, 4") = ${message_1.includes("bar, 4")}`);

// endsWith() 第2个参数当作字符串结束的位置
console.log(`"foobarbaz".endsWith("bar") = ${message_1.endsWith("bar")}`);
console.log(`"foobarbaz".endsWith("bar, 6") = ${message_1.endsWith("bar", 6)}`);

// trim() 会去除字符串前后所有空格
// 返回字符串的副本，原字符串不受影响
let s7 = "   hello world  ";
let trimmedS7 = s7.trim();
console.log(`s7 = "${s7}"`);
console.log(`trimmedS7 = "${trimmedS7}"`);

// trimLeft() trimStart()
// 去除左边空格
console.log(`s7.trimLeft() = "${s7.trimLeft()}"`);
console.log(`s7.trimStart() = "${s7.trimStart()}"`);

// trimRight() trimEnd()
// 去除右边空格
console.log(`s7.trimRight() = "${s7.trimRight()}"`);
console.log(`s7.trimEnd() = "${s7.trimEnd()}"`);

// repeat()
// 接收1个整数参数，表示将字符串重复多少次，并拼接返回
let s8 = "na ";
console.log(`s8.repeat(16) + "batman" = ${s8.repeat(16) + "batman"}`);

// padStart() padEnd()
// 第一个参数：指定填充的长度
// 第二个参数：指定填充使用的字符或字符串(超过长度自动截断)，默认使用空格填充
// 如果长度小于原字符串长度，返回原始字符串
let s9 = "foo";

// padStart()
console.log(`s9.padStart(6) = "${s9.padStart(6)}"`);
console.log(`s9.padStart(2) = "${s9.padStart(2)}"`);
console.log(`s9.padStart(6, ".") = "${s9.padStart(6, ".")}"`);
console.log(`s9.padStart(8, "bar") = "${s9.padStart(8, "bar")}"`);

// padEnd()
console.log(`s9.padEnd(6) = "${s9.padEnd(6)}"`);
console.log(`s9.padEnd(2) = "${s9.padEnd(2)}"`);
console.log(`s9.padEnd(6, ".") = "${s9.padEnd(6, ".")}"`);
console.log(`s9.padEnd(8, "bar") = "${s9.padEnd(8, "bar")}"`);

// 使用迭代器便利字符
let message2 = "abc";
let iterator2 = message2[Symbol.iterator]();
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

// 使用for-of循环遍历字符串
let message3 = "abcd";
for(const c of message3) {
    console.log(c);
}

// 解构字符串，将字符串分割为字符数组
// ... 是解构操作符
console.log([...message3]);

// 大小写转换
// toLowerCase() toLocaleLowerCase()
// toUpperCase() toLocaleUpperCase()
let stringValue10 = "hello World";
console.log(`stringValue10.toUpperCase() = ${stringValue10.toUpperCase()}`);
console.log(`stringValue10.toLocaleUpperCase() = ${stringValue10.toLocaleUpperCase()}`);
console.log(`stringValue10.toLowerCase() = ${stringValue10.toLowerCase()}`);
console.log(`stringValue10.toLocaleLowerCase() = ${stringValue10.toLocaleLowerCase()}`);

// 字符串模式匹配

// match()
// 和RegExp的exec()等价
let text = "cat, bat, sat, fat";
let pattern = /.at/;
let matches = text.match(pattern);
console.log(matches);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);

// search()
// 返回模式第一个匹配的位置索引，如果没找到返回-1
let pos = text.search(/at/);
console.log(`pos = ${pos}`);

// replace()
// 第一个参数可以是RegExp或字符串，字符串不会被转换成正则表达式
// 如果第一个参数是字符串，只会替换第一个子字符串
// 想要替换所有子字符串，必须使用正则表达式并带全局标记
// 第二个参数可以是一个字符串或函数
let result = text.replace("at", "ond");
console.log(`text.replace("at", "ond") = ${result}`);
result = text.replace(/at/g, "ond");
console.log(`text.replace(/at/g, "ond") = ${result}`);

// 特殊字符序列
result = text.replace(/(.at)/g, "word ($1)");
console.log(`text.replace(/(.at)/g, "word ($1)") = ${result}`);

// replace()第二个参数使用函数
// 只有一个匹配项时，函数会收到3个参数
// 与整个模式匹配的字符串、匹配项在字符串中的开始位置、整个字符串
// 在多个捕获组的情况下，每个匹配捕获组的字符串也会作为参数传递给这个函数
// 但组后两个参数保持不变
// 函数返回一个字符串表示把匹配项替换成什么
function htmlEscape(text) {
    return text.replace(/[<>"&]/g, function(match, pos, originalText) {
        switch(match) {
            case "<":
                return "$lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;";
        }
    });
}
console.log(htmlEscape("<p class=\"greeting\">Hello World!</p>"));

// split()
// 根据传入的分隔符把字符串拆分成数组
// 分隔符可以是字符串或RegExp对象，字符串不会被当作正则处理
// 第二个参数表示数组的大小
let colorText = "red,blue,green,yellow";
let colors1 = colorText.split(",");
let colors2 = colorText.split(",", 2);
let colors3 = colorText.split(/[^,]+/);
console.log(colors1);
console.log(colors2);
console.log(colors3);

// localeCompare()
// 返回1表示大于
// 返回0表示等于
// 返回-1表示小于
let stringValue1 = "yellow";
console.log(`"yellow".localeCompare("brick") = ${stringValue1.localeCompare("brick")}`);
console.log(`"yellow".localeCompare("yellow") = ${stringValue1.localeCompare("yellow")}`);
console.log(`"yellow".localeCompare("zoo") = ${stringValue1.localeCompare("zoo")}`);
