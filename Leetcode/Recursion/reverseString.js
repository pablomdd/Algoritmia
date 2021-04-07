// Leetcode 344. Reverse String - Recursion

/**
 * @param {character[]} 
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const helper = (left, right) => {
        // base case
        if (left < right) {
            //swap
            [s[left], s[right]] = [s[right], s[left]];
            // recursive call
            helper(left + 1, right - 1);
        }
    };

    helper(0, s.length - 1)
};

// Space: O(n) -> it considers array s as mem, as we're modifying in place
//  Time: O(n/2) = O(n)