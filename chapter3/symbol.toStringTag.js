// Symbol.toStringTag
// Object.prototype.toString()

let s = new Set();
console.log(s);
console.log(s.toString());
console.log(s[Symbol.toStringTag]);

class Foo {}
let foo = new Foo();
console.log(foo);
console.log(foo.toString());
console.log(foo[Symbol.toStringTag]);

class Bar {
    constructor() {
        this[Symbol.toStringTag] = 'Bar';
    }
}
let bar = new Bar();
console.log(bar);
console.log(bar.toString());
console.log(bar[Symbol.toStringTag]);
