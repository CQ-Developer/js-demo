// for-of
// 用于遍历可迭代对象的元素
for (const key of [0, 1, 2, 3, 4]) {
    console.log(`element in arr : ${key}`);
}

// obj 不是一个可迭代对象
// 抛出异常 TypeError: obj is not iterable
let obj = {
    id: 1,
    name: 'chen',
    address: '南京'
};
for(const key of obj) {
    console.log(`element in obj : ${key}`);
}
