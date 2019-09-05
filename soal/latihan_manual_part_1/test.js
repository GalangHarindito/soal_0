// function split (string, separator) {
//   var newArr = [],
//   tempStr = '';
//   for (i = 0; i < string.length; i++) {
//     tempStr += string[i];
//     if (string[i + 1] == separator || i == string.length - 1) {
//       newArr[newArr.length] = tempStr;
//       tempStr = '';
//       i++;
//     }
//   }
// return newArr;
//   }
  
//   var kalimat = "saya , adalah full-stack javascript programmer!";
  
//   console.log(split(kalimat, ','));


  // function splice (array, index, remove, add) {
  //   var newArr = [ ];
  //   for (i = 0; i < arr.length + add.length; i++) {
  //     if (i < index) {
  //       newArr.push(arr[i])
  //     } else if (i >= index && i <= index + add.length - 1) {
  //         newArr.push(add[i - index])
  //     } else if (i < arr.length + add.length - remove) {
  //       newArr.push(arr[i + remove - add.length])
  //     }
  //   }
  //   return newArr;
  // }
  
  // var arr = ["buku", "laptop", "komputer"];
  
  // console.log(splice(arr, 2, 0, ['televisi']));
  // console.log(splice(arr, 0, 2, []));
  // console.log(splice(arr, 0, 1, ["majalah", "koran"]));


  // function angkaPalindrome(num) {
  //   while(true){
  //       num++;
  //       var num2 = String(num);
  //       var num2Reverse = num2.split('').reverse('').join('')
  //       if(num2 === num2Reverse){
  //           return Number(num2)
  //       }
  //   }
  //  }
   
  //  // TEST CASES
  //  console.log(angkaPalindrome([8,19,203])); // 9
  //  console.log(angkaPalindrome(10)); // 11
  //  console.log(angkaPalindrome(117)); // 121
  //  console.log(angkaPalindrome(175)); // 181
  //  console.log(angkaPalindrome(1000)); // 1001






  function manualSort(a) {
    // var indx =0;
    // console.log(a.length);
    for(var indx=0; indx<a.length; indx++){
      if(indx <a.length){  
        var temp = null;
        var flag = false;
        do{
          flag = false;
          for(var i=0; i<a[indx].length; i++){
            console.log(a[indx][i]);
            if(a[indx][i] > a[indx][i+1]){
           temp = a[indx][i];
              a[indx][i] = a[indx][i+1];
              a[indx][i+1] = temp;
              flag = true;
            }
          }
        }
       while(flag)
      }
    }
    return a;
  }
  console.log(manualSort([[3, 4, 2], [5, 1, 6, 7]]));
  /*
    [
      [2, 3, 4],
      [1, 5, 6, 7]
    ]
  */
  


 function dataHandling2(input){

  var ubah = [];

  var inputStr = '';

  var tanggal = '';

  var tanggalNama = '';

  var kalender = '';

  for(var i=0; i<input.length; i++){

    for(var j=0; j<input[i].length; j++){

      inputStr += input[i][j];

      if(input[i][j] === 'Roman Alamsyah'){

        var namaBaru = ' Roman Alamsyah Elsharawy';

      } else if(input[i][j] === 'Bandar Lampung'){

        var namaProvinsi = 'Provinsi Bandar Lampung';

      } else if(input[i][j] === '21/05/1989'){

        var splitTanggal = tanggalBaruArray(input[i][3]);

        kalender = switchCase(splitTanggal)

        tanggal = tanggalBaruJoin(kalender);

      }

    }

  }



  return kalender;

}

console.log(dataHandling2(input));



// var input = 'tes'

// tanggalBaru(input)



// -------<>------- split dan join

function tanggalBaruArray(date){

  var dateStr = '';

  var dateArr = [];

  for(var k=0; k<date.length; k++){

    dateStr += date[k];



    if(date[k+1] === '/' || k === date.length-1){

      dateArr[dateArr.length] = dateStr;

      dateStr='';

      k++;

    }

  }

  return dateArr;

}

// console.log(tanggalBaruArray('21/05/1989'));



// -------<>---------



function tanggalBaruJoin(data){

  var dateStr2 = '';

  var joiner = '-';

  for (var l=0; l<data.length; l++){

    if(l === data.length-1){

      dateStr2 = dateStr2 + data[l]

    } else {

      dateStr2 = dateStr2 + data[l] + joiner

    }

  }

  return dateStr2;

}

// console.log(tanggalBaruJoin(dateArr));

// -----<>------



function switchCase(switcher){

//  console.log(dateArr);

 var indx = 0;

 var tanggalLengkap = ''

 for(var m=0; m<switcher.length; m++){

  //  console.log(switcher[0]);

  var tanggal = Number(switcher[0]);

  var bulan = Number(switcher[1]);

  var tahun = Number(switcher[2]);

  var namaBulan = '';

  var kalender = 0;

  }



  switch (bulan) {

    case 01: namaBulan = 'Januari'; break;

    case 02: namaBulan = 'Februari'; break;

    case 3: namaBulan = 'Maret'; break;

    case 4: namaBulan = 'April'; break;

    case 5: namaBulan = 'Mei'; break;

    case 6: namaBulan = 'Juni'; break;

    case 7: namaBulan = 'Juli'; break;

    case 8: namaBulan = 'Agustus'; break;

    case 9: namaBulan = 'September'; break;

    case 10: namaBulan = 'Oktober'; break;

    case 11: namaBulan = 'November'; break;

    case 12: namaBulan = 'December'; break;

    default: namaBulan = 'Bulan berapa?'

  }

  tanggalLengkap = tanggal +' '+namaBulan+' '+tahun;

  // console.log(switcher[2])

  return tanggalLengkap;

}

// console.log(switchCase(dateArr));