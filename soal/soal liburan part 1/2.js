/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  yang paling cepat sampai ke tujuan, berdasarkan laju dan kecepatan sampai di 
  tujuan.

  [INPUT]
  cars = [['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]]
  info: ['PLAT NOMOR', 'SPEED', 'CURRENT POSITION']
  totalKM = 450

  [PROCESS]
  butuh waktu = jarak tersisa / kecepatan
  cars ke - 0 = butuh waktu 2,5 jam
  cars ke - 1 = butuh waktu 2,25 jam
  cars ke - 2 = butuh waktu 2.35 jam
  cars ke - 3 = butuh waktu 0.63 jam

  [OUTPUT]
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function winner (cars, totalKM) {
  //code below her
   var noPlat = []
   var waktu = []
   
  for(var i=0;i<cars.length;i++){
    noPlat.push(cars[i][0])
    waktu.push((totalKM - cars[i][2])/cars[i][1])
    }
  for(var j=waktu.length;j>0;j--){
    for(var k=0;k<j;k++){
   if(waktu [k] > waktu [k+1]){
     var temp1 = waktu[k+1]
     var temp2 = noPlat[k+1]
     waktu[k+1] = waktu[k]
     waktu[k]= temp1
     noPlat[k+1]= noPlat[k]
     noPlat[k]=temp2
    
   }
}  
}
return noPlat
}
console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]], 450));
/*
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/