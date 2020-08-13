function twoStrings(s1, s2) {
    let map = {};

    for(let i = 0; i < s1.length ; i++ ){
        map[s1.charAt(i)] = (map[s1.charAt(i)] || 0 ) + 1;
    }
    for(key in map){
        if (s2.includes(key))
            return "YES";
    }
    return "NO";
}

const s1 = "hello";
const s2 = "world";

console.log(twoStrings(s1,s2));