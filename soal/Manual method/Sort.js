// Sort single array biasa
// contoh arry [ini, itu, sana, sini]

function manualSort(array) {
    for(var i=array.length-1;i>=0;i--){
        for (var j=0;j<i;j++){
            if(array[j] < array[j+1]){
                var temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
};

// Sort double array biasa
// contoh arry [ini, itu, sana, sini]

function manualSort(array, array1) {
    for(var i=array.length-1;i>=0;i--){
        for (var j=0;j<i;j++){
            if(array[j] < array[j+1]){
                var temp = array[j]
                var temp1 = array1[j]
                array[j] = array[j+1]
                array1[j] = array1[j+1]
                array[j+1] = temp
                array1[j+1] = temp1
            }
        }
    }
    return array
};

// Sort single array multidimensi array 
// contoh : [[3, 4, 2], [5, 1, 6, 7]];

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
  
  
  // Sort double array multidimensi array 
// contoh : [[3, 4, 2], [5, 1, 6, 7]];

function manualSort(array,array1) {
    for(i=0;i<array.length;i++){   
        for(j=array[i].length-1;j>=0;j--){
            for(k=0;k<j;k++){
                if(array[i][k] > array[i][k+1]){  
                    var temp = array[i][k]
                    var temp1 = array1[i][k]
                    array[i][k] = array[i][k+1]
                    array1[i][k] = array1[i][k+1]
                    array[i][k+1] = temp
                    array1[i][k+1] = temp1
                }
                
            }
          
        }
    }
    return array
}
  
  console.log(manualSort([[3, 4, 2], [5, 1, 6, 7]]));


// Sort single array deep array 
// contoh :   [[[1, 2, 3],[1, 2, 3]], [[1, 2, 3], [1, 2], [1]]]
  
function deepSort(array) {
    for(var i=0;i<array.length;i++){ 
        for(var j=0;j<array[i].length;j++){
            for(var k=array[i][j].length-1;k>=0;k--){
                for(var l=0;l<k;l++){
                    if(array[i][j][l] > array[i][j][l+1]){  
                        var temp = array[i][j][l]
                        array[i][j][l]=array[i][j][l+1]
                        array[i][j][l+1]=temp
                    }
                }
                
            }       
        }
    }
}