function isSave(board) {
    var count = 0
    for(var i=0;i<board.length;i++){
        for(var j=0;j<board[i].length;j++){
            if(board[i][j] === 'R'){
                for(var k=0;k<board[i].length;k++){
                    if(board[k][i] === 'P'){
                        count ++
                    }
                }
                for(var k=0;k<board[i].length;k++){
                    if(board[i][k] === 'P'){
                        count++
                    }
                }
                for(var k=0;k<board[i].length;k++){
                    if(board[i-1][k-1] === 'P'){
                        count++ 
                        console.log(i,k)
                    }if(board[i+1][k+1] === 'P'){
                        count++
                        console.log(i,k)
                    }if(board[i+1][k-1] === 'P'){
                        count++
                        console.log(i,k)
                    }if(board[i-1][k+1] === 'P'){
                        count++
                        console.log(i,k)
                    }
                }
            }

        }
    }
    console.log(count)
} //end function
console.log(isSave(
        [
            [' ', ' ', ' '],
            [' ', 'R', ' '],
            [' ', ' ', 'P']
        ]
    )) // 1
console.log(isSave(
        [
            ['P', ' ', 'P'],
            [' ', ' ', 'R'],
            ['P', ' ', 'P']
        ]
    )) // 2
console.log(isSave(
        [
            [' ', ' ', 'P'],
            ['P', 'R', 'P'],
            ['P', ' ', ' ']
        ]
    )) // 4

console.log(isSave(
        [
            ['P', ' ', 'P', ' ', 'P'],
            [' ', 'P', 'P', 'P', ' '],
            ['P', 'R', ' ', ' ', ' '],
            [' ', 'P', ' ', 'P', ' '],
            ['P', ' ', ' ', ' ', 'P']
        ]
    )) // 4