function * generator() {
    yield 1;
    yield 2;
    yield 3;
}

// 在Generator上显示调用next()用处不大
// 把Generator当成Iterable用起来更方便
for (const i of generator()) {
    console.log(i);
}
