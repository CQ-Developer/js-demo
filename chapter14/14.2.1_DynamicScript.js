// 实现动态脚本加载
// 将过程抽象为一个函数
function loadScript(url) {
    let script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
}

// 直接插入JS代码并针对IE浏览器的处理
function loadScriptString(code) {
    let script = document.createElement("script");
    script.type = "text/javascript";
    try {
        script.appendChild(document.createTextNode(code));
    } catch (e) {
        script.text = code;
    }
    document.body.appendChild(script);
}