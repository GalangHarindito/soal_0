/*
============================
NAME TERMINATOR
============================

[INSTRUCTIONS]
Terdapat fungsi name terminator yang menerima 2 parameter : 
 - parameter pertama berupa array
 - parameter kedua berupa string
Fungsi ini berguna untuk mengeliminasi nama dalam array yang memiliki nama depan sama dengan parameter kedua

[EXAMPLE]
input parameter 1 : ['Hatsune Miku', 'Uzumaki Naruto', 'Nobi Nobita', 'Uzumaki Hinata']
input parameter 2 : 'Uzumaki'
proses : Mengeleminasi nama yang memiliki nama depan Uzumaki, maka dari itu 'Uzumaki Naruto' dan 'Uzumaki Hinata' hilang
output : ['Hatsune Miku', 'Nobi Nobita']

[RULE]
- HANYA BOLEH menggunakan loop, kondisional, dan fungsi push

*/

function nameTerminator (arr, str) {
    // your code here!
    var newArr = []
    var result = []
    var result2 =[]
  
    for(var i=0;i<arr.length;i++){
      var tempResult = ''
      newArr.push(manualSplit(arr[i],' '))
      if(newArr[i][0] !== str){
         tempResult += newArr[i] 
         result.push(tempResult) 
      } 
      }
      for(var j=0;j<result.length;j++){
        result2.push(changeChar(result[j],',',' '))
        
      }
    //   return result2
      }
    
    
  
  
  
  //-----------------------------------------------------------------------
  function manualSplit(string, separator) {
      var newArr = [],
      tempStr = '';
      for (i = 0; i < string.length; i++) {
        tempStr += string[i];
        if (string[i + 1] == separator || i == string.length - 1) {
          newArr[newArr.length] = tempStr;
          tempStr = '';
          i++;
        }
      }
    return newArr;
      }
      
  //----------------------------------------------------------------------    
  function changeChar(string1,char1,char2){
    var newStr = ''
    for(var i=0;i<string1.length;i++){
      flag = false
      if(string1[i] === char1){
        newStr += char2
        flag = true
      }
      if (flag === false){
        newStr += string1[i]
      }
    }
    return newStr
  }
  
  console.log(nameTerminator (['Hatsune Miku', 'Uzumaki Naruto', 'Nobi Nobita', 'Uzumaki Hinata'], 'Uzumaki'))
  // ['Hatsune Miku', 'Nobi Nobita']
  
  console.log(nameTerminator (['Harry Potter', 'William Harry', 'Inez Gabrina'], 'Harry'))
  // ['William Harry', 'Inez Gabrina']