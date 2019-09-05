/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 4/7
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

function mostCarsByState(cars) {
    let arr = [];
    let rekap = [];
    for (let i = 0; i < cars.length; i++) {
        let s = 0;
        for (let j = 0; j < arr.length; j++) {
            if (cars[i] === arr[j]) {
                s++
                console.log(arr[j])
            }
        } //end loop j
        if (s < 1) {
            arr.push(cars[i])
            console.log(arr)
        }

        if (i === cars.length - 1) {
            for (let x = 0; x < arr.length; x++) {
                let s = 0;
                for (let y = 0; y < cars.length; y++) {
                    if (arr[x] === cars[y]) {
                        s++
                    }
                }
                rekap.push(arr[x]);
                rekap.push((s / cars.length) * 100)
            }
        }
    } //end loop i

    // return rekap;

}; //end of function

console.log(mostCarsByState(['D', 'B', 'B', 'B', 'A', 'C', 'D']));
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