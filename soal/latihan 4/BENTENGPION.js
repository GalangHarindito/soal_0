function isSave(board) {
    var count =0
    for(var i=0;i<board.length;i++){
        
        for(var j=0;j<board[i].length;j++){
            if(board[i][j] === 'B'){
                for(var k=0;k<board[i].length;k++){
                    if(board[k][i] === 'P'){
                        count++
                    }
                }
                for(var k=0;k<board[i].length;k++){
                    if(board[i][k] === 'P'){
                        count++
                    }
                }
            }
        }
    }
    console.log(count)
    if(count === 1){
        return false
    }else{
        return true
    }
} //end function
console.log(isSave(
        [
            [' ', ' ', ' '],
            [' ', 'B', ' '],
            [' ', ' ', 'P']
        ]
    )) // true
console.log(isSave(
        [
            [' ', ' ', ' '],
            [' ', 'B', ' '],
            [' ', 'P', '']
        ]
    )) // false
console.log(isSave(
        [
            [' ', ' ', ' '],
            [' ', 'B', 'P'],
            [' ', ' ', ' ']
        ]
    )) // false