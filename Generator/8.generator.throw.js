function* generator() {
    yield* [1, 2, 3];
}

const gen = generator();

// generator {<suspended>}
console.log(gen);

try {
    // throw()会在暂停的时候将一个提供的错误注入到Generator中
    // 如果错误未被处理, 生成器就会关闭
    gen.throw("foo");
} catch (e) {
    console.log(e);
}

// generator {<suspended>}
console.log(gen);