/* 
MENCARI POSISI TEMPAT DUDUK DI RUANG SEMINAR

function findEmptySeat akan menerima array multidimensi yang menggambarkan sebuah ruangan seminar.

Symbol '*' menandakan bahwa kursi telah ditempati seseorang, dan spasi ' ' menandakan bahwa kursi tersebut kosong.

Pada posisi persis tengah ruangan terdapat juga jalur kosong vertikal yang merupakan sebuah jalan.

Carilah posisi kosong pada ruangan tersebut dan tandai dengan menempatkan symbol '#'.

Jika terdapat lebih dari 1 posisi kursi kosong, maka pilihlah posisi dengan baris paling belakang diantara kursi kosong tersebut.
Dan jika ada lebih dari 1 posisi kursi kosong di baris yang sama, maka akan dipilih posisi paling kanan

Kalau tidak ada kursi kosong yang tersedia maka tampilkan pesan "maaf tidak ada kursi kosong tersedia"


INPUT:
[
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*']
]

PROCESS:
- jalur kosong ada di kolom dengan indeks 3
- posisi kursi kosong ada di indeks (4,1) dan (5,5)
- posisi kursi kosong paling belakang ada di indeks (5,5)

OUTPUT: simbol # ditempatkan pada posisi indeks (5,5)

[ ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '#', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'] ]

*/

function findEmptySeat(room) {
  var seat =[]
  
  for(var i=0;i<room.length;i++){
    for(var j=0;j<room[i].length;j++){
      var seatKosong = []
      if(room[i][j] === ' '){
        seatKosong.push(i,j)  
        seat.push(seatKosong)
      }
    }
  }
  var emptySeat =[]
  for(var i=0;i<seat.length;i++){ 
    if(seat[i][1] !== seat[0][1]){
      emptySeat.push(seat[i])
    }
  }
  var newEmpty = []
  for(var i=emptySeat.length-1;i>=0;i--){
    newEmpty.push(emptySeat[i])
  }
  if(newEmpty[0] === undefined){
    return 'maaf tidak ada kursi kosong tersedia'
  }
  else{
    posI = newEmpty[0][0]
    posJ = newEmpty[0][1]
  }
  room[posI][posJ]='#'
  return room
}
 



console.log(findEmptySeat([
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*']
]))
/* 
[ ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '#', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'] ]
*/


console.log(findEmptySeat([
  ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*','*', ' ', '*', ' ', ' ', '*', '*', '*'],
  ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*','*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*','*', '*', '*', ' ', ' ', '*', '*', '*'],
  ['*','*', ' ', '*', ' ', '*', '*', '*', '*'],
  ['*','*', '*', '*', ' ', '*', '*', '*', '*']
]))
/*
[ [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', ' ', '*', ' ', ' ', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', ' ', '*', '*', '*' ],
  [ '*', '*', '#', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ] ]
*/

console.log(findEmptySeat([
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*']
]))
// maaf tidak ada kursi kosong tersedia
