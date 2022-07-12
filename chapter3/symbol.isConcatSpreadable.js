let initial = ['foo'];

let array = ['bar'];
console.log(array[Symbol.isConcatSpreadable]);
console.log(initial.concat(array));
array[Symbol.isConcatSpreadable] = false;
console.log(initial.concat(array));

let arrayLikeObject = {length: 1, 0: 'baz'};
console.log(arrayLikeObject[Symbol.isConcatSpreadable]);
console.log(initial.concat(arrayLikeObject));
arrayLikeObject[Symbol.isConcatSpreadable] = true;
console.log(initial.concat(arrayLikeObject));

let otherObject = new Set().add('qux');
console.log(otherObject[Symbol.isConcatSpreadable]);
console.log(initial.concat(otherObject));
otherObject[Symbol.isConcatSpreadable] = true;
console.log(initial.concat(otherObject));