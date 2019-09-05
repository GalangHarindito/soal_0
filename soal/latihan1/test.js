function cariMedian(arr) {
    var median = Math.floor(arr.length/2)
    // console.log(median)
   
    if (arr.length%2===1){
        // return arr[median]
        console.log(arr[median])
    }else {
        // return (arr[median - 1] + arr [median]) /2
       }
   
     }
     
     // TEST CASES
     console.log(cariMedian([1, 2, 3, 4, 5])); // 3
     console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
     console.log(cariMedian([3, 4, 7, 6, 10])); // 7
     console.log(cariMedian([1, 3, 3])); // 3
     console.log(cariMedian([7, 7, 8, 8])); // 7.5


     for(var i=0;i<arr.length;i++){
        count =0
        if(arr[i] % 2 === 0){
         genap.push(arr[i])
        }  
      }
      var median = Math.floor(genap.length/2)
    
      if(genap.length % 2 === 1){
        return genap[median]
      }else{
        return (genap[median-1] + genap[median]/2)
      }
    }
      