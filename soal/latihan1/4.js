/*
  //////////////////////
  FUNCTION COUNT PROFIT
  //////////////////////

  Fungsi Count Profit akan mencari keuntungan tetapi 

  [PROCESS]
  Sama seperti tugas tetapi nama shoppersnya wajib dibuat dinamis dan diubah menjadi string.

  [RULES]
  - Stock tidak boleh negatif
  - Dilarang menggunakan built in function apapun
*/

function countProfit(shoppers) {
  var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

var result = []

if(shoppers.length === 0){
   return []
}else{
  var result = []
  for(var i=0;i<listBarang.length;i++){
    var leftOver = 0
    var name = []
    var sementara = {}
    var name1 = ''

    for(var j=0;j<shoppers.length;j++){
      if(shoppers[j].product === listBarang[i][0] && shoppers[j].amount <= listBarang[i][2]){
        leftOver += shoppers[j].amount
        name.push(shoppers[j].name)
        // name1 += name.join(' dan ')
      }
    }
    sementara.product = listBarang[i][0]
    sementara.shoppers = name
    sementara.leftOver = listBarang[i][2] - leftOver
    sementara.totalProfit = listBarang[i][1] * leftOver
    result.push(sementara)
  }
}
return result
};

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: 'Windi dan Vanessa',
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: '',
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: '',
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: 'Windi',
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: 'Devi dan Lisa',
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: 'Rani',
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 1}, {name: 'Devi', product: 'Sepatu Stacattu', amount: 1}, {name: 'Dini', product: 'Sepatu Stacattu', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: 'Windi, Devi, dan Dini',
//     leftOver: 7,
//     totalProfit: 4500000 },
//   { product: 'Baju Zoro',
//     shoppers: '',
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: '',
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]