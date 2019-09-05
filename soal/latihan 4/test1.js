function test(num){
var space = num-1
var mid = Math.floor(num/2)


    for(var i=0;i<num;i++){
        var str = ''
        for(var j=0;j<num;j++){
            if(i === 0 || i === num-1){
                str += 'x'
            }else if(j === 0 || j === num-1){
                str += '|'
            }else if(i === j){
                str += 'O'
            }else if(j === space && i > 0){
                str += 'O'
            }else if(i === mid){
                str += '-'
            }else if(j === mid){
                str += '*'
            }
            else{
                str += ' '
            }     
        }
         space--
        console.log(str)
    }
    
}



console.log(test(9))
console.log(test(8))