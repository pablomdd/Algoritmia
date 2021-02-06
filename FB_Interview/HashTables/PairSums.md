Pair Sums
Given a list of n integers arr[0..(n-1)], determine the number of different pairs of elements within it which sum to k.
If an integer appears in the list multiple times, each copy is considered to be different; that is, two pairs are considered different if one pair includes at least one array index which the other doesn't, even if they include the same values.
Signature
int numberOfWays(int[] arr, int k)
Input
n is in the range [1, 100,000].
Each value arr[i] is in the range [1, 1,000,000,000].
k is in the range [1, 1,000,000,000].
Output
Return the number of different pairs of elements which sum to k.
Example 1
n = 5
k = 6
arr = [1, 2, 3, 4, 3]
output = 2
The valid pairs are 2+4 and 3+3.
Example 2
n = 5
k = 6
arr = [1, 5, 3, 3, 3]
output = 4
There's one valid pair 1+5, and three different valid pairs 3+3 (the 3rd and 4th elements, 3rd and 5th elements, and 4th and 5th elements).

## solutions
### O(n log n) solution
We can first sort the array and then iterate inwards from the outside edges by maintaining two pointers. Consider adding the two numbers at indices 0 and n-1. If this sum is less than k, we increment the left pointer. If this sum is greater than k, we decrement the right pointer. If the sum is equal to k, then we increment a count of valid pairs and move both pointers inwards. We can repeat this process until the pointers meet.
As stated, this solution only works when all the values in the array are unique. To handle values that appear multiple times, we can consider each block of the same value as a single index in the array, but with a “weight” equal to the number of occurrences of that value. For example, if the sorted array is [1, 2, 2, 2, 3, 4, 4] and k = 6, then when our pointers are pointing at 2 and 4, we would increment our counter of valid pairs not by 1, but by 3 * 2, the weights of 2 and 4 respectively.
You must take care in one particular case: when the pointers are both pointing at a value which is exactly k/2. It’s incorrect to multiply the weight of this block by itself, since that would count pairing up some indices with themselves. If k/2 appears w times, then you must add w * (w - 1) / 2 valid pairs.

### O(n) solution
Let us iterate over the array once to build a hash table that maps each number in the array to the number of times it occurs. For example, if our array is [2, 1, 3, 4, 2, 4, 2], then our hash table would look like:
{
  1: 1, 
  2: 3, 
  3: 1, 
  4: 2,
}
Now that we have these counts, we can iterate over the array one more time. Every time we hit a value v, we can look up the number of times that k-v appears in the array since that’s the exact number that we would need to form a pair that sums to k. This method will count every pair twice, therefore we must take care to divide by 2 at the end. In addition to that, ensure that you correctly handle the same special case described in the previous solution, when v = k/2.
We can also iterate over the hash table directly instead of iterating over the array a second time. Similar to the O(n log n) solution, each value has a weight and we can multiply those weights together to count the number of valid pairs involving those values.
Either of these methods requires O(n) additional space, but this is typically a good price to pay for O(n) time complexity.