/*
  SELECT OPTION
  Select Option adalah sebuah fungsi untuk mengambil nilai tengah atau median dari
  array hasil kelipatan dari keynya.
  Fungsi akan menerima parameter berupa array dan key yang ingin dicari.

  EXAMPLE
  INPUT: array = [1, 2, 3, 4, 5, 6, 7], key = 2
  PROCESS: [2, 4, 6] adalah array yang merupakan kelipatan 2
  MEDIAN: 4
  OUTPUT: 4 adalah nilai median dari array di process

  INPUT: array = [1, 2, 3, 4, 5, 6], key = 1
  PROCESS: [1, 2, 3, 4, 5, 6] adalah array yang merupakan kelipatan 1
  MEDIAN: (3 + 4)/2
  OUTPUT: 3.5 adalah nilai tengah dari array di process

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), Math, dan .unshift()
  2. WAJIB menggunakan PSEUDOCODE
*/

function selectOption(array, key) {
  // code below here
  var tempResult = []
  var result = 0

  for(var i=0;i<array.length;i++){
    if(array[i] % key === 0){
       tempResult.push(Number(array[i]))
    }
  }
  if(tempResult.length === 0){
    return "There's not option"
  }
  var median = Math.floor(tempResult.length/2)
  if(tempResult.length % 2 === 1){
    return tempResult[median]
    }
  else if (tempResult.length % 2 === 0){
    return (tempResult[median - 1] + tempResult[median]) /2
    }
}

/*
---ALGORITHM

1. membuat variable tempResult dengan isi array
2. Membuat variable result dengan isi number 0
3. Looping array dimulai dari index 0, dibatasi dengan panjang variable array
4. Membuat kondisi bila index array habis dibagi dengan key maka array akan ditampung ke tempArray
5. Membuat \kondisi bila panjang tempResult adalah 0 maka print Theres not option
6. membuat variable median dengan isi panjang tempResult dibagi 2 dan hasil tersebut dibulatkan ke angka terdekat
7. Membuat kondisi apabila tempResult tidak habis dibagi 2 maka print tempResult berdasarkan index var median
8. Membuat kondisi apabila tempResult habis dibagi 2 maka index tempResult dikutang 1 ditambah indeks tempResult dari hasil median dibagi 2

*/


// TEST CASE
console.log(selectOption([1, 2, 3, 4, 5, 6, 7], 2)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 1)) // 3.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 3)) // 4.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 4)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 7)) // There's not option
