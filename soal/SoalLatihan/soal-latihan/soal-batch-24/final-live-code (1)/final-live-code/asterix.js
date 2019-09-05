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
            }else{
                baris += 'O'
            }
            }
            if(i < height && i != 0) result += '\n'
            kosong++
            result += baris
        }
      return result
    }
//     else if(direction === 'down'){
//         for(var k=0;k<height;k++){
//             var baris =[]
//             for(var l=0;l<height;l++){
//                 if(l <= kosong){
//                     baris.push(String(l+1))
//                 }else{
//                     baris.push(' ')
//                 }
//             }
//             result.push(baris)
//             kosong++
//         }
//     }
    
    
 
// return result
// }



console.log(halfTriangle(6))