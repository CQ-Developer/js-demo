// 标识符查找

let c1 = 'blue';
function getColor_1() {
    return c1;
}
console.log(getColor_1());

let c2 = 'blue';
function getColor_2() {
    let c2 = 'red';
    return c2;
}
console.log(getColor_2());

let c3 = 'blue';
function getColor_3() {
    let c3 = 'red';
    {
        let c3 = 'green';
        return c3;
    }
}
console.log(getColor_3());
