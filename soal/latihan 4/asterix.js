function halfTriangle(height) {
    var result = ''
    var kosong = 0
    // if(height < 4){
    //     return 'Minimum height is 4'
    // }
    // if(direction === 'up'){
        for(var i=0;i<height-1;i++){
            var baris = ''
            for(var j=0;j<height;j++){
            if(j < kosong ){
                baris += ' '   
            }
            else{
                baris += 'O'
            }
            }
            if(i < height && i != 0) result += '\n'
            kosong++
            result += baris
        }
      return result
    }




console.log(halfTriangle(6))