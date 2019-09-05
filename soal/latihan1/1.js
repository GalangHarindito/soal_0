/*
  /////////////////////
  FUNCTION MEDIAN GENAP
  /////////////////////

  Fungsi Median Genap adalah mencari nilai median yang berupa genap di array.

  [PROCESS]

  INPUT:
  [1, 3, 4, 5, 6, 7]
  PROCESS:
  genap = [4, 6]
  median = 5
  OUTPUT:
  5

  [RULES]

  - Dilarang menggunakan built in function selain .push()
*/

function medianGenap(arr) {
  // code below here
  var result =0
  var genap =[]
  
  for(var i=0;i<arr.length;i++){
    count =0
    if(arr[i] % 2 === 0){
     genap.push(arr[i])
    }  
  }
  if(genap.length === 0){
    return 'Tidak ada mean'
  }else{
  if(genap.length <= 2){
    var count =0
  for(var j=0;j<genap.length;j++){
    count += genap [j]
    result = (count / genap.length)
  }

    }
  else if(genap.length > 2){
      var a = Math.floor(genap.length/2)
      result = genap[a]
  }
  }
   return result
}
  



// TEST CASES
console.log(medianGenap([1, 2, 3, 4, 5])); // 3
console.log(medianGenap([1, 3, 4, 10, 12, 13])); // 10
console.log(medianGenap([3, 4, 7, 6, 10])); // 6
console.log(medianGenap([1, 3, 3])); // Tidak ada median
console.log(medianGenap([7, 7, 8, 8])); // 8