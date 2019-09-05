function shoppingTime(memberId, money) {
    var list = ['sepatu stacattu', 'baju zoro', 'baju H&N', 'sweater uniklooh', 'casing handphone']
    var harga = [1500000, 500000, 250000, 175000, 50000]

    if (memberId === '') {
        return 'Mohon maaf toko X hanya berlaku untuk member saja'
    } else if (memberId != '') {
        if (money >= 50000) {
            //code in here
            let hasil = {}
            hasil.memberId = memberId;
            hasil.money = money;

            let listBarang = [];
            for (var i = 0; i < list.length; i++) {
                if (money >= harga[i]) {
                    listBarang.push(list[i])
                    money -= harga[i]
                }
            }
            hasil.listPurchased = list
            hasil.changeMoney = money
            return hasil;
        } else {
            return 'Mohon maaf uang anda tidak mencukupi untuk melakukan transaksi'
        }
    } else {
        return 'Mohonmaaf Toko X hanya berlaku untuk member saja'
    }


} //end function;

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja