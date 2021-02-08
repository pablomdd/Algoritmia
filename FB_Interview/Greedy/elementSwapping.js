// Add any extra import statements you may need here


// Add any helper functions you may need here
/*
find smallest item in within 0,k+1 (at index i)
swap i times (at most k times) that element to the left
repeat if k > 0
ex.1
 [5, 3, 1], k=2
  -> -> ->      find 1
  [5,1,3] swap, k=1
  [1, 5, 3] swap k=0
  
 ex.2 arr = [8, 9, 11, 2, 1]      k=3
 
 [8, 9, 11, 2, 1]
  -> -> -> ->       find 2
  [8, 9, 2, 11, 1]  swap 2, k=2
  [8, 2, 9, 11, 1]  swap 2, k=1
  [2, 8, 9, 11, 1]  swap 2, k=0
  
  aux func: findIndex(left, k), left -> k
            swap(i, left) i -> left
             -> k-i, left++
             -> if k>0 repeat
*/



function findMinArray(arr, k) {
    // Write your code here
   
    
    
    return arr;
  }
  
  
  
  
  
  
  
  
  
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom, but they are otherwise not editable!
  function printintegerArray(array) {
    var size = array.length;
    var res = '';
    res += '[';
    var i = 0;
    for (i = 0; i < size; i++) {
      if (i !== 0) {
        res += ', ';
      }
      res += array[i];
    }
    res += ']';
    return res;
  }
  
  var test_case_number = 1;
  
  function check(expected, output) {
    var expected_size = expected.length;
    var output_size = output.length;
    var result = true;
    if (expected_size != output_size) {
      result = false;
    }
    for (var i = 0; i < Math.min(expected_size, output_size); i++) {
      result &= (output[i] == expected[i]);
    }
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    }
    else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printintegerArray(expected);
      out += ' Your output: ';
      out += printintegerArray(output);
      console.log(out);
    }
    test_case_number++;
  }
  
  
  var n_1 = 3, k_1 = 2;
  var arr_1 = [5, 3, 1];
  var expected_1 = [1, 5, 3];
  var output_1 = findMinArray(arr_1, k_1);
  check(expected_1, output_1);
  
  var n_2 = 5, k_2 = 3;
  var arr_2 = [8, 9 ,11, 2, 1];
  var expected_2 = [2, 8, 9, 11, 1];
  var output_2 = findMinArray(arr_2, k_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  