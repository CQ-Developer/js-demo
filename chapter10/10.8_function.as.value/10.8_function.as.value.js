/**
 * 10.8 函数作为值
 * 
 * 因为函数名在ES中就是变量, 所以函数可以用在任何可以使用变量的地方
 * 这意味着不仅可以把函数作为参数传递给另一个函数, 而且还可以在一个函数中返回另一个函数
 * 
 * 这个函数接收两个参数
 * 第一个参数应该是一个函数, 第二个参数应该是要传给这个函数的值
 */
function callSomeFunction(someFunction, someArgument) {
    return someFunction(someArgument);
}

/**
 * 任何函数都可以像下面这样作为参数传递
 */
function add10(num) {
    return num + 10;
}

let result1 = callSomeFunction(add10, 10);
console.log(result1);

function getGreeting(name) {
    return "Hello, " + name;
}

let result2 = callSomeFunction(getGreeting, "Nicholas");
console.log(result2);

/**
 * 从一个函数中返回另一个函数也是可以的, 而且非常有用
 * 假设有一个包含对象的数组, 而我们想按照任意对象属性对数组进行排序
 * 为此, 可以定义一个sort()方法需要的比较函数, 它接收两个参数, 即要比较的值
 * 但这个比较函数还需要想办法解决根据哪个属性来排序
 * 这个问题可以通过定义一个根据属性名来创建的比较函数的函数解决
 */
function createComparisonFunction(propertyName) {
    return function(object1, object2) {
        let value1 = object1[propertyName];
        let value2 = object2[propertyName];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}

let data = [
    { name: "Zachary", age: 28 },
    { name: "Nicholas", age: 29 }
];

data.sort(createComparisonFunction("name"));
console.log(data[0].name);

data.sort(createComparisonFunction("age"));
console.log(data[0].name);
