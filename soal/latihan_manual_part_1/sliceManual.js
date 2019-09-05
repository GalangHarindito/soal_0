// 3. SLICE
// slice adalah fungsi untuk mengambil bagian dari array ataupun string
console.log('3. SLICE');

////////////////
/// CONTOH 3 ///
////////////////

var arrayNumber = [1, 3, 2, 6, 4, 5];
var firstIndex = 2;
var lastIndex = 4;
// console.log('Contoh 1:', arrayNumber.slice(firstIndex, lastIndex));
// [ 2, 6 ]
var stringNumber = '132645';
// console.log('Contoh 2:', stringNumber.slice(firstIndex, lastIndex));
// 26

//////////////
/// SOAL 3 ///
//////////////

function manualSlice (data, initIndex, endIndex) {
  // code below here
  newData = []
  for(var i=initIndex;i<endIndex;i++){
    // if(i < endIndex && i>=initIndex){
     newData.push(data[i])
    // }
  }
  return newData
};

console.log(manualSlice([1, 3, 2, 6, 4, 5], 2, 4)); // [ 2, 6 ]

// function manualSlice (data1, initIndex1, endIndex1) {
//   // code below here
//   newData1 = ''
//   for(var i=0;i<data1.length;i++){
//     if(i < endIndex1 && i>=initIndex1){
//      newData1 += data1[i]
//     }
//   }
//   return newData1
// };

// console.log(manualSlice('132645', 2, 4)); // 26