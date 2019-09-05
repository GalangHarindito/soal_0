/*
  ////////////
  richestGroup
  ////////////

  Function richestGroup akan menentukkan siapa yang paling kaya dalam suatu grup.
  Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
    - kelompok yang ada HANYA terdiri dari A dan B. tapi tidak harus selalu ada.
  Function ini akan mengembalikkan nilai string.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var groups = [
      ['A', 'B'],
      ['A', 'A']
    ]

  [PROCESS]
  Pada array ['A', 'B'] tidak ada yang unggul.
  Pada array ['A', 'A'] A unggul, maka nilai group A ditambah 1

  [OUTPUT]
    Group A win...

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var groups = [
      ['A', 'A'],
      ['B']
    ]

  [PROCESS]
  Pada array ['A', 'A'] A unggul, maka nilai group A ditambah 1.
  Pada array ['B'] B unggul, maka nilai group B ditambah 1.
  
  [NOTES]
  Apabila ada yang seri atau tidak ada yang unggul maka tampilkan Tidak ada pemenangnya...

  [OUTPUT]
    Tidak ada pemenangnya...

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/


function richestGroup(groups) {
  // code here
  var newGroups = []
  flag = false
  for(var i=0;i<groups.length;i++){
    for(var j=0;j<groups[i].length;j++){
      // console.log(groups[i][j])
      flag = true
    s=0
    for(var k=0;k<groups[i][j].length;k++){
      if(groups[i][j] === newGroups[k]){
        s++
        flag = false
      }
      if(flag){
        newGroups.push(groups[i][j])
        console.log(newGroups)
    }
    
      }
      var countGroups =[]
      var count =0
    for(var l=0;l<newGroups.length;l++){
       
      console.log(newGroups[l])
     if(groups[i][j] === newGroups[l]){
       count++
       
     }      
    }
    countGroups.push(count)
    //  console.log(countGroups)
    }
    
  
    
    
  }
  // if(groups.length===0){
  //     return 'Tidak ada pemenangnya'
  // }
  // console.log(newGroups)
}
  
  

  



console.log(richestGroup([
  ['A', 'B'],
  ['A', 'A']
]))
// Group A win...

// console.log(richestGroup([
//   ['A', 'A'],
//   ['B']
// ]))
// Tidak ada pemenangnya...

// console.log(richestGroup([
//   ['B']
// ]))
// Group B win...

// console.log(richestGroup([]))
// Tidak ada pemenangnya...