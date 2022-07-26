/**
 * 12.3.2 注册处理程序
 * 
 * 现代浏览器支持navigator上的registerProtocolHandler()方法.
 * 这个方法可以把一个网站注册为处理某种特定类型信息应用程序.
 * 随着在线RSS阅读器和电子邮件客户端的流行, 可以借助这个方法将Web应用程序注册为像桌面软件一样的默认应用程序.
 * 
 * 要使用registerProtocolHandler()方法, 必须传入3个参数: 要处理的协议, 处理该协议的URL, 应用程序名称.
 * 比如, 要把一个Web应用程序注册为默认邮件客户端.
 * 
 * 这个例子为"mailto"协议注册了一个处理程序, 这样邮件地址就可以通过指定的Web应用程序打开.
 * 注意, 第二个参数是负责处理请求的URL, %s表示原始的请求.
 */
navigator.registerProtocolHandler("mailto", "http://www.somemailclient.com?cmd=%s", "Some Mail Client");
