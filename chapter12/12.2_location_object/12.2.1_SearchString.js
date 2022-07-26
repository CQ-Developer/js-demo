/**
 * 12.1.1 查询字符串
 * 
 * location的多数信息都可以通过属性获取.
 * 但是URL中的查询字符串并不容易使用.
 * 
 * 下面的函数解析了查询字符串, 并返回一个以每个查询参数为属性的对象
 */
let getQueryStringArgs = function() {
    // 取得没有开头问好的查询字符串
    let qs = location.search.length > 0 ? location.search.substring(1) : "";
    // 保存数据的对象
    let args = {};

    // 把每个参数添加到args对象
    for (let item of qs.split("&").map(kv => kv.split("="))) {
        let name = decodeURIComponent(item[0]);
        let value = decodeURIComponent(item[1]);
        if (name.length) {
            args[name] = value;
        }
    }

    return args;
};

/**
 * URLSearchParams
 * 
 * URLSearchParams提供了一组标准API方法, 通过它们可以检查和修改查询字符串.
 * 给URLSearchParams构造函数传入一个查询字符串, 就可以创建一个实例.
 * 这个实例上暴露了get(), set(), delete()等方法, 可以对查询字符串执行相应的操作.
 */
let qs = "?q=javascript&num=10";
let searchParams = new URLSearchParams(qs);

console.log(searchParams.toString());
if (searchParams.has("num")) {
    console.log(searchParams.get("num"));
}

searchParams.set("page", 3);
console.log(searchParams.toString());

searchParams.delete("q");
console.log(searchParams.toString());

/**
 * 大多数支持URLSearchParams的浏览器也支持将URLSearchParams的实例用作可迭代对象
 */
for (let param of searchParams) {
    console.log(param);
}
