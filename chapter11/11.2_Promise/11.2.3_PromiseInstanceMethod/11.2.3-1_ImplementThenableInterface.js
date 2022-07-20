/**
 * 11.2.3_1 实现Thenable接口
 * 
 * 在ES暴露的异步结构中, 任何对象都有一个then()方法
 * 这个方法被认为实现了Thenable接口
 * 
 * ES的Promise类型实现了Thenable接口
 * 这个简化的接口跟TS或其他包中的接口或类型定义不同, 它们都设定了Thenable接口更具体的形式
 */
class MyThenable {
    then() {}
}