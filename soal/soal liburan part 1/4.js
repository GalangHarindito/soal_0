/*
GET COORDINATES
=======================

fungsi getCoordinates adalah sebuah fungsi untuk mendapatkan koordinat
dari setiap titik "x". Output yang dikembalikan pada fungsi ini adalah
sebuah array dengan koordinat dengan format "<huruf><angka>" pada board.

EXAMPLE:
var array = [
  [" ", "A", "B", "C"],
  ["1", " ", "x", " "],
  ["2", " ", " ", " "],
  ["3", "x", " ", " "],
]
console.log(getCoordinates(array))
// ["B1", "A3"]
*/
function getCoordinates(arr) {
  // code below here
  var result = []
  count=0
  var seat = 'x'

  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
      if(arr[i][j] === seat){
        result.push(arr[0][j]+arr[i][0])
      }
    }
  }
  return result
}

var array = [
  [" ", "A", "B", "C", "D"],
  ["1", " ", " ", "x", " "],
  ["2", " ", "x", " ", " "],
  ["3", " ", " ", " ", "x"],
  ["4", " ", " ", "x", " "],
]
console.log(getCoordinates(array))
// [ 'C1', 'B2', 'D3', 'C4' ]

var array2 = [
  [" ", "A", "B", "C"],
  ["1", "x", " ", "x"],
  ["2", " ", "x", " "],
  ["3", "x", " ", "x"],
]
console.log(getCoordinates(array2))
// [ 'A1', 'C1', 'B2', 'A3', 'C3' ]