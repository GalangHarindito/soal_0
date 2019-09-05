// 1. memfilter nilai object berdasarkan kondisi tertentu

var exercise1 = [
  { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
  { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
]


// Release 1 => coba ambil nama-nama yang nilainya diatas 30

result = []
for(i=0;i<exercise1.length;i++){
  if(exercise1[i].score >30){
    result.push(exercise1[i])
  }
 
}
 console.log(result) // -----end code-----


// Release 2 => coba ambil nama-nama yang nilainya diantara 70 dan 90

result = []
for(i=0;i<exercise1.length;i++){
  if(exercise1[i].score > 70 && exercise[i].score < 90){
    result.push(exercise1[i])
  }
 
}
 console.log(result) // -----end code-----



// 2. mensorting array of object berdasarkan value dari objectnya

// Release 1 => sorting isi ascending
for(var i=exercise1.length-1;i>=0;i--){
   for(var j=0;j<i;j++){
     if(exercise1[j].score > exercise1[j+1].score){
       var temp = exercise1[j].score 
       exercise1[j].score = exercise1[j+1].score
       exercise1[j+1].score = temp
     }
   }
   
}
console.log(exercise1) // -----end code-----



// Release 2 => sorting isi descending
for(var i=exercise1.length-1;i>=0;i--){
  for(var j=0;j<i;j++){
    if(exercise1[j].score < exercise1[j+1].score){
      var temp = exercise1[j].score 
      exercise1[j].score = exercise1[j+1].score
      exercise1[j+1].score = temp
    }
  }
  
}
console.log(exercise1) // -----end code-----




// Release 1 => coba ambil nama-nama yang nilainya diatas 30
/* 
  [ 
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
*/
// Release 2 => coba ambil nama-nama yang nilainya diantara 70 dan 90
/* 
  [ 
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
*/  

// 2. mensorting array of object berdasarkan value dari objectnya

// Release 1 => sorting isi ascending
/* 
  [ 
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100}
  ]
*/
// Release 2 => sorting isi descending
/* 
  [ 
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 }
  ]
*/