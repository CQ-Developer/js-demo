class Counter {
    /**
     * 构造函数
     * 
     * @param {Number} limit 最大值
     */
    constructor(limit) {
        this.limit = limit;
    }
    /**
     * 迭代器工厂函数
     * 
     * @returns {Iterator} 迭代器对象
     */
    [Symbol.iterator]() {
        let count = 1, limit = this.limit;
        return {
            next() {
                if (count <= limit) {
                    return { value: count++, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            },
            /**
             * 可选的return()方法用于指定Iterator提前关闭时执行的逻辑
             */
            return() {
                console.log("exiting early");
                return { done: true };
            }
        };
    }
}

let counter = new Counter(5);
for (let i of counter) {
    // 提前退出迭代器
    if (i > 2) {
        break;
    }
    console.log(i);
}

// 提前退出迭代器
let [a, b] = counter;

let arr = [1, 2, 3, 4, 5];
let iterator = arr[Symbol.iterator]();
for (let i of iterator) {
    if (i > 2) {
        break;
    }
    console.log(i);
}
// 没有关闭的迭代器可以继续之前的迭代
for (let i of iterator) {
    console.log(i);
}