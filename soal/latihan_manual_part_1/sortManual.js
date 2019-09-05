// 2. SORT
// sort adalah fungsi untuk mengurutkan isi array
console.log('2. Sort');

////////////////
/// CONTOH 2 ///
////////////////

var exSortAsc = [1, 3, 2, 6, 4, 5];
// console.log('Contoh 1:', exSortAsc.sort());
// [ 1, 2, 3, 4, 5, 6 ]
var exSortDesc = [1, 3, 2, 6, 4, 5];
// console.log('Contoh 2:', exSortDesc.sort((num1, num2) => num2 - num1));
// [ 6, 5, 4, 3, 2, 1 ]

//////////////
/// SOAL 2 ///
//////////////

function manualSort (array, type) {
  // code below here
  for(var i=array.length-1;i>=0;i--){
    for (var j=0;j<i;j++){
      console.log(array[j])
      if(type === 'ascending' && array[j]>array[j+1]){
        var temp = array[j]
        array[j] = array[j+1]
        array[j+1]=temp
      }else if(type === 'descending' && array[j]<array[j+1]){
        var temp = array[j]
        array[j] = array[j+1]
        array[j+1]=temp
      }
    }
  }
  // return array
};

console.log(manualSort(exSortAsc, 'ascending')); // [ 1, 2, 3, 4, 5, 6 ]
console.log(manualSort(exSortDesc, 'descending')); // [ 6, 5, 4, 3, 2, 1 ]
