/**
 * 13.3.2.3 Battery Status API
 * 
 * 浏览器可以访问设备电池即充电状态的信息.
 * navigator.getBattery()方法会返回一个Promise实例, 解决为一个BatteryManager对象.
 */
navigator.getBattery().then(b => console.log(b));

/**
 * 这个API还提供了4个事件属性, 可用于设置在相应的电池事件发生时的回调函数.
 * 可以通过给BatteryManager添加事件监听器, 也可以通过给事件属性赋值来使用这些属性.
 */
 navigator.getBattery().then(battery => {
    // 添加充电状态变化时的处理程序
    battery.addEventListener("chargingchange", () => console.log("chargingchange"));

    // 添加充电时间变化时的处理程序
    battery.addEventListener("chargingtimechange", () => console.log("chargingtimechange"));

    // 添加放电时间变化时的处理程序
    battery.addEventListener("dischargingtimechange", () => console.log("dischargingtimechange"));

    // 添加电量百分比变化的处理程序
    battery.addEventListener("levelchange", () => console.log("levelchange"));
 });
 