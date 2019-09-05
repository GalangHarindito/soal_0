/*
  HEROES
  Heroes adalah sebuah fungsi untuk menentukkan karakter apa saja yang disukai
  orang sehingga yang duplikat tidak perlu dicatat.
  Fungsi akan menerima parameter berupa string

  EXAMPLE
  INPUT: "saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"
  OUTPUT: [saitama, naruto, nobita, sasuke]

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), .unshift()
*/

function Heroes(hero) {
  // // code below here
  var newHero = manualSplit(hero,'&&')
  var result = makeUnique(newHero)
  if(hero.length === 0){
    return '""'
  }
  return result
}

// ----------------------------- SPLIT -----------------------------------
function manualSplit(string,separator){
  var newArr = [],
  tempStr = '';
  var slice = ''
  var length = (separator.length)

  for (var i = 0; i <= string.length ; i++) {
    if (separator === manualSlice(string,i,i+length) || i === string.length) {
      newArr.push(tempStr)
      tempStr = ''
      i += length-1
    } 
    else {
      tempStr += string[i];
    }
  }
  return newArr;
}

//---------------------------SLICE------------------------------------------
function manualSlice(string,start,end){
  newString = ''

  for(var i=start;i<end;i++){
    newString += string[i]
  }
  return newString
}

// ----------------------------- MAKE UNIQUE -----------------------------
function makeUnique(array2) {
  var arrUniqe = []
  for (var i = 0;i< array2.length; i++) {
    if (unique(array2[i], arrUniqe) === false) {
        arrUniqe.push(array2[i]);
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


// TEST CASE
console.log(Heroes("saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"))
// [ 'saitama', 'naruto', 'nobita', 'sasuke' ]
console.log(Heroes("doraemon&&sakura&&inuyasha&&saitama&&shoji&&ikan indosiar"))
// [ 'doraemon', 'sakura', 'inuyasha', 'saitama', 'shoji', 'ikan indosiar' ]
console.log(Heroes(""))
// There's no heroes
