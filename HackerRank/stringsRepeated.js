function repeatedString(s, n) {
    let ocurrences = 0;

    let arr = s.split('');
    for (let letter of arr){
        if (letter === 'a') ocurrences++;
    }

    if(ocurrences === 0) return 0;

    ocurrences = Math.floor(n / s.length) * ocurrences;

    const remainder = n % s.length;
    for(let i = 0; i < remainder; i++){
        if (arr[i] === 'a') ocurrences++;
    }

    return ocurrences;
}

const s = "aba";
const n = 10;

console.log(repeatedString(s, n));


// Best Solution O(N)
// Efficient JavaScript solution
// The algorithm doesn't count the string a second time, both best and worst case is O(n) where n = length of the string

// From my repo https://github.com/gabrielgiordan/HackerRank
// function repeatedString(s, n) {
//   let c = 0,
//       ca = 0,
//       r = n % s.length

//   for (let i = s.length; i-- > 0;) {
//     if (s.charAt(i) == 'a') {
//       ++c

//       if (i < r)
//         ++ca
//     }
//   }

//   return ((n - r) / s.length * c) + ca
// }
