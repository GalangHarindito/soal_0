function manualReverse (array) {
    newArray = []

    for(var i=array.length-1;i>=0;i--){
        newArray.push(array[i])
    }
    return newArray
}
  
  console.log(manualReverse([1, 3, 2, 6, 4, 5]));
  // [ 5, 4, 6, 2, 3, 1 ]