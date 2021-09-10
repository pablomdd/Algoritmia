# 258. Add Digits
# https://leetcode.com/problems/add-digits/
class Solution:
    def addDigits(self, num: int) -> int:
        res = 0
        while(True):           # 38
            #           get sum of digits
            while(num > 0):         # 11
                res += num % 10
                num = num // 10
            if(res < 10):
                break
            else:
                num = res
                res = 0
        return res

# 1234
# 10
# 1

# 38
# 11

# class Solution:
#     def addDigits(self, num: int) -> int:
#         if num == 0:
#             return 0
#         if num % 9 == 0:
#             return 9
#         return num % 9
