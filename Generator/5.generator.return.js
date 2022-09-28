function * generator() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}

const gen = generator();
// generator {<suspended>}
console.log(gen);

// return()会强制Generator进入关闭状态
console.log(gen.return(4));
// generator {<closed>}
console.log(gen);
