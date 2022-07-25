/**
 * 12.1.8 系统对话框
 * 
 * 使用alert(), confirm(), prompt()方法, 可以让浏览器调用系统对话框向用户显示消息.
 * 这些对话框与浏览器中显示的网页无关, 而且也不包含HTML.
 * 它们的外观由操作系统或浏览器决定, 无法使用CSS设置.
 * 此外, 这些对话框都是同步的模块对话框, 即在它们显示的时候, 代码会停止执行, 在它们消失以后, 代码才会恢复执行.
 * 
 * confirm()可以用来通知用户, 让用户选择是否继续执行.
 * 要直到用户点击了OK按钮还是Cancel按钮, 可以判断confirm()方法的返回值:
 * true表示单击了OK按钮, false表示单击了Cancel按钮
 */
if (confirm("Are you sure?")) {
    alert("I'm so glad you're sure!");
} else {
    alert("I'm sorry to hear you're not sure.");
}

/**
 * 提示框, 通过调用prompt()方法来显示.
 * 提示框的用途是提示用户输入消息.
 * 除了OK和Cancel按钮, 提示框还会显示一个文本框, 让用户输入内容.
 * prompt()方法接收两个参数: 要显示给用户的文本, 以及文本框的默认值.
 * 
 * 如果用户单击了OK按钮, 则prompt()会返回问框中的值.
 * 如果用户单击了Cancel按钮, 或对话框被关闭, 则prompt()会返回null.
 */
let result = prompt("What is your name?", "input your name here...");
if (result !== null && result != "input your name here...") {
    alert("Welcom, " + result);
}

/**
 * JS还可以显示另外两种对话框: find(), print()
 * 这两种对话框都是异步显示的, 即控制权会立即返回给脚本.
 * 用户在浏览器菜单上选择"查找"和"打印"时显示的就是这两种对话框.
 * 通过在window对象上调用find()和print()可以显示它们.
 */
window.print();
window.find();
