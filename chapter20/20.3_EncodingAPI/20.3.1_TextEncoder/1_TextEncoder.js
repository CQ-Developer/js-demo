/**
 * 20.3.1_1 批量编码
 * 
 * 所谓批量, 指的是JS引擎会同步编码整个字符串
 * 对于较长的字符串, 可能会花较长事件
 * 
 * encode()
 * 批量编码是通过TextEncoder的实例完成的
 * 该方法接收一个字符串参数, 并以Uint8Array格式返回每个字符串的UTF-8编码
 * 
 * encodeInto()
 * 该方法接收参数: 一个字符串, 目标Uint8Array
 * 返回一个字典, 该字典包含read和written属性
 * read: 表示成功从源字符串读取了多少字符
 * written: 表示向目标数组写入了多少字符
 * 如果定型数组的空间不够, 编码就会提前终止
 * 
 * encode()要求分配一个新的Uint8Array, encodeInto()则不需要
 * 对于追求性能的应用, 这个差别可能会带来显著不同
 * 
 * [注意]
 * 文本编码会始终使用UTF-8格式, 而且必须写入Uint8Array实例
 * 使用其他类型数组会导致encodeInto()抛出错误
 */
const textEncoder = new TextEncoder();

console.log("// encode()");
const text = "foo";
const encodedText = textEncoder.encode(text);
// f的UTF-8编码是0x66(十进制102)
// o的UTF-8编码是0x6F(十进制111)
// 结果: Uint8Array(3) [ 102, 111, 111 ]
console.log(encodedText);
// 编码器是用于处理字符的
// 有些字符如表情符号, 在最终返回的数组中可能会占多个索引
const emoticons = "😊";
const encodedEmoticons = textEncoder.encode(emoticons);
console.log(encodedEmoticons);

console.log("// encodeInto()");
const fooArray = new Uint8Array(3);
const barArray = new Uint8Array(2);
const fooResult = textEncoder.encodeInto("foo", fooArray);
const barResult = textEncoder.encodeInto("bar", barArray);
console.log(fooArray);
console.log(fooResult);
console.log(barArray);
console.log(barResult);
