/*
    ======================
    urutanAngkaUlang 
    ======================

    [ INSTRUCTION ]
    adalah sebuah program yang berfungsi untuk mengurutkan angka dari ulang
    setelah mencapai batas tertentu dalam bentuk array multidimensi

    [ EXAMPLE ]
    input = 9
    maka outputnya : 
    123456789 // baris ke-1 dimulai dari angka 1
    234567891 // baris ke-2 dimulai dari angka 2
    345678912
    456789123
    567891234
    678912345
    789123456
    891234567
    912345678
    
    perhatikan bahwa angka tersebut akan kembali ke angka awal = 1 
    bila telah mencapai batasnya yaitu angka 9

    input = 6
    maka outputnya : 
    123456
    234561
    345612
    456123
    561234
    612345

    [ RULE ]
    - TIDAK BOLEH MENGGUNAKAN FUNGSI ES 6
    - HANYA BOLEH MENGGUNAKAN LOOPING DAN CONDITIONAL

*/

function urutanAngkaUlang(angka) {
  // your code here 
}

console.log(urutanAngkaUlang(9));
/*
  123456789
	234567891
	345678912
	456789123
	567891234
	678912345
	789123456
	891234567
	912345678
*/

console.log(urutanAngkaUlang(6));
/*
  123456
  234561
  345612
  456123
  561234
  612345
*/