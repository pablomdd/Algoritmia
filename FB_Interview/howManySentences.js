// how many sentences
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
 * Complete the 'countSentences' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY wordSet
 *  2. STRING_ARRAY sentences
 */

function wordIsAnagram(word, anagrams){
    //console.log("is anagram:", word)
    for(let anagram of anagrams){
        if(anagram.has(word)) return true;
    }
    return false;
}

function anagramSize(word, anagrams){
   for(let anagram of anagrams){
        if(anagram.has(word)) return anagram.size;
    } 
}

function findAnagrams (wordSet) {
    let anagrams = [];
    for(let i in wordSet){
        if(wordIsAnagram(wordSet[i], anagrams)) continue;
        const anagramSet = new Set();
        
        // get letter of current word
        const dict = {}
        for(let letter of wordSet[i]){
            dict[letter] = (dict[letter] || 0) + 1;
        }
        //console.log("current word", wordSet[i])
        // find anagrams
        for(let j = parseInt(i)+1; j < wordSet.length; j++){
            // console.log(i, typeof i, j, wordSet[j])
            let matchDict = {...dict}
            for(let letter of wordSet[j]){
                if(matchDict[letter]){
                    matchDict[letter] = matchDict[letter] - 1;
                    continue; 
                }
                matchDict[letter] = (matchDict[letter] || 0) + 1;
            }
            //console.log("matching", wordSet[j], matchDict)
            
            let isAnagram = false;
            let letterCountMatch = 0;
            for(let key in matchDict){
                if(matchDict[key] !== 0)
                    letterCountMatch++;
            }
            if(letterCountMatch === 0){
                //console.log("adding to set", wordSet[j])
                anagramSet.add(wordSet[j]);
            }
        }
        if(anagramSet.size > 0){
            anagramSet.add(wordSet[i]);
            anagrams.push(anagramSet)
        }
    }
    return anagrams;
}

function countSentences(wordSet, sentences) {
    // Write your code here
    let anagrams = findAnagrams(wordSet);
    // console.log(anagrams)
    // for(let anagram of anagrams){
    //     console.log(anagram)
    // }
    let ans = [];
    for(let sentence of sentences) {
        let currentCount = 0;
        let sentenceWords = sentence.split(" ");
        for(let i in sentenceWords){
            if(wordIsAnagram(sentenceWords[i], anagrams)){
                // console.log("anagram", sentenceWords[i], sentence)
                currentCount += anagramSize(sentenceWords[i], anagrams)
            }
            // console.log(currentCount);
        }
        ans.push(currentCount);
    }
    return ans;
}

function main() {