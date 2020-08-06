// Ice Cream Parlor - Hacker Rank
// Two Sum - Leetcode

// With a hash map

function whatFlavors(cost, money) {
    let complement = new Map;

    for(let index = 0; index < cost.length; index++ ){
        let target = money - cost[index];
        if(complement.has(target)){
            // return indexes. Small index first
            console.log(complement.get(target), index + 1);
            break;
        }
        // add value to map, index + 1 as it starts at 1, not zero
        complement.set(cost[index], index + 1)
    }
}

let cost = [ 1, 4, 5, 3, 2 ];
// let cost = [ 2, 2, 4, 3 ];
let money = 4;

whatFlavors(cost, money);