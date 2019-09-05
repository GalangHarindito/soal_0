/*
    =========
    sumColumn
    =========

    [INSTRUCTION]
    program sumRow adalah program yang dapat menjumlahkan angka per column
    pada array multidimensi. masing - masing row bisa memiliki jumlah row yang 
    berbeda

    [EXAMPLE]
    input: 
    [
     [5],
     [2,  5, 12, 8],
     [4, 56,  3]
    ]

    cara menjumlahkannya, jumlahkan angka - angka tersebut dengan column yang sama.
    maka yang di jumlahkan adalah 
    column 1 => 5 + 2 + 4 = 11 
    column 2 => 5 + 56 = 61
    column 3 => 12 + 3 = 15 
    column 4 => 8 = 8

    hasil masing - masing penjumlahan disetiap column di masukkan kedalam 1 array

    output :
    [11, 61, 15, 8 ]

*/

function sumColumn(arr) {
  var hasil = [];
  var s= 0
    var a = 0;
  while (a<arr.length) {
      
    for (var i = 0;i<arr[a].length;i++) {
        s= 0
        for (var j = 0;j<arr.length;j++) {
            s += arr[j][a]
        }
    }
    hasil.push(s)
    a++
  }//akhir while

  return hasil

}//akhir function

console.log(sumColumn(
    [
     [5],
     [2,  5, 12, 8],
     [4, 56,  3]
    ]
)) // [11, 61, 15, 8 ]

console.log(sumColumn([
    [3,5,12,6],
    [1,7,4,3,8,4,9],
    [8,5,8],
    [4,7,8,2,8,3]
])) 
// [16, 24, 32, 11, 16, 7, 9]
