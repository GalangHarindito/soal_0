function halfTriangle(height) {
    var result = ''
    var kosong = 0
    
        for(var i=0;i<height-1;i++){
            var baris = ''
            for(var j=0;j<height;j++){
            if(j > kosong ){
                baris += 'O'   
            }
            else{
                baris += 'I'
            }
            }
            if(i < height && i != 0) result += '\n'
            kosong++
            result += baris
        }
      return result
    }




console.log(halfTriangle(6))