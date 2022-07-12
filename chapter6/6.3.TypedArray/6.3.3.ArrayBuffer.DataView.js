// 要读取或写入ArrayBuffer, 就必须通过视图
// 视图有不同的类型, 但引用的都是ArrayBuffer中存储的二进制数据

// DataView
// 这个视图转为文件IO和网络IO设计
// 其API支持对缓冲数据的高度控制, 但相比于其他类型的视图性能也差一些
// DataView对缓冲内容没有任何预设, 也不能迭代
// 必须对已有的ArrayBuffer读取或写入时才能创建DataView实例
// 这个实例可以使用全部或部分ArrayBuffer, 且维护着对该缓冲实例的引用, 以及视图在缓冲中开始的位置

const buf = new ArrayBuffer(16);

console.log("// DataView默认使用整个ArrayBuffer");
const fullDataView = new DataView(buf);
console.log(fullDataView.byteOffset);
console.log(fullDataView.byteLength);
console.log(fullDataView.buffer === buf);

// byteOffset = 0 表示视图从缓冲起点开始
// byteLength = 8 限制视图为前8个字节
console.log("// 构造函数接收一个可选的字节偏移量和字节长度");
const firstHalfDataView = new DataView(buf, 0, 8);
console.log(firstHalfDataView.byteOffset);
console.log(firstHalfDataView.byteLength);
console.log(firstHalfDataView.buffer === buf);

// byteOffset = 8 表示视图从缓冲的第9个字节开始
// byteLength 未指定,默认为剩余缓冲
console.log("// 如果不指定, DataView会使用剩余的缓冲");
const secondHalfDataView = new DataView(buf, 8);
console.log(secondHalfDataView.byteOffset);
console.log(secondHalfDataView.byteLength);
console.log(secondHalfDataView.buffer === buf);

// ElementType
// ES6中支持8种不同的ElementType
// ElementType     字节         说明                  等价的C类型                  值的范围
// Int8            1           8位有符号整数           signed char               -128 ~ 127
// Uint8           1           8位无符号整数           unsinged char             0 ~ 255
// Int16           2           16位有符号整数          short                     -32768 ~ 32767
// Uint16          2           16位无符号整数          unsigned short            0 ~ 65535
// Int32           4           32位有符号整数          int                       -2147483648 ~ 2147483647
// Uint32          4           32位无符号整数          unsinged int              0 ~ 4294967295
// Float32         4           32位IEEE-754浮点数     float                     -3.4e+38 ~ +3.4e+38
// Float64         8           64位IEEE-754浮点数     double                    -1.7e+308 ~ +1.7e+308

// DataView为上表中的每种类型都提供了get和set方法
// 这些方法使用byteOffset定位要读取或写入值的位置
// 类型是可以互相转换的

console.log("// 在内从中分配两个字节并声明一个DataView");
const buf1 = new ArrayBuffer(2);
const view = new DataView(buf1);

console.log(`
// 说明整个缓冲确实所有的二进制位都是0
// 检查第一个第二个字符`);
console.log(view.getInt8(0));
console.log(view.getInt8(1));

console.log(`
// 检查整个缓冲`);
console.log(view.getInt16(0));

console.log(`
// 将整个缓冲都设置为1
// 255的二进制表示是11111111(2^8 - 1)`);
view.setUint8(0, 255);
console.log(view);

console.log(`
// DataView会自动将数据转化为特定的ElementType
// 255的16进制表示是0xFF`);
view.setUint8(1, 0xFF);

console.log(`
// 现在, 缓冲里都是1了
// 如果把它当成二补数的有符号整数, 则应该是-1`);
console.log(view.getInt16(0));

// 字节序
// 指计算机系统维护的一种字节顺序的约定
// DataView只支持2中约定: 大端字节序, 小端字节序
// 大端字节序: 最高有效位保存在第一个字节, 最低有效位保存在最后一个字节
// 小端字节序: 最低有效位保存在第一个字节, 最高有效位保存在最后一个字节

// DataView并不遵守所在操作系统的原生字节序
// DataView所有API方法都已大端字节序作为默认值
// 接受一个可选的布尔值参数, 设置为true即可启用小端字节序

console.log(`
// 在内从中声明分配2个字节并声明一个DataView`);
const buf2 = new ArrayBuffer(2);
const view2 = new DataView(buf2);

console.log(`
// 填充缓冲
// 让第1位和最后1位都是1`);
view2.setUint8(0, 0x80);
view2.setUint8(1, 0x01);

console.log(`
// 缓冲内容
// 0x8  0x0  0x0  0x1
// 1000 0000 0000 0001
`);

console.log(`
// 按打断字节序读取Unit16
// 0x80是高字节, 0x01是低字节
// 0x8001 = 2^15 + 2^0 = 32768 + 1 = 32769`);
console.log(view2.getUint16(0));

console.log(`
// 按小段字节序读取Uint16
// 0x01是高字节, 0x80是低字节
// 0x0180 = 2^8 + 2^7 = 256 + 128 = 384`);
console.log(view2.getUint16(0, true));

console.log(`
// 按大端字节序写入Uint16
// 缓冲内容
// 0x0  0x0  0x0  0x4
// 0000 0000 0000 0100`);
view2.setUint16(0, 0x0004);
console.log(view2.getUint8(0));
console.log(view2.getUint8(1));

console.log(`
// 按小端字节序写入Uint16
// 缓冲内容
// 0x0  0x2  0x0  0x0
// 0000 0010 0000 0000`);
view2.setUint16(0, 0x0002, true);
console.log(view2.getUint8(0));
console.log(view2.getUint8(1));

// 边界情形
// DataView完成读写操作的前提是必须有充足的缓冲区
// 否则抛出 RangeError
const buf3 = new ArrayBuffer(6);
const view3 = new DataView(buf3);

console.log(`
// 尝试读取部分超出缓冲范围的值`);
// view3.getInt32(4);
// view3.getInt32(8);
// view3.getInt32(-1);
// view3.getInt32(4, 123);

// DataView在写入缓冲里会尽最大努力把一个值转换位适当的类型, 后备为0
// 如果无法转换则抛出错误
const buf4 = new ArrayBuffer(1);
const vie4 = new DataView(buf4);

console.log(`
// setInt8(0, 1.5)`);
vie4.setInt8(0, 1.5);
console.log(vie4.getInt8(0));

console.log(`
// setInt8(0, [4])`);
vie4.setInt8(0, [4]);
console.log(vie4.getInt8(0));

console.log(`
// setInt8(0, 'f')`);
vie4.setInt8(0, 'f');
console.log(vie4.getInt8(0));

console.log(`
// setInt8(0, Symbol())
// TypeError: Cannot convert a Symbol value to a number`);
// vie4.setInt8(0, Symbol());

