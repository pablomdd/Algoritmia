/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// Solution from EPI
var getIntersectionNode = function(headA, headB) {
    // get the lenghts of list: O(2n) => O(n)
    const [aLength, bLength] = [getListLength(headA), getListLength(headB)];
    
    if(aLength > bLength){
        [headA, headB] = [headB, headA];
    }
    // Traverse longer list 
    for(let i = 0; i < Math.abs(aLength - bLength); i++){
        headB = headB.next;
    }
    // Compare nodes until find intersection on completely traverse the lists
    // Worst: O(n)
    while(headA && headB && headA !== headB){
        headA = headA.next;
        headB = headB.next;
    }
    
    // If not intersected, then headA is null
    return headA;
};
// Summary:
// Time: O(3n) => O(n)
// Space: O(1)
// Two pointers technique

const getListLength = (head) => {
    let length = 0;
    while(head){
        head = head.next;
        length++;
    }
    return length;
}