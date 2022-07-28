/**
 * 13.2.2.1 伪造用户代理
 * 
 * 通过检测用户代理来识别浏览器并不是完美的方式, 毕竟这个字符串是可以造假的.
 * 只不过实现window.navigator对象的浏览器都会提供userAgent这个只读属性.
 * 因此, 简单地给这个属性设置其他值不会有效
 */
console.log(window.navigator.userAgent);
window.navigator.userAgent = "foobar";
console.log(window.navigator.userAgent);

/**
 * 不过, 通过简单的办法可以绕过这个限制.
 * 比如, 有些浏览器提供伪私有的__defineGetter__方法, 利用它可以篡改用户代理字符串:
 */
 console.log(window.navigator.userAgent);
 window.navigator.__defineGetter__("userAgent", () => "foorbar");
 console.log(window.navigator.userAgent);