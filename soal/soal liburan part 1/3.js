/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 3/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function mostCarsByState (cars) {
  var alph = ['A','B','C','D']
  var result=[]
  var result2=[]
  
  for(var i=0;i<alph.length;i++){
    var arrCars=[]
    arrCars.push(alph[i])
    var countCars = 0
    for(var j=0;j<cars.length;j++){
        if(alph[i] === cars[j]){
          countCars ++
          var persen = (countCars/cars.length)
        }
      }
      arrCars.push(persen)
      result.push(arrCars)
  }
  result.sort(function(a,b){
        return b[1]-a[1] 
      })
      for(var k=0;k<result.length;k++){
        var sementara = ''
        sementara += result[k]
         result2.push(sementara)
      }
  return result2
}
     


console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/