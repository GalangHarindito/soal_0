// ----------------------------- SPLIT -----------------------------------
function manualSplit(string,separator){
  var newArr = [],
  tempStr = '';
  var length = (separator.length)
  
  for (var i = 0; i <= string.length ; i++) {
    if (separator === manualSlice(string,i,i+length) || i === string.length) {
      newArr.push(tempStr)
      tempStr = ''
      i += length-1
    } 
    else{
      tempStr += string[i];
    }
  }
    return newArr;
}
  
  //---------------------------SLICE------------------------------------------
function manualSlice(string,start,end){
  newString = ''
  
  for(var i=start;i<end;i++){
    newString += string[i]
  }
  return newString
}
  