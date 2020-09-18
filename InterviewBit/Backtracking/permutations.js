const findPermutations = (temp, nums, result) => {
    // Base Case
    if(!nums.length){
        // We have a solution
        result.push([...temp])
        return;
    }

    // Pick different numbers from nums & make recursive call
    for(let i = 0; i < nums.length; i++){
        const newElem = nums[i];
        // Add to picked numbers
        temp.push(newElem);
        // Update numbers left in nums & make recursive call
        nums.splice(i , 1);
        findPermutations(temp, nums, result);
        // reset temp
        temp.pop();
        nums.splice(i , 0, newElem);
    }

}

function permutations(nums){
    const result = [], temp = [];

    findPermutations(temp, nums, result);
    return result;
}


const nums = [1, 2, 3]; 
console.log(permutations(nums));


/*
// Alike solution on Leetcode
var permute = function(nums) {
  if (nums == null || nums.length === 0) {
    return [];
  }

  const permutations = [];
    
  function helper(permutation, leftoverNums, depth) {
    if (leftoverNums.length === 0) {
      permutations.push(permutation);
      return;
    }

    for (let i = 0; i < leftoverNums.length; i++) {
      const newLeftoverNums = [...leftoverNums.slice(0, i), ...leftoverNums.slice(i + 1)];
      helper(permutation.concat(leftoverNums[i]), newLeftoverNums, depth + 1);
    }
  };

  helper([], nums, 0);

  return permutations;
};


*/

/* Swaps approach on Leetcode (Heap algorithm)
var permute = function(nums) {
   let res = []
   permutation(nums, res, 0)
    return res
};

var permutation = function (arr, res, start) {
    for (let i = start; i < arr.length; i++) {
        swap(arr, start, i)
        permutation([...arr], res, start + 1)
    }
    if (start == arr.length) {
        res.push(arr)
    }
}

var swap = function (arr, i, j) {
    if (i != j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

*/