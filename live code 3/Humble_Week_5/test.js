/*
==========
rememberMe
==========
[INSTRUCTIONS]
rememberMe adalah sebuah fungsi yang akan menerima parameter dengan tipe data array 
kemudian mengembalikkan nilai string.

[EXAMPLE]
INPUT: ['re', 'em', 'b', 'erm', 'em']
PROCESS: 
  're' diambil untuk melengkapi rememberme => memberme
  'em' diambil untuk melengkapi memberme => mberme
  'b' diambil untuk melengkapi mberme => merme
  'erm' diambil untuk melengkapi merme => me
  'em' diambil untuk melengkapi me => true
OUTPUT: completed

INPUT: ['rembrm']
PROCESS:
  'rembr' diambil untuk melengkapi rememberme => ememe
OUTPUT: ememe

[RULES]
  1. hanya boleh menggunakan built in function .push(), .unshift()
  2. kata yang dicari adalah rememberme
*/


function rememberMe(lyrics) {
    let str = 'rememberme'
    let arrStr = [];
  
    for (let i = 0; i < str.length; i++) {
        arrStr.push(str[i])
    }
  
    let arrLyric = [];
    
    for (let i = 0; i < lyrics.length; i++) {
        for (let j = 0; j < lyrics[i].length; j++) {
            let s = 0;
            for (let k = 0; k < arrLyric.length; k++) {
                if (lyrics[i][j] === arrLyric[k]) {
                    s++
                }
            }
            if (s === 0) {
                arrLyric.push(lyrics[i][j])
              console.log(arrLyric)  
            }
        } //end loop j
    } //end loop i
  
    let countLyric = [];
    for (let i = 0; i < arrLyric.length; i++) {
        let s = 0;
        for (let j = 0; j < lyrics.length; j++) {
            for (let k = 0; k < lyrics[j].length; k++) {
                // console.log(lyrics[j][k])
                if (arrLyric[i] === lyrics[j][k]) {            
                    s++
                }
            }
        }
        countLyric.push(s)
        console.log(countLyric)
    }
  
    let noStr = '';
  
    for (let i = 0; i < arrStr.length; i++) {
        for (let j = 0; j < arrLyric.length; j++) {
            if (arrStr[i] === arrLyric[j]) {
                if (countLyric[j] > 0) {
                    countLyric[j]--
                } else if (countLyric[j] === 0) {
                    noStr += arrStr[i]
                }
            }
        }
    } //end loop i
    if (noStr === '') {
        // return 'completed'
    } else {
        // return noStr
    }
  } //end of fucntion;
  
  
  console.log(rememberMe(['re', 'em', 'b', 'erm', 'em'])) //completed
  console.log(rememberMe(['rembr'])) //ememe
  console.log(rememberMe(['zoqoqo', 'zeieie', 'azzreqwm', 'fdasb', 'ravae', 'rera', 'mmmmm'])) //completed