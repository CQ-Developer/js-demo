// 14.2.2 动态样式

// 动态加载外部CSS文件
function loadStyle(url) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;

    let head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
}

// 动态添加CSS样式并支持IE浏览器
function loadStyleString(css) {
    let style = document.createElement("style");
    style.type = "text/css";

    try {
        style.appendChild(document.createTextNode(css));
    } catch (e) {
        style.styleSheet.cssText = css;
    }

    let head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
}
