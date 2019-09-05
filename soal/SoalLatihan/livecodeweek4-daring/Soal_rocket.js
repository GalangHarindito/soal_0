/*
===============
Boot Pair Count
===============

[INSTRUCTION]
Jack sedang merapikan gudang di toko Boot-nya, dia memiliki banyak tumpukan
boot-boot yang warnanya harus dipasangkan agar dapat dijual. Bila input yang
berisi huruf-huruf masing-masing mewakili suatu warna, tentukanlah ada berapa
banyak pasang boot yang siap dijual oleh Jack!

[EXAMPLE]
Bila input adalah ABAACBBA maka:
hasilnya adalah 3, karena ada dua pasang A dan satu pasang B.

- Bila tidak ada pasangan sama sekali, maka hasilnya adalah:
"Tidak ada pasangan sepatu boot ditemukan"
- Bila tidak ada boot sama sekali, maka hasilnya adalah:
"Tidak ada sepatu boot mohon cek kembali input anda"

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift()
2. dilarang menggunakan regex
*/

function bootPairCount(bootStr) {

    if (bootStr) {
        let arr = bootStr.split('')
        let arr1 = []
        arr.forEach(function(ele) {
            arr1.push(ele);
            for (let i = 0; i < arr1.length; i++) {
                let s = 0;
                for (let j = 0; j < arr1.length; j++) {
                    if (arr1[i] === arr1[j]) {
                        s++
                    }
                    if (s > 1) {
                        if (arr1[i] === arr1[j]) {
                            arr1.splice(j, 1);
                            j--;
                            i--;
                        }
                    }
                }
            }
        })

        let rek = [];
        for (let a = 0; a < arr1.length; a++) {
            console.log(arr1)
            let s = 0;
            for (let b = 0; b < arr.length; b++) {
                if (arr1[a] === arr[b]) {
                    s++
                }
            }
            rek.push(s)
        }
        let jml = 0;
        rek.forEach(function(z) {
            if (z > 1) {
                if (z % 2 === 0) {
                    jml += z / 2
                } else {
                    jml += (z - 1) / 2
                }
            }
        })


        if (jml == 0) {
            return 'Tidak ada Pasang sepatu'
        } else {
            return jml
        }


    } else {
        return 'Tidak ada sepatu boot mmohon cek kembali'
    } //endelse 






} //end of function

//TEST CASES
console.log(bootPairCount("ABBAACDAB")); // 3
console.log(bootPairCount("ABBCCDAD")); // 4
console.log(bootPairCount("ABCDE")); // Tidak ada pasangan sepatu boot ditemukan
console.log(bootPairCount()); // Tidak ada sepatu boot mohon cek kembali input anda