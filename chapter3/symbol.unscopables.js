// Symbol.unscopables

let o = { foo: 'bar' };
with(o) {
    console.log(foo);
}

o[Symbol.unscopables] = { foo: true};
with(o) {
    console.log(foo);
}
