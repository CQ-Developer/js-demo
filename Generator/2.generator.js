function * generator() {
    console.log("running");
}

// 不打印
let gen = generator();

// Generator只会在初次调用next()方法后开始执行
gen.next();
