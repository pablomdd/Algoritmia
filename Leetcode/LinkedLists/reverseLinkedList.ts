/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function reverseList(head: ListNode | null): ListNode | null {
    let prevNode:ListNode | null = null;
    
    while(head !== null){
        let nextNode: ListNode | null = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }
    
    return prevNode;
};