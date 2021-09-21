import math
# Add any extra import statements you may need here


# Add any helper functions you may need here


def matching_pairs(s, t):
    # Write your code here
    dict = {}
    pairs = 0
    for i in range(len(s)):
        if s[i] == t[i]:
            pairs += 1
        else:
            dict[s[i]] = t[i]
    for key in dict:
        if dict[key] in dict:
            return pairs + 2
    if pairs == len(s):
        return pairs - 2
    return pairs


print(matching_pairs("abcde", "adcbe"))  # 5
print(matching_pairs("abcd", "abcd"))  # 2
