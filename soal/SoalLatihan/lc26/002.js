/*
===============
MajoritySweeper
===============

[INSTRUCTIONS]
MajoritySweeper adalah function yang dibuat untuk mengeliminasi nilai array yang 
sering muncul (mayoritas) dari daftar nilai array 

[EXAMPLE]
INPUT: [9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5]
OUTPUT: [9, 3, 3, 4, 2, 5, 5, 5]

INPUT: [22, 22, 100, 100, 100, 2000]
OUTPUT: [22, 22, 2000]

INPUT: [2, 2]
OUTPUT: []

INPUT:[4, 4, 4, 1, 1, 1, 2, 2]
jika nilai minoritas/mayoritas sama, maka nilai yang digunakan yang pertama
OUTPUT: [1, 1, 1, 2, 2]

[RULE]
- Hanya boleh menggunakan for/ while loop, if -else, serta fungsi array pada javascript
- dilarang menggunakan fungsi es6
*/

function MajoritySweeper(arr) {
  var sortir = [];
  for (var a = 0;a<arr.length;a++) {
    sortir.push(arr[a])
  }

sortir = sortir.sort()
  
  for (var i=0;i<sortir.length;i++) {
    if (sortir[i]=== sortir[i+1]) {
      sortir.splice([i+1],1)
      i--
    }
  }//akhir loop i
  
  //mencari angka terbanyak;
  var rek = []
  for (var j = 0;j<sortir.length;j++) {
    var s = 0;
    for (var x = 0;x<arr.length;x++) {
      if (sortir[j] == arr[x]) {
        s++
      }
    }rek.push(s)
  }//akhir loop j

  for (var b = 0;b<rek.length;b++) {
    if(rek[b]>rek[b+1]) {
      rek.splice(b+1,1)
      b--
    }else if (rek[b]<rek[b+1] || rek[b]===rek[b+1]) {
      rek.splice(b,1)
      b--
    }
  }//akhir loop b

  //mensortir angka terbanyak muncul dari arr;
  for (var c = 0;c<arr.length;c++) {
    if (arr[c] === sortir[0]) {
      arr.splice(c,1)
      c--
    }
  }


console.log(sortir)
console.log(rek)
  
return arr
}

console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])) // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])) // [ 22, 22, 2000 ]
console.log(MajoritySweeper([2, 2])) // []
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])) // [ 1, 1, 1, 2, 2 ]