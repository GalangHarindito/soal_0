/*
  PALINDROME CHANGER

  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.

  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/
function palindromeChanger(numbers) {
  newArr = []
  pembanding = 0
  indeks = 0

   for(var i=0;i<numbers.length;i++){
     for(var j=0;j<numbers[i].length;j++){
       while(numbers[i][indeks] !== pembanding){
       numbers[i][indeks] = Number((numbers[i][indeks])+1)
       numbers[i][indeks] = numbers[i][indeks] + ''
       penbanding = ''

       for(var k=numbers[i][indeks].length;k>0;k--){
         pembanding += numbers[i][k]
       }
     }
     pembanding = Number(pembanding)
     console.log(pembanding)
     indeks++
   }
    }
  }
  
  
    
  
  
  console.log(palindromeChanger([[117, 9, 20, 30, 42], [998, 909, 123]]))
  // [ 121, 9, 22, 33, 44 ]
  