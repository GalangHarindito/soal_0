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
  // code below here
   var pembanding = 0
   var indeks =0
   var result =[]
   
   for(var i=0;i<numbers.length;i++){
    console.log(numbers[i])
    while(numbers[indeks] !== pembanding){
      numbers[indeks] = Number(numbers[indeks])+1
      numbers[indeks] = numbers[indeks] +''
      pembanding = ''
      

      for(var j=numbers[indeks].length-1;j>=0;j--){
        
      pembanding = pembanding + numbers[indeks][j]
      }
      
   
      
    }
    pembanding = Number(pembanding)
    indeks++
    result.push(pembanding)
}
return result
}

console.log(palindromeChanger([117, 9, 20, 30, 42]))
// [ 121, 9, 22, 33, 44 ]
