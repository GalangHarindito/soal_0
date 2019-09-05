// Unique single array 
// contoh arry [ini, itu, ini, sini]

function makeUnique(array) {
    var arrUniqe = []
    for (var i = 0;i< array.length; i++) {
        if (unique(array[i], arrUniqe) === false) {
            arrUniqe.push(array[i]);
        }
    }
    return arrUniqe
}
  
function unique(string, array){
    for(var i=0;i<array.length;i++){
        if(array[i] === string){
            return true
        }
    }
    return false
}


// Unique apabila akan mengambil huruf unik dari masing2 index
// contoh arry ['re', 'em', 'b', 'erm', 'em']
// hasil akan mengambil [r, e, b, m]

function makeUnique(array2) {
    var arrUniqe = []
    for (var i = 0;i< array2.length; i++) {
        for(var j=0;j<array2[i].length;j++){
            if (unique(array2[i][j], arrUniqe) === false) {
                arrUniqe.push(array2[i][j]);
            }
        }
    }
    return arrUniqe
}
  
function unique(string, array){
    for(var i=0;i<array.length;i++){
        if(array[i] === string){
            return true
        }
    }
    return false
}
  