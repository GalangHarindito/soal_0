function manualSplice (data, initIndex, deleteCount, insertArray) {
    newArr=[]
  
    for(var i=0;i<data.length+1;i++){
        if(i<initIndex){
            newArr.push(data[i])
        }
        else if(i >= initIndex && i <= initIndex + insertArray.length-1 ){
            newArr.push(insertArray[i-initIndex])
        }
        else if(i < data.length + insertArray.length - deleteCount){
            newArr.push(data[i+deleteCount-insertArray.length])
        }
    }
    return newArr
}