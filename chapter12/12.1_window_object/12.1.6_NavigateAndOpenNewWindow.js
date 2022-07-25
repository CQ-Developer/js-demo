/**
 * 12.1.6 导航与打开新窗口
 * 
 * window.open()方法可以用于导航到指定URL, 也可以用于打开新浏览器窗口.
 * 这个方法接收4个参数:
 * 1.要加载的URL
 * 2.目标窗口
 * 3.特性字符串
 * 4.表示新窗口在浏览器历史记录中是否替代当前加载页面的布尔值
 * 
 * 如果window.open()的第二个参数是一个已经存在的窗口或窗格的名字, 则会在对应的窗口或窗格中打开URL
 * 
 * 执行这行代码的结果就如同用户点击了一个href属性为"http://www.wrox.com", target属性为"topFrame"的链接.
 * 如果有一个窗口名叫"topFrame", 则这个窗口就会打开这个URL,
 * 否则会打开一个新窗口并将其命名为"topFrame".
 * 第二个参数也可以是一个特殊的窗口名称, 比如: _self, _parent, _top, _blank
 * 
 * <a href="http://www.wrox.com" target="topFrame" />
 */
window.open("http://www.wrox.com", "topFrame");
