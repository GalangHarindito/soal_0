function changeChar(string1,char1,char2){
    var newStr = ''
    for(var i=0;i<string1.length;i++){
    flag = false
        if(string1[i] === char1){
            newStr += char2
            flag = true
        }
        if (flag === false){
            newStr += string1[i]
        }
    }
    return newStr
}