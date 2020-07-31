// Sample input
// 7 50 //n k
// 1 12 5 111 200 1000 10 //prices[]

// Sample output

function maximumToys(prices, k) {
    let result = 0;

    prices = prices.sort( (a,b) => a-b );
    for (const price of prices){
        if(price <= k ){
            k -= price;
            result++;
        } else break;
    }

    return result;
}


k = 50;
line = "1 12 5 111 200 1000 10";
prices = line.split(' ').map(pricesTemp => parseInt(pricesTemp, 10));

console.log(maximumToys(prices, k));