// Float32Array
// 实际上是一种视图, 允许JS运行时访问一块名为ArrayBuffer的预分配内存
// ArrayBuffer是所有定型狐族及试图引用的基本单位

// SharedArrayBuffer是ArrayBuffer的一个变体,
// 可以武训负值就在执行上下文间传递

// ArrayBuffer()
// 是一个普通的JS构造函数, 可用于在内存中分配特定数量的字节空间
console.log("// 通过ArrayBuffer()构造函数在内从中分配16字节");
const buf = new ArrayBuffer(16);
console.log(buf.byteLength);

// ArrayBuffer一经创建就不能再调整大小
// 可以通过slice()复制其全部内容或部分内容到一个新的实例中
console.log("// 使用slice()复制ArrayBuffer");
const buf1 = new ArrayBuffer(16);
const buf2 = buf1.slice(4, 12);
console.log(buf2.byteLength);
