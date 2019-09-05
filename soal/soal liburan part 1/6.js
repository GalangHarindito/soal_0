/*

CALCULATE NUMBER
================

Calculate number adalah sebuah fungsi untuk melakukan operasi matematika.
Fungsi akan menerima input berupa persamaan matematika dan mengembalikan nilai
berupa hasil kalkulasi.

RULES:
  - fungsi hanya menghandle operasi tambah dan kurang saja
  - fungsi dapat menerima angka satuan, puluhan, dan ratusan

EXAMPLE:
  console.log(calculateNumber("2+3+4+5-4-3-2"))
  OUTPUT: 5

*/

function calculateNumber(str) {
  // code below here
 
  var operator = []
  var s = ''
  var num=[]

  for(var i=0;i<str.length;i++){
   if(str[i] === '+' || str[i] === '-' || str[i] === '*'){
      num.push(Number(s))  
    s =''
    operator.push(str[i])
     console.log(num)
   } else{
     s += str[i]
    //  console.log(s)
   }
   if(i === str.length-1){
     num.push(Number(s))
    //  console.log(num)
   }
  }
  if(operator.length === 0){
    // return num[0]
  }else{
    var result = 0
    result = result + num[0]
  }
  for(var j=0;j<operator.length;j++){
    if(operator[j] ==='+'){
      result += num[j+1]
    }else if(operator[j] === '*'){
      result *= num[j+1]
    }else if(operator[j] === '-'){
      result -= num[j+1]
    }
  }
// return result
}

console.log(calculateNumber("1+10+100")) // 111
console.log(calculateNumber("100")) // 100
console.log(calculateNumber("200-200+100*0")) // 100