var input = [{
        pertandingan: 'indonesia vs philipin',
        nama: 'adi',
        lokasi: 'tribun barat'
    },
    {
        pertandingan: 'indonesia vs philipin',
        nama: 'budi',
        lokasi: 'tribun timur'
    },
    {
        pertandingan: 'malaysia vs singapura',
        nama: 'dodo',
        lokasi: 'tribun barat'
    },
    {
        pertandingan: 'malaysia vs singapura',
        nama: 'edi',
        lokasi: 'tribun timur'
    },
    {
        pertandingan: 'malaysia vs singapura',
        nama: 'fajar',
        lokasi: 'tribun barat'
    },
    {
        pertandingan: 'indonesia vs philipin',
        nama: 'cici',
        lokasi: 'tribun timur'
    }
];

/**
[
  {
    pertandingan:  'indonesia vs philipin',
    tribun: 
       {
         'tribun barat' : 'adi |',
         'tribun timur': 'budi | cici |'
       } 
  },
  {
    pertandingan:  'malaysia vs singapura',
    tribun:
       {
         'tribun barat': 'dodo | fajar |',
         'tribun timur': 'edi |'
       } 
  }
])
*/

function tiketPertandingan(data) {
    let arr = [];
    data.forEach(function(ele) {
            arr.push(ele.pertandingan);
            for (let i = 0; i < arr.length; i++) {
                let s = 0;
                for (let j = 0; j < arr.length; j++) {

                    if (arr[i] === arr[j]) {
                        s++
                    }
                    if (s > 1) {
                        if (arr[i] === arr[j]) {
                            arr.splice(j, 1);
                            j--;
                            i--;
                        }
                    }
                } //end loop j
            } //end loop i

        })
        //MENCARI TRIBUN;
    let tribun = [];
    let nama = [];
    for (let a = 0; a < arr.length; a++) {
        let rekTribun = [];

        data.forEach(function(num) {
            if (arr[a] === num.pertandingan) {
                rekTribun.push(num.lokasi)
            }
            for (let b = 0; b < rekTribun.length; b++) {
                let s = 0;
                for (let c = 0; c < rekTribun.length; c++) {
                    if (rekTribun[b] === rekTribun[c]) {
                        s++
                    }
                    if (s > 1) {
                        if (rekTribun[b] === rekTribun[c]) {
                            rekTribun.splice(c, 1);
                            b--;
                            c--;
                        }
                    }
                }
            }
        })
        tribun.push(rekTribun)
    } //end loop a

    for (let x = 0; x < arr.length; x++) {
        let rekNama = [];
        for (let y = 0; y < tribun[x].length; y++) {
            let rek = [];
            for (let w = 0; w < data.length; w++) {
                if (arr[x] === data[w].pertandingan && tribun[x][y] === data[w].lokasi) {
                    rek.push(data[w].nama)
                }
            }
            rekNama.push(rek)
        }
        nama.push(rekNama)
    }





    console.log('------------------------------------------->')
    console.log(tribun)
    return nama
} //end of function data

console.log(tiketPertandingan(input));

//   {
//     pertandingan:  'indonesia vs philipin',
//     tribun: 
//        {
//          'tribun barat' : 'adi |',
//          'tribun timur': 'budi | cici |'
//        } 
//   },
//   {
//     pertandingan:  'malaysia vs singapura',
//     tribun:
//        {
//          'tribun barat': 'dodo | fajar |',
//          'tribun timur': 'edi |'
//        } 
//   }


// cara 1: dari kak awtian

// var result = [];

// var objResult = {}

// for (var i = 0; i< data.length; i++) {
//   if (objResult[data[i].pertandingan] === undefined) {
//     objResult[data[i].pertandingan] = 
//     {
//       pertandingan:  data[i].pertandingan,
//       tribun: 
//      {
//        'tribun barat' : '',
//        'tribun timur': ''
//      }}
//   }

//   if (data[i].lokasi === 'tribun barat') {
//     objResult[data[i].pertandingan].tribun['tribun barat'] += data[i].nama + ' | '
//   } else if (data[i].lokasi === 'tribun timur') {
//      objResult[data[i].pertandingan].tribun['tribun timur'] += data[i].nama + ' | '
//   }

//   // console.log(objResult)

//   result.push(objResult);
// }

//   return result