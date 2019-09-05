/*
===========
MineSweeper
===========

[INSTRUCTIONS]
Seorang tentara sedang berada di ladang ranjau kita harus membantu tentara untuk menemukan jumlah ranjau yang ada disekeliling dekat tentara.
terdapat posisi tentara didalam map adalah huruf O dan posisi bom adalah X
tugas kita harus mencari tahu bom yang ada di delapan penjuru mata angin dari posisi tentara. ingat yang dihitung hanya bom yang ada di delapan penjuru mata angin dekat tentara


[EXAMPLE]
INPUT: [
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', 'O', 'X', ' ', ' '],
  [' ', 'X', ' ', 'X', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
OUTPUT: 4
INPUT: [
  [' ', ' ', ' ', ' ', ' ', 'O'],
  [' ', ' ', ' ', ' ', 'X', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
OUTPUT: 2
*/

function MineSweeper(array) {
  
    var s = 0;
    for (var i = 0;i<array.length;i++) {
      
      for (var j = 0;j<array[i].length;j++) {
        if (i == 0) { //baris pertama
          if (array[i][j] === 'O'){
            if (array[i][j-1] === 'X') {
              s++
            }if (array[i][j+1]==='X') {
              s++
            }if (array[i+1][j-1]=== 'X') {
              s++
            }if (array[i+1][j]==='X') {
              s++
            }if (array[i+1][j+1]==='X'){
              s++
            }
          }
        }else if (i === array.length-1){//baris terakhir
          if (array[i][j]==='O') {
            if (array[i+1][j-1] ==='X'){
              s++
            }if (array[i+1][j]==='X'){
              s++
            }if(array[i+1][j+1]==='X'){
              s++
            }if(array[i][j-1]==='X'){
              s++
            }if(array[i][j+1]==='X'){
              s++
            }
          }//if 'O'
        }else {//baris tengah
          if (array[i][j]==='O'){
            if(array[i-1][j-1]==='X'){
              s++
            }if(array[i-1][j]==='X'){
              s++
            }if(array[i-1][j+1]==='X'){
              s++
            }if(array[i][j-1]==='X'){
              s++
            }if(array[i][j+1]==='X'){
              s++
            }if(array[i+1][j-1]==='X'){
              s++
            }if(array[i+1][j]==='X'){
              s++
            }if(array[i+1][j+1]==='X'){
              s++
            }
          }//akhir arr'O
        }
        
      }//loop j
      
    }//loop i
    return s
  // return arr[0]
  }//akhir function
  var board = [
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'X', ' ', ' ', ' '],
    [' ', ' ', 'O', 'X', ' ', ' '],
    [' ', 'X', ' ', 'X', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ']
  ]
  console.log(MineSweeper(board)) // 4
  var board2 = [
    [' ', ' ', ' ', ' ', ' ', 'O'],
    [' ', ' ', ' ', ' ', 'X', 'X'],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ']
  ]
  console.log(MineSweeper(board2)) // 2
  var board3 = [
    ['X', ' ', 'X', ' ', ' ', ' '],
    [' ', ' ', ' ', 'X', 'X', ' '],
    [' ', ' ', 'X', 'O', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'X', ' ', ' ', 'X', ' ']
  ]
  console.log(MineSweeper(board3)) // 3