/**
 * 13.3.1.4 screen.colorDepth和screen.pixelDepth
 * 
 * screen.colorDepth和screen.pixelDepth返回一样的值, 即显示器每像素颜色的位深.
 * 
 * 根据CSS对象模型规范:
 * screen.colorDepth和screen.pixelDepth属性应该返回输出设备中每像素用于显示颜色的位数, 不包含alpha通道.
 */
console.log(screen.colorDepth);
console.log(screen.pixelDepth);
