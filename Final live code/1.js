/*
	Dalam sebuah game, hero yang dapat dipilih memiliki jenis tertentu
	Dalam game ini satu tim harus memilih 5 heroes yang akan dimainkan
	Disini kamu diminta menampilkan apakah pick hero yang dilakukan tergolong good atau bad dengan kodisi sebagai berikut
		good pick : jika dari hero yang di pick tidak memiliki lebih dari 2 tipe hero yang sama
    bad pick : jika dari hero yang di pick ada 3 atau lebih tipe hero yang sama
    pick list : ranger, mage, tank, warrior, atau assassin (cuma ada 5 tipe ini)
  tampilkan apakah good pick atau bad pick dan jenis apa yang lebih dari 2, pesan seperti pada test case

  [RULES]
  1. Wajib menggunakan Algoritma/Pseudocode
  2. Hanya boleh menggunakan built in function .split(), .unshift(), dan .push()
*/

function heroPick(composition) {
  // code here
  var arrHero = composition.split(',')
  var heroUnik = makeUnique(arrHero)
  var totCount = []

  for(var i=0;i<heroUnik.length;i++){
    var count =0
    for(var j=0;j<arrHero.length;j++){
      if(heroUnik[i] === arrHero[j]){
        count++
      }
       
    }
    totCount.push(count)
  }
  for(var i=0;i<totCount.length;i++){
    if(totCount[0] <= 2 && totCount[i+1] <= 1){
      return 'good pick'
    }
    else if(totCount[0] == 3 && totCount[i+1] <= 1){
      if(totCount.length == 2){
        return 'not sufficient players'
      }else if(totCount.length <= 3){
        return 'bad pick too many ' + arrHero[0]
      }
      
    }else if(totCount[0] > 3 && totCount[i+1] <= 1){
      return 'god is not on the pick list'
    }
  }
}


//--------------------------------------------------------------------------------------
function makeUnique(array) {
  var arrUniqe = []
  for (var i = 0;i< array.length; i++) {
      if (unique(array[i], arrUniqe) === false) {
          arrUniqe.push(array[i]);
      }
  }
  return arrUniqe
}

function unique(string, array){
  for(var i=0;i<array.length;i++){
      if(array[i] === string){
          return true
      }
  }
  return false
}
//----------------------------------------------------------------------------------------



/*

ALGORITMA

1. Membuat fungsi heroPick dengan variable yang akan diolah adalah composition
2. Membuat variable arrHero yang isinya adalah split dari string compositions
3. Membuat var heroUnik dengan mengunakan modular function.
   a. Membuat function dengan nama makeUnique yang akan mengolah array dari arrHero
   b. Membuat variable arrUnique dengan isi array kosong
   c. Looping dengan variable i=0, i kurang dari panjang arrHero, i ditambah sampai batasan yang di tentukan
   d. membuat kodisi apabila (masuk ke functin uniqe dengan variable yang akan diolah adalah string(yaitu arrHero[i] dan array kosong))
      d1. Membuat fuction unique 
      d2. Looping i=0, i kurang dari panjang array i++
      d3. Apabila arra index i sama dengan string maka return menjadi true
      d4. Apabila tidak return false
   e. Apbila hasil function unique === false , maka arrUnique akan diiisi data olahan
4. Membuat variable count dengan isi array
5. Looping dengan kodisi i=0,batasan i adalah panjang heroUnik, i ditambah
6. Membuat variable count dengan isi 0
7. Looping dengan kondisi j=0,batasan j kurang darfi panjang arrHero dan i++
8. Membuat kondisi apabila heroUnik index 1 sama dengan arrHero index j, maka count
9. Memasukkan variable count kedalam var totCount
10. Looping i=0, batasan i dengan panjang totCount dan i++
11. Apabila totCount index 0 kurang kurang dari samadengan 2 dan totCount index i+1 <=1, maka print 'good pick'
12. Apabila totCount index 0 samadengan 3 dan i+1 kurang dari samadengan 1
    12a. kodisi apabila panjang totCount sama dengan 2, maka print 'not sufficient players'
    12b. kondisi apabila panjang totCount kurang dari samadenga 3 print 'bad pick too many ' + arrHero index 0
13. Kondisi apabila totCount index 0 lebih dari 3 dan i+1 kurang dari 1, maka print 'god is not on the pick list'



*/
// Test case
console.log(heroPick('ranger,ranger,mage,tank,warrior')) // good pick
console.log(heroPick('mage,mage,tank,mage,warrior')) // bad pick too many mage
console.log(heroPick('mage,mage,tank,mage')) // not sufficient players
console.log(heroPick('mage,mage,god,mage,mage')) // god is not on the pick list
