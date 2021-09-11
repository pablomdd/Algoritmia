class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        jewels_dict = {}
        for j in jewels:
            if not j in jewels_dict:
                jewels_dict[j] = 0
        for s in stones:
            if s in jewels_dict:
                jewels_dict[s] += 1
        count = 0
        for j in jewels_dict:
            count += jewels_dict[j]
        # print(count)
        return count
# we can skip last iteration if we count directly in the second.
#  also, instead of the first iter use a dict comprehension
# time O(n)
# space O(1) as long as jewels is constant
