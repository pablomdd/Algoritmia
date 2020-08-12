// https://leetcode.com/problems/bulls-and-cows/
function bullAndCows(target, guess){
    let map = {};
    let cows = 0;
    let bulls = 0;
    
    for (let i = 0; i < target.length; i++){
      if(target[i] === guess[i]){
        bulls++;
        guess[i] = -1;
  
      } else {
          map[target[i]] = (map[target[i]] || 0) + 1;
      }
    }
    
    for(let item of guess){
      if(item !== -1){
        if(map[item] && map[item] > 0){
          cows++;
          map[item] -= 1;
        }
      }
    }
    
    console.log(`${bulls} bulls, ${cows} cows`);
  }
  
  const target = [1,1,1,0];
  const guess = [0,0,0,2];
  bullAndCows(target, guess);


  // - Work the clock:
//   - [o] Spend 5 min BEFORE writing any code and communicate proactive
//   - [o] Spend 10 min coding, including talking through their solution
//       and handling mistakes
//   - [x] Spend 2-3 min to test their solution

// - Communicate Proactively:
//   - [o] Understood the nature of the problem/input 
//   - [o] Rephrased the question
//   - [o] Assume all information that is given is necessary to solve the problem? 
//   - [o] Ask to clarify scope and intention of the problem.
//   - [o] Validate or state assumptions or resolve edge cases
  
//    identified edge cases:
//     empty array 
//     element 9+ [1,2,1,10]
//     negatives

// - Designing an algorithm:
//   - [x] Ask interviewer what they are optimizing for?
//   - [o] Consider the engineering tradeoffs (time and space)
//   - [o] Narrow down to a solution approach that they could get working

// - Using text editor:
//   - [o] Use tools to illustrate their thinking 
//   - [o] Demostrate comfort using the tool and all available functionalities.

// - Talking through code/solution
//   - [o] Walk interviewer through solution and code?
//   - [o] Treat interviewer as a collaborator and communicate as "we"?
//   - [x] Reiterate the time and space complexity in your current approach versus alternative.