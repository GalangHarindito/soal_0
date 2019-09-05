/*
  //////////////////////
  FUNCTION MULTIPLE BY 3
  //////////////////////

  Fungsi Multiple By 3 akan mengalikan angka-angka dengan angka di 3 setelahnya,
  kemudian akan menjumlahkan angka tersebut ketika ganjil

  [PROCESS]

  INPUT:
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  PROCESS:
  1 * 5 = 5 (ganjil)
  2 * 6 = 12 (genap)
  3 * 7 = 21 (ganjil)
  4 * 8 = 32 (genap)
  5 * 9 = 45 (ganjil)

  5 + 21 + 45 = 71
  OUTPUT:
  71

  [RULES]

  - Dilarang menggunakan built in function apapun
*/

function multipleBy3 (array) {
  // code below here
  temp =[]
  temp1 =[]
  kali = []
  result =0

  
 if(array.length % 2 === 1){
   for(var i=0;i<array.length;i++){
     if(i <= array.length/2){
     temp.push(array[i])
     }
     if( i+1 >= array.length/2)
     temp1.push(array[i])
     }
     for(var j=0;j<temp.length;j++){
       kali.push(temp[j] * temp1[j])
       if(kali[j]% 2 === 1){
          result += kali[j]
       }
     }
     }else{
       return 'Soal tidak valid'
     }
   return result
   }
  
 


console.log(multipleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // 71


//  var result = 0
//   var temp = []
//   var temp1 =[]
//   var res= []

//   for(var i=0;i<array.length;i++){
//   if(i < 5){
//      temp.push(array[i])
//   }if(i >= 4){
//      temp1.push(array[i])
//   }
// };
// for(var j=0;j<temp.length;j++){
//    res.push(temp[j] * temp1[j])
//    if(res[j] % 2 === 1){
//     result += res[j]
//    }
// }
//  return result