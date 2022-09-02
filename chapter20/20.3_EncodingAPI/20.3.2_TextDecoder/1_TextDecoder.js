/**
 * 20.3.2_1 批量解码
 * 
 * 批量指的是JS引擎会同步解码整个字符串
 * 对于非常长的字符串, 可能会花比较长时间
 * 批量解码时通过TextDecoder实例完成的
 * 
 * 解码器不关心传入的是哪种定型数组, 它只会专心解码整个二进制表示
 * 
 * 解码器是用于处理定型数组分散在多个索引上的字符的, 包括表情符号
 * 
 * 与TextEncoder不同, TextDecoder可以兼容很多字符编码
 */
const decoder = new TextDecoder();

console.log("// decode()");
const foo8Array = Uint8Array.of(102, 111, 111);
console.log(decoder.decode(foo8Array));

// 只包含8位字符的32位值被解码为UTF-8格式
// 解码得到的字符串中填充了空格
const foo32Array = Uint32Array.of(102, 111, 111);
console.log(decoder.decode(foo32Array));
console.log(decoder.decode(foo32Array).length);

// 😊
const face = Uint8Array.of(240, 159, 152, 138);
console.log(decoder.decode(face));

// 使用UTF-16
const utf16Decoder = new TextDecoder("utf-16");
const foo16Array = Uint16Array.of(102, 111, 111);
console.log(utf16Decoder.decode(foo16Array));
