/*
  /////////////////////
  2ND WINNER GUILD WARS
  /////////////////////

  Function Guild Wars akan menentukkan juara ke-2 dalam bentuk string, dari peringkat 1 ke 4.
  Jumlah peserta selalu array dengan length 4.  

  EXAMPLE
  INPUT: ['OOOO', 'ooOO', 'o', 'OOo']
  INFO:
  - O dihitung 2 
  - o dihitung 1
  GUIDE: 
  - Awal Sisi Kiri: (Tim 1 vs Tim 2) dan Sisi Kanan: (Tim 3 vs Tim 4)
  - Pemenang dari Sisi Kiri vs pemenang dari Sisi Kanan menghasilkan juara 1 dan 2
  - Yang kalah dari Sisi Kiri vs yang kalah dari Sisi Kanan menghasilkan juara 3 dan 4
  PROCESS:
  - Sisi Kiri => OOOO vs ooOO => OOOO (win), ooOO (lose)
  - Sisi Kanan => o vs OOo => o (lose), OOo (win)
  - Winner vs Winner => OOOO vs OOo => OOOO (1), OOo (2)
  - Loser vs Loser => ooOO vs o => ooOO(3), o (4)
  - Urutan pemenang [OOOO, OOo, ooOO, o]
  OUTPUT:
  Juara Ke-2 adalah tim OOo

  RULES:
  1. Jumlah yang bertanding selalu 4 tim
  2. Asumsi total kekuatan di setiap tim tidak ada yang sama
*/

function guildWars(guilds) {
  
var totCount =[]

  for(var i=0;i<guilds.length;i++){
    var count =0
    for(var j=0;j<guilds[i].length;j++){
      if(guilds[i][j] === 'O'){
        count += 2
      }else if(guilds[i][j] === 'o'){
        count += 1
      }
    }
    totCount.push(count)
  }
  var kiri =[]
  var teamKiri =[]
  var kanan =[]
  var teamKanan=[]
  for(var k=0;k<totCount.length;k++){
    if(k < totCount.length/2){
      kiri.push(totCount[k])
      teamKiri.push(guilds[k])
    }
    if(k >= totCount.length/2){
      kanan.push(totCount[k])
      teamKanan.push(guilds[k])
    }
  }
  var score =[]
  var team = []
  score.push(kiri,kanan)
  team.push(teamKiri,teamKanan)
  manualSort1(score,team)
  
  if(score[0][0] > score [1][0]){
    return 'Juara ke-2 adalah tim '+ team[1][0]
  }else if( score[0][0] < score [1][0]){
    return 'Juara ke-2 adalah tim '+ team[0][0]
  }
  
}

//--------------------SORT---------------------------------

function manualSort1(array,array1) {
  for(i=0;i<array.length;i++){   
      for(j=array[i].length-1;j>=0;j--){
          for(k=0;k<j;k++){
              if(array[i][k] < array[i][k+1]){  
                  var temp = array[i][k]
                  var temp1 = array1[i][k]
                  array[i][k]=array[i][k+1]
                  array1[i][k]=array1[i][k+1]
                  array[i][k+1]=temp
                  array1[i][k+1]=temp1
              }
              
          }
        
      }
  }
  return array
}


console.log(guildWars(['OOOO', 'ooOO', 'o', 'OOo']))
// Juara ke-2 adalah tim OOo
console.log(guildWars(['OO', 'OOO', 'ooOOO', 'OOOo']))
// Juara ke-2 adalah tim OOO
console.log(guildWars(['ooo', 'oooo', 'oo', 'o']))
// Juara ke-2 adalah tim oo






// code here
  // var totCount = []
  // for(var i=0;i<guilds.length;i++){
  //   var count =0
  //   for(var j=0;j<guilds[i].length;j++){
  //     if(guilds[i][j] === 'O'){
  //       count += 2
  //     }else if(guilds[i][j] === 'o'){
  //       count += 1
  //     }
  //   }
  //   totCount.push(count)
  // }
  // manualSort(totCount,guilds)
  // console.log(totCount,guilds)
  // return 'Juara ke-2 adalah tim '+ guilds[guilds.length - 2]



  //--------------------SORT---------------------------------

// function manualSort (array, array1) {
//   // code below here
//   for(var i=array.length;i>0;i--){
//     for (var j=0;j<i;j++){
//     if(array[j]<array[j+1]){
//         var temp = array[j]
//         var temp2 = array1[j]
//         array[j] = array[j+1]
//         array1[j] = array1[j+1]
//         array[j+1] = temp
//         array1[j+1] = temp2
//       }
//     }
//   }
//   return array
// };