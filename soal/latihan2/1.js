/*
  ===========
  Fear Factor
  ===========

  [INSTRUCTIONS]
  Fear Factor adalah suatu fungsi untuk mengetahui dia bisa menjadi juara atau
  tidak.

  [EXAMPLE]
  Input:
  fearFactor = 'Single'
  weaknesses = ['Single', 'Jomblo', 'Tikus', 'Air']
  Output:
  Dia kalah karena kelemahan yang pertama

  [RULE]
  - WAJIB menggunakan PSEUDOCODE
  - Maksimal weaknesses ada 9
  - Tidak boleh menggunakan built in function selain .push() dan .unshift()
*/

function fearFactorFunc(factor, weakAgainsts) {
  // code below here
  var result = ''
  
  
  for(i=0;i<weakAgainsts.length;i++){

    if(factor !== weakAgainsts[i]){
     result = 'Selamat dia juara'
    }else{
      if(factor === weakAgainsts[i]){
      switch(i){
    case 0 : i = 'pertama' ;break
    case 1 : i = 'kedua';break
    case 2 : i = 'ketiga';break
    case 3 : i = 'keempat';break
    case 4 : i = 'kelima';break
    case 5 : i = 'keenam';break
    case 6 : i = 'ketujuh';break
    case 7 : i = 'kedelapan';break
    case 8 : i = 'kesembilan';break  
}
      result = 'Dia kalah karena kelemahan yang '+ i
    }
  }
  }
  console.log(result)
};


var fearFactor = 'Single';
var weaknesses = ['Single', 'Jomblo', 'Tikus', 'Air'];
fearFactorFunc(fearFactor, weaknesses);
// Dia kalah karena kelemahan yang pertama

var fearFactor2 = 'Menikah';
var weaknesses2 = ['Single', 'Jomblo', 'Tikus', 'Air'];
fearFactorFunc(fearFactor2, weaknesses2);
// Selamat dia juara

var fearFactor3 = 'Menikah';
var weaknesses3 = ['Single', 'Jomblo', 'Tikus', 'Air', 'Makan', 'Menari', 'Menyanyi', 'Dandan', 'Menikah'];
fearFactorFunc(fearFactor3, weaknesses3);
// Dia kalah karena kelemahan yang kesembilan

var fearFactor4 = 'Menikah';
var weaknesses4 = ['Single', 'Jomblo', 'Tikus', 'Air', 'Makan', 'Menari', 'Menyanyi', 'Dandan', 'Jomblo Fisabilillah'];
fearFactorFunc(fearFactor4, weaknesses4);
// Selamat dia juara
