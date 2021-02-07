// Add any extra import statements you may need here


// Add any helper functions you may need here
/*
[1, 2, 3, 4, 5],
[1, 2, 3, 9, 5],
[15, 14, 12, 9, 5],

[4, 2, 1, 3] <- sort
[1, 2, 7, 4] - 7
          |
[1, 9, 7, 4] - 16
       |
[10, 9, 7, 4] - 26
    |
[10, 9, 7, 4] - out of iter
 |

*/


function getTotalTime(arr) {
    // Write your code here
    // Time: O(nlogn)
    arr.sort((a,b) => (a-b));
    let penalty = 0;
    // O (n)
    for(let i = arr.length - 1; i > 0; i--){
      arr[i-1] = arr[i-1] +  arr[i];
      penalty += arr[i-1];
    }
    // total O(nlogn)
    return penalty;
  }
  
  
  
  
  
  
  
  
  
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom, but they are otherwise not editable!
  function printInteger(n) {
    var out = '[' + n + ']';
    return out;
  }
  
  var test_case_number = 1;
  
  function check(expected, output) {
    var result = (expected == output);
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    }
    else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printInteger(expected);
      out += ' Your output: ';
      out += printInteger(output);
      console.log(out);
    }
    test_case_number++;
  }
  
  var arr_1 = [4, 2, 1, 3];
  var expected_1 = 26;
  var output_1 = getTotalTime(arr_1);
  check(expected_1, output_1);
  
  var arr_2 = [2, 3, 9, 8, 4];
  var expected_2 = 88;
  var output_2 = getTotalTime(arr_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  