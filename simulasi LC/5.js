/*
  //////////////////
  SUPER SHOOT SOCCER
  //////////////////

  Function Super Shot Soccer akan menunjukkan juara dari kompetisi sepak bola. Fungsi ini
  akan menerima parameter berupa array of object, dan mengembalikkan nilai berupa object urutan juara.

  EXAMPLE
  INPUT: [
    {Name: 'Hideous', Power: 100, Club: 'Germany'},
    {Name: 'Sakuragi', Power: 84, Club: 'Japan'},
    {Name: 'Kira', Power: 40, Club: 'Korea'},
    {Name: 'Andre', Power: 59, Club: 'Egypt'}
  ]
  NOTES: 
    - Juara ditentukkan berdasarkan nilai powernya
    - Input array of object selalu ada value object orangnya
  PROCESS:
    - Germany => 100
    - Japan => 84
    - Korea => 40
    - Egypt => 59
  OUTPUT: {
    'Juara 1': 'Germany',
    'Juara 2': 'Japan',
    'Juara 3': 'Egypt',
    'Juara 4': 'Korea'
  }

  RULES:
    - Hanya boleh menggunakan built in function .push()
    - Asumsi setiap club tidak akan memiliki lebih dari 1 pemain
    - Asumsi jumlah power dari setiap club berbeda
*/

function superShootSoccer(players) {
  // code here
  var power = []
  var club = []

  for(var i=0;i<players.length;i++){
     power.push(players[i].Power)
     club.push(players[i].Club)
  } 
  manualSort(power,club)
  result ={
    'Juara 1' : club[0],
    'Juara 2' : club[1],
    'Juara 3' : club[2],
    'Juara 4' : club[3]
  }
  return result
}


function manualSort (array, array1) {
  // code below here
  for(var i=array.length;i>0;i--){
    for (var j=0;j<i;j++){
    if(array[j]<array[j+1]){
        var temp = array[j]
        var temp2 = array1[j]
        array[j] = array[j+1]
        array1[j] = array1[j+1]
        array[j+1] = temp
        array1[j+1] = temp2
      }
    }
  }
  return array
};

console.log(superShootSoccer([
  {Name: 'Hideous', Power: 100, Club: 'Germany'},
  {Name: 'Sakuragi', Power: 84, Club: 'Japan'},
  {Name: 'Kira', Power: 40, Club: 'Korea'},
  {Name: 'Andre', Power: 59, Club: 'Egypt'}
]))
// { 'Juara 1': 'Germany',
//   'Juara 2': 'Japan',
//   'Juara 3': 'Egypt',
//   'Juara 4': 'Korea' }

console.log(superShootSoccer([
  {Name: 'Hideous', Power: 20, Club: 'Germany'},
  {Name: 'Sakuragi', Power: 77, Club: 'Japan'},
  {Name: 'Kira', Power: 41, Club: 'Korea'},
  {Name: 'Andre', Power: 84, Club: 'Egypt'}
]))
// { 'Juara 1': 'Egypt',
//   'Juara 2': 'Japan',
//   'Juara 3': 'Korea',
//   'Juara 4': 'Germany' }