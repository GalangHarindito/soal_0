/*
Title Givers
==============
Name :_____________

[INSTRUCTIONS]
Title givers akan menerima dua parameter dimana parameter pertama merupakan array yang berisi nama.
Dan pada bagian kedua, adalah title yang akan di berikan kepada pemilik nama di array yang di berikan.
Jika title yang di berikan di mulai dengan koma `,` maka title akan di tuliskan.
Jika tidak, maka title akan di tuliskan di depan dan dipisahkan dengan spasi ` `.
Contoh ada pada test case.

[RULE]
- Wajib menyertakan pseudocode atau algorithma!
- Dilarang menggunakan sintaks .map()! 


PSEUDOCODE :

start

	STORE "result" with the value of empty Array

	FOR LOOP index 0 to length of targetArr
		FOR LOOP index 0 to length of title
			IF title[j] EQUALS TO "." THEN
				result push title + " " + targetArr[i]
			ELSE IF titile[j] EQUALS TO "," THEN
				result push targetArr[i]+ title
			END IF 
		EXIT LOOP
	EXIT LOOP

	DISPLAY "result"

end of program

*/

function titleGivers (targetArr, title) {
var hasil = [];
var arr = targetArr
for (var i= 0;i<arr.length;i++) {
	if (title === ', ST') {
		hasil.push(arr[i] + title)
	}else {
		hasil.push(title + arr[i])
	}
}
return hasil

}

console.log(titleGivers (['Awtian Akbar', 'Kobayakawa Sena', 'Yoichi Hiruma'], 'Mr.')); 
// Output
// [ 'Mr. Awtian Akbar',
//   'Mr. Kobayakawa Sena',
//   'Mr. Yoichi Hiruma' ]
console.log(titleGivers (['Dre', 'Brock', 'Leorio'], 'Dr.'));
// // Output
// // [ 'Dr. Dre', 'Dr. Brock', 'Dr. Leorio' ]
console.log(titleGivers (['Boush', 'Squee', 'Spleen' , 'Spoon'], ', ST'));
// Output
// [ 'Boush, ST', 'Squee, ST', 'Spleen, ST', 'Spoon, ST' ]
console.log(titleGivers (['lucy', 'lee', 'scorpio'], ', ST'));

// 6 minuetes 43 sec