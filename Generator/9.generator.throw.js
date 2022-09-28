function* generator() {
    for (const x of [1, 2, 3]) {
        try {
            // Generator内部处理了这个错误, 就不会关闭
            // 而且还可以恢复执行
            yield x;
        } catch (e) {
            // 错误处理会跳过对应的yield
        }
    }
}

const gen = generator();

console.log(gen.next());

gen.throw("foo");

console.log(gen.next());
