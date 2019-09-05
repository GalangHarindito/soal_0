/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5

[RULE]
- WAJIB MENYERTAKAN PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/

function poinCalculator(array) {
    // your code here
    var count = 0
    var countHurufG = 0
    var countHurufB = 0
    var countHurufS = 0
    var newArray = []

    for (var i = 0;i<array.length;i++){
       newArray.push(array[i])
       if(newArray[i] === 'G'){
         count += 2
         countHurufG ++
       }else if(newArray[i] === 'S'){
         count += 1
         countHurufS ++
       }else if(newArray[i] === 'B'){
         count += 0.5
         countHurufB ++
       }
      
      }
      // console.log( countHurufG ++, countHurufB ++, countHurufS ++)
       return 'jumlah Gold: '+ countHurufG +', jumlah Silver: '+  countHurufS +', jumlah Bronze: '+ countHurufB +'. Dan totalnya adalah: '+count
    }
  
  
  console.log(poinCalculator("GSB"));
  // jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
  console.log(poinCalculator("GGG"));
  // jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
  console.log(poinCalculator("SSB"));
  // jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
  console.log(poinCalculator("BBGSSGB"));
  // jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
  console.log(poinCalculator(""));
  // jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0
  
