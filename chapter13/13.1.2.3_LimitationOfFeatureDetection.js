/**
 * 13.1.2.3 能力检测的局限
 * 
 * 通过检测一种或一组能力, 并不总能确定使用的是哪种浏览器.
 * 以下"浏览器检测"代码或其他类似代码经常出现在很多网站中, 但都没有正确使用能力检测:
 */

// 不要这样做, 不够特殊
let isFirefox = !!(navigator.vendor && navigator.vendorSub);

// 不要这样做, 假设太多
let isIE = !!(document.all && document.uniqueId);
