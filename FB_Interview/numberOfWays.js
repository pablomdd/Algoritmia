'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'numberOfWays' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY queries as parameter.
 */

function numberOfWays(queries) {
    let answer = [];
    for(let query of queries){
        const rows = query[0];
        const cols = query[1];
        const a = Math.min(rows, cols);
        
        let queryWays = 0;
        for(let i = 1; i <= a; i++){
            const rowWays = rows - i + 1;
            const colWays = cols - i + 1;
            
            queryWays += rowWays * colWays;
        }
        answer.push(queryWays);
    }
    return answer;
}

function main() {