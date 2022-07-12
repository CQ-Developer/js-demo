// Symbol.match

console.log(RegExp.prototype[Symbol.match]);
console.log('foobar'.match(/bar/));

class FooMatcher {
    static [Symbol.match](target) {
        return target.includes('foo');
    }
}
console.log('foobar'.match(FooMatcher));
console.log('barbar'.match(FooMatcher));

class StringMatcher {
    constructor(str) {
        this.str = str;
    }

    [Symbol.match](target) {
        return target.includes(this.str);
    }
}
console.log('foobar'.match(new StringMatcher('foo')));
console.log('barbar'.match(new StringMatcher('qux')));
