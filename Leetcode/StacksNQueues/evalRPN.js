// https://leetcode.com/explore/learn/card/queue-stack/230/usage-stack/1394/
// 150. Evaluate Reverse Polish Notation
/**
 * @param {string[]} tokens
 * @return {number}
 */
function sum() { return (a, b) => a + b; }
function res() { return (a, b) => a - b; }
function mul() { return (a, b) => a * b; }
function div() { return (a, b) => a / b | 0; }

var evalRPN = function (tokens) {
    if (tokens.length < 2) return tokens[0];
    const opsIndex = {
        "+": sum(),
        "-": res(),
        "*": mul(),
        "/": div(),
    }

    const stack = [];
    let ans = 0;
    for (let key of tokens) {
        if (key in opsIndex) {
            const b = stack.pop();
            const a = stack.pop();

            ans = opsIndex[key](a, b);
            stack.push(ans);
            continue;
        }
        stack.push(parseInt(key));
    }
    return ans;
};

 // // Si op 
 //     b = stack.pop
 //     a = stack-pop || ans

 //     ans = op("key", a, b)
 //      stack.push ans

 // // Si num
 //     stack.push