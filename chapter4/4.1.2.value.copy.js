// 复制值

// 基本类型复制
// n2获得的是n1值的副本
// 相当于n2获得一个独立的5
// 两个值互不干扰，类似于java中的值传递
let n1 = 5;
let n2 = n1;
n1++;
console.log(`n1自增后, n1=${n1}, n2=${n2}`);

// 引用类型复制
// 对象存储在堆内存中，o1变量存储的是指向该堆内存的引用
// o2复制了o1的引用地址，使它们指向了同一个堆内存地址
// 因此o1和o2同时指向了同一个堆内存地址
// 对o1的操作，o2是可见的，类似于java中的引用传递
let o1 = new Object();
let o2 = o1;
o1.name = 'Chen';
console.log(`给o1添加name属性后, o2对其进行访问, o2.name=${o2.name}`);
