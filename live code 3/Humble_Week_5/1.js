/*
===========
eMoneySplit
===========
[INSTRUCTIONS]
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikkan nilai string yang merupakan jumlah terbanyak dan terdikit.

[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah andre

[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"

[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin
*/

function eMoneySplit(stringData) {
  // code below here
  var name = []
  var uang = []
  var newString = stringData.split(',')
  var newString2 = []
  
    if(stringData == ''){
    return 'tidak ada catatan eMoney'
    }
  for(var i=0;i<newString.length;i++){
      newString2.push(newString[i].split(':'))
      name.push(newString2[i][0])
      uang.push(Number(newString2[i][1]))
      manualSortDes(uang,name)
    } 
      return 'terbanyak adalah '+ name[0] +' dan terdikit adalah '+name[uang.length-1]
    
}




// -----------------SORT------------------------
function manualSortDes (array, array1) {
  // code below here
  for(var i=array.length-1;i>=0;i--){
    for (var j=0;j<i;j++){
      if(array[j]<array[j+1]){
        var temp = array[j]
        var temp2 = array1[j]
        array[j] = array[j+1]
        array1[j] = array1[j+1]
        array[j+1] = temp
        array1[j+1] = temp2
      }
    }
  }
  // console.log(array)
  // console.log(array1)
};






/*PSEUDOCODE



  READ & STORE name 
  READ & STORE uang 
  READ & STORE newString = SPLIT STRINGDATA WITH ","
  READ & STORE newString2
  
  IF stringData = ''
  PRINT 'tidak ada catatan eMoney'
    
  FOR LOOP NEWSTRING
     NEWSTRING2 PUSH NEWSTRING LOOP
      NAME PUSH LOOP NEWSTRING 1
      NAME PUSH LOOP NEWSTRING 0
      SORT UANG & NAME
    
    FOR LOOP NAME
      PRINT 'terbanyak adalah '+ name[0] +' dan terdikit adalah '+name[uang.length-1]
    

*/




console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
// terbanyak adalah bagas dan terdikit adalah ali
console.log(eMoneySplit('andre:50000'))
// conterbanyak adalah andre dan terdikit adalah andre
console.log(eMoneySplit(''))
// tidak ada catatan eMoney
