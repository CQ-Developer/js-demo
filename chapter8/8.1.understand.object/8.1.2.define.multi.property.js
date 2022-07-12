// 定义多个属性

let book = {};

Object.defineProperties(book, {
    // 数据属性
    year_: {
        value: 2017
    },
    // 数据属性
    edition: {
        value: 1
    },
    // 访问器属性
    year: {
        get() {
            return this.year_;
        },
        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});
