// 5. Reverse
// reverse adalah fungsi untuk membalikkan isi array dan mengubah isi array tersebut
// console.log('5. REVERSE');

////////////////
/// CONTOH 5 ///
////////////////

// var arrayNumber = [1, 3, 2, 6, 4, 5];
// arrayNumber.reverse();
// console.log('Contoh 1:', arrayNumber);
// [ 5, 4, 6, 2, 3, 1 ]

//////////////
/// SOAL 5 ///
//////////////

function manualReverse (array) {
  // code below here
  newArray = []
  for(var i=array.length-1;i>=0;i--){
     newArray.push(array[i])
  }
  return newArray
};

console.log(manualReverse([1, 3, 2, 6, 4, 5]));
// [ 5, 4, 6, 2, 3, 1 ]
