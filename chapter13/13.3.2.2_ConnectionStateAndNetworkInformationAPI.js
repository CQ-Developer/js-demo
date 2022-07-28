/**
 * 13.3.2.2 Connection State 和 NetworkInformation API
 * 
 * 浏览器会跟踪网络连接状态并以两种方式暴露这些信息: 连接事件, navigator.onLine属性.
 * 在设备连接到网络时, 浏览器会记录这个事实并在window对象触发onLine事件.
 * 相应地, 当设备断开网络连接后, 浏览器会在window对象上触发offline事件.
 * 任何时候都可以通过navigator.onLine属性来确定浏览器的联网状态.
 * 这个属性返回一个布尔值, 表示浏览器是否联网.
 */
const connectionStateChange = () => console.log(navigator.onLine);

window.addEventListener("online", connectionStateChange);
window.addEventListener("offline", connectionStateChange);

/**
 * navigator对象还暴露了NetworkInformation API, 可以通过navigator.connection属性使用.
 * 这个API提供了一些只读属性, 并为连接属性变化事件处理程序定义了一个事件对象.
 * 
 * 以下是NetworkInformation API暴露的属性.
 * 1.downlink: 整数, 表示当前设备的带宽, 以Mbit/s为单位, 舍入到最接近的25kbit/s
 * 2.downlinkMax: 整数, 表示当前设备最大的下行宽带, 以Mbit/s为单位, 根据网络的第一跳来确定.
 * 3.effectiveType: 字符串枚举值, 表示连接速度和质量.
 * 4.rtt: 毫秒, 表示当前网络实际的往返事件, 舍入为最接近的25毫秒.
 * 5.type: 字符串枚举值, 表示网络连接技术.
 * 6.saveData: 布尔值, 表示用户设备是否启用了"节流"模式
 * 7.onchange: 事件处理程序, 会在任何连接状态变化时激发一个change事件.
 */
console.log(navigator.connection.downlink);
console.log(navigator.connection.downlinkMax);
console.log(navigator.connection.effectiveType);
console.log(navigator.connection.rtt);
console.log(navigator.connection.type);
console.log(navigator.connection.saveData);
navigator.connection.addEventListener("change", (event) => {});
