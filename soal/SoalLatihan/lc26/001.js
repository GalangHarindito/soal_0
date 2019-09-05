/*
==============
Favorite Color
==============

[INSTRUCTIONS]
Kita tahu bahwa warna dasar adalah: 'red', 'yellow', 'blue'
Pada sebuah panelis pemilihan warna, function akan me-return output warna terbanyak.
Apabila jumlah 'red' dalam array lebih besar dari jumlah 'yellow' dan 'blue', maka function akan mereturn "red the most favorite!".
Apabila jumlah 'yellow' dalam array lebih besar dari jumlah 'red' dan 'blue', maka function akan mereturn "yellow the most favorite!".
Apabila jumlah 'blue' dalam array lebih besar dari jumlah 'red' dan 'yellow', maka function akan mereturn "blue the most favorite!".
Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "There are no clear winner!"

[RULE]
- Wajib menuliskan algoritma/pseudocode.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/

function favoriteColor(input) {

    if (input.length === 0) {
        return 'There are no favorite!'
    } else {

        let color = [];
        input.forEach(function(ele) {
            color.push(ele);
            for (let i = 0; i < color.length; i++) {
                let s = 0;
                for (let j = 0; j < color.length; j++) {
                    if (color[i] === color[j]) {
                        s++
                    }
                    if (s > 1) {
                        if (color[i] === color[j]) {
                            color.splice(j, 1);
                            i--;
                            j--;
                        }
                    }
                }
            }
        })

        let rekap = [];
        let panjang = [];
        for (let a = 0; a < color.length; a++) {
            let rek = [];

            for (let b = 0; b < input.length; b++) {
                if (color[a] === input[b]) {
                    rek.push(input[b])
                }
            }
            rekap.push(rek)
            panjang.push(rek.length)
        }

        for (let x = 0; x < color.length; x++) {
            if (panjang[x] > panjang[x + 1]) {
                panjang.splice(x + 1, 1)
                color.splice(x + 1, 1)
                x--
            } else if (panjang[x] < panjang[x + 1]) {
                panjang.splice(x, 1)
                color.splice(x, 1)
                x--
            }
        }



        return `${color[0]} the most favorite!`


    } //end else


} //akhir function

console.log(favoriteColor(['red', 'red', 'yellow'])); // "red the most favorite!"
console.log(favoriteColor(['blue', 'red', 'yellow', 'blue'])); // "blue the most favorite!"
console.log(favoriteColor(['yellow', 'yellow', 'yellow'])); // "yellow the most favorite!"
console.log(favoriteColor(['red'])); // "red the most favorite!"
console.log(favoriteColor([])); // "There are no favorite!"
