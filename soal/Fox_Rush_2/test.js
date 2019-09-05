// function manualSort(array) {
//     for(i=0;i<array.length;i++){   
//         for(j=array[i].length-1;j>=0;j--){
//             for(k=0;k<j;k++){
//                 if(array[i][k] > array[i][k+1]){  
//                     var temp = array[i][k]
//                     array[i][k]=array[i][k+1]
//                     array[i][k+1]=temp
//                 }
                
//             }
          
//         }
//     }
//     return array
//   }
  
//   console.log(manualSort([[[3, 4, 2], [5, 1, 6, 7]], [[6, 7, 8],[9, 10, 11]]]));
//   /*
  //   [
  //     [2, 3, 4],
  //     [1, 5, 6, 7]
  //   ]
  // */


//  function sort(array){
//   for(var i=0;i<array.length;i++){
//     console.log(array[i])
//     for(var j=0;j<array[i].length;j++){
//       console.log(array[i][j])
//       for(var k=0;k<array[i][j].length;k++){
//         console.log(array[i][j][k])
//       }
//     }
//   }
//   }
  
//   console.log(sort([[[3, 4, 2], [5, 1, 6, 7]], [[6, 7, 8],[9, 10, 11]]]));


// function manualSort(array) {
//   for(var i=0;i<array.length;i++){ 
//       for(var j=0;j<array[i].length;j++){
//         for(var k=array[i][j].length-1;k>=0;k--){
//           for(var l=0;l<k;l++){
//               if(array[i][j][l] < array[i][j][l+1]){  
//                   var temp = array[i][j][l]
//                   array[i][j][l]=array[i][j][l+1]
//                   array[i][j][l+1]=temp
//               }
//             }
              
//           }
        
//       }
//   }
//   return array
// }

// console.log(manualSort([[[3, 4, 2], [5, 1, 6, 7]], [[7, 6, 8],[13, 10, 11]], [[9, 10, 11], [8, 10,18], [2, 9, 7]]]));
 
function sort(array) {
  for(var i=0;i<array.length;i++){ 
      for(var j=0;j<array[i].length;j++){
        for(var k=array[i][j].length-1;k>=0;k--){
          for(var l=0;l<k;l++){
              if(array[i][j][l] < array[i][j][l+1]){  
                  var temp = array[i][j][l]
                  array[i][j][l]=array[i][j][l+1]
                  array[i][j][l+1]=temp
              }
            }
              
          }
        
      }
  }
  return array
}




console.log(sort([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 2