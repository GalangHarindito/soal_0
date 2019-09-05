/*
  ////////////////////////////////////
  FUNCTION SECOND SMALLEST NUMBER EXTRA
  ////////////////////////////////////

  Fungsi Second Largest Number Extra akan mengembalikkan nilai terkecil kedua.

  [PROCESS]

  INPUT:
  [
    [
      [1, 2, 3],
      [1, 2, 3]
    ],
    [
      [1, 2, 3],
      [1, 2],
      [1]
    ]
  ]
  OUTPUT:
  2

  [RULES]
  - Apabila tidak ada nilai output yang di kembalikan, maka kembalikan 'No Number'
*/

function secondSmallestNumberExtra(array) {
  deepSort(array)
  var number =[]
  for(var i=0;i<array.length;i++){
    for(var j=0;j<array[i].length;j++){
      number.push(array[i][j][1])
    }
  }
  manualSort(number)

  for(var i=0;i<number.length;i++){
    if(number[i] === number[number.length]){
      return 'No number'
    }
  }
  if(array.length === 0){
    return 'No number'
  }
  return number[0]
}

//------------------------------SORT-----------------------------------

function deepSort(array) {
  for(var i=0;i<array.length;i++){ 
      for(var j=0;j<array[i].length;j++){
        for(var k=array[i][j].length-1;k>=0;k--){
          for(var l=0;l<k;l++){
              if(array[i][j][l] > array[i][j][l+1]){  
                  var temp = array[i][j][l]
                  array[i][j][l]=array[i][j][l+1]
                  array[i][j][l+1]=temp
              }
            }
              
          }       
      }
  }
}

//------------------------------SORT-----------------------------------
function manualSort(array1) {
  // code below here
  for(var i=array1.length-1;i>=0;i--){
    for (var j=0;j<i;j++){
      if(array1[j]>array1[j+1]){
        var temp = array1[j]
        array1[j] = array1[j+1]
        array1[j+1]=temp
      }
    }
  }
  // return array1
};


//TEST CASE
console.log(secondSmallestNumberExtra([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 2

console.log(secondSmallestNumberExtra([
  [
    [1, 1],
    [1],
    [1, 1]
  ],
  [
    [1],
    [1],
    [1, 1]
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
    [1]
  ],
  [
    [1]
  ]
])); // No number

console.log(secondSmallestNumberExtra([])); // No number
