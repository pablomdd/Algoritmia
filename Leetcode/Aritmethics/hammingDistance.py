# 461. Hamming Distance
# https://leetcode.com/problems/hamming-distance/
class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        hamm = x ^ y
        res = 0
        while(hamm > 0):
            res += hamm % 2
            hamm //= 2
        return res
