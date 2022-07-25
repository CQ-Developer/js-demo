/**
 * 12.1.5 视口位置
 * 
 * 浏览器窗口尺寸通常无法满足完整显示整个页面, 为此用户可以通过滚动, 在有限的视口中产看文档
 * 度量文档相对于视口滚动距离的属性有两队, 返回值相等:
 * window.pageXoffset / window.scrollX
 * window.pageYoffset / window.scrolly
 * 
 * 可以使用scroll(), scrollTo(), scrollBy()方法滚动页面.
 * 这3个方法都接收表示相对视口距离的x和y坐标, 这两个参数在前两个方法中表示要滚动到的坐标
 * 在最后一个方法中表示滚动的距离.
 */
window.scrollBy(0, 100);   // 相对于当前视口向下滚动100像素
window.scrollBy(40, 0);    // 相对于当前视口向右滚动40像素
window.scrollTo(0, 0);     // 滚动到页面左上角
window.scrollTo(100, 100); // 滚动到距离屏幕左边及顶边各100像素的位置

/**
 * 这几个方法也都接收一个ScrollToOptions字典,
 * 除了提供偏移值, 还可以通过behavior属性告诉浏览器是否平滑移动
 */
window.scrollTo({ left: 100, top: 100, behavior: "auto" });   // 正常滚动
window.scrollTo({ left: 100, top: 100, behavior: "smooth" }); // 平滑滚动
