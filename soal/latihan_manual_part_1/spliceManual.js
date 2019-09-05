// 4. SPLICE
// splice adalah fungsi untuk menghapus atau menambahkan array, pada index tertentu
// dimana splice akan mengubah isi array tersebut
console.log('4. SPLICE');

////////////////
/// CONTOH 4 ///
////////////////

var arrayNumber = [1, 3, 2, 6, 4, 5];
var startIndex = 2;
var numberDelete = 2;
arrayNumber.splice(startIndex, numberDelete, 1, 2);
// console.log('Contoh 1:', arrayNumber);
// [ 1, 3, 1, 2, 4, 5 ]

//////////////
/// SOAL 4 ///
//////////////

function manualSplice (data, initIndex, deleteCount, insertArray) {
  // code below here
  newArr=[]

  for(var i=0;i<data.length+1;i++){
    if(i<initIndex){
      newArr.push(data[i])
    }
    else if(i >= initIndex && i <= initIndex + insertArray.length-1 ){
      newArr.push(insertArray[i-initIndex])
    }
    else if(i < data.length + insertArray.length - deleteCount){
      newArr.push(data[i+deleteCount-insertArray.length])
    }
  }
  return newArr
}

console.log(manualSplice([1, 3, 2, 6, 4, 5], startIndex, numberDelete, [7, 8]));
// [ 1, 3, 1, 2, 4, 5 ]
