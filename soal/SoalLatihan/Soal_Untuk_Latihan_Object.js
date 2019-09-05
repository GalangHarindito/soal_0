/*

  TILANG KENDARAAN

  Di Jakarta ada sistem ganjil genap untuk mengurangi angka kemacetan
  oleh karena itu polisi bersiaga di beberapa titik untuk menilang kendaraan

  Apabila plat merah melanggar aturan maka akan muncul berita viral
  Apabila plat kungin melanggar aturan maka akan muncul berita urgent
  Apabila plat yang sesuai tanggal lewat maka akan muncul berita kondisi aman

  Contoh ada di test case, dianjurkan untuk menambah test case sendiri untuk
  mengurangi munculnya bug pada kasus yang lain

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function tilangKendaraan(arr, num) {

    let NoPlat = []
    let platNum = [];
    let color = [];



    //KONDISI GENAP;
    arr.forEach(function(ele) {
        color.push(ele.plat)
        platNum.push(ele.nomor.substr(2, 4))
        NoPlat.push(ele.nomor)
    })

    let hasil = {};

    let vir = [];
    let til = [];
    let ama = [];
    let urg = [];

    for (let a = 0; a < platNum.length; a++) {

        if (num === 'genap') {
            if (platNum[a] % 2 === 0) {
                ama.push(NoPlat[a])
            } else {
                til.push(NoPlat[a]);
                if (color[a] === 'merah') {
                    vir.push(NoPlat[a])
                } else if (color[a] === 'kuning') {
                    urg.push(NoPlat[a])
                }
            }


        } else if (num === 'ganjil') {
            if (platNum[a] % 2 != 0) {
                ama.push(NoPlat[a]);
            } else {
                til.push(NoPlat[a]);
                if (color[a] === 'merah') {
                    vir.push(NoPlat)
                } else if (color[a] === 'kuning') {
                    urg.push(NoPlat[a])
                }
            }
        }
    } //end loop a

    let rekap = [];
    rekap.push(vir);
    rekap.push(til);
    rekap.push(ama);
    rekap.push(urg);
    let berita = ['viral', 'tilang', 'aman', 'urgent']

    //Mencari jumlah;
    let jml = [];
    for (let x = 0; x < rekap.length; x++) {
        jml.push(rekap[x].length)
    }

    //emncocokan;
    for (let y = 0; y < berita.length; y++) {
        if (rekap[y].length === 0) {
            rekap.splice(y, 1)
            berita.splice(y, 1);
            y--
        }
    }


    for (let u = 0; u < berita.length; u++) {
        let temp = {};
        temp.plat = rekap[u];
        temp.jumlah = jml[u];
        hasil[berita[u]] = temp;
    }



    console.log('--------------------------------------------------------------->')
    return hasil
}; //end of function

//TEST CASE

console.log(tilangKendaraan([{ nomor: 'A 1234 EA', plat: 'hitam' }, { nomor: 'B 1171 BA', plat: 'merah' }, { nomor: 'B 1132 CC', plat: 'kuning' }], 'genap'));
/*
  {
    'viral': {
      'plat': [ 'B 1171 BA' ],
      'jumlah': 1
    },
    'tilang': {
      'plat': [ 'B 1171 BA' ],
      'jumlah': 1
    },
    'aman': {
      'plat': [ 'B 1132 CC', 'A 1234 EA' ],
      'jumlah': 2
    };
  };
*/

console.log(tilangKendaraan([{ nomor: 'A 1234 EA', plat: 'hitam' }, { nomor: 'B 1171 BA', plat: 'merah' }, { nomor: 'B 1132 CC', plat: 'kuning' }], 'ganjil'));
/*
  {
    'tilang': {
      'plat': [ 'A 1234 EA' ],
      'jumlah': 1
    },
    'aman': {
      'plat': [ 'B 1171 BA' ],
      'jumlah': 1
    },
    'urgent': {
      'plat': ['B 1132 CC'],
      'jumlah': 1
    };
  };
*/