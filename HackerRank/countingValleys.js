//return number of valleys
function countingValleys(n, s) {
    let seaLevel = 0;
    let numberOfValleys = 0;
    let zero = false;

    for(let i = 0; i < n - 1; i++ ){
        if (seaLevel === 0) zero = true;
        
        if(s.charAt(i) === 'D')  seaLevel--;
        else seaLevel++;

        if(seaLevel < 0 && zero) { 
            numberOfValleys++;
            zero = false;
        }
    }
    return numberOfValleys;
}

// const n = 8;
// const s = "UDDDUDUU";
const n = 10;
const s = "DDUUDDUDUUUD";


console.log(countingValleys(n, s));