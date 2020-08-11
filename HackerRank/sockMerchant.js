// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let map = {};
    let matchingPair = 0;
    
    for ( let sock of ar ){
        map[sock] = ( map[sock] || 0) + 1;
        if(map[sock] === 2){
            matchingPair++;
            map[sock] = 0;
        }
    }
    // console.log(map)
    // for ( let pair in map ){
    //     matchingPair
    //     if( map[pair] % 2 === 1 ) matchingPair++;
    // }
    // console.log(matchingPair)
    return matchingPair;
}

const n = 9;
let ar = "10 20 20 10 10 30 50 10 20";
ar = ar.split(' ').map(arTemp => parseInt(arTemp, 10));

console.log(sockMerchant(n, ar));