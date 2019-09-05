// 1. SPLIT
// split adalah fungsi untuk merubah dari string ke array berdasarkan pemisahnya
console.log('1. Split');

////////////////
/// CONTOH 1 ///
////////////////

var exSplit1 = 'aku,kamu,dia';
var splitSeparator1 = ',';
var example1 = exSplit1.split(splitSeparator1);
// console.log('Contoh 1:', example1); // [ 'aku', 'kamu', 'dia' ]
var exSplit2 = 'akudankamu';
var splitSeparator2 = 'dan';
var example2 = exSplit2.split(splitSeparator2);
// console.log('Contoh 2:', example2); // [ 'aku', 'kamu' ]

function manualSplit(string,separator){
  var newArr = [],
  tempStr = '';
  var slice = ''
  // tempSeparator = ''
  var length = (separator.length)

  for (var i = 0; i <= string.length ; i++) {
    for(var j=0;j<string)
    if (separator === string[k] || i === string.length) {
      newArr.push(tempStr)
      tempStr = ''
      i += length-1
    } 
    else {
      tempStr += string[i];
    }
  }
  // return newArr;
}


var answer1 = manualSplit('aku,kamu,dia', ',');
var answer2 = manualSplit('aku dan kamu dan dia', ' dan ');
console.log(answer1); // [ 'aku', 'kamu', 'dia' ]
console.log(answer2); // [ 'aku', 'kamu' ]


// function manualSplice(data,separator){

//   var split = ''
//   var length = (separator.length)
//   k = 0
//   for(j = 0;j<data[j+length];j++){
//     split += data[j]
//   }
//   return split
// }

// console.log(manualSplit(string,'dan'))