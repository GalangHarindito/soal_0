/*
  /////////////////
  americanGotTalent
  /////////////////

  Function americanGotTalent akan menentukkan juara serta jumlah votingnya dari suatu array.
  Function akan menerima 1 parameter yaitu:
    - votes adalah kumpulan string nama, tipe datanya array.
  Function ini akan mengembalikkan nilai string dalam format:
    - Apabila terdapat juara: "Selamat juaranya adalah [nama], dengan total votes yang diterima [totalVotes]".
    - Apabila tidak terdapat juara: "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini".
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho'];

  [PROCESS]
    terdapat 2 voting Lee Min Ho yang paling banyak.

  [OUTPUT]
    Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2.

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho'];

  [PROCESS]
    tidak terdapat yang terbanyak.

  [OUTPUT]
    Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
  
  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .pop(), .shift() dan .unshift()
*/

function americanGotTalent(votes) {
  // code here

  var name = []
  var flag =false
  
  for(var i=0;i<votes.length;i++){
    flag = true
    a=0
    for(var j=0;j<name.length;j++){
      if(votes[i] === name[j]){
        a++
        flag = false
      }    
    }
    if(flag){
     name.push(votes[i])
    }
    
    
}
// hitung jumlah votes
var countVotes = []
for(var k=0;k<name.length;k++){
  var count = 0
  for(var l=0;l<votes.length;l++){
    if(name[k]===votes[l]){
       count ++
    }
  }
  countVotes.push(count)

}
// sort

for(var m=countVotes.length;m>=0;m--){
  for(var n=0;n<m;n++){
    if(countVotes[n] < countVotes[n+1]){
   var temp = countVotes[n]
   var temp2 = name[n]
   countVotes[n] = countVotes[n+1]
   countVotes[n+1] = temp
   name[n] = name[n+1]
   name[n+1] = temp2
  }
}
}
// pembanding seri
var draw =[]
for(var o=0;o<countVotes.length;o++){
  if(countVotes[0]=== countVotes[o+1]){
    return 'Mohon maaf juara tidak bisa ditentukkan dalam minggu ini'
  }
}
 return 'Selamat juaranya adalah '+ name[0]+', dengan total votes yang diterima '+ countVotes[0]
}




  



console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho']));
// Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']));
// Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby']));
// Selamat juaranya adalah Arby, dengan total votes yang diterima 2
