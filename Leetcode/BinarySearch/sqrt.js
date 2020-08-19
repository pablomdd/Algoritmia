// https://leetcode.com/explore/learn/card/binary-search/125/template-i/950/

// Sqrt(x)

var mySqrt = function(x) {
    if (x == 0) return 0;
    if (x == 1) return 1;
    
    let right = parseInt(x / 2);
    let left = 1

    while(left <= right){
        let mid = parseInt((left + right) / 2);
        
        if(mid * mid > x)
            right = mid - 1;
        else
            left = mid + 1;
    }
    
    return right;
};