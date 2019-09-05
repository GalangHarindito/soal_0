/*
****************
Advanced Seating
****************
trainSeating adalah sebuah function yang menerima parameter berupa array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.

Contoh input dan output bisa dilihat di test case.


*/

function trainSeating (penumpang) {

   var arrGerbong = []
   var objResult = {}
   
   for(var i=0;i<penumpang.length;i++){
      arrGerbong.push(penumpang[i].gerbong)
  }
  var gerbongUnik = makeUnique(arrGerbong)
  
  for(var i =0;i<gerbongUnik.length;i++){
    var result = []
      for(var j=0;j<penumpang.length;j++){
        if(gerbongUnik[i] === penumpang[j].gerbong){   
          var object = {}  
          object.name = penumpang[j].nama
          object.seat = penumpang[j].seat
          result.push(object)
          }
           objResult[gerbongUnik[i]] = result 
        } 
       
      }    
    return objResult 
  }
  

  
//----------------------------------------------------------------------------------
  function makeUnique(array) {
    var arrUniqe = []
    for (var i = 0;i< array.length; i++) {
      if (unique(array[i], arrUniqe) === false) {
          arrUniqe.push(array[i]);
      }
    }
    return arrUniqe
   }

  function unique(string, array){
    for(var i=0;i<array.length;i++){
      if(array[i] === string){
        return true
      }
    }
    return false
  }
  
  console.log(trainSeating([
    { nama: "Awtian", gerbong: "VVIP", seat: 'A1' },
    { nama: "Klonoa", gerbong: "VIP", seat: 'V1' },
    { nama: "Azizy", gerbong: "VVIP", seat: 'A2' },
    { nama: "Crash", gerbong: "Regular", seat: 'R1' },
    { nama: "Sena", gerbong: "Regular", seat: 'R3' },
    { nama: "Retsu", gerbong: "VIP", seat: 'V2' },
    { nama: "Hiruma", gerbong: "VVIP", seat: 'A666' },
    { nama: "Tsubasa", gerbong: "VIP", seat: 'V6' }
  ]));
  /*
  Output :
  {
    VVIP:
     [ { nama: 'Awtian', seat: 'A1' },
       { nama: 'Azizy', seat: 'A2' },
       { nama: 'Hiruma', seat: 'A666' } ],
    VIP:
     [ { nama: 'Klonoa', seat: 'V1' },
       { nama: 'Retsu', seat: 'V2' },
       { nama: 'Tsubasa', seat: 'V6' } ],
    Regular:
      [ { nama: 'Crash', seat: 'R1' },
        { nama: 'Sena', seat: 'R3' } ]
  }
  

  
  */
    // var orang = {};
    // var vvip = [];
    // var vip = [];
    // var regular = [];
    // var hasil = {};
    // for (let i = 0; i < penumpang.length; i++) {
    //   if (penumpang[i].gerbong === 'VVIP') {
    //     orang = {nama: penumpang[i].nama, seat: penumpang[i].seat};
    //     vvip.push(orang);
    //     hasil.VVIP = vvip;
    //   }
    //   else if (penumpang[i].gerbong === 'VIP') {
    //     orang = {nama: penumpang[i].nama, seat: penumpang[i].seat};
    //     vip.push(orang);
    //     hasil.VIP = vip;
    //   }
    //   else if (penumpang[i].gerbong === 'Regular') {
    //     orang = {nama: penumpang[i].nama, seat: penumpang[i].seat};
    //     regular.push(orang);
    //     hasil.Regular = regular;
    //   }
    // }
    // return hasil;



  // KONDISI APABILA PEMBANDING I DAN J LEBIH BANYAK I
  // var arrGerbong = []
  //  var objResult = {}
   
  //  for(var i=0;i<penumpang.length;i++){
  //     arrGerbong.push(penumpang[i].gerbong)
  // }
  // var gerbongUnik = makeUnique(arrGerbong)
  
  // for(var i =0;i<penumpang.length;i++){
  //     for(var j=0;j<gerbongUnik.length;j++){
  //       if(penumpang[i].gerbong === gerbongUnik[j]){   
  //         var object = {}  
  //         object.name = penumpang[i].nama
  //         object.seat = penumpang[i].seat
  //         if (objResult[penumpang[i].gerbong] === undefined) {
  //           objResult[penumpang[i].gerbong] = [object] 
  //         } else {
  //           objResult[penumpang[i].gerbong].push(object)
  //         }
  //       }  
  //     }     
  // }
  // return objResult
  