/*

  TOL JAKARTA BANDUNG

  Karena adanya mudik lebaran maka pemerintah menerapkan sistem beberapa jalur prioritas.
  disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan yang paling cepat
  sampai ke tujuan.

  Plat nomor kuning paling cepat sampai, dilanjutkan merah, dan terakhir hitam.
  Jam keberangkatan sesuai urutan dalam array.

  [INPUT]
  [['B 1171 BA', 'merah'], ['B 1172 BA', 'kuning'], ['B 1173 BA', 'hitam'], ['B 1174 BA', 'hitam']]

  [PROCESS]
  kuning => 'B 1172 BA'
  merah => 'B 1171 BA'
  hitam => 'B 1173 BA', 'B 1174 BA'

  [OUTPUT]
  [ 'B 1172 BA', 'B 1171 BA', 'B 1173 BA', 'B 1174 BA' ]  

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function firstArrived(cars) {
  // code below here
  
//   var kuning = ''
//   var merah = ''
//   var hitam = ''
//   var sementara = []

//   for(var i=0;i<cars.length;i++){
//     if(cars[i][1] === 'kuning'){
//       kuning += cars[i][0] 
//     }
//     else if(cars[i][1]==='merah'){
//       merah += cars[i][0]
//     }
//     else if(cars[i][1]==='hitam'){
//       hitam += cars[i][0]
//     }  
// }
// sementara.push(kuning,merah,hitam)
// console.log(sementara)
// for(var j=0;j<sementara.length;j++){
//   var result = []
//   // console.log(sementara[j])
//    if(sementara.length>1){
//      result.push(sementara[j])
//    }
//   }
// return result
var warna = ['kuning','merah','hitam']
var result = []

for(var i=0;i<warna.length;i++){
  console.log(warna[i])
  var noPlat = []
  for(var j=0;j<cars.length;j++){
  if(warna[i] === cars[j][1]){
    noPlat.push(cars[j][0])

  }
  }
  // console.log(noPlat)
  if(noPlat.length>1){
   for(var k=0;k<noPlat.length;k++){
    result.push(noPlat[k])
   }
  }else{
    result.push(noPlat[0])
  }
}
// return result
}

//TEST CASE

console.log(firstArrived([['B 1171 BA', 'merah'], ['B 1172 BA', 'kuning'], ['B 1173 BA', 'hitam'], ['B 1174 BA', 'hitam']]));
/*
  [ 'B 1172 BA', 'B 1171 BA', 'B 1173 BA', 'B 1174 BA' ]
*/
console.log(firstArrived([['B 1174 BA', 'hitam'], ['B 1171 BA', 'merah'], ['B 1173 BA', 'hitam'], ['B 1172 BA', 'kuning']]));
/*
  [ 'B 1172 BA', 'B 1171 BA', 'B 1174 BA', 'B 1173 BA' ]
*/
