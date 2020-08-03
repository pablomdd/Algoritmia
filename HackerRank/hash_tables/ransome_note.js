

// my solution
// searches for words of notes in magazine and deletes them if found
// is not good because deletion in array is time consuming
function checkMagazine(magazine, note) {
    for (let word of note){
        if(!magazine.includes(word)){
            console.log("No");
            return null;
        }
        magazine.splice(magazine.indexOf(word),1);
    }
    console.log("Yes");
    return null;
}

// // coolest solution -> memory effient // time: O(m + n + (m||n) )
// // it uses a map aka an js object. it Looks for a words in magazine
// //  with the || operator, adds 1 if not exists, zero if so
// // then, for ransom adds -1 if coincidense of word
// // at the end if looks for not negative values
// var map = { };
// var replicable = true;
// for ( var i of magazine ) {
//     map[i] = (map[i] || 0) + 1;
// }
// for ( var i of ransom ) {
//     map[i] = (map[i] || 0) - 1;
// }
// for ( var i in map ) {
//     if ( map[i] < 0 ) {
//         replicable = false;
//         break;
//     }
// }
// console.log(replicable ? 'Yes' : 'No');