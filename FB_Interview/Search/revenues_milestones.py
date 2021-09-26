import math
# Add any extra import statements you may need here


# Add any helper functions you may need here


def getMilestoneDays(revenues, milestones):
    # Write your code here
    output = [-1 for _ in range(len(milestones))]
    idx_map = {}
    for i, milestone in enumerate(milestones):
        idx_map[milestone] = i
    milestones.sort()

    k = 0
    total = 0
    for i in range(len(revenues)):
        total += revenues[i]
        while k < len(milestones) and total >= milestones[k]:
            output[idx_map[milestones[k]]] = i + 1
            k += 1
    print(output)
    return output


revenues_1 = [100, 200, 300, 400, 500]
milestones_1 = [300, 800, 1000, 1400]
getMilestoneDays(revenues_1, milestones_1)

revenues_2 = [700, 800, 600, 400, 600, 700]
milestones_2 = [3100, 2200, 800, 2100, 1000]
getMilestoneDays(revenues_2, milestones_2)
