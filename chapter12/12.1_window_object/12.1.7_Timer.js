/**
 * 12.1.7 定时器
 * 
 * JS在浏览器中是单线程执行的, 但允许使用定时器指定在某个时间之后或每隔一段时间就执行相应的代码.
 * setTimeout()用于指定在一定时间后执行某些代码, 而setInterval()用于指定每隔一段时间执行某些代码.
 * 
 * setTimeout()方法通常接收两个参数: 要执行的代码, 在执行回调函数前等待的时间
 * 第一个参数可以是包含JS代码的字符串或一个函数
 * 第二个参数是要等待的毫秒数, 而不是执行代码的确切时间.
 * JS是单线程的, 所以每次只能执行一段代码.
 * 为了调度不同代码的执行, JS维护了一个任务队列.
 * 其中的任务会按照添加到队列的先后顺序执行.
 * setTimeout()的第二个参数只是告诉JS引擎在指定的毫秒数后把任务添加到这个队列.
 * 如果队列是空的, 则会立即执行该代码.
 * 如果队列不是空的, 则代码必须等待前面的任务执行完才能执行.
 */
setTimeout(() => alert("Hello World!"), 1000);

/**
 * 调用setTimeout()时, 会返回一个表示该超时排期的数值ID.
 * 这个超时ID是被排期执行代码的唯一标识符, 可用于取消该任务.
 * 要取消等待中的排期任务, 可以调用clearTimeout()方法并传入超时ID.
 * 
 * 只要在指定时间到达之前调用clearTimeout(), 就可以取消超时任务.
 * 在任务执行之后再调用clearTimout()没有效果.
 */
let timeoutId = setTimeout(() => alert("Hello World!"), 1000);
clearTimeout(timeoutId);

/**
 * setInterval()与setTimeout()的使用方法类似, 只不过指定的任务会每隔指定时间就执行一次, 直到取消循环定时或页面卸载.
 * setInterval()同样可以接受两个参数: 要执行的代码, 把下一次执行定时代码的任务添加到队列要等待的时间.
 * 
 * 这里的关键点是, 第二个参数, 也就是时间间隔, 指的是向队列添加新任务之前等待的时间.
 */
setInterval(() => alert("hello World!"), 10000);

/**
 * setInterval()方法也会返回一个循环定时ID, 可以用于在未来某个时间点上取消循环定时.
 * 要取消循环定时, 可以调用clearInterval()并传入ID.
 */
let num = 0, max = 10, intervalId = null;
let incrementNumber = function() {
    num++;
    // 如果达到最大值则取消所有未执行的任务
    if (num == max) {
        clearInterval(intervalId);
        alert("Done");
    }
};
intervalId = setInterval(incrementNumber, 500);

/**
 * 这个例子也可以使用setTimeout()实现
 */
let incrementNumberA = function() {
    num++;
    if (num < max) {
        setTimeout(incrementNumberA, 500);
    } else {
        alert("Done");
    }
};
setTimeout(incrementNumberA, 500);
