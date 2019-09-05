/*
==============
Favorite Color
==============

[INSTRUCTIONS]
Kita tahu bahwa warna dasar adalah: 'red', 'yellow', 'blue'
Pada sebuah panelis pemilihan warna, function akan me-return output warna terbanyak.
Apabila jumlah 'red' dalam array lebih besar dari jumlah 'yellow' dan 'blue', maka function akan mereturn "red the most favorite!".
Apabila jumlah 'yellow' dalam array lebih besar dari jumlah 'red' dan 'blue', maka function akan mereturn "yellow the most favorite!".
Apabila jumlah 'blue' dalam array lebih besar dari jumlah 'red' dan 'yellow', maka function akan mereturn "blue the most favorite!".
Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "There are no clear winner!"

[RULE]
- Wajib menuliskan algoritma/pseudocode.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/

function favoriteColor(input) {
    var result = ''
    var totCount =[]
    var warnaUnik = makeUnique(input)

    if(input.length === 0){
        return "There are no favorite!"
    }
    else{
        for(var i=0;i<warnaUnik.length;i++){
            var count =0
            for(var j=0;j<input.length;j++){
                if(warnaUnik[i] === input[j]){
                count++
                }
            }
            totCount.push(count)
        }
    manualSort(totCount,warnaUnik)
    return warnaUnik[0] + " the most favorite!"
    }


} //akhir function





function makeUnique(array2) {
    var arrUniqe = []
    for (var i = 0;i< array2.length; i++) {
        if (unique(array2[i], arrUniqe) === false) {
          arrUniqe.push(array2[i]);
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


function manualSort(array, array1) {
    for(var i=array.length-1;i>=0;i--){
        for (var j=0;j<i;j++){
            if(array[j] < array[j+1]){
                var temp = array[j]
                var temp1 = array1[j]
                array[j] = array[j+1]
                array1[j] = array1[j+1]
                array[j+1] = temp
                array1[j+1] = temp1
            }
        }
    }
    // return array
};
  
  
console.log(favoriteColor(['red', 'red', 'yellow'])); // "red the most favorite!"
console.log(favoriteColor(['blue', 'red', 'yellow', 'blue'])); // "blue the most favorite!"
console.log(favoriteColor(['yellow', 'yellow', 'yellow'])); // "yellow the most favorite!"
console.log(favoriteColor(['red'])); // "red the most favorite!"
console.log(favoriteColor([])); // "There are no favorite!"