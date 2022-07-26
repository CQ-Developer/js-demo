/**
 * 12.2.2 操作地址
 * 
 * 可以通过修改location对象修改浏览器的地址.
 * 首先, 最常见的是使用assign()方法并传入一个URL:
 */
location.assign("https://www.baidu.com");

/**
 * 上面的代码会立即启动导航到新URL的操作, 同时在浏览器历史记录中增加一条记录.
 * 
 * 如果给location.href或window.location设置一个URL, 也会以同一个URL值调用assign()方法.
 * 这两种方式都会执行与显示调用assign()一样的操作
 */
window.location = "https://www.baidu.com";
location.href = "https://www.baidu.com";

/**
 * 修改location对象的属性也会修改当前加载的页面.
 * 其中, hash, search, hostname, pathname, port属性被设置为新值之后都会修改当前URL.
 */
location.hash = "#section1";
location.search = "?q=javascript";
location.hostname = "www.somewhere.com";
location.pathname = "mydir";
location.port = 8080;

/**
 * 在以前面的方式修改URL之后, 浏览器历史记录中就会增加相应的记录.
 * 当用户点击"后退"按钮时, 就会导航到前一个页面.
 * 如果不希望增加历史记录, 可以使用replace()方法.
 * 这个方法接收一个URL参数, 但重新加载后不会增加历史记录.
 * 调用replace()之后, 用户不能回到前一页.
 */
setTimeout(() => location.replace("https://www.baidu.com"), 1000);

/**
 * 最后一个修改地址的方式reload(), 它能重新加载当前显示的页面.
 * 调用reload()而不传参数, 页面会以最有效的方式重新加载.
 * 也就是说, 如果页面自上次请求以来没有修改过, 浏览器可能会从缓存中加载页面.
 * 如果想强制从服务器重新加载, 可以给reload()传入true.
 * 
 * 脚本中位于reload()调用之后的代码可能执行也可能不执行, 这取决于网络延迟和系统资源等因素.
 * 为此, 最好把reload()作为最后一行代码.
 */
location.reload();
location.reload(true);
