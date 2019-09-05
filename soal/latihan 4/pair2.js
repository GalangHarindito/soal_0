 /*============
    PAIR PROJECT 
    ============
    [INSTRUCTION]
    saat nya phase 0 mengerjakan project secara pair ( berpasangan / berdua ). 
    dalam pembagian kelompok student, ada kriteria yang harus dipenuhi yaitu 
    setiap kelompok yang dipasangkan harus memiliki huruf depan ( inisial ) yang 
    BERBEDA. 
    
    pada kelas ini , jumlahnya selalu genap dan murid yang memiliki inisial yang sama 
    tidak lebih dari 2 orang
    ketentuan : 
    - jika murid berjumlah ganjil output : "Jumlah murid harus genap"
    - tambahkan test case lain bila diperlukan 
    [Example]
    input : ["asep","baqi","jajang","junaedi","iqbal","toni"]
    output : ["asep and baqi","jajang and iqbal","junaedi and toni"]
    [RULE]
    - dilarang menggunakan build in function array apapun kecuali push() 
    - Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
    - Dilarang menggunakan regex .match dan lainnya!
    - Dilarang menggunakan built in function .indexOf() dan .include()
    
*/
function pairProject(students) {

    let hasil = [];
    let pair1 = [];
    let pair2 = [];
    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < students.length; j++) {
            if (students[i][0] != students[j][0]) {
                let name1 = students[i];
                let name2 = students[j];
                let s = 0
                for (let k = 0; k < pair1.length; k++) {
                    if (name1 === pair1[k]) {
                        s++
                    }
                    if (name2 === pair1[k]) {
                        s++
                    }
                }
                for (let k = 0; k < pair2.length; k++) {
                    if (name1 === pair2[k]) {
                        s++
                    }
                    if (name2 === pair2[k]) {
                        s++
                    }
                }
                if (s === 0) {
                    pair1.push(name1);
                    pair2.push(name2);
                   
                }
            }

        }
    } //end loop i
    console.log(name1,name2)
    for (let i = 0; i < pair1.length; i++) {
        let str = pair1[i] + ' dan ' + pair2[i];
        hasil.push(str)
    }

    // return hasil
} //end function


console.log(pairProject(["Aries", "Awtian", "Momotaro", "Yoki", "Icha", "Wika", "Wawan", "Mimin", "Ryan", "Yogi"]))
    /* 
    [ 'Aries and Momotaro',
      'Awtian and Yoki',
      'Icha and Wika',
      'Wawan and Mimin',
      'Ryan and Yogi' ]
    */
console.log(pairProject(["asep", "baqi", "jajang", "junaedi", "iqbal", "toni"]))
    /* 
        ["asep and baqi","jajang and iqbal","junaedi and toni"]
    */