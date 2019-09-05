function howManyGifts(maxBudget, gifts){
	
	var harga = gifts.sort(function(value1, value2){ return value1 > value2 });
	var jumlah = 0
    var total = gifts[0]


	if(maxBudget < gifts[0]){
		return jumlah
	}

	for (var i = 0; i < gifts.length; i++) {
		if(total <= maxBudget){
            total += gifts[i];
            console.log(gifts[i])
			jumlah++
		}
	}
	return jumlah
}

console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
console.log(howManyGifts(0, [10000, 3000])); // 0