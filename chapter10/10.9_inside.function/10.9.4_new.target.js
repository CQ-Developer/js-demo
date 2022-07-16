/**
 * 10.9.4 new.target
 * 
 * ES中函数始终可以作为构造函数实例化一个新对象, 也可以作为普通函数被调用
 * ES6新增了检测函数是否使用new关键字调用的new.target属性
 * 如果函数是正常调用的, 则new.target的值是undefined
 * 如果是使用new关键字调用的, 则new.target将引用被调用的构造函数
 */
function King() {
    if (!new.target) {
        throw "King must be instantiated using 'new'";
    }
    console.log("King instantiated using 'new'");
}

new King();

King();
