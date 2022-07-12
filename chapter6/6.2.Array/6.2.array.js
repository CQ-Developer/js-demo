// Array
// 不同于其他语言，ECMAScript中数组的每个槽位可以存储任意类型的数据
// 会动态扩容

// 通过构造函数创建数组
let colors = new Array();

// 传入一个数字表示数组的length属性
colors = new Array(20);

// 传入要保存的元素
colors = new Array("red", "blue", "green");

// 使用构造函数可以忽略new关键字
colors = Array(3);
let names = Array("Grey");

// 数组字面量表示法
colors = ["red", "blue", "green"];
names = [];
let values = [1, 2];
console.log("// 数组字面量表示法");
console.log(colors);
console.log(names);
console.log(values);

console.log();

// ES6
// 新增静态方法 from() of()
// from()用于将类数组结转换为数组实例
// of()用于将一组参数转为数组实例

// Array.from()
// 第一个参数是一个类数组对象，即任何可迭代的结构
// 或者一个length属性和可索引元素的结构
console.log("// 使用from()将字符串拆分为单字符数组");
console.log(Array.from("Matt"));

console.log();

console.log("// 使用from()将集合转换为一个新数组")
const m = new Map().set(1, 2)
                   .set(3, 4);
const s = new Set().add(1)
                   .add(2)
                   .add(3)
                   .add(4);
console.log(Array.from(m));
console.log(Array.from(s));

console.log();

console.log("// 使用from()对现有数组执行浅复制");
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);
console.log(a1);
console.log(a2);
console.log(a1 === a2);

console.log();

console.log("// 可以使用任何可迭代对象");
const iter = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
};
console.log(Array.from(iter));

console.log();

console.log("// arguments对象可以被轻松地转换为数组");
function getArgsArray() {
    return Array.from(arguments);
}
console.log(getArgsArray(1, 2, 3, 4));

console.log();

console.log("// from()也能转换带有必要属性的自定义对象");
const arrayLikeObject = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
};
console.log(Array.from(arrayLikeObject));

console.log();

// Array.from()可以接收第二个可选的映射函数参数
// 这个函数可以增强新数组，无需像调用Array.from().map()那样先创建一个中间数组
// 还能接收第三个可选参数，用于指定映射函数中this的值，但这个重写的this值在箭头函数中不适用
console.log("// from()的第三个和第三个参数")
let arr1 = [1, 2, 3, 4,];
let arr2 = Array.from(arr1, x => x**2);
let arr3 = Array.from(arr1, function(x) { return x**this.exponent; }, { exponent: 3 });
console.log(arr2);
console.log(arr3);

console.log();

// Array.of()可以把一组参数转换为数组
// 用于替代在ES6之前常用的Array.prototype.slice.call(arguments)
// 一种一场笨拙的将arguments对象转化为数组的写法
console.log("// of()将参数转换为数组");
console.log(Array.of(1, 2, 3, 4));
console.log(Array.of(undefined));

console.log();

// 数组空位
// 可以使用一串逗号来创建空位
// ES6中重新定义了如何出处理这些空位
// 由于行为不一致和性能问题，在生产中要避免使用，或用undefined代替
console.log("// 创建一个空数组");
const options = [,,,,,];
console.log(options.length);
console.log(options);

console.log();

// ES6新增方法和迭代器和早期版本中的不同
// ES6新增方法普遍将这些空位当成存在的元素，只不过值为undefined
console.log("// ES6将空位当作undefined处理");
const options1 = [1, , , , 5];
for(const option of options1) {
    console.log(option === undefined);
}

console.log();

// 使用ES6的Array.from()创建包含3个空位的数组
console.log("// 使用from()创建包含3个空位的数组");
const arr4 = Array.from([,,,]);
for(const val of arr4) {
    console.log(val);
}

console.log();

// 使用of()创建包含3个空位的数组
console.log("// 使用展开操作符");
console.log(Array.of(...[,,,]));

console.log();

console.log("// for-of options1");
for(const [index, value] of options1.entries()) {
    console.log(index, value);

}

console.log();

// ES6之前的方法会忽略空位
console.log("// map()会跳过空位");
console.log(options1.map(() => 6));
console.log("// join()将空位作为空字符串");
console.log(options1.join("-"));

console.log();

// 通过中括号读取或设置数组的值
colors = ["red", "blue", "green"];
console.log("// 读取第一个元素");
console.log(colors[0]);

console.log("// 修改第三个元素")
colors[2] = "black";
console.log(colors);

console.log("// 添加第四个元素");
colors[3] = "brown";
console.log(colors);

// 使用空位补全
console.log("// 使用空位补全");
colors[10] = "test";
console.log(colors);

console.log();

// 数组中的length属性
console.log("// length属性")
console.log(colors.length);
console.log(names.length);

console.log();

// length属性非只读
// 通过修改length属性从数组末尾添加或删除属性
console.log("// 修改length裁剪数组");
colors.length = 2;
console.log(colors);
console.log("// 修改length扩充数组");
colors.length = 3;
console.log(colors[2]);

console.log();

// 使用length属性向数组末尾追加元素
console.log("// 使用length属性向数组末尾追加元素")
colors = ["red", "blue", "green"];
colors[colors.length] = "black";
colors[colors.length] = "brown";
console.log(colors);

console.log();

// length属性会被自动被更新到位置加一
// 数组最多可以包含4294967295个元素
console.log("// 自动更新length属性");
colors = ["red", "blue", "green"];
colors[99] = "black";
console.log(colors.length);

console.log();

// 判断一个对象是不是数组
// instanceof方式在只有一个全局作用域的情况下ok
let arr5 = [1, 2, 3, 4];
console.log("// 通过instanceof判断是否是一个数组")
console.log(arr5 instanceof Array);

console.log();

// isArray()方法
// 无论关心数组在哪个全局上下文中创建
console.log("// 使用Array.isArray()判断对象是否为数组");
console.log(Array.isArray(arr5));

console.log();

// 迭代器方法
// keys() 返回数组索引的迭代器
// values() 返回数组元素的迭代器
// entries() 返回索引和值键值对的迭代器
let arr6 = ["foo", "bar", "baz", "qux"];

// 因为这些方法都返回迭代器，所以可以将他们的内容
// 通过Array.from()直接转化为数组
console.log("// 通过Array.from()转换为数组");
let arr6Keys = Array.from(arr6.keys());
let arr6Values = Array.from(arr6.values());
let arr6Entries = Array.from(arr6.entries());
console.log(arr6Keys);
console.log(arr6Values);
console.log(arr6Entries);

console.log();

// ES6的解构可以非常容易的在循环中拆分键值对
console.log("// ES6解构语法");
for(const [index, element] of arr6.entries()) {
    console.log(`${index} : ${element}`);
}

console.log();

// 复制和填充方法
// ES6新增2个方法 copyWithin() 和 fill()

// 使用fill()方法可以向数组中插入全部或部分相同的值
// 开始索引用于指定填充的位置，可选。如果不指定则一直填充到数组末尾为止
// 负值索引从末尾开始计算，即数组长度加上此负值得到的正索引
const zeroes = [0, 0, 0, 0, 0];

console.log("// 用5填充整个数组");
zeroes.fill(5);
console.log(zeroes);
zeroes.fill(0);

console.log();

console.log("// 用6填充索引大于等于3的元素");
zeroes.fill(6, 3);
console.log(zeroes);
zeroes.fill(0);

console.log();

console.log("// 用7填充索引大于等于1且小于3的元素");
zeroes.fill(7, 1, 3);
console.log(zeroes);
zeroes.fill(0);

console.log();

console.log("// 用8填充索引大于等于1且小于4的元素");
zeroes.fill(8, -4, -1);
console.log(zeroes);
zeroes.fill(0);

console.log();

// fill()静默忽略超出数组边界、零长度及方向相反的索引范围
console.log("// 索引过低，忽略");
zeroes.fill(1, -10, -6);
console.log(zeroes);
zeroes.fill(0);

console.log();

console.log("// 索引过高，忽略");
zeroes.fill(1, 10, 15);
console.log(zeroes);
zeroes.fill(0);

console.log();

console.log("// 索引反向，忽略");
zeroes.fill(2, 4, 2);
console.log(zeroes);
zeroes.fill(0);

console.log();

console.log("// 索引部分可用，填充可用部分");
zeroes.fill(4, 3, 10);
console.log(zeroes);
zeroes.fill(0);

console.log();

// copyWithin()
// 按照指定范围浅复制数组中的部分内容
// 然后将它们插入到指定索引开始位置
// 开始索引和结束索引规则与fill()相同
let ints, reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset();

// 从ints中复制索引0开始的内容，插入到索引5开始的位置
// 在源索引或目标索引到达数组边界时停止
console.log("// 复制0开始的内同插入到5开始的位置");
ints.copyWithin(5);
console.log(ints);
reset();

console.log();

// 从ints中复制索引5开始的内容，插入到索引0开始的位置
console.log("// 复制5开始的内容插入到0开始的位置");
ints.copyWithin(0, 5);
console.log(ints);
reset();

console.log();

// 从ints中复制索引0开始的开始到索引3结束的位置
// 插入到索引4开始的位置
console.log("// 复制0到3索引的内容插入4开始的地方");
ints.copyWithin(4, 0, 3);
console.log(ints);
reset();

console.log();

// JavaScript引擎在插值前会完整复制范围内的值
// 因此复制期间不存在重写的风险
console.log("// 没有重写的风险");
ints.copyWithin(2, 0, 6);
console.log(ints);
reset();

console.log();

// 支持负索引，与fill()相对于数组末尾计算正向索引的过程是一样的
console.log("// 使用负索引");
ints.copyWithin(-4, -7, -3);
console.log(ints);
reset();

console.log();

// 默认忽略超出数组边界、零长度及方向相反的索引范围
console.log("// 索引过低忽略");
ints.copyWithin(1, -15, -12);
console.log(ints);
reset();

console.log();

console.log("// 索引过高忽略");
ints.copyWithin(1, 12, 15);
console.log(ints);
reset();

console.log();

console.log("// 索引反向忽略");
ints.copyWithin(2, 4, 2);
console.log(ints);
reset();

console.log();

console.log("// 索引部分可用，复制、填充可用部分");
ints.copyWithin(4, 7, 10);
console.log(ints);
reset();

// 转换方法
// toLocaleString()
// toString() 返回数组中每个值的等效字符串拼接而成的一个逗号分隔的字符串
// valueOf() 返回数组本身
console.log("// toString() valueOf()");
colors = ["red", "blue", "green"];
console.log(colors.toString());
console.log(colors.valueOf());
console.log(colors);

console.log();

console.log("// toLocaleString()");
let person1 = {
    toLocaleString() {
        return "Nikolaos";
    },
    toString() {
        return "Nicholas";
    }
};
let person2 = {
    toLocaleString() {
        return "Grigorios";
    },
    toString() {
        return "Greg";
    }
};
let people = [person1, person2];
console.log(people.toString());
console.log(people.toLocaleString());

console.log();

// join()
// 如果不传入任何值或传入undefined
// 则仍然使用逗号作为分隔符
// 如果数组中某一项是null或undefined
// 则在join() toLocaleString() toString() valueOf()返回的结果中以空字符串表示
console.log("// 使用不同的分隔符");
console.log(colors.join(":"));
console.log(colors.join("||"));

console.log();

// 栈方法
// push() 接收任意数量的参数，将它们添加到数组的末尾，返回数组的最新长度
// pop() 删除数组的最后一项，同时减少数组的length值，返回被删除的项
colors = new Array();

console.log("// push(..)");
let count = colors.push("red", "green");
console.log(count);
count = colors.push("black");
console.log(count);

console.log();

console.log("// pop()");
let item = colors.pop();
console.log(item);
console.log(colors.length);

console.log();

// 栈方法可以与数组的其他任何方法一起使用
console.log("// 和数组的其他方法一起使用");
colors = ["red", "blue"];
colors.push("brown");
colors[3] = "black";
console.log(colors.length);
item = colors.pop();
console.log(item);

console.log();

// 队列方法
// shift() 删除数组第一项并返回，数组长度减一
// 使用shift()和push()可以将数组作为队列来使用
console.log("// 队列方法shift()");
colors = new Array();
count = colors.push("red", "green");
console.log(count);

count = colors.push("black");
console.log(count);

item = colors.shift();
console.log(item);
console.log(colors.length);

console.log();

// unshift()和pop()
// 在数组开头添加任意多个值，然后返回新的数组长度
// 通过使用这两个方法，可以在相反方向上模拟队列
// 在数组头部添加新数据，在数组尾部取得数据
console.log("// 队列方法unshift()");
colors = new Array();
count = colors.push("red", "green");
console.log(count);

count = colors.unshift("black");
console.log(count);

item = colors.pop();
console.log(item);
console.log(colors.length);

console.log();

// 排序方法

// reverse() 将数组反向排序
console.log("// resverse()");
values = [1, 2, 3, 4, 5];
values.reverse();
console.log(values);

console.log();

// sort()
// 默认情况下为升序排列
// 会对数组每一项调用String()转型函数，然后比较字符串来决定顺序
// 就算数组的元素都是数值，也会把数组转换成字符串再比较排序
// 可以接收一个比较函数，用于判断哪个值应该排在前面
// 注意：sort()和reverse()方法都返回调用它们的数组的引用
console.log("// 默认转换成字符串再排序");
values = [0, 1, 5, 10, 15];
values.sort();
console.log(values);

console.log();

console.log("// 添加比较函数");
function compare1(value1, value2) {
    if(value1 < value2) {
        return -1;
    } else if(value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
values.sort(compare1);
console.log(values);

console.log();

console.log("// 使用比较函数产生降序效果");
function compare2(value1, value2) {
    if(value1 < value2) {
        return 1;
    } else if(value1 > value2) {
        return -1;
    } else {
        return 0;
    }
}
values.sort(compare2);
console.log(values);

console.log();

console.log("// 简写为一个箭头函数");
values = [0, 1, 5, 10, 15];
values.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
console.log(values);

console.log();

// 如果数组的元素是数值
// 或其valueOf()方法返回数值对象，如Date对象
// 比较函数可以直接使用减法
console.log("// 直接使用减法");
values = [1, 0, 5, 15, 10];
console.log(values.sort((a, b) => a - b));
console.log(values.sort((a, b) => -1 * (a - b)));
