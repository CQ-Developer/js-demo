// Symbol.species

class Bar extends Array {}
class Baz extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

let bar = new Bar();
console.log(bar instanceof Array);
console.log(bar instanceof Bar);
bar = bar.concat('bar');
console.log(bar instanceof Array);
console.log(bar instanceof Bar);

let baz = new Baz();
console.log(baz instanceof Array);
console.log(baz instanceof Baz);
baz = baz.concat('baz')
console.log(baz instanceof Array);
console.log(baz instanceof Baz);
