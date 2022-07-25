/**
 * 12.1.4 窗口大小
 * 
 * 在不同浏览器中确定浏览器窗口大小没有想象中那么容易
 * 所有现代浏览器都支持4个属性: innerWidth, innerHeight, outerWidth, outerHeight
 * outerWidth和outerHeight返回浏览器窗口自身大小
 * innerWidth和innerHeight返回浏览器窗口中页面视口的大小
 * 
 * document.documentElement.clientWidth和document.documentElement.clientHeight返回页面视口的宽度和高度
 * 
 * 浏览器窗口自身的精确尺寸不好确定, 但可以确定页面视口的大小
 */
let pageWidth = window.innerWidth;
let pageHeight = window.innerHeight;

if (typeof pageWidth != "number") {
    // 检查页面是否属于标准模式
    if (document.compatMode == "CSS1Compat") {
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
    } else {
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
    }
}

console.log(pageWidth, pageHeight);

/**
 * 可以使用resizeTo()和resizeBy()方法调整窗口大小.
 * 这两个方法都接收两个此参数,
 * resizeTo()接收新的宽度和高度,
 * resizeBy()接收宽度和高度各要缩放多少.
 */
window.resizeTo(100, 100); // 缩放到(100, 100)
window.resizeBy(100, 50);  // 缩放到(200, 150)
window.resizeTo(300, 300); // 缩放到(300, 300)
