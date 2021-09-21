import math
# Add any extra import statements you may need here


# Add any helper functions you may need here

# Not handling edge cases where there are repeated letters or all letters the same
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
    if pairs == len(s) and len(dict) == 0:
        return pairs
    elif pairs == len(s) and dict >= 2:
        return pairs - 2
    return pairs


print(matching_pairs("abcde", "adcbe"))  # 5
print(matching_pairs("abcd", "adcb"))  # 4
print(matching_pairs("abcd", "abcd"))  # 2
print(matching_pairs("mno", "mno"))  # 1
print(matching_pairs("aaaaa", "aaaaa"))  # 5
