function mengelompokkanAngka(arr) {
    let kel3 = [];
    let kelGanjil = []
    let kelGenap = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            kel3.push(arr[i])
        } else if (arr[i] % 2 != 0) {
            kelGanjil.push(arr[i]);
        } else {
            kelGenap.push(arr[i]);
        }
    }

    let rekap = [];
    rekap.push(kelGenap);
    rekap.push(kelGanjil);
    rekap.push(kel3);
    return rekap

}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]