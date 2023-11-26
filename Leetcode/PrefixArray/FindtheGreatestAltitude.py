
class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        max_altitude = prefix_sum = 0

        for alt in gain:
            prefix_sum += alt
            if prefix_sum > max_altitude:
                max_altitude = prefix_sum

        return max_altitude  
        