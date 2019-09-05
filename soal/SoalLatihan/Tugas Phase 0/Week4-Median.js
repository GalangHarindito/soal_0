function cariMedian(arr) {

    if (arr.length % 2 != 0) {
        let center = (arr.length - 1) / 2
        let s = 0
        for (let a = 0; a < arr.length; a++) {
            if (a === center) {
                s += arr[a]
            }
        }
        return s
    } else {
        let center = (arr.length - 1) / 2;
        let ctr1 = center - 0.5;
        let ctr2 = center + 0.5;

        let s = 0;
        for (let x = 0; x < arr.length; x++) {
            if (x === ctr1 || x === ctr2) {
                s += arr[x]
            }
        }
        return s / 2
    }



}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5