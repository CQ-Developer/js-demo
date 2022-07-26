/**
 * 12.3.1 检测插件
 * 
 * 检测浏览器是否安装了某个插件是开发中常见的需求.
 * 除IE10及更低版本的浏览器, 都可以通过plugins数组来确认.
 * 这个数组的每一项都包含如下属性:
 *   name: 插件名称
 *   description: 插件介绍
 *   filename: 插件的文件名
 *   length: 由当前插件处理的MIME类型数量
 * 
 * 通常, name属性包含识别插件所需的必要信息, 尽管不是特别准确.
 * 检测插件就是遍历浏览器中可用的插件, 并逐个比较插件的名称.
 */
let hasPlugin = function(name) {
    name = name.toLowerCase();
    
    for (let plugin of window.navigator.plugins) {
        if (plugin.name.toLocaleLowerCase().indexOf(name) > -1) {
            return true;
        }
    }

    return false;
};

/**
 * 旧版IE中的插件检测
 * 
 * IE10及更低版本中检测插件的问题比较多, 因为这些浏览器不支持Netscape式的插件.
 * 在这些IE中检测插件要使用专有的ActiveXObect, 并尝试实例化特定的插件.
 * IE中的插件是实现为COM对象的, 由唯一的字符串标识.
 * 因此, 要检测某个插件就必须知道其COM标识符.
 * 例如, Flash的标识符是"ShockwaveFlash.ShockwaveFlash".
 * 知道了这个信息后, 就可以像这样检测IE中是否安装了Flash插件.
 */
function hasIEPlugin(name) {
    try {
        new ActiveXObject(name);
        return true;
    } catch(e) {
        return false;
    }
}

/**
 * 因为检测插件涉及两种方式, 所以一般要针对特定插件写一个函数, 而不是使用通常的检测函数.
 */
function hasFlash() {
    var result = hasPlugin("Flash");
    if (!result) {
        result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
    }
    return result;
}

function hasQuickTime() {
    var result = hasPlugin("QuickTime");
    if (!result) {
        result = hasIEPlugin("QuickTime.QuickTime");
    }
    return result;
}
