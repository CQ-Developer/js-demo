function * generator() {
    // yield可以同时作为输入和输出
    return yield "aoo";
}

let gen = generator();

console.log(gen.next());
console.log(gen.next("boo"));