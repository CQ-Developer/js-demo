// for-in
// 用于枚举对象中的非符号属性
let obj = {
    id: 1,
    name: 'chen',
    birth: '2022'
};
for(const key in obj) {
    console.log(`property in obj : ${key}`);
}

// 数组
let arr = [1, 2, 3, 4];
for(const key in arr) {
    console.log(`property in arr : ${key}`);
}

// null
for (const key in null) {
    console.log(`property in null : ${key}`);
}

// undefined
for(const key in undefined) {
    console.log(`property in undefined : ${key}`);
}
