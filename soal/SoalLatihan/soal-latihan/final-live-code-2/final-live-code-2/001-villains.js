/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan

Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 3 villains
3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/

// Algoritma / Pseudocode here..
/*
algoritma:
1. create a variable with the value of 0
2. looping 
3. count each traps and assign it to step 1

*/

function test(array) {

    let limit = 3;
    let brik = 0;
    let villain = [];
    let arr = array;

    for (let i = 0; i < arr.length; i++) {
        if (limit > 0) {
            if (arr[i] === '@') {
                limit--
            } else if (arr[i] === 'Villain') {
                villain.push(arr[i])
            }
        } else {
            brik++;
            break;
        }
    }

    if (brik > 0) {
        return `You die, you got ${villain.length} villains`
    } else {
        return `Nice Work! you got ${villain.length} villains`
    }




}


console.log(test(['*', '*', '@', '*', 'Villain', '*', '@', 'Villain']));
console.log(test(['*', '*', '@', '*', '@', 'Villain', '*', 'Villain', 'Villain', '@']));
console.log(test(['*', '*', '@', '*', '@', 'Villain', '*', 'Villain', '@', 'Villain']));

// 11 mins