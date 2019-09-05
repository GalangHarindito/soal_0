/*
========
warOfFun
========
[INSTRUCTIONS]
warOfFun adalah sebuat fungsi yang menerima parameter berupa string dan
akan mengembalikkan nilai string yang merupakan pemenang perlombaan.

[EXAMPLE]
INPUT: [
  ['andre', 'toni', 'toti'],
  ['risk', 'fun', 'go'],
  ['humble', 'psyhco', 'strong']
]

PROCESS: 
1. array[0] akan berisi nama-nama pemain
2. array-aray pada indeks berikutnya akan berisi attribut-attribut yang dimiliki oleh setiap pemain sesuai dengan indeksnya
3. pada array[1] andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun
4. pada array[2] andre tidak memiliki fun, toni tidak memiliki fun, dan toti tidak memiliki fun.
5. total andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun, sehingga pemenangnya adalah toni.

OUTPUT: pemenangnya adalah toni

[NOTES]
  1. Apabila tidak ada pemenang tampilkan "mohon maaf tidak ada pemenangnya"
  2. Asumsi tidak akan ada yang seri tapi tidak selalu ada pemenangnya

[RULES]
  1. Dilarang menggunakan built in function .sort()
*/

function warOfFun(informations) {
  // code here
  var result= []
  var name = informations[0]

  var fun = []
  var arrCount = []
  // var arr = []

  if(informations.length === 0){
    return 'mohon maaf tidak ada pemenangnya'
  }
   for(var i=0;i<name.length;i++){
     var count=0
      for(var j=1;j<informations.length;j++){
        if(informations[j][i] !== undefined){
          if(informations[j][i] === 'fun'){
            count++
            }    
      }  
}
 arrCount.push(count)
 
}
manualSortDes(arrCount,name)
if(arrCount[0] === 0){
  return 'mohon maaf tidak ada pemenangnya'
}
return 'pemenangnya adalah ' + name[0]
}


//----------------------------SORT-------------------------------

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



console.log(warOfFun([
  ['andre', 'toni', 'toti'],
  ['risk', 'fun', 'go'],
  ['humble', 'psyhco', 'strong']
]))
// pemenangnya adalah toni

console.log(warOfFun([
  ['andre', 'toni', 'toti', 'tito'],
  ['fun', 'fun', 'fun'],
  ['fun', 'fun'],
  ['nonfun', 'fun', 'fun', 'fun']
]))
// // pemenangnya adalah toni

console.log(warOfFun([
  ['andre', 'toni'],
  ['risk', 'go'],
  ['humble', 'strong']
]))
// mohon maaf tidak ada pemenangnya

console.log(warOfFun([]))
// mohon maaf tidak ada pemenangnya