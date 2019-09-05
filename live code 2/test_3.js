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
    var arrGroups = makeUnique(groups)
    // console.log(arrGroups)
   
    
    for(var i=0;i<groups.length;i++){
       var totCount = []
      for(var j=0;j<groups[i].length;j++){
      // console.log(groups[i][j],'---------------')
        var count=0 
         
        for (var k=0;k<arrGroups.length;k++){ 
          // console.log(arrGroups[k],'?????????')
              if(groups[i][j] === arrGroups[k]){
              count ++
              console.log(count,groups[i][j])
        }
        
      }
     
    }
     totCount.push(count)
    console.log(totCount,groups[j])
  }
}





  //-------------------------------------------------------------------  
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
  
  // console.log(makeUnique([
  //   ['A', 'B'],
  //   ['A', 'A']
  // ]))
  
  
  
  console.log(richestGroup([
    ['A', 'B'],
    ['A', 'A']
  ]))
  // Group A win...
  
//   console.log(richestGroup([
//     ['A', 'A'],
//     ['B']
//   ]))
  // Tidak ada pemenangnya...
  
  // console.log(richestGroup([
  //   ['B']
  // ]))
  // Group B win...
  
  // console.log(richestGroup([]))
  // Tidak ada pemenangnya...