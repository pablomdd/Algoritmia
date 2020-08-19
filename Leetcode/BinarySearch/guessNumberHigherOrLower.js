// https://leetcode.com/explore/learn/card/binary-search/125/template-i/951/
// Guess Number Higher or Lower

var guessNumber = function(n) {
    let left = 1;
    let right = n;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let res = guess(mid)
        
        if(res == 0)
            return mid;
        else if(res == -1){
            right = mid - 1;
        } else {
          left = mid + 1;  
        }   
    }
    
};