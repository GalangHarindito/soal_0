/*
============================
Count Passing Students
============================

[INSTRUCTIONS]
Terdapat fungsi count passing students yang menerima 1 parameter berupa array.
Fungsi ini akan mengeluarkan output berupa string untuk menampilkan berapa jumlah siswa yang lulus ujian dan rata - rata nilai siswa yang lulus ujian.
Siswa dinyatakan lulus ujian jika memiliki nilai diatas 70

[EXAMPLE]
input : [80, 90, 70, 60, 30, 100]
output : 3 Siswa lulus ujian, rata - rata nilai siswa yang lulus : 90

input : [80, 85, 75, 60, 40, 97]
output : 4 Siswa lulus ujian, rata - rata nilai siswa yang lulus : 84

input : [10, 30, 70, 0]
output : Tidak ada siswa yang lulus ujian

[RULE]
- WAJIB MENGGUNAKAN ALGORITMA / PSEUDOCODE
- Hanya boleh menggunakan loop, kondisional, dan .push

*/

function countPassingStudents (arr) {
  //your code here
  var nilai = []
  var countIndex = []
  for(i=0;i<arr.length;i++){
    if(Number(arr[i]) > 70){
     nilai.push(arr[i])
    }
  }
  var countTotal = 0
  var count = 0
  for(var j=0;j<nilai.length;j++){
     countTotal += nilai[j] 
     count++
  }
  countIndex.push(count)
  var rate = Math.floor(countTotal/nilai.length)
  // console.log(countIndex)

  if(countIndex[0] === 0){
    return 'Tidak ada siswa yang lulus ujian'
  }else{
    return countIndex +' Siswa lulus ujian, rata - rata nilai siswa yang lulus : '+ rate
  }
}


/*
Algoritma

1. Membuat variable nilai dengan menggunakan array
2. Membuat variable counIndex dengan menggunakan array
3. Looping untuk mencari index variable str, dimulai dari 0 dengan batasan maksimal panjang str dan menambahkan sampai dengan panjang karakter
4. Membuat kodisi bila index variable str lebih dari 70 maka nilai variable akan di masukkan ke array nilai
5. Membuat variable counTotal dan variable count
6. Looping untuk mencari index dari variable nilai, dimulai dari 0 dengan batasan maksimal panjang array dari variable nilai 
7. countTotal untuk menghitung total karakter array variable nilai
8. count ++ untuk menghitung jumlah index dalam variable nilai
9. Memasukkan count kedalam variable array coutIndex
10. membuat variable rate untuk menghitung rata - rata, antara countTotal dibagi panjang var nilai
11. Membuat kodisi bila index ke 0 dari counIndex sama dengan 0, maka hasil akan 'Tidak ada siswa yang lulus ujian'
12. Lain dari kodisi diatas maka hasil akan  countIndex +' Siswa lulus ujian, rata - rata nilai siswa yang lulus : '+ rate,
    dimana countIndex adalah jumlah index dalam variable countIndex dan rate adalah jumlah rata - rata

*/
console.log(countPassingStudents([80, 90, 70, 60, 30, 100]))
// 3 Siswa lulus ujian, rata - rata nilai siswa yang lulus : 90

console.log(countPassingStudents([80, 85, 75, 60, 40, 97]))
// 4 Siswa lulus ujian, rata - rata nilai siswa yang lulus : 84

console.log(countPassingStudents([10, 30, 70, 0]))
// Tidak ada siswa yang lulus ujian

