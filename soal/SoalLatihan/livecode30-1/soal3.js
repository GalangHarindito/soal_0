/*
==================
Abbreviation Maker
===================

[INSTRUCTION]
Buatlah sebuah function yang menerima sebuah parameter berupa string.

function akan mengembalikan nilai/output berupa singkatan dari input yang diberikan 
dan juga kebalikan dari singkatan dari input yang diberikan.


[EXAMPLE]
input: string: 'Daring Fox Keren'
proses: singkatan dari 'Daring Fox Keren' adalah DFK dan kebalikannya adalah KFD
output: DFKKFD

input: string: 'Hatsune Miku Kawaii'
proses: singkatan dari 'Hatsune Miku Kawaii' adalah HMK dan kebalikannya adalah KMH
output: HMKKMH

input: string: 'Bagel'
proses: singkatan dari 'Bagel' adalah B begitu pula kebalikannya
output: BB

[RULE]
- HANYA BOLEH MENGGUNAKAN LOOPING DAN CONDITIONAL 
- DILARANG MENGGUNAKAN REGEX, split, slice, splice, substring
*/

function abbreviationMaker(string) {
    // let arr = [];
    // for (let i = 0; i < string.length; i++) {
    //     if (string[i] === string[i].toUpperCase()) {
    //         arr.push(string[i])
    //     }
    // }

    // let arr1 = [];
    // for (let a = 0; a < arr.length; a++) {
    //     if (arr[a] != ' ') {
    //         arr1.push(arr[a])
    //     }
    // }

    // let s = '';
    // for (let x = 0; x < arr1.length; x++) {
    //     s += arr1[x]
    // }
    // for (let y = arr1.length - 1; y >= 0; y--) {
    //     s += arr1[y]
    // }

    // return s
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] != ' ') {
            if (string[i] === string[i].toUpperCase()) {
                arr.push(string[i])
            }
        }
    }

    let s = '';
    for (let x = 0; x < arr.length; x++) {
        s += arr[x]
    }
    for (let y = arr.length - 1; y >= 0; y--) {
        s += arr[y]
    }


    return s
}

console.log(abbreviationMaker('Daring Fox Keren'))
    //DFKKFD
console.log(abbreviationMaker('Hatsune Miku Kawaii'))
    //HMKKMH
console.log(abbreviationMaker('Bagel'))
    //BB