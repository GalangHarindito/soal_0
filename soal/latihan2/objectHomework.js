// 1. Buat object seperti ini
/*
  {
    name: YOUR_NAME,
    batch: YOUR_BATCH,
    hobbies: [YOUR_HOBBIES]
  }
*/
var object ={}
object.name = 'Galang',
object.batch = 'HumbleFox',
object.hobbies = ['nothing', 'bengong']

console.log(object)

// 2. Memasukkan array ke dalam object
// Urutannya [NAME, CLUB, AGE]
var insertToObjects = [
  ['Kapten Tsubasa', 'Nankatsu', 19],
  ['Wakabayashi', 'Nankatsu', 20],
  ['Saitama', 'Hero Associate', 18]
]

object = {}

for(var i=0;i<insertToObjects.length;i++){
  object.NAME = insertToObjects[i][0],
  object.CLUB = insertToObjects[i][1],
  object.AGE = insertToObjects[i][2]
 
}
 console.log(object)

// 3. Membuat array menjadi unik

function makeUnique(arrayOfNames) {
  var arrUniqe = []
  for (var i = 0; i < arrayOfNames.length; i++) {
    if (unique(arrayOfNames[i], arrUniqe) === false) {
        arrUniqe.push(arrayOfNames[i]);
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


console.log(makeUnique(
  ['Lee Min Ho', 'Lee Kwang Ho', 'Lee Min Ho', 'Lindan']
))

// ['Lee Min Ho', 'Lee Kwang Ho', 'Lindan']

