/**
 * 12.1.6.3 弹窗屏蔽程序
 * 
 * 所有现代浏览器都内置了屏蔽弹窗的程序, 因此大多数意料之外的弹窗都会被屏蔽.
 * 在浏览器屏蔽弹窗时, 可能会发生一些事.
 * 如果浏览器内置的弹窗屏蔽程序阻止了弹窗, 那么window.open()很可能会返回null.
 * 此时, 只要检查这个方法的返回值就可以知道弹窗是否被屏蔽.
 */
let baiduWin = window.open("https://www.baidu.com", "_blank");
if (baiduWin == null) {
    alert("The popup was blocked!");
}

/**
 * 在浏览器扩展或其他程序屏蔽弹窗时, window.open()通常会抛出错误.
 * 因此要准确检测弹窗是否被屏蔽, 除了检测window.open()的返回值, 还要把它用try/catch包装起来
 */
let blocked = false;

try {
    let baiduWin = window.open("https://www.baidu.com/s?wd=国庆", "_blank");
    if (baiduWin == null) {
        blocked = true;
    }
} catch(e) {
    blocked = true;
}

if(blocked) {
    alert("The popup was blocked!");
}
