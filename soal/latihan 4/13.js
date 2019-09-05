/*
HACKTIV8 Final Live Coding Rocket
=======================
British National Crisis
=======================
Name : __________
Tiga narapidana kabur dari penjara London. Tiga narapidana ini memiliki nomor sel 1, 5, dan 9.
Tiga narapidana ini bergabung dan menyatukan kekuatan dan pikiran untuk mengacau di Inggris dengan melakukan pengeboman di tempat-tempat yang berbeda.
Setiap kali mereka mau melakukan pengeboman, mereka mengirimkan sebuah kode aneh ke Scotland Yard, markas kepolisian Inggris.
Seorang detektif pemula tengah mencoba menyelesaikan krisis tersebut.
Ternyata, kode tersebut merupakan sebuah pola. Kode tersebut merupakan angka 2,3,4,6,7, atau 8  yang ditulis dengan kata dalam bahasa Inggris, dan diacak.
Seluruh karakter di kode tersebut apabila disusun dengan baik, akan menghasilkan beberapa kata berupa angka dalam bahasa Inggris.
District yang akan diserang selanjutnya adalah total dari angka yang ditemukan di kode tersebut!
Karena tiga narapidana ini benci dengan sel mereka,
 mereka tidak memasukkan angka 1, 5, dan 9.  Berikut ini adalah bahasa Inggris untuk angka yang digunakan:
  TWO -> 2
  THREE -> 3
  FOUR -> 4
  SIX -> 6
  SEVEN -> 7
  EIGHT -> 8
Contoh Kode 1:
WTWTHROETEO.
Apabila diacak mendapatkan kombinasi TWO TWO THREE => 2, 2, dan 3. 2 + 2 + 3 = 7, maka targetnya District 7!
Contoh Kode 2:
HSEVTEEING.
Apabila diacak mendapatkan kombinasi SEVEN EIGHT => 7 dan 8. 7 + 8 = 15, maka targetnya District 15!
Contoh Kode 3:
FNEXSIVUSEOR. Apabila diacak mendapatkan kombinasi FOUR SIX SEVEN => 4, 6, dan 7. 4 + 6 + 7 = 17, maka targetnya District 17!
Contoh Kode 4:
WTO. Apabila diacak mendapatkan kombinasi TWO => 2. Maka targetnya District 2! 
HINT: Urutan angka mana yang keluar lebih dulu tidak penting! Yang penting adalah kita mendapatkan district berapa yang menjadi target!
*/

function nextTargetArea(code) {
    // Code Hanya Disini!

    var abj ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var totCount = []
     var arrHuruf = []

    for(var i=0;i<abj.length;i++){
        var count = 0
        for(var j=0;j<code.length;j++){
            if(abj[i] === code[j]){
            count++
            }
        }
        if(count > 0){
            arrHuruf.push(abj[i])
            totCount.push(count)
        }    
    }
    var kodeHuruf = ['TWO', 'THREE', 'FOUR', 'SIX', 'SEVEN', 'EIGTH',]
    var kodeAngka = [2, 3, 4, 6, 7, 8]
    var result = 0

    for(var i=0;i<kodeHuruf.length;i++){
        var count1 = 0
        for(var j=0;j<kodeHuruf[i].length;j++){
            for(var k=0;k<arrHuruf.length;k++){
                if(kodeHuruf[i][j] === arrHuruf[k]){
                    if(totCount[k] > 0){
                        count1++
                    }
                }
            }
        }
        if(count1 === kodeHuruf[i].length){
            for(var l=0;l<kodeHuruf[i].length;l++){
                for(var m=0;m<arrHuruf.length;m++){
                   if(kodeHuruf[i][l] === arrHuruf[m]){
                        totCount[m]--     
                   } 
                }   
            }
            result += kodeAngka[i]
        }
    }   
    return 'District '+result +' is the next target!'
}
  
  console.log(nextTargetArea('WTO')); // "District 2 is the next target!"
  console.log(nextTargetArea('WTWTHROETEO')); // "District 7 is the next target!"
  console.log(nextTargetArea('HSEVTEEING')); // "District 15 is the next target!"
  console.log(nextTargetArea('FNEXSIVUSEOR')); // "District 17 is the next target!"
  console.log(nextTargetArea('EFNEXRSIVHUSEORTE')); // "District 20 is the next target!"