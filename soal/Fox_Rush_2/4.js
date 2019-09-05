/*
  ///////////////////
  FUNCTION UBAH MODUS
  ///////////////////

  Fungsi Ubah Modus adalah sebuah fungsi yang mengubah modus dengan nama yang baru

  [PROCESS]

  INPUT:
  arrayModus = ['Rina', 'Bella', 'Angela', 'Christina', 'Sophia', 'Alice', 'Angela']
  modusBaru = 'Dilla'
  OUTPUT:
  ['Rina', 'Bella', 'Dilla', 'Christina', 'Sophia', 'Alice', 'Dilla']

  [RULES]

  - Asumsi selalu ada modus dan newModus
*/

function ubahModus(arrayModus, newModus) {
  // code here
  var name =''
  var nameUnik = makeUnique(arrayModus)
  var result= []
 
  for(var i=0;i<nameUnik.length;i++){
    var count = 0
    for(var j=0;j<arrayModus.length;j++){
    if(nameUnik[i] === arrayModus[j]){
      count ++ 
    }
  }
  if(count >= 2){
    name += nameUnik[i]
  }
  }
  for(var i=0;i<arrayModus.length;i++){
    if(arrayModus[i] === name){
      result.push(newModus)
    }
    else{
      result.push(arrayModus[i])
    }
  }
  return result
}

function makeUnique(array2) {
  var arrUniqe = []
  for (var i = 0;i< array2.length; i++) {
    if (unique(array2[i], arrUniqe) === false) {
        arrUniqe.push(array2[i]);
    }
  }
  return arrUniqe
 }

function unique(string, array){
  for(var i=0;i<array.length;i++){
    if(array[i] === string){
      return true
    }
  }
  return false
}


// TEST CASES
console.log(ubahModus(['Rina', 'Bella', 'Angela', 'Christina', 'Sophia', 'Alice', 'Angela'], 'Dilla'))
// ['Rina', 'Bella', 'Dilla', 'Christina', 'Sophia', 'Alice', 'Dilla']
console.log(ubahModus(['Anita', 'Reina', 'Anita'], 'Sora'))
// ['Sora', 'Reina', 'Sora']