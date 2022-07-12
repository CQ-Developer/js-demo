// bread
let n1 = 0;
for(let i = 1; i < 10; i++) {
    if(i % 5 == 0) {
        break;
    }
    n1++;
}
console.log(`break, n1 = ${n1}`);

// continue
let n2 = 0;
for(let i = 1; i < 10; i++) {
    if(i % 5 == 0) {
        continue;
    }
    n2++;
}
console.log(`continue, n2 = ${n2}`);

// break label
let n3 = 0;
outter: for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        if(i == 5 && j == 5) {
            break outter;
        }
        n3++;
    }
}
console.log(`break label, n3 = ${n3}`);

// continue lable
let n4 = 0;
outter: for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        if(i == 5 && j == 5) {
            continue outter;
        }
        n4++;
    }
}
console.log(`break label, n4 = ${n4}`);
