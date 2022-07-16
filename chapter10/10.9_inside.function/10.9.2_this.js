/**
 * 10.9.2 this
 * 
 * 另一个特殊的对象是this, 它在标准函数和箭头函数中有不同的行为
 * 
 * 在标准函数中, this引用的是把函数当成方法调用的上下文对象, 这时候通常称其为this值
 * 在网页的全局上下文中调用函数时, this指向windows
 */
color = "red";
let o = { color: "blue" };

/**
 * 在箭头函数中, this引用的时定义箭头函数的上下文
 */
// let sayColor = () => console.log(this.color);

function sayColor() {
    console.log(this.color);
}

sayColor();

o.sayColor = sayColor;
o.sayColor();

/**
 * 有读者知道, 在事件回调或定时回调中调用某个函数时, this值指向的并非想要的对象
 * 此时将回调函数写成箭头函数就可以解决问题
 * 这是因为箭头函数中的this会保留定义该函数时的上下文
 */
function King() {
    this.royaltyName = "Henry";
    // this引用King的实例
    setTimeout(() => console.log(this.royaltyName), 1000);
}

function Queen() {
    this.royaltyName = "Elizabeth";
    // this引用全局对象
    setTimeout(function() {
        console.log(this.royaltyName);
    }, 1000);
}

new King();
new Queen();
