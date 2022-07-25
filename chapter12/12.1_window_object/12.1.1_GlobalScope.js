/**
 * 12.1.1 Global作用域
 * 
 * 因为window对象被复用为ES的Global对象,
 * 所以通过var声明的所有全局变量和函数都会变成window对象的属性和方法.
 */
var age = 29;
var sayAge = () => alert(this.age);

alert(window.age); // 29
window.sayAge();   // 29

/**
 * 如果在这里使用let或const代替var,
 * 则不会把变量添加给全局对象:
 */
let age = 29;
const sayAge = () => alert(this.age);

alert(window.age); // undefined
window.sayAge();   // Uncaught TypeError: window.sayAge is not a function

/**
 * 另外, 访问未声明的变量会抛出错误,
 * 但是可以在window对象上查询是否存在可能未声明的变量
 * 
 * JS中很多对象都暴露在全局作用域中,
 * 比如location和navigator, 因而它们也是window对象的属性.
 */
var newValue = oldValue;        // Uncaught ReferenceError: oldValue is not defined
var newValue = window.oldValue; // undefined
