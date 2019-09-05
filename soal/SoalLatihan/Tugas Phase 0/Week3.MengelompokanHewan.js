function groupAnimals(animals) {

    let hasil = [];
    let arr = animals.sort()
    let abjab = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < abjab.length; i++) {
        let rek = [];
        for (let j = 0; j < animals.length; j++) {
            if (abjab[i] === animals[j][0]) {
                rek.push(animals[j])
            }
        }
        hasil.push(rek;)
    }




    return arr

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]