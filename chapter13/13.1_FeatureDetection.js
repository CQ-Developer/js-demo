/**
 * 13.1 能力检测
 * 
 * 能力检测, 又称特性检测.
 * 在JS运行时中使用一套简单的检测逻辑, 测试浏览器是否支持某种特性.
 * 这种方式不要求事先知道特定浏览器的信息, 只需检测自己关心的能力是否存在即可.
 * 
 * 能力检测基本模式如下:
 */
if (object.propertyInQuestion) {
    // 使用object.propertyInQuestion
}

/**
 * IE5之前的版本中没有document.getElementById()这个DOM方法,
 * 但可以通过document.all属性实现同样的功能.
 * 为此, 可以进行如下能力检测:
 */
function getElement(id) {
    if (document.getElementById) {
        return document.getElementById(id);
    } else if (document.all) {
        return document.all[id];
    } else {
        throw new Error("No way to retrieve element!");
    }
}

/**
 * 能力检测的关键是理解两个重要概念.
 * 首先, 应该先检测最常用的方式. 在多数情况下都可以避免无谓检测.
 * 其次, 必须检测切实需要的特性. 某个能力存在并不代表别的能力也存在.
 */
function getWindowWidth() {
    // 假设IE
    if (document.all) {
        // 不正确的用法
        return document.documentElement.clientWidth;
    } else {
        return window.innerWidth;
    }
}
