/*
  //////////////////////
  pyramidNumberExtension
  //////////////////////

  Function pyramidNumberExtension adalah suatu fungsi kelanjutan dari pyramidNumber yang sudah dibuat.
  Function ini akan menerima parameter max yang bertipe data number, serta hanya berfungsi untuk menampilkan
  saja.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var max = 5

  [OUTPUT]
    55555
    4444
    333
    22
    1
    22
    333
    4444
    55555

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var max = 1
  [OUTPUT]
    1

  [RULES]
    1. Dilarang menggunakan built in function apapun.
    2. Asumsi nilai minimum max adalah 1.
    3. Nilai rocket hanya ada 0 atau 100, jadi diutamakan mengerjakkan soal yang lain terlebih dahulu.
*/

function pyramidNumberExtension(max) {
  var a = ''
    for(var i=max;i>1;i--){
        for(j=1;j<i+1;j++){
          a += i
        }
         if(i===max) a+= '\n'
         if(i<max) a += '\n'
    }
    for (var i=1 ; i<max+1 ; i++) {
      for (var j=1 ; j<i+1 ; j++) {
       a +=i
      }
      if (i<max) a+='\n'
    }
   console.log(a) 
  }

// TEST CASES
pyramidNumberExtension(5)
/*
  55555
  4444
  333
  22
  1
  22
  333
  4444
  55555
*/
pyramidNumberExtension(1);
/*
  1
*/
