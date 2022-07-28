/**
 * 13.3.1.5 screen.orientation
 * 
 * screen.orientation属性返回一个ScreenOrientation对象, 其中包含Screen Orientation API定义的屏幕信息.
 * 这里面最有意思的属性angle和type, 前者返回相对于默认状态下屏幕的角度, 后者返回以下4种枚举值之一:
 * 1. portrait-primary
 * 2. portrait-secondary
 * 3. landscape-primary
 * 4. landscape-secondary
 * 
 * 根据规范, 这些值的初始化取决于浏览器和设备状态.
 * 因此, 不能假设portrait-primary和0始终是初始值.
 * 这两个值主要用于确定设备旋转后浏览器的朝向变化.
 */

// 垂直看
console.log(screen.orientation.type);
console.log(screen.orientation.angle);

// 向左转
console.log(screen.orientation.type);
console.log(screen.orientation.angle);

// 向右转
console.log(screen.orientation.type);
console.log(screen.orientation.angle);
