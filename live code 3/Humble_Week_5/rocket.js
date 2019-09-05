/*
==========
rememberMe
==========
[INSTRUCTIONS]
rememberMe adalah sebuah fungsi yang akan menerima parameter dengan tipe data array 
kemudian mengembalikkan nilai string.

[EXAMPLE]
INPUT: ['re', 'em', 'b', 'erm', 'em']
PROCESS: 
  're' diambil untuk melengkapi rememberme => memberme
  'em' diambil untuk melengkapi memberme => mberme
  'b' diambil untuk melengkapi mberme => merme
  'erm' diambil untuk melengkapi merme => me
  'em' diambil untuk melengkapi me => true
OUTPUT: completed

INPUT: ['rembrm']
PROCESS:
  'rembr' diambil untuk melengkapi rememberme => ememe
OUTPUT: ememe

[RULES]
  1. hanya boleh menggunakan built in function .push(), .unshift()
  2. kata yang dicari adalah rememberme
*/


function rememberMe(lyrics) {
  var str = 'rememberme'
  var arrStr =[]
  

  for(var i=0;i<str.length;i++){
    arrStr.push(str[i])
  }
  var arrLyric = makeUnique(lyrics)

  var countLyric = []
  for(var j=0;j<arrLyric.length;j++){
    var count =0
    for(var k=0;k<lyrics.length;k++){
      for(var l=0;l<lyrics[k].length;l++){
        if(arrLyric[j] === lyrics[k][l]){
          count++
        }
      }
    }
    countLyric.push(count)
  }
  var newStr =''
  for(var m=0;m<arrStr.length;m++){
    for(var n=0;n<arrLyric.length;n++){
      if(arrStr[m] === arrLyric[n]){
        if(countLyric[n] > 0){
          countLyric[n]--
        }else if(countLyric[n] === 0){
          newStr += arrStr[m]
        }
      }
    }
  }
  if(newStr === ''){
    return 'completed'
  }else{
    return newStr
  }
} 

//------------------------------ MAKE UNIQUE ---------------------------
function makeUnique(array2) {
  var arrUniqe = []
  for (var i = 0;i< array2.length; i++) {
    for(var j=0;j<array2[i].length;j++){
    if (unique(array2[i][j], arrUniqe) === false) {
        arrUniqe.push(array2[i][j]);
    }
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


//---------------------------------------------------------------------

console.log(rememberMe(['re', 'em', 'b', 'erm', 'em'])) //completed
console.log(rememberMe(['rembr'])) //ememe
console.log(rememberMe(['zoqoqo', 'zeieie', 'azzreqwm', 'fdasb', 'ravae', 'rera', 'mmmmm'])) //completed