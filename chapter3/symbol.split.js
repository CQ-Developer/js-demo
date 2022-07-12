// Symbol.split
// String.prototype.split()

console.log(RegExp.prototype[Symbol.split]);
console.log('foobarbaz'.split(/bar/));

class FooSplitter {
    static [Symbol.split](target) {
        return target.split('foo');
    }
}
console.log('barfoobaz'.split(FooSplitter));

class StringSplitter {
    constructor(str) {
        this.str = str;
    }

    [Symbol.split](target) {
        return target.split(this.str);
    }
}
console.log('barfoobaz'.split(new StringSplitter('foo')));
