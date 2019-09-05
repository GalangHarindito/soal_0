// function manualSort(array) {
//   for(i=0;i<array.length;i++){
//       if(i<array.length){
//           var flag = false
//           do{
//               flag = false
//               for(j=0;j<array[i].length;j++){
//                   if(array[i][j] < array[i][j+1]){
//                       var temp = array[i][j]
//                       array[i][j] = array[i][j+1]
//                       array[i][j+1]=temp
//                       flag = true
//                   }
//               }
//           }
//           while(flag)
//       }
//   }
//   return array
// }

// console.log(manualSort([[3, 4, 2], [5, 1, 6, 7]]));
// /*
//   [
//     [2, 3, 4],
//     [1, 5, 6, 7]
//   ]
// */a

function manualSort(array) {
    for(i=0;i<array.length;i++){   
        for(j=array[i].length-1;j>=0;j--){
            for(k=0;k<j;k++){
                if(array[i][k] > array[i][k+1]){  
                    var temp = array[i][k]
                    array[i][k]=array[i][k+1]
                    array[i][k+1]=temp
                }
                
            }
          
        }
    }
    return array
  }
  
  console.log(manualSort([[3, 4, 2], [5, 1, 6, 7]]));
  /*
    [
      [2, 3, 4],
      [1, 5, 6, 7]
    ]
  */