function fpb(angka1, angka2) {

    let arr1 = [];
    let arr2 = [];

    //Mencari arr1;
    for (let i = angka1; i > 0; i--) {
        if (angka1 % i === 0) {
            arr1.push(i)
        }
    }
    //Mencari arr2;
    for (let j = angka2; j > 0; j--) {
        if (angka2 % j === 0) {
            arr2.push(j)
        }
    }

    let s = 0;

    for (let a = 0; a < arr1.length; a++) {
        for (let b = 0; b < arr2.length; b++) {
            if (arr1[a] === arr2[b]) {
                s += arr1[a]
            }

        }
        if (s > 0) {
            break;
        }
    }

    return s

}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1