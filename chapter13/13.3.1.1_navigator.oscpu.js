/**
 * 13.3.1.1 navigator.oscpu
 * 
 * navigator.oscpu属性是一个字符串, 通常对应用户代理字符串中操作系统/系统架构相关信息.
 * 根据HTML实时标准:
 * oscpu属性的获取方法必须返回空字符串或表示浏览器所在平台的字符串,
 * 比如"Windows NT 10.0; Win64; x64"或"Linux x86_64"
 */
console.log(navigator.userAgent);
console.log(navigator.oscpu);
