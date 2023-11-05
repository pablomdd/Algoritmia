# 1071. Greatest Common Divisor of Strings
# https://leetcode.com/problems/greatest-common-divisor-of-strings/
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        def isDivisible(i):
            # if len str[0:i] is factor of len strs
            if len(str1) % i or len(str2) % i:
                return False
            return True

        def isCommonDivisor(i):
            f1 = str1[:i]
            f2 = str1[:i]
            s1 = f1 * (len(str1) // i) == str1
            s2 = f2 * (len(str2) // i) == str2
            return s1 and s2

        for i in range(min(len(str1), len(str2)), 0, -1):
            # print(str1[:i])
            if isDivisible(i) and isCommonDivisor(i):
                return str1[:i]

        return ""