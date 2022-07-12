// 内存管理

function createPerson(name) {
    let localPerson = new Object();
    localPerson.name = name;
    return localPerson;
}
let globalPerson = createPerson('jack');
console.log(globalPerson.name);

// 解除 globalPerson 对值的引用
globalPerson = null;
console.log(globalPerson);
