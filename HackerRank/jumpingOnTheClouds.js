function jumpingOnClouds(c) {
    let jumps = 0;
    let pos = 0;
    const length = c.length;

    while(pos !== length - 1){
        if(c[pos + 2] === 0 && (pos + 2) < length){
            jumps++;
            pos += 2;
        } else{
            jumps++;
            pos++;
        }
    }
    return jumps;
}

const c = [0, 0, 1, 0, 0, 1, 0]

console.log( jumpingOnClouds(c));