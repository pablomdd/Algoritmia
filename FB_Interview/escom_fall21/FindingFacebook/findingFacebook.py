from collections import Counter


def findingFacebook(s):
    fb_s = "facebook"
    fb_set = set(fb_s)
    ans_map = Counter(fb_s)
    ans = []
    i = 0
    for c in s:
        if i > len(fb_s) - 1:
            break
        if c in fb_set and c == fb_s[i]:
            ans_map[c] -= 1
            ans.append(c)
            i += 1
    # print(ans)
    if "".join(ans) == fb_s:
        return True
    return False


# print(findingFacebook("fsacsebsooks"))
# print(findingFacebook("facpebppok"))
# print(findingFacebook("facetsofexcitinginformationaboutoklahoma"))
# print(findingFacebook("thisstringcontainsbooksbutnofaces"))
# arr[]
myfile = open("./input.txt", "r")
lines = myfile.readlines()

# i = 0
# while myline:
#     i += 1
# print(i)
for i, line in enumerate(lines):
    res = "YES" if findingFacebook(line) else "NO"
    print("Case #" + str(i+1) + ": " + res)
