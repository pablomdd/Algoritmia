// Strings: Making Anagrams
// Output Format

// Print a single integer denoting the number of characters you must 
// delete to make the two strings anagrams of each other.

function makeAnagram(a, b) {
    let dict = {};
    let deletions = 0;
    for(let i of a){
        dict[i] = (dict[i] || 0) + 1;
    } 
    for(let i of b){
        dict[i] = (dict[i] || 0) - 1;
    } 
    for(let j in dict){
        deletions += Math.abs(dict[j])
    }
    return deletions;
}

let a = "cde";
let b = "abc";

console.log(makeAnagram(a, b));