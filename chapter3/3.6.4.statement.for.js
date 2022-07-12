// for
for(let i = 0; i < 10; i++) {
    console.log(`in for, i = ${i}`);
}

// 和上面的 for 相同
let i = 0;
while(i < 10) {
    console.log(`in while, i = ${i}`);
    i++;
}

// 无限循环
// for(;;) {
//     console.log('infinity loop');
// }

let count = 0;
for(; count < 10;) {
    console.log(`in for, count = ${count}`);
    count++;
}
