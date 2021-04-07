// https://leetcode.com/problems/swap-nodes-in-pairs/
// 24. Swap Nodes in Pairs
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) {
        return head;
    }

    const swapNodes = (head) => {
        //      base case
        if (!head || !head.next)
            return head;
        //      swap
        const tempHead = head.next;
        head.next = head.next.next;
        tempHead.next = head;
        //     recursive call
        const returnedHead = swapNodes(tempHead.next.next);
        //         comeback -
        tempHead.next.next = returnedHead;
        return tempHead;
    }

    return swapNodes(head);
};