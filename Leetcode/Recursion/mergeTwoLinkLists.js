// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/* // iterative
var mergeTwoLists = function(l1, l2) {
   if(!l1 && !l2) return l1;
   
   const dummyHead = new ListNode();
   let iter = dummyHead;

   while(l1 && l2){
       if(l1.val <= l2.val){
           iter.next = l1;
           l1 = l1.next;
       } else {
           iter.next = l2;
           l2 = l2.next;
       }
       iter = iter.next;
   }
   while(l1){
       iter.next = l1;
       l1 = l1.next;
       iter = iter.next;
   }
   while(l2){
       iter.next = l2;
       l2 = l2.next;
       iter = iter.next;
   }
   return dummyHead.next;
};
*/
// recursively
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
