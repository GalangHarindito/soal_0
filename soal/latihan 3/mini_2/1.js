/*
  ================
  Format Uang (KBBI)
  ================

  [INSTRUCTIONS]

  formatUang adalah sebuah function yang menerima satu parameter berupa number.
  function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
  Rp1.500,00

  [RULE]
  - Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
  - Dilarang menggunakan regex .match dan lainnya!
*/

function formatUang(number) {
  // code below here
  var newNumber = String(number)
  var str = ''
  if(newNumber.length <= 3){
    return 'Rp'+number+',00'
  }else{
    var reverse = manualReverse(newNumber)
    var titik = manualSplice(reverse,newNumber[3],0,'.')
    console.log(titik)
      
    }
   
  }


function manualReverse(string){
  newString =''

  for(var i=string.length-1;i>=0;i--){
    newString += string[i]
  }
  return newString
}


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

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
