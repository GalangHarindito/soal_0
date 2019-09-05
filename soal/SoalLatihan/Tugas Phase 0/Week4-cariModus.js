function cariModus(arr) {

    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1.push(arr[i])
    }

    arr1.sort();
    for (let x = 0; x < arr1.length; x++) {
        if (arr1[x] === arr1[x + 1]) {
            arr1.splice(x, 1);
            x--
        }
    }

    let jml = [];
    for (let u = 0; u < arr1.length; u++) {
        let s = 0;
        for (let b = 0; b < arr.length; b++) {
            if (arr1[u] === arr[b]) {
                s++
            }
        }
        jml.push(s);
    }

    for (let e = 0; e < arr1.length; e++) {
        if (jml[e] >= jml[e + 1]) {
            arr1.splice(e + 1, 1);
            jml.splice(e + 1, 1);
            e--
        } else if (jml[e] < jml[e + 1]) {
            arr1.splice(e, 1);
            jml.splice(e, 1)
        }
    }
    return arr1[0]
} //end of function

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1