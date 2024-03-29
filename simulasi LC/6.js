/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  // code here
  
    var string= String(equation)
    if(equation === '0'){
      return ''
    }
    var newStr = string[0]

    for(var i=0;i<string.length;i++){
      if(newStr.length !== string.length){
        newStr += '0'
      }
    }
    if(string.length === 1){
      return string
    }else{
      return newStr +'+'+ parseNumber(string.slice(1))
    }
  }


console.log(parseNumber(3333)) // 3000+300+30+3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3