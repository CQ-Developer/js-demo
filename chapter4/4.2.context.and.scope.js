// 执行上下文和作用域
// 子作用域能访问父作用域中的一切
var color = 'blue';
function changeColor() {
    let anotherColor = 'red';
    function swapColor() {
        // color anotherColor tempColor
        let tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
    }
    // color anotherColor
    swapColor();
}
// color
changeColor();
console.log(color);
