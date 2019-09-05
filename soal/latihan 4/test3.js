function test(num){
    var space = num -1
    var length = num + num-1
  
    for(var i=0;i<num;i++){
        var str = '' 
        for(var j=0;j<length;j++){
            if(j === num-1){
                str += 'O'
            }else if(j === space && i > 0){
                str += 'O'
            }else if( j === i && j === num -1){
                str += '0'
            }
            else{
                str += ' '
            }
        }
        console.log(str)
        space --
    } 
    for(var i=1;i<num;i++){
        str = ''
        for(var j=0;j<length;j++){
            if(j === num-1){
                str += 'O'
            }else if(j === i){
                str += 'O'
            }
            else{
                str += ' '
            }
        }
        console.log(str)
        space ++
        
    }      
}
    
    
    
    console.log(test(3))
    console.log(test(8))