/*
  # Escape Rooms
  > ⏰ Time Estimation: 45 mins

  Team kita sebagai mata-mata memiliki waktu yang sedikit agar bisa keluar dari bangunan yang akan meledak itu.

  Kamu, yang bertugas untuk memetakan gedung tersebut, harus memiliki prediksi yang tepat, berapa langkah mata-mata tersebut bisa keluar dari bangunan ini.

  Function escapeRooms adalah sebuah fungsi yang menerima satu parameter berupa array multi dimensi. Adapun team lain sudah memetakan beberapa koordinat dengan penjelasan sebagai berikut:

  - '*' adalah posisi start mata-mata tersebut berada
  - 'L' adalah posisi tangga yang bisa memindahkan kamu ke lantai bawah gedung tersebut
  - Setiap kamu pindah ke lantai bawah, kamu akan muncul di posisi 'S', kemudian kamu pergi lagi menuju 'L'
  - Jika kamu sudah berada di posisi lantai akhir, kamu akan muncul di posisi L dan harus menemukan pintu exit yang bertanda 'F'

  ### NOTES

    - Asumsi kamu selalu berada di posisi paling atas dan kamu selalu menuju lantai paling bawah
    - Kamu hanya bisa berjalan ke atas, ke bawah, ke kanan dan ke kiri.

  ## RELEASE 0

  Temukan cara menemukan koordinat dengan tepat, dan kamu memiliki perhitungan untuk menuju ke koordinat yang dituju dengan tepat

  ## RELEASE 1

  Kamu bisa mengkalkulasikan total step yang dibutuhkan dengan tepat.
*/


// javascript
function escapeRooms(board) {
    var bintang= []
    var allLadder =[]
    var allS = []
    var exitF = []
    

    for(var i=0;i<board.length;i++){
        var ladder = []
        var S = []
        for(var j=0;j<board[i].length;j++){
            for(var k=0;k<board[i][j].length;k++){
               if(board[i][j][k] === '*'){
                    bintang.push(i,j,k)
                } 
                else if(board[i][j][k] === 'L'){
                    ladder.push(i,j,k)
                    allLadder.push(ladder)
                }
                else if(board[i][j][k] === 'S'){
                    S.push(i,j,k)
                    allS.push(S)
                }else if(board[i][j][k] === 'F'){
                    exitF.push(i,j,k)
                }
            }
        }
    }
    var ladderAwal = allLadder[0]
    var ladderExit = allLadder[allLadder.length -1]
    var ladderTengah = []
    for(var i=1;i<allLadder.length-1;i++){
      ladderTengah.push(allLadder[i])
    }

    var coordStart = 0
    var stepStart = 0
    var coordExit = 0
    var stepExit = 0
    for(var i=0;i<ladderAwal.length;i++){
      coordStart = Math.abs(ladderAwal[i] - bintang[i])
      stepStart += coordStart
      coordExit = Math.abs(ladderExit[i] - exitF[i])
      stepExit += coordExit
    }
    var coordTengah =0
    var stepTengah = 0
    for(var i=0;i<allS.length;i++){
      for(var j=0;j<allS[i].length;j++){
        coordTengah = Math.abs(allS[i][j] - ladderTengah[i][j])
        stepTengah += coordTengah
      }
    }
    var result = stepStart + stepTengah + stepExit
    return 'Anda memerlukan ' + result +' untuk keluar dari bangunan ini'
  }
  
  const stage1 = [
    [
      ['*', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'L', ' '],
      [' ', ' ', ' ', ' ', ' ']
    ],
    [
      [' ', ' ', ' ', ' ', ' '],
      [' ', 'S', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', 'L']
    ],
    [
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', 'L', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', 'F']
    ]
  ]
  console.log(escapeRooms(stage1))
  // Anda memerlukan 16 untuk keluar dari bangunan ini
  
  const stage2 = [
    [
      ['*', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', 'L']
    ],
    [
      ['L', ' ', ' '],
      [' ', ' ', 'S'],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ],
    [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', 'S', ' '],
      ['L', ' ', ' '],
    ],
    [
      ['L', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', 'S', ' '],
    ],
    [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', 'S', ' '],
      [' ', ' ', 'L'],
    ],
    [
      ['L', 'S', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ],
    [
      ['L', ' ', ' '],
      [' ', ' ', ' '],
      [' ', 'S', ' '],
      [' ', ' ', ' '],
    ],
    [
      [' ', 'S', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', 'L', ' '],
    ],
    [
      [' ', ' ', ' '],
      ['F', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', 'L'],
    ]
  ]
  console.log(escapeRooms(stage2))
  // Anda memerlukan 27 untuk keluar dari bangunan ini