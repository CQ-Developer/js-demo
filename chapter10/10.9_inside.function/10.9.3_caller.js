/**
 * 10.9.3 caller
 * 
 * ES5也会给函数对象上添加一个属性: caller
 * 这个属性引用的是调用当前函数的函数, 或者如果是在全局作用域中调用的则为null
 * 
 * 以上代码会显示outer()函数的源代码
 * 这是因为outer()调用了inner(), inner.caller指向outer()
 * 如果要降低耦合度, 则可以通过arguments.callee.caller来引用同样的值
 * 
 * ES5也定义了arguments.caller, 但在严格模式下访问它会报错, 在非严格模式下则始终是undefined
 * 这是为了分清arguments.caller和函数的caller而故意为之
 */
function outer() {
    inner();
}

function inner() {
    console.log(inner.caller);
    console.log(arguments.callee.caller);
    console.log(arguments.caller);
}

outer();
