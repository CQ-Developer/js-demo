/**
 * 13.3.2.1 Geolocation API
 * 
 * navigator.geolocation属性暴露了Geolocation API, 可以让浏览器脚本感知当前设备的地理位置.
 * 这个API只在安全执行环境种可用, 即通过HTTPS获取的脚本.
 * 
 * 这个API可以查询宿主系统并尽可能精确地返回设备的位置信息.
 * 根据宿主系统的硬件和配置, 返回结果的精度可能不一样.
 * 手机GPS的坐标系统可能具有极高的精度, 而IP地址的精度就要差很多.
 * 
 * 要获取浏览器当前的位置, 可以使用getCurrentPosition()方法.
 * 这个方法返回一个Coordinates对象, 其中包含的信息不一定完全依赖宿主系统的能力
 */
let p;
navigator.geolocation.getCurrentPosition(position => p = position);

/**
 * 这个position对象中有一个表示查询时间的时间戳, 以及包含坐标信息的Coordinates对象.
 */
navigator.geolocation.getCurrentPosition(position => {
    console.log(position.timestamp);
    console.log(position.coords);
});

/**
 * Coordinates对象中包含标准格式的经度和维度, 以及以米为单位的精度.
 * 精度同样以确定设备位置的机制来判断.
 */
navigator.geolocation.getCurrentPosition(position => {
    let c = position.coords;
    console.log(c.latitude, c.longitude);
    console.log(c.accuracy);
});

/**
 * Coordinates对象包含一个altitude属性(海拔高度), 是相对于1984世界大地坐标系地球表面的以米为单位的距离.
 * 此外也有一个altitudeAccuracy属性, 这个精度值单位也是米.
 * 为了取得Coordinates中包含的这些信息, 当前设备必须具备相应的能力, 比如GPS或高度计.
 * 很多设备因为没有能力测量高度, 所以这两个值经常有一个或两个是空的.
 */
navigator.geolocation.getCurrentPosition(position => {
    let c = position.coords;
    console.log(c.altitude);
    console.log(c.altitudeAccuracy);
});

/**
 * 获取浏览器地理位置并不能保证成功.
 * 因此getCurrentPosition()方法也接收失败回调函数作为第二个参数, 这个函数会收到一个PositionError对象.
 * 在失败的情况下, PositionError对象中会包含一个code属性和一个message属性, 后者包含对错误的简短描述.
 * code属性是一个整数, 表示以下3中错误:
 * 1.PERMISSION_DENIED: 浏览器未被允许访问设备位置.
 * 2.POSITION_UNAVALILABLE: 系统无法返回任何位置信息.
 * 3.TIMEOUT: 系统不能在超时时间内返回位置信息.
 */
navigator.geolocation.getCurrentPosition(() => {}, e => {
    console.log(e.code);
    console.log(e.message);
});

/**
 * Geolocation API 位置请求可以使用PositionOptions对象来配置, 作为第三个参数提供.
 * 这个对象支持以下3个属性:
 * 1.enableHighAccuracy: true表示返回的值应该尽量精确, 默认值false
 * 2.timeout: 毫秒, 表示在以TIMEOUT状态调用错误回调函数之前等待的最长时间, 默认值0xFFFFFFFF
 * 3.maximumAge: 毫秒, 表示返回坐标的最长有效期, 默认值0
 */