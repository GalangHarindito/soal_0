function angkaPalindrome(num) {


    let s = 0;


    while (s < 1) {

        num++

        let arr = String(num).split('');
        if (arr.length === 1) {
            s++
        } else {
            let arr1 = [];
            let arr2 = [];
            let center = (arr.length - 1) / 2;

            //mencari arr1
            for (let i = 0; i < center; i++) {
                arr1.push(arr[i])
            }

            for (let j = arr.length - 1; j > center; j--) {
                arr2.push(arr[j])
            }

            let str1 = arr1.join('');
            let str2 = arr2.join('');

            if (str1 === str2) {
                s++
            }

        }



    } //end while




    return num

} //end function

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001