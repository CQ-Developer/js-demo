/**
 * 9.1.8 代理的问题与不足
 * 
 * 2.代理与内部槽位
 * 
 * 代理与内置应用类型的实例通常可以很好的协同, 但有些ECMAScript内置类型可能会依赖代理无法控制的机制
 * 结果导致在代理上调用某些方法会出错
 * 
 * 典型的就是Date类型
 * 根据ECMAScript规范, Date类型方法的执行以来this值上的内部槽位[[NumberDate]]
 * 代理对象上不存在这个内部槽位, 而且这个内部槽位的值也不能通过普通的get()和set()操作访问到
 * 于是代理拦截后本应转发给目标对象的方法会抛出TypeError
 */
let target = new Date();
let proxy = new Proxy(target, {});

console.log(proxy instanceof Date);

// TypeError: this is not a Date object
proxy.getDate();
