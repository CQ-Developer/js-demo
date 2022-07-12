// 作用域链增强 - 伪代码
function buildUrl() {
    let qs = '?debug=true';

    with(location) {
        // let 声明不能在代码块外部被访问到
        let url = href + qs;
    }

    // url 改成 var 才能被访问到
    // var 声明的变量会成为函数上下文的一部分
    return url;
}
