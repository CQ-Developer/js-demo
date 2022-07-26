/**
 * 12.3 navigator对象
 * 
 * navigator是由Netscape Navigator2最早引入浏览器的, 现在已经成为了客户端标识浏览器的标准.
 * 只要浏览器启用JavaScript, navigator对象就一定存在.
 * 但是与其他BOM对象一样, 每个浏览器都支持自己的属性.
 * 
 * navigator对象实现了:
 *   NavigatorID,
 *   NavigatorLanguage,
 *   NavigatorOnLine,
 *   NavigatorContentUtils,
 *   NavigatorStorage,
 *   NavigatorStorageUtils,
 *   NavigatorConcurrentHardware,
 *   NavigatorPlugins,
 *   NavigatorUserMedia
 * 接口定义的属性和方法.
 * 
 * navigator对象的属性通常用于确定浏览器的类型.
 */
navigator.activeVrDisplays;
navigator.appCodeName;
navigator.appName;
navigator.appVersion;

navigator.battery;
navigator.buildId;

navigator.connection;
navigator.cookieEnabled;
navigator.credentials;

navigator.deviceMemory;
navigator.doNotTrack;

navigator.geolocation;
navigator.getVRDisplays();
navigator.getUserMedia();

navigator.hardwareConcurrency;

navigator.javaEnabled();

navigator.language;
navigator.languages;
navigator.locks;

navigator.mediaCapabilities;
navigator.mediaDevices;
navigator.maxTouchPoints;
navigator.mimeTypes;

navigator.onLine;
navigator.oscpu;

navigator.permissions;
navigator.platform;
navigator.plugins;
navigator.product;
navigator.productSub;

navigator.registerProtocolHandler("", "");
navigator.requestMediaKeySystemAccess("", []);

navigator.sendBeacon("");
navigator.serviceWorker;
navigator.share();
navigator.storage;

navigator.userAgent;

navigator.vendor;
navigator.vendorSub;
navigator.vibrate([]);

navigator.webdriver;
