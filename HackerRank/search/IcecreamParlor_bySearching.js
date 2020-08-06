// Ice Cream Parlor - Hacker Rank
// Two Sum - Leetcode

// Binary Search

function binarySearch(arr, x){
    let start = 0, end = arr.length - 1;
    // Iterate up to start !== end
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === x ) 
            return arr[mid]; //return f element 
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return false;
}

function whatFlavors(cost, money) {
    // 1. Sort the array. Algorithm not quite relevant but also important for the overall runtinme.

    // Create a copy of the costs array
    // because by simply assining it reference the same part of the memory

    // let sortedCost = Array.from(cost); //create copy of cost by Array Method
    let sortedCost = [...cost]; //create copy of cost by spread operator
    sortedCost.sort( (a,b) => a-b );

    // Implement Binary Search
    let foundIndex = 0;
    for(let i = 0; i < cost.length; i++){
        let foundElement = binarySearch(sortedCost, money - cost[i]);
        
        if(foundElement){
            foundIndex = cost.lastIndexOf(foundElement);
        
            if(foundIndex !== i )
                return console.log(Math.min(i , foundIndex) + 1, Math.max(i , foundIndex) + 1);
        }
    } 
}

// let cost = [ 1, 4, 5, 3, 2 ];
// let cost = [ 2, 2, 4, 3 ];
// let cost = [ 2, 2, 4, 3 ];
let cost = [ 1, 4, 5, 3, 2];
let money = 4;

whatFlavors(cost, money);