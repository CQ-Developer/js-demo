/**
 * 13.1.2.2 检测浏览器
 * 
 * 可以根据对浏览器特性的检测并于已知的特性对比, 确认用户使用的是什么浏览器.
 * 这样可以获得比用户代码嗅探更准确的结果.
 * 但未来的浏览器版本可能不适用于这套方案.
 * 
 * 根据不同浏览器独有的行为推断出浏览器的身份.这里故意没有使用navigator.userAgent属性.
 */
class BrowserDetector {
    constructor() {
        // 测试条件编译
        // IE6~10支持
        this.isIE_Gte6Lte10 = /*@cc_on!@*/false;

        // 测试documentMode
        // IE7~11支持
        this.isIE_Gte7Lte11 = !!document.documentMode;

        // 测试StyleMedia构造函数
        // Edge20及以上版本支持
        this.isEdge_Gte20 = !!window.StyleMedia;

        // 测试Firefox专有扩展安装API
        // 所有版本的Firefox都支持
        this.isFirefox_Gte1 = typeof InstallTrigger != "undefined";

        // 测试chrome对象及其webstore属性
        // Opera的某些版本有window.chrome, 但没有window.chrome.webstore
        // 所有版本的Chrome都支持
        this.isChrome_Gte1 = !!window.chrome && !!window.chrome.webstore;

        // Safari早期版本会给构造函数的标签符追加"Constructor"字样
        // 如: window.Element.toString() -> [object ElementContructor]
        // Safari3~9.1支持
        this.isSafari_Gte3Lte9_1 = /constructor/i.test(window.Element);

        // 推送通知API暴露再window对象上
        // 使用默认参数值以避免undefined调用toString()
        // Safari7.1及以上版本支持
        this.isSafari_Gte7_1 = (({ pushNotification = {} } = {}) => pushNotification.toString() == "[object SafariRemoteNotification]")(window.safari);

        // 测试addons属性
        // Opera20及以上版本支持
        this.isOpera_Gte20 = !!window.opr && !!window.opr.addons;
    }

    isIE() {
        return this.isIE_Gte6Lte10 || this.isIE_Gte7Lte11;
    }

    isEdge() {
        return this.isEdge_Gte20 && this.isIE();
    }

    isFirefox() {
        return this.isFirefox_Gte1;
    }

    isChrome() {
        return this.isChrome_Gte1;
    }

    isSafari() {
        return this.isSafari_Gte3Lte9_1 || this.isSafari_Gte7_1;
    }

    isOpera() {
        return this.isOpera_Gte20;
    }
}
