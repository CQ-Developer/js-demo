let i = 35;

// if-else
if(i == 25) {
    console.log('25');
}
else if(i == 35) {
    console.log('35');
}
else if(i == 45) {
    console.log('45');
}
else {
    console.log('other');
}

// switch
// 使用全等进行判断
switch(i) {
    case 25:
        console.log('25');
        break;
    case '35':
        console.log('"35"');
        break;
    case 35:
        console.log('35');
        break;
    case 45:
        console.log('45');
        break;
    default:
        console.log('other');
}

// switch 可以使用表达式
switch('hello world') {
    case 'hello ' + 'world':
        console.log('greeting was found.');
        break;
    case 'goodbye':
        console.log('closing was found.');
        break;
    default:
        console.log('unexprected message was found.');
}

// switch 使用复杂表达式
let num = 25;
switch(true) {
    case num < 0:
        console.log('less than 0');
        break;
    case num >= 0 && num <= 10:
        console.log('between 0 and 10');
        break;
    case num > 10 && num <= 20:
        console.log('between 10 and 20');
        break;
    default:
        console.log('more than 20');
}
