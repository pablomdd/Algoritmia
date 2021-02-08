// Add any extra import statements you may need here


// Add any helper functions you may need here


function minOverallAwkwardness(arr) {
    // Write your code here
    let table = arr.sort((a,b) => (a-b));
    
    let left = 0
    let right = arr.length - 1;
   
    /*
    // Inverse Normal Distribution 
    for(let i = arr.length - 1; i >= 0; i--) {
      if(i % 2 === 0) {
        table[left] = arr[i];
        left++;
      } else {
        table[right] = arr[i];
        right--;
      }
    }
    let minAwkwardness = -Infinity;
    for(let i = 1 ; i < table.length - 1; i++) {
      let difference = Math.abs(table[i-1] - table[i]);
      minAwkwardness = Math.max(minAwkwardness, difference);
    }
    return Math.max(minAwkwardness, Math.abs(table[0] - table[table.length-1]));
    
    */
    // avoid extra O(n) space
    let overallAwk = 0; 
    for(let i = 2; i < arr.length - 1; i++){
      overallAwk = Math.max(overallAwk, Math.max(arr[i] - arr[i-2]))
    }
    return Math.max(overallAwk, Math.max(arr[arr.length - 1] - arr[arr.length - 2]))
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
  
  var arr_1 = [5, 10, 6, 8];
  var expected_1 = 4;
  var output_1 = minOverallAwkwardness(arr_1);
  check(expected_1, output_1);
  
  var arr_2 = [1, 2, 5, 3, 7];
  var expected_2 = 4;
  var output_2 = minOverallAwkwardness(arr_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  