//1. Fungsi untuk split manual string dengan pemisah
function splitManual(string,pemisah){
  var result = [];
  var temp = '';
  for(var i=0;i<string.length;i++){
    var pattern = true;
    var a = 0;
    for(var j=i;a<pemisah.length;j++){
      // console.log(pemisah[a],a)
      if(string[j] !== pemisah[a]){
        pattern = false;
      }
      a++;
    }
    if(pattern){
      result.push(temp);
      i = i+pemisah.length-1;
      temp = ''
      console.log(temp)
    }else{
      temp += string[i];
      
    }
    if(i === string.length-1){
      result.push(temp);
      
    }
  }
  // return result;
}

var contoh = 'Namasayajosprimasayjosasihombing';
console.log(splitManual(contoh,'ima')); //[ 'Namasaya ', 'primasay', 'asihombing' ]