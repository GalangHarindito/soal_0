/*
  /////////////////////
  FUNCTION TUKAR GANJIL
  /////////////////////

  Fungsi Tukar Ganjil akan mengubah besar dan kecil huruf apabila berada di index yang ganjil.

  [PROCESS]

  INPUT:
  'Dana K'
  PROCESS:
  1 => d (karena 1 ganjil)
  2 => a
  3 => N (karena 3 ganjil)
  4 => a
  5 => ' ' (diabaikan)
  6 => K
  OUTPUT:
  daNa K

  [RULES]

  - Dilarang menggunakan built in function apapun
*/

function tukarGanjil(kalimat) {
  // code below here
  var A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  var a = 'abcdefghijklmnopqrstuvwxyz0123456789'
  result =''

  for(var i=0;i<kalimat.length;i++){
    if([i+1] % 2 != 0 && kalimat[i] != ' ' ){
      for(var j=0;j<a.length;j++){
        if([i+1] % 2 != 0){
        if(kalimat[i] === a[j]){
          result += A[j]
        }
        else if(kalimat[i] === A[j]){
          result += a[j]
        }
      }
    }
}
 else{
      result += kalimat[i]
    }
}
return result
}


// TEST CASES
console.log(tukarGanjil('Hello World')); // "heLlO woRlD"
console.log(tukarGanjil('I aM aLAY')); // "i AM alAy"
console.log(tukarGanjil('My Name is Bond!!')); // "my NAmE Is BOnD!!"
console.log(tukarGanjil('IT sHOULD bE me')); // "iT shOuLd BE mE"
console.log(tukarGanjil('001-A-3-5TrdYW')); // "001-a-3-5TRdyW"