// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 1){
        return false;
    }
    
    const closeReference = {
        '}': '{',
        ']': '[',
        ')': '(',
    };
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === '{' 
           || s.charAt(i) === '[' 
           || s.charAt(i) === '('){
            stack.push(s.charAt(i));
        } else if(stack.length > 0 
                  && closeReference[s.charAt(i)] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            return false;
        }
    }  
    
    return stack.length === 0;
};