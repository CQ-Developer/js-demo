/**
 * 13.1.2.1 检测特性
 * 
 * 可以按照能力将浏览器归类.
 * 如果你的应用程序需要使用特定的浏览器能力, 那么最好集中检测所有能力, 而不是等到用到的时候再重新检测.
 */

// 检测浏览器是否支持Netscape式的插件
let hasNSPlugins = !!(navigator.plugins && navigator.plugins.length);

// 检测浏览器是否具有DOM Level 1能力
let hasDOM1 = !!(document.getElementById && document.createElement && document.getElementsByTagName);
