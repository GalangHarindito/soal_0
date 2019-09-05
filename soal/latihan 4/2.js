/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf / .includes!

  PSEUDOCODE 

  STORE "kamus" with the value of "abcdefghijklmnopqrstuvwxyz"
  STORE "H8BI" with the value of "!@#$%^&*()-+1234567890[]{}"

    FOR LOOP index 0 till length of input


*/

function encrypt(input) {
   var alp = 'abcdefghijklmnopqrstuvwxyz'
   var h8BI = '!@#$%^&*()-+1234567890[]{}'
   var result =''
   flag = false

   for(var i=0;i<input.length;i++){
       flag = false
       for(var j=0;j<alp.length;j++){
           if(input[i] === alp[j]){
               flag = true
               break
           }
       }
       if(flag === true){
           result += h8BI[j]
       }else{
           result += input[i]
       }
   }
   return result
  }
  
  console.log(encrypt('dimitri')) // $(1(86(
  console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
  console.log(encrypt('dimitr€€')) // $(1(86€€
  console.log(encrypt('d!mas')) // $!1!7
  console.log(encrypt('@wtian')) // @[8(!2
  
  
  