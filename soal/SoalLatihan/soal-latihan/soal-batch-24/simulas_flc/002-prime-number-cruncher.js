/*
-------------------
Prime Number Cruncher
-------------------

Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.

7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 7.
22 BUKAN bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

PROBLEM:
Disediakan sebuah function primeNumberCruncher yang menerima sebuah parameter
berupa number, dan mengembalikan kumpulan angka prima yang lebih besar
dari rata-rata kumpulan angka prima dari inputan parameter tersebut.

Contoh 1:
---------
input: 10

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7 ]
 - 2 + 3 + 5 + 7 = 17
 - AVERAGE: 17/4 = 4.25

output: [5, 7]

Contoh 2:
---------
input: 44

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
 - 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 + 29 + 31 + 37 + 41 + 43 = 281
 - AVERAGE: 281/14 = 20.07

Output: [ 23, 29, 31, 37, 41, 43 ]

Contoh 3:
---------
input: 23

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
 - 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 = 100
 - AVERAGE: 100/9 = 11.11

output: [ 13, 17, 19, 23 ]

RULES
-----
 - DILARANG MENGGUNAKAN BUILT-IN FUNCTION JS APAPUN SELAIN .push 

*/
function numberPrimeCruncher(angka) {

    var result = [];

    if(angka === 0 || angka === 1){
        return result;
    } 
    else {

        for(var i = 0; i <= angka; i++){
        var counter = 0;
            for(var j = 1; j <= i; j++){
                if(i % j === 0){
                    counter++;
                    console.log(counter)
                }
            }
            // console.log(counter + " " + i)
            if(counter === 2){
                result.push(i);
        
            }
        }
    }
    // console.log(result)

    var sum = 0;
    var divisor = result.length
    console.log(result)
    // console.log(divisor)

    for(var k = 0; k < result.length; k++){
        sum += result[k];
    }

    var average = Math.floor(sum/divisor);
    var primeNum = [];
    
    for(var a = 1; a < result.length; a++){
        if(result[a] > average){
            primeNum.push(result[a]);
        }
    }
    // return primeNum;
}

console.log(numberPrimeCruncher(10)); // [ 5, 7 ]
console.log(numberPrimeCruncher(44)); // [ 23, 29, 31, 37, 41, 43 ]
console.log(numberPrimeCruncher(23)); // [ 13, 17, 19, 23 ]
console.log(numberPrimeCruncher(1)); // []
console.log(numberPrimeCruncher(0)); // []