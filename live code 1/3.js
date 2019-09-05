/*
  /////////////
  pyramidNumber
  /////////////

  pyramidNumber adalah suatu program untuk menampilkan piramida.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var max = 5

  [OUTPUT]
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
*/

var max = 6
var x=''

for (var i=1 ; i<max+1 ; i++) {
  for (var j=1 ; j<i+1 ; j++) {
    x+=i
  }
  
  if (i<max) x+='\n'
}
console.log(x) 


