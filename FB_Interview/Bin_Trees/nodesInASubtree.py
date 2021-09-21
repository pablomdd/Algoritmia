import math
from collections import deque
# Add any extra import statements you may need here


class Node:
    def __init__(self, data):
        self.val = data
        self.children = []

# Add any helper functions you may need here


def searchSubtree(root, query, s):
    queue = deque()
    queue.append(root)
    count = 0
    while queue:
        for _ in range(len(queue)):
            node = queue.popleft()

            if s[node.val - 1] == query:
                count += 1

            for child in node.children:
                queue.append(child)
    return count


def count_of_nodes(root, queries, s):
    # Write your code here
    queue = deque()

    ans = []
    for query in queries:
        targetNode, targetQuery = query
        queue.append(root)
        subtree_done = False
        while queue:
            # know if we're in the subtree
            for _ in range(len(queue)):
                node = queue.popleft()

                if node.val == targetNode:
                    ans.append(searchSubtree(node, targetQuery, s))
                    subtree_done = True
                    break

                for child in node.children:
                    queue.append(child)
            if subtree_done:
                break
        queue.clear()
    return ans


if __name__ == "__main__":

    # Testcase 1
    n_1, q_1 = 3, 1
    s_1 = "aba"
    root_1 = Node(1)
    root_1.children.append(Node(2))
    root_1.children.append(Node(3))
    queries_1 = [(1, 'a'), (1, 'b')]

    output_1 = count_of_nodes(root_1, queries_1, s_1)
    # print(output_1)

    # Testcase 2
    n_2, q_2 = 7, 3
    s_2 = "abaacab"
    root_2 = Node(1)
    root_2.children.append(Node(2))
    root_2.children.append(Node(3))
    root_2.children.append(Node(7))
    root_2.children[0].children.append(Node(4))
    root_2.children[0].children.append(Node(5))
    root_2.children[1].children.append(Node(6))
    queries_2 = [(1, 'a'), (2, 'b'), (3, 'a')]
    output_2 = count_of_nodes(root_2, queries_2, s_2)
    print(output_2)
