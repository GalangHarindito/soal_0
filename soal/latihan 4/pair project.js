/*
    ============
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

function pairProject( students ) {
    result = [];
    used = [];
    if (students.length % 2 !== 0) {
        return 'Jumlah murid harus genap';
    }
    
    while (used.length < students.length) {
        let temp = []
        let i = 0
        while (i < students.length && temp.length < 2) {
            let kepake = isUsed (students[i])
            console.log(kepake)
            if (kepake) {
                i++
            } else {
                let boleh = true
                if (temp.length == 1) {
                    if (temp[0][0] == students[i][0]) {
                        boleh = false
                    }
                }

                if (boleh) {
                    used.push(students[i])
                    temp.push(students[i])
                } else {
                    i++
                }
            }
        }
        result.push(temp)
        // console.log(used)
    }
    // return result;
}

function isUsed (name) {

    for (let j = 0; j < used.length; j++) {
        // console.log("used :" + used)
        // console.log("j skrg:" + j);
        // ;
        
        if (name == used[j]) {
            return true
        }
    }
    return false
}

console.log( pairProject(["Aries","Awtian","Momotaro","Yoki","Icha","Wika","Wawan","Mimin","Ryan","Yogi"]) )
/* 
[ 'Aries and Momotaro',
  'Awtian and Yoki',
  'Icha and Wika',
  'Wawan and Mimin',
  'Ryan and Yogi' ]
*/

console.log( pairProject(["asep","baqi","jajang","junaedi","iqbal","toni"]) )
/* 
    ["asep and baqi","jajang and iqbal","junaedi and toni"]
*/

console.log(pairProject(['joni','lele','mantis']));
/*
    'Jumlah murid harus genap'
*/